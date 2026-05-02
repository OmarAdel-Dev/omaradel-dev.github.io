import { type Variants } from "framer-motion";

// ─── Easing ────────────────────────────────────────────────────────────────
// Editorial ease — fast deceleration, premium feel   spec: [0.22, 1, 0.36, 1]
const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];
// Ease-in for exits / closes
const easeIn: [number, number, number, number] = [0.32, 0, 0.67, 0];

// ─── Variants ──────────────────────────────────────────────────────────────

/**
 * Fade-up reveal: opacity 0 → 1, y +24px → 0.
 * Primary reveal variant; use for most entering elements.
 * spec: y 16-24px, duration 0.45-0.7s, ease [0.22, 1, 0.36, 1]
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
 * Simple fade-in: opacity only.
 * Use for full-bleed elements or things without directional movement.
 * spec: duration 0.45-0.7s
 */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

/**
 * Stagger parent: staggers `whileInView` children.
 * Pair with `fadeUp` or `fadeIn` on children.
 * spec: staggerChildren 0.06-0.12
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
 * Subtle scale-in: opacity 0 → 1, scale 0.97 → 1.
 * Use for cards, panels, editorial blocks.
 */
export const scaleInSubtle: Variants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, ease },
  },
};

/**
 * Mobile menu slide-in from the right.
 * Use with AnimatePresence for enter / exit.
 */
export const slideMenu: Variants = {
  closed: {
    x: "100%",
    opacity: 0,
    transition: { duration: 0.28, ease: easeIn },
  },
  open: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.4, ease },
  },
};
