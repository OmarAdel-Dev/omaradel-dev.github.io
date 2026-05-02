'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { type ReactNode } from 'react';
import { staggerContainer } from '@/lib/motion';
import { cn } from '@/lib/cn';

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  /** Initial delay before stagger begins (seconds) */
  delay?: number;
  /** Gap between each staggered child (seconds) */
  stagger?: number;
}

/**
 * Stagger parent: triggers children's `whileInView` variants in sequence.
 *
 * Children must use `MotionReveal` or another `motion.*` element with
 * matching `hidden` / `visible` variant keys.
 *
 * Respects `prefers-reduced-motion`.
 */
export default function StaggerContainer({
  children,
  className,
  delay = 0.05,
  stagger = 0.08,
}: StaggerContainerProps) {
  const shouldReduce = useReducedMotion();

  if (shouldReduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2, margin: '-40px 0px' }}
      variants={{
        ...staggerContainer,
        visible: {
          transition: {
            staggerChildren: stagger,
            delayChildren: delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
