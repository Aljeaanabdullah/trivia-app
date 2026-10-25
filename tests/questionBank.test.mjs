import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { test } from 'node:test';

import { loadQuestionFiles, ROOT, src } from './helpers.mjs';

const { CATEGORIES } = await src('data/categories.ts');
const files = await loadQuestionFiles();
const all = Object.values(files).flatMap((f) => f.questions);
const indexSource = readFileSync(path.join(ROOT, 'src/data/questions/index.ts'), 'utf8');
const ARABIC = /[؀-ۿ]/;

test('exactly the 24 course categories, with unique ids and bilingual titles', () => {
  assert.equal(CATEGORIES.length, 24);
  assert.equal(new Set(CATEGORIES.map((c) => c.id)).size, 24);
  for (const c of CATEGORIES) {
    assert.ok(c.name.en.trim() && ARABIC.test(c.name.ar), `${c.id} needs EN and AR names`);
    assert.match(c.color, /^#[0-9A-F]{6}$/i, `${c.id} color`);
    assert.ok(c.icon, `${c.id} icon`);
  }
});

test('every category has its own question file registered in the bank', () => {
  const byCategory = new Map();
  for (const [file, { exportName, questions }] of Object.entries(files)) {
    const cats = new Set(questions.map((q) => q.categoryId));
    assert.equal(cats.size, 1, `${file} mixes categories`);
    byCategory.set([...cats][0], questions.length);
    assert.ok(indexSource.includes(exportName), `${exportName} is not registered in questions/index.ts`);
  }
  for (const c of CATEGORIES) {
    assert.ok((byCategory.get(c.id) ?? 0) >= 15, `${c.id} has ${byCategory.get(c.id) ?? 0} questions (need >= 15)`);
  }
});

test('at least 360 bilingual questions in total', () => {
  assert.ok(all.length >= 360, `only ${all.length} questions`);
});

test('question ids are globally unique and prefixed consistently per category', () => {
  assert.equal(new Set(all.map((q) => q.id)).size, all.length, 'duplicate question id');
  const prefixes = new Map();
  for (const q of all) {
    const [prefix] = q.id.split('-');
    assert.match(q.id, /^[a-z]+-\d{3}$/, `bad id ${q.id}`);
    if (!prefixes.has(q.categoryId)) prefixes.set(q.categoryId, prefix);
    assert.equal(prefixes.get(q.categoryId), prefix, `${q.id} prefix differs from its category`);
  }
});

test('every question has EN + AR text and exactly four distinct answers per language', () => {
  for (const q of all) {
    assert.ok(q.question.en.trim(), `${q.id} EN question`);
    assert.ok(ARABIC.test(q.question.ar), `${q.id} AR question must be Arabic`);
    assert.ok(!ARABIC.test(q.question.en), `${q.id} EN question contains Arabic`);
    for (const lang of ['en', 'ar']) {
      const answers = q.answers[lang];
      assert.equal(answers.length, 4, `${q.id} ${lang} must have 4 answers`);
      assert.ok(answers.every((a) => a.trim()), `${q.id} ${lang} empty answer`);
      assert.equal(new Set(answers.map((a) => a.trim().toLowerCase())).size, 4, `${q.id} ${lang} duplicate answers`);
    }
    if (q.explanation) assert.ok(q.explanation.en.trim() && q.explanation.ar.trim(), `${q.id} explanation must be bilingual`);
  }
});

test('exactly one correct answer index per question', () => {
  for (const q of all) assert.ok([0, 1, 2, 3].includes(q.correctIndex), `${q.id} correctIndex`);
});

test('numeric answers are identical in both languages (translations stay aligned)', () => {
  for (const q of all) {
    q.answers.en.forEach((en, i) => {
      if (/^[\d.,\s%-]+$/.test(en)) assert.equal(q.answers.ar[i].trim(), en.trim(), `${q.id} answer ${i} misaligned`);
    });
  }
});

test('no duplicate questions across the whole bank', () => {
  const norm = (s) => s.toLowerCase().replace(/[^\p{L}\p{N}]+/gu, ' ').trim();
  for (const lang of ['en', 'ar']) {
    const seen = new Map();
    for (const q of all) {
      const key = norm(q.question[lang]);
      assert.ok(!seen.has(key), `${q.id} duplicates ${seen.get(key)} (${lang})`);
      seen.set(key, q.id);
    }
  }
});

test('the bank is fully offline: no URLs in question data', () => {
  for (const q of all) assert.ok(!/https?:\/\//.test(JSON.stringify(q)), `${q.id} contains a URL`);
});
