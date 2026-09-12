import { projectLinksByEntryId } from "@/content/links";
import type { Project } from "@/content/types";

export const featuredProject: Project = {
  id: "byeolsoop",
  kind: "project",
  name: "별숲",
  headline: "더블클릭한 별 앞으로 카메라 이동",
  role: "프론트엔드",
  projectType: "부스트캠프 멤버십 프로젝트",
  period: "2023.08 — 2023.12",
  summary:
    "React Three Fiber 3D 밤하늘 · 카메라 이동 설계 · 401 재인증 · React Query 공통 처리",
  description:
    "밤하늘 탐색과 별 기록을 결합한 3D 다이어리",
  highlights: [
    "React Three Fiber + OrbitControls · 구 내부 시점의 3D 밤하늘",
    "target 변경·raycasting 비교 → target 고정 + 카메라 위치 이동",
    "401 응답 → 토큰 재발급 → 기존 요청 재전송",
    "반복 React Query 응답 처리의 공통 함수화",
    "뒤로가기·최신 데이터 유지 기준의 화면 이동 비교",
  ],
  techStack: [
    "React",
    "TypeScript",
    "Three.js",
    "React Three Fiber",
    "OrbitControls",
    "React Query",
    "Recoil",
  ],
  links: projectLinksByEntryId.byeolsoop ? [projectLinksByEntryId.byeolsoop] : [],
  featuredReason:
    "카메라 이동 선택 과정 · API 처리 규칙",
};

export const otherProjects: Project[] = [
  {
    id: "sleep-now",
    kind: "project",
    name: "Sleep Now!",
    headline: "센서로 수면 직전을 감지하고 알림을 보내는 앱",
    role: "React Native 개발",
    projectType: "대학 프로젝트",
    summary:
      "수면 직전 감지 · 스마트폰 사용 중단 알림",
    description:
      "스마트폰 센서 · 개인별 예측 모델 · 소리·진동 알림",
    highlights: [
      "스마트폰 센서 데이터 + 사용자 라벨 · 개인별 Decision Tree 모델",
      "Foreground Service 센서 수집 · notifee 소리·진동 알림",
      "8명 대상 4일 사용자 스터디 · 평균 F1-score 0.9538 · KCC 2024 포스터 발표",
    ],
    techStack: [
      "React Native",
      "react-native-sensors",
      "notifee",
      "Decision Tree",
      "Firebase Firestore",
    ],
    links: projectLinksByEntryId["sleep-now"]
      ? [projectLinksByEntryId["sleep-now"]]
      : [],
  },
  {
    id: "pong",
    kind: "project",
    name: "PONG! PONG! PONG!",
    headline: "Three.js와 WebSocket으로 만든 PONG 게임",
    role: "프론트엔드",
    projectType: "42 Seoul 프로젝트",
    period: "2024.02 — 2024.05",
    summary:
      "Three.js 게임 화면 · 로컬 대전 WebSocket · 계산 로직",
    description:
      "로컬·온라인 PONG · 플레이 화면과 대시보드",
    highlights: [
      "대시보드 모달 UI · API 연결 (통계 탭 제외)",
      "Three.js 3D 게임 화면 · 애니메이션",
      "로컬 게임 WebSocket · 계산 로직 · 파워업",
    ],
    techStack: ["JavaScript", "Bootstrap", "Three.js", "WebSocket"],
    links: projectLinksByEntryId.pong ? [projectLinksByEntryId.pong] : [],
  },
];
