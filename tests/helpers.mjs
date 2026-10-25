// Test helpers: Node 24 runs the app's TypeScript modules directly (type stripping).
// Only modules whose runtime imports are relative-with-extension or type-only can be loaded.
import { readdirSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
export const src = (rel) => import(pathToFileURL(path.join(ROOT, 'src', rel)).href);

/** Loads every category question file in src/data/questions (index.ts excluded). */
export async function loadQuestionFiles() {
  const dir = path.join(ROOT, 'src', 'data', 'questions');
  const files = readdirSync(dir).filter((f) => f.endsWith('.ts') && f !== 'index.ts');
  const out = {};
  for (const file of files) {
    const mod = await import(pathToFileURL(path.join(dir, file)).href);
    const entries = Object.entries(mod).filter(([, v]) => Array.isArray(v));
    if (entries.length !== 1) throw new Error(`${file} must export exactly one question array`);
    out[file] = { exportName: entries[0][0], questions: entries[0][1] };
  }
  return out;
}

/** Seeded RNG so randomized tests are reproducible. */
export function seededRng(seed = 42) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 2 ** 32;
  };
}
