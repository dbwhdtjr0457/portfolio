"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { SiteMark } from "@/components/layout/site-mark";
import { navigationItems } from "@/content";

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeItems = navigationItems.filter((item) => item.visibility === "active");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const handleChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setIsMenuOpen(false);
      }
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-border/75 bg-background">
      <div className="container py-4">
        <div className="flex items-center justify-between gap-6">
          <Link
            href="#intro"
            onClick={closeMenu}
            className="inline-flex items-center gap-3 text-sm font-semibold tracking-[0.18em] text-foreground"
          >
            <SiteMark className="h-9 w-9 shrink-0" />
            유종석
          </Link>

          <button
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-primary-navigation"
            aria-label={isMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/80 bg-background text-foreground transition-colors hover:border-foreground/35 hover:bg-secondary/40 md:hidden"
            onClick={() => {
              setIsMenuOpen((currentValue) => !currentValue);
            }}
          >
            {isMenuOpen ? (
              <X aria-hidden="true" className="h-5 w-5" />
            ) : (
              <Menu aria-hidden="true" className="h-5 w-5" />
            )}
          </button>

          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm text-muted-foreground">
              {activeItems.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className="border-b border-transparent pb-1 transition-colors hover:border-foreground/30 hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {isMenuOpen ? (
          <nav
            id="mobile-primary-navigation"
            aria-label="Mobile primary"
            className="mt-4 border-t border-border/75 pt-4 md:hidden"
          >
            <ul className="grid gap-2">
              {activeItems.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className="flex min-h-11 items-center rounded-2xl px-4 py-3 text-sm text-foreground transition-colors hover:bg-secondary/55"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}
      </div>
    </header>
  );
}
