import type { BankCategoryId, CategoryId, Question } from '@/types/trivia';
import { animalsQuestions } from './animals';
import { animeMangaQuestions } from './animeManga';
import { artQuestions } from './art';
import { boardGamesQuestions } from './boardGames';
import { cartoonsAnimationsQuestions } from './cartoonsAnimations';
import { celebritiesQuestions } from './celebrities';
import { comicsQuestions } from './comics';
import { computersQuestions } from './computers';
import { filmQuestions } from './film';
import { gadgetsQuestions } from './gadgets';
import { generalKnowledgeQuestions } from './generalKnowledge';
import { geographyQuestions } from './geography';
import { historyQuestions } from './history';
import { mathematicsQuestions } from './mathematics';
import { musicQuestions } from './music';
import { musicalsTheatresQuestions } from './musicalsTheatres';
import { mythologyQuestions } from './mythology';
import { politicsQuestions } from './politics';
import { scienceNatureQuestions } from './scienceNature';
import { sportsQuestions } from './sports';
import { televisionQuestions } from './television';
import { vehiclesQuestions } from './vehicles';
import { videoGamesQuestions } from './videoGames';
import { booksQuestions } from './books';

/**
 * Offline question bank: bundled with the app, never fetched. Add questions
 * to a category file (or a new file registered here) without touching the UI.
 */
export const QUESTION_BANK: Record<BankCategoryId, Question[]> = {
  'general-knowledge': generalKnowledgeQuestions,
  books: booksQuestions,
  film: filmQuestions,
  music: musicQuestions,
  'musicals-theatres': musicalsTheatresQuestions,
  television: televisionQuestions,
  'video-games': videoGamesQuestions,
  'board-games': boardGamesQuestions,
  'science-nature': scienceNatureQuestions,
  computers: computersQuestions,
  mathematics: mathematicsQuestions,
  mythology: mythologyQuestions,
  sports: sportsQuestions,
  geography: geographyQuestions,
  history: historyQuestions,
  politics: politicsQuestions,
  art: artQuestions,
  celebrities: celebritiesQuestions,
  animals: animalsQuestions,
  vehicles: vehiclesQuestions,
  comics: comicsQuestions,
  gadgets: gadgetsQuestions,
  'anime-manga': animeMangaQuestions,
  'cartoons-animations': cartoonsAnimationsQuestions,
};

export function getQuestionsForCategory(categoryId: CategoryId): Question[] {
  return QUESTION_BANK[categoryId as BankCategoryId] ?? [];
}
