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
      label: 'github.com/omaradel97',
      href: 'https://github.com/omaradel97',
    },
    {
      label: 'linkedin.com/in/omaradel97',
      href: 'https://www.linkedin.com/in/omaradel97',
    },
  ] satisfies ContactLink[],
  cta: {
    label: "LET'S TALK",
    href: 'mailto:omaradel97@outlook.com',
  },
  footer: {
    credit: 'Omar Adel',
    tech: 'Built with Next.js, TS & Tailwind',
  },
};
