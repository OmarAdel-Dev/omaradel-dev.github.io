'use client';

import { ArrowUp } from 'lucide-react';
import SectionRail from '@/components/layout/SectionRail';
import SectionShell from '@/components/layout/SectionShell';
import MotionReveal from '@/components/motion/MotionReveal';
import Button from '@/components/ui/Button';
import { contactContent } from '@/data/contact';

export default function ContactSection() {
  const year = new Date().getFullYear();

  return (
    <SectionShell id="contact" inverted className="py-0">
      <div className="flex min-h-svh flex-col">
        {/* Rail + main content */}
        <div className="flex flex-1 flex-col md:mb-14 md:flex-row md:gap-x-12 lg:gap-x-16 xl:gap-x-20">
          {/* Section rail */}
          <SectionRail
            number={contactContent.railNumber}
            label={contactContent.eyebrow}
            className="md:pt-14"
          />

          {/* Main content */}
          <div data-scroll-start className="mt-14 flex flex-1 flex-col justify-start md:pt-14">
            <div className="flex flex-1 flex-col lg:flex-row lg:gap-x-16 xl:gap-x-20">
              {/* Headline */}
              <MotionReveal className="flex flex-col lg:flex-1">
                <h2
                  className="font-display font-black uppercase leading-[0.88]"
                  style={{ fontSize: 'clamp(2.8rem, 6.5vw, 7rem)' }}
                >
                  {contactContent.headline.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </h2>
              </MotionReveal>

              {/* Copy, contact links, and CTAs */}
              <MotionReveal delay={0.12} className="flex flex-col pt-10 lg:w-contact-panel lg:pt-0">
                {/* Copy */}
                <div className="flex flex-col gap-4">
                  {contactContent.copy.map((line) => (
                    <p key={line} className="font-body text-sm leading-relaxed opacity-70">
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
                        className="flex items-center gap-3 font-body text-sm opacity-65 transition-colors duration-150 hover:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
                      >
                        <span className="font-body opacity-35 select-none" aria-hidden="true">
                          /
                        </span>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="mt-10 flex flex-col gap-3 md:flex-row md:items-center">
                  <Button
                    inverted
                    as="a"
                    href={contactContent.cta.href}
                    icon={
                      <ArrowUp
                        size={14}
                        strokeWidth={1.5}
                        aria-hidden="true"
                        className="rotate-45"
                      />
                    }
                    className="w-full justify-center md:w-fit"
                  >
                    {contactContent.cta.label}
                  </Button>
                  <Button
                    inverted
                    as="a"
                    href="/Omar-Adel-CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    icon={
                      <ArrowUp
                        size={14}
                        strokeWidth={1.5}
                        aria-hidden="true"
                        className="rotate-180"
                      />
                    }
                    className="w-full justify-center bg-transparent text-panel-fg opacity-80 hover:bg-panel-fg hover:text-panel hover:opacity-100 md:w-fit"
                  >
                    DOWNLOAD CV
                  </Button>
                </div>
              </MotionReveal>
            </div>
          </div>
        </div>

        {/* Footer — pinned to the bottom of the section */}
        <footer className="mt-auto border-t border-current/15">
          <div className="flex flex-col gap-3 py-6 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
            <div className="flex flex-col gap-1">
              <p className="font-body text-xs opacity-40">
                &copy; {year} {contactContent.footer.credit}. All rights reserved.
              </p>
              <p className="font-body text-xs opacity-40">{contactContent.footer.tech}</p>
            </div>
            <Button
              inverted
              as="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              icon={<ArrowUp size={15} strokeWidth={2} aria-hidden="true" />}
              aria-label="Scroll to top"
              className="w-full justify-center md:w-auto"
            >
              Back to Top
            </Button>
          </div>
        </footer>
      </div>
    </SectionShell>
  );
}
