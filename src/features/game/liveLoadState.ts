import { LIVE_QUESTION_COUNT, type LiveErrorKind } from '@/services/openTrivia';
import type { PreparedQuestion } from '@/types/trivia';

/**
 * The three "faces" shown while fetching live questions (plus `ready`).
 * - loading: request in flight (automatic rate-limit retries happen here)
 * - error:   the request failed (no internet, timeout, server busy, bad reply)
 * - empty:   the API answered but had no / too few questions
 */
export type LiveLoadState =
  | { status: 'loading' }
  | { status: 'ready'; questions: PreparedQuestion[] }
  | { status: 'error'; kind: Exclude<LiveErrorKind, 'empty'> }
  | { status: 'empty' };

export type LiveLoadAction =
  | { type: 'loaded'; questions: PreparedQuestion[] }
  | { type: 'failed'; kind: LiveErrorKind }
  | { type: 'retry' };

export const initialLiveLoadState: LiveLoadState = { status: 'loading' };

export function liveLoadReducer(state: LiveLoadState, action: LiveLoadAction): LiveLoadState {
  switch (action.type) {
    case 'loaded':
      if (state.status !== 'loading') return state;
      // A game only starts with a complete set of valid questions.
      return action.questions.length === LIVE_QUESTION_COUNT ? { status: 'ready', questions: action.questions } : { status: 'empty' };
    case 'failed':
      if (state.status !== 'loading') return state;
      return action.kind === 'empty' ? { status: 'empty' } : { status: 'error', kind: action.kind };
    case 'retry':
      // Only from a failure screen, so repeated taps can't stack requests.
      return state.status === 'error' || state.status === 'empty' ? { status: 'loading' } : state;
  }
}
