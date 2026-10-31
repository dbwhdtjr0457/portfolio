import { Hero3D } from "@/components/portfolio/hero-3d";
import { Reveal } from "@/components/ui/reveal";
import { introContent } from "@/content";

export function IntroSection() {
  return <section id="intro" aria-labelledby="intro-title" aria-describedby="intro-description" className="portfolio-cover">
    <div className="container">
      <Reveal><div className="cover-topline"><span>{introContent.name} / {introContent.role}</span><span>{introContent.topline}</span></div>
        <h1 id="intro-title" className="cover-title"><span>{introContent.headline[0]}</span><span className="cover-title-second">{introContent.headline[1]}</span></h1>
      </Reveal>
      <div className="cover-bottom">
        <Reveal className="cover-introduction">
          <p id="intro-description" className="cover-summary">{introContent.summary}</p>
          <ul className="cover-proof" aria-label="주요 성과">{introContent.highlights.map(item => <li key={item.id}>
            <span>{item.label}</span><strong>{item.value}</strong><p>{item.detail}</p>
          </li>)}</ul>
          <div className="cover-links">{introContent.ctas.map(cta => {
            const external = cta.href.startsWith("http");
            return <a key={cta.id} href={cta.href} className={cta.variant === "primary" ? "cover-link-primary" : undefined} {...(external ? { target: "_blank", rel: "noreferrer" } : {})}>
              {cta.label} <span aria-hidden="true">{cta.href.startsWith("#") ? "↓" : "↗"}</span>
            </a>;
          })}</div>
        </Reveal>
        <aside className="cover-object" aria-label="프론트엔드 개발자 유종석의 3D 명함"><Hero3D /></aside>
      </div>
    </div>
  </section>;
}
