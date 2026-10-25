import assert from 'node:assert/strict';
import { test } from 'node:test';

import { src } from './helpers.mjs';

const lb = await src('features/history/leaderboard.ts');

const rec = (id, playerId, score, completedAt, extra = {}) => ({
  id,
  playerId,
  playerName: playerId.toUpperCase(),
  categoryId: 'history',
  score,
  total: 5,
  questionIds: [`${id}-q1`, `${id}-q2`],
  completedAt,
  ...extra,
});

test('ranks by score, then accuracy, then most recent, then id', () => {
  const games = [
    rec('g1', 'a', 3, 100),
    rec('g2', 'b', 5, 50),
    rec('g3', 'c', 3, 300),
    rec('g4', 'd', 3, 100, { total: 4 }), // same score, better accuracy (75% vs 60%)
    rec('g0', 'e', 3, 100), // identical to g1 except id
  ];
  const order = lb.rankLeaderboard(games).map((e) => e.record.id);
  assert.deepEqual(order, ['g2', 'g4', 'g3', 'g0', 'g1']);
  assert.deepEqual(
    lb.rankLeaderboard(games).map((e) => e.rank),
    [1, 2, 3, 4, 5],
  );
});

test('ordering is deterministic regardless of input order', () => {
  const games = [rec('x1', 'a', 4, 10), rec('x2', 'b', 4, 10), rec('x3', 'c', 2, 99), rec('x4', 'd', 4, 20)];
  const expected = lb.rankLeaderboard(games).map((e) => e.record.id);
  for (let i = 0; i < 20; i++) {
    const shuffled = [...games].sort(() => Math.random() - 0.5);
    assert.deepEqual(lb.rankLeaderboard(shuffled).map((e) => e.record.id), expected);
  }
});

test('best-per-player keeps only each player’s top game', () => {
  const games = [rec('g1', 'a', 2, 1), rec('g2', 'a', 4, 2), rec('g3', 'b', 3, 3), rec('g4', 'a', 4, 1)];
  const best = lb.rankLeaderboard(games, { bestPerPlayer: true });
  assert.deepEqual(best.map((e) => e.record.id), ['g2', 'g3']);
});

test('filters by category', () => {
  const games = [rec('g1', 'a', 2, 1), rec('g2', 'b', 5, 2, { categoryId: 'art' })];
  assert.deepEqual(lb.rankLeaderboard(games, { categoryId: 'art' }).map((e) => e.record.id), ['g2']);
  assert.equal(lb.rankLeaderboard(games).length, 2);
});

test('saving the same game twice never counts the score twice', () => {
  const g = rec('g1', 'a', 5, 1);
  const once = lb.addRecord([], g);
  const twice = lb.addRecord(once, { ...g });
  assert.equal(twice.length, 1);
  assert.equal(twice, once, 'duplicate save returns the same history');
});

test('history is capped at the newest MAX_HISTORY games', () => {
  let history = [];
  for (let i = 0; i < lb.MAX_HISTORY + 25; i++) history = lb.addRecord(history, rec(`g${i}`, 'a', i % 6, i));
  assert.equal(history.length, lb.MAX_HISTORY);
  assert.equal(history[0].id, `g${lb.MAX_HISTORY + 24}`);
  assert.ok(!history.some((r) => r.id === 'g0'));
});

test('personal best ignores other players, categories and the excluded game', () => {
  const games = [rec('g1', 'a', 2, 1), rec('g2', 'a', 4, 2), rec('g3', 'b', 5, 3), rec('g4', 'a', 5, 4, { categoryId: 'art' })];
  assert.equal(lb.personalBest(games, 'a', 'history'), 4);
  assert.equal(lb.personalBest(games, 'a', 'history', 'g2'), 2);
  assert.equal(lb.personalBest(games, 'z', 'history'), undefined);
});

test('recent question ids come from the player’s latest games in that category', () => {
  const games = [rec('old', 'a', 1, 1), rec('mid', 'a', 1, 2), rec('new', 'a', 1, 3), rec('other', 'b', 1, 4)];
  assert.deepEqual(lb.recentQuestionIds(games, 'a', 'history', 2), ['new-q1', 'new-q2', 'mid-q1', 'mid-q2']);
});

test('performance tiers and accuracy', () => {
  assert.equal(lb.performanceFor(5, 5), 'perfect');
  assert.equal(lb.performanceFor(4, 5), 'great');
  assert.equal(lb.performanceFor(3, 5), 'good');
  assert.equal(lb.performanceFor(0, 5), 'low');
  assert.equal(lb.accuracyOf({ score: 3, total: 4 }), 0.75);
  assert.equal(lb.accuracyOf({ score: 0, total: 0 }), 0);
});
