import type { SkillGroup } from "@/content/types";

export const skills: SkillGroup[] = [
  {
    id: "frontend",
    category: "Frontend",
    description: "회사·개인 프로젝트 웹 기술",
    items: ["React", "TypeScript", "Next.js"],
  },
  {
    id: "state-and-data",
    category: "State / Data",
    description: "입력 폼 · 클라이언트 상태 · 서버 데이터 요청",
    items: [
      "React Query",
      "React Hook Form",
      "jotai",
      "Recoil",
    ],
  },
  {
    id: "tooling",
    category: "Tooling / Runtime",
    description: "런타임 · 패키지 매니저 전환",
    items: ["Node.js", "yarn", "pnpm"],
  },
  {
    id: "three-and-realtime",
    category: "3D / Realtime",
    description: "3D 화면 · 실시간 통신",
    items: ["Three.js", "React-Three-Fiber", "OrbitControls", "WebSocket"],
  },
  {
    id: "mobile",
    category: "Mobile",
    description: "센서 수집 · 모바일 알림",
    items: [
      "React Native",
      "모바일 센서",
      "Foreground Service",
      "Notification",
      "Decision Tree",
    ],
  },
];
