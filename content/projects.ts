import { externalLinks } from "@/content/links";
import type { Project } from "@/content/types";

const byeolsoopLink = externalLinks.find(
  (link) => link.id === "byeolsoop-github-footer",
);
const sleepNowLink = externalLinks.find(
  (link) => link.id === "sleep-now-github-footer",
);
const pongLink = externalLinks.find((link) => link.id === "pong-github-footer");

export const featuredProject: Project = {
  id: "byeolsoop",
  kind: "project",
  name: "별숲",
  headline: "3D 별자리 다이어리",
  role: "프론트엔드",
  projectType: "팀 프로젝트",
  summary:
    "R3F 기반 3D 밤하늘 UX와 카메라 이동, API 처리 규칙, React-Query 공통화, SPA 내비게이션 설계를 다룬 프로젝트입니다.",
  description:
    "3D 인터랙션과 데이터 처리, 상태 설계를 함께 설명할 수 있는 프로젝트로, 포트폴리오의 대표 프로젝트로 두기 적절합니다.",
  highlights: [
    "OrbitControls와 sphereGeometry를 활용해 밤하늘 UX를 구성했습니다.",
    "더블클릭 시점 이동에서 여러 대안을 비교한 뒤 카메라 위치 이동 방식을 선택했습니다.",
    "상태 코드 기반 API 처리 규칙과 401 재발급/재시도 흐름을 정리했습니다.",
    "React-Query 처리 중복을 공통화해 유지보수성을 높였습니다.",
    "SPA 이동에서 freshness 우선 설계를 선택했습니다.",
  ],
  techStack: [
    "React",
    "TypeScript",
    "Three.js",
    "React-Three-Fiber",
    "OrbitControls",
    "React-Query",
    "Recoil",
  ],
  links: byeolsoopLink ? [byeolsoopLink] : [],
  featuredReason:
    "3D UX, 카메라 이동, API 처리 규칙, 상태 설계를 하나의 프로젝트 안에서 함께 설명할 수 있어 대표 프로젝트로 적합합니다.",
  note: "프로젝트 기간 정보는 spec 기준으로 불확실합니다.",
};

export const otherProjects: Project[] = [
  {
    id: "sleep-now",
    kind: "project",
    name: "Sleep Now!",
    headline: "수면 직전 감지 및 스마트폰 사용 중재 앱",
    role: "React Native 개발",
    projectType: "프로젝트",
    summary:
      "센서 기반 예측과 notifee 알림 중재, 포그라운드 서비스 운영을 중심으로 한 모바일 앱입니다.",
    description:
      "센서 수집, 실시간 예측, 알림 중재를 하나의 흐름으로 구성한 프로젝트입니다.",
    highlights: [
      "실시간 예측 서비스 모드와 데이터 수집 모드를 구분해 설계했습니다.",
      "센서 데이터를 수집하고 개인 맞춤 모델 수립 흐름을 다뤘습니다.",
      "notifee를 활용한 소리·진동 알림 중재와 포그라운드 서비스 운영을 다뤘습니다.",
    ],
    techStack: [
      "React Native",
      "react-native-sensors",
      "notifee",
      "Decision Tree",
      "Firebase Firestore",
    ],
    links: sleepNowLink ? [sleepNowLink] : [],
    note: "정확도 기록과 실제 오판단 사례가 함께 있어 표현 수위는 추가 확인이 필요합니다.",
  },
  {
    id: "pong",
    kind: "project",
    name: "PONG! PONG! PONG!",
    headline: "로컬/온라인 PONG 게임 서비스",
    role: "프론트엔드",
    projectType: "프로젝트",
    summary:
      "대시보드 모달 UI와 API 연결, Three.js 그래픽, 로컬 WebSocket, 게임 계산 로직을 맡은 게임 프로젝트입니다.",
    description:
      "서비스 기능과 플레이 경험을 함께 다룬 실시간 게임 프로젝트입니다.",
    highlights: [
      "대시보드 모달 UI와 API 연결을 구현했습니다.",
      "Three.js 기반 3D 그래픽과 애니메이션을 담당했습니다.",
      "로컬 게임 WebSocket 통신과 게임 계산 로직, 파워업 구현을 맡았습니다.",
    ],
    techStack: ["JavaScript", "Bootstrap", "Three.js", "WebSocket"],
    links: pongLink ? [pongLink] : [],
    note: "프로젝트 기간 정보는 spec 기준으로 불확실합니다.",
  },
];
