import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, {
  Easing,
  interpolate,
  useAnimatedStyle,
  useReducedMotion,
  useSharedValue,
  withDelay,
  withRepeat,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import Svg, { Defs, G, Path, RadialGradient, Stop, Circle } from 'react-native-svg';

import { useTheme } from '@/state/SettingsProvider';
import { glow } from '@/theme/tokens';
import type { IconName } from './NeonButton';

const SIZE = 200;
const RAYS = 12;
// One wedge from the center to the rim, rotated around the circle.
const RAY_PATH = `M ${SIZE / 2} ${SIZE / 2} L ${SIZE / 2 - 9} 6 L ${SIZE / 2 + 9} 6 Z`;

interface AnimatedTrophyProps {
  color: string;
  icon?: IconName;
}

/**
 * 3D flip-in trophy with slowly rotating light rays and a gentle float.
 * All motion runs on the UI thread; reduced-motion shows it static.
 */
export function AnimatedTrophy({ color, icon = 'trophy' }: AnimatedTrophyProps) {
  const reduceMotion = useReducedMotion();
  const { colors: c } = useTheme();
  const enter = useSharedValue(reduceMotion ? 1 : 0);
  const spin = useSharedValue(0);
  const float = useSharedValue(0);

  useEffect(() => {
    if (reduceMotion) return;
    enter.set(withSpring(1, { damping: 11, stiffness: 120 }));
    spin.set(withRepeat(withTiming(1, { duration: 14000, easing: Easing.linear }), -1, false));
    float.set(withDelay(700, withRepeat(withTiming(1, { duration: 1800, easing: Easing.inOut(Easing.sin) }), -1, true)));
  }, [reduceMotion, enter, spin, float]);

  const trophyStyle = useAnimatedStyle(() => ({
    opacity: Math.min(1, enter.value * 1.5),
    transform: [
      { perspective: 700 },
      { translateY: interpolate(float.value, [0, 1], [0, -8]) },
      { rotateY: `${interpolate(enter.value, [0, 1], [540, 0])}deg` },
      { scale: interpolate(enter.value, [0, 1], [0.2, 1]) },
    ],
  }));
  const raysStyle = useAnimatedStyle(() => ({
    opacity: interpolate(enter.value, [0, 1], [0, 0.55]),
    transform: [{ rotate: `${spin.value * 360}deg` }, { scale: interpolate(enter.value, [0, 1], [0.6, 1]) }],
  }));

  return (
    <View style={styles.wrap} importantForAccessibility="no-hide-descendants" accessibilityElementsHidden>
      <Animated.View style={[StyleSheet.absoluteFill, raysStyle]}>
        <Svg width={SIZE} height={SIZE}>
          <Defs>
            <RadialGradient id="rayFade" cx="50%" cy="50%" r="50%">
              <Stop offset="0" stopColor={color} stopOpacity={0.9} />
              <Stop offset="1" stopColor={color} stopOpacity={0} />
            </RadialGradient>
          </Defs>
          <G>
            {Array.from({ length: RAYS }, (_, i) => (
              <Path
                key={i}
                d={RAY_PATH}
                fill="url(#rayFade)"
                transform={`rotate(${(360 / RAYS) * i} ${SIZE / 2} ${SIZE / 2})`}
              />
            ))}
          </G>
          <Circle cx={SIZE / 2} cy={SIZE / 2} r={SIZE / 2} fill="url(#rayFade)" opacity={0.25} />
        </Svg>
      </Animated.View>
      <Animated.View style={[styles.medal, { borderColor: color, backgroundColor: c.chip, boxShadow: glow(color, 36) }, trophyStyle]}>
        <MaterialCommunityIcons name={icon} size={72} color={color} />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { width: SIZE, height: SIZE, alignSelf: 'center', alignItems: 'center', justifyContent: 'center' },
  medal: {
    width: 124,
    height: 124,
    borderRadius: 62,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
