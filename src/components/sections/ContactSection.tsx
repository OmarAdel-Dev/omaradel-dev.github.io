'use client';

import { ArrowUpRight, ArrowUp } from 'lucide-react';
import Container from '@/components/layout/Container';
import MotionReveal from '@/components/motion/MotionReveal';
import { contactContent } from '@/data/contact';

export default function ContactSection() {
  const year = new Date().getFullYear();

  return (
    <section
      id="contact"
      className="flex min-h-svh flex-col border-t border-border bg-panel text-panel-fg"
    >
      {/* Main content */}
      <div className="flex flex-1 flex-col">
        <Container className="flex flex-1 flex-col py-16 md:py-20 lg:py-24 xl:py-30">
          <div className="flex flex-1 flex-col md:flex-row md:gap-x-12 lg:gap-x-16 xl:gap-x-20">
            {/* Rail */}
            <div
              className="flex select-none items-center gap-3 border-b border-panel-fg/15 pb-4 md:flex-col md:items-start md:border-b-0 md:border-r md:pb-0 md:pr-8 shrink-0 md:min-w-43 lg:min-w-49 xl:min-w-55"
              aria-hidden="true"
            >
              <span className="font-display text-3xl leading-none font-black text-panel-fg md:text-[clamp(4rem,8vw,8rem)]">
                {contactContent.railNumber}
              </span>
              <span className="h-px w-10 bg-panel-fg/20 md:w-12" />
              <span className="font-body text-[10px] tracking-[0.2em] uppercase text-panel-fg/55">
                {contactContent.eyebrow}
              </span>
            </div>

            {/* Content: headline + details */}
            <div className="flex flex-1 flex-col pt-10 md:pt-0 lg:flex-row lg:gap-x-16 xl:gap-x-20">
              {/* Headline */}
              <MotionReveal className="flex flex-col justify-center lg:flex-1">
                <h2
                  className="font-display font-black uppercase leading-[0.88] text-panel-fg"
                  style={{ fontSize: 'clamp(2.8rem, 6.5vw, 7rem)' }}
                >
                  {contactContent.headline.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </h2>
              </MotionReveal>

              {/* Right: copy + links + CTA */}
              <MotionReveal
                delay={0.12}
                className="flex flex-col justify-center pt-10 lg:w-[clamp(280px,36vw,460px)] lg:pt-0"
              >
                {/* Copy */}
                <div className="flex flex-col gap-4">
                  {contactContent.copy.map((line) => (
                    <p
                      key={line}
                      className="font-body text-[0.88rem] leading-relaxed text-panel-fg/70 md:text-[0.93rem]"
                    >
                      {line}
                    </p>
                  ))}
                </div>

                {/* Links */}
                <ul className="mt-8 flex flex-col gap-3" aria-label="Contact links">
                  {contactContent.links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        {...(link.href.startsWith('https') && {
                          target: '_blank',
                          rel: 'noopener noreferrer',
                        })}
                        className="flex items-center gap-3 font-body text-[0.82rem] text-panel-fg/65 transition-colors duration-150 hover:text-panel-fg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-panel-fg"
                      >
                        <span className="font-body text-panel-fg/35 select-none" aria-hidden="true">
                          /
                        </span>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="mt-10">
                  <a
                    href={contactContent.cta.href}
                    className="inline-flex items-center gap-3 border border-panel-fg/30 px-7 py-4 font-body text-[0.75rem] font-bold tracking-[0.18em] text-panel-fg uppercase transition-colors duration-200 hover:bg-panel-fg hover:text-panel focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-panel-fg w-fit"
                  >
                    {contactContent.cta.label}
                    <ArrowUpRight size={13} strokeWidth={2} aria-hidden="true" />
                  </a>
                </div>
              </MotionReveal>
            </div>
          </div>
        </Container>
      </div>

      {/* Footer */}
      <footer className="border-t border-panel-fg/15">
        <Container>
          <div className="flex flex-col gap-3 py-6 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
            <div className="flex flex-col gap-1">
              <p className="font-body text-[0.7rem] text-panel-fg/40">
                © {year} {contactContent.footer.credit}. All rights reserved.
              </p>
              <p className="font-body text-[0.7rem] text-panel-fg/40">
                {contactContent.footer.tech}
              </p>
            </div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group flex items-center gap-2 border border-panel-fg/30 px-5 py-2.5 font-body text-[0.7rem] font-bold tracking-[0.18em] text-panel-fg uppercase transition-colors duration-200 hover:bg-panel-fg hover:text-panel focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-panel-fg w-fit"
              aria-label="Scroll to top"
            >
              Back to Top
              <ArrowUp size={12} strokeWidth={2} aria-hidden="true" />
            </button>
          </div>
        </Container>
      </footer>
    </section>
  );
}
