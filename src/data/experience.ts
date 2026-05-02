export type ExperienceContribution = {
  title: string;
  description: string;
};

export type ExperienceRole = {
  /** Full label shown in the desktop tab row */
  tabLabel: string;
  /** Abbreviated label shown in the mobile tab row */
  mobileLabel: string;
  company: string;
  title: string;
  start: string;
  startDate: string;
  end: string;
  endDate?: string;
  summary: string;
  /** Max 2 contributions per role */
  contributions: ExperienceContribution[];
};

export const experienceContent = {
  eyebrow: 'Experience',
  railNumber: '02',
  roles: [
    {
      tabLabel: 'DIGITAS ME',
      mobileLabel: 'DIGITAS',
      company: 'DIGITAS ME',
      title: 'SENIOR FRONTEND ENGINEER',
      start: 'JUL 2025',
      startDate: '2025-07',
      end: 'PRESENT',
      summary:
        'Building frontend systems for recruitment, customer portal, and document-management products, with a focus on scalable UI architecture, complex workflows, and maintainable frontend foundations.',
      contributions: [
        {
          title: 'WAKALA DMS',
          description:
            'Built the frontend foundation for a legal document management system, including drafting and review workflows, hierarchical document editing, RTL/LTR support, and RBAC-aware UI.',
        },
        {
          title: 'KAFD CUSTOMER PORTAL',
          description:
            'Contributed to customer-facing frontend flows, reusable UI implementation, and scalable React architecture for portal experiences.',
        },
      ],
    },
    {
      tabLabel: 'WALAPLUS',
      mobileLabel: 'WALAPLUS',
      company: 'WALAPLUS',
      title: 'SENIOR FRONTEND ENGINEER',
      start: 'MAR 2024',
      startDate: '2024-03',
      end: 'JUN 2025',
      endDate: '2025-06',
      summary:
        'Owned and developed key frontend features across enterprise products, focusing on maintainability, reusable components, and user experience across internal and customer-facing systems.',
      contributions: [
        {
          title: 'ENTERPRISE PRODUCT FEATURES',
          description:
            'Delivered frontend features across multiple product areas, improving usability and consistency.',
        },
        {
          title: 'REUSABLE UI PATTERNS',
          description:
            'Helped reduce repeated implementation by building maintainable components and shared frontend patterns.',
        },
      ],
    },
    {
      tabLabel: 'VEZEETA',
      mobileLabel: 'VEZEETA',
      company: 'VEZEETA',
      title: 'FRONTEND ENGINEER',
      start: 'JAN 2021',
      startDate: '2021-01',
      end: 'MAR 2024',
      endDate: '2024-03',
      summary:
        'Contributed to healthcare applications using React, Redux, and Next.js, building user-facing features across patient and business experiences.',
      contributions: [
        {
          title: 'HEALTHCARE USER FLOWS',
          description:
            'Built and maintained frontend features for healthcare-related journeys with attention to usability, reliability, and state management.',
        },
        {
          title: 'REACT / REDUX IMPLEMENTATION',
          description:
            'Implemented UI features and state-driven interactions in a large product environment.',
        },
      ],
    },
    {
      tabLabel: 'SWISO',
      mobileLabel: 'SWISO',
      company: 'SWISO SOFTWARE DEVELOPMENT',
      title: 'FRONTEND DEVELOPER',
      start: 'FEB 2020',
      startDate: '2020-02',
      end: 'JAN 2021',
      endDate: '2021-01',
      summary: 'Built internal tools and dashboards, including analytics interfaces and a no-code form builder.',
      contributions: [
        {
          title: 'ANALYTICS DASHBOARDS',
          description: 'Implemented internal dashboards for viewing and interacting with business data.',
        },
        {
          title: 'NO-CODE FORM BUILDER',
          description:
            'Worked on a form-building interface that helped users create configurable forms without custom development.',
        },
      ],
    },
  ] satisfies ExperienceRole[],
};


