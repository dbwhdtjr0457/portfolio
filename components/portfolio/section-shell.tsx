import { Reveal } from "@/components/ui/reveal";

type SectionShellProps = {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
};

export function SectionShell({
  id,
  eyebrow,
  title,
  description,
  children,
}: SectionShellProps) {
  const titleId = `${id}-title`;
  const descriptionId = description ? `${id}-description` : undefined;

  return (
    <section
      id={id}
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      className="scroll-mt-24 border-b border-border/65 py-16 sm:py-24"
    >
      <Reveal className="container space-y-10">
        <header className="max-w-3xl space-y-4">
          {eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              {eyebrow}
            </p>
          ) : null}
          <h2
            id={titleId}
            className="text-3xl font-semibold tracking-tight text-foreground sm:text-[2.2rem]"
          >
            {title}
          </h2>
          {description ? (
            <p
              id={descriptionId}
              className="max-w-[60ch] text-[15px] leading-7 text-muted-foreground sm:text-base"
            >
              {description}
            </p>
          ) : null}
        </header>
        {children}
      </Reveal>
    </section>
  );
}
