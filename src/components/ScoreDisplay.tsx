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
import { en } from '@/i18n/en';
import { darkColors as c, fontSize, glow, radius, spacing } from '@/theme/tokens';

export function ScoreDisplay({ score }: { score: number }) {
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

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
    borderColor: flash.value > 0.5 ? c.gold : c.border,
  }));

  return (
    <Animated.View
      style={[styles.pill, animatedStyle]}
      accessible
      accessibilityLabel={`${en.score}: ${score}`}
    >
      <Text style={styles.label}>{en.score}</Text>
      <Text style={styles.value}>{score}</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  pill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    borderRadius: radius.pill,
    borderWidth: 1.5,
    backgroundColor: 'rgba(10,16,48,0.75)',
    boxShadow: glow('rgba(255,200,61,0.25)', 14),
  },
  label: { color: c.textMuted, fontSize: fontSize.caption, fontWeight: '700', textTransform: 'uppercase', letterSpacing: 1 },
  value: { color: c.gold, fontSize: fontSize.title, fontWeight: '900', fontVariant: ['tabular-nums'] },
});
