import type { ActivityHighlight } from "@/content/types";

export const activityHighlights: ActivityHighlight[] = [
  {
    id: "activity-kakaopay-collaboration",
    title: "실무 협업과 QA 대응",
    description:
      "스크럼, 주간 회의, 슬랙, 기획서 댓글 기반 조율과 QA 대응을 경험했습니다.",
    source: "카카오페이",
    relatedEntryId: "kakaopay",
    recommendedPlacement: "experience",
  },
  {
    id: "activity-byeolsoop-records",
    title: "기록 기반 프로젝트 운영",
    description:
      "스프린트, 백로그, 데일리 스크럼, 회의록, 개발일지, 멘토링 일지 등 기록 중심 운영을 진행했습니다.",
    source: "별숲",
    relatedEntryId: "byeolsoop",
    recommendedPlacement: "project",
  },
  {
    id: "activity-byeolsoop-ground-rule",
    title: "Ground Rule 기반 팀 리듬 합의",
    description:
      "코어타임과 오프라인 회의, 루틴을 합의해 커뮤니케이션 비용을 줄였습니다.",
    source: "별숲",
    relatedEntryId: "byeolsoop",
    recommendedPlacement: "project",
  },
  {
    id: "activity-pong-docs",
    title: "실시간 기능 문서화",
    description:
      "Docs, Dev Log, Learning Notes와 웹소켓 통신 규약 문서화를 통해 구현과 디버깅 비용을 낮췄습니다.",
    source: "PONG! PONG! PONG!",
    relatedEntryId: "pong",
    recommendedPlacement: "project",
  },
];
