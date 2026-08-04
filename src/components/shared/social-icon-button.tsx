"use client";

import type { ReactNode } from "react";
import { IconTooltip } from "@/components/shared/icon-tooltip";
import { cn } from "@/lib/utils";

const iconButtonClass =
  "inline-flex size-9 items-center justify-center rounded-full border border-border/70 bg-background/40 text-muted-foreground transition-colors hover:border-border hover:bg-muted/70 hover:text-foreground";

export function SocialIconButton({
  label,
  href,
  onClick,
  children,
  className,
}: {
  label: string;
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
}) {
  const classes = cn(iconButtonClass, className);

  if (href) {
    return (
      <IconTooltip label={label}>
        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noreferrer" : undefined}
          aria-label={label}
          className={classes}
        >
          {children}
        </a>
      </IconTooltip>
    );
  }

  return (
    <IconTooltip label={label}>
      <button
        type="button"
        onClick={onClick}
        aria-label={label}
        className={classes}
      >
        {children}
      </button>
    </IconTooltip>
  );
}
