import { experiences } from "@/content";

export function ExperienceSection() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="career-section">
      <div className="container">
        <header>
          <p className="section-index" aria-hidden="true">01</p>
          <h2 id="experience-title">경력</h2>
        </header>

        <div className="career-list">
          {experiences.map((experience) => (
            <article key={experience.id}>
              <p className="career-period">{experience.period}</p>

              <div className="career-entry">
                <header className="career-entry-heading">
                  <div>
                    <h3>{experience.name}</h3>
                    <p className="career-role">{experience.headline}</p>
                  </div>
                  <p className="career-domain">{experience.role}</p>
                </header>

                <p className="career-summary">{experience.summary}</p>

                <ol className="career-workstreams" aria-label={`${experience.name} 주요 업무`}>
                  {experience.subItems.map((item, index) => (
                    <li key={item.id}>
                      <span className="career-work-index">{String(index + 1).padStart(2, "0")}</span>
                      <div className="career-work-head">
                        <h4>{item.title}</h4>
                        {item.period ? <p className="career-work-period">{item.period}</p> : null}
                      </div>
                      <div className="career-work-body">
                        <p className="career-work-result">{item.summary}</p>
                        {item.highlights.length ? (
                          <ul className="career-work-details">
                            {item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                          </ul>
                        ) : null}
                      </div>
                    </li>
                  ))}
                </ol>

                <div className="career-entry-meta">
                  <p><span>협업</span>{experience.collaboration.join(" · ")}</p>
                  <p><span>기술</span>{experience.techStack.join(" · ")}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
