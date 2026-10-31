import type { Experience } from "@/content/types";

export const experiences: Experience[] = [
{
  "id": "genesisnest",
  "kind": "experience",
  "name": "제네시스네스트",
  "headline": "프론트엔드 개발",
  "role": "Chatplanet · AI 검색·챗봇 웹",
  "period": "2026.06 — 현재",
  "summary": "Messaging Web SDK 신규 구축·beta 전달 · Admin Web V2 초기 구축·운영 전환 참여 · AI 검색·챗봇 웹 화면 기반",
  "description": "채팅 웹 공통 기반 → Admin Web V2 → Messaging Web SDK → 기업 고객의 사내 AI 검색·챗봇 웹",
  "highlights": [
    "Messaging Web SDK 기반 모듈 → 공개 API · 메시지 병합·복구 · beta 전달",
    "Admin Web V2 초기 구조·운영 핵심 화면 · 회귀 테스트 195개 · 1차 운영 전환 참여",
    "AI 검색·챗봇 웹 디자인 토큰·공통 컴포넌트"
  ],
  "techStack": [
    "TypeScript",
    "React",
    "Next.js",
    "React Query",
    "WebSocket(STOMP)",
    "Vitest",
    "Testing Library",
    "Storybook",
    "MSW",
    "CSS Cascade Layers"
  ],
  "links": [],
  "collaboration": [
    "API 계약·오류 처리·CI 중심 동료 PR 리뷰",
    "리뷰 지적 재현 → 종료 조건·테스트 반영",
    "실행 브랜치·테스트 방법·배포 상태 공유"
  ],
  "subItems": [
    {
      "id": "gn-sdk",
      "title": "Chatplanet Messaging Web SDK",
      "period": "2026.08 — 2026.09",
      "summary": "기반 모듈 → Channel·Message 공개 API · 메시지 병합·복구 · 오류별 재시도·종료 · beta 전달",
      "highlights": [
        "REST Transport·Auth·Client 기반 → Channel·Message 공개 API",
        "메시지 ID·수정 시각 기준 양방향 병합 · 취소·폐기 이후 응답 제외 · 병합 테스트 8개",
        "인증 갱신 1회 · 안전한 요청의 서버 오류 재시도 최대 3회 · 세션 폐기 재연결 순환 재현 → 자동 재연결 중단",
        "GitHub Packages beta 배포 · 연동 문서·패키지 설치·검증 절차"
      ]
    },
    {
      "id": "gn-admin",
      "title": "Chatplanet Admin Web V2",
      "period": "2026.07 — 2026.08",
      "summary": "초기 아키텍처·운영 핵심 화면 · 적용 조건 분리·재시도 · 회귀 테스트 195개·CI · 1차 운영 전환 참여",
      "highlights": [
        "기능 단위 초기 구조 · 로그인·앱 선택·앱 정보·금칙어·관리자·메시지 관리 · 공통 오류·세션 만료 처리",
        "편집 중·적용된 필터 분리 · 커서 이어보기 요청 취소·순서 검증 · 실패 당시 조건 재시도",
        "Vitest·Testing Library 회귀 테스트 195개 · CI job 실행",
        "Node 20→24·Next.js 패치 · 로컬·CI·Docker 버전 정렬",
        "React Query 적용·개발 환경 배포·1차 운영 전환 참여"
      ]
    },
    {
      "id": "gn-webview",
      "title": "Chatplanet 채팅 웹(WebView)",
      "period": "2026.06 — 2026.07",
      "summary": "공통 오류 처리·모바일 레이아웃 · Storybook 스토리 파일 36개·MSW · interaction 테스트 CI · 모바일 넘침 회귀 감지",
      "highlights": [
        "공통 오류 처리 · 모바일 viewport 레이아웃 · 환경별 빌드·CI 기본 설정 · 프론트엔드 컨벤션 문서",
        "공통 컴포넌트·오류·공지 화면 스토리 파일 36개 · MSW API 대역 · interaction 테스트 CI",
        "iPhone SE 크기 리스트 넘침 수정 → 같은 조합 story 재현·회귀 감지",
        "기존 웹 API 응답 타입 정리 · any·lint 오류 축소"
      ]
    },
    {
      "id": "gn-ai-search",
      "title": "기업 고객의 사내 AI 검색·챗봇 웹",
      "period": "2026.10 — 현재",
      "summary": "디자인 토큰 색상 59·글자 스타일 15 · 키보드 조작 공통 컴포넌트 · CSS layer 우선순위 정리 · 화면 품질 리뷰",
      "highlights": [
        "Figma 가이드 색상 59개·글자 스타일 15개 → 역할·크기 규칙 토큰 · Typography 컴포넌트·확인 페이지",
        "제어형 탭 컴포넌트 · 화살표·Home·End 키 조작 · 포커스 표시",
        "외부 디자인 시스템 전역 CSS 우선 적용 확인 → reset < 외부 디자인 시스템 < 자체 디자인 시스템 layer 순서 선언",
        "동료 PR 12건 인라인 코멘트 32개 · Figma 차이·layout shift·빈 질문 전송·하드코딩 색상"
      ]
    }
  ]
},
  {
    id: "kakaopay",
    kind: "experience",
    name: "카카오페이",
    headline: "프론트엔드 인턴",
    role: "마케팅 어드민 · 운영 화면 개발",
    period: "2025.04 — 2025.10",
    summary:
      "메시지 작성·저장·조회 · 예약 현황 · 포인트·쿠폰 UI · 개발 환경 전환",
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
      "React Hook Form",
      "Node.js",
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
        title: "통합 마케팅 어드민",
        summary:
          "새 메시지 타입 · 변수 입력 폼·템플릿 · 임시저장·불러오기 · 예약 캘린더",
        highlights: [
          "새 메시지 타입 · 데이터 구조·입력 폼·템플릿 연결",
          "일별 예약 캘린더 · 동작 화면 선공유",
          "API GET→POST · 사용 지점 선탐색·동시 수정",
          "정책 안내 · 확인 절차",
        ],
      },
      {
        id: "kakaopay-policy",
        title: "API·발송 정책",
        summary:
          "GET→POST 호출부 탐색·동시 수정 · 예외 발송 확인 모달 · QA 엣지 케이스",
        highlights: [
          "동일 API의 기존 사용 지점 탐색·공유",
          "GET→POST 호출부 동시 수정",
          "예외 발송 정책 확인 모달 · QA 조건 티켓화",
        ],
      },
      {
        id: "kakaopay-backlog",
        title: "카카오페이포인트·운영 화면",
        summary:
          "서비스 종료 진입점 · 수입·지출 내역 토글 · 디자인 시스템 · 오류 페이지",
        highlights: [
          "서비스 종료에 따른 진입점 교체",
          "상세 내역 수입·지출 토글 · 유관 팀 컴포넌트 연결",
          "디자인 시스템 버전 업그레이드 · 오류 페이지 교체",
          "변경 전후 기존 동작 확인",
        ],
      },
      {
        id: "kakaopay-gauntlet",
        title: "건틀렛 쿠폰 UI 변경",
        summary:
          "쿠폰 모서리 CSS·SVG 비교 · 가변 너비 차이",
        highlights: [
          "CSS 방식 · SVG 방식 비교",
          "유동 너비의 SVG 왜곡 확인",
          "UI 최대 너비 고정 → 왜곡 축소",
          "체크 컬러 변경 · 클릭 영역 확대",
        ],
      },
      {
        id: "kakaopay-tooling",
        title: "개발 환경 전환",
        summary:
          "Node 16→22 · yarn→pnpm · 로컬·CI 설치·빌드 검증",
        highlights: [
          "이관 가이드·위키 기반 절차 확인",
          "로컬·CI 검증 · 이슈 확인·대응",
          "패키지 매니저 팀 기술 공유",
          "전환 전후 설치·빌드 비교",
        ],
      },
    ],
  },
];
