import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="mx-auto w-full max-w-6xl px-4 pb-10 pt-2 sm:px-6">
      <div className="flex flex-col gap-2 border-t border-border/60 pt-6 font-mono text-[11px] tracking-wide text-secondary sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="text-signal/80">
          FULL_STACK // NEXT.JS · NESTJS · POSTGRES
        </p>
      </div>
    </footer>
  );
}
