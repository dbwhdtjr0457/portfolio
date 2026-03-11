import { EducationSection } from "@/components/portfolio/education-section";
import { ExperienceSection } from "@/components/portfolio/experience-section";
import { IntroSection } from "@/components/portfolio/intro-section";
import { LinksSection } from "@/components/portfolio/links-section";
import { OtherProjectsSection } from "@/components/portfolio/other-projects-section";
import { SelectedProjectSection } from "@/components/portfolio/selected-project-section";
import { SkillsSection } from "@/components/portfolio/skills-section";
import { SummarySection } from "@/components/portfolio/summary-section";

export function PortfolioPage() {
  return (
    <main>
      <IntroSection />
      <SummarySection />
      <ExperienceSection />
      <SelectedProjectSection />
      <OtherProjectsSection />
      <SkillsSection />
      <EducationSection />
      <LinksSection />
    </main>
  );
}
