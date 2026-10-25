import type { AnswerChoices, PreparedQuestion, Question } from '@/types/trivia';

export type Rng = () => number;

/** Fisher–Yates shuffle that returns a new array. */
export function shuffle<T>(items: readonly T[], rng: Rng = Math.random): T[] {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

/** Shuffles answer positions, applying one permutation to every language so translations stay aligned. */
export function shuffleAnswers(question: Question, rng: Rng = Math.random): PreparedQuestion {
  const order = shuffle([0, 1, 2, 3], rng);
  const permute = (choices: AnswerChoices) => order.map((i) => choices[i]) as unknown as AnswerChoices;
  return {
    ...question,
    answers: { en: permute(question.answers.en), ar: permute(question.answers.ar) },
    correctIndex: order.indexOf(question.correctIndex),
  };
}

/**
 * Picks `count` unique questions in random order, preferring ones not in
 * `recentIds` and only falling back to recent questions when the pool is short.
 */
export function selectQuestions(
  pool: readonly Question[],
  count: number,
  options: { recentIds?: readonly string[]; rng?: Rng } = {},
): PreparedQuestion[] {
  const { recentIds = [], rng = Math.random } = options;
  const recent = new Set(recentIds);
  const unique = [...new Map(pool.map((q) => [q.id, q])).values()];
  const fresh = shuffle(unique.filter((q) => !recent.has(q.id)), rng);
  const stale = shuffle(unique.filter((q) => recent.has(q.id)), rng);
  const picked = [...fresh, ...stale].slice(0, count);
  return shuffle(picked, rng).map((q) => shuffleAnswers(q, rng));
}
