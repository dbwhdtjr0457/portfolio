import type { ActivityHighlight } from "@/content";

type ActivityHighlightsListProps = {
  items: ActivityHighlight[];
  title?: string;
};

export function ActivityHighlightsList({
  items,
  title = "협업 · 기록",
}: ActivityHighlightsListProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <div className="space-y-3 rounded-3xl border border-border/80 bg-secondary/45 p-5">
      <p className="text-sm font-semibold text-foreground">{title}</p>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item.id} className="space-y-1">
            <p className="text-sm font-medium text-foreground">{item.title}</p>
            <p className="text-sm leading-6 text-muted-foreground">
              {item.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
