"use client";

import { motion } from "framer-motion";
import { profile, education } from "@/data/portfolio";
import { staggerContainer, staggerItem } from "@/components/shared/scroll-reveal";
import { SectionShell } from "@/components/sections/section-shell";

export function AboutSection() {
  return (
    <SectionShell
      id="about"
      title="About"
      subtitle="Professional summary from my CV — how I build and ship software."
    >
      <div className="space-y-6">
        <motion.p
          initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-base leading-7 text-secondary"
        >
          {profile.summary}
        </motion.p>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-4 sm:grid-cols-2"
        >
          {[
            { t: "Frontend craft", d: "React.js, Next.js, and TypeScript with clean, mobile-first UI systems." },
            { t: "Backend systems", d: "Node.js, Express, PostgreSQL, and MongoDB for scalable APIs and data." },
            { t: "Delivery mindset", d: "Agile collaboration, reusable components, and maintainable code reviews." },
            { t: "Deploy & ops", d: "Basic AWS and Linux experience for reliable app deployment." },
          ].map((c) => (
            <motion.div
              key={c.t}
              variants={staggerItem}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="rounded-2xl border border-border/80 bg-card/60 p-5 backdrop-blur"
            >
              <div className="font-medium">{c.t}</div>
              <div className="mt-2 text-sm leading-6 text-secondary">{c.d}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="rounded-2xl border border-border/80 bg-card/60 p-5 backdrop-blur"
        >
          <div className="font-medium">Education</div>
          <div className="mt-2 text-sm leading-6 text-secondary">
            <p className="text-primary">{education.degree}</p>
            <p>{education.period} · {education.college}</p>
            <p>{education.university}</p>
          </div>
          <div className="mt-4 font-medium">Languages</div>
          <p className="mt-2 text-sm leading-6 text-secondary">
            {profile.languages.join(", ")}
          </p>
        </motion.div>
      </div>
    </SectionShell>
  );
}
