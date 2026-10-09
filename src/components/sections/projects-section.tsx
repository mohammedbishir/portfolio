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
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            variants={staggerItem}
            whileHover={{ y: -2, transition: { duration: 0.2 } }}
            className="fx-panel group p-5"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="space-y-1">
                <p className="font-mono text-[10px] tracking-[0.18em] text-signal">
                  PRJ-{String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="text-lg font-semibold tracking-tight">{p.title}</h3>
              </div>
              {p.href ? (
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 font-mono text-xs tracking-wide text-signal underline-offset-4 hover:underline"
                >
                  DEMO →
                </a>
              ) : null}
            </div>
            <p className="mt-2 text-sm leading-6 text-secondary">{p.description}</p>
            <ul className="mt-3 space-y-1.5 text-sm leading-6 text-secondary">
              {p.highlights.slice(0, 3).map((h) => (
                <li key={h} className="flex gap-2">
                  <span className="mt-2 size-1.5 shrink-0 bg-signal" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-border/70 bg-signal-soft px-2 py-1 font-mono text-[10px] tracking-wide text-secondary"
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
