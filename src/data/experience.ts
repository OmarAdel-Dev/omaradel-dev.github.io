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
  companyUrl: string;
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
      companyUrl: 'https://www.digitas.com/en-ae/',
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
            'Built a legal Document Management System from scratch with React, TypeScript, and Vite, including authentication, scoped access control, drafting and approval flows, and RTL/LTR support.',
        },
        {
          title: 'STRUCTURE TREE & COMPONENT SYSTEM',
          description:
            'Built a reusable atomic design component library and an interactive structure tree to support scalable management of hierarchical legal documents.',
        },
      ],
    },
    {
      tabLabel: 'WALAPLUS',
      mobileLabel: 'WALAPLUS',
      company: 'WALAPLUS',
      companyUrl: 'https://www.walaplus.com/en-gb',
      title: 'SENIOR FRONTEND ENGINEER',
      start: 'MAR 2024',
      startDate: '2024-03',
      end: 'JUN 2025',
      endDate: '2025-06',
      summary:
        'Owned and developed key frontend features across enterprise products, focusing on maintainability, reusable components, and user experience across internal and customer-facing systems.',
      contributions: [
        {
          title: 'ENTERPRISE PRODUCT DELIVERY',
          description:
            'Rapidly mastered Vue.js and the Composition API to deliver multiple production applications using TypeScript and Pinia.',
        },
        {
          title: 'TEAM STANDARDS & HIRING',
          description:
            'Led React and JavaScript technical assessments, supported hiring decisions, and helped establish Git workflow and code review standards.',
        },
      ],
    },
    {
      tabLabel: 'VEZEETA',
      mobileLabel: 'VEZEETA',
      company: 'VEZEETA',
      companyUrl: 'https://www.vezeeta.com/',
      title: 'FRONTEND ENGINEER',
      start: 'JAN 2021',
      startDate: '2021-01',
      end: 'MAR 2024',
      endDate: '2024-03',
      summary:
        'Contributed to healthcare applications using React, Redux, and Next.js, building user-facing features across patient and business experiences.',
      contributions: [
        {
          title: 'HEALTHCARE PRODUCT RELEASES',
          description:
            'Contributed to healthcare product releases using React, Redux, and Next.js, with responsive design and cross-browser compatibility.',
        },
        {
          title: 'COMPONENT LIBRARY',
          description:
            'Built reusable component libraries with React Hooks, Styled Components, and Storybook, applying design system principles to reduce repeated implementation.',
        },
      ],
    },
    {
      tabLabel: 'SWISO',
      mobileLabel: 'SWISO',
      company: 'SWISO SOFTWARE DEVELOPMENT',
      companyUrl: 'https://swisodev.com/',
      title: 'FRONTEND DEVELOPER',
      start: 'FEB 2020',
      startDate: '2020-02',
      end: 'JAN 2021',
      endDate: '2021-01',
      summary: 'Built internal tools and dashboards, including analytics interfaces and a no-code form builder.',
      contributions: [
        {
          title: 'ANALYTICS DASHBOARD',
          description:
            'Developed a comprehensive analytics dashboard using React, including query builder functionality, responsive Chart.js visualizations, and multiple export formats.',
        },
        {
          title: 'NO-CODE FORM BUILDER',
          description:
            'Built a dynamic no-code form builder integrated with a workflow system, enabling non-technical users to create and publish data collection forms.',
        },
      ],
    },
  ] satisfies ExperienceRole[],
};

