import { ArrowRight } from "lucide-react";

import { siteShellContent } from "@/content/site-shell";

export function HomePlaceholder() {
  return (
    <main className="min-h-screen">
      <section className="container flex min-h-screen items-center py-16">
        <div className="max-w-3xl space-y-8">
          <div className="space-y-4">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              {siteShellContent.eyebrow}
            </p>
            <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              {siteShellContent.title}
            </h1>
            <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              {siteShellContent.description}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {siteShellContent.nextSteps.map((step) => (
              <div
                key={step}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm text-card-foreground"
              >
                {step}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <ArrowRight className="h-4 w-4" />
            <span>{siteShellContent.note}</span>
          </div>
        </div>
      </section>
    </main>
  );
}
