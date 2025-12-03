import { Navbar } from "../components/NavBar"
import { StarBackground } from "../components/StarBackground"
import { ThemeToggle } from "../components/ThemeToggle"
import { HeroSection } from "../components/HeroSection"
import { AboutmeSection } from "../components/AboutmeSection"
import { SkillsSection } from "../components/SkillsSection"
import { ProjectSection } from "../components/ProjectSection"
import { ContactSection } from "../components/ContactSection"

export const Home = () =>{
    return <div className="min-h-screen bg-background text-background overflow-x-hidden">
    <ThemeToggle/>
    <StarBackground/>
    <Navbar/>

    <main>
        <HeroSection/>
        <AboutmeSection/>
        <SkillsSection/>
        <ProjectSection/>
        <ContactSection/>
    </main>
    </div>
}