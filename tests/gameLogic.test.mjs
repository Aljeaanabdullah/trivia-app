import assert from 'node:assert/strict';
import { test } from 'node:test';

import { loadQuestionFiles, seededRng, src } from './helpers.mjs';

const { gameReducer, createGameState } = await src('features/game/gameReducer.ts');
const { selectQuestions, shuffleAnswers, shuffle } = await src('features/game/selectQuestions.ts');
const { GAME_CONFIG } = await src('features/game/config.ts');
const all = Object.values(await loadQuestionFiles()).flatMap((f) => f.questions);
const byCat = (id) => all.filter((q) => q.categoryId === id);

test('default game is five questions with a 20-second timer', () => {
  assert.equal(GAME_CONFIG.questionsPerGame, 5);
  assert.equal(GAME_CONFIG.secondsPerQuestion, 20);
});

test('shuffle is a permutation and does not mutate its input', () => {
  const input = [1, 2, 3, 4, 5, 6];
  const out = shuffle(input, seededRng(7));
  assert.deepEqual([...out].sort(), [...input].sort());
  assert.deepEqual(input, [1, 2, 3, 4, 5, 6]);
});

test('answer shuffling keeps the correct answer and EN/AR alignment for every question', () => {
  const rng = seededRng(1);
  for (const q of all) {
    for (let k = 0; k < 8; k++) {
      const p = shuffleAnswers(q, rng);
      assert.equal(p.answers.en[p.correctIndex], q.answers.en[q.correctIndex], q.id);
      assert.equal(p.answers.ar[p.correctIndex], q.answers.ar[q.correctIndex], q.id);
      p.answers.en.forEach((a, i) => assert.equal(p.answers.ar[i], q.answers.ar[q.answers.en.indexOf(a)], q.id));
    }
  }
});

test('the correct answer lands in every position over many shuffles', () => {
  const rng = seededRng(3);
  const seen = new Set(Array.from({ length: 200 }, () => shuffleAnswers(all[0], rng).correctIndex));
  assert.deepEqual([...seen].sort(), [0, 1, 2, 3]);
});

test('every category can produce a round of 5 unique questions', () => {
  const rng = seededRng(11);
  const cats = new Set(all.map((q) => q.categoryId));
  assert.equal(cats.size, 24);
  for (const cat of cats) {
    for (let k = 0; k < 20; k++) {
      const round = selectQuestions(byCat(cat), 5, { rng });
      assert.equal(round.length, 5);
      assert.equal(new Set(round.map((q) => q.id)).size, 5, `${cat} repeated a question`);
      assert.ok(round.every((q) => q.categoryId === cat));
    }
  }
});

test('recently played questions are avoided while enough fresh ones exist', () => {
  const pool = byCat('history');
  const rng = seededRng(5);
  for (let k = 0; k < 50; k++) {
    const first = selectQuestions(pool, 5, { rng });
    const second = selectQuestions(pool, 5, { rng, recentIds: first.map((q) => q.id) });
    assert.ok(second.every((q) => !first.some((p) => p.id === q.id)));
  }
  // Pool smaller than recent + round: falls back to recent questions instead of a short round.
  const tiny = pool.slice(0, 6);
  const round = selectQuestions(tiny, 5, { rng, recentIds: tiny.slice(0, 4).map((q) => q.id) });
  assert.equal(round.length, 5);
});

function playRound(answers) {
  const qs = selectQuestions(byCat('art'), 5, { rng: seededRng(9) });
  let s = createGameState(qs);
  answers.forEach((a, i) => {
    s =
      a === 'timeout'
        ? gameReducer(s, { type: 'timeout', questionIndex: i })
        : gameReducer(s, {
            type: 'answer',
            questionIndex: i,
            choiceIndex: a === 'right' ? qs[i].correctIndex : (qs[i].correctIndex + 1) % 4,
          });
    if (i < answers.length - 1) s = gameReducer(s, { type: 'next' });
  });
  return { s, qs };
}

test('scoring: +1 per correct answer, 0 for wrong or timeout', () => {
  const { s } = playRound(['right', 'wrong', 'timeout', 'right', 'right']);
  assert.equal(s.score, 3);
  assert.deepEqual(
    s.history.map((h) => h.correct),
    [true, false, false, true, true],
  );
  assert.equal(s.history[2].selectedIndex, null);
});

test('a perfect and a zero round', () => {
  assert.equal(playRound(Array(5).fill('right')).s.score, 5);
  assert.equal(playRound(Array(5).fill('timeout')).s.score, 0);
});

test('one answer per question: double taps, late timeouts and stale indices are ignored', () => {
  const qs = selectQuestions(byCat('music'), 5, { rng: seededRng(2) });
  let s = createGameState(qs);
  s = gameReducer(s, { type: 'answer', questionIndex: 0, choiceIndex: qs[0].correctIndex });
  const locked = s;
  assert.equal(gameReducer(s, { type: 'answer', questionIndex: 0, choiceIndex: qs[0].correctIndex }), locked);
  assert.equal(gameReducer(s, { type: 'answer', questionIndex: 0, choiceIndex: (qs[0].correctIndex + 1) % 4 }), locked);
  assert.equal(gameReducer(s, { type: 'timeout', questionIndex: 0 }), locked);
  s = gameReducer(s, { type: 'next' });
  assert.equal(gameReducer(s, { type: 'timeout', questionIndex: 0 }), s, 'timeout from previous question');
  assert.equal(gameReducer(s, { type: 'answer', questionIndex: 4, choiceIndex: 0 }), s, 'answer for a future question');
  assert.equal(gameReducer(s, { type: 'next' }), s, 'cannot skip without answering');
  assert.equal(s.score, 1);
});

test('round ends after the fifth question and reset starts a fresh round', () => {
  const { s } = playRound(Array(5).fill('right'));
  const done = gameReducer(s, { type: 'next' });
  assert.equal(done.phase, 'finished');
  assert.equal(gameReducer(done, { type: 'answer', questionIndex: 4, choiceIndex: 0 }), done);
  const again = gameReducer(done, { type: 'reset', questions: selectQuestions(byCat('art'), 5) });
  assert.equal(again.score, 0);
  assert.equal(again.index, 0);
  assert.equal(again.phase, 'answering');
  assert.equal(again.history.length, 0);
  assert.equal(again.round, done.round + 1);
});

test('an empty question list finishes immediately instead of crashing', () => {
  assert.equal(createGameState([]).phase, 'finished');
});
