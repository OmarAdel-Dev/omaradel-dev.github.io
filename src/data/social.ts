export type SocialLink = {
  label: string;
  href: string;
};

export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/OmarAdel-Dev' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/omaradel97' },
  { label: 'Email', href: 'mailto:omaradel97@outlook.com' },
] satisfies SocialLink[];
