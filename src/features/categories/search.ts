import type { Category } from '@/data/categories';

/**
 * Folds text for forgiving search: lowercase, strips Latin accents and Arabic
 * diacritics/tatweel, and unifies common Arabic letter variants
 * (أ إ آ ٱ → ا, ة → ه, ى → ي) so "الاساطير" finds "الأساطير".
 */
export function foldSearchText(text: string): string {
  return text
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[ً-ٰٟـ]/g, '')
    .replace(/[أإآٱ]/g, 'ا')
    .replace(/ة/g, 'ه')
    .replace(/ى/g, 'ي')
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .trim();
}

/** Matches against both languages so a player can search in either. */
export function filterCategories(categories: readonly Category[], query: string): Category[] {
  const q = foldSearchText(query);
  if (!q) return [...categories];
  return categories.filter((c) => {
    const haystack = [c.name.en, c.name.ar, c.group?.en ?? '', c.group?.ar ?? ''].map(foldSearchText).join(' | ');
    return haystack.includes(q);
  });
}
