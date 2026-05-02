import SectionRail from '@/components/layout/SectionRail';
import SectionShell from '@/components/layout/SectionShell';
import MotionReveal from '@/components/motion/MotionReveal';
import { aboutContent } from '@/data/about';

export default function AboutSection() {
  return (
    <SectionShell id="about" noBorder className="py-0">
      <div className="flex min-h-svh flex-col md:flex-row md:gap-x-12 lg:gap-x-16 xl:gap-x-20">
        {/* Rail — pt keeps content offset while div top-aligns for full border */}
        <SectionRail
          number={aboutContent.railNumber}
          label={aboutContent.eyebrow}
          className="mt-14 shrink-0 md:mt-0 md:min-w-43 md:pt-16 lg:min-w-49 lg:pt-20 xl:min-w-55"
        />

        {/*
          Content: flex-col at mobile+tablet (stacked),
          flex-row at desktop (side-by-side).
        */}
        <div className="flex flex-1 flex-col lg:flex-row">
          {/* Left — Who I Am */}
          <div className="flex flex-col pb-10 pt-8 md:pb-12 md:pt-16 lg:flex-1 lg:pb-20 lg:pt-20 lg:pr-14 xl:pr-16">
            <MotionReveal>
              <p className="font-body text-md tracking-[0.2em] text-muted-fg uppercase">
                {aboutContent.whoIAm.label}
              </p>
            </MotionReveal>

            <div className="mt-6 flex flex-col gap-6 md:mt-8 md:gap-7">
              {aboutContent.whoIAm.paragraphs.map((paragraph, index) => (
                <MotionReveal key={paragraph} delay={0.08 * (index + 1)}>
                  <p className="max-w-[52ch] font-body text-[clamp(0.9rem,1vw,1.05rem)] leading-relaxed text-foreground">
                    {paragraph}
                  </p>
                </MotionReveal>
              ))}
            </div>
          </div>

          {/* Right — How I Work panel */}
          <MotionReveal
            className="flex flex-col lg:w-[clamp(320px,36vw,500px)] lg:self-stretch xl:w-[clamp(380px,38vw,520px)]"
            delay={0.12}
          >
            <aside
              aria-label="How I work"
              className="flex flex-1 flex-col bg-panel px-8 pb-12 pt-8 text-panel-fg sm:px-12 md:pt-16 lg:px-14 lg:pt-20 xl:px-16"
            >
              <p className="font-body text-md tracking-[0.2em] text-panel-fg/60 uppercase">
                {aboutContent.howIWork.label}
              </p>

              <div className="mt-8">
                {aboutContent.howIWork.rows.map((row, index) => (
                  <div key={row.number}>
                    {index > 0 && <div className="h-px bg-panel-fg/15" aria-hidden="true" />}
                    <div className="py-4">
                      <div className="flex items-baseline gap-2">
                        <span
                          className="shrink-0 font-body text-[0.72rem] tabular-nums text-panel-fg/50"
                          aria-hidden="true"
                        >
                          {row.number}
                        </span>
                        <span
                          className="font-body text-[0.72rem] text-panel-fg/40"
                          aria-hidden="true"
                        >
                          /
                        </span>
                        <h3 className="font-body text-[0.82rem] font-bold tracking-[0.08em] text-panel-fg uppercase">
                          {row.title}
                        </h3>
                      </div>
                      <p className="mt-2 font-body text-[0.82rem] leading-relaxed text-panel-fg/70">
                        {row.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </aside>
          </MotionReveal>
        </div>
      </div>
    </SectionShell>
  );
}
