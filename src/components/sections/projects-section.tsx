"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/portfolio";
import { staggerContainer, staggerItem } from "@/components/shared/scroll-reveal";
import { SectionShell } from "@/components/sections/section-shell";

export function ProjectsSection() {
  return (
    <SectionShell
      id="projects"
      title="Projects"
      subtitle="Full-stack platforms across certificates, education, booking, government, agri-food, and ticketing."
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-4"
      >
        {projects.map((p) => (
          <motion.article
            key={p.title}
            variants={staggerItem}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="group rounded-2xl border border-border/80 bg-card/60 p-5 backdrop-blur"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <h3 className="text-lg font-semibold tracking-tight">{p.title}</h3>
              {p.href ? (
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 text-sm font-medium text-primary underline-offset-4 hover:underline"
                >
                  View demo
                </a>
              ) : null}
            </div>
            <p className="mt-2 text-sm leading-6 text-secondary">{p.description}</p>
            <ul className="mt-3 space-y-1.5 text-sm leading-6 text-secondary">
              {p.highlights.slice(0, 3).map((h) => (
                <li key={h} className="flex gap-2">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-foreground/40" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border/70 bg-muted/40 px-2.5 py-1 text-xs text-secondary"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </SectionShell>
  );
}
