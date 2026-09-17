"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { ArrowUpRight, Award, FileText, LockKeyhole, Search } from "lucide-react";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { LEARNING_RESOURCES, type LearningResource } from "@/lib/learning";

const TOPICS = [
  { title: "What is IP?", description: "Patents, copyright, trade secrets, and trademarks — what each protects and for how long.", count: "4 types", href: "/topics/what-is-ip", Icon: Award },
  { title: "Licensing options", description: "From fully open to negotiated commercial terms, and how to choose between them.", count: "5 licenses", href: "/licensing", Icon: LockKeyhole },
  { title: "IP Glossary", description: "Every legal term you will meet on the platform, defined in plain language.", count: "15 terms", href: "/glossary", Icon: FileText },
];

export function LearningHub() {
  const [draft, setDraft] = useState("");
  const [query, setQuery] = useState("");
  const [categories, setCategories] = useState<Set<LearningResource["category"]>>(new Set());

  const search = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setQuery(draft.trim().toLocaleLowerCase());
    document.getElementById("learning-resources")?.scrollIntoView?.();
  };
  const toggleCategory = (category: LearningResource["category"]) => {
    setCategories((current) => {
      const next = new Set(current);
      if (next.has(category)) next.delete(category);
      else next.add(category);
      return next;
    });
  };
  const filtered = LEARNING_RESOURCES.filter((resource) =>
    (!categories.size || categories.has(resource.category)) &&
    (!query || [resource.title, resource.description, resource.category].some((field) => field.toLocaleLowerCase().includes(query)))
  );

  return <>
    <section className="border-b border-border bg-white px-6 pt-16 pb-16 md:pt-18 md:pb-16 text-center">
      <p className="text-xs uppercase tracking-[0.12em] text-muted mb-6">IP Learning Hub</p>
      <h1 className="font-serif font-normal text-5xl md:text-6xl leading-[1.03] tracking-[-0.025em] text-ink max-w-3xl mx-auto mb-6">Everything about<br className="hidden md:block" /> intellectual property in one<br className="hidden md:block" /> place</h1>
      <p className="text-lg leading-relaxed text-muted max-w-2xl mx-auto mb-9">Explainers, licensing guidance, reports, and the full glossary — whether you are about to submit your first entry or negotiate commercial terms.</p>
      <form role="search" onSubmit={search} className="max-w-xl mx-auto flex flex-col sm:flex-row gap-2">
        <label className="relative flex-1 min-w-0"><span className="sr-only">Search guides, reports, articles</span><Search size={17} aria-hidden="true" className="absolute left-4 top-1/2 -translate-y-1/2 text-muted/70" /><input name="search" type="search" autoComplete="off" value={draft} onChange={(event) => setDraft(event.target.value)} placeholder="Search guides, reports, articles…" className="w-full h-12 rounded border border-border bg-white pl-11 pr-4 text-sm text-ink placeholder:text-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink" /></label>
        <button type="submit" className="h-12 rounded bg-ink text-white hover:bg-ink-hover px-5 text-sm font-semibold">Search <span aria-hidden="true" className="ml-2">→</span></button>
      </form>
    </section>

    <div className="bg-[#f8faff]">
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-20" aria-labelledby="topics-title">
        <div className="text-center mb-12"><p className="text-xs uppercase tracking-[0.1em] text-muted mb-3">Browse by topic</p><h2 id="topics-title" className="font-serif text-3xl text-ink">Find exactly what you need</h2></div>
        <div className="grid md:grid-cols-3 gap-4">{TOPICS.map(({ title, description, count, href, Icon }) => <Link key={title} href={href} className="group flex flex-col min-h-52 rounded border border-border bg-white p-6 hover:border-gray-400 hover:shadow-sm transition-colors">
          <div className="flex justify-between text-muted/70 mb-6"><Icon size={17} strokeWidth={1.6} aria-hidden="true" /><ArrowUpRight size={16} strokeWidth={1.6} aria-hidden="true" className="group-hover:text-ink" /></div>
          <h3 className="font-serif text-xl text-ink mb-2">{title}</h3><p className="text-sm leading-relaxed text-muted mb-5">{description}</p><span className="mt-auto text-xs text-muted">{count}</span>
        </Link>)}</div>
      </section>

      <section id="learning-resources" className="max-w-7xl mx-auto px-6 pb-32" aria-labelledby="resources-title">
        <p className="text-xs uppercase tracking-[0.1em] text-muted mb-3">Learning Resources</p>
        <h2 id="resources-title" className="font-serif text-3xl text-ink mb-8">Reports and IP learning</h2>
        <div className="flex flex-col md:flex-row gap-6">
          <aside className="md:w-52 md:shrink-0" aria-label="Resource filters">
            <details open className="border-b border-border pb-6"><summary className="cursor-pointer text-xs uppercase tracking-[0.08em] text-muted flex justify-between list-none">Category {categories.size > 0 && <span>[{categories.size}]</span>}<span aria-hidden="true">−</span></summary>
              <div className="mt-5 space-y-3">{(["Report", "IP Learning"] as const).map((category) => <label key={category} className="flex items-center gap-3 cursor-pointer text-sm text-muted"><input name="category" value={category} type="checkbox" checked={categories.has(category)} onChange={() => toggleCategory(category)} className="accent-ink" />{category}</label>)}</div>
            </details>
          </aside>
          <div className="min-w-0 flex-1">
            <p role="status" className="text-sm text-muted mb-4">{filtered.length} {filtered.length === 1 ? "resource" : "resources"}{(categories.size > 0 || query) && " · filtered"}</p>
            {filtered.length ? <div className="border-t border-border">{filtered.map((resource) => <article key={resource.slug} className="border-b border-border"><Link href={`/insights/${resource.slug}`} className="block py-6 group hover:bg-white/60 transition-colors">
              <p className="text-xs uppercase tracking-[0.08em] text-muted mb-3">{resource.category} · {resource.date}</p>
              <h3 className="font-serif text-xl text-ink group-hover:underline underline-offset-4 mb-2">{resource.title}</h3>
              <p className="text-sm leading-relaxed text-muted max-w-2xl">{resource.description}</p>
            </Link></article>)}</div> : <div className="rounded border border-border bg-white p-8"><p className="text-sm text-muted">No resources match your search. Try another term or category.</p><button type="button" onClick={() => { setDraft(""); setQuery(""); setCategories(new Set()); }} className="text-sm underline underline-offset-4 mt-3">Clear filters</button></div>}
            <p className="text-xs text-muted mt-6">Showing {filtered.length} of {LEARNING_RESOURCES.length} sample resources</p>
          </div>
        </div>
      </section>
    </div>

    <section className="border-t border-border bg-[#f8faff] px-6 py-12" aria-label="Explore more"><div className="max-w-7xl mx-auto"><p className="text-xs uppercase tracking-[0.1em] text-muted mb-6">Explore more</p><div className="grid md:grid-cols-2 gap-8">
      <Link href="/portfolio" className="group flex items-center gap-5"><PlaceholderImage label="Portfolio" fixedHeight="h-24" className="max-w-44 shrink-0" /><div><h2 className="font-serif text-xl group-hover:underline underline-offset-4">Explore our IP portfolio →</h2><p className="text-sm leading-relaxed text-muted mt-2">Browse patents, datasets, software, and designs — filter by subject, entity, and tags to find what you can license.</p></div></Link>
      <Link href="/resources" className="group flex items-center gap-5"><PlaceholderImage label="Resources" fixedHeight="h-24" className="max-w-44 shrink-0" /><div><h2 className="font-serif text-xl group-hover:underline underline-offset-4">Get the templates you need →</h2><p className="text-sm leading-relaxed text-muted mt-2">Download standard licenses and provisions, and find references for submitting and licensing.</p></div></Link>
    </div></div></section>
  </>;
}
