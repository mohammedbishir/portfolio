export const profile = {
  name: "Mohammed Bishir K",
  shortName: "Bishir",
  title: "Full Stack Developer",
  headline:
    "React.js · Next.js · TypeScript · Node.js · NestJS · PostgreSQL",
  email: "mohammedbishirk@gmail.com",
  phone: "+91 8593067862",
  location: "Kerala, India",
  github: "https://github.com/mohammedbishir",
  linkedin: "https://www.linkedin.com/in/mohammed-bishir-k-80843b330",
  linktree: "https://linktr.ee/Mohammed_bishir",
  summary:
    "Full Stack Developer with 4+ years building end-to-end web products — from responsive React/Next.js interfaces to Node.js, NestJS, and PostgreSQL backends. Led development on a multi-tenant enterprise platform with 5 modules and 4 role-based portals, and shipped production systems with JWT auth, REST APIs, RBAC, testing, and CI/CD on Vercel, Render, and Neon.",
  languages: ["English (Fluent)", "Malayalam (Native)"],
  resumePdf: "/Mohammed_Bishir_Full_Stack_Developer.pdf",
  coverLetterPdf: "/Mohammed_Bishir_Cover_Letter.pdf",
};

export type Project = {
  title: string;
  description: string;
  highlights: string[];
  tags: string[];
  href?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    title: "CertiFlow — Digital Certificate Platform",
    description:
      "Full-stack multi-tenant certificate platform for workshops and school sports meets, focused on visual template design, PDF issuance, QR verification, and a clean admin experience deployed on Vercel, Render, and Neon.",
    highlights: [
      "Built organization signup, JWT auth, and role-based admin dashboards for events, templates, and certificates",
      "Designed a WYSIWYG certificate designer with PDF generation, plus workshop and sports-meet place certificates (1st / 2nd / 3rd, including ties)",
      "Integrated REST APIs for registration, CSV import, revoke/restore, and public QR verification; shipped a pnpm monorepo to production",
    ],
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "Tailwind",
    ],
    href: "https://certiflow-web-beta.vercel.app/demo",
  },
  {
    title: "English Bell — Institute Management System",
    description:
      "Full-stack management platform for a spoken English institute, covering the whole student journey from first enquiry to admission, fees and reports, with separate Super Admin, Admin and Reception portals, deployed on Vercel, Render and Neon.",
    highlights: [
      "Built JWT authentication with rotating httpOnly refresh cookies, server-side session revocation, rate-limited login and role-based dashboards for three staff portals, with a full audit log of every change",
      "Designed modules for enquiries and follow-ups, admissions, courses and batches, fee plans with PDF receipts, refunds and reminders, plus staff payroll, leave and expense tracking",
      "Integrated REST APIs for CSV student import with preview and validation, student photo and document uploads, enquiry and finance reports with CSV export, and one-click database backup and restore; shipped a pnpm monorepo to production",
    ],
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "Tailwind",
      "TanStack Query",
    ],
    href: "https://english-bell.vercel.app/demo",
  },
  {
    title: "Stavoya — Multi-Tenant Room Booking Platform",
    description:
      "Multi-tenant room booking platform with reusable interfaces and RBAC-driven dashboards across 5 modules, SSR for the customer portal, and REST integrations for auth, bookings, payments, and real-time availability.",
    highlights: [
      "Built reusable interfaces and RBAC-driven dashboards across 5 modules",
      "Implemented SSR for the customer portal",
      "Integrated REST APIs for authentication, bookings, payments, and real-time availability",
    ],
    tags: ["Next.js", "React", "TypeScript", "Redux", "Context API", "Tailwind"],
  },
  {
    title: "AITIQS — Ticketing System Platform",
    description:
      "Ticketing system with dynamic interactive UI components, responsive layouts, and RTK Query for real-time updates and streamlined data flow.",
    highlights: [
      "Built dynamic, interactive UI components and responsive layouts",
      "Used RTK Query for real-time updates and streamlined data flow",
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "RTK Query"],
  },
  {
    title: "SAFTA — Agri-Food Digital Platform, Saudi Arabia",
    description:
      "Scalable, responsive agri-food interfaces with RTK Query for API integration, caching, and data synchronization, and Material UI for a reusable component system.",
    highlights: [
      "Developed scalable, responsive interfaces with React and TypeScript",
      "Used RTK Query for API integration, caching, and data synchronization",
      "Built a reusable component system with Material UI",
    ],
    tags: ["React", "TypeScript", "RTK Query", "Material UI"],
  },
  {
    title: "SGMB-CMS — Content Management System, Sharjah Government",
    description:
      "Administrative dashboards and content workflows with authentication and role-based access control, integrating frontend and backend services.",
    highlights: [
      "Built administrative dashboards and content workflows",
      "Implemented authentication and role-based access control",
      "Integrated frontend and backend services",
    ],
    tags: ["React", "JavaScript"],
  },
  {
    title: "SGMB — Event Platform, Sharjah Government",
    description:
      "Responsive, accessible event interfaces with reusable components, optimized for cross-browser compatibility and performance.",
    highlights: [
      "Developed responsive, accessible event interfaces",
      "Built reusable components for consistency",
      "Optimized for cross-browser compatibility and performance",
    ],
    tags: ["React", "JavaScript"],
  },
  {
    title: "SAFTA-CMS — Backend for SAFTA Website",
    description:
      "REST APIs with authentication, RBAC, validation and error handling, plus PostgreSQL schema design and Knex.js migrations.",
    highlights: [
      "Built REST APIs with authentication, RBAC, validation, and error handling",
      "Designed PostgreSQL schemas and Knex.js migrations",
    ],
    tags: ["Node.js", "Express.js", "PostgreSQL", "Knex.js"],
  },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    role: "Software Engineer",
    company: "Zoftcares Technologies",
    period: "Jul 2022 — Present",
    points: [
      "Lead full-stack delivery on a multi-tenant enterprise platform (Stavoya) using React.js, Next.js, and TypeScript across 5 modules and 4 role-based portals.",
      "Build responsive, accessible UIs and reusable component libraries that power dashboards, booking workflows, and admin tools.",
      "Design and integrate REST APIs for authentication, bookings, payments, and real-time availability with predictable client–server data flows.",
      "Manage application state with Redux Toolkit, Zustand, Context API, RTK Query, and React Query; improve performance with SSR, code splitting, memoization, and profiling.",
      "Build backend services with Node.js, Express.js, and NestJS, including PostgreSQL schema design, validation, RBAC, and production API contracts.",
      "Write unit and integration tests with Jest and React Testing Library, debug production issues, and support deployments with Git, GitHub, and CI/CD workflows.",
      "Take part in code reviews and Agile/Scrum ceremonies, collaborating across frontend, backend, and stakeholders to ship reliable features.",
    ],
  },
];

export type SkillGroup = {
  label: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Core Frontend",
    items: [
      "React JS",
      "React Hooks",
      "JavaScript (ES6+)",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Next.js (SSR)",
      "Responsive web development",
    ],
  },
  {
    label: "State Management & APIs",
    items: [
      "Redux Toolkit",
      "Redux",
      "Context API",
      "Zustand",
      "RTK Query",
      "React Query",
      "RESTful API integration",
      "Axios",
      "JWT authentication",
    ],
  },
  {
    label: "UI Components",
    items: [
      "Reusable component libraries",
      "Component-based architecture",
      "Material UI (MUI)",
      "Ant Design",
      "Shadcn UI",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    label: "Performance & Quality",
    items: [
      "Web performance optimization",
      "Profiling",
      "Memoization",
      "Code splitting",
      "Cross-browser compatibility",
      "Accessibility standards",
      "Jest",
      "React Testing Library",
      "Debugging",
    ],
  },
  {
    label: "Backend & Databases",
    items: [
      "Node.js",
      "Express.js",
      "NestJS",
      "REST API design",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "RBAC",
      "Microservices environments",
    ],
  },
  {
    label: "DevOps & Workflow",
    items: [
      "Git",
      "GitHub",
      "CI/CD pipelines",
      "Vite",
      "Webpack",
      "AWS",
      "Vercel",
      "Render",
      "Linux",
      "Agile/Scrum",
    ],
  },
];

export const education = {
  degree: "Bachelor of Science (B.Sc) in Computer Science",
  period: "Apr 2019 — Apr 2022",
  college: "Calicut University",
  university: "Malappuram, Kerala",
};

/** Key projects shown on the formal CV — full-stack first. */
export const resumeProjects = [
  {
    title: "CertiFlow – Digital Certificate Platform",
    stack: "Next.js, React, TypeScript, NestJS, Prisma, PostgreSQL, Tailwind",
    summary:
      "Built and shipped a full-stack multi-tenant platform with JWT auth, role-based admin dashboards, a WYSIWYG certificate designer with PDF generation and public QR verification. Delivered as a pnpm monorepo on Vercel, Render and Neon.",
    href: "https://certiflow-web-beta.vercel.app/demo",
  },
  {
    title: "English Bell – Institute Management System",
    stack:
      "Next.js, React, TypeScript, NestJS, Prisma, PostgreSQL, Tailwind, TanStack Query",
    summary:
      "Delivered a full-stack institute platform with JWT auth, role-based Super Admin / Admin / Reception portals, enquiry-to-fee workflows, CSV import, reports, and production deploy on Vercel, Render and Neon.",
    href: "https://english-bell.vercel.app/demo",
  },
  {
    title: "Stavoya – Multi-Tenant Room Booking Platform",
    stack: "Next.js, React, TypeScript, Redux, Context API, Tailwind, Node.js",
    summary:
      "Built reusable interfaces and RBAC-driven dashboards across 5 modules, with SSR for the customer portal and REST integrations for authentication, bookings, payments, and real-time availability.",
  },
  {
    title: "SAFTA-CMS – Backend for SAFTA Website",
    stack: "Node.js, Express.js, PostgreSQL, Knex.js",
    summary:
      "Built REST APIs with authentication, RBAC, validation and error handling, plus PostgreSQL schema design and Knex.js migrations.",
  },
  {
    title: "AITIQS – Ticketing System Platform",
    stack: "Next.js, TypeScript, Tailwind CSS, RTK Query",
    summary:
      "Built dynamic, interactive UI components and responsive layouts; used RTK Query for real-time updates and streamlined data flow.",
  },
  {
    title: "SAFTA – Agri-Food Digital Platform, Saudi Arabia",
    stack: "React, TypeScript, RTK Query, Material UI",
    summary:
      "Developed scalable, responsive interfaces, using RTK Query for API integration, caching and data synchronization and MUI for a reusable component system.",
  },
  {
    title: "SGMB-CMS – Content Management System, Sharjah Government",
    stack: "React, JavaScript",
    summary:
      "Built administrative dashboards and content workflows with authentication and role-based access control, integrating frontend and backend services.",
  },
  {
    title: "SGMB – Event Platform, Sharjah Government",
    stack: "React, JavaScript",
    summary:
      "Developed responsive, accessible event interfaces with reusable components, optimized for cross-browser compatibility and performance.",
  },
] as const;

export const coverLetter = {
  roleFocus: "Full Stack Developer",
  greeting: "Dear Hiring Manager,",
  paragraphs: [
    "I am writing to apply for a Full Stack Developer role. With 4+ years shipping production software across the stack, I build polished React/Next.js frontends and reliable Node.js, NestJS, and PostgreSQL backends — including auth, APIs, databases, and deployment.",
    "At Zoftcares Technologies, I lead delivery on Stavoya, a multi-tenant platform with 5 modules and 4 role-based portals. That work spans reusable UI architecture, REST API integration, state management with Redux Toolkit and React Query, and backend contributions in Node.js/Express with PostgreSQL.",
    "I also own full product delivery end to end. CertiFlow and English Bell are production monorepos with JWT auth, RBAC dashboards, NestJS APIs, Prisma/PostgreSQL, and deploys on Vercel, Render, and Neon. I care about quality through testing, code reviews, accessibility, and CI/CD.",
    "I would welcome the chance to bring that full-stack ownership to your team. Thank you for your time and consideration — I would be glad to discuss how I can contribute.",
  ],
  closing: "Sincerely,",
};
