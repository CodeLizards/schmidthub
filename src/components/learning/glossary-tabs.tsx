"use client";

import { useState } from "react";

const SECTIONS = [
  { id: "foundations", label: "Foundations" },
  { id: "licensing", label: "Licensing" },
  { id: "transactions", label: "Transactions & obligations" },
];

export function GlossaryTabs() {
  const [active, setActive] = useState("foundations");
  return <nav aria-label="Glossary sections" className="border-b border-border flex gap-1 sm:gap-4 overflow-x-auto">
    {SECTIONS.map(({ id, label }) => <a key={id} href={`#${id}`} onClick={() => setActive(id)} aria-current={active === id ? "location" : undefined} className={`shrink-0 px-4 py-4 text-sm border-b-2 hover:text-ink ${active === id ? "border-ink text-ink font-medium" : "border-transparent text-muted"}`}>{label}</a>)}
  </nav>;
}
