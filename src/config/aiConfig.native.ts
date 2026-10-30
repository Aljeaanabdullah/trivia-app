import { DEFAULT_AI_MODEL } from '@/services/openRouter';

/**
 * Phone build (Android/iOS): AI Quiz settings come from `.env.local`, which is
 * git-ignored. Expo inlines EXPO_PUBLIC_* values at bundle time, so restart
 * `npx expo start` after editing that file.
 *
 *   EXPO_PUBLIC_OPENROUTER_API_KEY=...       (required)
 *   EXPO_PUBLIC_OPENROUTER_MODEL=...:free    (optional, must end with ":free")
 */
export const AI_QUIZ_AVAILABLE = true;

export const aiConfig: { apiKey: string | null; model: string } = {
  apiKey: process.env.EXPO_PUBLIC_OPENROUTER_API_KEY?.trim() || null,
  model: process.env.EXPO_PUBLIC_OPENROUTER_MODEL?.trim() || DEFAULT_AI_MODEL,
};
