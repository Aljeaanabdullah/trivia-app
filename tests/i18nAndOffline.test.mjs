import assert from 'node:assert/strict';
import { execSync } from 'node:child_process';
import { readdirSync, readFileSync, statSync } from 'node:fs';
import path from 'node:path';
import { test } from 'node:test';

import { ROOT, src } from './helpers.mjs';

const { en } = await src('i18n/en.ts');
const { ar } = await src('i18n/ar.ts');
const ARABIC = /[؀-ۿ]/;
// Strings that intentionally stay Latin in Arabic mode.
const LATIN_OK = new Set(['appName', 'languageEnglish']);

/** Calls string builders with sample arguments (names as text, counts as numbers). */
const sample = (v) => (typeof v === 'function' ? v(...Array.from({ length: v.length }, (_, i) => (i === 0 ? 3 : 5))) : v);

test('Arabic translation has exactly the same keys as English', () => {
  const keys = (o) => Object.keys(o).sort();
  assert.deepEqual(keys(ar), keys(en));
  assert.deepEqual(keys(ar.perfMessages), keys(en.perfMessages));
});

test('every Arabic string is non-empty and written in Arabic', () => {
  for (const [key, value] of Object.entries(ar)) {
    if (LATIN_OK.has(key)) continue;
    const entries = value && typeof value === 'object' ? Object.entries(value) : [[key, value]];
    for (const [k, v] of entries) {
      const text = String(sample(v));
      assert.ok(text.trim(), `${k} is empty`);
      assert.ok(ARABIC.test(text), `${k} is not Arabic: ${text}`);
    }
  }
});

test('Arabic count phrases use correct number agreement', () => {
  assert.equal(ar.gamesPlayed(1), 'لعبة واحدة');
  assert.equal(ar.gamesPlayed(2), 'لعبتان');
  assert.equal(ar.gamesPlayed(5), '5 ألعاب');
  assert.equal(ar.gamesPlayed(12), '12 لعبة');
  assert.equal(en.gamesPlayed(1), '1 game');
});

function sourceFiles(dir) {
  return readdirSync(dir).flatMap((f) => {
    const p = path.join(dir, f);
    return statSync(p).isDirectory() ? sourceFiles(p) : /\.(ts|tsx)$/.test(f) ? [p] : [];
  });
}

// The only network access allowed: the Open Trivia DB client (live English
// questions) and the OpenRouter client (AI Quiz), each to its own host.
const NETWORK_CLIENTS = {
  [path.join('src', 'services', 'openTrivia.ts')]: /^https:\/\/opentdb\.com(\/|[,.]?$)/,
  [path.join('src', 'services', 'openRouter.ts')]: /^https:\/\/openrouter\.ai(\/|[,.)]?$)/,
};

test('network access is confined to the two API clients', () => {
  const forbidden = [/\bfetch\s*\(/, /XMLHttpRequest/, /new WebSocket/, /https?:\/\//, /axios/];
  for (const file of sourceFiles(path.join(ROOT, 'src'))) {
    if (path.relative(ROOT, file) in NETWORK_CLIENTS) continue;
    const code = readFileSync(file, 'utf8');
    for (const re of forbidden) assert.ok(!re.test(code), `${path.relative(ROOT, file)} matches ${re}`);
  }
});

test('each network client only talks to its own host over HTTPS', () => {
  for (const [file, allowed] of Object.entries(NETWORK_CLIENTS)) {
    const code = readFileSync(path.join(ROOT, file), 'utf8');
    const urls = code.match(/https?:\/\/[^\s'`")]+/g) ?? [];
    assert.ok(urls.length > 0, file);
    for (const url of urls) assert.match(url, allowed, `${file}: ${url}`);
  }
});

test('the web build has no AI key: aiConfig.ts never reads the environment', () => {
  const web = readFileSync(path.join(ROOT, 'src', 'config', 'aiConfig.ts'), 'utf8');
  assert.ok(!/process\.env/.test(web));
  assert.match(web, /AI_QUIZ_AVAILABLE = false/);
});

test('no OpenRouter key is committed: .env.local is ignored and tracked files contain no key', () => {
  const gitignore = readFileSync(path.join(ROOT, '.gitignore'), 'utf8');
  assert.match(gitignore, /^\.env\.\*$/m);
  const tracked = execSync('git ls-files', { cwd: ROOT, encoding: 'utf8' }).split('\n').filter(Boolean);
  assert.ok(!tracked.some((f) => /(^|\/)\.env(\.local)?$/.test(f)), '.env / .env.local must not be tracked');
  for (const file of tracked) {
    if (/\.(png|jpg|ico|ttf)$/.test(file)) continue;
    let text;
    try {
      text = readFileSync(path.join(ROOT, file), 'utf8');
    } catch {
      continue;
    }
    assert.ok(!/sk-or-v1-[a-f0-9]{32,}/i.test(text), `${file} looks like it contains an OpenRouter key`);
  }
});

test('no network, backend or AI dependencies are installed', () => {
  const pkg = JSON.parse(readFileSync(path.join(ROOT, 'package.json'), 'utf8'));
  const deps = Object.keys({ ...pkg.dependencies });
  for (const banned of ['firebase', '@supabase/supabase-js', 'axios', '@react-native-firebase/app', 'openai', '@anthropic-ai/sdk']) {
    assert.ok(!deps.includes(banned), `${banned} must not be a dependency`);
  }
});
