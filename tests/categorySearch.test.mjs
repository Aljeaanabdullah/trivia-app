import assert from 'node:assert/strict';
import { test } from 'node:test';

import { src } from './helpers.mjs';

const { CATEGORIES } = await src('data/categories.ts');
const { filterCategories, foldSearchText } = await src('features/categories/search.ts');
const ids = (q) => filterCategories(CATEGORIES, q).map((c) => c.id);

test('empty query returns all 24 categories', () => {
  assert.equal(ids('').length, 24);
  assert.equal(ids('   ').length, 24);
});

test('matches English case-insensitively', () => {
  assert.deepEqual(ids('GEOGRAPHY'), ['geography']);
  assert.ok(ids('entertainment').length >= 9);
});

test('matches Arabic with or without hamza and diacritics', () => {
  assert.deepEqual(ids('الأساطير'), ['mythology']);
  assert.deepEqual(ids('الاساطير'), ['mythology']);
  assert.equal(foldSearchText('مَعْلُومَات'), 'معلومات');
});

test('no match returns an empty list', () => {
  assert.deepEqual(ids('zzzz'), []);
});
