"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { AnimatedLetters } from "@/components/shared/animated-text";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/portfolio";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export function Hero() {
  const [firstName, ...rest] = profile.name.split(" ");
  const lastName = rest.join(" ");

  return (
    <section
      id="top"
      className="relative isolate min-h-[100svh] w-full overflow-hidden"
    >
      {/* Atmospheric background — no Three.js */}
      <div className="absolute inset-0 bg-primary" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_35%,rgba(244,114,182,0.16),transparent_55%)] dark:bg-[radial-gradient(ellipse_at_70%_35%,rgba(232,121,249,0.18),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,rgba(34,211,238,0.1),transparent_50%)] dark:bg-[radial-gradient(ellipse_at_20%_80%,rgba(34,211,238,0.12),transparent_50%)]" />
      <div className="pointer-events-none absolute -left-20 top-24 size-[28rem] rounded-full bg-rose-400/10 blur-3xl dark:bg-fuchsia-500/15" />
      <div className="pointer-events-none absolute right-0 top-1/3 size-[22rem] rounded-full bg-cyan-400/10 blur-3xl dark:bg-pink-500/10" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[var(--bg-primary)] to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-6xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:justify-center">
        <div className="max-w-xl space-y-8 lg:max-w-lg">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease }}
            className="text-xs font-medium uppercase tracking-[0.28em] text-secondary"
          >
            {profile.title}
          </motion.p>

          <h1 className="text-balance text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            <span className="block text-primary">
              <AnimatedLetters text={firstName} startDelay={0.12} />
            </span>
            <span className="mt-1 block bg-gradient-to-br from-rose-400 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent dark:from-rose-300 dark:via-fuchsia-300 dark:to-cyan-200">
              <AnimatedLetters text={lastName} startDelay={0.38} />
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.7, ease }}
            className="max-w-md text-pretty text-base leading-7 text-secondary sm:text-lg"
          >
            Building scalable web apps with React, Next.js, and Node — clean
            interfaces, strong performance, maintainable code.
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
              href={`mailto:${profile.email}`}
              variant="secondary"
              size="lg"
              className="justify-center backdrop-blur-sm"
            >
              Contact me <Mail className="size-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
