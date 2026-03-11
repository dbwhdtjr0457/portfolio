import Link from "next/link";

import { InfoCard } from "@/components/common/info-card";
import { SectionBlock } from "@/components/common/section-block";
import { TagList } from "@/components/common/tag-list";
import { featuredCases } from "@/data";
import { Badge } from "@/components/ui/badge";

function CaseList({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="space-y-3 rounded-2xl border border-border/60 bg-muted/18 p-4 sm:p-5">
      <h4 className="text-sm font-semibold text-foreground">{title}</h4>
      <ul className="space-y-2 text-sm leading-7 text-muted-foreground">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/70" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function FeaturedCasesSection() {
  return (
    <SectionBlock
      id="featured-cases"
      eyebrow="대표 사례"
      title="리스크를 줄이는 판단이 가장 잘 드러나는 사례"
      description="운영 중 서비스 변경, 복잡한 인터랙션 설계, 개발환경 전환까지 서로 다른 상황에서 어떤 판단을 내렸는지 한눈에 볼 수 있다."
      bodyClassName="space-y-8"
    >
      {featuredCases.map((project) => (
        <InfoCard key={project.slug} variant="featured" className="space-y-8 p-7 sm:p-8">
          <div className="space-y-5">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-4xl space-y-3">
                <div className="flex flex-wrap items-center gap-3">
                  <Badge variant="subtle">대표 사례</Badge>
                  <p className="text-sm font-medium text-muted-foreground">
                    {project.organization} · {project.role}
                  </p>
                </div>
                <h3 className="text-2xl font-semibold tracking-[-0.03em] text-foreground sm:text-[1.85rem]">
                  {project.title}
                </h3>
                <p className="text-base leading-8 text-muted-foreground">
                  {project.summary}
                </p>
              </div>
            </div>
            <div className="grid gap-4 border-y border-border/75 py-4 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  배경
                </p>
                <p className="max-w-[68ch] text-sm leading-7 text-muted-foreground">
                  {project.context}
                </p>
              </div>
              <div className="lg:justify-self-end">
                <TagList items={project.tech} />
              </div>
            </div>
          </div>

          <div className="grid gap-4 xl:grid-cols-2">
            <CaseList title="배경 / 문제" items={project.problem} />
            <CaseList title="목표" items={project.goal} />
            <CaseList title="핵심 리스크" items={project.risks} />
            <CaseList title="핵심 판단" items={project.decisions} />
            <CaseList title="내가 한 일" items={project.contributions} />
            <CaseList title="결과 / 효과" items={project.outcomes} />
          </div>

          <div className="grid gap-4 border-t border-border/75 pt-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(240px,0.8fr)]">
            <div className="space-y-3">
              <Badge variant="subtle">참고 사항</Badge>
              <ul className="space-y-2 text-sm leading-6 text-muted-foreground">
                {project.notes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <Badge variant="subtle">증빙 링크</Badge>
              {project.evidenceLinks.length > 0 ? (
                <div className="flex flex-col gap-2.5">
                  {project.evidenceLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-2xl border border-border/70 bg-muted/25 px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:border-foreground/25 hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <p className="text-sm leading-6 text-muted-foreground">
                  공개 가능한 외부 링크 없음
                </p>
              )}
            </div>
          </div>
        </InfoCard>
      ))}
    </SectionBlock>
  );
}
