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
      label: 'linkedin.com/in/omaradel97',
      href: 'https://www.linkedin.com/in/omaradel97',
    },
    {
      label: 'github.com/OmarAdel-Dev',
      href: 'https://github.com/OmarAdel-Dev',
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
