import assert from 'node:assert/strict';
import { test } from 'node:test';

import { src } from './helpers.mjs';

const ai = await src('services/openRouter.ts');
const { shuffleAnswers } = await src('features/game/selectQuestions.ts');

const FAKE_KEY = 'sk-or-v1-test-0000000000000000000000000000000000000000';
const MODEL = 'nvidia/nemotron-3-ultra-550b-a55b:free';

const fiveQuestions = (correctIndexes = [0, 1, 2, 3, 0]) => ({
  questions: correctIndexes.map((ci, i) => ({
    question: `Question number ${i + 1}?`,
    answers: [`A${i}`, `B${i}`, `C${i}`, `D${i}`],
    correctIndex: ci,
  })),
});
const reply = (content, status = 200) => ({
  ok: status >= 200 && status < 300,
  status,
  json: async () => (status >= 400 ? { error: { code: status, message: 'nope' } } : { choices: [{ message: { content } }] }),
});

function client(responder, opts = {}) {
  const calls = [];
  const c = ai.createOpenRouterClient({
    apiKey: FAKE_KEY,
    model: MODEL,
    ...opts,
    fetch: async (url, init) => {
      calls.push({ url, init, body: JSON.parse(init.body) });
      return responder(calls.length);
    },
  });
  return { c, calls };
}

// ---- Request ----

test('one POST to OpenRouter chat completions with a :free model, system + user prompt', async () => {
  const { c, calls } = client(() => reply(JSON.stringify(fiveQuestions())));
  const qs = await c.generate('Volcanoes', 'en');
  assert.equal(qs.length, 5);
  assert.equal(calls.length, 1, 'exactly one request per game');
  assert.equal(calls[0].url, 'https://openrouter.ai/api/v1/chat/completions');
  assert.equal(calls[0].init.method, 'POST');
  assert.equal(calls[0].init.headers.Authorization, `Bearer ${FAKE_KEY}`);
  assert.equal(calls[0].body.model, MODEL);
  assert.deepEqual(calls[0].body.messages.map((m) => m.role), ['system', 'user']);
  assert.equal(calls[0].body.messages[1].content, 'Topic: Volcanoes');
  // Reasoning off so free "thinking" models don't spend the token budget before the JSON.
  assert.deepEqual(calls[0].body.reasoning, { enabled: false });
});

test('system prompt contains every required rule', () => {
  const p = ai.buildSystemPrompt('en');
  for (const rule of [
    'exactly 5',
    'exactly 4 answer options: 1 correct answer and 3',
    'factually accurate',
    'in English',
    'No duplicate',
    'Do not add explanations',
    'ONLY valid JSON',
    '"correctIndex"',
    'different positions',
  ]) {
    assert.ok(p.includes(rule), `missing rule: ${rule}`);
  }
  assert.ok(ai.buildSystemPrompt('ar').includes('Modern Standard Arabic'));
});

test('quiz language follows the topic, else the interface language', () => {
  assert.equal(ai.quizLanguage('البراكين', 'en'), 'ar');
  assert.equal(ai.quizLanguage('Volcanoes', 'ar'), 'en');
  assert.equal(ai.quizLanguage('1990', 'ar'), 'ar');
  assert.equal(ai.quizLanguage('1990', 'en'), 'en');
});

test('topics are trimmed and length-checked', () => {
  assert.equal(ai.cleanTopic('   Ancient   Egypt  '), 'Ancient Egypt');
  assert.equal(ai.cleanTopic('a'), null);
  assert.equal(ai.cleanTopic('x'.repeat(ai.TOPIC_MAX + 1)), null);
});

test('only free models are allowed', async () => {
  assert.equal(ai.isFreeModel(MODEL), true);
  assert.equal(ai.isFreeModel('openai/gpt-4o'), false);
  const { c, calls } = client(() => reply('{}'), { model: 'openai/gpt-4o' });
  await assert.rejects(c.generate('Space', 'en'), (e) => e.kind === 'paidModel');
  assert.equal(calls.length, 0, 'no request is sent for a paid model');
});

test('missing API key fails fast without a request', async () => {
  const { c, calls } = client(() => reply('{}'), { apiKey: null });
  await assert.rejects(c.generate('Space', 'en'), (e) => e.kind === 'missingKey');
  assert.equal(calls.length, 0);
});

// ---- Response handling ----

test('accepts JSON wrapped in code fences or extra text', async () => {
  const raw = 'Sure! Here are your questions:\n```json\n' + JSON.stringify(fiveQuestions()) + '\n```\nEnjoy!';
  const { c } = client(() => reply(raw));
  const qs = await c.generate('Space', 'en');
  assert.equal(qs.length, 5);
  assert.ok(qs.every((q) => q.source === 'ai' && q.categoryId === 'ai-quiz'));
});

test('accepts a bare array of questions', () => {
  assert.equal(ai.validateAiQuestions(fiveQuestions().questions).length, 5);
});

test('invalid JSON reply -> invalidResponse (no crash), with the HTTP status', async () => {
  const { c } = client(() => reply('I cannot help with that {not json'));
  await assert.rejects(c.generate('Space', 'en'), (e) => e.kind === 'invalidResponse' && e.status === 200);
});

test('empty reply -> invalidResponse', async () => {
  const { c } = client(() => reply(''));
  await assert.rejects(c.generate('Space', 'en'), (e) => e.kind === 'invalidResponse');
});

test('rejects anything but exactly 5 complete questions', () => {
  const bad = [
    { questions: fiveQuestions().questions.slice(0, 4) },
    { questions: [...fiveQuestions().questions, fiveQuestions().questions[0]] },
    { questions: fiveQuestions().questions.map((q, i) => (i === 2 ? { ...q, answers: ['a', 'b', 'c'] } : q)) },
    { questions: fiveQuestions().questions.map((q, i) => (i === 1 ? { ...q, answers: ['a', 'a', 'b', 'c'] } : q)) },
    { questions: fiveQuestions().questions.map((q, i) => (i === 0 ? { ...q, correctIndex: 4 } : q)) },
    { questions: fiveQuestions().questions.map((q, i) => (i === 0 ? { ...q, correctIndex: 'x' } : q)) },
    { questions: fiveQuestions().questions.map((q, i) => (i === 3 ? { ...q, question: '' } : q)) },
    { questions: fiveQuestions().questions.map((q, i) => (i === 4 ? { ...q, question: 'Question number 1?' } : q)) },
    { nothing: true },
  ];
  for (const payload of bad) assert.throws(() => ai.validateAiQuestions(payload), (e) => e.kind === 'invalidResponse');
});

test('the correct answer is always one of the four choices', () => {
  for (const q of ai.validateAiQuestions(fiveQuestions([3, 2, 1, 0, 2]))) {
    assert.ok(q.answers.en.includes(q.answers.en[q.correctIndex]));
  }
});

test('the correct answer does not always sit in the same position', () => {
  // Even if the model always used index 0, shuffling at game start moves it around.
  const qs = ai.validateAiQuestions(fiveQuestions([0, 0, 0, 0, 0]));
  const positions = new Set();
  for (let round = 0; round < 40; round++) for (const q of qs) positions.add(shuffleAnswers(q).correctIndex);
  assert.deepEqual([...positions].sort(), [0, 1, 2, 3]);
});

// ---- HTTP errors ----

for (const [status, kind] of [
  [401, 'unauthorized'],
  [402, 'credits'],
  [404, 'notFound'],
  [400, 'notFound'],
  [429, 'rateLimit'],
  [500, 'server'],
]) {
  test(`HTTP ${status} -> ${kind} with the status code`, async () => {
    const { c } = client(() => reply('', status));
    await assert.rejects(c.generate('Space', 'en'), (e) => e.kind === kind && e.status === status);
  });
}

test('an error object inside a 200 response is reported', async () => {
  const { c } = client(() => ({ ok: true, status: 200, json: async () => ({ error: { code: 429, message: 'rate limited' } }) }));
  await assert.rejects(c.generate('Space', 'en'), (e) => e.kind === 'rateLimit' && e.status === 429);
});

test('network failure -> network error', async () => {
  const c = ai.createOpenRouterClient({ apiKey: FAKE_KEY, model: MODEL, fetch: () => Promise.reject(new TypeError('offline')) });
  await assert.rejects(c.generate('Space', 'en'), (e) => e.kind === 'network');
});

test('the API key never appears in error messages', async () => {
  for (const status of [401, 402, 404, 429, 500]) {
    const { c } = client(() => reply('', status));
    await assert.rejects(c.generate('Space', 'en'), (e) => !String(e.message).includes(FAKE_KEY) && !String(e.stack).includes(FAKE_KEY));
  }
});

// ---- Rounds ----

test('identical concurrent requests share one API call', async () => {
  const { c, calls } = client(() => reply(JSON.stringify(fiveQuestions())));
  const [a, b] = await Promise.all([c.generate('Space', 'en'), c.generate('  space ', 'en')]);
  assert.equal(a, b);
  assert.equal(calls.length, 1);
});

test('five consecutive rounds each send one request and get 5 questions', async () => {
  const { c, calls } = client((n) =>
    reply(JSON.stringify({ questions: fiveQuestions().questions.map((q) => ({ ...q, question: `${q.question} round ${n}` })) })),
  );
  for (let round = 1; round <= 5; round++) {
    const qs = await c.generate('Planets', 'en');
    assert.equal(qs.length, 5);
    assert.ok(qs[0].question.en.endsWith(`round ${round}`));
  }
  assert.equal(calls.length, 5);
});
