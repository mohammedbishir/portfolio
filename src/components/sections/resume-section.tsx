"use client";

import { motion } from "framer-motion";
import { Download, ExternalLink } from "lucide-react";
import { profile } from "@/data/portfolio";
import { staggerContainer, staggerItem } from "@/components/shared/scroll-reveal";
import { SectionShell } from "@/components/sections/section-shell";
import { Button } from "@/components/ui/button";

export function ResumeSection() {
  return (
    <SectionShell
      id="resume"
      title="Resume / CV"
      subtitle="Full Stack Developer CV — open the document and download as PDF."
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-wrap gap-2"
      >
        <motion.div variants={staggerItem}>
          <Button href={profile.resumePdf} size="sm" download>
            Download CV <Download className="size-4" />
          </Button>
        </motion.div>
        <motion.div variants={staggerItem}>
          <Button href="/resume" variant="secondary" size="sm">
            Full resume page <ExternalLink className="size-4" />
          </Button>
        </motion.div>
      </motion.div>
    </SectionShell>
  );
}
