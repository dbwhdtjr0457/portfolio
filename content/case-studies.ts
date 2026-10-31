export type CaseDiagramKind = "sdk-layers" | "late-response" | "admin-flow" | "css-layers" | "campaign";

export type CompanyCase = {
  id: string;
  org: string;
  product: string;
  role: string;
  period: string;
  title: string;
  brief: string;
  diagram: CaseDiagramKind;
  result: string;
  tags: string;
  scope: string;
  details: { label: string; text: string }[];
};

export const companyCases: CompanyCase[] = [
  {
    id: "sdk-structure", org: "제네시스네스트 · Chatplanet", product: "Messaging Web SDK", role: "프론트엔드 개발", period: "2026.08 — 2026.09",
    title: "다른 개발자가 쓰는 SDK의 기반 모듈·공개 API·beta 전달",
    brief: "고객사 웹 앱에 채팅을 붙이는 TypeScript SDK 신규 구축 · Core부터 공개 API까지 이어서 구현",
    diagram: "sdk-layers",
    result: "최신 패키지를 로컬 샘플에 설치해 DEV 서버에서 소켓 단절 후 복구 확인 · beta 배포 환경·연동 문서 전달",
    tags: "TypeScript · REST · WebSocket(STOMP) · Vitest · GitHub Packages",
    scope: "REST Transport·Auth·Client → Channel·Message 공개 API · Collection · beta 전달",
    details: [
      { label: "기반 모듈", text: "REST Transport·Auth·Client · REST·실시간 공통 오류 모델" },
      { label: "공개 API", text: "Channel 목록·조회·생성·참여자·읽음 · Message 조회·수정·삭제·번역·리액션" },
      { label: "전달", text: "GitHub Packages beta 배포 → 압축 패키지 전달 방식의 개발 문서·설치·검증 절차" },
      { label: "범위", text: "팀 SDK의 핵심 영역 · SDK 저장소 본인 PR 33건 병합" },
    ],
  },
  {
    id: "sdk-consistency", org: "제네시스네스트 · Chatplanet", product: "Messaging Web SDK", role: "프론트엔드 개발", period: "2026.08 — 2026.09",
    title: "늦게 도착한 응답이 최신 상태를 덮지 않도록",
    brief: "페이지 조회·실시간 이벤트·재연결 복구가 겹칠 때 오래된 응답의 최신 메시지 되돌림",
    diagram: "late-response",
    result: "양방향 병합 테스트 8개 · 5xx·지연 응답 경합 시나리오 자동 검증",
    tags: "TypeScript · 비동기 상태 처리 · Vitest · Testing Library",
    scope: "양방향 페이지 병합 · 채널 복구 경합 · 오류별 재시도·종료",
    details: [
      { label: "병합 기준", text: "메시지 ID·수정 시각 기준 과거·최신 페이지 병합" },
      { label: "요청 규칙", text: "한 번에 하나의 페이지 요청 · 실패한 방향만 재시도" },
      { label: "폐기 처리", text: "취소·폐기 이후 도착한 응답 미반영 · 채널 접근 불가 시 진행 중 요청 취소" },
      { label: "복구 기준점", text: "변경 내역 복구 실패 시 기존 기준점 보존 → 다음 시도에 사용" },
    ],
  },
  {
    id: "admin-web", org: "제네시스네스트 · Chatplanet", product: "Admin Web V2", role: "프론트엔드 개발", period: "2026.07 — 2026.08",
    title: "테스트 없던 리뉴얼에 회귀 검증과 일관된 조회 조건",
    brief: "앱 설정·금칙어·관리자·메시지를 관리하는 운영자용 웹 · 초기 구축부터 1차 운영 전환까지 참여",
    diagram: "admin-flow",
    result: "회귀 테스트 195개 작성·PR CI 실행 · 같은 테스트로 Node 20→24 검증 · 1차 운영 전환 참여",
    tags: "Next.js · React · TypeScript · React Query · Vitest · Testing Library · GitHub Actions",
    scope: "초기 아키텍처 · 운영 핵심 화면 · 조회 조건 · 회귀 검증 · 실행 환경",
    details: [
      { label: "조회 조건", text: "편집 중·적용 필터 분리 → 목록·이어보기·CSV가 같은 적용 조건 사용" },
      { label: "응답 순서", text: "요청 취소·순서 검증 · 실패 당시 조건으로 재시도" },
      { label: "서버 차이", text: "날짜와 무관하게 같은 CSV가 오는 동작을 해시 비교로 발견 → 미지원 범위 기록·화면 안내" },
      { label: "앞선 작업", text: "채팅 웹(WebView) Storybook 스토리 파일 36개·interaction 테스트 CI · 레이아웃 회귀 감지" },
    ],
  },
  {
    id: "css-layers", org: "제네시스네스트", product: "AI 검색·챗봇 웹", role: "프론트엔드 개발", period: "2026.10 — 현재",
    title: "외부 디자인 시스템 CSS가 새 컴포넌트를 덮는 문제",
    brief: "기업 고객의 사내 AI 검색·챗봇 웹 · 디자인 가이드를 토큰과 공통 컴포넌트로 옮기던 중 발견",
    diagram: "css-layers",
    result: "사라진 여백·선택 색·링크 밑줄 복구 · 전후 화면 비교로 확인",
    tags: "React · TypeScript · Vite · CSS Cascade Layers · Figma",
    scope: "디자인 토큰 · 공통 컴포넌트 · CSS 우선순위 · 화면 품질 리뷰",
    details: [
      { label: "원인", text: "자체 스타일은 @layer 안 · 외부 디자인 시스템 전역 CSS·reset은 레이어 밖 → 레이어 밖 스타일 우선" },
      { label: "해결", text: "진입 HTML에서 layer 순서 먼저 선언 → 빌드 산출물의 등장 순서와 무관" },
      { label: "토큰", text: "Figma 색상 59개·글자 스타일 15개 → 역할·크기 규칙 토큰 · Typography 컴포넌트" },
      { label: "리뷰", text: "동료 PR 12건·인라인 코멘트 32개 · Figma 차이·layout shift·빈 질문 전송" },
    ],
  },
  {
    id: "kakaopay", org: "카카오페이", product: "통합 마케팅 어드민", role: "프론트엔드 인턴", period: "2025.04 — 2025.10",
    title: "메시지 작성부터 예약·조회까지 기능 확장",
    brief: "입력–템플릿–저장–불러오기 연결 · 동작 프로토타입 선행",
    diagram: "campaign",
    result: "QA 조건 반영 · GET→POST 전환 호출부 동시 수정",
    tags: "React · TypeScript · Next.js · React Hook Form · API 연동",
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
