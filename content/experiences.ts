import type { Experience } from "@/content/types";

export const experiences: Experience[] = [
  {
    id: "genesisnest",
    kind: "experience",
    name: "제네시스네스트",
    headline: "프론트엔드 개발",
    role: "Chatplanet · AI 검색·챗봇 웹",
    period: "2026.06 — 현재",
    summary:
      "Messaging Web SDK 신규 구축·beta 전달 · Admin Web V2 초기 구축·운영 전환 참여 · AI 검색·챗봇 웹 화면 기반",
    description:
      "채팅 웹 공통 기반 → Admin Web V2 → Messaging Web SDK → 기업 고객의 사내 AI 검색·챗봇 웹",
    highlights: [
      "Messaging Web SDK 기반 모듈 → 공개 API · 메시지 병합·복구 · beta 전달",
      "Admin Web V2 초기 구조·운영 핵심 화면 · 회귀 테스트 195개 · 1차 운영 전환 참여",
      "AI 검색·챗봇 웹 디자인 토큰·공통 컴포넌트",
    ],
    techStack: [
      "TypeScript",
      "React",
      "Next.js",
      "React Query",
      "WebSocket(STOMP)",
      "Vitest",
      "Testing Library",
      "Storybook",
      "MSW",
      "CSS Cascade Layers",
    ],
    links: [],
    collaboration: [
      "API 계약·오류 처리·CI 중심 동료 PR 리뷰",
      "리뷰 지적 재현 → 종료 조건·테스트 반영",
      "실행 브랜치·테스트 방법·배포 상태 공유",
    ],
    subItems: [
      {
        id: "gn-sdk",
        title: "Chatplanet Messaging Web SDK",
        period: "2026.08 — 2026.09",
        summary: "고객사 웹 앱에 채팅을 붙이는 팀 SDK 신규 구축 · 기반 모듈부터 beta 전달까지",
        highlights: [
          "REST Transport·Auth·Client 기반 → Channel·Message 공개 API · 본인 PR 33건 병합",
          "ID·수정 시각 기준 병합 · 취소 후 응답 무시로 늦은 응답 경합 차단 · DEV 서버 소켓 단절 후 복구 확인",
          "인증 갱신 1회·서버 오류 최대 3회 재시도 · 세션 폐기 재연결 순환 재현 → 중단 조건 수정",
        ],
      },
      {
        id: "gn-admin",
        title: "Chatplanet Admin Web V2",
        period: "2026.07 — 2026.08",
        summary: "운영자용 관리자 웹 리뉴얼 · 초기 구축부터 1차 운영 전환까지 참여",
        highlights: [
          "기능 단위 초기 아키텍처 · 로그인·앱 정보·금칙어·관리자·메시지 관리 화면 · 공통 오류·세션 만료 처리",
          "편집 중·적용 필터 분리로 목록·CSV 조회 조건 일치 · 날짜와 무관한 CSV 응답 해시 비교로 발견·안내",
          "Vitest·Testing Library 회귀 테스트 195개 작성·PR CI 연결 · 같은 테스트로 Node 20→24 검증",
        ],
      },
      {
        id: "gn-webview",
        title: "Chatplanet 채팅 웹(WebView)",
        period: "2026.06 — 2026.07",
        summary: "WebView 채팅 화면의 공통 기반과 UI 검증 환경",
        highlights: [
          "공통 오류 처리 · 모바일 viewport 레이아웃 · 환경별 빌드·CI 기본 설정 · 프론트엔드 컨벤션 문서",
          "Storybook 스토리 파일 36개 · MSW API 대역 · interaction 테스트 CI 실행",
          "iPhone SE 크기 리스트 넘침 수정 → 같은 조합 story 재현으로 회귀 자동 감지",
        ],
      },
      {
        id: "gn-ai-search",
        title: "기업 고객의 사내 AI 검색·챗봇 웹",
        period: "2026.10 — 현재",
        summary: "신규 프로젝트의 디자인 토큰·공통 컴포넌트 등 화면 개발 기반",
        highlights: [
          "새 컴포넌트 여백·선택 색 소실 원인을 레이어 밖 전역 CSS로 좁혀 cascade layer 순서 선언으로 해결",
          "Figma 색상 59개·글자 스타일 15개 → 역할·크기 규칙 토큰 · Typography 컴포넌트",
          "동료 PR 12건·인라인 코멘트 32개 · Figma 차이·layout shift·빈 질문 전송 지적",
        ],
      },
    ],
  },
  {
    id: "kakaopay",
    kind: "experience",
    name: "카카오페이",
    headline: "프론트엔드 인턴",
    role: "마케팅 어드민 · 운영 화면 개발",
    period: "2025.04 — 2025.10",
    summary:
      "통합 마케팅 어드민 메시지 영역 · 카카오페이포인트 운영 화면 · 개발 환경 전환",
    description:
      "새 메시지 타입 입력·저장·조회 연결 · API 전환 · QA",
    highlights: [
      "새 메시지 타입 · 입력 폼·템플릿·저장·불러오기 연결",
      "디자인 확정 전 예약 캘린더 프로토타입 · 화면 기반 요구사항 조율",
      "API GET→POST · 기존 호출부 탐색·수정 · QA",
    ],
    techStack: [
      "React",
      "TypeScript",
      "Next.js",
      "React Query",
      "React Hook Form",
      "Jotai",
      "pnpm",
    ],
    links: [],
    collaboration: [
      "FE·BE·PM 요구사항·API 조건 조율",
      "유관 부서 컴포넌트 연동",
      "QA 엣지 케이스 공유·후속 티켓",
    ],
    subItems: [
      {
        id: "kakaopay-offer",
        title: "통합 마케팅 어드민 — 메시지 영역",
        summary: "새 메시지 타입을 작성부터 예약 확인까지 운영 흐름 전체에 연결",
        highlights: [
          "변수 입력 폼·템플릿 연동 → 임시저장·불러오기·검색 조건·결과 테이블까지 메시지 반영",
          "디자인 전 일별 예약 현황 캘린더 프로토타입 선공유 → FE·BE·PM 구현 범위 합의",
        ],
      },
      {
        id: "kakaopay-policy",
        title: "API 전환·발송 정책",
        summary: "큰 API 변경은 분리 전환 · 기존 호출부 선탐색",
        highlights: [
          "필터·요청·응답이 크게 바뀐 화면은 새 API 전용 흐름 분리 → 기존 코드 보존 전환",
          "GET→POST 이관 시 같은 API 사용 지점 탐색·공유·동시 수정",
          "소규모 즉시 발송 등 예외 정책 안내·확인 모달 · QA 경계 조건 티켓화",
        ],
      },
      {
        id: "kakaopay-backlog",
        title: "카카오페이포인트 운영·개발 환경",
        summary: "운영 백로그 · Node 16→22·yarn→pnpm 전환",
        highlights: [
          "서비스 종료 진입점 교체 · 수입·지출 토글 · 디자인 시스템 버전 업그레이드 · 오류 페이지 교체",
          "Node 16→22·yarn→pnpm 이관 · 로컬·CI 설치·빌드 검증",
          "쿠폰 모서리 CSS·SVG 비교 → 최대 너비 고정으로 왜곡 축소",
        ],
      },
    ],
  },
];
