import { router } from 'expo-router';
import type { ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { useI18n, useThemedStyles } from '@/state/SettingsProvider';
import { fontSize, spacing, type ColorTokens } from '@/theme/tokens';
import { fonts } from '@/theme/typography';
import { IconButton } from './IconButton';

export function goBackOrHome() {
  if (router.canGoBack()) router.back();
  else router.replace('/');
}

interface ScreenHeaderProps {
  title: string;
  subtitle?: string;
  onBack?: () => void;
  right?: ReactNode;
}

export function ScreenHeader({ title, subtitle, onBack = goBackOrHome, right }: ScreenHeaderProps) {
  const { t, isRTL, textStart } = useI18n();
  const styles = useThemedStyles(makeStyles);
  return (
    <View style={styles.row}>
      <IconButton icon={isRTL ? 'arrow-right' : 'arrow-left'} label={t.back} onPress={onBack} />
      <View style={styles.titles}>
        <Text style={[styles.title, { textAlign: textStart }]} accessibilityRole="header" numberOfLines={2}>
          {title}
        </Text>
        {subtitle ? (
          <Text style={[styles.subtitle, { textAlign: textStart }]} numberOfLines={1}>
            {subtitle}
          </Text>
        ) : null}
      </View>
      {right}
    </View>
  );
}

const makeStyles = (c: ColorTokens) =>
  StyleSheet.create({
    row: { flexDirection: 'row', alignItems: 'center', gap: spacing.md },
    titles: { flex: 1 },
    title: { color: c.text, fontSize: fontSize.title, fontFamily: fonts.black, lineHeight: 32 },
    subtitle: { color: c.textMuted, fontSize: fontSize.caption + 1, fontFamily: fonts.semibold },
  });
