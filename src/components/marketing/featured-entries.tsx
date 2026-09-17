"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { X } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Chip } from "@/components/ui/chip";
import { SectionHeader } from "@/components/ui/section-header";
import { EntryCard } from "@/components/marketing/entry-card";
import { ENTRIES, ENTRY_TYPES, type EntryType } from "@/lib/content";

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

      <div role="group" aria-label="Filter by IP type" className="flex flex-wrap gap-2 mb-4">
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

      <p role="status" className="sr-only">{filtered.length} of {ENTRIES.length} entries shown</p>

      {anyFilterActive && (
        <div className="flex flex-wrap items-center gap-2 mb-6 text-sm">
          <span className="text-xs text-muted font-mono uppercase tracking-[0.08em]">
            {filtered.length} of {ENTRIES.length} shown
          </span>
          {[...tags].map((t) => (
            <Chip key={t} active tone="solid" size="xs" onClick={() => toggleTag(t)}>
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
