"use client";

import type { ReactNode } from "react";
import { ScrollLetters } from "@/components/shared/animated-text";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

const sectionIndex: Record<string, string> = {
  about: "01",
  experience: "02",
  projects: "03",
  skills: "04",
  resume: "05",
  "cover-letter": "06",
  contact: "07",
};

export function SectionShell(props: {
  id: string;
  title: string;
  subtitle: string;
  children: ReactNode;
}) {
  const index = sectionIndex[props.id] ?? "00";

  return (
    <section id={props.id} className="mx-auto w-full max-w-6xl px-4 sm:px-6">
      <div className="border-t border-border/60 py-14 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <ScrollReveal direction="left" className="space-y-3">
            <p className="font-mono text-[11px] tracking-[0.22em] text-signal">
              {index} // {props.title.toUpperCase()}
            </p>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              <ScrollLetters text={props.title} as="span" />
            </h2>
            <p className="max-w-sm text-sm leading-6 text-secondary">
              {props.subtitle}
            </p>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.1}>
            {props.children}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
