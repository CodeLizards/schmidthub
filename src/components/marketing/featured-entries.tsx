"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { FileText, Image as ImageIcon, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Chip } from "@/components/ui/chip";
import { SectionHeader } from "@/components/ui/section-header";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { ENTRIES, ENTRY_TYPES, type Entry, type EntryType } from "@/lib/content";

type Filter = "All" | EntryType;

export function FeaturedEntries() {
  const [type, setType] = useState<Filter>("All");
  const [tags, setTags] = useState<Set<string>>(new Set());

  const filtered = useMemo(() => {
    const tagList = [...tags];
    return ENTRIES.filter((e) => {
      if (type !== "All" && e.type !== type) return false;
      if (tagList.length && !tagList.every((t) => e.tags.includes(t))) return false;
      return true;
    });
  }, [type, tags]);

  const toggleTag = (t: string) => {
    setTags((prev) => {
      const next = new Set(prev);
      if (next.has(t)) next.delete(t);
      else next.add(t);
      return next;
    });
  };

  const anyFilterActive = type !== "All" || tags.size > 0;
  const clearAll = () => {
    setType("All");
    setTags(new Set());
  };

  return (
    <section id="portfolio" className="py-20 px-6 max-w-7xl mx-auto">
      <SectionHeader
        heading="Featured IP entries"
        subtitle="Recently added and highly accessed"
        right={
          <Link
            href="/portfolio"
            className="text-sm underline underline-offset-2 text-muted hover:text-ink transition-colors"
          >
            Browse all →
          </Link>
        }
        className="mb-6"
      />

      <div className="flex flex-wrap gap-2 mb-4">
        {ENTRY_TYPES.map((t) => (
          <Chip
            key={t}
            active={t === type}
            tone="outline"
            size="sm"
            onClick={() => setType(t as Filter)}
          >
            {t}
          </Chip>
        ))}
      </div>

      {anyFilterActive && (
        <div className="flex flex-wrap items-center gap-2 mb-6 text-sm">
          <span className="text-xs text-muted/60 font-mono uppercase tracking-[0.08em]">
            {filtered.length} of {ENTRIES.length} shown
          </span>
          {[...tags].map((t) => (
            <Chip key={t} tone="solid" size="xs" onClick={() => toggleTag(t)}>
              {t}
              <X size={11} strokeWidth={2.5} />
            </Chip>
          ))}
          <button
            type="button"
            onClick={clearAll}
            className="text-xs text-muted hover:text-ink underline underline-offset-2 transition-colors"
          >
            Clear all
          </button>
        </div>
      )}

      {filtered.length === 0 ? (
        <Card className="p-10 text-center">
          <p className="text-sm text-muted">
            No entries match those filters.
          </p>
          <button
            type="button"
            onClick={clearAll}
            className="mt-3 text-sm text-ink underline underline-offset-2 hover:no-underline"
          >
            Clear all filters
          </button>
        </Card>
      ) : (
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((e) => (
            <EntryCard
              key={e.id}
              entry={e}
              selectedTags={tags}
              onToggleTag={toggleTag}
            />
          ))}
        </ul>
      )}
    </section>
  );
}

function EntryCard({
  entry,
  selectedTags,
  onToggleTag,
}: {
  entry: Entry;
  selectedTags: Set<string>;
  onToggleTag: (t: string) => void;
}) {
  return (
    <Card
      as="li"
      interactive
      className="group h-full flex flex-col overflow-hidden"
    >
      <div className="p-5 flex flex-col gap-3 flex-1">
        <PlaceholderImage
          label={entry.type}
          fixedHeight="h-36"
          className="mb-1 shrink-0"
          overlay={
            <div className="absolute top-2 left-2 z-10">
              <Chip tone="solid" size="xs" className="tracking-wide uppercase font-medium">
                {entry.subject}
              </Chip>
            </div>
          }
        />

        <span className="text-xs text-muted/60 leading-snug">{entry.org}</span>

        <Link href={`/portfolio/${entry.id}`} className="block">
          <h3 className="font-serif font-normal text-ink text-xl leading-snug group-hover:text-black transition-colors">
            {entry.title}
          </h3>
        </Link>

        <p className="text-sm text-muted leading-relaxed line-clamp-3">
          {entry.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
          {entry.tags.map((t) => (
            <Chip
              key={t}
              active={selectedTags.has(t)}
              tone="soft"
              size="xs"
              onClick={() => onToggleTag(t)}
            >
              {t}
            </Chip>
          ))}
        </div>

        <div className="flex items-center gap-4 pt-2 border-t border-gray-100 mt-1">
          <span className="flex items-center gap-1 text-xs text-muted/60">
            <FileText size={12} strokeWidth={2} />
            {entry.docs} doc{entry.docs === 1 ? "" : "s"}
          </span>
          <span className="flex items-center gap-1 text-xs text-muted/60">
            <ImageIcon size={12} strokeWidth={2} />
            {entry.images} image{entry.images === 1 ? "" : "s"}
          </span>
        </div>
      </div>
    </Card>
  );
}
