import { Badge } from "@/components/ui/badge";
import type { TagListProps } from "@/lib/types";

export default function TagList({ title, tags }: TagListProps) {
    return (
      <section className="mt-8" aria-labelledby={`taglist-${title.toLowerCase().replace(/\s+/g, '-')}`}>
        <h2 
          id={`taglist-${title.toLowerCase().replace(/\s+/g, '-')}`}
          className="text-white text-lg font-semibold mb-4"
        >
          {title}
        </h2>
        <div 
          className="flex flex-wrap gap-3"
          role="list"
          aria-label={`${title} tags`}
        >
          {tags.map((tag) => (
            <Badge
              key={tag}
              className="bg-gray-800 text-white hover:bg-gray-700 cursor-pointer"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </section>
    );
  }
  