export type StackGroup = {
  category: string;
  items: string[];
};

export const stackContent = {
  eyebrow: 'Stack',
  railNumber: '03',
  groups: [
    {
      category: 'Frontend',
      items: ['React', 'Next.js', 'Vue', 'TypeScript'],
    },
    {
      category: 'State & Data',
      items: ['TanStack Query', 'Zustand', 'Redux'],
    },
    {
      category: 'Styling',
      items: ['Tailwind CSS', 'Sass', 'CSS Modules'],
    },
    {
      category: 'Tools',
      items: ['Git', 'Vite', 'Storybook', 'ESLint', 'Prettier'],
    },
    {
      category: 'Testing',
      items: ['Jest', 'React Testing Library'],
    },
    {
      category: 'Other',
      items: ['Figma', 'Notion', 'Vercel'],
    },
  ] satisfies StackGroup[],
};
