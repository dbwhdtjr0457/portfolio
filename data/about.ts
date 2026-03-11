import type { FormalSpecsContent } from "@/lib/types/portfolio-content";

export const formalSpecsContent: FormalSpecsContent = {
  education: {
    school: "경희대학교",
    major: "소프트웨어융합학과",
    degree: "학사",
    score: "3.82/4.3",
    relatedCoursework: [
      "알고리즘",
      "자료구조",
      "컴퓨터공학",
      "기계학습",
      "영상처리",
      "자연어처리",
    ],
  },
  certifications: [
    {
      title: "정보처리기사",
      detail: "보유",
    },
  ],
  languages: [
    {
      title: "영어 일상 회화",
      detail: "영어 일상 회화",
    },
    {
      title: "TOEIC Speaking",
      detail: "Advanced Low",
    },
    {
      title: "TOEIC",
      detail: "950",
    },
  ],
  coreTechGroups: [
    {
      title: "Frontend",
      items: [
        "React",
        "TypeScript",
        "Next.js",
        "React Query",
        "React Hook Form",
        "jotai/recoil",
      ],
    },
    {
      title: "Platform / DX",
      items: ["Node.js(16→22)", "yarn→pnpm 마이그레이션"],
    },
    {
      title: "3D / Realtime",
      items: ["Three.js", "React Three Fiber", "OrbitControls", "WebSocket"],
    },
    {
      title: "Mobile",
      items: [
        "React Native",
        "모바일 센서",
        "Foreground Service/Notification",
        "Decision Tree 개인화",
      ],
    },
  ],
};
