import { Reveal } from "@/components/ui/reveal";
import { summaryItems } from "@/content";
import { SectionShell } from "@/components/portfolio/section-shell";

export function SummarySection() {
  return (
    <SectionShell
      id="summary"
      eyebrow="Summary"
      title="한눈에 보기"
      description="실무·개인 프로젝트 범위"
    >
      <div className="grid gap-6 border-t border-border/75 pt-6 md:grid-cols-3">
        {summaryItems.map((item, index) => (
          <Reveal key={item.id} delay={index * .06}><article className="h-full space-y-6 rounded-3xl border border-border/60 bg-card p-7">
            <p className="text-xs font-medium tracking-widest text-muted-foreground">0{index + 1}</p>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="text-sm leading-7 text-muted-foreground">{item.description}</p>
            </div>
          </article></Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
