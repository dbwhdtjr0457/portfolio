import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface SectionBlockProps {
  id: string;
  title: string;
  description?: string;
  eyebrow?: string;
  children: ReactNode;
  className?: string;
  bodyClassName?: string;
}

export function SectionBlock({
  id,
  title,
  description,
  eyebrow,
  children,
  className,
  bodyClassName,
}: SectionBlockProps) {
  const headingId = `${id}-title`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn("scroll-mt-24", className)}
    >
      <div className="space-y-8 border-t border-border/75 pt-12 sm:pt-14">
        <header className="space-y-4">
          {eyebrow ? (
            <Badge variant="subtle" className="w-fit">
              {eyebrow}
            </Badge>
          ) : null}
          <div className="max-w-3xl space-y-3">
            <h2
              id={headingId}
              className="text-2xl font-semibold tracking-[-0.03em] text-foreground sm:text-3xl lg:text-[2rem]"
            >
              {title}
            </h2>
            {description ? (
              <p className="text-sm leading-7 text-muted-foreground sm:text-base">
                {description}
              </p>
            ) : null}
          </div>
        </header>

        <div className={cn("space-y-6 lg:space-y-7", bodyClassName)}>
          {children}
        </div>
      </div>
    </section>
  );
}
