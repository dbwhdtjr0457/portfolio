import { activityHighlights, experiences } from "@/content";
import { ActivityHighlightsList } from "@/components/portfolio/activity-highlights-list";
import { SectionShell } from "@/components/portfolio/section-shell";
import { TagList } from "@/components/portfolio/tag-list";

function getExperienceActivities(experienceId: string) {
  return activityHighlights.filter(
    (item) =>
      item.relatedEntryId === experienceId &&
      item.recommendedPlacement === "experience",
  );
}

export function ExperienceSection() {
  return (
    <SectionShell
      id="experience"
      eyebrow="Experience"
      title="카카오페이"
      description="실무 경험은 하나의 경력 단위로 정리하고, 내부 작업은 성격별로 나눠 보여줍니다."
    >
      <div className="space-y-8">
        {experiences.map((experience) => {
          const relatedActivities = getExperienceActivities(experience.id);

          return (
            <article
              key={experience.id}
              className="space-y-8 rounded-[2rem] border border-border/80 bg-card p-6 sm:p-8"
            >
              <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_280px]">
                <div className="space-y-5">
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                      <span className="rounded-full bg-secondary px-3 py-1 text-secondary-foreground">
                        {experience.headline}
                      </span>
                      <span>{experience.period}</span>
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground">
                      {experience.name}
                    </h3>
                    <p className="text-base leading-7 text-muted-foreground">
                      {experience.summary}
                    </p>
                  </div>

                  <ul className="space-y-2 text-sm leading-6 text-muted-foreground">
                    {experience.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground/70" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <TagList items={experience.techStack} />
                </div>

                <aside className="space-y-4 rounded-3xl border border-border/80 bg-background/80 p-5">
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-foreground">역할</p>
                    <p className="text-sm leading-6 text-muted-foreground">
                      {experience.role}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-foreground">협업</p>
                    <ul className="space-y-2 text-sm leading-6 text-muted-foreground">
                      {experience.collaboration.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  {experience.note ? (
                    <p className="text-xs leading-5 text-muted-foreground">
                      {experience.note}
                    </p>
                  ) : null}
                </aside>
              </div>

              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  주요 작업
                </p>
                <div className="grid gap-4">
                  {experience.subItems.map((item) => (
                    <div
                      key={item.id}
                      className="rounded-3xl border border-border/70 bg-background/70 p-5"
                    >
                      <div className="space-y-3">
                        <div>
                          <h4 className="text-lg font-semibold text-foreground">
                            {item.title}
                          </h4>
                          <p className="mt-1 text-sm leading-6 text-muted-foreground">
                            {item.summary}
                          </p>
                        </div>
                        <ul className="space-y-2 text-sm leading-6 text-muted-foreground">
                          {item.highlights.map((highlight) => (
                            <li key={highlight} className="flex gap-3">
                              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground/70" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                        {item.note ? (
                          <p className="text-xs leading-5 text-muted-foreground">
                            {item.note}
                          </p>
                        ) : null}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <ActivityHighlightsList items={relatedActivities} />
            </article>
          );
        })}
      </div>
    </SectionShell>
  );
}
