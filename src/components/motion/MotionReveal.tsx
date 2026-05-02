'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { type ReactNode } from 'react';
import { fadeUp } from '@/lib/motion';
import { cn } from '@/lib/cn';

interface MotionRevealProps {
  children: ReactNode;
  className?: string;
  /** Override Framer Motion variants (defaults to `fadeUp`) */
  variants?: Variants;
  /** Extra delay in seconds before the animation begins */
  delay?: number;
  /** Viewport threshold — how much of the element must be visible (0–1) */
  threshold?: number;
}

/**
 * Scroll-triggered reveal wrapper.
 *
 * - Wraps a single section of content in a `motion.div`.
 * - Respects `prefers-reduced-motion`; skips animation if set.
 * - Triggers once when the element enters the viewport.
 * - Renders a lightweight `<div>` — keep it outside big server trees.
 */
export default function MotionReveal({
  children,
  className,
  variants = fadeUp,
  delay = 0,
  threshold = 0.25,
}: MotionRevealProps) {
  const shouldReduce = useReducedMotion();

  if (shouldReduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: threshold, margin: '-40px 0px' }}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
