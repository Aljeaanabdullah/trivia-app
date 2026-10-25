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
import { darkColors as c, fontSize, glow, radius, spacing } from '@/theme/tokens';

interface QuestionCardProps {
  text: string;
  /** Freezes the idle float once an answer is locked in. */
  settled: boolean;
}

/** Floating glass card. Remount it (via `key`) per question to replay the entrance. */
export function QuestionCard({ text, settled }: QuestionCardProps) {
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
      <LinearGradient
        colors={['rgba(47,140,255,0.22)', 'rgba(17,26,61,0.92)', 'rgba(155,92,255,0.2)']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.card}
      >
        <LinearGradient
          colors={['rgba(255,255,255,0.14)', 'rgba(255,255,255,0)']}
          style={styles.sheen}
          pointerEvents="none"
        />
        <Text style={styles.text} accessibilityRole="header">
          {text}
        </Text>
      </LinearGradient>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  shadow: {
    borderRadius: radius.lg,
    boxShadow: `${glow('rgba(79,155,255,0.35)', 28)}, 0 18px 32px rgba(0,0,0,0.55)`,
  },
  card: {
    minHeight: 150,
    borderRadius: radius.lg,
    borderWidth: 1.5,
    borderColor: c.border,
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.xxl,
    justifyContent: 'center',
    overflow: 'hidden',
  },
  sheen: { position: 'absolute', top: 0, left: 0, right: 0, height: '45%' },
  text: { color: c.text, fontSize: fontSize.title, lineHeight: 32, fontWeight: '800', textAlign: 'center' },
});
