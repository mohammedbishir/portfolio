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
      subtitle="Frameworks, languages, and tools from my professional stack."
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
            <div className="mb-2 text-sm font-medium">{group.label}</div>
            <div className="flex flex-wrap gap-2">
              {group.items.map((s, i) => (
                <motion.span
                  key={s}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.03, ease: [0.25, 0.46, 0.45, 0.94] }}
                  whileHover={{ y: -2, transition: { duration: 0.15 } }}
                  className="rounded-full border border-border/70 bg-muted/40 px-3 py-2 text-sm text-secondary"
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
