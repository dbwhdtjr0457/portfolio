import { AnimatedDetails } from "@/components/ui/animated-details";
import { education, timelineItems } from "@/content";

export function BackgroundSection() {
  return <section id="education" aria-labelledby="background-title" className="background-section"><div className="container"><div className="background-intro"><p className="section-index" aria-hidden="true">04</p><h2 id="background-title"><span>경희대학교</span><span>부스트캠프 · 42 Seoul</span></h2><p className="background-scope"><span>소프트웨어융합학과 · 데이터사이언스트랙</span><span>부스트캠프 8기 · 42 Seoul · 팀 웹·모바일 프로젝트</span></p></div><div className="background-record"><h3>학력과 자격</h3><p>경희대학교 소프트웨어융합학과 · {education.score}</p><p>데이터사이언스트랙</p><ul className="credential-list">{["정보처리기사", "TOEIC 940", "TOEIC Speaking 160 (AL)"].map(item => <li key={item}>{item}</li>)}</ul><AnimatedDetails id="timeline" className="experience-details" label="전체 이력 보기"><div className="detail-body">{timelineItems.map(item => <p key={item.id}>{item.period} · {item.title}</p>)}{education.language.slice(0,2).map(item => <p key={item.id}>{item.title} · {item.detail}</p>)}</div></AnimatedDetails></div></div></section>;
}
