import { LinearGradient } from 'expo-linear-gradient';
import { Pressable, StyleSheet, Text } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

import { pressSpring } from '@/animation/motion';
import { darkColors as c, fontSize, glow, radius, spacing } from '@/theme/tokens';

interface NeonButtonProps {
  label: string;
  onPress: () => void;
  variant?: 'primary' | 'ghost';
  disabled?: boolean;
}

export function NeonButton({ label, onPress, variant = 'primary', disabled }: NeonButtonProps) {
  const scale = useSharedValue(1);
  const animatedStyle = useAnimatedStyle(() => ({ transform: [{ scale: scale.value }] }));
  const primary = variant === 'primary';

  return (
    <Animated.View style={[animatedStyle, primary && styles.primaryGlow, disabled && styles.disabled]}>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={label}
        accessibilityState={{ disabled }}
        disabled={disabled}
        onPress={onPress}
        onPressIn={() => scale.set(withSpring(0.95, pressSpring))}
        onPressOut={() => scale.set(withSpring(1, pressSpring))}
        style={[styles.base, !primary && styles.ghost]}
      >
        {primary && (
          <LinearGradient
            colors={[c.primaryGlow, c.primary, c.accent]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={StyleSheet.absoluteFill}
          />
        )}
        <Text style={[styles.label, primary ? styles.primaryLabel : styles.ghostLabel]}>{label}</Text>
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  base: {
    minHeight: 56,
    borderRadius: radius.pill,
    paddingHorizontal: spacing.xl,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  primaryGlow: { borderRadius: radius.pill, boxShadow: glow('rgba(79, 195, 255, 0.55)', 22) },
  ghost: { borderWidth: 1.5, borderColor: c.border, backgroundColor: 'rgba(10, 16, 48, 0.6)' },
  label: { fontSize: fontSize.label, fontWeight: '800', letterSpacing: 0.4 },
  primaryLabel: { color: c.onPrimary },
  ghostLabel: { color: c.text },
  disabled: { opacity: 0.5 },
});
