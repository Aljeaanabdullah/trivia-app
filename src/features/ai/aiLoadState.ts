import { AI_QUESTION_COUNT, type AiErrorKind } from '@/services/openRouter';
import type { PreparedQuestion } from '@/types/trivia';

/**
 * AI Quiz screen states:
 * - loading: the single OpenRouter request is in flight
 * - error:   the request failed (HTTP error, network, timeout, missing key…)
 * - invalid: the AI answered but the reply couldn't be parsed/validated
 * A game only starts from `ready`, i.e. with exactly 5 valid questions.
 */
export type AiLoadState =
  | { status: 'loading' }
  | { status: 'ready'; questions: PreparedQuestion[] }
  | { status: 'error'; kind: Exclude<AiErrorKind, 'invalidResponse'>; httpStatus?: number }
  | { status: 'invalid'; httpStatus?: number };

export type AiLoadAction =
  | { type: 'loaded'; questions: PreparedQuestion[] }
  | { type: 'failed'; kind: AiErrorKind; httpStatus?: number }
  | { type: 'retry' };

export const initialAiLoadState: AiLoadState = { status: 'loading' };

export function aiLoadReducer(state: AiLoadState, action: AiLoadAction): AiLoadState {
  switch (action.type) {
    case 'loaded':
      if (state.status !== 'loading') return state;
      return action.questions.length === AI_QUESTION_COUNT
        ? { status: 'ready', questions: action.questions }
        : { status: 'invalid' };
    case 'failed':
      if (state.status !== 'loading') return state;
      return action.kind === 'invalidResponse'
        ? { status: 'invalid', httpStatus: action.httpStatus }
        : { status: 'error', kind: action.kind, httpStatus: action.httpStatus };
    case 'retry':
      return state.status === 'error' || state.status === 'invalid' ? { status: 'loading' } : state;
  }
}
