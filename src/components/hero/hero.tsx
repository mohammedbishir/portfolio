"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Download, Mail } from "lucide-react";
import { AnimatedLetters } from "@/components/shared/animated-text";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/portfolio";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const [firstName, ...rest] = profile.name.split(" ");
  const lastName = rest.join(" ");

  return (
    <section
      id="top"
      className="relative isolate min-h-[100svh] w-full overflow-hidden"
    >
      <div className="absolute inset-0 bg-primary" />
      <div className="fx-grid pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="fx-scan absolute inset-x-0 top-0" />
      </div>
      <div className="pointer-events-none absolute -right-24 top-28 h-[28rem] w-[28rem] rounded-full border border-signal/20" />
      <div className="pointer-events-none absolute -right-8 top-44 h-[18rem] w-[18rem] rounded-full border border-signal/10" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[var(--bg-primary)] to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-6xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:justify-center">
        <div className="max-w-2xl space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease }}
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.28em] text-signal"
          >
            <span className="size-1.5 bg-signal" />
            {profile.title}
            <span className="text-secondary">// online</span>
          </motion.div>

          <h1 className="text-balance text-5xl font-semibold leading-[0.92] tracking-tight sm:text-6xl lg:text-7xl">
            <span className="block text-primary">
              <AnimatedLetters text={firstName} startDelay={0.12} />
            </span>
            <span className="mt-1 block text-signal">
              <AnimatedLetters text={lastName} startDelay={0.38} />
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.7, ease }}
            className="max-w-lg text-pretty text-base leading-7 text-secondary sm:text-lg"
          >
            Full Stack Developer building React/Next.js frontends and
            Node.js/NestJS backends — 4+ years shipping production platforms.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.95, ease }}
            className="flex flex-col gap-3 sm:flex-row"
          >
            <Button href="#projects" size="lg" className="group">
              View projects
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Button>
            <Button
              href={profile.resumePdf}
              download
              variant="secondary"
              size="lg"
              className="justify-center"
            >
              Download CV <Download className="size-4" />
            </Button>
            <Button
              href={`mailto:${profile.email}`}
              variant="ghost"
              size="lg"
              className="justify-center"
            >
              Contact <Mail className="size-4" />
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="font-mono text-[11px] tracking-wide text-secondary"
          >
            {profile.headline}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
