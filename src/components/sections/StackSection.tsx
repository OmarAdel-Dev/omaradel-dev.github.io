import SectionRail from '@/components/layout/SectionRail';
import SectionShell from '@/components/layout/SectionShell';
import MotionReveal from '@/components/motion/MotionReveal';
import { stackContent, type StackGroup } from '@/data/stack';

// ─── Single group cell ───────────────────────────────────────────────────────

function StackGroupCell({ group, delay }: { group: StackGroup; delay: number }) {
  return (
    <MotionReveal delay={delay} className="flex flex-col">
      <h3 className="font-body text-[0.68rem] font-bold tracking-[0.2em] text-muted-fg uppercase">
        {group.category}
      </h3>
      <p className="mt-3 font-body text-[0.88rem] leading-relaxed text-foreground md:text-[0.93rem]">
        {group.items.join(', ')}
      </p>
    </MotionReveal>
  );
}

// ─── Section ─────────────────────────────────────────────────────────────────

export default function StackSection() {
  const topRow = stackContent.groups.slice(0, 3);
  const bottomRow = stackContent.groups.slice(3);

  return (
    <SectionShell id="stack">
      <div className="flex flex-col md:flex-row md:gap-x-12 lg:gap-x-16 xl:gap-x-20">
        <SectionRail
          number={stackContent.railNumber}
          label={stackContent.eyebrow}
          className="shrink-0 md:min-w-43 lg:min-w-49 xl:min-w-55"
        />

        <div className="flex-1 pt-10 md:pt-0">
          {/* Top row — 3 columns on desktop, 2 on tablet, 1 on mobile */}
          <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {topRow.map((group, i) => (
              <StackGroupCell key={group.category} group={group} delay={0.06 * i} />
            ))}
          </div>

          {/* Divider */}
          <div className="my-10 h-px bg-border" aria-hidden="true" />

          {/* Bottom row */}
          <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {bottomRow.map((group, i) => (
              <StackGroupCell key={group.category} group={group} delay={0.06 * i} />
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
