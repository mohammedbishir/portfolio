export const profile = {
  name: "Mohammed Bishir K",
  shortName: "Bishir",
  title: "Fullstack Developer",
  email: "mohammedbishirk@gmail.com",
  phone: "+91 8593067862",
  location: "Kerala, India",
  github: "https://github.com/mohammedbishir",
  linkedin: "https://www.linkedin.com/in/mohammed-bishir-k-80843b330",
  linktree: "https://linktr.ee/Mohammed_bishir",
  summary:
    "Full-stack developer with 4 years building scalable, maintainable web applications. Skilled in React.js and TypeScript, with experience improving UI/UX and driving performance optimization. Strong problem-solving approach to deliver clean, scalable code from design to deployment.",
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
    title: "SGMB — Sharjah Government Events Platform",
    description:
      "Event-based project for Sharjah Government with dynamic, responsive React interfaces and accessibility-focused delivery.",
    highlights: [
      "Designed and implemented dynamic, responsive user interfaces using React",
      "Integrated reusable components for consistency across the platform",
      "Collaborated with backend teams to fetch and display real-time event data",
      "Ensured cross-browser compatibility and performance for high-traffic usage",
      "Followed strict accessibility guidelines to meet government standards",
    ],
    tags: ["React", "JavaScript"],
  },
  {
    title: "SGMB-CMS — Sharjah Government CMS",
    description:
      "Content management system for Sharjah Government events and content updates, with dashboards and role-based access.",
    highlights: [
      "Developed and maintained a robust CMS using React",
      "Built user-friendly dashboards and admin tools for content workflows",
      "Implemented secure authentication and role-based access control",
      "Collaborated with SGMB frontend and backend teams for content sync",
    ],
    tags: ["React", "JavaScript", "CMS", "RBAC"],
  },
  {
    title: "SAFTA — Agri-food Digital Platform (Saudi Arabia)",
    description:
      "Agri-food digital platform for Saudi Arabia with scalable React/TypeScript interfaces and real-time data fetching.",
    highlights: [
      "Designed scalable, user-friendly interfaces with React and TypeScript",
      "Implemented RTK Query for real-time data fetching and caching",
      "Styled with Material-UI for a modern, consistent design",
      "Optimized for high performance and responsiveness across devices",
    ],
    tags: ["React", "TypeScript", "RTK Query", "Material-UI"],
  },
  {
    title: "SAFTA-CMS — Platform CMS & APIs",
    description:
      "Backend CMS infrastructure for SAFTA: Node.js APIs, PostgreSQL, Knex.js, and secure content operations.",
    highlights: [
      "Built backend with Node.js and Express.js for scalable architecture",
      "Designed PostgreSQL schemas and optimized queries for integrity",
      "Implemented Knex.js for query building and migrations",
      "Built secure REST APIs for news, events, and media uploads",
      "Integrated role-based access control and authentication",
    ],
    tags: ["Node.js", "Express.js", "PostgreSQL", "Knex.js"],
  },
  {
    title: "AITIQS — Ticketing System Platform",
    description:
      "Ticketing system platform with dynamic Next.js UI, Tailwind layouts, and RTK Query data flow.",
    highlights: [
      "Built interactive UI components with Next.js and TypeScript",
      "Designed responsive layouts with Tailwind CSS",
      "Managed API interactions and state with RTK Query",
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "RTK Query"],
  },
  {
    title: "Zapbed (Stavoya) — Room Booking Platform",
    description:
      "Multi-tenant room booking platform with Super Admin, Admin/Tenant, Agent, and User portals.",
    highlights: [
      "Built 5 role-based modules serving different access levels",
      "Next.js SSR user portal for SEO and faster page loads",
      "React TypeScript dashboards with RBAC and complex data management",
      "Integrated Node.js REST APIs for auth, booking, and payments",
      "Redux / Context API state management across booking flows",
      "Reusable component libraries for consistency across modules",
    ],
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Redux",
      "Tailwind CSS",
    ],
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
    role: "Software Developer",
    company: "Zoftcares Technologies",
    period: "Jul 2022 — Dec 2024",
    points: [
      "Led development of user-friendly, responsive web applications using modern frameworks and TypeScript",
      "Collaborated with UX/UI designers to deliver pixel-perfect interfaces and improve UI/UX across products",
      "Implemented performance optimization strategies to reduce load times and improve responsiveness",
      "Integrated RTK Query and Redux Toolkit to centralize state and streamline API interactions",
      "Developed reusable component libraries to standardize the codebase and enable scalable reuse",
      "Collaborated with backend, product, and QA teams, leveraging CI/CD pipelines and Git for deployments",
      "Maintained high code quality through clean code, rigorous reviews, and modular design principles",
      "Deployed and managed web applications on Linux servers, supporting REST APIs for frontend integrations",
    ],
  },
];

export type SkillGroup = {
  label: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Frameworks",
    items: ["React.js", "Next.js", "Node.js"],
  },
  {
    label: "Programming Languages",
    items: ["JavaScript", "TypeScript"],
  },
  {
    label: "State Management & Data Fetching",
    items: ["Redux", "RTK Query", "React Query", "Axios", "Hooks"],
  },
  {
    label: "Frontend Technologies",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "MUI",
      "Ant Design",
      "Shadcn UI",
      "jQuery",
      "Bootstrap",
      "Angular",
    ],
  },
  {
    label: "Database",
    items: ["PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    label: "Cloud & Version Control",
    items: ["AWS", "Git", "GitHub"],
  },
];

export const education = {
  degree: "B.Sc, Computer Science",
  period: "Jan 2018 — Jan 2021",
  college: "Calicut University",
  university: "Malappuram, Kerala, India",
};
