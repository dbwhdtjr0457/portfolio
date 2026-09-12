import { IntroSection } from "@/components/portfolio/intro-section";
import { WorkGallery } from "@/components/portfolio/work-gallery";
import { ExperienceSection } from "@/components/portfolio/experience-section";
import { BackgroundSection } from "@/components/portfolio/background-section";
import { ContactSection } from "@/components/portfolio/contact-section";
export function PortfolioPage() { return <main id="main-content" tabIndex={-1}><IntroSection /><ExperienceSection /><WorkGallery /><BackgroundSection /><ContactSection /></main>; }
