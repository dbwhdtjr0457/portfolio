type SiteShellContent = {
  eyebrow: string;
  title: string;
  description: string;
  nextSteps: string[];
  note: string;
};

export const siteShellContent: SiteShellContent = {
  eyebrow: "Foundation",
  title: "Portfolio site setup in progress.",
  description:
    "The project foundation is ready for the next implementation step. Portfolio sections and final content will be added after the structure is confirmed.",
  nextSteps: [
    "App Router structure",
    "Tailwind CSS setup",
    "shadcn/ui baseline",
    "Content-driven architecture",
  ],
  note: "The next step focuses on section-level implementation only.",
};
