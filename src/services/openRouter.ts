import type { Language, Question } from '@/types/trivia';

/**
 * AI Quiz client for OpenRouter (https://openrouter.ai), free models only.
 * Pure TypeScript with no React Native imports, so the same code runs in the
 * app and in the Node test suite. The API key is never logged or put into
 * error messages.
 *
 * NOTE: a key shipped inside a mobile app can be extracted. This direct call
 * is for the classroom demo only, not for public release.
 */

export const OPENROUTER_CHAT_URL = 'https://openrouter.ai/api/v1/chat/completions';
export const DEFAULT_AI_MODEL = 'nvidia/nemotron-3-ultra-550b-a55b:free';
export const AI_QUESTION_COUNT = 5;
export const AI_CATEGORY_ID = 'ai-quiz';
export const TOPIC_MIN = 2;
export const TOPIC_MAX = 80;
export const AI_TIMEOUT_MS = 60000;

export type AiErrorKind =
  | 'missingKey'
  | 'paidModel'
  | 'unauthorized'
  | 'credits'
  | 'notFound'
  | 'rateLimit'
  | 'server'
  | 'network'
  | 'timeout'
  | 'invalidResponse';

export class AiQuizError extends Error {
  readonly kind: AiErrorKind;
  /** HTTP status when the server answered, shown small on the error screen. */
  readonly status?: number;

  constructor(kind: AiErrorKind, message: string, status?: number) {
    super(message);
    this.kind = kind;
    this.status = status;
    this.name = 'AiQuizError';
  }
}

export const isFreeModel = (model: string) => model.trim().endsWith(':free');

/** Normalizes and validates the player's topic. Returns null when unusable. */
export function cleanTopic(raw: string): string | null {
  const topic = raw.normalize('NFC').replace(/\s+/g, ' ').trim();
  const length = [...topic].length;
  return length >= TOPIC_MIN && length <= TOPIC_MAX ? topic : null;
}

/** The topic's own language wins; otherwise fall back to the interface language. */
export function quizLanguage(topic: string, uiLanguage: Language): Language {
  if (/[؀-ۿ]/.test(topic)) return 'ar';
  if (/[A-Za-z]/.test(topic)) return 'en';
  return uiLanguage;
}

const LANGUAGE_NAMES: Record<Language, string> = { en: 'English', ar: 'Modern Standard Arabic' };

export function buildSystemPrompt(language: Language): string {
  return [
    'You are the quiz writer for BrainByte, a family-friendly trivia game.',
    `Create exactly ${AI_QUESTION_COUNT} multiple-choice trivia questions about the topic the user gives.`,
    'Rules:',
    `- Exactly ${AI_QUESTION_COUNT} questions, all about the topic. No duplicate or near-duplicate questions.`,
    '- Each question has exactly 4 answer options: 1 correct answer and 3 plausible but clearly wrong answers. All 4 options must be different.',
    '- Be as factually accurate as possible. Use well-established facts; avoid ambiguous, opinion-based or time-sensitive questions.',
    '- If you are not sure a fact is correct, write a different question you are sure about.',
    '- Before answering, double-check that the answer at correctIndex is really true and the other three are really false.',
    `- Write every question and answer in ${LANGUAGE_NAMES[language]}.`,
    '- Spread the correct answer across different positions (use correctIndex values 0, 1, 2 and 3 across the questions).',
    '- Keep questions under 120 characters and answers under 60 characters. Keep all content family-friendly.',
    '- Do not add explanations, comments, markdown, code fences or any text outside the JSON.',
    'Output ONLY valid JSON in exactly this shape:',
    '{"questions":[{"question":"...","answers":["...","...","...","..."],"correctIndex":0}]}',
    '"correctIndex" is the 0-based index of the correct answer inside "answers".',
  ].join('\n');
}

export function buildUserPrompt(topic: string): string {
  return `Topic: ${topic}`;
}

export function buildRequestBody(topic: string, language: Language, model: string) {
  return {
    model,
    messages: [
      { role: 'system', content: buildSystemPrompt(language) },
      { role: 'user', content: buildUserPrompt(topic) },
    ],
    // Lower temperature keeps free models closer to well-known facts.
    temperature: 0.4,
    max_tokens: 3000,
    // Many free models "think" first; with reasoning on they can spend the
    // whole token budget before writing any JSON. Models that don't reason ignore this.
    reasoning: { enabled: false },
  };
}

/**
 * Pulls the JSON value out of a model reply, tolerating code fences and
 * stray text before/after (e.g. "Here you go: ```json {...} ```").
 */
export function extractJson(text: string): unknown {
  const stripped = text.replace(/```(?:json)?/gi, '').trim();
  try {
    return JSON.parse(stripped);
  } catch {
    // Fall through to the outermost {...} or [...] block.
  }
  const starts = ['{', '['].map((ch) => stripped.indexOf(ch)).filter((i) => i >= 0);
  if (starts.length === 0) throw new AiQuizError('invalidResponse', 'No JSON found in AI reply');
  const start = Math.min(...starts);
  const end = Math.max(stripped.lastIndexOf('}'), stripped.lastIndexOf(']'));
  if (end <= start) throw new AiQuizError('invalidResponse', 'Unterminated JSON in AI reply');
  try {
    return JSON.parse(stripped.slice(start, end + 1));
  } catch {
    throw new AiQuizError('invalidResponse', 'AI reply is not valid JSON');
  }
}

function hash(text: string): string {
  let h = 0x811c9dc5;
  for (let i = 0; i < text.length; i++) {
    h ^= text.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return (h >>> 0).toString(36);
}

interface RawAiQuestion {
  question?: unknown;
  answers?: unknown;
  correctIndex?: unknown;
}

/**
 * Validates the AI payload and converts it to the app's Question shape.
 * Throws `invalidResponse` unless there are exactly 5 questions, each with 4
 * distinct non-empty answers and a correctIndex pointing at one of them.
 */
export function validateAiQuestions(data: unknown): Question[] {
  const list = Array.isArray(data) ? data : (data as { questions?: unknown })?.questions;
  if (!Array.isArray(list)) throw new AiQuizError('invalidResponse', 'Missing "questions" array');
  if (list.length !== AI_QUESTION_COUNT) {
    throw new AiQuizError('invalidResponse', `Expected ${AI_QUESTION_COUNT} questions, got ${list.length}`);
  }

  const seen = new Set<string>();
  return list.map((raw: RawAiQuestion, i) => {
    const text = typeof raw?.question === 'string' ? raw.question.trim() : '';
    const answers = Array.isArray(raw?.answers) ? raw.answers.map((a) => (typeof a === 'string' ? a.trim() : '')) : [];
    const correctIndex = typeof raw?.correctIndex === 'number' ? raw.correctIndex : Number(raw?.correctIndex);
    if (!text) throw new AiQuizError('invalidResponse', `Question ${i + 1} has no text`);
    if (answers.length !== 4 || answers.some((a) => !a)) {
      throw new AiQuizError('invalidResponse', `Question ${i + 1} needs exactly 4 answers`);
    }
    if (new Set(answers.map((a) => a.toLowerCase())).size !== 4) {
      throw new AiQuizError('invalidResponse', `Question ${i + 1} has duplicate answers`);
    }
    if (!Number.isInteger(correctIndex) || correctIndex < 0 || correctIndex > 3) {
      throw new AiQuizError('invalidResponse', `Question ${i + 1} has an invalid correctIndex`);
    }
    const key = text.toLowerCase();
    if (seen.has(key)) throw new AiQuizError('invalidResponse', `Question ${i + 1} is a duplicate`);
    seen.add(key);

    const choices = answers as unknown as [string, string, string, string];
    return {
      id: `ai-${hash(`${text}|${choices[correctIndex]}`)}`,
      categoryId: AI_CATEGORY_ID,
      // One language per AI quiz; mirrored so the shared Question shape stays valid.
      question: { en: text, ar: text },
      answers: { en: choices, ar: choices },
      correctIndex: correctIndex as 0 | 1 | 2 | 3,
      source: 'ai',
    } satisfies Question;
  });
}

/** Maps an HTTP status to an error kind. */
export function errorKindForStatus(status: number): AiErrorKind {
  if (status === 401 || status === 403) return 'unauthorized';
  // OpenRouter answers 400 for an invalid model ID; the request body is ours, so that's the likely cause.
  if (status === 400) return 'notFound';
  if (status === 402) return 'credits';
  if (status === 404) return 'notFound';
  if (status === 408) return 'timeout';
  if (status === 429) return 'rateLimit';
  return 'server';
}

type FetchLike = (
  url: string,
  init: { method: string; headers: Record<string, string>; body: string; signal?: AbortSignal },
) => Promise<{ ok: boolean; status: number; json: () => Promise<unknown> }>;

interface OpenRouterOptions {
  apiKey: string | null;
  model: string;
  fetch?: FetchLike;
  timeoutMs?: number;
}

/** The platform fetch; kept here so network access stays in one audited file. */
const platformFetch: FetchLike = (url, init) => globalThis.fetch(url, init);

export function createOpenRouterClient({ apiKey, model, fetch = platformFetch, timeoutMs = AI_TIMEOUT_MS }: OpenRouterOptions) {
  const inFlight = new Map<string, Promise<Question[]>>();

  async function request(topic: string, language: Language): Promise<Question[]> {
    if (!apiKey) throw new AiQuizError('missingKey', 'OpenRouter API key is not configured');
    if (!isFreeModel(model)) throw new AiQuizError('paidModel', 'Only free (":free") models are allowed');

    const controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
    const timer = setTimeout(() => controller?.abort(), timeoutMs);
    let res: Awaited<ReturnType<FetchLike>>;
    try {
      res = await fetch(OPENROUTER_CHAT_URL, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
          'X-Title': 'BrainByte',
        },
        body: JSON.stringify(buildRequestBody(topic, language, model)),
        signal: controller?.signal,
      });
    } catch (error) {
      const aborted = (error as { name?: string })?.name === 'AbortError';
      throw new AiQuizError(aborted ? 'timeout' : 'network', aborted ? 'AI request timed out' : 'Network request failed');
    } finally {
      clearTimeout(timer);
    }

    let body: unknown;
    try {
      body = await res.json();
    } catch {
      body = null;
    }
    if (!res.ok) throw new AiQuizError(errorKindForStatus(res.status), `OpenRouter HTTP ${res.status}`, res.status);

    // OpenRouter can also report an error inside a 200 response.
    const embedded = (body as { error?: { code?: number } })?.error;
    if (embedded) {
      const status = typeof embedded.code === 'number' ? embedded.code : undefined;
      throw new AiQuizError(status ? errorKindForStatus(status) : 'server', 'OpenRouter returned an error', status);
    }

    const content = (body as { choices?: { message?: { content?: unknown } }[] })?.choices?.[0]?.message?.content;
    if (typeof content !== 'string' || !content.trim()) {
      throw new AiQuizError('invalidResponse', 'AI reply was empty', res.status);
    }
    try {
      return validateAiQuestions(extractJson(content));
    } catch (error) {
      if (error instanceof AiQuizError) throw new AiQuizError(error.kind, error.message, res.status);
      throw new AiQuizError('invalidResponse', 'AI reply could not be read', res.status);
    }
  }

  return {
    model,
    hasKey: !!apiKey,
    /** One request generates the whole 5-question round; identical concurrent calls share it. */
    generate(rawTopic: string, uiLanguage: Language): Promise<Question[]> {
      const topic = cleanTopic(rawTopic);
      if (!topic) return Promise.reject(new AiQuizError('invalidResponse', 'Topic is empty or too long'));
      const language = quizLanguage(topic, uiLanguage);
      const key = `${language}|${topic.toLowerCase()}`;
      const existing = inFlight.get(key);
      if (existing) return existing;
      const promise = request(topic, language).finally(() => inFlight.delete(key));
      inFlight.set(key, promise);
      return promise;
    },
  };
}
