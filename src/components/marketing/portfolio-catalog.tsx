"use client";

import { useMemo, useState } from "react";
import { Card } from "@/components/ui/card";
import { Chip } from "@/components/ui/chip";
import { EntryCard } from "@/components/marketing/entry-card";
import { PORTFOLIO_ENTRIES, PORTFOLIO_LICENSES } from "@/lib/content";

const SUBJECTS = [...new Set(PORTFOLIO_ENTRIES.map((entry) => entry.subject))].sort();
const ENTITIES = [...new Set(PORTFOLIO_ENTRIES.map((entry) => entry.org))].sort();
const TAGS = [...new Set(PORTFOLIO_ENTRIES.flatMap((entry) => entry.tags))].sort();

function toggleSelection(value: string, selected: Set<string>, update: (next: Set<string>) => void) {
  const next = new Set(selected);
  if (next.has(value)) next.delete(value);
  else next.add(value);
  update(next);
}

function FilterSection({
  title,
  values,
  selected,
  onToggle,
}: {
  title: string;
  values: readonly string[];
  selected: Set<string>;
  onToggle: (value: string) => void;
}) {
  return (
    <details className="border-b border-border py-3">
      <summary className="cursor-pointer text-sm font-medium text-ink flex items-center justify-between">
        {title}
        {selected.size > 0 && <span className="text-xs text-muted">{selected.size}</span>}
      </summary>
      <div className="flex flex-col gap-2 pt-3">
        {values.map((value) => (
          <label key={value} className="flex items-start gap-2 text-sm text-muted cursor-pointer">
            <input
              type="checkbox"
              checked={selected.has(value)}
              onChange={() => onToggle(value)}
              className="mt-1 accent-ink"
            />
            <span>{value}</span>
          </label>
        ))}
      </div>
    </details>
  );
}

export function PortfolioCatalog() {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<"newest" | "az">("newest");
  const [view, setView] = useState<"grid" | "list">("grid");
  const [subjects, setSubjects] = useState<Set<string>>(new Set());
  const [entities, setEntities] = useState<Set<string>>(new Set());
  const [licenses, setLicenses] = useState<Set<string>>(new Set());
  const [tags, setTags] = useState<Set<string>>(new Set());

  const filtered = useMemo(() => {
    const term = query.trim().toLocaleLowerCase();
    const matches = PORTFOLIO_ENTRIES.filter((entry) => {
      if (subjects.size && !subjects.has(entry.subject)) return false;
      if (entities.size && !entities.has(entry.org)) return false;
      if (licenses.size && !licenses.has(entry.license)) return false;
      if (tags.size && ![...tags].every((tag) => entry.tags.includes(tag))) return false;
      if (!term) return true;
      return [entry.title, entry.description, entry.org, entry.type, entry.subject, entry.license, ...entry.tags]
        .some((value) => value.toLocaleLowerCase().includes(term));
    });
    return sort === "az" ? matches.sort((a, b) => a.title.localeCompare(b.title)) : matches;
  }, [query, sort, subjects, entities, licenses, tags]);

  const hasFilters = Boolean(query.trim() || subjects.size || entities.size || licenses.size || tags.size);
  const clearFilters = () => {
    setQuery("");
    setSubjects(new Set());
    setEntities(new Set());
    setLicenses(new Set());
    setTags(new Set());
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-12 lg:py-16" aria-label="Portfolio catalog">
      <div className="flex flex-col lg:flex-row gap-8">
        <aside className="lg:w-64 lg:shrink-0" aria-label="Portfolio controls">
          <div className="space-y-5">
            <label className="block">
              <span className="block text-xs font-mono uppercase tracking-[0.08em] text-muted mb-2">Search</span>
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search IP, tags, org..."
                className="w-full rounded border border-border bg-white px-3 py-2 text-sm text-ink placeholder:text-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
              />
            </label>

            <label className="block">
              <span className="block text-xs font-mono uppercase tracking-[0.08em] text-muted mb-2">Sort</span>
              <select
                value={sort}
                onChange={(event) => setSort(event.target.value as "newest" | "az")}
                className="w-full rounded border border-border bg-white px-3 py-2 text-sm text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
              >
                <option value="newest">Newest first</option>
                <option value="az">A → Z</option>
              </select>
            </label>

            <div>
              <p className="text-xs font-mono uppercase tracking-[0.08em] text-muted mb-2">View</p>
              <div className="flex gap-2" role="group" aria-label="Portfolio view">
                {(["grid", "list"] as const).map((option) => (
                  <Chip key={option} tone="outline" active={view === option} onClick={() => setView(option)}>
                    {option === "grid" ? "Grid" : "List"}
                  </Chip>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-mono uppercase tracking-[0.08em] text-muted mb-1">Filter by</p>
              <FilterSection title="Subject Matter" values={SUBJECTS} selected={subjects} onToggle={(value) => toggleSelection(value, subjects, setSubjects)} />
              <FilterSection title="Entity" values={ENTITIES} selected={entities} onToggle={(value) => toggleSelection(value, entities, setEntities)} />
              <FilterSection title="License types" values={PORTFOLIO_LICENSES} selected={licenses} onToggle={(value) => toggleSelection(value, licenses, setLicenses)} />
              <FilterSection title="Tags" values={TAGS} selected={tags} onToggle={(value) => toggleSelection(value, tags, setTags)} />
              {hasFilters && (
                <button type="button" onClick={clearFilters} className="mt-4 text-sm text-ink underline underline-offset-2 hover:no-underline">
                  Clear all filters →
                </button>
              )}
            </div>
          </div>
        </aside>

        <div className="min-w-0 flex-1">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-2">
            <p role="status" className="text-sm text-muted">{filtered.length} sample {filtered.length === 1 ? "entry" : "entries"} found</p>
            {hasFilters && <span className="text-xs text-muted">Showing matching wireframe samples</span>}
          </div>

          {filtered.length === 0 ? (
            <Card className="p-10 text-center">
              <p className="text-sm text-muted">No entries match those filters.</p>
              <button type="button" onClick={clearFilters} className="mt-3 text-sm text-ink underline underline-offset-2 hover:no-underline">
                Clear all filters
              </button>
            </Card>
          ) : (
            <ul className={view === "grid" ? "grid sm:grid-cols-2 xl:grid-cols-3 gap-4" : "flex flex-col gap-4"}>
              {filtered.map((entry) => (
                <EntryCard
                  key={entry.id}
                  entry={entry}
                  selectedTags={tags}
                  onToggleTag={(tag) => toggleSelection(tag, tags, setTags)}
                  view={view}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
