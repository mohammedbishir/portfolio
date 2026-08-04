"use client";

import type { ReactNode } from "react";
import { ScrollLetters } from "@/components/shared/animated-text";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

export function SectionShell(props: {
  id: string;
  title: string;
  subtitle: string;
  children: ReactNode;
}) {
  return (
    <section id={props.id} className="mx-auto w-full max-w-6xl px-4 sm:px-6">
      <div className="border-t border-border/60 py-14 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <ScrollReveal direction="left" className="space-y-2">
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
