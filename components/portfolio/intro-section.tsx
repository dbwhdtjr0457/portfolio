import { Button } from "@/components/ui/button";
import { introContent, introLinks } from "@/content";
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
      className="scroll-mt-24 border-b border-border/70 py-20 sm:py-24"
    >
      <div className="container">
        <div className="max-w-4xl space-y-8">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              Frontend Portfolio
            </p>
            <div className="space-y-3">
              <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                {introContent.name}
              </h1>
              <p className="text-xl font-medium text-foreground sm:text-2xl">
                {introContent.role}
              </p>
            </div>
            <p className="max-w-3xl text-lg leading-8 text-foreground/88">
              {introContent.headline}
            </p>
            <div className="max-w-3xl space-y-2 text-base leading-7 text-muted-foreground">
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
      </div>
    </section>
  );
}
