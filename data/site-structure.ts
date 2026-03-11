import type { HomeSection } from "@/lib/types/portfolio-content";
import { navigationItems } from "@/data/navigation";

export const homeSections: HomeSection[] = navigationItems.map((item) => ({
  id: item.id,
  title: item.label,
  description: item.description,
}));

export type { HomeSection } from "@/lib/types/portfolio-content";
