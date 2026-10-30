import type { MaterialCommunityIcons } from '@expo/vector-icons';
import type { ComponentProps } from 'react';

import type { CategoryId, LocalizedText } from '@/types/trivia';

export interface Category {
  id: CategoryId;
  /** Group prefix from the course list, e.g. "Entertainment" or "Science". */
  group?: LocalizedText;
  name: LocalizedText;
  icon: ComponentProps<typeof MaterialCommunityIcons>['name'];
  /** Accent color used for the card glow and icon. */
  color: string;
  /** Open Trivia DB category id (9–32) for live English questions. */
  openTdbId: number;
}

const ENT: LocalizedText = { en: 'Entertainment', ar: 'ترفيه' };
const SCI: LocalizedText = { en: 'Science', ar: 'علوم' };

/** The 24 categories from the course list, in course order. */
export const CATEGORIES: readonly Category[] = [
  { id: 'general-knowledge', name: { en: 'General Knowledge', ar: 'معلومات عامة' }, icon: 'brain', color: '#4FC3FF', openTdbId: 9 },
  { id: 'books', group: ENT, name: { en: 'Books', ar: 'الكتب' }, icon: 'book-open-page-variant', color: '#C08BFF', openTdbId: 10 },
  { id: 'film', group: ENT, name: { en: 'Film', ar: 'الأفلام' }, icon: 'movie-open', color: '#FF6B8B', openTdbId: 11 },
  { id: 'music', group: ENT, name: { en: 'Music', ar: 'الموسيقى' }, icon: 'music', color: '#FF8A3D', openTdbId: 12 },
  {
    id: 'musicals-theatres',
    group: ENT,
    name: { en: 'Musicals & Theatres', ar: 'المسرح والعروض الموسيقية' },
    icon: 'drama-masks',
    color: '#E05DD5', openTdbId: 13,
  },
  { id: 'television', group: ENT, name: { en: 'Television', ar: 'التلفزيون' }, icon: 'television-classic', color: '#5C8DFF', openTdbId: 14 },
  { id: 'video-games', group: ENT, name: { en: 'Video Games', ar: 'ألعاب الفيديو' }, icon: 'gamepad-variant', color: '#3DDC97', openTdbId: 15 },
  { id: 'board-games', group: ENT, name: { en: 'Board Games', ar: 'الألعاب اللوحية' }, icon: 'chess-knight', color: '#D9A441', openTdbId: 16 },
  { id: 'science-nature', name: { en: 'Science & Nature', ar: 'العلوم والطبيعة' }, icon: 'leaf', color: '#4CD964', openTdbId: 17 },
  { id: 'computers', group: SCI, name: { en: 'Computers', ar: 'الحاسوب' }, icon: 'laptop', color: '#38D6E8', openTdbId: 18 },
  { id: 'mathematics', group: SCI, name: { en: 'Mathematics', ar: 'الرياضيات' }, icon: 'calculator-variant', color: '#7C83FF', openTdbId: 19 },
  { id: 'mythology', name: { en: 'Mythology', ar: 'الأساطير' }, icon: 'pillar', color: '#D4B26A', openTdbId: 20 },
  { id: 'sports', name: { en: 'Sports', ar: 'الرياضة' }, icon: 'soccer', color: '#2FC46E', openTdbId: 21 },
  { id: 'geography', name: { en: 'Geography', ar: 'الجغرافيا' }, icon: 'earth', color: '#2FA8FF', openTdbId: 22 },
  { id: 'history', name: { en: 'History', ar: 'التاريخ' }, icon: 'castle', color: '#C8875A', openTdbId: 23 },
  { id: 'politics', name: { en: 'Politics', ar: 'السياسة' }, icon: 'scale-balance', color: '#8FA3C8', openTdbId: 24 },
  { id: 'art', name: { en: 'Art', ar: 'الفن' }, icon: 'palette', color: '#FF5FA2', openTdbId: 25 },
  { id: 'celebrities', name: { en: 'Celebrities', ar: 'المشاهير' }, icon: 'star-circle', color: '#FFC83D', openTdbId: 26 },
  { id: 'animals', name: { en: 'Animals', ar: 'الحيوانات' }, icon: 'paw', color: '#E39B4F', openTdbId: 27 },
  { id: 'vehicles', name: { en: 'Vehicles', ar: 'المركبات' }, icon: 'car-sports', color: '#FF5A4E', openTdbId: 28 },
  { id: 'comics', group: ENT, name: { en: 'Comics', ar: 'القصص المصورة' }, icon: 'lightning-bolt', color: '#FFD23F', openTdbId: 29 },
  { id: 'gadgets', group: SCI, name: { en: 'Gadgets', ar: 'الأجهزة والابتكارات' }, icon: 'devices', color: '#66E0C2', openTdbId: 30 },
  {
    id: 'anime-manga',
    group: ENT,
    name: { en: 'Japanese Anime & Manga', ar: 'الأنمي والمانغا اليابانية' },
    icon: 'sword-cross',
    color: '#FF7AB6', openTdbId: 31,
  },
  {
    id: 'cartoons-animations',
    group: ENT,
    name: { en: 'Cartoon & Animations', ar: 'الرسوم المتحركة' },
    icon: 'animation-play',
    color: '#9E7BFF', openTdbId: 32,
  },
];

/** AI Quiz pseudo-category: not one of the 24 course categories, never shown in the grid. */
export const AI_CATEGORY: Category = {
  id: 'ai-quiz',
  name: { en: 'AI Quiz', ar: 'اختبار الذكاء الاصطناعي' },
  icon: 'robot-happy-outline',
  color: '#B77BFF',
  openTdbId: 0,
};

/** AI Quiz category titled with the player's topic, e.g. "AI Quiz: Volcanoes". */
export function aiCategoryFor(topic: string): Category {
  return { ...AI_CATEGORY, group: AI_CATEGORY.name, name: { en: topic, ar: topic } };
}

const byId = new Map<CategoryId, Category>([...CATEGORIES.map((c) => [c.id, c] as const), [AI_CATEGORY.id, AI_CATEGORY]]);

export function getCategory(id: string | undefined): Category | undefined {
  return id ? byId.get(id as CategoryId) : undefined;
}

/** Full course-style title, e.g. "Entertainment: Books" / "ترفيه: الكتب". */
export function categoryTitle(category: Category, language: keyof LocalizedText): string {
  return category.group ? `${category.group[language]}: ${category.name[language]}` : category.name[language];
}
