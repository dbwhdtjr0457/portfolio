import type { NavigationItem } from "@/content/types";

export const navigationItems: NavigationItem[] = [
  {
    id: "intro",
    label: "Intro",
    href: "#intro",
    visibility: "active",
  },
  {
    id: "summary",
    label: "Summary",
    href: "#summary",
    visibility: "conditional",
  },
  {
    id: "timeline",
    label: "Timeline",
    href: "#timeline",
    visibility: "active",
  },
  {
    id: "experience",
    label: "Experience",
    href: "#experience",
    visibility: "active",
  },
  {
    id: "projects",
    label: "Projects",
    href: "#projects",
    visibility: "active",
  },
  {
    id: "skills",
    label: "Skills",
    href: "#skills",
    visibility: "conditional",
  },
  {
    id: "activities",
    label: "Activities",
    href: "#activities",
    visibility: "conditional",
  },
  {
    id: "education",
    label: "Education",
    href: "#education",
    visibility: "active",
  },
];
