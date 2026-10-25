import { LinearGradient } from 'expo-linear-gradient';
import type { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import Svg, { Defs, Ellipse, RadialGradient, Stop } from 'react-native-svg';

import { darkColors as c } from '@/theme/tokens';

/** Full-screen gradient backdrop with soft static neon glows (no blur layers, no per-frame work). */
export function NeonBackground({ children }: { children: ReactNode }) {
  return (
    <View style={styles.root}>
      <LinearGradient colors={c.backdrop} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={StyleSheet.absoluteFill} />
      <Svg pointerEvents="none" style={StyleSheet.absoluteFill} width="100%" height="100%">
        <Defs>
          <RadialGradient id="glowBlue" cx="50%" cy="50%" r="50%">
            <Stop offset="0" stopColor={c.primary} stopOpacity={0.38} />
            <Stop offset="1" stopColor={c.primary} stopOpacity={0} />
          </RadialGradient>
          <RadialGradient id="glowPurple" cx="50%" cy="50%" r="50%">
            <Stop offset="0" stopColor={c.accent} stopOpacity={0.34} />
            <Stop offset="1" stopColor={c.accent} stopOpacity={0} />
          </RadialGradient>
        </Defs>
        <Ellipse cx="8%" cy="6%" rx="70%" ry="32%" fill="url(#glowBlue)" />
        <Ellipse cx="95%" cy="96%" rx="75%" ry="34%" fill="url(#glowPurple)" />
      </Svg>
      <View pointerEvents="none" style={styles.horizon} />
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: c.background, overflow: 'hidden' },
  horizon: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: '58%',
    height: 1,
    backgroundColor: c.primaryGlow,
    opacity: 0.18,
  },
});
