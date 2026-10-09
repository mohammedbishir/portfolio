import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/hero/hero";
import {
  AboutSection,
  ContactSection,
  CoverLetterSection,
  ExperienceSection,
  ProjectsSection,
  ResumeSection,
  SkillsSection,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ResumeSection />
      <CoverLetterSection />
      <ContactSection />
      <Footer />
    </>
  );
}
