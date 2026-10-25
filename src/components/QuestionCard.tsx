import { LinearGradient } from 'expo-linear-gradient';
import { useEffect } from 'react';
import { StyleSheet, Text } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useReducedMotion,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

import { cardEntrance, floatCycle } from '@/animation/motion';
import { useThemedStyles, useTheme } from '@/state/SettingsProvider';
import { fontSize, glow, radius, spacing, type ColorTokens } from '@/theme/tokens';
import { fonts } from '@/theme/typography';

interface QuestionCardProps {
  text: string;
  /** Freezes the idle float once an answer is locked in. */
  settled: boolean;
  /** Small label above the question, e.g. the category. */
  eyebrow?: string;
}

/** Floating glass card. Remount it (via `key`) per question to replay the entrance. */
export function QuestionCard({ text, settled, eyebrow }: QuestionCardProps) {
  const { colors: c } = useTheme();
  const styles = useThemedStyles(makeStyles);
  const reduceMotion = useReducedMotion();
  const enter = useSharedValue(reduceMotion ? 1 : 0);
  const float = useSharedValue(0);

  useEffect(() => {
    if (reduceMotion) return;
    enter.set(withTiming(1, cardEntrance));
  }, [reduceMotion, enter]);

  useEffect(() => {
    if (reduceMotion || settled) {
      float.set(withTiming(0, { duration: 300 }));
      return;
    }
    float.set(withRepeat(withTiming(1, floatCycle), -1, true));
  }, [reduceMotion, settled, float]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: enter.value,
    transform: [
      { perspective: 900 },
      { translateY: interpolate(enter.value, [0, 1], [48, 0]) + interpolate(float.value, [0, 1], [-4, 4]) },
      { rotateX: `${interpolate(enter.value, [0, 1], [22, 0]) + interpolate(float.value, [0, 1], [1.5, -1.5])}deg` },
      { rotateY: `${interpolate(float.value, [0, 1], [-1.2, 1.2])}deg` },
      { scale: interpolate(enter.value, [0, 1], [0.9, 1]) },
    ],
  }));

  return (
    <Animated.View style={[styles.shadow, animatedStyle]}>
      <LinearGradient colors={c.cardGradient} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.card}>
        <LinearGradient colors={[c.cardSheen, 'transparent']} style={styles.sheen} pointerEvents="none" />
        {eyebrow ? <Text style={styles.eyebrow}>{eyebrow}</Text> : null}
        <Text style={styles.text} accessibilityRole="header">
          {text}
        </Text>
      </LinearGradient>
    </Animated.View>
  );
}

const makeStyles = (c: ColorTokens) =>
  StyleSheet.create({
    shadow: {
      borderRadius: radius.lg,
      boxShadow: `${glow(c.glowPrimary, 28)}, 0 18px 32px ${c.depthShadow}`,
    },
    card: {
      minHeight: 150,
      borderRadius: radius.lg,
      borderWidth: 1.5,
      borderColor: c.border,
      paddingHorizontal: spacing.xl,
      paddingVertical: spacing.xl,
      justifyContent: 'center',
      gap: spacing.sm,
      overflow: 'hidden',
    },
    sheen: { position: 'absolute', top: 0, start: 0, end: 0, height: '45%' },
    eyebrow: {
      color: c.primaryGlow,
      fontSize: fontSize.caption,
      fontFamily: fonts.bold,
      textAlign: 'center',
      letterSpacing: 1,
    },
    // Cairo has tall Arabic ascenders; a generous lineHeight prevents clipping.
    text: { color: c.text, fontSize: fontSize.title, lineHeight: 36, fontFamily: fonts.extrabold, textAlign: 'center' },
  });
