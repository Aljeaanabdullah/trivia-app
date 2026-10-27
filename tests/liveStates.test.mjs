import assert from 'node:assert/strict';
import { test } from 'node:test';

import { src } from './helpers.mjs';

const { liveLoadReducer, initialLiveLoadState } = await src('features/game/liveLoadState.ts');
const { LIVE_QUESTION_COUNT, LiveQuestionsError } = await src('services/openTrivia.ts');
const sim = await src('services/liveSimulation.ts');
const { en } = await src('i18n/en.ts');
const { ar } = await src('i18n/ar.ts');

const fiveQuestions = Array.from({ length: LIVE_QUESTION_COUNT }, (_, i) => ({ id: `q${i}` }));

// ---- The three faces: Loading, Error, Empty ----

test('starts in Loading', () => {
  assert.deepEqual(initialLiveLoadState, { status: 'loading' });
});

test('Loading -> Ready only with all 5 questions', () => {
  const s = liveLoadReducer(initialLiveLoadState, { type: 'loaded', questions: fiveQuestions });
  assert.equal(s.status, 'ready');
  assert.equal(s.questions.length, 5);
});

test('fewer than 5 questions never starts a game: Loading -> Empty', () => {
  for (const n of [0, 1, 4]) {
    const s = liveLoadReducer(initialLiveLoadState, { type: 'loaded', questions: fiveQuestions.slice(0, n) });
    assert.deepEqual(s, { status: 'empty' }, `${n} questions`);
  }
});

test('request failures -> Error with the failure kind', () => {
  for (const kind of ['network', 'timeout', 'rateLimit', 'server']) {
    assert.deepEqual(liveLoadReducer(initialLiveLoadState, { type: 'failed', kind }), { status: 'error', kind });
  }
});

test('no / too few questions from the API -> Empty (distinct from Error)', () => {
  assert.deepEqual(liveLoadReducer(initialLiveLoadState, { type: 'failed', kind: 'empty' }), { status: 'empty' });
});

test('Try Again from Error or Empty returns to Loading', () => {
  const error = { status: 'error', kind: 'network' };
  assert.deepEqual(liveLoadReducer(error, { type: 'retry' }), { status: 'loading' });
  assert.deepEqual(liveLoadReducer({ status: 'empty' }, { type: 'retry' }), { status: 'loading' });
});

test('Try Again while already loading or playing does nothing (no duplicate requests)', () => {
  assert.equal(liveLoadReducer(initialLiveLoadState, { type: 'retry' }), initialLiveLoadState);
  const ready = { status: 'ready', questions: fiveQuestions };
  assert.equal(liveLoadReducer(ready, { type: 'retry' }), ready);
});

test('late results after leaving Loading are ignored', () => {
  const error = { status: 'error', kind: 'network' };
  assert.equal(liveLoadReducer(error, { type: 'loaded', questions: fiveQuestions }), error);
  const ready = { status: 'ready', questions: fiveQuestions };
  assert.equal(liveLoadReducer(ready, { type: 'failed', kind: 'network' }), ready);
});

// ---- User-facing text ----

test('required messages, in English and Arabic', () => {
  assert.equal(en.loadingLive, 'Loading your questions…');
  assert.equal(en.liveErrors.network, 'No internet connection. Please try again.');
  assert.equal(en.emptyTitle, 'No questions found for this category.');
  assert.equal(en.tryAgain, 'Try Again');
  assert.equal(en.chooseAnotherCategory, 'Choose Another Category');
  for (const key of ['loadingLive', 'loadingLiveHint', 'liveErrorTitle', 'emptyTitle', 'emptyHint', 'tryAgain', 'chooseAnotherCategory']) {
    assert.ok(/[؀-ۿ]/.test(ar[key]), `ar.${key}`);
  }
  assert.deepEqual(Object.keys(ar.liveErrors).sort(), Object.keys(en.liveErrors).sort());
});

// ---- Dev-only simulations used to demonstrate the states ----

test('simulations are ignored outside development builds', () => {
  for (const s of sim.SIMULATIONS) {
    assert.equal(sim.parseSimulation(s, false), null);
    assert.equal(sim.parseSimulation(s, true), s);
  }
  assert.equal(sim.parseSimulation('bogus', true), null);
  assert.equal(sim.parseSimulation(undefined, true), null);
});

const target = { categoryId: 'geography', openTdbCategory: 22 };
const tokenOk = { ok: true, status: 200, json: async () => ({ response_code: 0, token: 't' }) };
const fiveResults = {
  response_code: 0,
  results: Array.from({ length: 5 }, (_, i) => ({
    type: 'multiple',
    difficulty: 'medium',
    category: 'Geography',
    question: `Q${i}?`,
    correct_answer: `R${i}`,
    incorrect_answers: [`W${i}a`, `W${i}b`, `W${i}c`],
  })),
};
const fakeNetwork = async (url) => (url.includes('api_token') ? tokenOk : { ok: true, status: 200, json: async () => fiveResults });

test('simulate=error behaves like a lost connection (Error face)', async () => {
  const client = sim.createSimulatedClient('error', fakeNetwork);
  await assert.rejects(client.fetchQuestions(target), (e) => e instanceof LiveQuestionsError && e.kind === 'network');
});

test('simulate=empty yields no questions after the permitted retries (Empty face)', async () => {
  const client = sim.createSimulatedClient('empty', fakeNetwork);
  await assert.rejects(client.fetchQuestions(target), (e) => e.kind === 'empty');
});

test('simulate=ratelimit gets code 5 first, waits >= 5 s, then loads 5 questions', async () => {
  const started = Date.now();
  const client = sim.createSimulatedClient('ratelimit', fakeNetwork);
  const qs = await client.fetchQuestions(target);
  assert.equal(qs.length, 5);
  assert.ok(Date.now() - started >= 4900, `waited ${Date.now() - started}ms`);
});
