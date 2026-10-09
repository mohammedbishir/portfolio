"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Check, Copy, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/portfolio";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";

export function ContactSection() {
  const { copy, isCopied } = useCopyToClipboard();

  return (
    <section id="contact" className="mx-auto w-full max-w-6xl px-4 sm:px-6">
      <div className="border-t border-border/60 py-14 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="fx-panel relative overflow-hidden p-8 sm:p-12"
        >
          <div className="fx-grid pointer-events-none absolute inset-0 opacity-60" />

          <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div className="space-y-5">
              <p className="font-mono text-[11px] tracking-[0.22em] text-signal">
                07 // CONTACT
              </p>
              <h2 className="max-w-lg text-balance text-3xl font-semibold tracking-tight sm:text-5xl">
                Let&apos;s build the next system.
              </h2>
              <p className="max-w-md text-base leading-7 text-secondary">
                Open to full-stack roles, freelance work, and collaboration.
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
              {[
                {
                  key: "email",
                  label: "Email",
                  value: profile.email,
                  icon: Mail,
                  copyable: true,
                },
                {
                  key: "phone",
                  label: "Phone",
                  value: profile.phone,
                  icon: Phone,
                  copyable: true,
                },
                {
                  key: "location",
                  label: "Location",
                  value: profile.location,
                  icon: MapPin,
                  copyable: false,
                },
              ].map((row) => (
                <div
                  key={row.key}
                  className="flex items-center gap-4 rounded-lg border border-border/70 bg-background/40 px-4 py-4"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-md border border-border/70 bg-signal-soft text-signal">
                    <row.icon className="size-4" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                      {row.label}
                    </span>
                    <span className="mt-0.5 block break-all text-sm font-medium text-foreground sm:text-base">
                      {row.value}
                    </span>
                  </span>
                  {row.copyable ? (
                    <button
                      type="button"
                      onClick={() => copy(row.key, row.value)}
                      aria-label={
                        isCopied(row.key) ? `${row.label} copied` : `Copy ${row.label}`
                      }
                      className="inline-flex size-9 shrink-0 items-center justify-center rounded-md border border-border/70 bg-background/40 text-muted-foreground transition-colors hover:border-signal/40 hover:text-foreground"
                    >
                      {isCopied(row.key) ? (
                        <Check className="size-4" />
                      ) : (
                        <Copy className="size-4" />
                      )}
                    </button>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
