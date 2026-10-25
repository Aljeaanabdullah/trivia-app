import { StyleSheet, Text, View } from 'react-native';
import Animated, { ZoomIn } from 'react-native-reanimated';

import { useI18n, useThemedStyles } from '@/state/SettingsProvider';
import { fontSize, glow, radius, spacing, type ColorTokens } from '@/theme/tokens';
import { fonts } from '@/theme/typography';
import { NeonButton } from './NeonButton';

interface RoundSummaryProps {
  score: number;
  total: number;
  onPlayAgain: () => void;
  onHome: () => void;
}

/** Interim end-of-round card. Phase 6 replaces it with the full animated Results screen. */
export function RoundSummary({ score, total, onPlayAgain, onHome }: RoundSummaryProps) {
  const { t } = useI18n();
  const styles = useThemedStyles(makeStyles);
  return (
    <Animated.View entering={ZoomIn.duration(420)} style={styles.card}>
      <Text style={styles.title}>{t.resultsTitle}</Text>
      <Text style={styles.score} accessibilityLabel={t.outOf(score, total)}>
        {score} / {total}
      </Text>
      <View style={styles.actions}>
        <NeonButton label={t.playAgain} icon="replay" onPress={onPlayAgain} />
        <NeonButton label={t.home} icon="home" variant="ghost" onPress={onHome} />
      </View>
    </Animated.View>
  );
}

const makeStyles = (c: ColorTokens) =>
  StyleSheet.create({
    card: {
      borderRadius: radius.lg,
      borderWidth: 1.5,
      borderColor: c.gold,
      backgroundColor: c.surface,
      padding: spacing.xl,
      alignItems: 'center',
      gap: spacing.md,
      boxShadow: glow(c.glowGold, 30),
    },
    title: { color: c.text, fontSize: fontSize.title, fontFamily: fonts.black },
    score: { color: c.gold, fontSize: 56, fontFamily: fonts.display },
    actions: { alignSelf: 'stretch', gap: spacing.md, marginTop: spacing.sm },
  });
