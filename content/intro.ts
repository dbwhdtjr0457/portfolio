import type { IntroContent } from "@/content/types";

export const introContent: IntroContent = {
  name: "유종석",
  role: "프론트엔드 개발자",
  headline: [
    "시도는 과감하게,",
    "검증은 집요하게.",
  ],
  description: [
    "Chatplanet · 관리자 웹 / 메시징 Web SDK",
    "카카오페이 · 마케팅 어드민",
    "개인 프로젝트 · 3D 웹 / 센서 기반 모바일 앱",
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
