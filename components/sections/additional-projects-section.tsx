import Link from "next/link";

import { InfoCard } from "@/components/common/info-card";
import { SectionBlock } from "@/components/common/section-block";
import { TagList } from "@/components/common/tag-list";
import { additionalProjects } from "@/data";
import { Badge } from "@/components/ui/badge";

export function AdditionalProjectsSection() {
  return (
    <SectionBlock
      id="additional-projects"
      eyebrow="추가 프로젝트"
      title="대표 사례 밖에서도 이어지는 문제 해결 경험"
      description="실시간 상호작용, 모바일 센서, 운영성 UI 개선처럼 서로 다른 환경에서도 공통된 문제 해결 방식이 이어진다."
    >
      <div className="grid gap-4 xl:grid-cols-2">
        {additionalProjects.map((project) => (
          <InfoCard key={project.slug} variant="muted" className="space-y-5">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="subtle">프로젝트</Badge>
                <p className="text-sm font-medium text-muted-foreground">
                  {project.organization} · {project.role}
                </p>
              </div>
              <h3 className="text-xl font-semibold tracking-[-0.03em] text-foreground">
                {project.title}
              </h3>
              <p className="max-w-[62ch] text-sm leading-7 text-muted-foreground">
                {project.summary}
              </p>
            </div>

            <div className="space-y-2 border-t border-border/70 pt-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                배경
              </p>
              <p className="max-w-[62ch] text-sm leading-7 text-muted-foreground">
                {project.context}
              </p>
            </div>

            <TagList items={project.tech} />

            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                핵심 포인트
              </p>
              <ul className="space-y-2 text-sm leading-7 text-muted-foreground">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/70" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {project.evidenceLinks.length > 0 ? (
              <div className="flex flex-wrap gap-2.5 border-t border-border/70 pt-4">
                {project.evidenceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-border/80 bg-background px-3 py-1.5 text-xs font-semibold text-muted-foreground transition-colors hover:border-foreground/25 hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ) : null}

            {project.notes.length > 0 ? (
              <div className="rounded-2xl border border-border/70 bg-background/80 px-4 py-3">
                <ul className="space-y-2 text-sm leading-6 text-muted-foreground">
                  {project.notes.map((note) => (
                    <li key={note}>{note}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </InfoCard>
        ))}
      </div>
    </SectionBlock>
  );
}
