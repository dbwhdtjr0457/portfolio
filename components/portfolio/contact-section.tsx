import { contactContent } from "@/content";

export function ContactSection() {
  const titleLines = contactContent.title.split("\n");

  return <section id="contact" aria-labelledby="contact-title" className="contact-section"><div className="container"><div className="contact-heading"><p className="section-index" aria-hidden="true">05</p><h2 id="contact-title">{titleLines.map((line, index) => <span key={line}>{line}{index < titleLines.length - 1 ? <br /> : null}</span>)}</h2><div className="contact-links"><a href={`mailto:${contactContent.email}`}>{contactContent.email}<span aria-hidden="true">↗</span></a><a href={contactContent.github} target="_blank" rel="noreferrer">{contactContent.github.replace("https://", "")}<span aria-hidden="true">↗</span></a></div></div></div></section>;
}
