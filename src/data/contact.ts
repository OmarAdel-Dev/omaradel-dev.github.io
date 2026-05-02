export type ContactLink = {
  label: string;
  href: string;
};

export const contactContent = {
  eyebrow: 'Contact',
  railNumber: '04',
  headline: ["LET'S BUILD", 'SOMETHING', 'MEANINGFUL.'],
  copy: [
    'I am always looking to work on meaningful projects, solve real problems, and create impact.',
    "If that's you, let's connect.",
  ],
  links: [
    {
      label: 'omar.adel.dev@gmail.com',
      href: 'mailto:omar.adel.dev@gmail.com',
    },
    {
      label: 'linkedin.com/in/omaradeldev',
      href: 'https://linkedin.com/in/omaradeldev',
    },
  ] satisfies ContactLink[],
  cta: {
    label: "LET'S TALK",
    href: 'mailto:omar.adel.dev@gmail.com',
  },
  footer: {
    credit: 'Omar Adel',
    tech: 'Built with Next.js, TS & Tailwind',
  },
};
