import { Badge } from "@/components/ui/badge";

interface TagListProps {
  items: string[];
}

export function TagList({ items }: TagListProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <Badge key={item} variant="subtle" className="normal-case tracking-normal">
          {item}
        </Badge>
      ))}
    </div>
  );
}
