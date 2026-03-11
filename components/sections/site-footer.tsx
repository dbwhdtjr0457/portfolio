import Link from "next/link";

import { navigationItems, siteIdentity } from "@/data";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/75 pt-8">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-1.5">
          <p className="text-sm font-semibold text-foreground">
            {siteIdentity.name} ({siteIdentity.nickname})
          </p>
          <p className="text-sm text-muted-foreground">
            운영 중인 서비스를 더 안전하게 바꾸는 프론트엔드
          </p>
        </div>

        <nav aria-label="푸터 섹션 링크" className="flex flex-wrap gap-4">
          {navigationItems.map((item) => (
            <Link
              key={item.id}
              href={`#${item.id}`}
              className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
            >
              {item.shortLabel}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
