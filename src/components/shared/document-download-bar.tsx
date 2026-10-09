"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowLeft, Download, Printer } from "lucide-react";
import Link from "next/link";

type DocumentDownloadBarProps = {
  backHref: string;
  backLabel: string;
  pdfHref: string;
  pdfFileName: string;
};

export function DocumentDownloadBar({
  backHref,
  backLabel,
  pdfHref,
  pdfFileName,
}: DocumentDownloadBarProps) {
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get("download") !== "1") return;
    // Prefer direct PDF file download when available
    const link = document.createElement("a");
    link.href = pdfHref;
    link.download = pdfFileName;
    link.rel = "noopener";
    document.body.appendChild(link);
    link.click();
    link.remove();
  }, [searchParams, pdfHref, pdfFileName]);

  return (
    <div className="sticky top-0 z-20 border-b border-black/10 bg-white/95 backdrop-blur print:hidden">
      <div className="mx-auto flex max-w-[860px] flex-wrap items-center justify-between gap-3 px-4 py-3">
        <Link
          href={backHref}
          className="inline-flex items-center gap-2 text-sm text-[#4b5563] hover:text-[#111827]"
        >
          <ArrowLeft className="size-4" />
          {backLabel}
        </Link>
        <div className="flex flex-wrap gap-2">
          <a
            href={pdfHref}
            download={pdfFileName}
            className="inline-flex h-9 items-center gap-2 rounded-full bg-[#1e3a5f] px-4 text-sm font-medium text-white hover:bg-[#162d4a]"
          >
            <Download className="size-4" />
            Download PDF
          </a>
          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex h-9 items-center gap-2 rounded-full border border-[#d1d5db] bg-white px-4 text-sm font-medium text-[#111827] hover:bg-[#f3f4f6]"
          >
            <Printer className="size-4" />
            Print
          </button>
        </div>
      </div>
    </div>
  );
}
