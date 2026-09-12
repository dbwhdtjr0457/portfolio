import type { ActivitySummary } from "@/content/types";

export const activities: ActivitySummary[] = [
  {
    id: "activity-kakaopay",
    title: "실무 협업과 QA 대응",
    description:
      "스크럼·회의·기획서 댓글 · 요구사항 조율 · QA 조건 공유",
    source: "카카오페이",
  },
  {
    id: "activity-byeolsoop",
    title: "기록 기반 프로젝트 운영",
    description:
      "별숲 스프린트·백로그 운영 · 회의·개발·멘토링 기록",
    source: "별숲",
  },
  {
    id: "activity-pong",
    title: "3D 게임과 실시간 구현",
    description:
      "PONG · Three.js 그래픽 · 로컬 WebSocket · 계산 로직",
    source: "PONG! PONG! PONG!",
  },
];
