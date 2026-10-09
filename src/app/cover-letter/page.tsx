import { Suspense } from "react";
import type { Metadata } from "next";
import { CoverLetterDocument } from "@/components/cover-letter/cover-letter-document";
import { DocumentDownloadBar } from "@/components/shared/document-download-bar";
import { profile } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Cover Letter — Mohammed Bishir K | Full Stack Developer",
  description:
    "Downloadable cover letter for Mohammed Bishir K — Full Stack Developer.",
};

export default function CoverLetterPage() {
  return (
    <div className="min-h-svh bg-[#e8e8ea] print:bg-white">
      <Suspense fallback={null}>
        <DocumentDownloadBar
          backHref="/#cover-letter"
          backLabel="Back to portfolio"
          pdfHref={profile.coverLetterPdf}
          pdfFileName="Mohammed_Bishir_Cover_Letter.pdf"
        />
      </Suspense>
      <div className="mx-auto max-w-[860px] px-3 py-6 sm:px-4 sm:py-10 print:p-0">
        <div className="overflow-hidden rounded-sm shadow-[0_8px_30px_rgba(0,0,0,0.12)] print:shadow-none">
          <CoverLetterDocument />
        </div>
      </div>
    </div>
  );
}
