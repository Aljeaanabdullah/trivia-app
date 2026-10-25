import { Pressable, StyleSheet, Text, View } from 'react-native';

import { en } from '@/i18n/en';
import { darkColors as c, fontSize, radius, spacing } from '@/theme/tokens';

interface GameHeaderProps {
  playerName: string;
  categoryName: string;
  questionNumber: number;
  totalQuestions: number;
  onQuit: () => void;
}

export function GameHeader({ playerName, categoryName, questionNumber, totalQuestions, onQuit }: GameHeaderProps) {
  return (
    <View style={styles.row}>
      <Pressable
        onPress={onQuit}
        accessibilityRole="button"
        accessibilityLabel={en.quit}
        hitSlop={12}
        style={styles.quit}
      >
        <Text style={styles.quitText}>✕</Text>
      </Pressable>
      <View style={styles.titles}>
        <Text style={styles.category} numberOfLines={1}>
          {categoryName}
        </Text>
        <Text style={styles.meta} numberOfLines={1}>
          {playerName} · {en.questionOf(questionNumber, totalQuestions)}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', gap: spacing.md },
  quit: {
    width: 44,
    height: 44,
    borderRadius: radius.sm,
    borderWidth: 1,
    borderColor: c.border,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(10,16,48,0.6)',
  },
  quitText: { color: c.textMuted, fontSize: 18, fontWeight: '700' },
  titles: { flex: 1 },
  category: { color: c.text, fontSize: fontSize.label, fontWeight: '800' },
  meta: { color: c.textMuted, fontSize: fontSize.caption + 1, marginTop: 2 },
});
