"use client";

import Link from "next/link";
import { useRef, useState, type KeyboardEvent } from "react";
import { Building2, CalendarDays, ChevronRight, FileText } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Chip } from "@/components/ui/chip";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { EntryCard } from "@/components/marketing/entry-card";
import type { Entry } from "@/lib/content";

const TABS = ["Description", "Inventors", "Licensing", "Attachments"] as const;
type DetailTab = (typeof TABS)[number];

export function EntryDetail({ entry, related }: { entry: Entry; related: Entry[] }) {
  const [tab, setTab] = useState<DetailTab>("Description");
  const [figure, setFigure] = useState(1);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const needsContact = entry.license === "Commercial License";

  function handleTabKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % TABS.length;
    else if (event.key === "ArrowLeft") next = (index - 1 + TABS.length) % TABS.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = TABS.length - 1;
    else return;
    event.preventDefault();
    setTab(TABS[next]);
    tabRefs.current[next]?.focus();
  }

  return (
    <article className="max-w-7xl mx-auto px-6 pt-10 pb-20">
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-muted mb-9">
        <Link href="/portfolio" className="hover:text-ink underline-offset-2 hover:underline">Portfolio</Link>
        <ChevronRight size={14} aria-hidden />
        <span className="truncate" aria-current="page">{entry.title}</span>
      </nav>

      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px]">
        <div className="min-w-0">
          <Chip tone="solid" size="xs" className="uppercase tracking-wide font-medium">{entry.subject}</Chip>
          <h1 className="mt-5 font-serif font-normal text-4xl md:text-[40px] leading-[1.1] tracking-[-0.02em] text-ink">{entry.title}</h1>
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
            <span className="inline-flex items-center gap-1.5"><Building2 size={14} aria-hidden />{entry.org}</span>
            <span className="inline-flex items-center gap-1.5"><CalendarDays size={14} aria-hidden />Filed {entry.filed}</span>
          </div>

          <div role="tablist" aria-label="Entry details" className="mt-10 flex gap-1 overflow-x-auto border-b border-border">
            {TABS.map((name, index) => (
              <button
                key={name}
                ref={(element) => { tabRefs.current[index] = element; }}
                id={`entry-tab-${name.toLowerCase()}`}
                type="button"
                role="tab"
                aria-selected={tab === name}
                aria-controls="entry-tab-panel"
                tabIndex={tab === name ? 0 : -1}
                onClick={() => setTab(name)}
                onKeyDown={(event) => handleTabKeyDown(event, index)}
                className={`shrink-0 px-4 py-3 text-sm border-b-2 transition-colors ${tab === name ? "border-ink text-ink font-medium" : "border-transparent text-muted hover:text-ink"}`}
              >
                {name}
              </button>
            ))}
          </div>

          <div id="entry-tab-panel" role="tabpanel" aria-labelledby={`entry-tab-${tab.toLowerCase()}`} className="pt-8 min-h-40">
            {tab === "Description" && (
              <div>
                <div className="space-y-5 text-sm leading-7 text-muted">
                  {(entry.detail?.description ?? [entry.description]).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
                <div className="flex flex-wrap gap-2 mt-7">
                  {entry.tags.map((tag) => <Chip key={tag} size="xs">{tag}</Chip>)}
                </div>
                <div className="mt-9">
                  <h2 className="text-xs font-mono uppercase tracking-[0.08em] text-muted mb-3">Gallery</h2>
                  <PlaceholderImage label={`Figure ${figure}`} fixedHeight="h-64 sm:h-[420px]" />
                  {entry.images > 1 && (
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 mt-3">
                      {Array.from({ length: entry.images }, (_, index) => index + 1).map((number) => (
                        <button
                          key={number}
                          type="button"
                          aria-label={`View figure ${number}`}
                          aria-pressed={figure === number}
                          onClick={() => setFigure(number)}
                          className={`rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink ${figure === number ? "ring-2 ring-ink" : ""}`}
                        >
                          <PlaceholderImage label={`Figure ${number}`} fixedHeight="h-20 sm:h-28" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {tab === "Inventors" && (
              entry.detail?.inventors.length ? (
                <div className="space-y-3">
                  {entry.detail.inventors.map((inventor) => (
                    <Card key={inventor.name} className="flex items-center gap-4 p-5">
                      <span aria-hidden className="flex size-12 shrink-0 items-center justify-center rounded-full bg-panel text-sm font-medium text-ink">
                        {inventor.name.replace(/^(Dr\.|Prof\.)\s*/, "").split(" ").map((part) => part[0]).join("")}
                      </span>
                      <div>
                        <h2 className="font-medium text-ink">{inventor.name}</h2>
                        <p className="text-sm text-muted">{inventor.role}</p>
                        <p className="text-sm text-muted">{inventor.affiliation}</p>
                      </div>
                    </Card>
                  ))}
                </div>
              ) : <p className="text-sm text-muted">Inventor or author details are not available for this sample entry.</p>
            )}

            {tab === "Licensing" && (
              <Card className="p-6">
                <Chip tone="solid" size="sm">{entry.license}</Chip>
                <p className="mt-4 text-sm leading-6 text-muted">
                  This license label appears in the wireframe sample. Full terms are unavailable in this proof of concept, so this page does not grant usage rights or provide license acceptance.
                </p>
                <Link href="/licensing" className="inline-block mt-5 text-sm text-ink underline underline-offset-2 hover:no-underline">Compare license types →</Link>
              </Card>
            )}

            {tab === "Attachments" && (
              <div className="space-y-3">
                {Array.from({ length: entry.detail?.attachments.length ?? entry.docs }, (_, index) => {
                  const attachment = entry.detail?.attachments[index];
                  return (
                    <Card key={index} className="flex items-center gap-4 p-4">
                      <FileText size={22} className="shrink-0 text-muted" aria-hidden />
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium text-ink">{attachment?.name ?? `Sample document ${index + 1}`}</p>
                        <p className="text-xs text-muted">{attachment ? `${attachment.format} · ${attachment.size}` : "Document preview"}</p>
                      </div>
                      <span className="text-xs text-muted">Unavailable</span>
                    </Card>
                  );
                })}
                <p className="text-xs text-muted">Files cannot be accessed in this proof of concept.</p>
              </div>
            )}
          </div>
        </div>

        <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start" aria-label="IP access and details">
          <Card className="p-6">
            <p className="text-xs font-mono uppercase tracking-[0.08em] text-muted">Access this IP</p>
            <h2 className="font-serif text-xl leading-snug text-ink mt-2 mb-5">{entry.title}</h2>
            <button type="button" disabled className="w-full rounded bg-ink px-4 py-3 text-sm font-semibold text-white opacity-70 cursor-not-allowed">
              {needsContact ? "Contact IP holder" : "Download / Access"}
            </button>
            <p className="mt-3 text-center text-xs text-muted">Unavailable in this proof of concept</p>
          </Card>

          <Card className="p-5">
            <h2 className="text-xs font-mono uppercase tracking-[0.08em] text-muted mb-4">Details</h2>
            <dl className="space-y-3 text-xs">
              <div className="flex justify-between gap-3"><dt className="text-muted">Type</dt><dd className="text-right text-ink">{entry.type}</dd></div>
              <div className="flex justify-between gap-3"><dt className="text-muted">Filed</dt><dd className="text-right text-ink">{entry.filed}</dd></div>
              <div className="flex justify-between gap-3"><dt className="text-muted">Organization</dt><dd className="text-right text-ink">{entry.org}</dd></div>
              <div className="flex justify-between gap-3"><dt className="text-muted">License</dt><dd className="text-right text-ink">{entry.license}</dd></div>
              <div className="flex justify-between gap-3"><dt className="text-muted">Entry ID</dt><dd className="text-right text-ink">{entry.id}</dd></div>
            </dl>
          </Card>

          <Card className="p-5">
            <h2 className="text-xs font-mono uppercase tracking-[0.08em] text-muted mb-3">Contact IP holder</h2>
            <p className="text-sm leading-6 text-muted">Have questions about licensing terms? Contact will be available through SHIP when messaging is enabled.</p>
            <button type="button" disabled className="mt-4 w-full rounded border border-border px-4 py-2 text-sm text-muted cursor-not-allowed">Send message (unavailable)</button>
          </Card>
        </aside>
      </div>

      {related.length > 0 && (
        <section className="mt-16" aria-labelledby="related-entries-heading">
          <h2 id="related-entries-heading" className="font-serif text-3xl text-ink mb-6">Related entries</h2>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {related.map((item) => <EntryCard key={item.id} entry={item} />)}
          </ul>
        </section>
      )}
    </article>
  );
}
