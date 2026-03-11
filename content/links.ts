import type { ContactItem, ExternalLink } from "@/content/types";

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

export const externalLinks: ExternalLink[] = projectRepositoryLinks.flatMap((link) => [
  {
    id: link.introId,
    label: link.introLabel,
    href: link.href,
    description: link.description,
    status: "confirmed",
    placement: "intro",
  },
  {
    id: link.footerId,
    label: link.footerLabel,
    href: link.href,
    description: `${link.description} 링크`,
    status: "confirmed",
    placement: "footer",
  },
]);

export const introLinks = externalLinks.filter((link) => link.placement === "intro");

export const footerLinks = externalLinks.filter(
  (link) => link.placement === "footer",
);

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

export const contactItems: ContactItem[] = [
  {
    id: "email",
    label: "이메일",
    value: "dbwhdtjr0457@gmail.com",
    href: "mailto:dbwhdtjr0457@gmail.com",
    status: "confirmed",
    note: "연락을 위한 기본 채널입니다.",
  },
  {
    id: "github-profile",
    label: "GitHub 프로필",
    value: "github.com/dbwhdtjr0457",
    href: "https://github.com/dbwhdtjr0457",
    status: "confirmed",
    note: "개인 작업과 저장소를 모아볼 수 있는 링크입니다.",
  },
  {
    id: "resume",
    label: "이력서 링크",
    value: "Resume PDF",
    href: "/JSYOO-resume.pdf",
    status: "confirmed",
    note: "경력과 프로젝트를 문서 형태로 정리한 자료입니다.",
  },
];
