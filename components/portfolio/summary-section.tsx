import { summaryItems } from "@/content";
import { SectionShell } from "@/components/portfolio/section-shell";

export function SummarySection() {
  return (
    <SectionShell
      id="summary"
      eyebrow="Summary"
      title="객관적 요약"
      description="경력, 프로젝트, 기술 범위를 빠르게 훑을 수 있도록 세 가지 축으로 정리합니다."
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
