import { MaterialCommunityIcons } from '@expo/vector-icons';
import { memo } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

import { hapticTap } from '@/animation/haptics';
import { pressSpring } from '@/animation/motion';
import { categoryTitle, type Category } from '@/data/categories';
import { useI18n, useThemedStyles } from '@/state/SettingsProvider';
import { fontSize, glow, radius, spacing, type ColorTokens } from '@/theme/tokens';
import { fonts } from '@/theme/typography';

interface CategoryCardProps {
  category: Category;
  questionCount: number;
  /** Personal best score in this category, if any. */
  best?: number;
  onPress: (category: Category) => void;
}

export const CategoryCard = memo(function CategoryCard({ category, questionCount, best, onPress }: CategoryCardProps) {
  const { t, language } = useI18n();
  const styles = useThemedStyles(makeStyles);
  const scale = useSharedValue(1);
  const tilt = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ perspective: 600 }, { rotateX: `${tilt.value}deg` }, { scale: scale.value }],
  }));

  return (
    <Animated.View style={[styles.shell, { boxShadow: glow(`${category.color}55`, 16) }, animatedStyle]}>
      <Pressable
        onPress={() => {
          hapticTap();
          onPress(category);
        }}
        onPressIn={() => {
          scale.set(withSpring(0.95, pressSpring));
          tilt.set(withSpring(6, pressSpring));
        }}
        onPressOut={() => {
          scale.set(withSpring(1, pressSpring));
          tilt.set(withSpring(0, pressSpring));
        }}
        accessibilityRole="button"
        accessibilityLabel={`${categoryTitle(category, language)}, ${t.questionCount(questionCount)}`}
        style={[styles.card, { borderColor: `${category.color}88` }]}
      >
        <View style={[styles.iconWrap, { backgroundColor: `${category.color}26`, borderColor: category.color }]}>
          <MaterialCommunityIcons name={category.icon} size={28} color={category.color} />
        </View>
        {category.group ? (
          <Text style={[styles.group, { color: category.color }]} numberOfLines={1}>
            {category.group[language]}
          </Text>
        ) : null}
        <Text style={styles.name} numberOfLines={2}>
          {category.name[language]}
        </Text>
        <View style={styles.metaRow}>
          <Text style={styles.meta}>{t.questionCount(questionCount)}</Text>
          {best !== undefined && (
            <View style={styles.best}>
              <MaterialCommunityIcons name="trophy" size={12} color={category.color} />
              <Text style={[styles.bestText, { color: category.color }]}>{best}</Text>
            </View>
          )}
        </View>
      </Pressable>
    </Animated.View>
  );
});

const makeStyles = (c: ColorTokens) =>
  StyleSheet.create({
    shell: { flex: 1, borderRadius: radius.lg },
    card: {
      flex: 1,
      minHeight: 150,
      padding: spacing.md,
      gap: spacing.xs,
      borderRadius: radius.lg,
      borderWidth: 1.5,
      backgroundColor: c.surface,
      alignItems: 'center',
      justifyContent: 'center',
    },
    iconWrap: {
      width: 52,
      height: 52,
      borderRadius: 26,
      borderWidth: 1.5,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: spacing.xs,
    },
    group: { fontSize: fontSize.caption - 1, fontFamily: fonts.bold, letterSpacing: 0.5, textAlign: 'center' },
    name: { color: c.text, fontSize: fontSize.body, fontFamily: fonts.extrabold, textAlign: 'center', lineHeight: 22 },
    metaRow: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm },
    meta: { color: c.textMuted, fontSize: fontSize.caption - 1, fontFamily: fonts.semibold },
    best: { flexDirection: 'row', alignItems: 'center', gap: 2 },
    bestText: { fontSize: fontSize.caption - 1, fontFamily: fonts.bold },
  });
