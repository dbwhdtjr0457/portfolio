import type { IntroContent } from "@/content/types";

export const introContent: IntroContent = {
  name: "유종석",
  role: "프론트엔드 개발자",
  headline: [
    "시도는 과감하게,",
    "검증은 집요하게.",
  ],
  topline: "메시징 SDK · 관리자 웹 · 3D 웹",
  summary:
    "신규 메시징 SDK와 관리자 웹의 초기 구축에 참여하며, 늦은 응답·재연결·인증 만료처럼 상태가 꼬이는 상황을 규칙과 테스트로 고정해 온 프론트엔드 개발자",
  highlights: [
    {
      id: "highlight-sdk",
      label: "Messaging Web SDK",
      value: "신규 구축·beta 전달",
      detail: "기반 모듈 → 공개 API → 연동 문서",
    },
    {
      id: "highlight-admin",
      label: "Admin Web V2",
      value: "1차 운영 전환 참여",
      detail: "초기 아키텍처·운영 핵심 화면",
    },
    {
      id: "highlight-tests",
      label: "회귀 검증",
      value: "테스트 195개 · PR CI",
      detail: "테스트 없던 리뉴얼에 자동 실행",
    },
    {
      id: "highlight-research",
      label: "SleepNow · KCC 2024",
      value: "F1-score 0.9538",
      detail: "8명·4일 사용자 스터디 평균",
    },
  ],
  ctas: [
    {
      id: "go-experience",
      label: "경력 보기",
      href: "#experience",
      variant: "primary",
    },
    {
      id: "github",
      label: "GitHub",
      href: "https://github.com/dbwhdtjr0457",
      variant: "secondary",
    },
    {
      id: "email",
      label: "이메일",
      href: "mailto:dbwhdtjr0457@gmail.com",
      variant: "secondary",
    },
  ],
};
