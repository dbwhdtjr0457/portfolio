import { SectionBlock } from "@/components/common/section-block";
import { InfoCard } from "@/components/common/info-card";
import { keyHighlights } from "@/data";
import { Badge } from "@/components/ui/badge";

export function HighlightsSection() {
  return (
    <SectionBlock
      id="positioning"
      eyebrow="핵심 강점"
      title="운영 중인 서비스를 더 안전하게 바꾸는 방식"
      description="프로젝트가 달라도 판단 기준은 일관된다. 리스크를 먼저 읽고, 대안을 비교하고, 흐름을 안정적으로 설계한다."
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {keyHighlights.map((highlight, index) => (
          <InfoCard key={highlight.title} variant="muted" className="space-y-4">
            <div className="space-y-3">
              <Badge variant="subtle">0{index + 1}</Badge>
              <h3 className="text-lg font-semibold tracking-tight text-foreground">
                {highlight.title}
              </h3>
              <p className="text-sm leading-7 text-muted-foreground">
                {highlight.description}
              </p>
            </div>
          </InfoCard>
        ))}
      </div>
    </SectionBlock>
  );
}
