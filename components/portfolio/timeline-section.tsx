import { timelineItems } from "@/content";
import { SectionShell } from "@/components/portfolio/section-shell";

export function TimelineSection() {
  return (
    <SectionShell
      id="timeline"
      eyebrow="Timeline"
      title="연혁"
      description="학위, 교육 과정, 경력, 자격 취득 흐름을 짧게 정리했습니다."
    >
      <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
        {timelineItems.map((item) => (
          <article
            key={item.id}
            className="rounded-[1.75rem] border border-border/70 bg-card p-6"
          >
            <div className="space-y-3">
              <p className="text-sm font-medium text-muted-foreground">{item.period}</p>
              <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
              {item.detail ? (
                <p className="text-sm leading-6 text-muted-foreground">{item.detail}</p>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
