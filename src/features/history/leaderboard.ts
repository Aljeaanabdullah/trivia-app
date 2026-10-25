import type { CategoryId, GameRecord } from '@/types/trivia';

export const MAX_HISTORY = 500;

export const accuracyOf = (r: Pick<GameRecord, 'score' | 'total'>) => (r.total > 0 ? r.score / r.total : 0);

/**
 * Leaderboard order: highest score, then best accuracy, then the most recent
 * achievement; the id is a final tie-break so the order is fully deterministic.
 */
export function compareRecords(a: GameRecord, b: GameRecord): number {
  return (
    b.score - a.score ||
    accuracyOf(b) - accuracyOf(a) ||
    b.completedAt - a.completedAt ||
    (a.id < b.id ? -1 : a.id > b.id ? 1 : 0)
  );
}

export interface LeaderboardEntry {
  rank: number;
  record: GameRecord;
}

export interface LeaderboardOptions {
  categoryId?: CategoryId;
  /** Keep only each player's best game. */
  bestPerPlayer?: boolean;
  limit?: number;
}

export function rankLeaderboard(history: readonly GameRecord[], options: LeaderboardOptions = {}): LeaderboardEntry[] {
  const { categoryId, bestPerPlayer = false, limit = 100 } = options;
  let records = history.filter((r) => !categoryId || r.categoryId === categoryId);
  records = [...records].sort(compareRecords);
  if (bestPerPlayer) {
    const seen = new Set<string>();
    records = records.filter((r) => (seen.has(r.playerId) ? false : (seen.add(r.playerId), true)));
  }
  return records.slice(0, limit).map((record, i) => ({ rank: i + 1, record }));
}

/**
 * Adds a finished game. Saving the same game id twice is a no-op, so a score
 * can never be counted twice. Keeps the newest MAX_HISTORY games.
 */
export function addRecord(history: readonly GameRecord[], record: GameRecord): GameRecord[] {
  if (history.some((r) => r.id === record.id)) return history as GameRecord[];
  const next = [record, ...history].sort((a, b) => b.completedAt - a.completedAt);
  return next.slice(0, MAX_HISTORY);
}

/** Best score for a player in a category, optionally ignoring one game (e.g. the one just played). */
export function personalBest(
  history: readonly GameRecord[],
  playerId: string,
  categoryId: CategoryId,
  excludeId?: string,
): number | undefined {
  let best: number | undefined;
  for (const r of history) {
    if (r.playerId !== playerId || r.categoryId !== categoryId || r.id === excludeId) continue;
    if (best === undefined || r.score > best) best = r.score;
  }
  return best;
}

/** Question ids from a player's last few games in a category, so new rounds can avoid them. */
export function recentQuestionIds(
  history: readonly GameRecord[],
  playerId: string,
  categoryId: CategoryId,
  games = 2,
): string[] {
  return history
    .filter((r) => r.playerId === playerId && r.categoryId === categoryId)
    .sort((a, b) => b.completedAt - a.completedAt)
    .slice(0, games)
    .flatMap((r) => r.questionIds);
}

export function gamesPlayedBy(history: readonly GameRecord[], playerId: string): number {
  return history.reduce((n, r) => (r.playerId === playerId ? n + 1 : n), 0);
}

export type Performance = 'perfect' | 'great' | 'good' | 'low';

export function performanceFor(score: number, total: number): Performance {
  const acc = total > 0 ? score / total : 0;
  if (acc === 1) return 'perfect';
  if (acc >= 0.8) return 'great';
  if (acc >= 0.5) return 'good';
  return 'low';
}
