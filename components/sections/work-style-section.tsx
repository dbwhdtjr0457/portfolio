import { InfoCard } from "@/components/common/info-card";
import { SectionBlock } from "@/components/common/section-block";
import { workStyleContent } from "@/data";
import { Badge } from "@/components/ui/badge";

export function WorkStyleSection() {
  return (
    <SectionBlock
      id="collaboration"
      eyebrow="일하는 방식"
      title="판단 기준이 분명하고, 협업 과정에서도 그 기준을 유지한다"
      description="대안 비교, 영향도 분석, 문서화, 협업 정리는 모두 더 안전한 결과를 만들기 위한 방식이다."
    >
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <InfoCard className="space-y-5">
          <div className="space-y-3">
            <Badge variant="subtle">원칙</Badge>
            <h3 className="text-xl font-semibold tracking-[-0.03em] text-foreground">
              일하는 원칙
            </h3>
            <p className="text-sm leading-7 text-muted-foreground">
              작업 방식이 달라도 흔들리지 않는 기준.
            </p>
          </div>
          <ul className="space-y-3 text-sm leading-7 text-muted-foreground">
            {workStyleContent.workingPrinciples.map((principle) => (
              <li key={principle} className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-foreground/80" />
                <span>{principle}</span>
              </li>
            ))}
          </ul>
        </InfoCard>

        <InfoCard variant="muted" className="space-y-5">
          <div className="space-y-3">
            <Badge variant="subtle">패턴</Badge>
            <h3 className="text-xl font-semibold tracking-[-0.03em] text-foreground">
              반복되는 강점
            </h3>
            <p className="text-sm leading-7 text-muted-foreground">
              여러 프로젝트에서 반복해서 드러난 문제 해결 습관.
            </p>
          </div>
          <div className="space-y-3">
            {workStyleContent.strengthPatterns.map((pattern) => (
              <div
                key={pattern.title}
                className="rounded-2xl border border-border/70 bg-background/88 px-4 py-4"
              >
                <h4 className="text-sm font-semibold text-foreground">
                  {pattern.title}
                </h4>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  {pattern.description}
                </p>
              </div>
            ))}
          </div>
        </InfoCard>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {workStyleContent.collaborationEvidence.map((evidence) => (
          <InfoCard key={evidence.title} variant="muted">
            <div className="space-y-3">
              <Badge variant="subtle">{evidence.proofType}</Badge>
              <h3 className="text-lg font-semibold tracking-[-0.02em] text-foreground">
                {evidence.title}
              </h3>
              <p className="text-sm leading-7 text-muted-foreground">{evidence.summary}</p>
            </div>
          </InfoCard>
        ))}
      </div>
    </SectionBlock>
  );
}
