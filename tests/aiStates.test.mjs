import assert from 'node:assert/strict';
import { test } from 'node:test';

import { src } from './helpers.mjs';

const { aiLoadReducer, initialAiLoadState } = await src('features/ai/aiLoadState.ts');
const { getCategory, aiCategoryFor, categoryTitle, CATEGORIES } = await src('data/categories.ts');
const { en } = await src('i18n/en.ts');
const { ar } = await src('i18n/ar.ts');

const five = Array.from({ length: 5 }, (_, i) => ({ id: `ai-${i}` }));

test('AI Quiz starts in Loading', () => {
  assert.deepEqual(initialAiLoadState, { status: 'loading' });
});

test('Loading -> Ready only with exactly 5 questions; anything else is Invalid', () => {
  assert.equal(aiLoadReducer(initialAiLoadState, { type: 'loaded', questions: five }).status, 'ready');
  for (const n of [0, 4, 6]) {
    const qs = Array.from({ length: n }, (_, i) => ({ id: `q${i}` }));
    assert.deepEqual(aiLoadReducer(initialAiLoadState, { type: 'loaded', questions: qs }), { status: 'invalid' });
  }
});

test('HTTP failures -> Error with the status code (401, 402, 404, 429)', () => {
  for (const [kind, httpStatus] of [
    ['unauthorized', 401],
    ['credits', 402],
    ['notFound', 404],
    ['rateLimit', 429],
  ]) {
    assert.deepEqual(aiLoadReducer(initialAiLoadState, { type: 'failed', kind, httpStatus }), { status: 'error', kind, httpStatus });
  }
});

test('unreadable AI reply -> Invalid Response screen (keeps the status)', () => {
  assert.deepEqual(aiLoadReducer(initialAiLoadState, { type: 'failed', kind: 'invalidResponse', httpStatus: 200 }), {
    status: 'invalid',
    httpStatus: 200,
  });
});

test('Try again from Error or Invalid returns to Loading; ignored elsewhere', () => {
  assert.deepEqual(aiLoadReducer({ status: 'error', kind: 'network' }, { type: 'retry' }), { status: 'loading' });
  assert.deepEqual(aiLoadReducer({ status: 'invalid' }, { type: 'retry' }), { status: 'loading' });
  assert.equal(aiLoadReducer(initialAiLoadState, { type: 'retry' }), initialAiLoadState);
});

test('AI category is resolvable but never added to the 24-category grid', () => {
  assert.equal(CATEGORIES.length, 24);
  assert.ok(!CATEGORIES.some((c) => c.id === 'ai-quiz'));
  assert.equal(getCategory('ai-quiz').id, 'ai-quiz');
  assert.equal(categoryTitle(aiCategoryFor('Volcanoes'), 'en'), 'AI Quiz: Volcanoes');
});

test('AI Quiz text exists in English and Arabic, including every error', () => {
  assert.equal(en.quizMe, 'Quiz me');
  assert.equal(ar.aiLoading, 'الذكاء الاصطناعي يكتب أسئلتك…');
  assert.deepEqual(Object.keys(ar.aiErrors).sort(), Object.keys(en.aiErrors).sort());
  for (const kind of ['missingKey', 'paidModel', 'unauthorized', 'credits', 'notFound', 'rateLimit', 'server', 'network', 'timeout', 'invalidResponse']) {
    assert.ok(en.aiErrors[kind] && ar.aiErrors[kind], kind);
  }
  assert.equal(en.httpCode(429), 'HTTP 429');
});
