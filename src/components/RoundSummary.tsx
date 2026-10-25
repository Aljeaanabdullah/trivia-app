import { StyleSheet, Text, View } from 'react-native';
import Animated, { ZoomIn } from 'react-native-reanimated';

import { en } from '@/i18n/en';
import { darkColors as c, fontSize, glow, radius, spacing } from '@/theme/tokens';
import { NeonButton } from './NeonButton';

interface RoundSummaryProps {
  score: number;
  total: number;
  onPlayAgain: () => void;
  onHome: () => void;
}

/** Interim end-of-round card. Phase 6 replaces it with the full animated Results screen. */
export function RoundSummary({ score, total, onPlayAgain, onHome }: RoundSummaryProps) {
  return (
    <Animated.View entering={ZoomIn.duration(420)} style={styles.card}>
      <Text style={styles.title}>{en.roundComplete}</Text>
      <Text style={styles.score} accessibilityLabel={`${score} / ${total}`}>
        {score}
        <Text style={styles.total}> / {total}</Text>
      </Text>
      <View style={styles.stats}>
        <Text style={[styles.stat, { color: c.gold }]}>{en.correctCount(score)}</Text>
        <Text style={[styles.stat, { color: c.danger }]}>{en.wrongCount(total - score)}</Text>
      </View>
      <View style={styles.actions}>
        <NeonButton label={en.playAgain} onPress={onPlayAgain} />
        <NeonButton label={en.home} variant="ghost" onPress={onHome} />
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: radius.lg,
    borderWidth: 1.5,
    borderColor: c.gold,
    backgroundColor: c.surface,
    padding: spacing.xl,
    alignItems: 'center',
    gap: spacing.md,
    boxShadow: glow('rgba(255,200,61,0.35)', 30),
  },
  title: { color: c.text, fontSize: fontSize.title, fontWeight: '900' },
  score: { color: c.gold, fontSize: 64, fontWeight: '900', fontVariant: ['tabular-nums'] },
  total: { color: c.textMuted, fontSize: fontSize.title },
  stats: { alignItems: 'center', gap: spacing.xs },
  stat: { fontSize: fontSize.body, fontWeight: '700' },
  actions: { alignSelf: 'stretch', gap: spacing.md, marginTop: spacing.sm },
});
