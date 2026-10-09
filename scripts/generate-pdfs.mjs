import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import PDFDocument from "pdfkit";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const publicDir = path.join(root, "public");

const NAVY = "#1e3a5f";
const TEXT = "#1f2937";
const MUTED = "#4b5563";
const LIGHT = "#6b7280";

const profile = {
  name: "Mohammed Bishir K",
  title: "Full Stack Developer",
  headline: "React.js · Next.js · TypeScript · Node.js · NestJS · PostgreSQL",
  email: "mohammedbishirk@gmail.com",
  phone: "+91 8593067862",
  location: "Kerala, India",
  linkedin: "https://www.linkedin.com/in/mohammed-bishir-k-80843b330",
  summary:
    "Full Stack Developer with 4+ years building end-to-end web products — from responsive React/Next.js interfaces to Node.js, NestJS, and PostgreSQL backends. Led development on a multi-tenant enterprise platform with 5 modules and 4 role-based portals, and shipped production systems with JWT auth, REST APIs, RBAC, testing, and CI/CD on Vercel, Render, and Neon.",
  languages: "English (Fluent), Malayalam (Native)",
};

const skillGroups = [
  {
    label: "Core Frontend",
    items:
      "React JS, React Hooks, JavaScript (ES6+), TypeScript, HTML5, CSS3, Next.js (SSR), Responsive web development",
  },
  {
    label: "State Management & APIs",
    items:
      "Redux Toolkit, Redux, Context API, Zustand, RTK Query, React Query, RESTful API integration, Axios, JWT authentication",
  },
  {
    label: "UI Components",
    items:
      "Reusable component libraries, Component-based architecture, Material UI (MUI), Ant Design, Shadcn UI, Tailwind CSS, Bootstrap",
  },
  {
    label: "Performance & Quality",
    items:
      "Web performance optimization, Profiling, Memoization, Code splitting, Cross-browser compatibility, Accessibility standards, Jest, React Testing Library, Debugging",
  },
  {
    label: "Backend & Databases",
    items:
      "Node.js, Express.js, NestJS, REST API design, PostgreSQL, MySQL, MongoDB, RBAC, Microservices environments",
  },
  {
    label: "DevOps & Workflow",
    items:
      "Git, GitHub, CI/CD pipelines, Vite, Webpack, AWS, Vercel, Render, Linux, Agile/Scrum",
  },
];

const experience = {
  role: "Software Engineer, Zoftcares Technologies",
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
};

const projects = [
  {
    title: "CertiFlow – Digital Certificate Platform",
    stack: "Next.js, React, TypeScript, NestJS, Prisma, PostgreSQL, Tailwind",
    summary:
      "Built and shipped a full-stack multi-tenant platform with JWT auth, role-based admin dashboards, a WYSIWYG certificate designer with PDF generation and public QR verification. Delivered as a pnpm monorepo on Vercel, Render and Neon.",
  },
  {
    title: "English Bell – Institute Management System",
    stack:
      "Next.js, React, TypeScript, NestJS, Prisma, PostgreSQL, Tailwind, TanStack Query",
    summary:
      "Delivered a full-stack institute platform with JWT auth, role-based Super Admin / Admin / Reception portals, enquiry-to-fee workflows, CSV import, reports, and production deploy on Vercel, Render and Neon.",
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
];

const education =
  "Bachelor of Science (B.Sc) in Computer Science, Calicut University, Malappuram, Kerala";
const educationPeriod = "Apr 2019 — Apr 2022";

const coverLetter = {
  greeting: "Dear Hiring Manager,",
  paragraphs: [
    "I am writing to apply for a Full Stack Developer role. With 4+ years shipping production software across the stack, I build polished React/Next.js frontends and reliable Node.js, NestJS, and PostgreSQL backends — including auth, APIs, databases, and deployment.",
    "At Zoftcares Technologies, I lead delivery on Stavoya, a multi-tenant platform with 5 modules and 4 role-based portals. That work spans reusable UI architecture, REST API integration, state management with Redux Toolkit and React Query, and backend contributions in Node.js/Express with PostgreSQL.",
    "I also own full product delivery end to end. CertiFlow and English Bell are production monorepos with JWT auth, RBAC dashboards, NestJS APIs, Prisma/PostgreSQL, and deploys on Vercel, Render, and Neon. I care about quality through testing, code reviews, accessibility, and CI/CD.",
    "I would welcome the chance to bring that full-stack ownership to your team. Thank you for your time and consideration — I would be glad to discuss how I can contribute.",
  ],
  closing: "Sincerely,",
};

function ensurePublic() {
  if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });
}

function sectionHeading(doc, title) {
  doc.moveDown(0.55);
  doc
    .font("Helvetica-Bold")
    .fontSize(10)
    .fillColor(NAVY)
    .text(title.toUpperCase(), { characterSpacing: 0.6 });
  const y = doc.y + 2;
  doc
    .moveTo(doc.page.margins.left, y)
    .lineTo(doc.page.width - doc.page.margins.right, y)
    .strokeColor(NAVY)
    .lineWidth(1)
    .stroke();
  doc.moveDown(0.45);
  doc.fillColor(TEXT);
}

function bullet(doc, text) {
  const left = doc.page.margins.left;
  const bulletX = left + 4;
  const textX = left + 14;
  const width = doc.page.width - doc.page.margins.right - textX;
  const startY = doc.y;

  doc.circle(bulletX, startY + 4.5, 1.4).fill(MUTED);
  doc
    .font("Helvetica")
    .fontSize(9.2)
    .fillColor(MUTED)
    .text(text, textX, startY, { width, align: "left", lineGap: 1.5 });
  doc.moveDown(0.15);
}

async function writePdf(filePath, build) {
  await new Promise((resolve, reject) => {
    const doc = new PDFDocument({
      size: "A4",
      margins: { top: 42, bottom: 42, left: 48, right: 48 },
      info: {
        Title: path.basename(filePath, ".pdf"),
        Author: profile.name,
      },
    });
    const stream = fs.createWriteStream(filePath);
    doc.pipe(stream);
    build(doc);
    doc.end();
    stream.on("finish", resolve);
    stream.on("error", reject);
  });
}

async function generateResume() {
  const out = path.join(
    publicDir,
    "Mohammed_Bishir_Full_Stack_Developer.pdf",
  );

  await writePdf(out, (doc) => {
    doc
      .font("Helvetica-Bold")
      .fontSize(18)
      .fillColor(NAVY)
      .text(profile.name, { align: "center" });

    doc
      .moveDown(0.25)
      .font("Helvetica")
      .fontSize(10)
      .fillColor(TEXT)
      .text(`${profile.title}  |  ${profile.headline}`, { align: "center" });

    doc
      .moveDown(0.25)
      .fontSize(8.5)
      .fillColor(MUTED)
      .text(
        `${profile.email}  |  ${profile.phone}  |  ${profile.location}  |  LinkedIn  |  bishir.me`,
        { align: "center" },
      );

    sectionHeading(doc, "Professional Summary");
    doc
      .font("Helvetica")
      .fontSize(9.2)
      .fillColor(MUTED)
      .text(profile.summary, { align: "left", lineGap: 1.8 });

    sectionHeading(doc, "Technical Skills");
    for (const group of skillGroups) {
      doc
        .font("Helvetica-Bold")
        .fontSize(9.2)
        .fillColor(TEXT)
        .text(`${group.label}: `, { continued: true })
        .font("Helvetica")
        .fillColor(MUTED)
        .text(group.items);
      doc.moveDown(0.12);
    }

    sectionHeading(doc, "Professional Experience");
    const expTop = doc.y;
    doc.font("Helvetica-Bold").fontSize(10).fillColor(TEXT).text(experience.role);
    doc
      .font("Helvetica")
      .fontSize(9)
      .fillColor(LIGHT)
      .text(experience.period, doc.page.margins.left, expTop, {
        width: doc.page.width - doc.page.margins.left - doc.page.margins.right,
        align: "right",
      });
    doc.moveDown(0.35);
    for (const point of experience.points) bullet(doc, point);

    sectionHeading(doc, "Key Projects");
    for (const project of projects) {
      doc
        .font("Helvetica-Bold")
        .fontSize(9.5)
        .fillColor(TEXT)
        .text(project.title, { continued: true })
        .font("Helvetica-Oblique")
        .fillColor(LIGHT)
        .text(`  |  ${project.stack}`);
      doc.moveDown(0.08);
      bullet(doc, project.summary);
      doc.moveDown(0.12);
    }

    sectionHeading(doc, "Education");
    const eduTop = doc.y;
    doc.font("Helvetica-Bold").fontSize(9.5).fillColor(TEXT).text(education, {
      width: doc.page.width - doc.page.margins.left - doc.page.margins.right - 110,
    });
    doc
      .font("Helvetica")
      .fontSize(9)
      .fillColor(LIGHT)
      .text(educationPeriod, doc.page.margins.left, eduTop, {
        width: doc.page.width - doc.page.margins.left - doc.page.margins.right,
        align: "right",
      });

    sectionHeading(doc, "Languages");
    doc.font("Helvetica").fontSize(9.5).fillColor(MUTED).text(profile.languages);
  });

  console.log("Wrote", out);
}

async function generateCoverLetter() {
  const out = path.join(publicDir, "Mohammed_Bishir_Cover_Letter.pdf");

  await writePdf(out, (doc) => {
    doc
      .font("Helvetica-Bold")
      .fontSize(14)
      .fillColor(NAVY)
      .text(profile.name);

    doc
      .moveDown(0.2)
      .font("Helvetica")
      .fontSize(10)
      .fillColor(MUTED)
      .text(profile.title)
      .text(profile.location)
      .text(`${profile.email}  ·  ${profile.phone}`);

    doc.moveDown(1.2);
    doc.font("Helvetica").fontSize(10).fillColor(TEXT).text("Hiring Manager");
    doc
      .font("Helvetica-Oblique")
      .fillColor(LIGHT)
      .text("[Company Name] — Full Stack Developer");

    doc.moveDown(1);
    doc.font("Helvetica").fontSize(10.5).fillColor(TEXT).text(coverLetter.greeting);

    for (const paragraph of coverLetter.paragraphs) {
      doc.moveDown(0.7);
      doc
        .font("Helvetica")
        .fontSize(10.5)
        .fillColor(MUTED)
        .text(paragraph, { lineGap: 2.4, align: "left" });
    }

    doc.moveDown(1);
    doc.font("Helvetica").fontSize(10.5).fillColor(TEXT).text(coverLetter.closing);
    doc.moveDown(0.9);
    doc.font("Helvetica-Bold").fontSize(11).fillColor(NAVY).text(profile.name);
    doc.font("Helvetica").fontSize(10).fillColor(MUTED).text(profile.title);
  });

  console.log("Wrote", out);
}

ensurePublic();
await generateResume();
await generateCoverLetter();
