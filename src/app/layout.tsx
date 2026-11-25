import type { Metadata } from "next";
import { IBM_Plex_Mono, Manrope, Newsreader } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-display",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-mono-body",
  weight: ["400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mohammed Bishir K | Full Stack Developer",
  description:
    "Portfolio of Mohammed Bishir K — Full Stack Developer specializing in React, Next.js, Node.js, NestJS, and PostgreSQL.",
  metadataBase: new URL("https://bishir.me"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${manrope.variable} ${newsreader.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full bg-primary text-primary antialiased"
      >
        <Providers>
          <main className="min-h-full w-full">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
