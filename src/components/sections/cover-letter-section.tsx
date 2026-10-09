"use client";

import { motion } from "framer-motion";
import { Download, ExternalLink } from "lucide-react";
import { profile } from "@/data/portfolio";
import { staggerContainer, staggerItem } from "@/components/shared/scroll-reveal";
import { SectionShell } from "@/components/sections/section-shell";
import { Button } from "@/components/ui/button";

export function CoverLetterSection() {
  return (
    <SectionShell
      id="cover-letter"
      title="Cover Letter"
      subtitle="Ready-to-send letter for Full Stack Developer roles — customize the company name before applying."
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-wrap gap-2"
      >
        <motion.div variants={staggerItem}>
          <Button href={profile.coverLetterPdf} size="sm" download>
            Download letter <Download className="size-4" />
          </Button>
        </motion.div>
        <motion.div variants={staggerItem}>
          <Button href="/cover-letter" variant="secondary" size="sm">
            Full cover letter page <ExternalLink className="size-4" />
          </Button>
        </motion.div>
      </motion.div>
    </SectionShell>
  );
}
