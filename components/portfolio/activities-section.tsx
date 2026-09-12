import { activities } from "@/content";
import { SectionShell } from "@/components/portfolio/section-shell";

export function ActivitiesSection() {
  return (
    <SectionShell
      id="activities"
      eyebrow="Activities"
      title="협업과 기록"
      description="요구사항 조율 · 판단 기록"
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
