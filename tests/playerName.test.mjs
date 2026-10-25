import assert from 'node:assert/strict';
import { test } from 'node:test';

import { src } from './helpers.mjs';

const { validateName, normalizeName, nameKey, findPlayerByName, NAME_MAX } = await src('features/players/playerName.ts');
const players = [
  { id: 'p1', name: 'Sara', createdAt: 1 },
  { id: 'p2', name: 'عبدالله', createdAt: 2 },
];

test('names are trimmed and inner whitespace collapsed', () => {
  assert.equal(normalizeName('   Abdullah    Al  Jeaan  '), 'Abdullah Al Jeaan');
  assert.equal(normalizeName('\tعبدالله\n'), 'عبدالله');
});

test('required, length and character rules', () => {
  assert.equal(validateName(''), 'required');
  assert.equal(validateName('    '), 'required');
  assert.equal(validateName('A'), 'tooShort');
  assert.equal(validateName('x'.repeat(NAME_MAX + 1)), 'tooLong');
  assert.equal(validateName('x'.repeat(NAME_MAX)), null);
  assert.equal(validateName('Al'), null);
  assert.equal(validateName('<script>'), 'invalid');
  assert.equal(validateName('12345'), 'invalid', 'must contain a letter');
  assert.equal(validateName('\u{1F600}\u{1F600}'), 'invalid');
});

test('accepts Arabic, English, accented and mixed names', () => {
  for (const ok of ['Abdullah', 'عبدالله الجعان', 'Zoë', 'O’Neil', "O'Neil", 'Jean-Luc', 'Ali 2', 'أحمد Ahmed']) {
    assert.equal(validateName(ok), null, ok);
  }
});

test('duplicates are detected case- and space-insensitively, except for the player being renamed', () => {
  assert.equal(validateName('  sara ', players), 'taken');
  assert.equal(validateName('عبدالله', players), 'taken');
  assert.equal(validateName('SARA', players, 'p1'), null, 'renaming Sara to SARA is allowed');
  assert.equal(nameKey(' SARA  '), nameKey('sara'));
  assert.equal(findPlayerByName(players, 'SARA ')?.id, 'p1');
});

test('Arabic length counts characters, not UTF-16 units', () => {
  assert.equal(validateName('عل'), null);
  assert.equal(validateName('ع'), 'tooShort');
});
