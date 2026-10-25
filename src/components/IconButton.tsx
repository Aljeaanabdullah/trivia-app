import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Pressable, StyleSheet } from 'react-native';

import { hapticTap } from '@/animation/haptics';
import { useThemedStyles, useTheme } from '@/state/SettingsProvider';
import { radius, type ColorTokens } from '@/theme/tokens';
import type { IconName } from './NeonButton';

interface IconButtonProps {
  icon: IconName;
  label: string;
  onPress: () => void;
}

/** 44×44 minimum touch target with an accessible label. */
export function IconButton({ icon, label, onPress }: IconButtonProps) {
  const { colors: c } = useTheme();
  const styles = useThemedStyles(makeStyles);
  return (
    <Pressable
      onPress={() => {
        hapticTap();
        onPress();
      }}
      accessibilityRole="button"
      accessibilityLabel={label}
      hitSlop={8}
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
    >
      <MaterialCommunityIcons name={icon} size={22} color={c.text} />
    </Pressable>
  );
}

const makeStyles = (c: ColorTokens) =>
  StyleSheet.create({
    button: {
      width: 44,
      height: 44,
      borderRadius: radius.sm,
      borderWidth: 1,
      borderColor: c.border,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: c.chip,
    },
    pressed: { opacity: 0.7, transform: [{ scale: 0.95 }] },
  });
