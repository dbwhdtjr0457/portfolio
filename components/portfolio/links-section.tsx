import { contactItems, footerLinks } from "@/content";
import { LinkGroup } from "@/components/portfolio/link-group";
import { SectionShell } from "@/components/portfolio/section-shell";

export function LinksSection() {
  return (
    <SectionShell
      id="links"
      eyebrow="Links"
      title="외부 링크"
      description="현재 확정된 프로젝트 저장소 링크를 먼저 두고, 공개 범위가 미정인 항목은 확인 필요 상태로 남깁니다."
    >
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_320px]">
        <article className="space-y-5 rounded-[2rem] border border-border/80 bg-card p-6">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-foreground">프로젝트 저장소</h3>
            <p className="text-sm leading-6 text-muted-foreground">
              `spec.md`에 명시된 GitHub 저장소 링크만 우선 노출합니다.
            </p>
          </div>
          <LinkGroup links={footerLinks} />
        </article>

        <article className="rounded-[2rem] border border-border/80 bg-card p-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">추가 확인 필요</h3>
            <ul className="space-y-3">
              {contactItems.map((item) => (
                <li key={item.id} className="space-y-1">
                  <p className="text-sm font-medium text-foreground">{item.label}</p>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {item.note}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </div>
    </SectionShell>
  );
}
