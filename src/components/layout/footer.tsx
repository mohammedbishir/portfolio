import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="mx-auto w-full max-w-6xl px-4 pb-10 pt-6 text-sm text-secondary sm:px-6">
      © {new Date().getFullYear()} {profile.name}. Built with Next.js and
      Tailwind CSS.
    </footer>
  );
}
