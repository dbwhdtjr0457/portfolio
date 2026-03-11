type TagListProps = {
  items: string[];
};

export function TagList({ items }: TagListProps) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
