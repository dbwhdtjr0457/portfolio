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
          className={
            compact
              ? "inline-flex items-center gap-1 rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
              : "inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-foreground transition-colors hover:border-foreground"
          }
        >
          <span>{link.label}</span>
          <ArrowUpRight className={compact ? "h-3.5 w-3.5" : "h-4 w-4"} />
        </Link>
      ))}
    </div>
  );
}
