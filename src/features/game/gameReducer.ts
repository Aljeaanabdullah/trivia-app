import type { AnswerRecord, PreparedQuestion } from '@/types/trivia';

export type GamePhase = 'answering' | 'feedback' | 'finished';

export interface GameState {
  /** Increments on every reset so per-question UI keys never collide across rounds. */
  round: number;
  questions: PreparedQuestion[];
  index: number;
  score: number;
  phase: GamePhase;
  /** Selected choice for the current question; null while answering or after a timeout. */
  selectedIndex: number | null;
  timedOut: boolean;
  history: AnswerRecord[];
}

export type GameAction =
  | { type: 'answer'; questionIndex: number; choiceIndex: number }
  | { type: 'timeout'; questionIndex: number }
  | { type: 'next' }
  | { type: 'reset'; questions: PreparedQuestion[] };

export function createGameState(questions: PreparedQuestion[], round = 0): GameState {
  return {
    round,
    questions,
    index: 0,
    score: 0,
    phase: questions.length > 0 ? 'answering' : 'finished',
    selectedIndex: null,
    timedOut: false,
    history: [],
  };
}

/**
 * Pure game state machine. `answer` and `timeout` carry the question index they
 * belong to, so a late timer tick or a double tap can never score twice or
 * leak into the next question.
 */
export function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case 'answer': {
      if (state.phase !== 'answering' || action.questionIndex !== state.index) return state;
      const question = state.questions[state.index];
      const correct = action.choiceIndex === question.correctIndex;
      return {
        ...state,
        phase: 'feedback',
        selectedIndex: action.choiceIndex,
        score: correct ? state.score + 1 : state.score,
        history: [...state.history, { questionId: question.id, selectedIndex: action.choiceIndex, correct }],
      };
    }
    case 'timeout': {
      if (state.phase !== 'answering' || action.questionIndex !== state.index) return state;
      return {
        ...state,
        phase: 'feedback',
        timedOut: true,
        history: [...state.history, { questionId: state.questions[state.index].id, selectedIndex: null, correct: false }],
      };
    }
    case 'next': {
      if (state.phase !== 'feedback') return state;
      const isLast = state.index >= state.questions.length - 1;
      return isLast
        ? { ...state, phase: 'finished' }
        : { ...state, index: state.index + 1, phase: 'answering', selectedIndex: null, timedOut: false };
    }
    case 'reset':
      return createGameState(action.questions, state.round + 1);
  }
}
