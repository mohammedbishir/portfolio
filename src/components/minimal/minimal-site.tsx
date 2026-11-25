"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Download, Mail, Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import {
  education,
  experience,
  profile,
  projects,
  skillGroups,
} from "@/data/portfolio";

const nav = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#about", label: "About" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

const ease = [0.22, 1, 0.36, 1] as const;

function ThemeButton() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) {
    return <span className="size-9" aria-hidden />;
  }
  const dark = theme === "dark";
  return (
    <button
      type="button"
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setTheme(dark ? "light" : "dark")}
      className="inline-flex size-9 items-center justify-center rounded-md border border-border text-secondary transition hover:text-primary"
    >
      {dark ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </button>
  );
}

export function MinimalSite() {
  const [open, setOpen] = useState(false);
  const featured = projects.slice(0, 6);

  return (
    <div className="site-atmosphere min-h-svh text-primary">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-[color:var(--bg-primary)]/80 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-5 sm:px-8">
          <a href="#top" className="text-sm font-semibold tracking-tight">
            {profile.domain}
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-secondary transition hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeButton />
            <button
              type="button"
              className="inline-flex size-9 items-center justify-center rounded-md border border-border md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </div>

        {open ? (
          <div className="border-t border-border px-5 py-3 md:hidden">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-sm text-secondary"
              >
                {item.label}
              </a>
            ))}
          </div>
        ) : null}
      </header>

      {/* Hero */}
      <section
        id="top"
        className="relative mx-auto flex min-h-[100svh] max-w-5xl flex-col justify-end px-5 pb-20 pt-28 sm:px-8 sm:pb-24 lg:justify-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          className="font-serif text-xl italic text-secondary sm:text-2xl"
        >
          {profile.domain}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08, ease }}
          className="mt-4 max-w-3xl text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.18, ease }}
          className="mt-5 max-w-xl text-lg leading-8 text-secondary"
        >
          {profile.title}. Building React/Next.js frontends and NestJS backends
          that ship to production.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.3, ease }}
          className="mt-10 flex flex-col gap-3 sm:flex-row"
        >
          <a
            href="#work"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-accent px-5 text-sm font-medium text-accent-foreground"
          >
            View work <ArrowUpRight className="size-4" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-border px-5 text-sm font-medium"
          >
            <Mail className="size-4" /> Contact
          </a>
        </motion.div>
      </section>

      {/* Work */}
      <section id="work" className="border-t border-border px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs uppercase tracking-[0.2em] text-secondary">
            Selected work
          </p>
          <h2 className="mt-3 font-serif text-3xl tracking-tight sm:text-4xl">
            Projects
          </h2>

          <ul className="mt-12 divide-y divide-border border-y border-border">
            {featured.map((project) => (
              <li key={project.title} className="py-8">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="max-w-2xl">
                    <h3 className="text-xl font-semibold tracking-tight">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-secondary">
                      {project.description}
                    </p>
                    <p className="mt-4 font-mono text-[11px] tracking-wide text-secondary">
                      {project.tags.slice(0, 6).join(" · ")}
                    </p>
                  </div>
                  {project.href ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex shrink-0 items-center gap-1 text-sm font-medium underline-offset-4 hover:underline"
                    >
                      Live demo <ArrowUpRight className="size-3.5" />
                    </a>
                  ) : null}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Experience */}
      <section
        id="experience"
        className="border-t border-border px-5 py-20 sm:px-8 sm:py-28"
      >
        <div className="mx-auto max-w-5xl">
          <p className="text-xs uppercase tracking-[0.2em] text-secondary">
            Experience
          </p>
          <h2 className="mt-3 font-serif text-3xl tracking-tight sm:text-4xl">
            Where I work
          </h2>

          <div className="mt-12 space-y-12">
            {experience.map((job) => (
              <article key={`${job.company}-${job.role}`}>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">{job.role}</h3>
                    <p className="text-sm text-secondary">{job.company}</p>
                  </div>
                  <p className="font-mono text-xs text-secondary">{job.period}</p>
                </div>
                <ul className="mt-5 max-w-3xl space-y-2 text-sm leading-7 text-secondary">
                  {job.points.slice(0, 5).map((point) => (
                    <li key={point} className="pl-4 relative before:absolute before:left-0 before:content-['–']">
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-border px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-secondary">
              About
            </p>
            <h2 className="mt-3 font-serif text-3xl tracking-tight sm:text-4xl">
              Full stack, production-minded
            </h2>
          </div>
          <div className="space-y-8">
            <p className="text-base leading-8 text-secondary">{profile.summary}</p>
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <p className="text-sm font-semibold">Education</p>
                <p className="mt-2 text-sm leading-7 text-secondary">
                  {education.degree}
                  <br />
                  {education.period}
                  <br />
                  {education.college}, {education.university}
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold">Languages</p>
                <p className="mt-2 text-sm leading-7 text-secondary">
                  {profile.languages.join(", ")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stack */}
      <section id="stack" className="border-t border-border px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs uppercase tracking-[0.2em] text-secondary">
            Stack
          </p>
          <h2 className="mt-3 font-serif text-3xl tracking-tight sm:text-4xl">
            Tools I use
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <div key={group.label}>
                <p className="text-sm font-semibold">{group.label}</p>
                <p className="mt-2 text-sm leading-7 text-secondary">
                  {group.items.join(" · ")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Docs */}
      <section id="docs" className="border-t border-border px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs uppercase tracking-[0.2em] text-secondary">
            Documents
          </p>
          <h2 className="mt-3 font-serif text-3xl tracking-tight sm:text-4xl">
            Resume & cover letter
          </h2>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={profile.resumePdf}
              download
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-border bg-card px-5 text-sm font-medium transition hover:bg-secondary"
            >
              <Download className="size-4" /> Download CV
            </a>
            <a
              href={profile.coverLetterPdf}
              download
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-border bg-card px-5 text-sm font-medium transition hover:bg-secondary"
            >
              <Download className="size-4" /> Download cover letter
            </a>
            <a
              href="/resume"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md px-5 text-sm font-medium text-secondary underline-offset-4 hover:text-primary hover:underline"
            >
              View resume page
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="border-t border-border px-5 py-20 sm:px-8 sm:py-28"
      >
        <div className="mx-auto max-w-5xl">
          <p className="text-xs uppercase tracking-[0.2em] text-secondary">
            Contact
          </p>
          <h2 className="mt-3 max-w-xl font-serif text-3xl tracking-tight sm:text-5xl">
            Let&apos;s work together
          </h2>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-accent px-5 text-sm font-medium text-accent-foreground"
            >
              <Mail className="size-4" /> {profile.email}
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-md border border-border px-5 text-sm"
            >
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-md border border-border px-5 text-sm"
            >
              LinkedIn
            </a>
          </div>
          <p className="mt-6 text-sm text-secondary">
            {profile.phone} · {profile.location}
          </p>
        </div>
      </section>

      <footer className="border-t border-border px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 text-sm text-secondary sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} {profile.name}
          </p>
          <p>{profile.domain}</p>
        </div>
      </footer>
    </div>
  );
}
