import assert from 'node:assert/strict';
import { test } from 'node:test';

import { src } from './helpers.mjs';

const otdb = await src('services/openTrivia.ts');
const { shuffleAnswers } = await src('features/game/selectQuestions.ts');
const { CATEGORIES } = await src('data/categories.ts');

const result = (n, extra = {}) => ({
  type: 'multiple',
  difficulty: 'medium',
  category: 'Geography',
  question: `Question ${n} &quot;quoted&quot; &amp; it&#039;s fine?`,
  correct_answer: `Right ${n}`,
  incorrect_answers: [`Wrong ${n}a`, `Wrong ${n}b`, `Wrong ${n}c`],
  ...extra,
});
const ok = (count = 5) => ({ response_code: 0, results: Array.from({ length: count }, (_, i) => result(i)) });
const target = { categoryId: 'geography', openTdbCategory: 22 };

/** Fake fetch + clock: records URLs and advances virtual time on sleep. */
function harness(responses) {
  const calls = [];
  let clock = 0;
  const sleeps = [];
  const queue = [...responses];
  const client = otdb.createOpenTriviaClient({
    now: () => clock,
    sleep: async (ms) => {
      sleeps.push(ms);
      clock += ms;
    },
    fetch: async (url) => {
      calls.push({ url, at: clock });
      if (url.includes('api_token.php')) return { ok: true, status: 200, json: async () => ({ response_code: 0, token: 'tok123' }) };
      const next = queue.shift();
      if (next instanceof Error) throw next;
      return { ok: true, status: 200, json: async () => next };
    },
  });
  return { client, calls, sleeps, questionCalls: () => calls.filter((c) => c.url.includes('api.php')) };
}

test('every category maps to its Open Trivia DB id (9–32)', () => {
  assert.deepEqual(
    CATEGORIES.map((c) => c.openTdbId),
    Array.from({ length: 24 }, (_, i) => 9 + i),
  );
});

test('request URL: 5 multiple-choice medium questions for the selected category', () => {
  assert.equal(
    otdb.buildQuestionsUrl({ openTdbCategory: 22 }),
    'https://opentdb.com/api.php?amount=5&type=multiple&category=22&difficulty=medium',
  );
  assert.equal(
    otdb.buildQuestionsUrl({ openTdbCategory: 9, token: 'abc' }),
    'https://opentdb.com/api.php?amount=5&type=multiple&category=9&difficulty=medium&token=abc',
  );
  assert.equal(
    otdb.buildQuestionsUrl({ openTdbCategory: 13, difficulty: null }),
    'https://opentdb.com/api.php?amount=5&type=multiple&category=13',
  );
});

test('decodes HTML entities', () => {
  assert.equal(otdb.decodeHtml('&quot;Hi&quot; &#039;there&#039; &amp; you'), `"Hi" 'there' & you`);
  assert.equal(otdb.decodeHtml('Pok&eacute;mon &ndash; caf&eacute; &#x27;x&#x27;'), "Pokémon – café 'x'");
  assert.equal(otdb.decodeHtml('&lt;b&gt; &hellip; &rsquo;s &deg;'), '<b> … ’s °');
  assert.equal(otdb.decodeHtml('&unknown; stays'), '&unknown; stays');
});

test('converts an API result: text, category, correct answer and three incorrect answers', () => {
  const q = otdb.toQuestion(result(1), 'geography');
  assert.equal(q.question.en, `Question 1 "quoted" & it's fine?`);
  assert.equal(q.categoryId, 'geography');
  assert.equal(q.answers.en[q.correctIndex], 'Right 1');
  assert.deepEqual(q.answers.en.slice(1), ['Wrong 1a', 'Wrong 1b', 'Wrong 1c']);
  assert.equal(q.source, 'opentdb');
  assert.match(q.id, /^otdb-/);
  assert.equal(otdb.toQuestion(result(1), 'geography').id, q.id, 'ids are stable');
});

test('rejects malformed or non multiple-choice results', () => {
  assert.equal(otdb.toQuestion(result(1, { type: 'boolean' }), 'geography'), null);
  assert.equal(otdb.toQuestion(result(1, { incorrect_answers: ['a', 'b'] }), 'geography'), null);
  assert.equal(otdb.toQuestion(result(1, { correct_answer: 'Wrong 1a' }), 'geography'), null, 'duplicate answers');
  assert.equal(otdb.toQuestion(result(1, { question: '   ' }), 'geography'), null);
});

test('the correct answer position is randomized when prepared for play', () => {
  const q = otdb.toQuestion(result(1), 'geography');
  const positions = new Set(Array.from({ length: 200 }, () => shuffleAnswers(q).correctIndex));
  assert.deepEqual([...positions].sort(), [0, 1, 2, 3]);
  for (let i = 0; i < 50; i++) {
    const p = shuffleAnswers(q);
    assert.equal(p.answers.en[p.correctIndex], 'Right 1');
  }
});

test('fetches 5 questions using a session token', async () => {
  const h = harness([ok()]);
  const qs = await h.client.fetchQuestions(target);
  assert.equal(qs.length, 5);
  assert.ok(qs.every((q) => q.categoryId === 'geography'));
  assert.ok(h.calls[0].url.includes('api_token.php?command=request'));
  assert.equal(h.questionCalls()[0].url, 'https://opentdb.com/api.php?amount=5&type=multiple&category=22&difficulty=medium&token=tok123');
  assert.equal(h.client.lastUrl, h.questionCalls()[0].url);
});

test('rate limit (code 5): waits at least 5 seconds and retries', async () => {
  const h = harness([{ response_code: 5, results: [] }, ok()]);
  const qs = await h.client.fetchQuestions(target);
  assert.equal(qs.length, 5);
  const [first, second] = h.questionCalls();
  assert.ok(second.at - first.at >= otdb.RATE_LIMIT_MS, `retried after ${second.at - first.at}ms`);
});

test('rate limit: gives up after the maximum number of attempts with a clear error', async () => {
  const h = harness(Array(10).fill({ response_code: 5, results: [] }));
  await assert.rejects(h.client.fetchQuestions(target), (e) => e.kind === 'rateLimit');
  assert.equal(h.questionCalls().length, otdb.MAX_ATTEMPTS);
});

test('consecutive games are spaced at least 5 seconds apart', async () => {
  const h = harness([ok(), ok()]);
  await h.client.fetchQuestions(target);
  await h.client.fetchQuestions(target);
  const [a, b] = h.questionCalls();
  assert.ok(b.at - a.at >= otdb.RATE_LIMIT_MS);
});

test('concurrent requests for the same category share one API call (no duplicates)', async () => {
  const h = harness([ok()]);
  const [a, b] = await Promise.all([h.client.fetchQuestions(target), h.client.fetchQuestions(target)]);
  assert.equal(a, b);
  assert.equal(h.questionCalls().length, 1);
});

test('not enough medium questions (code 1): retries the same category at any difficulty', async () => {
  const h = harness([{ response_code: 1, results: [] }, ok()]);
  const qs = await h.client.fetchQuestions(target);
  assert.equal(qs.length, 5);
  const urls = h.questionCalls().map((c) => c.url);
  assert.ok(urls[0].includes('difficulty=medium'));
  assert.ok(!urls[1].includes('difficulty='));
  assert.ok(urls[1].includes('category=22'));
});

test('empty results everywhere (code 1 twice) is reported as noResults', async () => {
  const h = harness([{ response_code: 1 }, { response_code: 1 }]);
  await assert.rejects(h.client.fetchQuestions(target), (e) => e.kind === 'noResults');
});

test('token exhausted (code 4): retries once without the token', async () => {
  const h = harness([{ response_code: 4, results: [] }, ok()]);
  await h.client.fetchQuestions(target);
  const urls = h.questionCalls().map((c) => c.url);
  assert.ok(urls[0].includes('token='));
  assert.ok(!urls[1].includes('token='));
});

test('network failure surfaces as a network error (no silent fallback)', async () => {
  const h = harness([new TypeError('Network request failed')]);
  await assert.rejects(h.client.fetchQuestions(target), (e) => e instanceof otdb.LiveQuestionsError && e.kind === 'network');
});

test('too few usable questions is an error, not a short round', async () => {
  const h = harness([ok(3)]);
  await assert.rejects(h.client.fetchQuestions(target), (e) => e.kind === 'server');
});
