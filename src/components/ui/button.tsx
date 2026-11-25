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
    download?: boolean | string;
  };

const variants: Record<NonNullable<CommonProps["variant"]>, string> = {
  primary: "bg-accent text-accent-foreground hover:opacity-90",
  secondary:
    "bg-transparent text-primary border border-border hover:bg-secondary",
  ghost: "text-secondary hover:text-primary hover:bg-secondary",
};

const sizes: Record<NonNullable<CommonProps["size"]>, string> = {
  sm: "h-9 px-3.5 text-sm",
  md: "h-11 px-4 text-sm",
  lg: "h-12 px-5 text-base",
};

export function Button(props: ButtonBaseProps & { href?: never }): React.ReactNode;
export function Button(props: ButtonLinkProps): React.ReactNode;
export function Button(
  props: (ButtonBaseProps & { href?: never }) | ButtonLinkProps,
) {
  const { variant, size, className, children, rest } = (() => {
    const { variant, size, className, children, ...rest } = props;
    return { variant, size, className, children, rest };
  })();

  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-md font-medium tracking-tight transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
    variants[variant ?? "primary"],
    sizes[size ?? "md"],
    className,
  );

  if ("href" in props) {
    const linkProps = rest as Omit<ButtonLinkProps, keyof CommonProps>;
    if (linkProps.download !== undefined) {
      const { download, href, ...anchorRest } = linkProps;
      return (
        <a
          href={href}
          download={download === true ? true : download}
          className={classes}
          {...(anchorRest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </a>
      );
    }

    return (
      <Link {...linkProps} className={classes}>
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
