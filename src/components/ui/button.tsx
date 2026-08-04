"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type CommonProps = {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
};

type ButtonBaseProps = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

type ButtonLinkProps = CommonProps &
  Omit<React.ComponentProps<typeof Link>, "className" | "children"> & {
    href: string;
  };

const variants: Record<NonNullable<CommonProps["variant"]>, string> = {
  primary:
    "bg-accent text-accent-foreground hover:bg-accent/90 shadow-sm shadow-black/10 dark:shadow-black/30",
  secondary:
    "bg-secondary text-primary hover:bg-secondary/80 border border-border/80",
  ghost: "text-secondary hover:bg-secondary/70 hover:text-primary",
};

const sizes: Record<NonNullable<CommonProps["size"]>, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-4 text-sm",
  lg: "h-12 px-5 text-base",
};

export function Button(props: ButtonBaseProps & { href?: never }): React.ReactNode;
export function Button(props: ButtonLinkProps): React.ReactNode;
export function Button(props: (ButtonBaseProps & { href?: never }) | ButtonLinkProps) {
  const { variant, size, className, children, rest } = (() => {
    const { variant, size, className, children, ...rest } = props;
    return { variant, size, className, children, rest };
  })();

  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
    variants[variant ?? "primary"],
    sizes[size ?? "md"],
    className,
  );

  if ("href" in props) {
    return (
      <Link {...(rest as Omit<ButtonLinkProps, keyof CommonProps>)} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      {...(rest as Omit<ButtonBaseProps, keyof CommonProps>)}
      className={classes}
    >
      {children}
    </button>
  );
}

