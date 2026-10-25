import { useEffect, useState } from 'react';
import { Text, type StyleProp, type TextStyle } from 'react-native';
import { useReducedMotion } from 'react-native-reanimated';

/** Counts up from 0 to `value` once (a handful of steps, so it costs a few renders at most). */
export function AnimatedScore({ value, style, delayMs = 500 }: { value: number; style?: StyleProp<TextStyle>; delayMs?: number }) {
  const reduceMotion = useReducedMotion();
  const [shown, setShown] = useState(reduceMotion ? value : 0);

  useEffect(() => {
    if (reduceMotion || value <= 0) return;
    let current = 0;
    let interval: ReturnType<typeof setInterval> | undefined;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        current += 1;
        setShown(current);
        if (current >= value && interval) clearInterval(interval);
      }, Math.max(90, 600 / value));
    }, delayMs);
    return () => {
      clearTimeout(timeout);
      if (interval) clearInterval(interval);
    };
  }, [value, reduceMotion, delayMs]);

  return (
    <Text style={style} maxFontSizeMultiplier={1.2}>
      {shown}
    </Text>
  );
}
