import type { AdditionalProject } from "@/lib/types/portfolio-content";

export const additionalProjects: AdditionalProject[] = [
  {
    slug: "kakaopay-point-operations",
    title: "카카오페이포인트 및 운영 백로그 대응",
    organization: "카카오페이",
    role: "FE 인턴",
    summary:
      "운영 중 기능의 일관성과 기존 동작 보존을 우선하면서 디자인 시스템, 정책, 종료 대응을 반영한 운영성 작업 묶음.",
    context:
      "디자인 시스템, 가이드, 정책, 서비스 종료 같은 외부 요인으로 운영 중인 화면에 지속적인 변경이 필요했다.",
    tech: ["React", "TypeScript"],
    evidenceLinks: [],
    notes: [
      "여러 운영성 과제를 묶은 사례라 단일 기능보다 작업 원칙과 대응 방식 중심으로 다룬다.",
    ],
    highlights: [
      "서비스 종료에 따른 진입점 교체를 반영했다.",
      "상세 내역 수입/지출 토글 반영 과정에서 유관 팀 컴포넌트를 활용하고 협업했다.",
      "디자인 시스템 버전 업그레이드와 신규 가이드 기반 에러 페이지 교체를 수행했다.",
      "기존 동작과 코드 일관성을 최대한 유지하고, 불확실한 요구사항은 빠르게 확정했다.",
    ],
  },
  {
    slug: "kakaopay-gauntlet-coupon-ui",
    title: "건틀렛 쿠폰 UI 변경",
    organization: "카카오페이",
    role: "FE 인턴",
    summary:
      "새로운 쿠폰 홀 디자인을 기존 반응형 UI 제약 안에서 구현하기 위해 CSS와 SVG를 실제로 비교한 사례.",
    context:
      "기존 반응형 리스트 UI 안에서 시안에 맞는 쿠폰 형태를 구현해야 했고, 구현 방식마다 완성도와 왜곡 문제가 달랐다.",
    tech: ["CSS", "SVG"],
    evidenceLinks: [],
    notes: [
      "내부 디자인 자산과 화면은 공개 범위가 불명확해 설명을 일반화했다.",
    ],
    highlights: [
      "CSS 방식은 모서리 디테일 재현에 한계가 있었다.",
      "SVG 방식은 유동 너비에서 반응형 왜곡이 발생했다.",
      "최대 너비를 고정해 SVG 왜곡을 줄이는 방향으로 팀 논의 후 결정했다.",
      "체크 컬러 변경과 클릭 영역 확대 같은 부가 UX 개선도 함께 반영했다.",
    ],
  },
  {
    slug: "pong-pong-pong",
    title: "PONG! PONG! PONG!",
    organization: "PONG! PONG! PONG!",
    role: "FE",
    summary:
      "로컬/온라인 모드를 지원하는 게임 서비스에서 대시보드 UI, Three.js 그래픽, 로컬 WebSocket, 게임 계산 로직을 맡은 프로젝트.",
    context:
      "하나의 화면으로 즐기는 로컬 모드와 여러 PC로 진행하는 온라인 모드를 제공하는 PONG 게임 서비스.",
    tech: ["JavaScript", "Bootstrap", "Three.js", "WebSocket"],
    evidenceLinks: [
      {
        label: "PONG GitHub",
        href: "https://github.com/authenticity-house/ft_transcendence",
        type: "github",
      },
    ],
    notes: [
      "문제 정의와 검증 서사보다 구현 범위와 실시간 상호작용 경험을 보여주는 보조 프로젝트로 배치한다.",
    ],
    highlights: [
      "사용자 대시보드 모달 UI와 API 연결을 담당했다.",
      "Three.js 기반 3D 그래픽과 애니메이션을 구현했다.",
      "로컬 게임 WebSocket 연결 및 통신을 맡았다.",
      "게임 계산 로직과 파워업 구현으로 플레이 경험 완성에 기여했다.",
    ],
  },
  {
    slug: "sleep-now",
    title: "Sleep Now!",
    organization: "Sleep Now!",
    role: "추가 확인 필요",
    summary:
      "센서 기반 예측과 알림 중재를 결합해 수면 직전 스마트폰 사용을 줄이려는 모바일 프로젝트.",
    context:
      "잠들기 직전 스마트폰 사용이 증가하는 문제를 보고, 사용 자제를 직접 유도하는 형태의 서비스를 정의했다.",
    tech: [
      "React Native",
      "react-native-sensors",
      "notifee",
      "react-native-async-storage",
      "nodejs-decision-tree",
    ],
    evidenceLinks: [
      {
        label: "Sleep Now GitHub",
        href: "https://github.com/dbwhdtjr0457/SleepNow",
        type: "github",
      },
    ],
    notes: [
      "프로젝트 문서에는 95% 이상의 정확도 기록이 있으나, 실험 조건 설명이 없는 상태라 전면 성과 문구로 사용하지 않는다.",
      "개인 역할 범위는 추가 확인이 필요하다.",
    ],
    highlights: [
      "가속도, 자이로, 자기장, 조도 센서를 활용한 실시간 판단 흐름을 구성했다.",
      "개인 맞춤 Decision Tree 모델을 세우는 방향으로 설계했다.",
      "Foreground Service와 notification을 이용해 사용 중재 흐름을 구현했다.",
      "오판단 사례를 인지하고 모델 고도화와 서비스 운영 개선 방향을 이슈로 관리했다.",
    ],
  },
];
