export const profile = {
  name: "Mohammed Bishir K",
  shortName: "Bishir",
  title: "Software Engineer | Frontend Development",
  email: "mohammedbishirk@gmail.com",
  phone: "+91 8593067862",
  location: "Kerala, India",
  github: "https://github.com/mohammedbishir",
  linkedin: "https://www.linkedin.com/in/mohammed-bishir-k-80843b330",
  linktree: "https://linktr.ee/Mohammed_bishir",
  summary:
    "Front-end Developer with 4+ years building responsive, scalable web applications using JavaScript and TypeScript. Focused on performance optimization, maintainable component architectures, and collaborating with designers to deliver production-ready UIs.",
  languages: ["English (Fluent)", "Malayalam (Native)"],
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
    title: "Stavoya — Multi-Tenant Room Booking Platform",
    description:
      "Scalable multi-tenant room booking platform with 5 modules and role-based dashboards, focused on responsive design, performance, SSR for SEO, and robust RBAC.",
    highlights: [
      "Collaborated with UI/UX designers to implement pixel-perfect UIs",
      "Enforced code quality, testing, and documentation practices",
      "Integrated RESTful APIs for authentication, booking workflows, payments, and real-time availability",
    ],
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Redux",
      "Context API",
      "Tailwind",
    ],
  },
  {
    title: "SGMB — Event-Based Platform for Sharjah Government",
    description:
      "Responsive and accessible event management interfaces following HTML5 semantics and government accessibility standards.",
    highlights: [
      "Built reusable UI components and integrated backend APIs",
      "Collaborated with designers to ensure cross-browser compatibility and performance",
    ],
    tags: ["React", "JavaScript"],
  },
  {
    title: "SGMB-CMS — Content Management System for Sharjah Government",
    description:
      "React-based CMS with administrative dashboards, authentication, and RBAC for secure content workflows.",
    highlights: [
      "Integrated frontend and backend services to support secure content operations",
      "Aligned implementation with traditional CMS requirements and documentation practices",
    ],
    tags: ["React", "JavaScript"],
  },
  {
    title: "SAFTA — Agri-Food Digital Platform for Saudi Arabia",
    description:
      "Scalable frontend interfaces with RTK Query and Material UI, focused on caching, API integration, responsive design, and performance.",
    highlights: [
      "Delivered interfaces meeting business requirements and testing standards",
      "Used RTK Query for efficient data fetching and caching",
    ],
    tags: ["React", "TypeScript", "RTK Query", "Material-UI"],
  },
  {
    title: "SAFTA-CMS — Content Management System for SAFTA website",
    description:
      "Backend services and RESTful APIs with Node.js and Express.js supporting CMS content operations.",
    highlights: [
      "Designed PostgreSQL schemas with Knex.js",
      "Applied validation, error handling, and role-based access control",
    ],
    tags: ["Node.js", "Express.js", "PostgreSQL", "Knex.js"],
  },
  {
    title: "AITIQS — Ticketing System Platform",
    description:
      "Interactive UI with Next.js and TypeScript, responsive layouts, and real-time updates via RTK Query.",
    highlights: [
      "Built interactive UI components with Next.js and TypeScript",
      "Optimized developer builds and tooling using Vite",
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "RTK Query"],
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
      "Led frontend development for a multi-tenant room-booking platform with 5 major modules, delivering role-based portals for User, Agent, Admin/Tenant, and Super Admin and improving feature delivery velocity across teams.",
      "Built responsive, accessible, pixel-perfect interfaces from UX/UI designs, collaborating directly with designers to bridge design and implementation and maintain cross-browser compatibility.",
      "Implemented scalable component architecture and modular React/Next.js components, reducing duplication and improving maintainability across the codebase.",
      "Integrated RESTful APIs and collaborated with backend engineers to deliver authentication, booking workflows, payment processing, and real-time availability with predictable data flows.",
      "Implemented state management and API caching for complex workflows using Redux Toolkit, RTK Query, React Query, and Context API to improve data consistency and reduce API requests.",
      "Improved application performance and page speed through frontend performance optimization techniques, server-side rendering for SEO, and targeted rendering optimizations; supported fast load times across devices.",
      "Participated in peer code reviews and enforced code quality, testing, and documentation practices to keep codebase maintainable and production-ready.",
      "Supported production deployment and maintenance using Git, GitHub, CI/CD pipelines, and Linux servers; optimized build pipeline and developer workflow with Webpack.",
    ],
  },
];

export type SkillGroup = {
  label: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Angular",
    ],
  },
  {
    label: "State Management & Data Fetching",
    items: [
      "Redux Toolkit",
      "RTK Query",
      "React Query",
      "Context API",
      "React Hooks",
      "Axios",
    ],
  },
  {
    label: "UI & Styling",
    items: [
      "Material UI (MUI)",
      "Ant Design",
      "Shadcn UI",
      "Tailwind CSS",
      "Bootstrap",
      "jQuery",
    ],
  },
  {
    label: "Backend & APIs",
    items: ["Node.js", "Express.js", "RESTful APIs"],
  },
  {
    label: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    label: "Tools & Build",
    items: ["Git", "GitHub", "Webpack", "Vite"],
  },
  {
    label: "Cloud & DevOps",
    items: ["AWS", "Linux", "CI/CD"],
  },
  {
    label: "CMS & Practices",
    items: [
      "Traditional CMS",
      "Code quality",
      "Testing",
      "Documentation",
      "UI/UX collaboration",
      "HTML5 semantics",
    ],
  },
];

export const education = {
  degree: "B.Sc, Computer Science",
  period: "Apr 2019 — Apr 2022",
  college: "Calicut University",
  university: "Malappuram, Kerala",
};
