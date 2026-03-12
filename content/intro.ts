import type { IntroContent } from "@/content/types";

export const introContent: IntroContent = {
  name: "유종석",
  role: "프론트엔드 개발자",
  headline: "운영 중인 서비스의 변경과 사용자 흐름을 안정적으로 다루는 프론트엔드 개발자입니다.",
  description: [
    "카카오페이 실무 경험과 프로젝트, 공식 이력을 함께 정리했습니다.",
    "운영 맥락의 변경 대응과 프로젝트별 구현 내용을 기존 흐름 안에서 담백하게 소개합니다.",
  ],
  primaryLinkIds: ["byeolsoop-github", "pong-github", "sleep-now-github"],
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
