import * as Haptics from 'expo-haptics';
import { Platform } from 'react-native';

// Haptics are a nice-to-have: never let a missing motor or web build throw.
const safe = (fn: () => Promise<void>) => {
  if (Platform.OS === 'web') return;
  fn().catch(() => {});
};

export const hapticSuccess = () => safe(() => Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success));

export const hapticError = () => safe(() => Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error));

export const hapticTap = () => safe(() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light));
