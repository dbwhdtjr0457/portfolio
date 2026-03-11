import { education } from "@/content";
import { SectionShell } from "@/components/portfolio/section-shell";

export function EducationSection() {
  return (
    <SectionShell
      id="education"
      eyebrow="Education"
      title="학력 및 기타 정보"
      description="학력과 자격, 어학 정보를 간결하게 정리했습니다."
    >
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <article className="rounded-[2rem] border border-border/70 bg-card p-6 sm:p-8">
          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-foreground">
                {education.school}
              </h3>
              <p className="text-base text-foreground">
                {education.major} {education.degree}
              </p>
              <p className="text-sm text-muted-foreground">학점 {education.score}</p>
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

        <article className="border-t border-border/75 pt-5">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">자격 및 어학</h3>
            <div className="space-y-4 text-sm leading-6 text-muted-foreground">
              <div className="space-y-2">
                <p className="font-medium text-foreground">자격</p>
                <ul className="space-y-2">
                  {education.certifications.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground/70" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <p className="font-medium text-foreground">어학</p>
                <ul className="space-y-2">
                  {education.language.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground/70" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </article>
      </div>
    </SectionShell>
  );
}
