import type { CategoryId, Question } from '@/types/trivia';

/**
 * Open Trivia DB client (https://opentdb.com, CC BY-SA 4.0).
 * Pure TypeScript with no React Native imports, so the same code runs in the
 * app and in the Node test suite. Live questions are English-only.
 */

export const OPEN_TDB_QUESTIONS_URL = 'https://opentdb.com/api.php';
export const OPEN_TDB_TOKEN_URL = 'https://opentdb.com/api_token.php';
export const LIVE_QUESTION_COUNT = 5;
export const LIVE_DIFFICULTY = 'medium';
/** The API allows one question request per IP every 5 seconds. */
export const RATE_LIMIT_MS = 5000;
export const MAX_ATTEMPTS = 3;
export const REQUEST_TIMEOUT_MS = 10000;

export type LiveErrorKind = 'network' | 'timeout' | 'rateLimit' | 'noResults' | 'server';

export class LiveQuestionsError extends Error {
  readonly kind: LiveErrorKind;

  constructor(kind: LiveErrorKind, message: string) {
    super(message);
    this.kind = kind;
    this.name = 'LiveQuestionsError';
  }
}

export interface OpenTdbResult {
  type: string;
  difficulty: string;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export interface OpenTdbResponse {
  response_code: number;
  results?: OpenTdbResult[];
}

interface QuestionsUrlOptions {
  openTdbCategory: number;
  token?: string | null;
  /** Omit to allow any difficulty (used when a category runs out of medium questions). */
  difficulty?: string | null;
  amount?: number;
}

/** Same shape as the reference endpoint `api.php?amount=1&type=multiple`, with 5 questions, category and difficulty. */
export function buildQuestionsUrl({
  openTdbCategory,
  token,
  difficulty = LIVE_DIFFICULTY,
  amount = LIVE_QUESTION_COUNT,
}: QuestionsUrlOptions): string {
  let url = `${OPEN_TDB_QUESTIONS_URL}?amount=${amount}&type=multiple&category=${openTdbCategory}`;
  if (difficulty) url += `&difficulty=${difficulty}`;
  if (token) url += `&token=${token}`;
  return url;
}

const NAMED_ENTITIES: Record<string, string> = {
  quot: '"',
  amp: '&',
  apos: "'",
  lt: '<',
  gt: '>',
  nbsp: ' ',
  hellip: '…',
  ndash: '–',
  mdash: '—',
  lsquo: '‘',
  rsquo: '’',
  ldquo: '“',
  rdquo: '”',
  laquo: '«',
  raquo: '»',
  deg: '°',
  shy: '­',
  times: '×',
  divide: '÷',
  pi: 'π',
  eacute: 'é',
  Eacute: 'É',
  egrave: 'è',
  ecirc: 'ê',
  euml: 'ë',
  aacute: 'á',
  agrave: 'à',
  acirc: 'â',
  auml: 'ä',
  aring: 'å',
  atilde: 'ã',
  iacute: 'í',
  icirc: 'î',
  iuml: 'ï',
  oacute: 'ó',
  ocirc: 'ô',
  ouml: 'ö',
  otilde: 'õ',
  oslash: 'ø',
  uacute: 'ú',
  ucirc: 'û',
  uuml: 'ü',
  Uuml: 'Ü',
  Ouml: 'Ö',
  Auml: 'Ä',
  ntilde: 'ñ',
  ccedil: 'ç',
  szlig: 'ß',
  trade: '™',
  reg: '®',
  copy: '©',
  euro: '€',
  pound: '£',
  yen: '¥',
  cent: '¢',
  sup2: '²',
  sup3: '³',
  frac12: '½',
  frac14: '¼',
  frac34: '¾',
};

/** Decodes the HTML entities Open Trivia DB uses by default (&quot; &#039; &amp; &eacute; …). */
export function decodeHtml(text: string): string {
  return text.replace(/&(#x[0-9a-f]+|#\d+|[a-z][a-z0-9]*);/gi, (match, entity: string) => {
    if (entity[0] === '#') {
      const code = entity[1] === 'x' || entity[1] === 'X' ? parseInt(entity.slice(2), 16) : parseInt(entity.slice(1), 10);
      return Number.isFinite(code) && code > 0 && code <= 0x10ffff ? String.fromCodePoint(code) : match;
    }
    return NAMED_ENTITIES[entity] ?? match;
  });
}

/** Small stable hash so the same live question always gets the same id (recent-question tracking, history). */
function hash(text: string): string {
  let h = 0x811c9dc5;
  for (let i = 0; i < text.length; i++) {
    h ^= text.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return (h >>> 0).toString(36);
}

/**
 * Converts one API result into the app's Question shape. The correct answer is
 * stored at index 0; its on-screen position is randomized later by
 * `shuffleAnswers`. Returns null for anything that is not a clean 4-choice question.
 */
export function toQuestion(result: OpenTdbResult, categoryId: CategoryId): Question | null {
  if (result?.type !== 'multiple' || !Array.isArray(result.incorrect_answers) || result.incorrect_answers.length !== 3) {
    return null;
  }
  const text = decodeHtml(String(result.question ?? '')).trim();
  const correct = decodeHtml(String(result.correct_answer ?? '')).trim();
  const wrong = result.incorrect_answers.map((a) => decodeHtml(String(a ?? '')).trim());
  const choices = [correct, ...wrong] as [string, string, string, string];
  if (!text || choices.some((c) => !c) || new Set(choices.map((c) => c.toLowerCase())).size !== 4) return null;

  const difficulty = result.difficulty === 'easy' || result.difficulty === 'hard' ? result.difficulty : 'medium';
  return {
    id: `otdb-${hash(`${text}|${correct}`)}`,
    categoryId,
    // Live questions are English-only; the Arabic fields mirror English so the
    // shared Question shape stays valid (Arabic mode never requests live questions).
    question: { en: text, ar: text },
    answers: { en: choices, ar: choices },
    correctIndex: 0,
    source: 'opentdb',
    difficulty,
  };
}

/** Maps a successful response to questions, dropping duplicates and malformed entries. */
export function parseQuestions(response: OpenTdbResponse, categoryId: CategoryId): Question[] {
  const seen = new Set<string>();
  const out: Question[] = [];
  for (const result of response.results ?? []) {
    const q = toQuestion(result, categoryId);
    if (q && !seen.has(q.id)) {
      seen.add(q.id);
      out.push(q);
    }
  }
  return out;
}

interface ClientDeps {
  fetch: (url: string, init?: { signal?: AbortSignal }) => Promise<{ ok: boolean; status: number; json: () => Promise<unknown> }>;
  sleep: (ms: number) => Promise<void>;
  now: () => number;
}

const defaultDeps: ClientDeps = {
  fetch: (url, init) => globalThis.fetch(url, init),
  sleep: (ms) => new Promise((resolve) => setTimeout(resolve, ms)),
  now: () => Date.now(),
};

export interface LiveRequestTarget {
  categoryId: CategoryId;
  openTdbCategory: number;
}

/**
 * Creates a client that:
 * - reuses one session token so the API avoids repeating questions,
 * - spaces question requests at least RATE_LIMIT_MS apart and retries a rate
 *   limit up to MAX_ATTEMPTS times,
 * - shares one in-flight request per category, so a double mount or double tap
 *   never sends duplicate requests.
 */
export function createOpenTriviaClient(overrides: Partial<ClientDeps> = {}) {
  const deps: ClientDeps = { ...defaultDeps, ...overrides };
  let token: string | null = null;
  let lastRequestAt = -Infinity;
  /** Last URL requested, for diagnostics and the Day 5 report. */
  let lastUrl: string | null = null;
  const inFlight = new Map<number, Promise<Question[]>>();

  async function getJson(url: string): Promise<unknown> {
    const controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
    const timer = setTimeout(() => controller?.abort(), REQUEST_TIMEOUT_MS);
    try {
      const res = await deps.fetch(url, controller ? { signal: controller.signal } : undefined);
      if (!res.ok) {
        throw new LiveQuestionsError(res.status === 429 ? 'rateLimit' : 'server', `HTTP ${res.status}`);
      }
      return await res.json();
    } catch (error) {
      if (error instanceof LiveQuestionsError) throw error;
      const aborted = (error as { name?: string })?.name === 'AbortError';
      throw new LiveQuestionsError(aborted ? 'timeout' : 'network', aborted ? 'Request timed out' : 'Network request failed');
    } finally {
      clearTimeout(timer);
    }
  }

  async function ensureToken(): Promise<string | null> {
    if (token) return token;
    try {
      const data = (await getJson(`${OPEN_TDB_TOKEN_URL}?command=request`)) as { response_code?: number; token?: string };
      token = data?.response_code === 0 && typeof data.token === 'string' ? data.token : null;
    } catch {
      // Tokens only reduce repeats; play on without one.
      token = null;
    }
    return token;
  }

  async function waitForSlot() {
    const wait = lastRequestAt + RATE_LIMIT_MS - deps.now();
    if (wait > 0) await deps.sleep(wait);
    lastRequestAt = deps.now();
  }

  async function load({ categoryId, openTdbCategory }: LiveRequestTarget): Promise<Question[]> {
    let useToken = true;
    let difficulty: string | null = LIVE_DIFFICULTY;
    let rateLimited = 0;

    // Bounded loop: rate-limit retries are capped at MAX_ATTEMPTS, other fallbacks happen at most once each.
    for (let step = 0; step < MAX_ATTEMPTS + 4; step++) {
      const currentToken = useToken ? await ensureToken() : null;
      await waitForSlot();
      lastUrl = buildQuestionsUrl({ openTdbCategory, token: currentToken, difficulty });
      const data = (await getJson(lastUrl)) as OpenTdbResponse;

      switch (data?.response_code) {
        case 0: {
          const questions = parseQuestions(data, categoryId);
          if (questions.length < LIVE_QUESTION_COUNT) {
            throw new LiveQuestionsError('server', `Only ${questions.length} usable questions returned`);
          }
          return questions.slice(0, LIVE_QUESTION_COUNT);
        }
        case 5: // Rate limit: the next waitForSlot() waits a full RATE_LIMIT_MS from now.
          rateLimited += 1;
          lastRequestAt = deps.now();
          if (rateLimited >= MAX_ATTEMPTS) throw new LiveQuestionsError('rateLimit', 'Rate limited by Open Trivia DB');
          continue;
        case 4: // Token exhausted for this category: ask again without it (repeats become possible).
          if (!useToken) throw new LiveQuestionsError('noResults', 'Token empty');
          useToken = false;
          continue;
        case 3: // Token expired (6 h of inactivity): get a fresh one once.
          if (!token) throw new LiveQuestionsError('server', 'Token not found');
          token = null;
          continue;
        case 1: // Not enough medium questions: widen to any difficulty once, same category.
          if (difficulty) {
            difficulty = null;
            continue;
          }
          throw new LiveQuestionsError('noResults', 'No results');
        default:
          throw new LiveQuestionsError('server', `Unexpected response code ${String(data?.response_code)}`);
      }
    }
    throw new LiveQuestionsError('rateLimit', 'Too many attempts');
  }

  return {
    /** Fetches LIVE_QUESTION_COUNT English questions for a category; concurrent calls share one request. */
    fetchQuestions(target: LiveRequestTarget): Promise<Question[]> {
      const existing = inFlight.get(target.openTdbCategory);
      if (existing) return existing;
      const promise = load(target).finally(() => inFlight.delete(target.openTdbCategory));
      inFlight.set(target.openTdbCategory, promise);
      return promise;
    },
    get lastUrl() {
      return lastUrl;
    },
  };
}

/** App-wide client: one token, one rate-limit clock. */
export const openTrivia = createOpenTriviaClient();
