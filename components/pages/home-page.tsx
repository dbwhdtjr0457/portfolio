import { MotionReveal } from "@/components/common/motion-reveal";
import { SiteShell } from "@/components/layout/site-shell";
import { AboutSection } from "@/components/sections/about-section";
import { AdditionalProjectsSection } from "@/components/sections/additional-projects-section";
import { FeaturedCasesSection } from "@/components/sections/featured-cases-section";
import { HeaderNavigation } from "@/components/sections/header-navigation";
import { HeroSection } from "@/components/sections/hero-section";
import { HighlightsSection } from "@/components/sections/highlights-section";
import { LinksSection } from "@/components/sections/links-section";
import { SiteFooter } from "@/components/sections/site-footer";
import { WorkStyleSection } from "@/components/sections/work-style-section";

export function HomePage() {
  return (
    <SiteShell>
      <div className="flex flex-1 flex-col gap-12">
        <HeaderNavigation />
        <MotionReveal>
          <HeroSection />
        </MotionReveal>
        <MotionReveal delay={0.04}>
          <HighlightsSection />
        </MotionReveal>
        <MotionReveal delay={0.08}>
          <FeaturedCasesSection />
        </MotionReveal>
        <MotionReveal delay={0.12}>
          <AdditionalProjectsSection />
        </MotionReveal>
        <MotionReveal delay={0.16}>
          <WorkStyleSection />
        </MotionReveal>
        <MotionReveal delay={0.2}>
          <AboutSection />
        </MotionReveal>
        <MotionReveal delay={0.24}>
          <LinksSection />
        </MotionReveal>
        <MotionReveal delay={0.28}>
          <SiteFooter />
        </MotionReveal>
      </div>
    </SiteShell>
  );
}
