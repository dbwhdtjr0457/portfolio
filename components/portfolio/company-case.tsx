import { companyCases } from "@/content/case-studies";
import { CaseDiagram } from "@/components/portfolio/case-diagrams";
import { Reveal } from "@/components/ui/reveal";
import { AnimatedDetails } from "@/components/ui/animated-details";

export function CaseNarrative({ story }: { story: { problem: string; choice: string; reason: string; result: string } }) {
  return <div className="case-narrative">{[
    ["문제", story.problem], ["선택", `${story.choice} / ${story.reason}`], ["검증", story.result],
  ].map(([label, text]) => <div key={label}><h4>{label}</h4><p>{text}</p></div>)}</div>;
}

export function CompanyCases() {
  return <>{companyCases.map((item, index) => <Reveal key={item.id} className="work-featured">
    <article className={`company-case case-${item.id}`}>
      <header className="company-case-heading"><span className="case-number">CASE {String(index + 1).padStart(2, "0")}</span><p>{item.org}</p><h3>{item.product}</h3><dl><div><dt>역할</dt><dd>{item.role}</dd></div><div><dt>기간</dt><dd>{item.period}</dd></div></dl></header>
      <div className="company-case-story"><div className="case-scope"><span>담당 범위</span><p>{item.scope}</p></div><p className="case-feature-label">대표 구현</p><h4>{item.title}</h4><p className="case-brief">{item.brief}</p><CaseDiagram kind={item.diagram} />
        <p className="case-result"><span>결과</span>{item.result}</p>
        <AnimatedDetails label="구현과 검증 보기" className="work-details case-details"><div className="case-detail-notes">{item.details.map(detail => <p key={detail.label}><span>{detail.label}</span>{detail.text}</p>)}<p className="case-tech">{item.tags}</p></div></AnimatedDetails>
      </div>
    </article>
  </Reveal>)}</>;
}
