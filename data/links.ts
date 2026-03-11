import type { LinksContent } from "@/lib/types/portfolio-content";
import { siteIdentity } from "@/data/site-meta";

export const linksContent: LinksContent = {
  contacts: [
    {
      label: siteIdentity.email,
      href: `mailto:${siteIdentity.email}`,
      type: "email",
    },
  ],
  proofLinks: [
    {
      label: "Sleep Now GitHub",
      href: "https://github.com/dbwhdtjr0457/SleepNow",
      type: "github",
    },
    {
      label: "별숲 GitHub",
      href: "https://github.com/boostcampwm2023/web08-ByeolSoop",
      type: "github",
    },
    {
      label: "PONG GitHub",
      href: "https://github.com/authenticity-house/ft_transcendence",
      type: "github",
    },
  ],
  notes: [
    "카카오페이 관련 사례는 공개 저장소 링크가 없다.",
    "영문명 표기 방식과 추가 공개 링크는 별도 확인이 필요하다.",
  ],
};
