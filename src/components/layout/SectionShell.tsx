import { cn } from '@/lib/cn';
import { type ReactNode } from 'react';
import MotionSection from '@/components/motion/MotionSection';
import Container from './Container';

interface SectionShellProps {
  children: ReactNode;
  id?: string;
  className?: string;
  /** Remove the top border (e.g. for the very first section after the hero) */
  noBorder?: boolean;
  /** Render an inverted (dark/foreground-swap) background */
  inverted?: boolean;
}

/**
 * Full-width section wrapper.
 * Provides consistent vertical rhythm, an optional top border,
 * and an optional inverted (dark panel) background.
 */
export default function SectionShell({
  children,
  id,
  className,
  noBorder = false,
  inverted = false,
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn(
        'min-h-svh py-12 md:py-16 lg:py-20 xl:py-24',
        !noBorder && 'border-t border-border',
        inverted && 'bg-panel text-panel-fg',
        className,
      )}
    >
      <MotionSection>
        <Container>{children}</Container>
      </MotionSection>
    </section>
  );
}
