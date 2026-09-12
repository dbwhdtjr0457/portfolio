"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { navigationItems } from "@/content";

const activeItems = navigationItems.filter((item) => item.visibility === "active");

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    let frame = 0;

    const updateActiveSection = () => {
      frame = 0;
      const marker = window.scrollY + Math.min(window.innerHeight * 0.32, 320);
      let nextSection: string | null = null;

      for (const item of activeItems) {
        const section = document.getElementById(item.id);
        if (section && section.offsetTop <= marker) {
          nextSection = item.id;
        }
      }

      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4) {
        nextSection = "contact";
      }

      setActiveSection((current) => current === nextSection ? current : nextSection);
    };

    const scheduleUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateActiveSection);
    };

    scheduleUpdate();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, []);

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
            <span aria-hidden="true" className="portfolio-wordmark">YS</span>
            <span>유종석</span>
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

          <nav aria-label="주요 메뉴" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm text-muted-foreground">
              {activeItems.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    aria-current={activeSection === item.id ? "location" : undefined}
                    className={`border-b pb-1 transition-colors ${activeSection === item.id ? "border-foreground text-foreground" : "border-transparent hover:border-foreground/30 hover:text-foreground"}`}
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
            aria-label="모바일 주요 메뉴"
            className="mt-4 border-t border-border/75 pt-4 md:hidden"
          >
            <ul className="grid gap-2">
              {activeItems.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    aria-current={activeSection === item.id ? "location" : undefined}
                    className={`flex min-h-11 items-center rounded-2xl px-4 py-3 text-sm text-foreground transition-colors ${activeSection === item.id ? "bg-secondary/70" : "hover:bg-secondary/55"}`}
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
