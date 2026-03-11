import type { ReactNode } from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const infoCardVariants = cva(
  "rounded-[1.75rem] border p-6 motion-safe:transition-[transform,border-color,box-shadow,background-color] motion-safe:duration-200 motion-safe:ease-out focus-within:border-foreground/20 focus-within:ring-1 focus-within:ring-foreground/10 motion-safe:hover:-translate-y-0.5",
  {
    variants: {
      variant: {
        default:
          "border-border/80 bg-card text-card-foreground shadow-[0_1px_2px_rgba(15,23,42,0.03)]",
        muted:
          "border-border/70 bg-muted/45 text-card-foreground shadow-[0_1px_2px_rgba(15,23,42,0.02)]",
        featured:
          "border-border bg-card text-card-foreground shadow-[0_10px_30px_rgba(15,23,42,0.035)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

interface InfoCardProps {
  children: ReactNode;
  className?: string;
  variant?: VariantProps<typeof infoCardVariants>["variant"];
}

export function InfoCard({ children, className, variant }: InfoCardProps) {
  return <article className={cn(infoCardVariants({ variant }), className)}>{children}</article>;
}
