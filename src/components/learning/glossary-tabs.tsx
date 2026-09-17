"use client";

import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "foundations", label: "Foundations" },
  { id: "licensing", label: "Licensing" },
  { id: "transactions", label: "Transactions & obligations" },
];

export function GlossaryTabs() {
  const [active, setActive] = useState("foundations");
  useEffect(() => {
    const syncToHash = () => {
      const target = document.getElementById(window.location.hash.slice(1));
      setActive(target?.closest("section[id]")?.id ?? "foundations");
    };
    syncToHash();
    window.addEventListener("hashchange", syncToHash);
    return () => window.removeEventListener("hashchange", syncToHash);
  }, []);

  return <nav aria-label="Glossary sections" className="sticky top-14 z-30 border-b border-border bg-panel flex gap-1 sm:gap-4 overflow-x-auto">
    {SECTIONS.map(({ id, label }) => <a key={id} href={`#${id}`} onClick={() => setActive(id)} aria-current={active === id ? "location" : undefined} className={`shrink-0 px-4 py-3 text-sm border-b-2 hover:text-ink ${active === id ? "border-ink text-ink font-medium" : "border-transparent text-muted"}`}>{label}</a>)}
  </nav>;
}
