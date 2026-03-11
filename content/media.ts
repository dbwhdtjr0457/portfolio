import type { StaticImageData } from "next/image";

import byeolsoopFeatureConstellation from "@/references/collected/byeolsoop/feature-constellation.png";
import byeolsoopFeatureNightSky from "@/references/collected/byeolsoop/feature-night-sky.png";
import byeolsoopFeatureYearView from "@/references/collected/byeolsoop/feature-year-view.png";
import byeolsoopIntroShot from "@/references/collected/byeolsoop/intro-shot.png";
import pongGameplayShot from "@/references/collected/pong/in-game-screenshot.png";
import sleepNowMainScreen from "@/references/collected/sleep-now/main-screen.png";

type MediaAsset = {
  src: StaticImageData;
  alt: string;
  caption: string;
};

export const introPreviewMedia: MediaAsset = {
  src: byeolsoopIntroShot,
  alt: "별숲 프로젝트 화면",
  caption: "대표 프로젝트 미리보기",
};

export const featuredProjectMedia: MediaAsset[] = [
  {
    src: byeolsoopFeatureNightSky,
    alt: "별숲 밤하늘 화면",
    caption: "3D 밤하늘 화면",
  },
  {
    src: byeolsoopFeatureConstellation,
    alt: "별숲 별자리 연결 화면",
    caption: "별 연결 화면",
  },
  {
    src: byeolsoopFeatureYearView,
    alt: "별숲 기록 화면",
    caption: "기록 모아보기",
  },
];

export const projectPreviewMedia: Record<string, MediaAsset> = {
  "sleep-now": {
    src: sleepNowMainScreen,
    alt: "Sleep Now 메인 화면",
    caption: "메인 화면",
  },
  pong: {
    src: pongGameplayShot,
    alt: "PONG 게임 화면",
    caption: "인게임 화면",
  },
};
