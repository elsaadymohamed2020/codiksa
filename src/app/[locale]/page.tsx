import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { TechnologiesSection } from "@/components/sections/TechnologiesSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TechnologiesSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <TeamSection />
      <ContactSection />
    </>
  );
}
