"use client";

import { useMemo, useState } from "react";
import { FileText, Image as ImageIcon, X } from "lucide-react";
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
      <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
        <div>
          <h2 className="font-serif font-normal text-3xl text-ink tracking-[-0.02em] leading-tight">
            Featured IP entries
          </h2>
          <p className="text-sm text-muted/60 mt-1 font-mono">
            Recently added and highly accessed
          </p>
        </div>
        <a
          href="#browse-all"
          className="text-sm underline underline-offset-2 text-muted hover:text-ink transition-colors"
        >
          Browse all →
        </a>
      </div>

      {/* Type filter tabs */}
      <div className="flex flex-wrap gap-2 mb-4">
        {ENTRY_TYPES.map((t) => {
          const active = t === type;
          return (
            <button
              key={t}
              type="button"
              onClick={() => setType(t as Filter)}
              className={
                "px-3 py-1.5 text-sm rounded transition-colors " +
                (active
                  ? "bg-ink text-white"
                  : "text-muted hover:text-ink hover:bg-white border border-border")
              }
            >
              {t}
            </button>
          );
        })}
      </div>

      {/* Active tag chips + clear */}
      {(tags.size > 0 || anyFilterActive) && (
        <div className="flex flex-wrap items-center gap-2 mb-6 text-sm">
          <span className="text-xs text-muted/60 font-mono uppercase tracking-[0.08em]">
            {filtered.length} of {ENTRIES.length} shown
          </span>
          {[...tags].map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => toggleTag(t)}
              className="inline-flex items-center gap-1 text-[11px] bg-ink text-white px-2 py-0.5 rounded"
            >
              {t}
              <X size={11} strokeWidth={2.5} />
            </button>
          ))}
          {anyFilterActive && (
            <button
              type="button"
              onClick={clearAll}
              className="text-xs text-muted hover:text-ink underline underline-offset-2 transition-colors"
            >
              Clear all
            </button>
          )}
        </div>
      )}

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="border border-border rounded bg-white p-10 text-center">
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
        </div>
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
    <li className="group h-full bg-white border border-border hover:border-gray-400 rounded transition-all duration-200 hover:shadow-sm flex flex-col overflow-hidden">
      <div className="p-5 flex flex-col gap-3 flex-1">
        {/* Placeholder image with subject badge */}
        <div className="relative w-full h-36 rounded overflow-hidden bg-gray-100 mb-1 shrink-0 border border-gray-200">
          <svg
            className="absolute inset-0 w-full h-full text-gray-200"
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
            aria-hidden
          >
            <line x1="0" y1="0" x2="100" y2="100" stroke="currentColor" strokeWidth="1" vectorEffect="non-scaling-stroke" />
            <line x1="100" y1="0" x2="0" y2="100" stroke="currentColor" strokeWidth="1" vectorEffect="non-scaling-stroke" />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-[10px] font-normal text-muted/60 uppercase tracking-[0.08em] px-2 text-center leading-relaxed">
            {entry.type}
          </span>
          <div className="absolute top-2 left-2 z-10">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium tracking-wide uppercase bg-ink text-white border border-ink">
              {entry.subject}
            </span>
          </div>
        </div>

        <div className="flex items-center">
          <span className="text-xs text-muted/60 leading-snug">{entry.org}</span>
        </div>

        <a href={`#entry-${entry.id}`} className="block">
          <h3 className="font-serif font-normal text-ink text-xl leading-snug group-hover:text-black transition-colors">
            {entry.title}
          </h3>
        </a>

        <p className="text-sm text-muted leading-relaxed line-clamp-3">
          {entry.description}
        </p>

        {/* Clickable tags */}
        <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
          {entry.tags.map((t) => {
            const active = selectedTags.has(t);
            return (
              <button
                key={t}
                type="button"
                onClick={() => onToggleTag(t)}
                aria-pressed={active}
                className={
                  "text-[11px] px-2 py-0.5 rounded border transition-colors " +
                  (active
                    ? "bg-ink text-white border-ink"
                    : "text-muted bg-gray-100 border-gray-200 hover:text-ink hover:border-gray-400")
                }
              >
                {t}
              </button>
            );
          })}
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
    </li>
  );
}
