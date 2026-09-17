"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { ArrowUpRight, Download, FileText, Globe2, Layers, Search, Shield, X } from "lucide-react";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { RESOURCES, type Resource, type ResourceCategory } from "@/lib/resources";

const TOPICS = [
  { category: "Template", title: "Templates", description: "Pre-filled forms and starter documents to speed up your first submission.", Icon: FileText },
  { category: "Document", title: "Documents", description: "Full agreements, checklists, and guides ready to attach or fill in.", Icon: Layers },
  { category: "Provision", title: "Provisions", description: "Reusable legal clauses you can drop straight into a license agreement.", Icon: Shield },
  { category: "Reference", title: "References", description: "External sites and comparison tools for choosing the right license.", Icon: Globe2 },
] as const;

const CATEGORIES: ("All" | ResourceCategory)[] = ["All", "Document", "Provision", "Reference", "Template"];

function ResourceRow({ resource, onUnavailable }: { resource: Resource; onUnavailable: (title: string) => void }) {
  const label = resource.action === "download" ? "Download" : resource.action === "external" ? "Visit Site" : "View Page";
  const actionClass = "col-start-2 sm:col-start-auto justify-self-start inline-flex items-center justify-center gap-1.5 rounded border border-border bg-white px-3 py-1.5 text-xs text-muted hover:border-gray-400 hover:text-ink";

  return <article className="rounded border border-border bg-white p-5 grid grid-cols-[15px_minmax(0,1fr)] sm:grid-cols-[15px_minmax(0,1fr)_auto] items-start gap-4">
    <FileText size={15} strokeWidth={1.5} aria-hidden="true" className="mt-1 shrink-0 text-muted/60" />
    <div className="min-w-0 flex-1">
      <div className="flex flex-wrap items-center gap-2 mb-3">
        <span className="rounded bg-ink px-2 py-1 text-[10px] leading-none font-medium uppercase text-white">{resource.category}</span>
        <time dateTime={resource.date} className="text-xs text-muted/75">{resource.date}</time>
      </div>
      <h3 className="font-serif text-base text-ink mb-1">{resource.title}</h3>
      <p className="text-sm leading-relaxed text-muted max-w-xl mb-2">{resource.description}</p>
      <p className="text-xs text-muted/75">{resource.format}</p>
    </div>
    {resource.href ? <a href={resource.href} target="_blank" rel="noopener noreferrer" className={actionClass} aria-label={`${label}: ${resource.title}`}>{label} <ArrowUpRight size={13} aria-hidden="true" /></a> : <button type="button" onClick={() => onUnavailable(resource.title)} className={actionClass} aria-label={`${label}: ${resource.title}`}>
      {resource.action === "download" && <Download size={13} aria-hidden="true" />}{label}{resource.action === "page" && <span aria-hidden="true">→</span>}
    </button>}
  </article>;
}

export function ResourcesCatalog() {
  const [draft, setDraft] = useState("");
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<"All" | ResourceCategory>("All");
  const [unavailable, setUnavailable] = useState("");

  const filtered = RESOURCES.filter((resource) =>
    (category === "All" || resource.category === category) &&
    (!query || [resource.title, resource.description, resource.category, resource.format].some((value) => value.toLocaleLowerCase().includes(query)))
  );

  const search = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setQuery(draft.trim().toLocaleLowerCase());
    document.getElementById("resource-results")?.scrollIntoView?.();
  };

  const chooseTopic = (topic: ResourceCategory) => {
    setCategory(topic);
    document.getElementById("resource-results")?.scrollIntoView?.();
  };

  return <div className="font-[Arial]">
    <section className="border-b border-border bg-white px-6 pt-16 pb-16 md:pt-[70px] md:pb-16 text-center">
      <p className="text-xs uppercase tracking-[0.12em] text-muted mb-6">Resources</p>
      <h1 className="font-serif font-normal text-5xl md:text-6xl leading-[1.03] tracking-[-0.025em] text-ink max-w-3xl mx-auto mb-5">Templates, provisions, and<br className="hidden md:block" /> references in one place</h1>
      <p className="text-lg leading-relaxed text-muted max-w-2xl mx-auto mb-10">Everything on the paperwork side of submitting and licensing IP — standard license templates, reusable clauses, and external references, free to download.</p>
      <form role="search" onSubmit={search} className="max-w-xl mx-auto flex flex-col sm:flex-row gap-2">
        <label className="relative flex-1 min-w-0"><span className="sr-only">Search templates, clauses, references</span><Search size={17} aria-hidden="true" className="absolute left-4 top-1/2 -translate-y-1/2 text-muted/70" /><input name="search" type="search" autoComplete="off" value={draft} onChange={(event) => setDraft(event.target.value)} placeholder="Search templates, clauses, references…" className="w-full h-12 rounded border border-border bg-white pl-11 pr-4 text-sm text-ink placeholder:text-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink" /></label>
        <button type="submit" className="h-12 rounded bg-ink text-white hover:bg-ink-hover px-5 text-sm font-semibold">Search <span aria-hidden="true" className="ml-2">→</span></button>
      </form>
    </section>

    <div className="bg-[#f8faff]">
      <section className="max-w-7xl mx-auto px-6 pt-20" aria-labelledby="resource-topics-title">
        <div className="text-center mb-12"><p className="text-xs uppercase tracking-[0.1em] text-muted mb-3">Browse by topic</p><h2 id="resource-topics-title" className="font-serif text-3xl text-ink">Find exactly what you need</h2></div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">{TOPICS.map(({ category: topic, title, description, Icon }) => <button key={topic} type="button" onClick={() => chooseTopic(topic)} className="group flex flex-col overflow-hidden rounded-t-lg border-t border-x border-border bg-white text-left hover:border-gray-400 transition-colors">
          <div className="h-[106px] w-full bg-ink flex items-center justify-center"><Icon size={34} strokeWidth={1.5} aria-hidden="true" className="text-white" /></div>
          <div className="p-5 flex-1"><div className="flex items-baseline justify-between gap-2 mb-2"><h3 className="font-serif text-xl text-ink group-hover:underline underline-offset-2">{title}</h3><span className="font-mono text-xs text-muted/60">{RESOURCES.filter((resource) => resource.category === topic).length}</span></div><p className="text-sm leading-relaxed text-muted font-medium">{description}</p></div>
        </button>)}</div>
      </section>

      <section id="resource-results" className="max-w-7xl mx-auto px-6 pt-16 pb-32 scroll-mt-24" aria-label="Resource catalog">
        <div className="flex flex-col md:flex-row gap-6">
          <fieldset className="md:w-52 md:shrink-0 self-start border-b border-border pb-6"><legend className="w-full text-xs uppercase tracking-[0.08em] text-muted mb-5">Category {category !== "All" && <span className="text-ink">[1]</span>} <span aria-hidden="true" className="float-right">−</span></legend>
            <div className="space-y-3 pl-3">{CATEGORIES.map((option) => <label key={option} className={`flex items-center gap-3 text-sm cursor-pointer ${category === option ? "text-ink font-medium" : "text-muted"}`}><input type="radio" name="resource-category" value={option} checked={category === option} onChange={() => setCategory(option)} className="accent-ink" />{option}</label>)}</div>
          </fieldset>
          <div className="min-w-0 flex-1">
            <p role="status" className="text-sm text-muted mb-5">{filtered.length} {filtered.length === 1 ? "resource" : "resources"} · newest first</p>
            {filtered.length ? <div className="space-y-3.5">{filtered.map((resource) => <ResourceRow key={resource.title} resource={resource} onUnavailable={setUnavailable} />)}</div> : <div className="rounded border border-border bg-white p-8"><p className="text-sm text-muted">No resources match your search. Try another term or category.</p><button type="button" onClick={() => { setDraft(""); setQuery(""); setCategory("All"); }} className="text-sm underline underline-offset-4 mt-3">Clear filters</button></div>}
          </div>
        </div>
      </section>
    </div>

    <section className="border-t border-border bg-[#f8faff] px-6 py-12" aria-label="Explore more"><div className="max-w-7xl mx-auto"><p className="text-xs uppercase tracking-[0.1em] text-muted mb-6">Explore more</p><div className="grid md:grid-cols-2 gap-8">
      <Link href="/portfolio" className="group flex flex-col sm:flex-row items-start sm:items-center gap-5"><PlaceholderImage label="Portfolio" fixedHeight="h-24" className="max-w-44 shrink-0" /><div><h3 className="font-serif text-xl group-hover:underline underline-offset-4">Explore our IP portfolio →</h3><p className="text-sm leading-relaxed text-muted mt-2">Browse patents, datasets, software, and designs — filter by subject, entity, and tags to find what you can license.</p></div></Link>
      <Link href="/learning-hub" className="group flex flex-col sm:flex-row items-start sm:items-center gap-5"><PlaceholderImage label="Learning Hub" fixedHeight="h-24" className="max-w-44 shrink-0" /><div><h3 className="font-serif text-xl group-hover:underline underline-offset-4">Understand IP licensing →</h3><p className="text-sm leading-relaxed text-muted mt-2">Plain-language explainers, licensing guidance, and a full glossary of the terms you&apos;ll meet.</p></div></Link>
    </div></div></section>

    {unavailable && <div role="status" className="fixed bottom-6 inset-x-6 sm:left-auto z-50 sm:max-w-sm rounded border border-border bg-white p-4 shadow-lg flex items-start gap-4 text-sm text-ink"><p><strong>{unavailable}</strong> is unavailable for download or viewing in this preview.</p><button type="button" aria-label="Dismiss message" onClick={() => setUnavailable("")} className="shrink-0 text-muted hover:text-ink"><X size={16} /></button></div>}
  </div>;
}
