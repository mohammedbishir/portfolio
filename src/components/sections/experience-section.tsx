"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/portfolio";
import { staggerContainer, staggerItem } from "@/components/shared/scroll-reveal";
import { SectionShell } from "@/components/sections/section-shell";

export function ExperienceSection() {
  return (
    <SectionShell
      id="experience"
      title="Experience"
      subtitle="Where I've shipped production software and led frontend delivery."
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="space-y-4"
      >
        {experience.map((job) => (
          <motion.article
            key={`${job.company}-${job.role}`}
            variants={staggerItem}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="rounded-2xl border border-border/80 bg-card/60 p-5 backdrop-blur sm:p-6"
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold tracking-tight">
                  {job.role}
                </h3>
                <p className="text-sm text-secondary">{job.company}</p>
              </div>
              <p className="text-sm text-secondary">{job.period}</p>
            </div>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-secondary">
              {job.points.map((point) => (
                <li key={point} className="flex gap-2">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-foreground/40" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </motion.div>
    </SectionShell>
  );
}
