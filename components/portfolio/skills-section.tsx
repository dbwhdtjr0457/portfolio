import { skills } from "@/content";
import { SectionShell } from "@/components/portfolio/section-shell";

export function SkillsSection() {
  return (
    <SectionShell
      id="skills"
      eyebrow="Skills"
      title="기술"
      description="기술은 점수화하지 않고, 경험을 읽고 난 뒤 범위가 보이도록 카테고리 단위로 정리합니다."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {skills.map((group) => (
          <article key={group.id} className="border-t border-border/75 pt-5">
            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-foreground">
                  {group.category}
                </h3>
                <p className="text-sm leading-6 text-muted-foreground">
                  {group.description}
                </p>
              </div>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border/70 bg-background px-3 py-1 text-sm text-secondary-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
