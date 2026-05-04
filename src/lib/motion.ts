import { type Variants } from 'framer-motion';

// Easing
const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];
const easeIn: [number, number, number, number] = [0.32, 0, 0.67, 0];

/**
 * Fade-up reveal: opacity 0 to 1, y +24px to 0.
 * Primary reveal variant for most entering elements.
 */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease },
  },
};

/**
 * Simple fade-in for full-bleed elements or things without directional movement.
 */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

/**
 * Stagger parent for children with matching hidden / visible variant keys.
 */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

/**
 * Mobile menu slide-in from the right.
 */
export const slideMenu: Variants = {
  closed: {
    x: '100%',
    opacity: 0,
    transition: { duration: 0.28, ease: easeIn },
  },
  open: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.4, ease },
  },
};
