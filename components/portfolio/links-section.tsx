import Link from "next/link";

import { contactItems, footerLinks } from "@/content";
import { LinkGroup } from "@/components/portfolio/link-group";
import { SectionShell } from "@/components/portfolio/section-shell";

export function LinksSection() {
  return (
    <SectionShell
      id="links"
      eyebrow="Links"
      title="외부 링크"
      description="프로젝트와 관련된 저장소와 추가 자료를 한곳에 모았습니다."
    >
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
        <article className="space-y-5 border-t border-border/75 pt-5">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-foreground">프로젝트 저장소</h3>
            <p className="text-sm leading-6 text-muted-foreground">
              프로젝트별 저장소에서 구현 내용을 직접 확인할 수 있습니다.
            </p>
          </div>
          <LinkGroup links={footerLinks} />
        </article>

        <article className="rounded-[1.75rem] border border-border/70 bg-secondary/28 p-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">추가 자료</h3>
            <ul className="space-y-3">
              {contactItems.map((item) => (
                <li key={item.id} className="space-y-1">
                  <p className="text-sm font-medium text-foreground">{item.label}</p>
                  {item.href && item.value ? (
                    <Link
                      href={item.href}
                      target={!item.href.startsWith("mailto:") ? "_blank" : undefined}
                      rel={!item.href.startsWith("mailto:") ? "noreferrer" : undefined}
                      className="text-sm leading-6 text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-muted-foreground"
                    >
                      {item.value}
                    </Link>
                  ) : null}
                  <p className="text-sm leading-6 text-muted-foreground">{item.note}</p>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </div>
    </SectionShell>
  );
}
