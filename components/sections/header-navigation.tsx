"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { navigationItems } from "@/data";
import { siteIdentity } from "@/data/site-meta";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function HeaderNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 -mx-5 border-b border-border/80 bg-background/95 px-5 py-4 backdrop-blur-sm sm:-mx-8 sm:px-8 lg:-mx-10 lg:px-10">
      <div className="mx-auto flex max-w-[1180px] flex-col gap-4">
        <div className="flex items-start justify-between gap-4 lg:hidden">
          <div className="flex items-center gap-3">
            <div className="space-y-1">
              <Link href="#hero" className="text-sm font-semibold tracking-tight">
                {siteIdentity.name} ({siteIdentity.nickname})
              </Link>
              <p className="text-xs text-muted-foreground">Frontend Portfolio</p>
            </div>
            <Badge variant="subtle" className="hidden sm:inline-flex">
              포트폴리오
            </Badge>
          </div>

          <Button
            type="button"
            variant="outline"
            size="icon-sm"
            aria-expanded={isOpen}
            aria-controls="primary-navigation"
            aria-label={isOpen ? "메뉴 닫기" : "메뉴 열기"}
            onClick={() => setIsOpen((current) => !current)}
          >
            {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </Button>
        </div>

        <div className="hidden lg:flex lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-3">
            <div className="space-y-1">
              <Link href="#hero" className="text-sm font-semibold tracking-tight">
                {siteIdentity.name} ({siteIdentity.nickname})
              </Link>
              <p className="text-xs text-muted-foreground">Frontend Portfolio</p>
            </div>
            <Badge variant="subtle" className="hidden sm:inline-flex">
              포트폴리오
            </Badge>
          </div>

          <nav
            aria-label="페이지 섹션"
            className="flex flex-wrap gap-2 lg:max-w-[720px] lg:justify-end"
          >
            {navigationItems.map((item) => (
              <Link
                key={item.id}
                href={`#${item.id}`}
                className="rounded-full border border-border/80 bg-card px-3.5 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-foreground/25 hover:bg-foreground hover:text-background"
              >
                {item.shortLabel}
              </Link>
            ))}
          </nav>
        </div>

        <nav
          id="primary-navigation"
          aria-label="모바일 페이지 섹션"
          hidden={!isOpen}
          className="grid gap-2 lg:hidden"
        >
          <div className="grid gap-2 border-t border-border/70 pt-4">
            {navigationItems.map((item) => (
              <Link
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setIsOpen(false)}
                className="rounded-2xl border border-border/80 bg-card px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:border-foreground/25 hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
