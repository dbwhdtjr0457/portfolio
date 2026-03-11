import { activityHighlights, otherProjects } from "@/content";
import { ActivityHighlightsList } from "@/components/portfolio/activity-highlights-list";
import { LinkGroup } from "@/components/portfolio/link-group";
import { SectionShell } from "@/components/portfolio/section-shell";
import { TagList } from "@/components/portfolio/tag-list";

function getProjectActivities(projectId: string) {
  return activityHighlights.filter(
    (item) =>
      item.relatedEntryId === projectId && item.recommendedPlacement === "project",
  );
}

export function OtherProjectsSection() {
  return (
    <SectionShell
      id="other-projects"
      eyebrow="Other Projects"
      title="다른 프로젝트"
      description="보조 프로젝트는 같은 서술 프레임을 유지하되 더 간결한 밀도로 정리합니다."
    >
      <div className="grid gap-5 lg:grid-cols-2">
        {otherProjects.map((project) => {
          const relatedActivities = getProjectActivities(project.id);

          return (
            <article
              key={project.id}
              className="space-y-6 rounded-[2rem] border border-border/80 bg-card p-6"
            >
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                    <span className="rounded-full bg-secondary px-3 py-1 text-secondary-foreground">
                      {project.projectType}
                    </span>
                    <span>{project.role}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {project.name}
                  </h3>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {project.summary}
                  </p>
                </div>

                <ul className="space-y-2 text-sm leading-6 text-muted-foreground">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground/70" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <TagList items={project.techStack} />
                <LinkGroup links={project.links} compact />
              </div>

              <ActivityHighlightsList items={relatedActivities} />

              {project.note ? (
                <p className="text-xs leading-5 text-muted-foreground">{project.note}</p>
              ) : null}
            </article>
          );
        })}
      </div>
    </SectionShell>
  );
}
