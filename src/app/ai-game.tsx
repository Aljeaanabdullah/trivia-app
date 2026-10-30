import { Redirect, useLocalSearchParams } from 'expo-router';

import { AI_QUIZ_AVAILABLE } from '@/config/aiConfig';
import { AiGameLoader } from '@/features/ai/AiGameLoader';
import { cleanTopic } from '@/services/openRouter';
import { usePlayers } from '@/state/PlayerProvider';

export default function AiGameRoute() {
  const { topic: rawTopic } = useLocalSearchParams<{ topic?: string }>();
  const { activePlayer } = usePlayers();
  const topic = cleanTopic(rawTopic ?? '');

  if (!AI_QUIZ_AVAILABLE) return <Redirect href="/" />;
  if (!activePlayer) return <Redirect href={{ pathname: '/player', params: { next: 'play' } }} />;
  if (!topic) return <Redirect href="/ai-quiz" />;
  return <AiGameLoader key={topic} player={activePlayer} topic={topic} />;
}
