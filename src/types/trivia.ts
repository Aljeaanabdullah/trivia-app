export type Language = 'en' | 'ar';

/** A string available in every supported language. */
export type LocalizedText = Record<Language, string>;

/** Stable IDs for the 24 course categories. Metadata (titles, icons, colors) arrives in Phase 5. */
export type CategoryId =
  | 'general-knowledge'
  | 'books'
  | 'film'
  | 'music'
  | 'musicals-theatres'
  | 'television'
  | 'video-games'
  | 'board-games'
  | 'science-nature'
  | 'computers'
  | 'mathematics'
  | 'mythology'
  | 'sports'
  | 'geography'
  | 'history'
  | 'politics'
  | 'art'
  | 'celebrities'
  | 'animals'
  | 'vehicles'
  | 'comics'
  | 'gadgets'
  | 'anime-manga'
  | 'cartoons-animations';

export type AnswerChoices = readonly [string, string, string, string];

/** A question record as stored in the offline bank. */
export interface Question {
  id: string;
  categoryId: CategoryId;
  question: LocalizedText;
  /** Exactly four choices per language, in the same order for both languages. */
  answers: Record<Language, AnswerChoices>;
  /** Index (0-3) of the correct choice in `answers`. */
  correctIndex: 0 | 1 | 2 | 3;
  explanation?: LocalizedText;
}

/** A question prepared for one game: answers shuffled, correct index remapped. */
export interface PreparedQuestion extends Omit<Question, 'correctIndex'> {
  correctIndex: number;
}

export interface AnswerRecord {
  questionId: string;
  /** null when the timer ran out. */
  selectedIndex: number | null;
  correct: boolean;
}
