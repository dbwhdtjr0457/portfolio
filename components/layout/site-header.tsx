import Link from "next/link";

import { navigationItems } from "@/content";

export function SiteHeader() {
  const activeItems = navigationItems.filter(
    (item) => item.visibility === "active" && item.id !== "links",
  );

  return (
    <header className="sticky top-0 z-40 border-b border-border/75 bg-background">
      <div className="container flex h-16 items-center justify-between gap-6">
        <Link
          href="#intro"
          className="text-sm font-semibold tracking-[0.18em] text-foreground"
        >
          유종석
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm text-muted-foreground">
            {activeItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className="border-b border-transparent pb-1 hover:border-foreground/30 hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
