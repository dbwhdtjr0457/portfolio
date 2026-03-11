import { activityHighlights, otherProjects, projectPreviewMedia } from "@/content";
import { ActivityHighlightsList } from "@/components/portfolio/activity-highlights-list";
import { LinkGroup } from "@/components/portfolio/link-group";
import { MediaFrame } from "@/components/portfolio/media-frame";
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
      description="서로 다른 기술 맥락의 프로젝트를 같은 흐름 안에서 간결하게 소개합니다."
    >
      <div className="grid gap-6 xl:grid-cols-2">
        {otherProjects.map((project) => {
          const relatedActivities = getProjectActivities(project.id);
          const previewMedia = projectPreviewMedia[project.id] ?? [];

          return (
            <article
              key={project.id}
              className="flex h-full flex-col gap-6 rounded-[2rem] border border-border/75 bg-card p-6 transition-transform duration-200 hover:-translate-y-1 motion-reduce:transform-none motion-reduce:transition-none sm:p-7"
            >
              <div className="grid gap-6 md:grid-cols-[220px_minmax(0,1fr)] md:items-start">
                {previewMedia.length > 0 ? (
                  <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1">
                    {previewMedia.map((media) => (
                      <MediaFrame
                        key={`${project.id}-${media.caption}`}
                        image={media.src}
                        alt={media.alt}
                        caption={media.caption}
                      />
                    ))}
                  </div>
                ) : null}

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
                    <p className="max-w-[56ch] text-sm leading-7 text-muted-foreground">
                      {project.summary}
                    </p>
                  </div>

                  <ul className="max-w-[58ch] space-y-2 text-sm leading-7 text-muted-foreground">
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
              </div>

              <div className="mt-auto space-y-4">
                <ActivityHighlightsList items={relatedActivities} />
                {project.note ? (
                  <p className="text-xs leading-5 text-muted-foreground">
                    {project.note}
                  </p>
                ) : null}
              </div>
            </article>
          );
        })}
      </div>
    </SectionShell>
  );
}
