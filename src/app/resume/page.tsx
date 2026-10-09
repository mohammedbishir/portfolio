import { Suspense } from "react";
import type { Metadata } from "next";
import { ResumeDocument } from "@/components/resume/resume-document";
import { DocumentDownloadBar } from "@/components/shared/document-download-bar";
import { profile } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Resume — Mohammed Bishir K | Full Stack Developer",
  description:
    "Downloadable CV of Mohammed Bishir K — Full Stack Developer specializing in React, Next.js, Node.js, NestJS, and PostgreSQL.",
};

export default function ResumePage() {
  return (
    <div className="min-h-svh bg-[#e8e8ea] print:bg-white">
      <Suspense fallback={null}>
        <DocumentDownloadBar
          backHref="/#resume"
          backLabel="Back to portfolio"
          pdfHref={profile.resumePdf}
          pdfFileName="Mohammed_Bishir_Full_Stack_Developer.pdf"
        />
      </Suspense>
      <div className="mx-auto max-w-[860px] px-3 py-6 sm:px-4 sm:py-10 print:p-0">
        <div className="overflow-hidden rounded-sm shadow-[0_8px_30px_rgba(0,0,0,0.12)] print:shadow-none">
          <ResumeDocument />
        </div>
      </div>
    </div>
  );
}
