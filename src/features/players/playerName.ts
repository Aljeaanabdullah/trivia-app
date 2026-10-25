import type { Player } from '@/types/trivia';

export const NAME_MIN = 2;
export const NAME_MAX = 20;

export type NameError = 'required' | 'tooShort' | 'tooLong' | 'invalid' | 'taken';

// Latin (incl. accents), Arabic (incl. presentation forms and Arabic-Indic
// digits), digits, spaces and a few name punctuation marks. Explicit ranges
// instead of \p{L} keep this safe on every JS engine.
const ALLOWED = /^[A-Za-z0-9À-ɏ؀-ۿݐ-ݿࢠ-ࣿﭐ-﷿ﹰ-﻿ .'’-]+$/;
const HAS_LETTER = /[A-Za-zÀ-ɏؠ-يٮ-ۓۺ-ۿݐ-ݿࢠ-ࣿﭐ-﷿ﹰ-﻿]/;

/** Trims, collapses inner whitespace and applies Unicode NFC so equal names compare equal. */
export function normalizeName(raw: string): string {
  return raw.normalize('NFC').replace(/\s+/g, ' ').trim();
}

/** Case-insensitive identity key used to prevent duplicate players. */
export function nameKey(name: string): string {
  return normalizeName(name).toLowerCase();
}

/** Length in user-visible characters (code points), not UTF-16 units. */
export const nameLength = (name: string) => [...name].length;

/**
 * Validates a display name. `existing` is checked for duplicates, ignoring the
 * player being renamed (`ignoreId`).
 */
export function validateName(raw: string, existing: readonly Player[] = [], ignoreId?: string): NameError | null {
  const name = normalizeName(raw);
  if (!name) return 'required';
  const length = nameLength(name);
  if (length < NAME_MIN) return 'tooShort';
  if (length > NAME_MAX) return 'tooLong';
  if (!ALLOWED.test(name) || !HAS_LETTER.test(name)) return 'invalid';
  const key = nameKey(name);
  if (existing.some((p) => p.id !== ignoreId && nameKey(p.name) === key)) return 'taken';
  return null;
}

export function findPlayerByName(players: readonly Player[], raw: string): Player | undefined {
  const key = nameKey(raw);
  return players.find((p) => nameKey(p.name) === key);
}
