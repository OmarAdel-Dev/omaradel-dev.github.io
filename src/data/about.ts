export type MindsetRow = {
  number: string;
  title: string;
  description: string;
};

export const aboutContent = {
  eyebrow: 'About',
  railNumber: '01',
  whoIAm: {
    label: 'WHO I AM',
    paragraphs: [
      "I'm Omar Adel, a Senior Frontend Engineer with 6+ years of experience building web applications across legal platforms, healthcare products, customer portals, recruitment systems, and internal tools.",
      'I focus on turning complex workflows, permissions, data-heavy screens, and business rules into interfaces that feel clear for users and maintainable for teams.',
      'I care about the full frontend system behind the UI: reusable components, state management, accessibility, performance, and long-term code quality.',
    ],
  },
  howIWork: {
    label: 'HOW I WORK',
    rows: [
      {
        number: '01',
        title: 'USER CLARITY',
        description: 'Interfaces people can understand, trust, and use confidently.',
      },
      {
        number: '02',
        title: 'SYSTEMS THINKING',
        description: 'Reusable patterns that scale beyond a single screen.',
      },
      {
        number: '03',
        title: 'AI AS A MULTIPLIER',
        description:
          'Faster exploration, better edge-case review, stronger decisions without outsourcing judgment.',
      },
      {
        number: '04',
        title: 'LONG-TERM QUALITY',
        description: 'Performance, accessibility, maintainability, and product evolution.',
      },
    ] satisfies MindsetRow[],
  },
};
