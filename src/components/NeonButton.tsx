import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, type ComponentProps } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useReducedMotion,
  useSharedValue,
  withRepeat,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

import { hapticTap } from '@/animation/haptics';
import { pressSpring } from '@/animation/motion';
import { useThemedStyles, useTheme } from '@/state/SettingsProvider';
import { fontSize, glow, radius, spacing, type ColorTokens } from '@/theme/tokens';
import { fonts } from '@/theme/typography';

export type IconName = ComponentProps<typeof MaterialCommunityIcons>['name'];

interface NeonButtonProps {
  label: string;
  onPress: () => void;
  variant?: 'primary' | 'ghost';
  icon?: IconName;
  disabled?: boolean;
  accessibilityHint?: string;
  /** Slow breathing glow to draw the eye to the main call to action. */
  pulse?: boolean;
}

export function NeonButton({ label, onPress, variant = 'primary', icon, disabled, accessibilityHint, pulse }: NeonButtonProps) {
  const { colors: c } = useTheme();
  const styles = useThemedStyles(makeStyles);
  const scale = useSharedValue(1);
  const animatedStyle = useAnimatedStyle(() => ({ transform: [{ scale: scale.value }] }));
  const primary = variant === 'primary';
  const reduceMotion = useReducedMotion();
  const breath = useSharedValue(0);

  useEffect(() => {
    if (!pulse || reduceMotion) return;
    breath.set(withRepeat(withTiming(1, { duration: 1600, easing: Easing.inOut(Easing.sin) }), -1, true));
  }, [pulse, reduceMotion, breath]);

  const haloStyle = useAnimatedStyle(() => ({
    opacity: 0.25 + breath.value * 0.45,
    transform: [{ scaleX: 1 + breath.value * 0.04 }, { scaleY: 1 + breath.value * 0.18 }],
  }));
  const contentColor = primary ? c.onPrimary : c.text;

  return (
    <Animated.View style={[animatedStyle, primary && styles.primaryGlow, disabled && styles.disabled]}>
      {pulse && primary && (
        <Animated.View pointerEvents="none" style={[styles.halo, { boxShadow: glow(c.glowPrimary, 28) }, haloStyle]} />
      )}
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={label}
        accessibilityHint={accessibilityHint}
        accessibilityState={{ disabled: !!disabled }}
        disabled={disabled}
        onPress={() => {
          hapticTap();
          onPress();
        }}
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
        {icon && <MaterialCommunityIcons name={icon} size={22} color={contentColor} />}
        <Text style={[styles.label, { color: contentColor }]} maxFontSizeMultiplier={1.4}>
          {label}
        </Text>
      </Pressable>
    </Animated.View>
  );
}

const makeStyles = (c: ColorTokens) =>
  StyleSheet.create({
    base: {
      minHeight: 56,
      borderRadius: radius.pill,
      paddingHorizontal: spacing.xl,
      paddingVertical: spacing.sm,
      flexDirection: 'row',
      gap: spacing.sm,
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
    },
    primaryGlow: { borderRadius: radius.pill, boxShadow: glow(c.glowPrimary, 22) },
    ghost: { borderWidth: 1.5, borderColor: c.border, backgroundColor: c.chip },
    label: { fontSize: fontSize.label, fontFamily: fonts.extrabold, letterSpacing: 0.3 },
    disabled: { opacity: 0.5 },
    halo: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      start: 0,
      end: 0,
      borderRadius: radius.pill,
      borderWidth: 2,
      borderColor: c.primaryGlow,
    },
  });
