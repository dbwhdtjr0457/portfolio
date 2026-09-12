import Image from "next/image";

import { CompanyCases, CaseNarrative } from "@/components/portfolio/company-case";
import { LinkGroup } from "@/components/portfolio/link-group";
import { AnimatedDetails } from "@/components/ui/animated-details";
import { Reveal } from "@/components/ui/reveal";
import { byeolsoopCase } from "@/content/case-studies";
import { featuredProject, featuredProjectMedia, otherProjects, projectPreviewMedia } from "@/content";

export function WorkGallery() {
  return <section id="projects" aria-labelledby="work-title" className="curated-work">
    <div className="container">
      <Reveal><header className="work-section-heading"><div className="work-heading-title"><p className="section-index" aria-hidden="true">02</p><h2 id="work-title">실무 사례</h2></div><p className="section-scope"><span>Chatplanet · 메시지 병합 / 복구 경합</span><span>카카오페이 · 메시지 작성 / 예약 관리</span></p></header></Reveal>
      <div className="company-case-list"><CompanyCases /></div>

      <div className="personal-work">
        <Reveal><header className="work-section-heading personal-heading"><div className="work-heading-title"><p className="section-index" aria-hidden="true">03</p><h2>개인 프로젝트</h2></div><p className="section-scope"><span>3D 인터랙션 · WebSocket 게임</span><span>센서 기반 모바일 앱</span></p></header></Reveal>

        <Reveal className="project-spotlight">
          <article>
            <div className="spotlight-art"><Image src={featuredProjectMedia[0]!.src} alt={featuredProjectMedia[0]!.alt} sizes="(max-width: 768px) 86vw, 520px" className="spotlight-image spotlight-image-main" /><div className="spotlight-stack">{featuredProjectMedia.slice(1).map(media => <Image key={media.alt} src={media.src} alt={media.alt} sizes="(max-width: 768px) 42vw, 220px" className="spotlight-image" />)}</div></div>
            <div className="spotlight-copy"><p className="project-kind">대표 프로젝트 · 3D 인터랙션</p><h3>{featuredProject.name}</h3><p className="spotlight-title">{featuredProject.headline}</p><p className="spotlight-summary">{featuredProject.summary}</p><CaseNarrative story={byeolsoopCase} />
              <AnimatedDetails label="사용한 기술과 코드 보기" className="work-details"><div className="detail-body"><p>{featuredProject.techStack.join(" · ")}</p><div className="mt-5"><LinkGroup links={featuredProject.links} /></div></div></AnimatedDetails>
            </div>
          </article>
        </Reveal>

        <Reveal><section className="project-archive" aria-labelledby="archive-title"><header><p className="section-index">프로젝트 목록</p><h3 id="archive-title">그 밖의 프로젝트</h3></header><div className="archive-list">{otherProjects.map(project => {
          const media = projectPreviewMedia[project.id] ?? [];
          return <article key={project.id} className={`archive-project archive-${project.id}`}>
            <div className="archive-art">{media.map(item => <Image key={item.alt} src={item.src} alt={item.alt} sizes="(max-width: 768px) 88vw, 260px" />)}</div>
            <div className="archive-copy"><p className="project-kind">{project.projectType}</p><h4>{project.name}</h4><p>{project.summary}</p><p className="archive-tech">{project.techStack.join(" · ")}</p><AnimatedDetails label="구현 내용 보기" className="work-details"><div className="detail-body"><ul>{project.highlights.map(highlight => <li key={highlight}>{highlight}</li>)}</ul><div className="mt-5"><LinkGroup links={project.links} /></div></div></AnimatedDetails></div>
          </article>;
        })}</div></section></Reveal>
      </div>
    </div>
  </section>;
}
