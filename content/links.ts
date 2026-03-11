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
