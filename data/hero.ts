import type { HeroContent } from "@/lib/types/portfolio-content";
import { siteIdentity } from "@/data/site-meta";

export const heroContent: HeroContent = {
  eyebrow: "안전한 변경에 강한 프론트엔드",
  name: siteIdentity.name,
  nickname: siteIdentity.nickname,
  role: "프론트엔드",
  positioning: "운영 중인 서비스를 더 안전하게 바꾸는 프론트엔드",
  supportingPoints: [
    "구현 전에 대안을 실제로 비교하고 한계를 검증해 팀 의사결정 품질을 높인다.",
    "상태 신선도, 에러 처리, API 흐름 공통화처럼 유지보수에 직접 연결되는 설계를 우선한다.",
    "문서화와 협업 구조화를 통해 불확실한 요구사항을 빠르게 정리한다.",
  ],
};
