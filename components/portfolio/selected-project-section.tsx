import { activityHighlights, featuredProject } from "@/content";
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

export function SelectedProjectSection() {
  const relatedActivities = getProjectActivities(featuredProject.id);

  return (
    <SectionShell
      id="projects"
      eyebrow="Selected Project"
      title={featuredProject.name}
      description="대표 프로젝트는 하나만 앞에 두고, 왜 먼저 읽을 만한지 짧게 설명하는 정도로 정리합니다."
    >
      <article className="space-y-8 rounded-[2rem] border border-border/80 bg-card p-6 sm:p-8">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_300px]">
          <div className="space-y-5">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                <span className="rounded-full bg-accent px-3 py-1 text-accent-foreground">
                  대표 프로젝트
                </span>
                <span>{featuredProject.projectType}</span>
              </div>
              <h3 className="text-2xl font-semibold text-foreground">
                {featuredProject.headline}
              </h3>
              <p className="text-base leading-7 text-muted-foreground">
                {featuredProject.summary}
              </p>
            </div>

            <ul className="space-y-2 text-sm leading-6 text-muted-foreground">
              {featuredProject.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground/70" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            <TagList items={featuredProject.techStack} />
            <LinkGroup links={featuredProject.links} />
          </div>

          <aside className="space-y-4 rounded-3xl border border-border/80 bg-background/80 p-5">
            <div className="space-y-2">
              <p className="text-sm font-semibold text-foreground">역할</p>
              <p className="text-sm leading-6 text-muted-foreground">
                {featuredProject.role}
              </p>
            </div>
            {featuredProject.featuredReason ? (
              <div className="space-y-2">
                <p className="text-sm font-semibold text-foreground">대표로 둔 이유</p>
                <p className="text-sm leading-6 text-muted-foreground">
                  {featuredProject.featuredReason}
                </p>
              </div>
            ) : null}
            {featuredProject.note ? (
              <p className="text-xs leading-5 text-muted-foreground">
                {featuredProject.note}
              </p>
            ) : null}
          </aside>
        </div>

        <ActivityHighlightsList items={relatedActivities} />
      </article>
    </SectionShell>
  );
}
