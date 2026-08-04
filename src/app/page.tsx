import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/hero/hero";
import {
  AboutSection,
  ContactSection,
  ExperienceSection,
  ProjectsSection,
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
      <ContactSection />
      <Footer />
    </>
  );
}
