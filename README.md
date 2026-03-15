# 유종석 포트폴리오

Next.js App Router로 만든 단일 페이지 포트폴리오 사이트입니다.  
카카오페이 실무 경험, 대표 프로젝트 3개, 학력 및 자격 정보, 연락처를 한 흐름 안에서 보여주는 데 초점을 맞췄습니다.

## 개요

- 프레임워크: Next.js 16, React 19, TypeScript
- 스타일링: Tailwind CSS
- 인터랙션: Framer Motion
- 콘텐츠 관리 방식: `content/` 중심의 정적 데이터 구동 구조
- 페이지 형태: `/` 단일 페이지

이 저장소는 블로그나 CMS형 사이트가 아니라, 구조화된 포트폴리오 내용을 정적으로 렌더링하는 프론트엔드 프로젝트입니다.  
실제 소개 문구, 경력, 프로젝트 설명, 링크, 기술 스택, 연락처는 대부분 `content/`에서 관리합니다.

## 주요 특징

- `Intro -> Summary -> Timeline -> Experience -> Projects -> Skills -> Activities -> Education -> Contact` 순서의 원페이지 구성
- `content/`에 타입과 데이터를 분리해 두어 텍스트 수정과 구조 변경이 비교적 단순함
- 대표 프로젝트와 기타 프로젝트를 분리해 시각적 위계를 명확히 구성
- `app/sitemap.ts`, `app/robots.ts`, `app/opengraph-image.tsx`, `components/seo/structured-data.tsx`로 SEO 기본 요소 제공
- `references/collected/`의 이미지와 README 자료를 활용해 프로젝트 미리보기 화면 구성
- 접근성 고려 요소 포함: skip link, focus-visible 스타일, reduced motion 대응, 시맨틱 섹션 구조

## 기술 스택

### Runtime / Framework

- Next.js 16
- React 19
- TypeScript 5

### UI / Styling

- Tailwind CSS 3
- tailwindcss-animate
- class-variance-authority
- clsx
- tailwind-merge
- lucide-react

### Motion / Interaction

- framer-motion

## 페이지 구성

현재 메인 페이지는 [app/page.tsx](/home/dbwhd/portfolio/app/page.tsx)에서 아래 순서로 렌더링됩니다.

1. Intro
2. Summary
3. Timeline
4. Experience
5. Selected Project
6. Other Projects
7. Skills
8. Activities
9. Education
10. Contact

실제 조립은 [components/portfolio/portfolio-page.tsx](/home/dbwhd/portfolio/components/portfolio/portfolio-page.tsx)에서 담당합니다.

## 디렉터리 구조

```text
.
├── app/                    # App Router 엔트리, 메타데이터, sitemap, robots, OG 이미지
├── components/
│   ├── layout/             # 헤더, 푸터, 로고
│   ├── portfolio/          # 각 섹션 UI
│   ├── seo/                # JSON-LD 구조화 데이터
│   └── ui/                 # 공통 UI(Button, Reveal)
├── content/                # 포트폴리오 데이터와 타입 정의
├── lib/                    # 유틸리티, 사이트 URL 해석
├── references/
│   ├── collected/          # 프로젝트별 수집 이미지/README
│   └── repos/              # 원본 저장소 사본 참고용, lint/typecheck 제외
├── spec.md                 # 포트폴리오 원천 스펙 문서
├── research.md             # 방향성/리서치 메모
├── plan.md                 # 구현 계획 문서
└── README.md
```

## 콘텐츠 구조

이 프로젝트의 핵심은 UI보다 `content/`입니다.

- [content/intro.ts](/home/dbwhd/portfolio/content/intro.ts): 이름, 역할, 소개 문구, CTA
- [content/experiences.ts](/home/dbwhd/portfolio/content/experiences.ts): 경력 데이터
- [content/projects.ts](/home/dbwhd/portfolio/content/projects.ts): 대표/기타 프로젝트 데이터
- [content/education.ts](/home/dbwhd/portfolio/content/education.ts): 학력, 수료, 자격, 어학
- [content/skills.ts](/home/dbwhd/portfolio/content/skills.ts): 기술 그룹
- [content/navigation.ts](/home/dbwhd/portfolio/content/navigation.ts): 헤더 내비게이션
- [content/links.ts](/home/dbwhd/portfolio/content/links.ts): 인트로/프로젝트 외부 링크
- [content/media.ts](/home/dbwhd/portfolio/content/media.ts): 프로젝트 미리보기 이미지 매핑
- [content/contact.ts](/home/dbwhd/portfolio/content/contact.ts): 연락처 정보
- [content/types.ts](/home/dbwhd/portfolio/content/types.ts): 전체 콘텐츠 타입

텍스트를 바꾸고 싶을 때는 컴포넌트보다 `content/`를 먼저 수정하는 것이 좋습니다.

## 실행 방법

### 요구 사항

- Node.js `>= 20.9.0`
- pnpm `10.30.0`

### 설치

```bash
corepack enable
pnpm install
```

### 개발 서버

```bash
pnpm dev
```

기본 주소는 `http://localhost:3000`입니다.

### 프로덕션 빌드

```bash
pnpm build
pnpm start
```

## 사용 가능한 스크립트

```bash
pnpm dev        # 개발 서버 실행
pnpm build      # 프로덕션 빌드
pnpm start      # 빌드 결과 실행
pnpm lint       # ESLint 검사
pnpm typecheck  # TypeScript 타입 검사
```

## 환경 변수

현재 필수 환경 변수는 많지 않지만, canonical URL과 SEO 메타데이터를 정확히 만들려면 사이트 URL 설정이 유용합니다.

사용되는 값은 [lib/site-url.ts](/home/dbwhd/portfolio/lib/site-url.ts)에서 아래 우선순위로 해석됩니다.

1. `NEXT_PUBLIC_SITE_URL`
2. `URL`
3. `DEPLOY_PRIME_URL`
4. `DEPLOY_URL`
5. `http://localhost:3000`

예시:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## 스타일 시스템

- 전역 스타일은 [app/globals.css](/home/dbwhd/portfolio/app/globals.css)에 있습니다.
- 색상과 radius는 CSS 변수 기반으로 관리합니다.
- Tailwind 설정은 [tailwind.config.ts](/home/dbwhd/portfolio/tailwind.config.ts)에 있습니다.
- `Reveal` 컴포넌트가 스크롤 진입 애니메이션을 담당하며, reduced motion 환경에서는 애니메이션을 생략합니다.

## SEO / 메타데이터

- [app/layout.tsx](/home/dbwhd/portfolio/app/layout.tsx): 기본 metadata, Open Graph, Twitter 카드
- [app/opengraph-image.tsx](/home/dbwhd/portfolio/app/opengraph-image.tsx): 동적 OG 이미지 생성
- [app/robots.ts](/home/dbwhd/portfolio/app/robots.ts): robots.txt
- [app/sitemap.ts](/home/dbwhd/portfolio/app/sitemap.ts): sitemap.xml
- [components/seo/structured-data.tsx](/home/dbwhd/portfolio/components/seo/structured-data.tsx): `Person`, `WebSite` JSON-LD

## 프로젝트 자료와 참고 문서

이 저장소에는 실제 포트폴리오 사이트 코드 외에도 작성 보조 자료가 포함되어 있습니다.

- [spec.md](/home/dbwhd/portfolio/spec.md): 원천 이력/프로젝트 스펙 정리
- [research.md](/home/dbwhd/portfolio/research.md): 포트폴리오 방향성 메모
- [plan.md](/home/dbwhd/portfolio/plan.md): 정보 구조와 섹션 설계 문서
- `references/collected/`: 프로젝트별 이미지, README, 시연 자료
- `references/repos/`: 원본 저장소 참고 사본

`references/repos/`는 `.gitignore`, ESLint, TypeScript 검사 대상에서 제외되어 있으며, 현재 사이트 빌드에는 직접 포함되지 않습니다.

## 배포 메모

- [netlify.toml](/home/dbwhd/portfolio/netlify.toml)에 Netlify 빌드 명령이 설정되어 있습니다.
- 빌드 명령은 `pnpm build`입니다.
- 정적 자산은 현재 `references/collected/`에서 직접 import하고 있습니다.

## 수정 가이드

### 새 프로젝트를 추가하려면

1. [content/projects.ts](/home/dbwhd/portfolio/content/projects.ts)에 데이터 추가
2. 필요하면 [content/links.ts](/home/dbwhd/portfolio/content/links.ts)에 저장소 링크 추가
3. 미리보기 이미지가 있으면 `references/collected/`에 파일 추가
4. [content/media.ts](/home/dbwhd/portfolio/content/media.ts)에 이미지 매핑 추가
5. 필요하면 [content/activity-highlights.ts](/home/dbwhd/portfolio/content/activity-highlights.ts)에 협업/기록 하이라이트 추가

### 섹션 순서를 바꾸려면

- [components/portfolio/portfolio-page.tsx](/home/dbwhd/portfolio/components/portfolio/portfolio-page.tsx)의 렌더링 순서를 수정
- 헤더 메뉴도 함께 바꾸려면 [content/navigation.ts](/home/dbwhd/portfolio/content/navigation.ts)을 수정

### 연락처를 바꾸려면

- [content/contact.ts](/home/dbwhd/portfolio/content/contact.ts)만 수정하면 화면과 구조화 데이터에 함께 반영됩니다.

## 검증

개발 중 아래 명령으로 기본 검증을 수행할 수 있습니다.

```bash
pnpm typecheck
pnpm lint
pnpm build
```
