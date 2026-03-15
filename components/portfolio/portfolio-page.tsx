import { ActivitiesSection } from "@/components/portfolio/activities-section";
import { ContactSection } from "@/components/portfolio/contact-section";
import { EducationSection } from "@/components/portfolio/education-section";
import { ExperienceSection } from "@/components/portfolio/experience-section";
import { IntroSection } from "@/components/portfolio/intro-section";
import { OtherProjectsSection } from "@/components/portfolio/other-projects-section";
import { SelectedProjectSection } from "@/components/portfolio/selected-project-section";
import { SkillsSection } from "@/components/portfolio/skills-section";
import { SummarySection } from "@/components/portfolio/summary-section";
import { TimelineSection } from "@/components/portfolio/timeline-section";

export function PortfolioPage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <IntroSection />
      <SummarySection />
      <TimelineSection />
      <ExperienceSection />
      <SelectedProjectSection />
      <OtherProjectsSection />
      <SkillsSection />
      <ActivitiesSection />
      <EducationSection />
      <ContactSection />
    </main>
  );
}
