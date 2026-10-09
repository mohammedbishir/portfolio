"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Check, Mail, Phone } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/social-icons";
import { SocialIconButton } from "@/components/shared/social-icon-button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/portfolio";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#resume", label: "Resume" },
  { href: "#cover-letter", label: "Cover Letter" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const { copy, isCopied } = useCopyToClipboard();

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ y: -18, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 flex items-center justify-between rounded-xl border border-border/80 bg-card/80 px-4 py-3 backdrop-blur-xl"
        >
          <a href="#top" className="font-semibold tracking-tight">
            <span className="text-signal">/</span>
            <span className="font-mono text-sm tracking-tight">{profile.domain}</span>
          </a>

          <nav className="hidden items-center gap-0.5 lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-md px-2.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-secondary transition-colors hover:bg-signal-soft hover:text-primary"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-1 sm:flex">
              <SocialIconButton
                label={isCopied("email") ? "Email copied!" : "Copy email"}
                onClick={() => copy("email", profile.email)}
              >
                {isCopied("email") ? (
                  <Check className="size-4" />
                ) : (
                  <Mail className="size-4" />
                )}
              </SocialIconButton>

              <SocialIconButton
                label={isCopied("phone") ? "Phone copied!" : "Copy phone"}
                onClick={() => copy("phone", profile.phone)}
              >
                {isCopied("phone") ? (
                  <Check className="size-4" />
                ) : (
                  <Phone className="size-4" />
                )}
              </SocialIconButton>

              <SocialIconButton label="GitHub" href={profile.github}>
                <GitHubIcon className="size-4" />
              </SocialIconButton>

              <SocialIconButton label="LinkedIn" href={profile.linkedin}>
                <LinkedInIcon className="size-4" />
              </SocialIconButton>

              <ThemeToggle />
            </div>

            <Button
              href="#contact"
              variant="secondary"
              size="sm"
              className="hidden md:inline-flex"
            >
              Let’s talk <ArrowUpRight className="size-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
