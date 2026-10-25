import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated, {
  cancelAnimation,
  Easing,
  useAnimatedProps,
  useAnimatedStyle,
  useReducedMotion,
  useSharedValue,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import Svg, { Circle } from 'react-native-svg';

import { GAME_CONFIG } from '@/features/game/config';
import { useCountdown } from '@/features/game/useCountdown';
import { en } from '@/i18n/en';
import { darkColors as c, glow } from '@/theme/tokens';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const SIZE = 64;
const STROKE = 5;
const R = (SIZE - STROKE) / 2;
const CIRCUMFERENCE = 2 * Math.PI * R;

interface CountdownTimerProps {
  durationSeconds: number;
  running: boolean;
  onExpire: () => void;
}

/**
 * Owns its own countdown state so per-second ticks re-render only this
 * component. The ring sweeps on the UI thread with a single linear timing.
 * Remount with a new `key` to restart.
 */
export function CountdownTimer({ durationSeconds, running, onExpire }: CountdownTimerProps) {
  const { secondsLeft, remainingMs } = useCountdown({ durationSeconds, running, onExpire });
  const reduceMotion = useReducedMotion();
  const progress = useSharedValue(1);
  const pulse = useSharedValue(1);
  const urgent = secondsLeft <= GAME_CONFIG.urgentThresholdSeconds;

  // Runs after useCountdown's effects, so remainingMs is already up to date.
  useEffect(() => {
    cancelAnimation(progress);
    progress.set(remainingMs.current / (durationSeconds * 1000));
    if (running) {
      progress.set(withTiming(0, { duration: remainingMs.current, easing: Easing.linear }));
    }
  }, [running, durationSeconds, progress, remainingMs]);

  useEffect(() => {
    if (!running || !urgent || reduceMotion || secondsLeft === 0) return;
    pulse.set(withSequence(withTiming(1.14, { duration: 140 }), withTiming(1, { duration: 260 })));
  }, [secondsLeft, running, urgent, reduceMotion, pulse]);

  const ringProps = useAnimatedProps(() => ({ strokeDashoffset: CIRCUMFERENCE * (1 - progress.value) }));
  const pulseStyle = useAnimatedStyle(() => ({ transform: [{ scale: pulse.value }] }));
  const color = urgent ? c.danger : c.primaryGlow;

  return (
    <Animated.View
      style={[styles.wrap, { boxShadow: glow(urgent ? 'rgba(255,77,109,0.6)' : 'rgba(79,195,255,0.45)', 16) }, pulseStyle]}
      accessible
      accessibilityRole="timer"
      accessibilityLabel={en.secondsLeft(secondsLeft)}
    >
      <Svg width={SIZE} height={SIZE} style={styles.svg}>
        <Circle cx={SIZE / 2} cy={SIZE / 2} r={R} stroke="rgba(147,164,204,0.18)" strokeWidth={STROKE} fill="none" />
        <AnimatedCircle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={R}
          stroke={color}
          strokeWidth={STROKE}
          strokeLinecap="round"
          fill="none"
          strokeDasharray={`${CIRCUMFERENCE} ${CIRCUMFERENCE}`}
          animatedProps={ringProps}
        />
      </Svg>
      <View style={styles.center}>
        <Text style={[styles.value, { color }]}>{secondsLeft}</Text>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  wrap: { width: SIZE, height: SIZE, borderRadius: SIZE / 2, backgroundColor: 'rgba(10,16,48,0.75)' },
  // Start the sweep at 12 o'clock.
  svg: { transform: [{ rotate: '-90deg' }] },
  center: { position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, alignItems: 'center', justifyContent: 'center' },
  value: { fontSize: 22, fontWeight: '900', fontVariant: ['tabular-nums'] },
});
