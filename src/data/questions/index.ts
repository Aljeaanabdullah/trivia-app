import type { CategoryId, Question } from '@/types/trivia';
import { generalKnowledgeQuestions } from './generalKnowledge';

/** Offline question bank. Phase 5 registers the remaining 23 categories here. */
const bank: Partial<Record<CategoryId, Question[]>> = {
  'general-knowledge': generalKnowledgeQuestions,
};

export function getQuestionsForCategory(categoryId: CategoryId): Question[] {
  return bank[categoryId] ?? [];
}
