import { Platform, type ViewStyle } from 'react-native';

export type LayoutDirection = 'ltr' | 'rtl';

/**
 * Props that force a layout direction on a View. Native uses the Yoga
 * `direction` style; react-native-web rejects that style and uses the DOM
 * `dir` attribute instead.
 */
export function directionProps(direction: LayoutDirection): { style?: ViewStyle; dir?: LayoutDirection } {
  return Platform.OS === 'web' ? { dir: direction } : { style: { direction } };
}
