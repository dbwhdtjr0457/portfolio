import { activities } from "@/content";
import { SectionShell } from "@/components/portfolio/section-shell";

export function ActivitiesSection() {
  return (
    <SectionShell
      id="activities"
      eyebrow="Activities"
      title="협업과 기록"
      description="프로젝트와 실무 경험을 뒷받침한 협업 방식과 기록 습관을 따로 묶어 정리했습니다."
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {activities.map((item) => (
          <article
            key={item.id}
            className="rounded-[1.75rem] border border-border/70 bg-card p-6"
          >
            <div className="space-y-3">
              <p className="text-sm font-medium text-muted-foreground">{item.source}</p>
              <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="text-sm leading-7 text-muted-foreground">
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
