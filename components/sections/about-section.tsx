import { InfoCard } from "@/components/common/info-card";
import { SectionBlock } from "@/components/common/section-block";
import { TagList } from "@/components/common/tag-list";
import { formalSpecsContent } from "@/data";
import { Badge } from "@/components/ui/badge";

export function AboutSection() {
  const { education, certifications, languages, coreTechGroups } =
    formalSpecsContent;

  return (
    <SectionBlock
      id="about"
      eyebrow="기본 정보"
      title="기본 이력과 기술 기반"
      description="프로젝트 경험을 뒷받침하는 학력, 자격, 어학, 기술 키워드를 한눈에 확인할 수 있다."
    >
      <div className="grid gap-4 xl:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <InfoCard className="space-y-5">
          <div className="space-y-3">
            <Badge variant="subtle">학력</Badge>
            <h3 className="text-xl font-semibold tracking-[-0.03em] text-foreground">
              학력
            </h3>
            <p className="text-sm leading-7 text-muted-foreground">
              {education.school} · {education.major} · {education.degree}
            </p>
            <p className="text-sm leading-7 text-muted-foreground">
              학점 {education.score}
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-semibold text-foreground">
              관련 이수 과목
            </p>
            <TagList items={education.relatedCoursework} />
          </div>
        </InfoCard>

        <div className="grid gap-4">
          <InfoCard variant="muted" className="space-y-4">
            <Badge variant="subtle">자격</Badge>
            <h3 className="text-xl font-semibold tracking-[-0.03em] text-foreground">
              자격
            </h3>
            <ul className="space-y-2 text-sm leading-7 text-muted-foreground">
              {certifications.map((certification) => (
                <li key={certification.title}>
                  {certification.title} · {certification.detail}
                </li>
              ))}
            </ul>
          </InfoCard>

          <InfoCard variant="muted" className="space-y-4">
            <Badge variant="subtle">어학</Badge>
            <h3 className="text-xl font-semibold tracking-[-0.03em] text-foreground">
              어학
            </h3>
            <ul className="space-y-2 text-sm leading-7 text-muted-foreground">
              {languages.map((language) => (
                <li key={`${language.title}-${language.detail}`}>
                  {language.title} · {language.detail}
                </li>
              ))}
            </ul>
          </InfoCard>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {coreTechGroups.map((group) => (
          <InfoCard key={group.title} variant="muted" className="space-y-4">
            <Badge variant="subtle">{group.title}</Badge>
            <h3 className="text-lg font-semibold tracking-[-0.02em] text-foreground">
              {group.title}
            </h3>
            <TagList items={group.items} />
          </InfoCard>
        ))}
      </div>
    </SectionBlock>
  );
}
