import {
  activityHighlights,
  featuredProject,
  featuredProjectMedia,
} from "@/content";
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

export function SelectedProjectSection() {
  const relatedActivities = getProjectActivities(featuredProject.id);
  const primaryMedia = featuredProjectMedia[0];
  const secondaryMedia = featuredProjectMedia[1];
  const tertiaryMedia = featuredProjectMedia[2];

  if (!primaryMedia || !secondaryMedia || !tertiaryMedia) {
    return null;
  }

  return (
    <SectionShell
      id="projects"
      eyebrow="Selected Project"
      title={featuredProject.name}
      description="대표 프로젝트는 하나만 앞에 두고, 왜 먼저 읽을 만한지 짧게 설명하는 정도로 정리합니다."
    >
      <article className="space-y-10 rounded-[2.25rem] border border-border/75 bg-card p-7 sm:p-10">
        <div className="grid gap-5 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.9fr)]">
          <MediaFrame
            image={primaryMedia.src}
            alt={primaryMedia.alt}
            caption={primaryMedia.caption}
            className="lg:row-span-2"
            priority
          />
          <MediaFrame
            image={secondaryMedia.src}
            alt={secondaryMedia.alt}
            caption={secondaryMedia.caption}
          />
          <MediaFrame
            image={tertiaryMedia.src}
            alt={tertiaryMedia.alt}
            caption={tertiaryMedia.caption}
          />
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="space-y-5">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                <span className="rounded-full bg-accent px-3 py-1 text-accent-foreground">
                  대표 프로젝트
                </span>
                <span>{featuredProject.projectType}</span>
              </div>
              <h3 className="text-3xl font-semibold text-foreground">
                {featuredProject.headline}
              </h3>
              <p className="text-base leading-8 text-muted-foreground">
                {featuredProject.summary}
              </p>
            </div>

            <ul className="space-y-3 text-sm leading-7 text-muted-foreground">
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

          <aside className="space-y-5 rounded-[1.75rem] border border-border/70 bg-secondary/40 p-6">
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
