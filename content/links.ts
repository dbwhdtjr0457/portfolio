import type { ExternalLink } from "@/content/types";

type ProjectRepositoryLink = {
  entryId: string;
  introId: string;
  footerId: string;
  introLabel: string;
  footerLabel: string;
  href: string;
  description: string;
};

const projectRepositoryLinks: ProjectRepositoryLink[] = [
  {
    entryId: "byeolsoop",
    introId: "byeolsoop-github",
    footerId: "byeolsoop-github-footer",
    introLabel: "별숲 GitHub",
    footerLabel: "별숲 저장소",
    href: "https://github.com/boostcampwm2023/web08-ByeolSoop",
    description: "별숲 프로젝트 저장소",
  },
  {
    entryId: "sleep-now",
    introId: "sleep-now-github",
    footerId: "sleep-now-github-footer",
    introLabel: "Sleep Now! GitHub",
    footerLabel: "Sleep Now! 저장소",
    href: "https://github.com/dbwhdtjr0457/SleepNow",
    description: "Sleep Now! 프로젝트 저장소",
  },
  {
    entryId: "pong",
    introId: "pong-github",
    footerId: "pong-github-footer",
    introLabel: "PONG GitHub",
    footerLabel: "PONG 저장소",
    href: "https://github.com/authenticity-house/ft_transcendence",
    description: "PONG! PONG! PONG! 프로젝트 저장소",
  },
];

export const introLinks: ExternalLink[] = [
  ...projectRepositoryLinks.map<ExternalLink>((link) => ({
    id: link.introId,
    label: link.introLabel,
    href: link.href,
    description: link.description,
    status: "confirmed",
    placement: "intro",
  })),
];

export const projectLinksByEntryId = projectRepositoryLinks.reduce<Record<string, ExternalLink>>(
  (accumulator, link) => {
    accumulator[link.entryId] = {
      id: link.footerId,
      label: link.footerLabel,
      href: link.href,
      description: `${link.description} 링크`,
      status: "confirmed",
      placement: "footer",
    };

    return accumulator;
  },
  {},
);
