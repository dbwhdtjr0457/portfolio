import type { WorkStyleContent } from "@/lib/types/portfolio-content";

export const workStyleContent: WorkStyleContent = {
  primaryPositioning:
    "운영 중인 서비스에서 정책·연동·배포 리스크를 먼저 읽고, 영향도 분석과 UX 안전장치로 변경을 안정적으로 완수하는 프론트엔드",
  secondaryPositionings: [
    "구현 전에 대안을 실제로 비교하고 한계를 검증해 팀 의사결정 품질을 높이는 프론트엔드",
    "상태 신선도, 에러 처리, API 흐름 공통화처럼 유지보수에 직접 연결되는 설계를 우선하는 프론트엔드",
    "기록과 문서화를 통해 협업 비용을 줄이고 불확실한 요구사항을 빠르게 정리하는 프론트엔드",
  ],
  workingPrinciples: [
    "될 것 같은 구현보다 대안 2~3개를 실제 시도하고 한계와 장단점을 정리해 최적안을 선택한다.",
    "배포와 연동 변경은 영향도 분석을 먼저 수행하고 잠재 장애를 선제적으로 제거한다.",
    "정책과 운영 리스크는 UI와 플로우 안에서 확인 절차로 강제해 사고를 예방한다.",
    "문서화와 회고로 학습과 실행을 연결한다.",
  ],
  strengthPatterns: [
    {
      title: "먼저 비교하고 그다음 선택한다",
      description:
        "CSS vs SVG, OrbitControls vs 다른 접근, History API vs Recoil처럼 대안을 실제로 검토한 뒤 선택한다.",
    },
    {
      title: "상태와 흐름의 안정성을 먼저 본다",
      description:
        "freshness 우선 설계, 401 재발급 흐름, 요청 처리 공통화, V2 분리 전환처럼 화면 뒤의 안정성을 먼저 설계한다.",
    },
    {
      title: "정책 리스크를 UI에서 흡수한다",
      description:
        "정책 확인 모달과 예약 현황 가시성처럼 운영 리스크를 사용 흐름 안에서 줄이는 설계를 선호한다.",
    },
    {
      title: "불확실성을 협업 구조로 정리한다",
      description:
        "슬랙, 회의, 기획서 댓글, QA 티켓화, 통신 규약 문서화로 해석 차이와 재작업을 줄인다.",
    },
    {
      title: "화려함보다 사용 맥락을 우선한다",
      description:
        "3D와 인터랙션도 시각 효과 자체보다 자연스러운 사용 경험과 학습 비용 절감에 맞춰 선택한다.",
    },
  ],
  collaborationEvidence: [
    {
      title: "카카오페이 협업과 QA 대응",
      summary:
        "스크럼, 주간 회의, 슬랙, 기획서 댓글을 통해 요구사항을 빠르게 확정하고 QA 이슈를 티켓화해 완성도를 끌어올렸다.",
      proofType: "운영 협업",
    },
    {
      title: "별숲 기록 기반 운영",
      summary:
        "스프린트, 백로그, 데일리 스크럼, 회의록, 개발일지, 멘토링 일지로 실행 과정을 구조화했다.",
      proofType: "팀 운영 기록",
    },
    {
      title: "PONG 문서화 자산",
      summary:
        "개발 문서, 개발 기록, 학습 노트, 웹소켓 통신 규약 문서화로 실시간 기능의 구현과 디버깅 비용을 낮췄다.",
      proofType: "기술 문서화",
    },
  ],
};
