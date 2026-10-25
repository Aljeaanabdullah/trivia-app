import type { Language } from '@/types/trivia';
import { ar } from './ar';
import { en, type Translation } from './en';

export type { Translation };

export const translations: Record<Language, Translation> = { en, ar };

export const isRTLLanguage = (language: Language) => language === 'ar';
