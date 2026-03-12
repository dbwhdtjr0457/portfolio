import { summaryItems } from "@/content";
import { SectionShell } from "@/components/portfolio/section-shell";

export function SummarySection() {
  return (
    <SectionShell
      id="summary"
      eyebrow="Summary"
      title="한눈에 보기"
      description="실무 경험, 프로젝트, 학력 및 수료 이력을 빠르게 파악할 수 있도록 핵심만 추렸습니다."
    >
      <div className="grid gap-6 border-t border-border/75 pt-6 md:grid-cols-3">
        {summaryItems.map((item) => (
          <article key={item.id} className="space-y-3 border-l border-border/60 pl-5">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="text-sm leading-7 text-muted-foreground">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
