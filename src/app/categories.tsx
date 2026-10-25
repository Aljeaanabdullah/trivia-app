import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Redirect, router } from 'expo-router';
import { useCallback, useMemo, useState } from 'react';
import { StyleSheet, Text, TextInput, useWindowDimensions, View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

import { CategoryCard } from '@/components/CategoryCard';
import { IconButton } from '@/components/IconButton';
import { Screen } from '@/components/Screen';
import { ScreenHeader } from '@/components/ScreenHeader';
import { CATEGORIES, type Category } from '@/data/categories';
import { QUESTION_BANK } from '@/data/questions';
import { filterCategories } from '@/features/categories/search';
import { usePlayers } from '@/state/PlayerProvider';
import { useI18n, useThemedStyles, useTheme } from '@/state/SettingsProvider';
import { fontSize, radius, spacing, type ColorTokens } from '@/theme/tokens';
import { fonts } from '@/theme/typography';

const MAX_WIDTH = 960;

/** 2 columns on phones, 3 on the unfolded Z Fold / small tablets, 4 on large screens. */
function columnsFor(width: number) {
  if (width >= 900) return 4;
  if (width >= 600) return 3;
  return 2;
}

export default function CategoriesScreen() {
  const { t, textStart, isRTL } = useI18n();
  const { colors: c } = useTheme();
  const styles = useThemedStyles(makeStyles);
  const { activePlayer } = usePlayers();
  const { width } = useWindowDimensions();
  const [query, setQuery] = useState('');
  const columns = columnsFor(Math.min(width, MAX_WIDTH));

  const visible = useMemo(() => filterCategories(CATEGORIES, query), [query]);
  const rows = useMemo(() => {
    const result: Category[][] = [];
    for (let i = 0; i < visible.length; i += columns) result.push(visible.slice(i, i + columns));
    return result;
  }, [visible, columns]);

  const start = useCallback((category: Category) => {
    router.push({ pathname: '/game', params: { category: category.id } });
  }, []);

  if (!activePlayer) return <Redirect href={{ pathname: '/player', params: { next: 'play' } }} />;

  return (
    <Screen maxWidth={MAX_WIDTH}>
      <ScreenHeader title={t.chooseCategory} subtitle={t.welcome(activePlayer.name)} />

      <View style={styles.search}>
        <MaterialCommunityIcons name="magnify" size={22} color={c.textMuted} />
        <TextInput
          value={query}
          onChangeText={setQuery}
          placeholder={t.searchCategories}
          placeholderTextColor={c.textMuted}
          accessibilityLabel={t.searchCategories}
          autoCorrect={false}
          returnKeyType="search"
          style={[styles.searchInput, { textAlign: textStart, writingDirection: isRTL ? 'rtl' : 'ltr' }]}
        />
        {query ? <IconButton icon="close" label={t.cancel} onPress={() => setQuery('')} /> : null}
      </View>

      {rows.length === 0 ? (
        <Text style={styles.empty}>{t.noCategoryMatch}</Text>
      ) : (
        rows.map((row, r) => (
          <View key={row.map((cat) => cat.id).join()} style={styles.row}>
            {row.map((category, i) => (
              <Animated.View
                key={category.id}
                style={styles.cell}
                entering={FadeInDown.delay(Math.min(r * columns + i, 12) * 35).duration(320)}
              >
                <CategoryCard category={category} questionCount={QUESTION_BANK[category.id].length} onPress={start} />
              </Animated.View>
            ))}
            {/* Keep the last row's cards the same width as the others. */}
            {Array.from({ length: columns - row.length }, (_, i) => (
              <View key={`pad-${i}`} style={styles.cell} />
            ))}
          </View>
        ))
      )}
    </Screen>
  );
}

const makeStyles = (c: ColorTokens) =>
  StyleSheet.create({
    search: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: spacing.sm,
      paddingStart: spacing.md,
      paddingEnd: spacing.xs,
      minHeight: 52,
      borderRadius: radius.pill,
      borderWidth: 1,
      borderColor: c.border,
      backgroundColor: c.surface,
    },
    searchInput: {
      flex: 1,
      minHeight: 48,
      color: c.text,
      fontSize: fontSize.body,
      fontFamily: fonts.semibold,
    },
    row: { flexDirection: 'row', gap: spacing.md },
    cell: { flex: 1 },
    empty: { color: c.textMuted, fontSize: fontSize.body, fontFamily: fonts.semibold, textAlign: 'center', marginTop: spacing.xl },
  });
