import { memo, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, {
  Easing,
  type SharedValue,
  useAnimatedStyle,
  useReducedMotion,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { darkColors as c } from '@/theme/tokens';

const COLORS = [c.gold, c.gold, c.primaryGlow, c.accent];
const COUNT = 16;

/** Deterministic pseudo-random in [0, 1) so render stays pure. */
const hash = (n: number) => {
  const x = Math.sin(n * 12.9898) * 43758.5453;
  return x - Math.floor(x);
};

const PARTICLES = Array.from({ length: COUNT }, (_, i) => {
  const angle = (i / COUNT) * Math.PI * 2 + hash(i) * 0.4;
  const distance = 90 + hash(i + 50) * 70;
  return {
    dx: Math.cos(angle) * distance,
    dy: Math.sin(angle) * distance - 20,
    size: 6 + hash(i + 100) * 6,
    color: COLORS[i % COLORS.length],
    spin: (hash(i + 150) - 0.5) * 540,
  };
});

/**
 * Lightweight celebratory burst: 16 views driven by a single shared value on
 * the UI thread. Remount with a new `key` to replay.
 */
export const ParticleBurst = memo(function ParticleBurst() {
  const reduceMotion = useReducedMotion();
  const t = useSharedValue(0);

  useEffect(() => {
    t.set(withTiming(1, { duration: 900, easing: Easing.out(Easing.quad) }));
  }, [t]);

  if (reduceMotion) return null;

  return (
    <View pointerEvents="none" style={styles.origin}>
      {PARTICLES.map((p, i) => (
        <Particle key={i} t={t} {...p} />
      ))}
    </View>
  );
});

interface ParticleProps {
  t: SharedValue<number>;
  dx: number;
  dy: number;
  size: number;
  color: string;
  spin: number;
}

function Particle({ t, dx, dy, size, color, spin }: ParticleProps) {
  const style = useAnimatedStyle(() => ({
    opacity: 1 - t.value,
    transform: [
      { translateX: dx * t.value },
      // A little gravity: particles arc downward as they fade.
      { translateY: dy * t.value + 60 * t.value * t.value },
      { rotate: `${spin * t.value}deg` },
      { scale: 1 - t.value * 0.4 },
    ],
  }));
  return <Animated.View style={[styles.particle, { width: size, height: size * 0.6, backgroundColor: color }, style]} />;
}

const styles = StyleSheet.create({
  origin: { position: 'absolute', top: '50%', left: '50%', width: 0, height: 0 },
  particle: { position: 'absolute', borderRadius: 2 },
});
