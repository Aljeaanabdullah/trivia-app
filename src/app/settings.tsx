import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

import { LanguageSwitcher, ThemeSwitcher } from '@/components/PreferenceSwitchers';
import { Screen } from '@/components/Screen';
import { ScreenHeader } from '@/components/ScreenHeader';
import { useI18n, useThemedStyles, useTheme } from '@/state/SettingsProvider';
import { fontSize, radius, spacing, type ColorTokens } from '@/theme/tokens';
import { fonts } from '@/theme/typography';

export default function SettingsScreen() {
  const { t, textStart } = useI18n();
  const { colors: c } = useTheme();
  const styles = useThemedStyles(makeStyles);
  return (
    <Screen maxWidth={560}>
      <ScreenHeader title={t.settings} />
      <View style={styles.section}>
        <Text style={[styles.heading, { textAlign: textStart }]}>{t.language}</Text>
        <LanguageSwitcher />
      </View>
      <View style={styles.section}>
        <Text style={[styles.heading, { textAlign: textStart }]}>{t.appearance}</Text>
        <ThemeSwitcher />
      </View>
      <View style={styles.note}>
        <MaterialCommunityIcons name="wifi-off" size={20} color={c.primaryGlow} />
        <Text style={[styles.noteText, { textAlign: textStart }]}>
          {t.offlineBadge}. {t.settingsSaved}
        </Text>
      </View>
    </Screen>
  );
}

const makeStyles = (c: ColorTokens) =>
  StyleSheet.create({
    section: {
      gap: spacing.md,
      padding: spacing.lg,
      borderRadius: radius.lg,
      borderWidth: 1,
      borderColor: c.border,
      backgroundColor: c.surface,
    },
    heading: { color: c.text, fontSize: fontSize.label, fontFamily: fonts.extrabold },
    note: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm, paddingHorizontal: spacing.sm },
    noteText: { flex: 1, color: c.textMuted, fontSize: fontSize.body - 1, fontFamily: fonts.regular, lineHeight: 22 },
  });
