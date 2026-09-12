import { Hero3D } from "@/components/portfolio/hero-3d";
import { Reveal } from "@/components/ui/reveal";
import { introContent } from "@/content";

export function IntroSection() {
  return <section id="intro" aria-labelledby="intro-title" aria-describedby="intro-description" className="portfolio-cover">
    <div className="container">
      <Reveal><div className="cover-topline"><span>{introContent.name} / {introContent.role}</span><span>관리자 웹 · 메시징 Web SDK · 3D</span></div>
        <h1 id="intro-title" className="cover-title"><span>{introContent.headline[0]}</span><span className="cover-title-second">{introContent.headline[1]}</span></h1>
      </Reveal>
      <div className="cover-bottom">
        <Reveal className="cover-introduction"><div id="intro-description">{introContent.description.map(text=><p key={text}>{text}</p>)}</div>
          <div className="cover-links"><a href="#experience">경력 보기 <span aria-hidden="true">↓</span></a><a href="#projects">작업 보기</a></div>
        </Reveal>
        <aside className="cover-object" aria-label="프론트엔드 개발자 유종석의 3D 명함"><Hero3D /></aside>
      </div>
    </div>
  </section>;
}
