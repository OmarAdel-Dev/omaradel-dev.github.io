import { cn } from '@/lib/cn';

interface SectionRailProps {
  number: string;
  label: string;
  className?: string;
}

/**
 * Left-column section identifier with number, divider, and label.
 */
export default function SectionRail({ number, label, className }: SectionRailProps) {
  return (
    <div
      className={cn(
        'flex select-none items-center gap-3 border-b border-border pb-4 md:flex-col md:items-start md:border-b-0 md:border-r md:pb-0 md:pr-8',
        className,
      )}
    >
      <span
        className="font-display text-3xl leading-none font-black text-foreground md:text-[clamp(4rem,8vw,8rem)]"
        aria-hidden="true"
      >
        {number}
      </span>
      <span className="h-px w-10 bg-border md:w-12" aria-hidden="true" />
      <span className="font-body text-xl tracking-[0.2em] uppercase">{label}</span>
    </div>
  );
}
