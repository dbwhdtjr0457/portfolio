# 유종석 포트폴리오

프론트엔드 개발자 유종석의 단일 페이지 포트폴리오입니다.  
제네시스네스트(Chatplanet Messaging Web SDK·Admin Web V2·채팅 웹, 기업 고객의 사내 AI 검색·챗봇 웹)와 카카오페이 마케팅 어드민 경력, 그림으로 푼 실무 사례 5개, 개인 프로젝트, 학력·자격, 연락처를 한 흐름으로 보여줍니다.

배포 주소: `https://portfolio.joyoo-blog.com/`

## 개요

- 프레임워크: Next.js 16 App Router, React 19, TypeScript 5
- 스타일: 편집형 CSS(`app/portfolio-editorial.css`) + Tailwind CSS 3
- 인터랙션: Framer Motion, CSS 3D 명함(`hero-3d`)
- 폰트: Pretendard(`app/fonts/`, 로컬 woff/woff2)
- 콘텐츠: `content/`의 타입이 있는 정적 데이터
- 페이지: `/` 단일 페이지, Netlify 배포

## 페이지 구성

[app/page.tsx](app/page.tsx)가 헤더·본문·푸터를 감싸고, [components/portfolio/portfolio-page.tsx](components/portfolio/portfolio-page.tsx)가 아래 순서로 섹션을 조립합니다.

| 순서 | 섹션 | 컴포넌트 | 주요 데이터 |
| --- | --- | --- | --- |
| 1 | 첫 화면 | `intro-section.tsx` | `content/intro.ts` |
| 2 | 01 경력 | `experience-section.tsx` | `content/experiences.ts` |
| 3 | 02 실무 사례 · 03 개인 프로젝트 | `work-gallery.tsx`, `company-case.tsx`, `case-diagrams.tsx` | `content/case-studies.ts`, `content/projects.ts`, `content/media.ts`, `content/links.ts` |
| 4 | 04 학력·자격 | `background-section.tsx` | `content/education.ts`, `content/timeline.ts` |
| 5 | 연락 | `contact-section.tsx` | `content/contact.ts` |

헤더 메뉴는 [content/navigation.ts](content/navigation.ts)에서 관리합니다.

`components/portfolio/`에는 이전 구성에서 쓰던 섹션 컴포넌트(`summary-section`, `timeline-section`, `skills-section`, `activities-section`, `education-section`, `selected-project-section`, `other-projects-section`)가 남아 있지만 현재 페이지에서는 렌더링하지 않습니다. `content/skills.ts`는 JSON-LD의 `knowsAbout`에만 쓰입니다.

## 콘텐츠 관리

화면 문구는 컴포넌트보다 `content/`를 먼저 수정합니다.

- [content/intro.ts](content/intro.ts): 이름, 역할, 대표 문구, 소개 한 줄, 성과 카드(`highlights`), 첫 화면 링크
- [content/experiences.ts](content/experiences.ts): 회사별 경력과 프로젝트 단위 업무(`subItems`: 제목·선택 `period`·결과 한 줄 `summary`·세부 `highlights`)
- [content/case-studies.ts](content/case-studies.ts): 실무 사례 카드(제목·요약·그림 종류 `diagram`·결과·상세 항목)와 별숲 사례. 그림 안의 문구는 [components/portfolio/case-diagrams.tsx](components/portfolio/case-diagrams.tsx)에 있습니다.
- [content/projects.ts](content/projects.ts): 대표·기타 개인 프로젝트
- [content/education.ts](content/education.ts), [content/timeline.ts](content/timeline.ts): 학력·자격·어학과 전체 이력
- [content/site-metadata.ts](content/site-metadata.ts): 사이트 제목·설명
- [content/types.ts](content/types.ts): 전체 콘텐츠 타입

문구 형식(명사형 카피, `·`/`/`/`→` 사용, 기간 표기, 타이포그래피 토큰)은 [CONTENT_STYLE.md](CONTENT_STYLE.md)를 따릅니다. 회사 업무는 공개 가능한 제품명과 일반화한 표현만 사용하고, 팀 작업과 개인 기여를 구분해 적습니다. 회사 화면 캡처는 쓰지 않고 HTML/CSS 그림으로 설명합니다.

글자 색은 `--text-body`·`--text-muted` 토큰을 써서 베이지 배경에서도 WCAG AA(4.5:1 이상)를 지키고, 기간 표기 등 고정폭 글꼴은 `--font-mono`(한글은 Pretendard로 대체)를 씁니다.

## 디렉터리 구조

```text
.
├── app/                    # App Router 엔트리, 메타데이터, 폰트, sitemap, robots, OG 이미지, 전역·편집 CSS
├── components/
│   ├── layout/             # 헤더, 푸터
│   ├── portfolio/          # 섹션 UI
│   ├── seo/                # JSON-LD 구조화 데이터
│   └── ui/                 # Reveal, AnimatedDetails 등 공통 UI
├── content/                # 포트폴리오 데이터와 타입
├── lib/                    # 유틸리티, 사이트 URL 해석
├── references/
│   ├── collected/          # 프로젝트 이미지·README (사이트에서 직접 import)
│   └── repos/              # 원본 저장소 참고 사본 (git·lint·typecheck 제외)
├── CONTENT_STYLE.md        # 문구·타이포그래피 기준
├── spec.md, research.md, plan.md  # 초기 기획 자료
└── README.md
```

## 실행

요구 사항: Node.js `>= 20.9.0`, pnpm `10.30.0`

```bash
corepack enable
pnpm install
pnpm dev          # http://localhost:3000
```

```bash
pnpm typecheck    # TypeScript 타입 검사
pnpm lint         # ESLint 검사
pnpm build        # 프로덕션 빌드
pnpm start        # 빌드 결과 실행
```

## 환경 변수

canonical URL과 SEO 메타데이터의 사이트 주소는 [lib/site-url.ts](lib/site-url.ts)에서 아래 순서로 정합니다.

1. `NEXT_PUBLIC_SITE_URL`
2. `URL`
3. `DEPLOY_PRIME_URL`
4. `DEPLOY_URL`
5. `http://localhost:3000`

```bash
NEXT_PUBLIC_SITE_URL=https://portfolio.joyoo-blog.com
```

## SEO

- [app/layout.tsx](app/layout.tsx): 기본 metadata, Open Graph, Twitter 카드
- [app/opengraph-image.tsx](app/opengraph-image.tsx): 동적 OG 이미지
- [app/robots.ts](app/robots.ts), [app/sitemap.ts](app/sitemap.ts): robots.txt, sitemap.xml
- [components/seo/structured-data.tsx](components/seo/structured-data.tsx): `Person`, `WebSite` JSON-LD

## 배포

- `main` 브랜치에 push하면 Netlify가 [netlify.toml](netlify.toml)의 `pnpm build`로 빌드해 배포합니다.
- 배포 전에 `pnpm typecheck`, `pnpm lint`, `pnpm build`를 통과시킵니다.
