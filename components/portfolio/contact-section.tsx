import { contactContent } from "@/content";
import { Button } from "@/components/ui/button";
import { SectionShell } from "@/components/portfolio/section-shell";

export function ContactSection() {
  return (
    <SectionShell
      id="contact"
      eyebrow="Contact"
      title={contactContent.title}
      description={contactContent.description}
    >
      <div className="grid gap-5 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <article className="rounded-[2rem] border border-border/70 bg-card p-6 sm:p-8">
          <div className="space-y-4">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Email
            </p>
            <a
              href={`mailto:${contactContent.email}`}
              className="break-all text-2xl font-semibold tracking-tight text-foreground transition-colors hover:text-primary sm:text-[2rem]"
            >
              {contactContent.email}
            </a>
            {contactContent.note ? (
              <p className="text-sm leading-7 text-muted-foreground">
                {contactContent.note}
              </p>
            ) : null}
          </div>
        </article>

        <article className="rounded-[2rem] border border-border/70 bg-card p-6 sm:p-8">
          <div className="flex h-full flex-col justify-between gap-6">
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-foreground">
                메일로 가장 빠르게 확인합니다.
              </h3>
              <p className="text-sm leading-7 text-muted-foreground">
                채용, 협업, 프로젝트 관련 문의를 보내주시면 확인 후 답변드리겠습니다.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <a href={`mailto:${contactContent.email}`}>이메일 보내기</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#intro">상단으로 이동</a>
              </Button>
            </div>
          </div>
        </article>
      </div>
    </SectionShell>
  );
}
