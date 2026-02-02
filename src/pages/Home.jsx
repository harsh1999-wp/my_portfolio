import { Navbar } from "../components/Navbar.jsx";
import { StarBackground } from "../components/StarBackground.jsx";
import { ThemeToggle } from "../components/ThemeToggle.jsx";
import { HeroSection } from "../components/HeroSection.jsx";
import { AboutmeSection } from "../components/AboutmeSection.jsx";
import { SkillsSection } from "../components/SkillsSection.jsx";
import { ProjectSection } from "../components/ProjectSection.jsx";
import { ContactSection } from "../components/ContactSection.jsx";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-background overflow-x-hidden">
      <ThemeToggle />
      <StarBackground />
      <Navbar />

      <main>
        <HeroSection />
        <AboutmeSection />
        <SkillsSection />
        <ProjectSection />
        <ContactSection />
      </main>
    </div>
  );
};
