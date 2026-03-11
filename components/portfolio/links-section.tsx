import Link from "next/link";

import { contactItems } from "@/content";
import { SectionShell } from "@/components/portfolio/section-shell";

export function LinksSection() {
  return (
    <SectionShell
      id="links"
      eyebrow="Links"
      title="연락 및 자료"
      description="프로젝트 저장소는 Intro와 각 프로젝트 섹션에서 확인할 수 있고, 이곳에는 연락처와 추가 자료를 모았습니다."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {contactItems.map((item) => (
          <article
            key={item.id}
            className="rounded-[1.75rem] border border-border/70 bg-secondary/28 p-6"
          >
            <div className="space-y-3">
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
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
