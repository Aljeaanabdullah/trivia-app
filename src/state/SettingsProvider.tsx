import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { Appearance, I18nManager } from 'react-native';

import { isRTLLanguage, translations } from '@/i18n';
import { palettes, type ColorTokens, type ThemeMode } from '@/theme/tokens';
import type { Language } from '@/types/trivia';
import { readJSON, STORAGE_KEYS, writeJSON } from './storage';

interface Settings {
  language: Language;
  theme: ThemeMode;
}

interface SettingsContextValue extends Settings {
  ready: boolean;
  setLanguage: (language: Language) => void;
  setTheme: (theme: ThemeMode) => void;
}

const SettingsContext = createContext<SettingsContextValue | null>(null);

function defaultSettings(): Settings {
  let locale = 'en';
  try {
    locale = Intl.DateTimeFormat().resolvedOptions().locale;
  } catch {
    // Older engines without Intl fall back to English.
  }
  return {
    language: locale.toLowerCase().startsWith('ar') ? 'ar' : 'en',
    theme: Appearance.getColorScheme() === 'light' ? 'light' : 'dark',
  };
}

function sanitize(saved: Partial<Settings> | null): Settings {
  const fallback = defaultSettings();
  return {
    language: saved?.language === 'ar' || saved?.language === 'en' ? saved.language : fallback.language,
    theme: saved?.theme === 'light' || saved?.theme === 'dark' ? saved.theme : fallback.theme,
  };
}

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<Settings>(defaultSettings);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    readJSON<Partial<Settings> | null>(STORAGE_KEYS.settings, null).then((saved) => {
      if (cancelled) return;
      setSettings(sanitize(saved));
      setReady(true);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const update = useCallback((patch: Partial<Settings>) => {
    setSettings((prev) => {
      const next = { ...prev, ...patch };
      writeJSON(STORAGE_KEYS.settings, next);
      return next;
    });
  }, []);

  const value = useMemo<SettingsContextValue>(
    () => ({
      ...settings,
      ready,
      setLanguage: (language) => update({ language }),
      setTheme: (theme) => update({ theme }),
    }),
    [settings, ready, update],
  );

  return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>;
}

export function useSettings() {
  const ctx = useContext(SettingsContext);
  if (!ctx) throw new Error('useSettings must be used inside SettingsProvider');
  return ctx;
}

// When the OS itself runs RTL, React Native swaps 'left'/'right'. Our layout
// direction is controlled per screen instead, so undo that swap for text.
// Boolean(): react-native-web leaves these undefined, which must count as "no swap".
const nativeSwapsLeftRight = Boolean(I18nManager.isRTL && I18nManager.doLeftAndRightSwapInRTL);

export function useI18n() {
  const { language } = useSettings();
  return useMemo(() => {
    const isRTL = isRTLLanguage(language);
    const startIsRight = isRTL !== nativeSwapsLeftRight;
    return {
      t: translations[language],
      language,
      isRTL,
      direction: (isRTL ? 'rtl' : 'ltr') as 'rtl' | 'ltr',
      /** textAlign for start-aligned text in the current language. */
      textStart: (startIsRight ? 'right' : 'left') as 'right' | 'left',
      /** Multiply horizontal motion by this so it follows reading direction. */
      flipX: isRTL ? -1 : 1,
    };
  }, [language]);
}

export function useTheme(): { mode: ThemeMode; colors: ColorTokens } {
  const { theme } = useSettings();
  return useMemo(() => ({ mode: theme, colors: palettes[theme] }), [theme]);
}

/** Memoized per palette; pass a module-level factory so styles are built once per theme. */
export function useThemedStyles<T>(factory: (colors: ColorTokens) => T): T {
  const { colors } = useTheme();
  return useMemo(() => factory(colors), [factory, colors]);
}
