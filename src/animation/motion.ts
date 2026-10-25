import { Easing, type WithSpringConfig } from 'react-native-reanimated';

export const pressSpring: WithSpringConfig = { damping: 14, stiffness: 320, mass: 0.6 };

export const popSpring: WithSpringConfig = { damping: 9, stiffness: 220, mass: 0.7 };

export const cardEntrance = { duration: 520, easing: Easing.out(Easing.cubic) };

export const floatCycle = { duration: 2600, easing: Easing.inOut(Easing.sin) };
