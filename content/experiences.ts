import type { Experience } from "@/content/types";

export const experiences: Experience[] = [
{
  "id": "genesisnest",
  "kind": "experience",
  "name": "제네시스네스트",
  "headline": "Chatplanet 프론트엔드 개발",
  "role": "관리자 웹 · 메시징 Web SDK 개발",
  "period": "2026.06 — 현재",
  "summary": "관리자 화면·인증·조회 · 메시지 병합·복구 · 테스트·Storybook · 실행 환경 정렬",
  "description": "메시지 중복·지연 응답 처리 · 관리자 인증·조회 상태",
  "highlights": [
    "메시지 ID·수정 시각 기준 병합 · 취소 이후 지연 응답 제외",
    "HttpOnly 쿠키·Next.js BFF 전환 · 회귀 테스트 195개 · CI 연결",
    "Storybook 36개 · MSW API 재현 · 모바일 화면 넘침 수정"
  ],
  "techStack": [
    "React",
    "TypeScript",
    "Next.js",
    "Vitest",
    "Testing Library",
    "Storybook",
    "MSW"
  ],
  "links": [],
  "collaboration": [
    "FE·BE와 API 및 세션 동작 조율",
    "리뷰 조건 재현·회귀 테스트 반영",
    "실행 브랜치·테스트 방법·배포 상태 공유"
  ],
  "subItems": [
    {
      "id": "gn-admin",
      "title": "Chatplanet 관리자 웹",
      "summary": "초기 구조 · 로그인·앱 선택·정보·금칙어·메시지 관리 · HttpOnly 쿠키·BFF 인증",
      "highlights": [
        "로그인·앱 선택·앱 정보·금칙어·메시지 화면 · 에러·세션 처리",
        "localStorage JWT → HttpOnly 쿠키 + Next.js BFF",
        "입력 중·적용된 검색 조건 분리 · 취소·응답 순서·재시도"
      ]
    },
    {
      "id": "gn-sdk",
      "title": "메시징 Web SDK",
      "summary": "양방향 메시지 조회·병합 · 채널 복구 · 오류별 재시도·세션 종료",
      "highlights": [
        "메시지 ID·수정 시각 기준 병합 · 취소·dispose 이후 지연 응답 제외",
        "채널 복구 경합 · 실패 후 커서 보존",
        "세션 폐기 이후 반복 재연결 재현 → 해당 오류에서 연결 종료"
      ]
    },
    {
      "id": "gn-quality",
      "title": "자동 검증 환경",
      "summary": "회귀 테스트 195개·CI · Storybook 스토리 파일 36개·MSW · UI 오류 재현",
      "highlights": [
        "Vitest·Testing Library 회귀 테스트 195개 · CI 연결",
        "Storybook + MSW API · 모바일 너비 재현 · Chromium 확인",
        "Node 20→24 · 로컬·CI·Docker 버전 정렬"
      ]
    },
    {
      "id": "gn-platform",
      "title": "개발·배포 환경",
      "summary": "Node 20→24 로컬·CI·Docker 정렬 · ARM64 전환 전후 병목·환경 영향 검토 · 전체 배포 약 23→7분 측정",
      "highlights": [
        "Node·Next.js 업그레이드 · 타입 검사·테스트·프로덕션·Docker 빌드 확인",
        "ARM64 러너 전환의 빌드 병목·환경 영향 검토",
        "동료 구현 전후 이미지 빌드·푸시 및 전체 배포 시간 측정"
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
