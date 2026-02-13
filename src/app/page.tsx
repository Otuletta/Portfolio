import { Hero } from "@/components/sections/hero";
import { BentoGrid } from "@/components/sections/bento-grid";
import { SkillsShowcase } from "@/components/sections/skills-showcase";
import { ProjectShowcase } from "@/components/sections/project-showcase";
import { Experience } from "@/components/sections/experience";
import { ContactCTA } from "@/components/sections/contact-cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Hero />
      <BentoGrid />
      <SkillsShowcase />
      <ProjectShowcase />
      <Experience />
      <ContactCTA />
      <Footer />
    </>
  );
}
