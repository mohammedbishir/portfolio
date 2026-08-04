"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { SocialIconButton } from "@/components/shared/social-icon-button";
import { useMounted } from "@/hooks/use-mounted";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();

  if (!mounted) {
    return (
      <SocialIconButton label="Theme" onClick={() => undefined}>
        <Sun className="size-4" />
      </SocialIconButton>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <SocialIconButton
      label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </SocialIconButton>
  );
}
