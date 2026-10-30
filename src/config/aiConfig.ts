import { DEFAULT_AI_MODEL } from '@/services/openRouter';

/**
 * Web / default build: AI Quiz is disabled and no API key is ever bundled.
 * The phone build uses `aiConfig.native.ts` instead (Metro picks it for
 * Android/iOS), which reads the key from the git-ignored `.env.local`.
 */
export const AI_QUIZ_AVAILABLE = false;

export const aiConfig: { apiKey: string | null; model: string } = {
  apiKey: null,
  model: DEFAULT_AI_MODEL,
};
