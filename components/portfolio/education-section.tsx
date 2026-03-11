import { education } from "@/content";
import { SectionShell } from "@/components/portfolio/section-shell";

export function EducationSection() {
  return (
    <SectionShell
      id="education"
      eyebrow="Education"
      title="학력 및 기타 정보"
      description="학력, 자격, 어학은 사실 중심으로 짧게 정리합니다."
    >
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <article className="rounded-[2rem] border border-border/80 bg-card p-6 sm:p-8">
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-foreground">
              {education.school}
            </h3>
            <p className="text-base text-foreground">
              {education.major} {education.degree}
            </p>
            <p className="text-sm text-muted-foreground">학점 {education.score}</p>
          </div>
        </article>

        <div className="grid gap-5">
          <article className="rounded-3xl border border-border/80 bg-card p-6">
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">관련 이수</h3>
              <p className="text-sm leading-6 text-muted-foreground">
                {education.coursework.join(", ")}
              </p>
            </div>
          </article>

          <article className="rounded-3xl border border-border/80 bg-card p-6">
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">자격 및 어학</h3>
              <div className="space-y-2 text-sm leading-6 text-muted-foreground">
                <p>{education.certifications.join(", ")}</p>
                <p>{education.language.join(", ")}</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </SectionShell>
  );
}
