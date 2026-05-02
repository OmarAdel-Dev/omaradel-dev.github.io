'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { type ReactNode } from 'react';
import { fadeIn } from '@/lib/motion';
import { cn } from '@/lib/cn';

interface MotionSectionProps {
  children: ReactNode;
  className?: string;
  /** Delay the section entrance (seconds) */
  delay?: number;
}

/**
 * Lightweight motion wrapper intended for top-level section entrance.
 *
 * Uses a very gentle `fadeIn` so the section itself glides in without
 * stealing focus from child-level `MotionReveal` animations.
 *
 * Use sparingly — one per major page section at most.
 */
export default function MotionSection({ children, className, delay = 0 }: MotionSectionProps) {
  const shouldReduce = useReducedMotion();

  if (shouldReduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px 0px' }}
      variants={fadeIn}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
