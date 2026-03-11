import type { ContactItem, ExternalLink } from "@/content/types";

export const externalLinks: ExternalLink[] = [
  {
    id: "byeolsoop-github",
    label: "별숲 GitHub",
    href: "https://github.com/boostcampwm2023/web08-ByeolSoop",
    description: "별숲 프로젝트 저장소",
    status: "confirmed",
    placement: "intro",
  },
  {
    id: "sleep-now-github",
    label: "Sleep Now! GitHub",
    href: "https://github.com/dbwhdtjr0457/SleepNow",
    description: "Sleep Now! 프로젝트 저장소",
    status: "confirmed",
    placement: "intro",
  },
  {
    id: "pong-github",
    label: "PONG GitHub",
    href: "https://github.com/authenticity-house/ft_transcendence",
    description: "PONG! PONG! PONG! 프로젝트 저장소",
    status: "confirmed",
    placement: "intro",
  },
  {
    id: "byeolsoop-github-footer",
    label: "별숲 저장소",
    href: "https://github.com/boostcampwm2023/web08-ByeolSoop",
    description: "별숲(ByeolSoop) 프로젝트 증빙 링크",
    status: "confirmed",
    placement: "footer",
  },
  {
    id: "sleep-now-github-footer",
    label: "Sleep Now! 저장소",
    href: "https://github.com/dbwhdtjr0457/SleepNow",
    description: "Sleep Now! 프로젝트 증빙 링크",
    status: "confirmed",
    placement: "footer",
  },
  {
    id: "pong-github-footer",
    label: "PONG 저장소",
    href: "https://github.com/authenticity-house/ft_transcendence",
    description: "PONG! PONG! PONG! 프로젝트 증빙 링크",
    status: "confirmed",
    placement: "footer",
  },
];

export const introLinks = externalLinks.filter((link) => link.placement === "intro");

export const footerLinks = externalLinks.filter(
  (link) => link.placement === "footer",
);

export const contactItems: ContactItem[] = [
  {
    id: "email",
    label: "이메일",
    status: "needs_check",
    note: "공개 여부 추가 확인 필요",
  },
  {
    id: "github-profile",
    label: "GitHub 프로필",
    status: "needs_check",
    note: "공개 여부 추가 확인 필요",
  },
  {
    id: "resume",
    label: "이력서 링크",
    status: "needs_check",
    note: "공개 여부 추가 확인 필요",
  },
];
