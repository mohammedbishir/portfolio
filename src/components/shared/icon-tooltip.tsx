import type { ReactNode } from "react";

export function IconTooltip({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <span className="group/tip relative inline-flex">
      {children}
      <span
        role="tooltip"
        className="pointer-events-none absolute left-1/2 top-full z-[60] mt-2 -translate-x-1/2 -translate-y-0.5 whitespace-nowrap rounded-md border border-border/80 bg-background px-2 py-1 text-[11px] font-medium text-foreground opacity-0 shadow-lg transition-all duration-150 group-hover/tip:translate-y-0 group-hover/tip:opacity-100"
      >
        {label}
        <span className="absolute -top-1 left-1/2 size-2 -translate-x-1/2 rotate-45 border-l border-t border-border/80 bg-background" />
      </span>
    </span>
  );
}
