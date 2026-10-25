import { useI18n, useSettings } from '@/state/SettingsProvider';
import type { ThemeMode } from '@/theme/tokens';
import type { Language } from '@/types/trivia';
import { SegmentedControl } from './SegmentedControl';

export function LanguageSwitcher() {
  const { language, setLanguage } = useSettings();
  const { t } = useI18n();
  return (
    <SegmentedControl<Language>
      accessibilityLabel={t.language}
      value={language}
      onChange={setLanguage}
      options={[
        { value: 'ar', label: t.languageArabic, icon: 'translate' },
        { value: 'en', label: t.languageEnglish, icon: 'alphabetical-variant' },
      ]}
    />
  );
}

export function ThemeSwitcher() {
  const { theme, setTheme } = useSettings();
  const { t } = useI18n();
  return (
    <SegmentedControl<ThemeMode>
      accessibilityLabel={t.appearance}
      value={theme}
      onChange={setTheme}
      options={[
        { value: 'dark', label: t.darkMode, icon: 'weather-night' },
        { value: 'light', label: t.lightMode, icon: 'white-balance-sunny' },
      ]}
    />
  );
}
