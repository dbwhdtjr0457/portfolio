import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { PortfolioPage } from "@/components/portfolio/portfolio-page";

export default function Page() {
  return (
    <>
      <SiteHeader />
      <PortfolioPage />
      <SiteFooter />
    </>
  );
}
