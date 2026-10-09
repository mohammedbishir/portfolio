"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/data/portfolio";
import { staggerContainer, staggerItem } from "@/components/shared/scroll-reveal";
import { SectionShell } from "@/components/sections/section-shell";

export function SkillsSection() {
  return (
    <SectionShell
      id="skills"
      title="Skills"
      subtitle="Frontend, backend, databases, and DevOps — the full stack I ship with."
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="space-y-5"
      >
        {skillGroups.map((group) => (
          <motion.div key={group.label} variants={staggerItem}>
            <div className="mb-2 font-mono text-[10px] tracking-[0.16em] text-signal">
              {group.label.toUpperCase()}
            </div>
            <div className="flex flex-wrap gap-2">
              {group.items.map((s, i) => (
                <motion.span
                  key={s}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.03, ease: [0.25, 0.46, 0.45, 0.94] }}
                  whileHover={{ y: -2, transition: { duration: 0.15 } }}
                  className="rounded-md border border-border/70 bg-signal-soft px-2.5 py-1.5 font-mono text-[11px] tracking-wide text-secondary"
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionShell>
  );
}
