import { useEffect, type ReactNode } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import Animated, { useAnimatedStyle, useReducedMotion, useSharedValue, withTiming } from 'react-native-reanimated';

/** Fades and lifts a state card (loading / error / empty) in on mount. Key it per state to replay. */
export function StateCard({
  style,
  liveRegion,
  children,
}: {
  style: StyleProp<ViewStyle>;
  liveRegion?: 'polite' | 'assertive';
  children: ReactNode;
}) {
  const reduceMotion = useReducedMotion();
  const shown = useSharedValue(reduceMotion ? 1 : 0);
  useEffect(() => {
    shown.set(withTiming(1, { duration: 260 }));
  }, [shown]);
  const animated = useAnimatedStyle(() => ({ opacity: shown.value, transform: [{ translateY: (1 - shown.value) * 12 }] }));
  return (
    <Animated.View style={[style, animated]} accessibilityLiveRegion={liveRegion}>
      {children}
    </Animated.View>
  );
}
