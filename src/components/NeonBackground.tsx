import { LinearGradient } from 'expo-linear-gradient';
import type { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import Svg, { Defs, Ellipse, RadialGradient, Stop } from 'react-native-svg';

import { useTheme } from '@/state/SettingsProvider';

/** Full-screen gradient backdrop with soft static neon glows (no blur layers, no per-frame work). */
export function NeonBackground({ children }: { children: ReactNode }) {
  const { colors: c } = useTheme();
  return (
    <View style={[styles.root, { backgroundColor: c.background }]}>
      <LinearGradient colors={c.backdrop} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={StyleSheet.absoluteFill} />
      <Svg pointerEvents="none" style={StyleSheet.absoluteFill} width="100%" height="100%">
        <Defs>
          <RadialGradient id="glowA" cx="50%" cy="50%" r="50%">
            <Stop offset="0" stopColor={c.backdropGlowA} stopOpacity={c.glowOpacity} />
            <Stop offset="1" stopColor={c.backdropGlowA} stopOpacity={0} />
          </RadialGradient>
          <RadialGradient id="glowB" cx="50%" cy="50%" r="50%">
            <Stop offset="0" stopColor={c.backdropGlowB} stopOpacity={c.glowOpacity * 0.9} />
            <Stop offset="1" stopColor={c.backdropGlowB} stopOpacity={0} />
          </RadialGradient>
        </Defs>
        <Ellipse cx="8%" cy="6%" rx="70%" ry="32%" fill="url(#glowA)" />
        <Ellipse cx="95%" cy="96%" rx="75%" ry="34%" fill="url(#glowB)" />
      </Svg>
      <View pointerEvents="none" style={[styles.horizon, { backgroundColor: c.primaryGlow }]} />
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, overflow: 'hidden' },
  horizon: { position: 'absolute', start: 0, end: 0, top: '58%', height: 1, opacity: 0.16 },
});
