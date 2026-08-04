"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Check, Copy, Mail, MapPin, Phone } from "lucide-react";
import { ScrollLetters } from "@/components/shared/animated-text";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/portfolio";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";

export function ContactSection() {
  const { copy, isCopied } = useCopyToClipboard();

  return (
    <section id="contact" className="mx-auto w-full max-w-6xl px-4 sm:px-6">
      <div className="border-t border-border/60 py-14 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative overflow-hidden rounded-[2rem] border border-border/80 bg-gradient-to-br from-card/90 via-card/60 to-muted/40 p-8 backdrop-blur sm:p-12"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-indigo-500/[0.06] blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 size-64 rounded-full bg-violet-500/[0.05] blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div className="space-y-5">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-secondary">
                <ScrollLetters text="Contact" as="span" />
              </p>
              <h2 className="max-w-lg text-balance text-3xl font-semibold tracking-tight sm:text-5xl">
                Let&apos;s build something solid together.
              </h2>
              <p className="max-w-md text-base leading-7 text-secondary">
                Open to fullstack roles, freelance work, and collaboration.
                Based in {profile.location} — I usually reply within a day.
              </p>

              <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
                <Button href={`mailto:${profile.email}`} size="lg">
                  Email me <ArrowUpRight className="size-4" />
                </Button>
                <Button
                  href={profile.github}
                  variant="secondary"
                  size="lg"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub <ArrowUpRight className="size-4" />
                </Button>
                <Button
                  href={profile.linkedin}
                  variant="secondary"
                  size="lg"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn <ArrowUpRight className="size-4" />
                </Button>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-4 rounded-2xl border border-border/70 bg-background/30 px-4 py-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-border/70 bg-background/40">
                  <Mail className="size-4" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-xs uppercase tracking-wider text-muted-foreground">
                    Email
                  </span>
                  <span className="mt-0.5 block break-all text-sm font-medium text-foreground sm:text-base">
                    {profile.email}
                  </span>
                </span>
                <button
                  type="button"
                  onClick={() => copy("email", profile.email)}
                  aria-label={isCopied("email") ? "Email copied" : "Copy email"}
                  title={isCopied("email") ? "Copied!" : "Copy email"}
                  className="inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-border/70 bg-background/40 text-muted-foreground transition-colors hover:bg-background/70 hover:text-foreground"
                >
                  {isCopied("email") ? (
                    <Check className="size-4" />
                  ) : (
                    <Copy className="size-4" />
                  )}
                </button>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-border/70 bg-background/30 px-4 py-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-border/70 bg-background/40">
                  <Phone className="size-4" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-xs uppercase tracking-wider text-muted-foreground">
                    Phone
                  </span>
                  <span className="mt-0.5 block text-sm font-medium text-foreground sm:text-base">
                    {profile.phone}
                  </span>
                </span>
                <button
                  type="button"
                  onClick={() => copy("phone", profile.phone)}
                  aria-label={
                    isCopied("phone")
                      ? "Phone number copied"
                      : "Copy phone number"
                  }
                  title={isCopied("phone") ? "Copied!" : "Copy phone number"}
                  className="inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-border/70 bg-background/40 text-muted-foreground transition-colors hover:bg-background/70 hover:text-foreground"
                >
                  {isCopied("phone") ? (
                    <Check className="size-4" />
                  ) : (
                    <Copy className="size-4" />
                  )}
                </button>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-border/70 bg-background/30 px-4 py-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-border/70 bg-background/40">
                  <MapPin className="size-4" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-xs uppercase tracking-wider text-muted-foreground">
                    Location
                  </span>
                  <span className="mt-0.5 block text-sm font-medium text-foreground sm:text-base">
                    {profile.location}
                  </span>
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

