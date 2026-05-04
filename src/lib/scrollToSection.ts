export function scrollToSection(hash: string) {
  const id = hash.replace(/^#/, '');
  const section = document.getElementById(id);

  if (!section) return;

  const isMobile = window.matchMedia('(max-width: 767px)').matches;
  const target =
    (isMobile && section.querySelector<HTMLElement>('[data-scroll-start-mobile]')) ||
    section.querySelector<HTMLElement>('[data-scroll-start]') ||
    section;
  const header = document.querySelector<HTMLElement>('header');
  const headerOffset = header ? header.offsetHeight : 0;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const top = target.getBoundingClientRect().top + window.scrollY - headerOffset - 16;

  window.scrollTo({
    top,
    behavior: prefersReducedMotion ? 'auto' : 'smooth',
  });

  window.history.pushState(null, '', `#${id}`);
}
