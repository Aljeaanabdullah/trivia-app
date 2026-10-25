import {
  Cairo_400Regular,
  Cairo_600SemiBold,
  Cairo_700Bold,
  Cairo_800ExtraBold,
  Cairo_900Black,
} from '@expo-google-fonts/cairo';
import { Orbitron_700Bold, Orbitron_900Black } from '@expo-google-fonts/orbitron';

/** Bundled with the app, so text renders identically offline. */
export const fontAssets = {
  Cairo_400Regular,
  Cairo_600SemiBold,
  Cairo_700Bold,
  Cairo_800ExtraBold,
  Cairo_900Black,
  Orbitron_700Bold,
  Orbitron_900Black,
};

/**
 * Cairo covers Arabic and Latin with matching metrics. Each weight is its own
 * family, so styles set `fontFamily` instead of `fontWeight` (Android ignores
 * weights on custom fonts).
 */
export const fonts = {
  regular: 'Cairo_400Regular',
  semibold: 'Cairo_600SemiBold',
  bold: 'Cairo_700Bold',
  extrabold: 'Cairo_800ExtraBold',
  black: 'Cairo_900Black',
  /** Latin-only display face for the logo and big numbers. */
  display: 'Orbitron_900Black',
  displayBold: 'Orbitron_700Bold',
} as const;
