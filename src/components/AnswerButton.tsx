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
import { useI18n, useThemedStyles, useTheme } from '@/state/SettingsProvider';
import { fontSize, glow, radius, spacing, type ColorTokens } from '@/theme/tokens';
import { fonts } from '@/theme/typography';

/** idle: selectable · correct: chosen and right · wrong: chosen and wrong · reveal: the right answer after a miss · dimmed: other choices after locking. */
export type AnswerState = 'idle' | 'correct' | 'wrong' | 'reveal' | 'dimmed';

interface AnswerButtonProps {
  index: number;
  label: string;
  state: AnswerState;
  disabled: boolean;
  onPress: (index: number) => void;
  /** Stretch to fill a grid cell (wide layouts). */
  fill?: boolean;
}

const LETTERS = { en: ['A', 'B', 'C', 'D'], ar: ['أ', 'ب', 'ج', 'د'] } as const;

function paletteFor(state: AnswerState, c: ColorTokens) {
  switch (state) {
    case 'correct':
      return { border: c.gold, bg: c.goldSoft, badge: c.gold, badgeText: c.onGold, shadow: glow(c.glowGold, 22) };
    case 'reveal':
      return { border: c.gold, bg: c.goldSoft, badge: c.gold, badgeText: c.onGold, shadow: glow(c.glowGold, 12) };
    case 'wrong':
      return { border: c.danger, bg: c.dangerSoft, badge: c.danger, badgeText: '#FFFFFF', shadow: glow(c.glowDanger, 18) };
    case 'dimmed':
      return { border: c.borderMuted, bg: c.chip, badge: c.track, badgeText: c.textMuted, shadow: undefined };
    default:
      return { border: c.border, bg: c.surface, badge: c.primary, badgeText: c.onPrimary, shadow: glow(c.glowPrimary, 10) };
  }
}

export function AnswerButton({ index, label, state, disabled, onPress, fill }: AnswerButtonProps) {
  const { colors: c } = useTheme();
  const { t, language, textStart } = useI18n();
  const styles = useThemedStyles(makeStyles);
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

  const colors = paletteFor(state, c);
  const letter = LETTERS[language][index];
  const statusIcon = state === 'correct' || state === 'reveal' ? '✓' : state === 'wrong' ? '✕' : null;

  return (
    // Layout animation on the wrapper so it never fights the shake/scale transform.
    <Animated.View
      entering={reduceMotion ? undefined : FadeInDown.delay(140 + index * 70).duration(380)}
      style={fill && styles.fill}
    >
      <Animated.View style={[animatedStyle, fill && styles.fill]}>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={t.answerOption(letter, label)}
          accessibilityState={{ disabled, selected: state === 'correct' || state === 'wrong' }}
          disabled={disabled}
          onPress={() => onPress(index)}
          onPressIn={() => scale.set(withSpring(0.96, pressSpring))}
          onPressOut={() => scale.set(withSpring(1, pressSpring))}
          style={[
            styles.button,
            fill && styles.fill,
            { borderColor: colors.border, backgroundColor: colors.bg, boxShadow: colors.shadow },
          ]}
        >
          <View style={[styles.badge, { backgroundColor: colors.badge }]}>
            <Text style={[styles.badgeText, { color: colors.badgeText }]} maxFontSizeMultiplier={1.2}>
              {letter}
            </Text>
          </View>
          <Text style={[styles.label, { textAlign: textStart }, state === 'dimmed' && styles.dimmedLabel]}>{label}</Text>
          {statusIcon && (
            <Text style={[styles.mark, { color: colors.border }]} importantForAccessibility="no">
              {statusIcon}
            </Text>
          )}
        </Pressable>
      </Animated.View>
    </Animated.View>
  );
}

const makeStyles = (c: ColorTokens) =>
  StyleSheet.create({
    button: {
      minHeight: 60,
      flexDirection: 'row',
      alignItems: 'center',
      gap: spacing.md,
      paddingHorizontal: spacing.md,
      paddingVertical: spacing.sm,
      borderRadius: radius.md,
      borderWidth: 1.5,
    },
    badge: { width: 36, minHeight: 36, borderRadius: 10, alignItems: 'center', justifyContent: 'center' },
    badgeText: { fontFamily: fonts.black, fontSize: fontSize.body, lineHeight: 24 },
    label: { flex: 1, color: c.text, fontSize: fontSize.label, lineHeight: 26, fontFamily: fonts.bold },
    dimmedLabel: { color: c.textMuted },
    fill: { flexGrow: 1 },
    mark: { fontSize: 20, fontFamily: fonts.black, paddingHorizontal: spacing.xs },
  });
