import { cn } from '@/lib/cn';

interface DividerProps {
  className?: string;
  /** Orientation of the divider line */
  orientation?: 'horizontal' | 'vertical';
  /** Decorative short dash variant used as an editorial accent */
  accent?: boolean;
}

/**
 * Thin rule line for visual separation.
 * - Horizontal (default): a full-width `<hr>`.
 * - Vertical: a 1px tall block intended for inline layouts.
 * - `accent`: a short (2rem) dash used as a typographic ornament.
 */
export default function Divider({
  className,
  orientation = 'horizontal',
  accent = false,
}: DividerProps) {
  if (orientation === 'vertical') {
    return (
      <span
        role="separator"
        aria-orientation="vertical"
        className={cn('inline-block self-stretch w-px bg-border', className)}
      />
    );
  }

  if (accent) {
    return <span role="separator" className={cn('block h-px w-8 bg-foreground', className)} />;
  }

  return <hr className={cn('border-0 border-t border-border', className)} />;
}
