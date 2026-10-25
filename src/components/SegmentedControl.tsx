import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { hapticTap } from '@/animation/haptics';
import { useThemedStyles, useTheme } from '@/state/SettingsProvider';
import { fontSize, glow, radius, spacing, type ColorTokens } from '@/theme/tokens';
import { fonts } from '@/theme/typography';
import type { IconName } from './NeonButton';

export interface SegmentOption<T extends string> {
  value: T;
  label: string;
  icon?: IconName;
}

interface SegmentedControlProps<T extends string> {
  options: SegmentOption<T>[];
  value: T;
  onChange: (value: T) => void;
  accessibilityLabel: string;
}

export function SegmentedControl<T extends string>({ options, value, onChange, accessibilityLabel }: SegmentedControlProps<T>) {
  const { colors: c } = useTheme();
  const styles = useThemedStyles(makeStyles);
  return (
    <View style={styles.track} accessibilityRole="radiogroup" accessibilityLabel={accessibilityLabel}>
      {options.map((option) => {
        const selected = option.value === value;
        return (
          <Pressable
            key={option.value}
            accessibilityRole="radio"
            accessibilityState={{ selected }}
            accessibilityLabel={option.label}
            onPress={() => {
              if (selected) return;
              hapticTap();
              onChange(option.value);
            }}
            style={[styles.option, selected && styles.selected]}
          >
            {option.icon && (
              <MaterialCommunityIcons name={option.icon} size={20} color={selected ? c.onPrimary : c.textMuted} />
            )}
            <Text style={[styles.label, { color: selected ? c.onPrimary : c.text }]} maxFontSizeMultiplier={1.4}>
              {option.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const makeStyles = (c: ColorTokens) =>
  StyleSheet.create({
    track: {
      flexDirection: 'row',
      padding: spacing.xs,
      gap: spacing.xs,
      borderRadius: radius.pill,
      borderWidth: 1,
      borderColor: c.border,
      backgroundColor: c.chip,
    },
    option: {
      flex: 1,
      minHeight: 48,
      flexDirection: 'row',
      gap: spacing.sm,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: radius.pill,
      paddingHorizontal: spacing.md,
    },
    selected: { backgroundColor: c.primary, boxShadow: glow(c.glowPrimary, 14) },
    label: { fontSize: fontSize.body, fontFamily: fonts.bold },
  });
