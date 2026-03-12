import { education } from "@/content";
import { SectionShell } from "@/components/portfolio/section-shell";

export function EducationSection() {
  return (
    <SectionShell
      id="education"
      eyebrow="Education & Credentials"
      title="학력과 공식 이력"
      description="학위, 교육 수료, 자격증, 어학 정보를 본문에서 읽기 쉬운 형태로 정리했습니다."
    >
      <div className="grid gap-5 xl:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
        <article className="rounded-[2rem] border border-border/70 bg-card p-6 sm:p-8">
          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-foreground">
                {education.school}
              </h3>
              <div className="space-y-1 text-sm leading-6 text-muted-foreground">
                <p className="text-base text-foreground">
                  {education.college} {education.major} {education.degree}
                </p>
                <p>{education.period}</p>
                <p>{education.track}</p>
                <p>
                  총 취득학점 {education.credits} / 평점 {education.score}
                </p>
              </div>
            </div>

            <div className="border-t border-border/75 pt-5">
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-foreground">관련 이수</h4>
                <p className="text-sm leading-6 text-muted-foreground">
                  {education.coursework.join(", ")}
                </p>
              </div>
            </div>
          </div>
        </article>

        <div className="grid gap-5">
          <article className="rounded-[2rem] border border-border/70 bg-card p-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">교육 및 수료</h3>
              <ul className="space-y-3 text-sm leading-6 text-muted-foreground">
                {education.trainings.map((item) => (
                  <li key={item.id} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground/70" />
                    <span>
                      <span className="font-medium text-foreground">{item.title}</span>
                      <span className="block">{item.detail}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          <article className="rounded-[2rem] border border-border/70 bg-card p-6">
            <div className="space-y-5 text-sm leading-6 text-muted-foreground">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-foreground">자격</h3>
                <ul className="space-y-3">
                  {education.certifications.map((item) => (
                    <li key={item.id} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground/70" />
                      <span>
                        <span className="font-medium text-foreground">{item.title}</span>
                        <span className="block">{item.detail}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-foreground">어학</h3>
                <ul className="space-y-2">
                  {education.language.map((item) => (
                    <li key={item.id} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground/70" />
                      <span>
                        <span className="font-medium text-foreground">{item.title}</span>
                        <span className="block">{item.detail}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        </div>
      </div>
    </SectionShell>
  );
}
