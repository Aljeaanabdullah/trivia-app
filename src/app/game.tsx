import { Redirect, useLocalSearchParams } from 'expo-router';

import { getCategory } from '@/data/categories';
import { GameScreen } from '@/features/game/GameScreen';
import { usePlayers } from '@/state/PlayerProvider';

export default function GameRoute() {
  const { category } = useLocalSearchParams<{ category?: string }>();
  const { activePlayer } = usePlayers();
  const selected = getCategory(category);
  // Every game belongs to a player and a valid category.
  if (!activePlayer) return <Redirect href={{ pathname: '/player', params: { next: 'play' } }} />;
  if (!selected) return <Redirect href="/categories" />;
  return <GameScreen key={selected.id} player={activePlayer} category={selected} />;
}
