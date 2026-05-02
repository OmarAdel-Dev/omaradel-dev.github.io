# AGENTS.md — Portfolio Project Rules

## Scope

This file contains project-wide rules only. Do not implement sections or features unless explicitly requested in the current prompt.

## Stack

- Next.js + TypeScript
- Tailwind CSS
- Framer Motion for subtle motion only
- `next/font` for fonts
- CSS variables for theme tokens
- `lucide-react` only for small utility icons

## Design Direction

Build a black-and-white editorial portfolio: bold, minimal, typography-first, spacious, premium, and professional.

Avoid gradients, colorful accents, heavy shadows, playful rounded cards, unnecessary icons, cramped layouts, and generic template styling.

## Layout Rules

- Each main section should feel like one full viewport scene.
- Use `min-height: 100svh`; avoid fixed `h-screen` when content may grow.
- Desktop: use an editorial grid with a left section rail.
- Mobile: stack content vertically and convert the rail into a compact top label.
- No horizontal overflow.

## Sections

Final order:

1. Hero
2. About
3. Experience
4. Quote
5. Stack
6. Contact

Numbered rails:

- 01 About
- 02 Experience
- 03 Stack
- 04 Contact

The Quote section has no rail.

## Typography

Use two font roles:

- Display font: hero, section numbers, large quotes, CTA headings.
- Body/UI font: paragraphs, nav, dates, labels, metadata.

Use responsive `clamp()` typography. Keep display text bold, condensed, uppercase, and tight.

## Theme

Support light and dark themes using CSS variables.

Required tokens:

- `--background`
- `--foreground`
- `--muted`
- `--muted-foreground`
- `--border`
- `--panel`
- `--panel-foreground`

Theme switching should be smooth, accessible, persisted, and should avoid hydration mismatch.

## Motion

Use Framer Motion sparingly.

Allowed:

- fade-up section reveals
- small stagger for repeated blocks
- mobile menu animation
- theme toggle micro-interaction

Avoid:

- scroll-jacking
- forced snap scrolling
- heavy parallax
- bouncy effects
- animating every line of text

Respect `prefers-reduced-motion`.

## Icons

Use `lucide-react` only when needed.

Allowed icons:

- `ArrowUpRight`
- `ArrowDown`
- `Menu`
- `X`
- `Sun`
- `Moon`
- `Mail`

Do not use icons in Stack items or Experience contribution items.

## Content Rules

Experience combines job history with selected contribution summaries.

Do not make project/contribution names look clickable unless they actually link somewhere. No fake arrows, fake modals, or fake project pages.

## Code Quality

- Prefer server components.
- Use client components only for interactivity.
- Keep components small and reusable.
- Keep repeatable content in data files.
- Use TypeScript types for structured data.
- Avoid duplicated layout code.
- Use semantic HTML and accessible focus states.

## Performance

- Static rendering where possible.
- Optimize fonts with `next/font`.
- Scope Framer Motion usage.
- Avoid unnecessary libraries and images.
- Avoid layout shift.
- Aim for strong Lighthouse scores.
