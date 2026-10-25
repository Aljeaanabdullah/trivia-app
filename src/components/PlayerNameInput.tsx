import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import { NAME_MAX, NAME_MIN, type NameError } from '@/features/players/playerName';
import type { Translation } from '@/i18n';
import { useI18n, useThemedStyles, useTheme } from '@/state/SettingsProvider';
import { fontSize, glow, radius, spacing, type ColorTokens } from '@/theme/tokens';
import { fonts } from '@/theme/typography';

export function nameErrorMessage(t: Translation, error: NameError): string {
  switch (error) {
    case 'required':
      return t.nameRequired;
    case 'tooShort':
      return t.nameTooShort(NAME_MIN);
    case 'tooLong':
      return t.nameTooLong(NAME_MAX);
    case 'invalid':
      return t.nameInvalid;
    case 'taken':
      return t.nameTaken;
  }
}

interface PlayerNameInputProps {
  value: string;
  onChangeText: (text: string) => void;
  onSubmit: () => void;
  error: NameError | null;
  label?: string;
  autoFocus?: boolean;
}

export function PlayerNameInput({ value, onChangeText, onSubmit, error, label, autoFocus }: PlayerNameInputProps) {
  const { colors: c } = useTheme();
  const { t, textStart, isRTL } = useI18n();
  const styles = useThemedStyles(makeStyles);
  const [focused, setFocused] = useState(false);
  const message = error ? nameErrorMessage(t, error) : t.nameHint(NAME_MIN, NAME_MAX);

  return (
    <View style={styles.wrap}>
      {label ? <Text style={[styles.label, { textAlign: textStart }]}>{label}</Text> : null}
      <TextInput
        value={value}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmit}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={t.namePlaceholder}
        placeholderTextColor={c.textMuted}
        autoFocus={autoFocus}
        autoCorrect={false}
        autoCapitalize="words"
        autoComplete="off"
        returnKeyType="done"
        // Leave room for stray spaces; the validator enforces the real limit.
        maxLength={NAME_MAX + 10}
        accessibilityLabel={label ?? t.enterName}
        accessibilityHint={message}
        style={[
          styles.input,
          { textAlign: textStart, writingDirection: isRTL ? 'rtl' : 'ltr' },
          focused && styles.focused,
          error && styles.invalid,
        ]}
      />
      <Text
        style={[styles.message, { textAlign: textStart }, error && styles.errorText]}
        accessibilityLiveRegion={error ? 'assertive' : 'none'}
      >
        {message}
      </Text>
    </View>
  );
}

const makeStyles = (c: ColorTokens) =>
  StyleSheet.create({
    wrap: { gap: spacing.xs },
    label: { color: c.text, fontSize: fontSize.label, fontFamily: fonts.extrabold },
    input: {
      minHeight: 56,
      paddingHorizontal: spacing.lg,
      paddingVertical: spacing.sm,
      borderRadius: radius.md,
      borderWidth: 1.5,
      borderColor: c.border,
      backgroundColor: c.surface,
      color: c.text,
      fontSize: fontSize.label,
      fontFamily: fonts.bold,
    },
    focused: { borderColor: c.primaryGlow, boxShadow: glow(c.glowPrimary, 14) },
    invalid: { borderColor: c.danger },
    message: { color: c.textMuted, fontSize: fontSize.caption + 1, fontFamily: fonts.semibold, lineHeight: 20 },
    errorText: { color: c.danger },
  });
