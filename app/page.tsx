import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { PortfolioPage } from "@/components/portfolio/portfolio-page";

export default function Page() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only left-6 top-6 z-50 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground focus:not-sr-only focus:fixed"
      >
        본문으로 건너뛰기
      </a>
      <SiteHeader />
      <PortfolioPage />
      <SiteFooter />
    </>
  );
}
