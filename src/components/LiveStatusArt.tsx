import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, {
  Easing,
  interpolate,
  type SharedValue,
  useAnimatedStyle,
  useReducedMotion,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import Svg, { Circle, Defs, LinearGradient, Stop } from 'react-native-svg';

import { useTheme } from '@/state/SettingsProvider';
import { glow } from '@/theme/tokens';
import type { IconName } from './NeonButton';

const SIZE = 132;
const STROKE = 5;
const R = (SIZE - STROKE) / 2;
const CIRC = 2 * Math.PI * R;

export type LiveStatusKind = 'loading' | 'error' | 'empty';

interface LiveStatusArtProps {
  kind: LiveStatusKind;
  icon: IconName;
  /** Number of progress dots under the loader (one per question). */
  dots?: number;
}

/**
 * Animated emblem for the live-question states:
 * loading = spinning neon arc + pulsing core, error = red shake-in,
 * empty = gold gentle float. Everything runs on the UI thread and
 * falls back to a static emblem when reduced motion is on.
 */
export function LiveStatusArt({ kind, icon, dots = 5 }: LiveStatusArtProps) {
  const { colors: c } = useTheme();
  const reduceMotion = useReducedMotion();
  const spin = useSharedValue(0);
  const pulse = useSharedValue(0);
  const enter = useSharedValue(reduceMotion ? 1 : 0);
  const shake = useSharedValue(0);

  useEffect(() => {
    if (reduceMotion) return;
    enter.set(withTiming(1, { duration: 420, easing: Easing.out(Easing.back(1.6)) }));
    if (kind === 'loading') {
      spin.set(withRepeat(withTiming(1, { duration: 1400, easing: Easing.linear }), -1, false));
      pulse.set(withRepeat(withTiming(1, { duration: 900, easing: Easing.inOut(Easing.sin) }), -1, true));
    } else if (kind === 'error') {
      shake.set(
        withDelay(
          200,
          withSequence(
            withTiming(-8, { duration: 60 }),
            withTiming(8, { duration: 60 }),
            withTiming(-5, { duration: 60 }),
            withTiming(0, { duration: 60 }),
          ),
        ),
      );
    } else {
      pulse.set(withRepeat(withTiming(1, { duration: 1800, easing: Easing.inOut(Easing.sin) }), -1, true));
    }
  }, [kind, reduceMotion, enter, spin, pulse, shake]);

  const color = kind === 'loading' ? c.primaryGlow : kind === 'error' ? c.danger : c.gold;
  const glowColor = kind === 'loading' ? c.glowPrimary : kind === 'error' ? c.glowDanger : c.glowGold;

  const ringStyle = useAnimatedStyle(() => ({ transform: [{ rotate: `${spin.value * 360}deg` }] }));
  const coreStyle = useAnimatedStyle(() => ({
    opacity: enter.value,
    transform: [
      { perspective: 600 },
      { translateX: shake.value },
      { translateY: kind === 'empty' ? interpolate(pulse.value, [0, 1], [3, -5]) : 0 },
      { rotateY: `${interpolate(enter.value, [0, 1], [70, 0])}deg` },
      { scale: interpolate(enter.value, [0, 1], [0.6, 1]) * (kind === 'loading' ? interpolate(pulse.value, [0, 1], [0.94, 1.06]) : 1) },
    ],
  }));

  return (
    <View style={styles.wrap} importantForAccessibility="no-hide-descendants" accessibilityElementsHidden>
      <View style={styles.emblem}>
        {/* Track ring + (loading only) a spinning gradient arc. */}
        <Svg width={SIZE} height={SIZE} style={StyleSheet.absoluteFill}>
          <Circle cx={SIZE / 2} cy={SIZE / 2} r={R} stroke={c.track} strokeWidth={STROKE} fill="none" />
        </Svg>
        {kind === 'loading' && (
          <Animated.View style={[StyleSheet.absoluteFill, ringStyle]}>
            <Svg width={SIZE} height={SIZE}>
              <Defs>
                <LinearGradient id="arc" x1="0" y1="0" x2="1" y2="1">
                  <Stop offset="0" stopColor={c.primaryGlow} />
                  <Stop offset="1" stopColor={c.accent} />
                </LinearGradient>
              </Defs>
              <Circle
                cx={SIZE / 2}
                cy={SIZE / 2}
                r={R}
                stroke="url(#arc)"
                strokeWidth={STROKE}
                strokeLinecap="round"
                fill="none"
                strokeDasharray={`${CIRC * 0.32} ${CIRC}`}
              />
            </Svg>
          </Animated.View>
        )}
        <Animated.View style={[styles.core, { borderColor: color, backgroundColor: c.chip, boxShadow: glow(glowColor, 26) }, coreStyle]}>
          <MaterialCommunityIcons name={icon} size={46} color={color} />
        </Animated.View>
      </View>
      {kind === 'loading' && (
        <View style={styles.dots}>
          {Array.from({ length: dots }, (_, i) => (
            <Dot key={i} index={i} color={color} progress={spin} reduceMotion={reduceMotion} />
          ))}
        </View>
      )}
    </View>
  );
}

/** Five dots that light up in sequence as the arc spins — one per incoming question. */
function Dot({ index, color, progress, reduceMotion }: { index: number; color: string; progress: SharedValue<number>; reduceMotion: boolean }) {
  const { colors: c } = useTheme();
  const style = useAnimatedStyle(() => {
    if (reduceMotion) return { opacity: 0.7, transform: [{ scale: 1 }] };
    const phase = (progress.value * 5 - index + 5) % 5;
    const lit = phase < 1 ? 1 - phase : 0;
    return { opacity: 0.35 + lit * 0.65, transform: [{ scale: 1 + lit * 0.35 }] };
  });
  return <Animated.View style={[styles.dot, { backgroundColor: color, boxShadow: glow(c.glowPrimary, 8) }, style]} />;
}

const styles = StyleSheet.create({
  wrap: { alignItems: 'center', gap: 18 },
  emblem: { width: SIZE, height: SIZE, alignItems: 'center', justifyContent: 'center' },
  core: {
    width: 92,
    height: 92,
    borderRadius: 46,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dots: { flexDirection: 'row', gap: 10 },
  dot: { width: 9, height: 9, borderRadius: 5 },
});
