import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { ExternalLink } from "@/content";

type LinkGroupProps = {
  links: ExternalLink[];
  compact?: boolean;
};

export function LinkGroup({ links, compact = false }: LinkGroupProps) {
  if (links.length === 0) {
    return null;
  }

  return (
    <div className={compact ? "flex flex-wrap gap-2" : "flex flex-wrap gap-3"}>
      {links.map((link) => (
        <Link
          key={link.id}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          aria-label={`${link.label} - 새 창에서 열림`}
          className={
            compact
              ? "inline-flex items-center gap-1 rounded-full border border-border/80 bg-background px-3 py-1.5 text-xs text-muted-foreground transition-[border-color,color,transform] duration-200 hover:-translate-y-0.5 hover:border-foreground/40 hover:text-foreground motion-reduce:transform-none motion-reduce:transition-none"
              : "inline-flex items-center gap-2 rounded-full border border-border/80 bg-background px-4 py-2 text-sm text-foreground transition-[border-color,background-color,transform] duration-200 hover:-translate-y-0.5 hover:border-foreground/40 hover:bg-secondary/35 motion-reduce:transform-none motion-reduce:transition-none"
          }
        >
          <span>{link.label}</span>
          <ArrowUpRight
            aria-hidden="true"
            className={compact ? "h-3.5 w-3.5" : "h-4 w-4"}
          />
          <span className="sr-only">새 창에서 열림</span>
        </Link>
      ))}
    </div>
  );
}
