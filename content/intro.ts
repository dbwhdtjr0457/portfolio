import type { IntroContent } from "@/content/types";

export const introContent: IntroContent = {
  name: "유종석",
  role: "프론트엔드 개발자",
  headline: "실무 경험과 프로젝트를 함께 담은 프론트엔드 포트폴리오",
  description: [
    "운영 중인 서비스에서 쌓은 실무 경험과 팀 프로젝트를 한 흐름으로 정리했습니다.",
    "카카오페이에서의 경험과 프로젝트별 구현 내용을 중심으로 소개합니다.",
  ],
  primaryLinkIds: ["byeolsoop-github", "sleep-now-github", "pong-github"],
  ctas: [
    {
      id: "go-experience",
      label: "경력 보기",
      href: "#experience",
      variant: "primary",
    },
    {
      id: "go-projects",
      label: "프로젝트 보기",
      href: "#projects",
      variant: "secondary",
    },
  ],
};
