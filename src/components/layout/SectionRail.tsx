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
      data-scroll-start-mobile
      className={cn(
        'mt-14 flex h-12 w-full shrink-0 select-none items-center gap-3 border-b border-border pb-4 md:h-auto md:w-auto md:min-w-43 md:flex-col md:items-start md:border-b-0 md:border-r md:pb-0 md:pr-8 lg:min-w-49 xl:min-w-55',
        className,
      )}
    >
      <span
        className="font-display text-3xl leading-none font-black md:text-[clamp(4rem,8vw,8rem)]"
        aria-hidden="true"
      >
        {number}
      </span>
      <span className="h-px w-10 bg-border md:w-12" aria-hidden="true" />
      <h2 className="font-body text-xl tracking-widest uppercase">{label}</h2>
    </div>
  );
}
