import Link from "next/link";

import { heroContent, workStyleContent } from "@/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section id="hero" className="scroll-mt-24">
      <div className="grid gap-5 rounded-[2rem] border border-border bg-card px-6 py-7 shadow-[0_8px_30px_rgba(15,23,42,0.035)] sm:px-8 sm:py-9 lg:grid-cols-[minmax(0,1.45fr)_minmax(300px,0.85fr)] lg:gap-8">
        <div className="space-y-7">
          <div className="space-y-5">
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="accent">{heroContent.eyebrow}</Badge>
              <p className="text-sm font-medium text-muted-foreground">
                {heroContent.name} ({heroContent.nickname}) · {heroContent.role}
              </p>
            </div>
            <div className="space-y-4">
              <h1 className="max-w-[11ch] text-[2rem] font-semibold tracking-[-0.04em] text-foreground sm:max-w-[12ch] sm:text-[2.6rem] sm:leading-[1.12] lg:max-w-[13ch] lg:text-[3.1rem]">
                {heroContent.positioning}
              </h1>
              <p className="max-w-[62ch] text-base leading-8 text-muted-foreground">
                정책·연동·배포 리스크를 먼저 읽고, 영향도 분석과 UX
                안전장치로 변경을 안정적으로 완수하는 판단과 설계에 강점이
                있다.
              </p>
            </div>
          </div>

          <ul className="grid gap-3 text-sm leading-7 text-muted-foreground sm:text-base">
            {heroContent.supportingPoints.map((point) => (
              <li
                key={point}
                className="flex gap-3 rounded-2xl border border-border/70 bg-muted/35 px-4 py-3"
              >
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-foreground/80" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3">
            <Button
              nativeButton={false}
              className="h-10 px-4 text-sm"
              render={<Link href="#featured-cases" />}
            >
              대표 사례 보기
            </Button>
            <Button
              nativeButton={false}
              variant="outline"
              className="h-10 px-4 text-sm"
              render={<Link href="#proof-links" />}
            >
              연락 / 링크
            </Button>
          </div>
        </div>

        <aside className="rounded-[1.75rem] border border-border/80 bg-muted/38 p-5 sm:p-6 lg:sticky lg:top-24 lg:self-start">
          <div className="space-y-5">
            <div className="space-y-3">
              <Badge variant="subtle">핵심 요약</Badge>
              <p className="text-sm leading-7 text-foreground">
                {workStyleContent.primaryPositioning}
              </p>
            </div>
            <div className="space-y-3">
              {workStyleContent.secondaryPositionings.map((positioning) => (
                <div
                  key={positioning}
                  className="rounded-2xl border border-border/70 bg-background/90 px-4 py-3.5 text-sm leading-6 text-muted-foreground"
                >
                  {positioning}
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
