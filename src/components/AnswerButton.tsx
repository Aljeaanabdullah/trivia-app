import { useEffect } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, {
  FadeInDown,
  useAnimatedStyle,
  useReducedMotion,
  useSharedValue,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

import { popSpring, pressSpring } from '@/animation/motion';
import { darkColors as c, fontSize, glow, radius, spacing } from '@/theme/tokens';

/** idle: selectable · correct: chosen and right · wrong: chosen and wrong · reveal: the right answer after a miss · dimmed: other choices after locking. */
export type AnswerState = 'idle' | 'correct' | 'wrong' | 'reveal' | 'dimmed';

interface AnswerButtonProps {
  index: number;
  label: string;
  state: AnswerState;
  disabled: boolean;
  onPress: (index: number) => void;
}

const LETTERS = ['A', 'B', 'C', 'D'];

const palette: Record<AnswerState, { border: string; bg: string; badge: string; shadow?: string }> = {
  idle: { border: c.border, bg: 'rgba(17,26,61,0.85)', badge: c.primary, shadow: glow('rgba(47,140,255,0.22)', 12) },
  correct: { border: c.gold, bg: c.goldSoft, badge: c.gold, shadow: glow('rgba(255,200,61,0.7)', 22) },
  reveal: { border: c.gold, bg: c.goldSoft, badge: c.gold, shadow: glow('rgba(255,200,61,0.4)', 14) },
  wrong: { border: c.danger, bg: c.dangerSoft, badge: c.danger, shadow: glow('rgba(255,77,109,0.6)', 18) },
  dimmed: { border: 'rgba(147,164,204,0.15)', bg: 'rgba(17,26,61,0.5)', badge: 'rgba(147,164,204,0.35)' },
};

export function AnswerButton({ index, label, state, disabled, onPress }: AnswerButtonProps) {
  const reduceMotion = useReducedMotion();
  const scale = useSharedValue(1);
  const shakeX = useSharedValue(0);

  useEffect(() => {
    if (reduceMotion) return;
    if (state === 'wrong') {
      shakeX.set(
        withSequence(
        withTiming(-10, { duration: 50 }),
        withTiming(10, { duration: 50 }),
        withTiming(-7, { duration: 50 }),
        withTiming(7, { duration: 50 }),
          withTiming(0, { duration: 50 }),
        ),
      );
    } else if (state === 'correct') {
      scale.set(withSequence(withTiming(1.05, { duration: 120 }), withSpring(1, popSpring)));
    }
  }, [state, reduceMotion, scale, shakeX]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: shakeX.value }, { scale: scale.value }],
  }));

  const colors = palette[state];
  const letter = LETTERS[index];
  const statusMark = state === 'correct' || state === 'reveal' ? '✓' : state === 'wrong' ? '✕' : null;

  return (
    // Layout animation on the wrapper so it never fights the shake/scale transform.
    <Animated.View entering={FadeInDown.delay(140 + index * 70).duration(380)}>
      <Animated.View style={animatedStyle}>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={`${letter}. ${label}`}
          accessibilityState={{ disabled, selected: state === 'correct' || state === 'wrong' }}
          disabled={disabled}
          onPress={() => onPress(index)}
          onPressIn={() => scale.set(withSpring(0.96, pressSpring))}
          onPressOut={() => scale.set(withSpring(1, pressSpring))}
          style={[styles.button, { borderColor: colors.border, backgroundColor: colors.bg, boxShadow: colors.shadow }]}
        >
          <View style={[styles.badge, { backgroundColor: colors.badge }]}>
            <Text style={styles.badgeText}>{letter}</Text>
          </View>
          <Text style={[styles.label, state === 'dimmed' && styles.dimmedLabel]}>{label}</Text>
          {statusMark && <Text style={[styles.mark, { color: colors.border }]}>{statusMark}</Text>}
        </Pressable>
      </Animated.View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  button: {
    minHeight: 60,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
    borderRadius: radius.md,
    borderWidth: 1.5,
  },
  badge: { width: 34, height: 34, borderRadius: 10, alignItems: 'center', justifyContent: 'center' },
  badgeText: { color: c.onPrimary, fontWeight: '900', fontSize: fontSize.body },
  label: { flex: 1, color: c.text, fontSize: fontSize.label, fontWeight: '700' },
  dimmedLabel: { color: c.textMuted },
  mark: { fontSize: 20, fontWeight: '900', paddingHorizontal: spacing.xs },
});
