import SectionRail from '@/components/layout/SectionRail';
import SectionShell from '@/components/layout/SectionShell';
import MotionReveal from '@/components/motion/MotionReveal';
import { stackContent, type StackGroup } from '@/data/stack';
import { cn } from '@/lib/cn';

// Single group cell.
function StackGroupCell({
  group,
  delay,
  index,
}: {
  group: StackGroup;
  delay: number;
  index: number;
}) {
  return (
    <MotionReveal
      delay={delay}
      className={cn(
        'flex min-h-48 flex-col border-border py-9 lg:min-h-[34svh] lg:px-12 lg:py-16 xl:px-16 xl:py-20',
        index !== stackContent.groups.length - 1 && 'border-b lg:border-b-0',
        index % 3 !== 0 && 'lg:border-l',
        index >= 3 && 'lg:border-t',
      )}
    >
      <h3 className="font-display text-[clamp(1.7rem,3vw,2.2rem)] leading-none font-black tracking-normal text-foreground uppercase">
        {group.category}
      </h3>
      <p className="mt-7 max-w-80 font-body text-lg leading-8 text-foreground md:text-xl md:leading-9">
        {group.items.join(', ')}
      </p>
    </MotionReveal>
  );
}

// Section
export default function StackSection() {
  return (
    <SectionShell id="stack" className="py-0">
      <div className="flex min-h-svh flex-col md:flex-row md:gap-x-12 lg:gap-x-16 xl:gap-x-20">
        <SectionRail
          number={stackContent.railNumber}
          label={stackContent.eyebrow}
          className="md:pt-14"
        />

        <div data-scroll-start className="mt-10 flex-1 md:mt-14 md:pt-8 lg:pt-0">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            {stackContent.groups.map((group, i) => (
              <StackGroupCell key={group.category} group={group} delay={0.06 * i} index={i} />
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
