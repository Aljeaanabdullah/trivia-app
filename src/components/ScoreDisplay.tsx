import { useEffect, useRef } from 'react';
import { StyleSheet, Text } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useReducedMotion,
  useSharedValue,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

import { popSpring } from '@/animation/motion';
import { useI18n, useThemedStyles, useTheme } from '@/state/SettingsProvider';
import { fontSize, glow, radius, spacing, type ColorTokens } from '@/theme/tokens';
import { fonts } from '@/theme/typography';

export function ScoreDisplay({ score }: { score: number }) {
  const { colors: c } = useTheme();
  const { t } = useI18n();
  const styles = useThemedStyles(makeStyles);
  const reduceMotion = useReducedMotion();
  const scale = useSharedValue(1);
  const flash = useSharedValue(0);
  const previous = useRef(score);

  useEffect(() => {
    const increased = score > previous.current;
    previous.current = score;
    if (!increased || reduceMotion) return;
    scale.set(withSequence(withTiming(1.3, { duration: 120 }), withSpring(1, popSpring)));
    flash.set(withSequence(withTiming(1, { duration: 120 }), withTiming(0, { duration: 600 })));
  }, [score, reduceMotion, scale, flash]);

  const gold = c.gold;
  const border = c.border;
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
    borderColor: flash.value > 0.5 ? gold : border,
  }));

  return (
    <Animated.View style={[styles.pill, animatedStyle]} accessible accessibilityLabel={`${t.score}: ${score}`}>
      <Text style={styles.label} maxFontSizeMultiplier={1.3}>
        {t.score}
      </Text>
      <Text style={styles.value} maxFontSizeMultiplier={1.2}>
        {score}
      </Text>
    </Animated.View>
  );
}

const makeStyles = (c: ColorTokens) =>
  StyleSheet.create({
    pill: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: spacing.sm,
      paddingHorizontal: spacing.lg,
      paddingVertical: spacing.xs,
      borderRadius: radius.pill,
      borderWidth: 1.5,
      backgroundColor: c.chip,
      boxShadow: glow(c.glowGold, 12),
    },
    label: { color: c.textMuted, fontSize: fontSize.caption + 1, fontFamily: fonts.bold, letterSpacing: 0.5 },
    value: { color: c.gold, fontSize: fontSize.title, fontFamily: fonts.display, fontVariant: ['tabular-nums'] },
  });
