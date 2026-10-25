import { StyleSheet, Text, View } from 'react-native';

import { useI18n, useThemedStyles } from '@/state/SettingsProvider';
import { fontSize, spacing, type ColorTokens } from '@/theme/tokens';
import { fonts } from '@/theme/typography';
import { IconButton } from './IconButton';

interface GameHeaderProps {
  playerName: string;
  categoryName: string;
  questionNumber: number;
  totalQuestions: number;
  onQuit: () => void;
}

export function GameHeader({ playerName, categoryName, questionNumber, totalQuestions, onQuit }: GameHeaderProps) {
  const { t, textStart } = useI18n();
  const styles = useThemedStyles(makeStyles);
  return (
    <View style={styles.row}>
      <IconButton icon="close" label={t.quit} onPress={onQuit} />
      <View style={styles.titles}>
        <Text style={[styles.category, { textAlign: textStart }]} numberOfLines={1}>
          {categoryName}
        </Text>
        <Text style={[styles.meta, { textAlign: textStart }]} numberOfLines={1}>
          {playerName} · {t.questionOf(questionNumber, totalQuestions)}
        </Text>
      </View>
    </View>
  );
}

const makeStyles = (c: ColorTokens) =>
  StyleSheet.create({
    row: { flexDirection: 'row', alignItems: 'center', gap: spacing.md },
    titles: { flex: 1 },
    category: { color: c.text, fontSize: fontSize.label, fontFamily: fonts.extrabold, lineHeight: 26 },
    meta: { color: c.textMuted, fontSize: fontSize.caption + 1, fontFamily: fonts.semibold, lineHeight: 20 },
  });
