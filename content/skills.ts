import type { SkillGroup } from "@/content/types";

export const skills: SkillGroup[] = [
  {
    id: "frontend",
    category: "Frontend",
    description: "웹 프론트엔드 개발의 중심이 된 기술입니다.",
    items: ["React", "TypeScript", "Next.js"],
  },
  {
    id: "state-and-data",
    category: "State / Data",
    description: "폼 처리와 상태 관리, 데이터 요청에 사용한 기술입니다.",
    items: [
      "React-Query",
      "React-Hook-Form",
      "jotai",
      "Recoil",
    ],
  },
  {
    id: "tooling",
    category: "Tooling / Runtime",
    description: "개발환경 개선과 런타임 이관 과정에서 사용한 기술입니다.",
    items: ["Node.js", "yarn", "pnpm"],
  },
  {
    id: "three-and-realtime",
    category: "3D / Realtime",
    description: "3D 경험과 실시간 기능 구현에 사용한 기술입니다.",
    items: ["Three.js", "React-Three-Fiber", "OrbitControls", "WebSocket"],
  },
  {
    id: "mobile",
    category: "Mobile",
    description: "모바일 앱과 센서 기반 기능 구현에 사용한 기술입니다.",
    items: [
      "React Native",
      "모바일 센서",
      "Foreground Service",
      "Notification",
      "Decision Tree",
    ],
  },
];
