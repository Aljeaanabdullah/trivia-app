import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from 'react';

import { findPlayerByName, normalizeName, validateName, type NameError } from '@/features/players/playerName';
import type { Player } from '@/types/trivia';
import { createId } from '@/utils/id';
import { readJSON, STORAGE_KEYS, writeJSON } from './storage';

interface PlayerState {
  players: Player[];
  activeId: string | null;
}

export type PlayerResult = { ok: true; player: Player } | { ok: false; error: NameError };

interface PlayerContextValue extends PlayerState {
  ready: boolean;
  activePlayer: Player | null;
  /** Selects an existing player with the same name, or creates a new one. */
  enterName: (name: string) => PlayerResult;
  renamePlayer: (id: string, name: string) => PlayerResult;
  selectPlayer: (id: string) => void;
}

const PlayerContext = createContext<PlayerContextValue | null>(null);

function sanitize(saved: Partial<PlayerState> | null): PlayerState {
  const players = Array.isArray(saved?.players)
    ? saved.players.filter((p): p is Player => typeof p?.id === 'string' && typeof p?.name === 'string')
    : [];
  const activeId = players.some((p) => p.id === saved?.activeId) ? (saved?.activeId ?? null) : null;
  return { players, activeId };
}

export function PlayerProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<PlayerState>({ players: [], activeId: null });
  const [ready, setReady] = useState(false);
  // Synchronous mirror so two rapid submissions see each other's result and never create duplicates.
  const latest = useRef(state);

  useEffect(() => {
    let cancelled = false;
    readJSON<Partial<PlayerState> | null>(STORAGE_KEYS.players, null).then((saved) => {
      if (cancelled) return;
      const clean = sanitize(saved);
      latest.current = clean;
      setState(clean);
      setReady(true);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const commit = useCallback((next: PlayerState) => {
    latest.current = next;
    setState(next);
    writeJSON(STORAGE_KEYS.players, next);
  }, []);

  const enterName = useCallback(
    (raw: string): PlayerResult => {
      const current = latest.current;
      const existing = findPlayerByName(current.players, raw);
      if (existing) {
        commit({ ...current, activeId: existing.id });
        return { ok: true, player: existing };
      }
      const error = validateName(raw, current.players);
      if (error) return { ok: false, error };
      const player: Player = { id: createId('p'), name: normalizeName(raw), createdAt: Date.now() };
      commit({ players: [...current.players, player], activeId: player.id });
      return { ok: true, player };
    },
    [commit],
  );

  const renamePlayer = useCallback(
    (id: string, raw: string): PlayerResult => {
      const current = latest.current;
      const error = validateName(raw, current.players, id);
      if (error) return { ok: false, error };
      const name = normalizeName(raw);
      const players = current.players.map((p) => (p.id === id ? { ...p, name } : p));
      const player = players.find((p) => p.id === id);
      if (!player) return { ok: false, error: 'required' };
      commit({ ...current, players });
      return { ok: true, player };
    },
    [commit],
  );

  const selectPlayer = useCallback(
    (id: string) => {
      const current = latest.current;
      if (current.players.some((p) => p.id === id)) commit({ ...current, activeId: id });
    },
    [commit],
  );

  const value = useMemo<PlayerContextValue>(
    () => ({
      ...state,
      ready,
      activePlayer: state.players.find((p) => p.id === state.activeId) ?? null,
      enterName,
      renamePlayer,
      selectPlayer,
    }),
    [state, ready, enterName, renamePlayer, selectPlayer],
  );

  return <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>;
}

export function usePlayers() {
  const ctx = useContext(PlayerContext);
  if (!ctx) throw new Error('usePlayers must be used inside PlayerProvider');
  return ctx;
}
