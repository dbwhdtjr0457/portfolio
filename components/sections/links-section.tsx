import Link from "next/link";

import { InfoCard } from "@/components/common/info-card";
import { SectionBlock } from "@/components/common/section-block";
import { linksContent } from "@/data";
import { Badge } from "@/components/ui/badge";

export function LinksSection() {
  return (
    <SectionBlock
      id="proof-links"
      eyebrow="링크와 연락처"
      title="작업을 확인할 수 있는 링크와 연락처"
      description="공개 가능한 저장소와 이메일을 따로 모아, 더 확인하고 싶을 때 바로 이어질 수 있다."
    >
      <div className="grid gap-4 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <InfoCard className="space-y-4">
          <Badge variant="subtle">연락처</Badge>
          <h3 className="text-xl font-semibold tracking-[-0.03em] text-foreground">
            연락처
          </h3>
          <div className="flex flex-col gap-3">
            {linksContent.contacts.map((contact) => (
              <Link
                key={contact.href}
                href={contact.href}
                className="rounded-2xl border border-border/80 bg-muted/30 px-4 py-3 text-sm font-medium text-foreground transition-colors hover:border-foreground/25"
              >
                {contact.label}
              </Link>
            ))}
          </div>
        </InfoCard>

        <InfoCard variant="muted" className="space-y-4">
          <Badge variant="subtle">증빙 링크</Badge>
          <h3 className="text-xl font-semibold tracking-[-0.03em] text-foreground">
            증빙 링크
          </h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {linksContent.proofLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-border/80 bg-background px-4 py-4 text-sm leading-6 text-muted-foreground transition-colors hover:border-foreground/25 hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <ul className="space-y-2 border-t border-border/70 pt-4 text-sm leading-6 text-muted-foreground">
            {linksContent.notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </InfoCard>
      </div>
    </SectionBlock>
  );
}
