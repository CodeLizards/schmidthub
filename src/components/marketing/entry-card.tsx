import Link from "next/link";
import { FileText, Image as ImageIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Chip } from "@/components/ui/chip";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import type { Entry } from "@/lib/content";

export function EntryCard({
  entry,
  selectedTags,
  onToggleTag,
  view = "grid",
}: {
  entry: Entry;
  selectedTags?: Set<string>;
  onToggleTag?: (tag: string) => void;
  view?: "grid" | "list";
}) {
  return (
    <Card
      as="li"
      interactive
      className={`group relative h-full overflow-hidden ${view === "list" ? "sm:flex" : "flex flex-col"}`}
    >
      <Link
        href={`/portfolio/${entry.id}`}
        className="absolute inset-0 z-10 rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
      >
        <span className="sr-only">{entry.title}</span>
      </Link>
      <div className={`p-5 ${view === "list" ? "sm:w-56 sm:shrink-0" : ""}`}>
        <PlaceholderImage
          label={entry.type}
          fixedHeight="h-36"
          overlay={
            <div className="absolute top-2 left-2 z-10">
              <Chip tone="solid" size="xs" className="tracking-wide uppercase font-medium">
                {entry.subject}
              </Chip>
            </div>
          }
        />
      </div>

      <div className={`p-5 pt-0 flex flex-col gap-3 flex-1 ${view === "list" ? "sm:pt-5" : ""}`}>
        <span className="text-xs text-muted leading-snug">{entry.org}</span>

        <h3 className="font-serif font-normal text-ink text-xl leading-snug group-hover:text-black transition-colors">
          {entry.title}
        </h3>

        <p className="text-sm text-muted leading-relaxed line-clamp-3">
          {entry.description}
        </p>

        <div className="pointer-events-none relative z-20 flex flex-wrap gap-1.5 mt-auto pt-2">
          {entry.tags.map((tag) => (
            <Chip
              key={tag}
              active={selectedTags?.has(tag)}
              tone="soft"
              size="xs"
              className={onToggleTag ? "pointer-events-auto" : ""}
              onClick={onToggleTag ? () => onToggleTag(tag) : undefined}
            >
              {tag}
            </Chip>
          ))}
        </div>

        <div className="flex items-center gap-4 pt-2 border-t border-gray-100 mt-1">
          <span className="flex items-center gap-1 text-xs text-muted">
            <FileText size={12} strokeWidth={2} />
            {entry.docs} doc{entry.docs === 1 ? "" : "s"}
          </span>
          <span className="flex items-center gap-1 text-xs text-muted">
            <ImageIcon size={12} strokeWidth={2} />
            {entry.images} image{entry.images === 1 ? "" : "s"}
          </span>
        </div>
      </div>
    </Card>
  );
}
