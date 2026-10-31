export const companyCases = [
  {
    id: "chatplanet", company: "Chatplanet", label: "Messaging Web SDK", role: "프론트엔드 개발", period: "2026.08 — 2026.09", title: "메시지 조회·복구 중에도 최신 상태 유지",
    brief: "동일 ID는 수정 시각 비교 · 취소·종료 요청의 늦은 응답 제외",
    problem: "동시 완료 시 메시지 중복 · 과거 응답의 최신 상태 덮어쓰기",
    choice: "동일 ID를 수정 시각으로 병합 · 취소·Collection 폐기 이후 응답 차단",
    reason: "응답 도착 순서와 데이터 최신성의 불일치",
    result: "중복·역전·재시도·늦은 응답 시나리오 자동 검증 · DEV 서버 복구 흐름 확인",
    tags: "TypeScript · REST · WebSocket(STOMP) · Vitest · GitHub Packages",
    scope: "기반 모듈 → Channel·Message 공개 API · 최신 상태 병합 · 채널 복구 · 오류별 재시도 · beta 전달",
    details: [
      { label: "자동 테스트", text: "양방향 병합 테스트 8개 · 5xx·지연 응답 경합 시나리오" },
      { label: "리뷰 반영", text: "세션 폐기 재연결 순환 직접 재현 → 자동 재연결 중단" },
      { label: "오류 정책", text: "인증 갱신 1회 · 안전한 요청의 서버 오류 재시도 최대 3회" },
      { label: "전달", text: "GitHub Packages beta 배포 · 연동 문서·설치·검증 절차" },
    ],
  },
  {
    id: "kakaopay", company: "카카오페이", label: "마케팅 어드민", role: "프론트엔드 인턴", period: "2025.04 — 2025.10", title: "메시지 작성부터 예약·조회까지 기능 확장",
    brief: "입력–템플릿–저장–불러오기 연결 · 동작 프로토타입 선행",
    problem: "새 타입의 다중 화면 영향 · 디자인 확정 전 예약 흐름 합의",
    choice: "관련 화면 일괄 연결 · 동작 화면으로 FE·BE·PM 기준 정렬",
    reason: "문서보다 빠른 화면 기반 합의",
    result: "QA 조건 반영 · GET→POST 전환 호출부 동시 수정",
    tags: "React · TypeScript · React Hook Form · API 연동",
    scope: "새 메시지 타입 · 입력 폼·템플릿 · 임시저장·불러오기 · 예약 캘린더",
    details: [
      { label: "프로토타입", text: "동작 캘린더 선공유 · 화면 기반 요구사항 합의" },
      { label: "API 전환", text: "GET→POST 기존 호출부 탐색 · 동시 수정" },
      { label: "협업", text: "FE·BE·PM 요구사항 조율 · QA 조건 확인" },
    ],
  },
];
export const byeolsoopCase = {
  problem: "더블클릭 지점까지 자연스러운 카메라 이동",
  choice: "target 변경·raycasting·카메라 위치 이동 비교 → target 고정 + 위치 이동",
  reason: "별 생성·드래그 이후에도 유지되는 시선 기준",
  result: "더블클릭 지점 이동 · 401 재인증 · React Query 공통 처리",
};
