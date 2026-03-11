import { MediaFrame } from "@/components/portfolio/media-frame";
import { Button } from "@/components/ui/button";
import { introContent, introLinks, introPreviewMedia } from "@/content";
import type { ExternalLink } from "@/content";

function resolveIntroLinks(ids: string[], links: ExternalLink[]) {
  return ids.reduce<ExternalLink[]>((accumulator, id) => {
    const matchedLink = links.find((link) => link.id === id);

    if (matchedLink) {
      accumulator.push(matchedLink);
    }

    return accumulator;
  }, []);
}

export function IntroSection() {
  const links = resolveIntroLinks(introContent.primaryLinkIds, introLinks);

  return (
    <section
      id="intro"
      className="scroll-mt-24 border-b border-border/65 py-20 sm:py-28"
    >
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end">
          <div className="max-w-4xl space-y-9">
            <div className="space-y-5">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                Frontend Portfolio
              </p>
              <div className="space-y-3">
                <h1 className="text-5xl font-semibold tracking-tight text-foreground sm:text-6xl">
                  {introContent.name}
                </h1>
                <p className="text-xl font-medium text-foreground sm:text-[1.75rem]">
                  {introContent.role}
                </p>
              </div>
              <p className="max-w-3xl text-2xl leading-10 text-foreground/92 sm:text-[2rem]">
                {introContent.headline}
              </p>
              <div className="max-w-3xl space-y-3 text-base leading-8 text-muted-foreground sm:text-lg">
                {introContent.description.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {introContent.ctas.map((cta) => (
                <Button
                  key={cta.id}
                  asChild
                  variant={cta.variant === "primary" ? "default" : "outline"}
                  size="lg"
                >
                  <a href={cta.href}>{cta.label}</a>
                </Button>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              {links.map((link) => (
                <Button key={link.id} asChild variant="ghost">
                  <a href={link.href} target="_blank" rel="noreferrer">
                    {link.label}
                  </a>
                </Button>
              ))}
            </div>
          </div>

          <aside className="space-y-4 lg:pb-2">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                Selected Preview
              </p>
              <p className="text-sm leading-6 text-muted-foreground">
                수집한 자료 중 대표 프로젝트 화면을 한 장만 먼저 보여줍니다.
              </p>
            </div>
            <MediaFrame
              image={introPreviewMedia.src}
              alt={introPreviewMedia.alt}
              caption={introPreviewMedia.caption}
              priority
            />
          </aside>
        </div>
      </div>
    </section>
  );
}
