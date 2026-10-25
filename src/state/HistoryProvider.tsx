import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from 'react';

import { addRecord } from '@/features/history/leaderboard';
import type { GameRecord } from '@/types/trivia';
import { readJSON, STORAGE_KEYS, writeJSON } from './storage';

interface HistoryContextValue {
  ready: boolean;
  games: GameRecord[];
  /** Idempotent: saving an id that already exists does nothing. */
  saveGame: (record: GameRecord) => void;
  getGame: (id: string) => GameRecord | undefined;
}

const HistoryContext = createContext<HistoryContextValue | null>(null);

function isRecord(r: unknown): r is GameRecord {
  const g = r as GameRecord;
  return (
    !!g &&
    typeof g.id === 'string' &&
    typeof g.playerId === 'string' &&
    typeof g.categoryId === 'string' &&
    Number.isFinite(g.score) &&
    Number.isFinite(g.total) &&
    Number.isFinite(g.completedAt)
  );
}

export function HistoryProvider({ children }: { children: ReactNode }) {
  const [games, setGames] = useState<GameRecord[]>([]);
  const [ready, setReady] = useState(false);
  const latest = useRef<GameRecord[]>([]);

  useEffect(() => {
    let cancelled = false;
    readJSON<unknown>(STORAGE_KEYS.history, []).then((saved) => {
      if (cancelled) return;
      const clean = Array.isArray(saved)
        ? saved.filter(isRecord).map((g) => ({ ...g, questionIds: Array.isArray(g.questionIds) ? g.questionIds : [] }))
        : [];
      latest.current = clean;
      setGames(clean);
      setReady(true);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const saveGame = useCallback((record: GameRecord) => {
    const next = addRecord(latest.current, record);
    if (next === latest.current) return;
    latest.current = next;
    setGames(next);
    writeJSON(STORAGE_KEYS.history, next);
  }, []);

  const value = useMemo<HistoryContextValue>(
    () => ({ ready, games, saveGame, getGame: (id) => games.find((g) => g.id === id) }),
    [ready, games, saveGame],
  );

  return <HistoryContext.Provider value={value}>{children}</HistoryContext.Provider>;
}

export function useHistory() {
  const ctx = useContext(HistoryContext);
  if (!ctx) throw new Error('useHistory must be used inside HistoryProvider');
  return ctx;
}
