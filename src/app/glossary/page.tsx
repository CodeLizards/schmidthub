import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";

export const metadata: Metadata = {
  title: "IP Glossary · SHIP",
  description:
    "Definitions of the licensing and IP terminology used across the SHIP platform.",
};

const TERMS: { term: string; definition: string }[] = [
  {
    term: "Open Research License",
    definition:
      "A permissive license that allows use, modification, and redistribution for research and non-commercial purposes, with attribution.",
  },
  {
    term: "CC BY 4.0",
    definition:
      "Creative Commons Attribution 4.0. Anyone may reuse and adapt the work commercially or otherwise, provided they credit the creator.",
  },
  {
    term: "MIT License",
    definition:
      "A permissive software license: users may do almost anything with the code, provided they preserve the copyright and license notice.",
  },
  {
    term: "Apache 2.0",
    definition:
      "A permissive software license similar to MIT, with an explicit grant of patent rights from contributors to users.",
  },
  {
    term: "Commercial License",
    definition:
      "A paid license granting rights to use the IP in commercial products or services, negotiated per entry.",
  },
  {
    term: "Prior art",
    definition:
      "Evidence that an invention was already known before a given date — patent examiners search for it when evaluating novelty.",
  },
  {
    term: "Assignment",
    definition:
      "Transfer of ownership of intellectual property from one party to another, usually recorded in writing.",
  },
  {
    term: "Provisional patent",
    definition:
      "A short-lived patent filing that establishes a priority date, giving the inventor twelve months to file a full application.",
  },
];

export default function GlossaryPage() {
  return (
    <>
      <PageHeader
        eyebrow="IP Glossary"
        title="Terms you'll see across SHIP."
        description="A working reference for the licensing and IP terminology used across submissions, reviews, and portfolio entries."
      />
      <section className="py-16 max-w-4xl mx-auto px-6">
        <dl className="divide-y divide-border">
          {TERMS.map(({ term, definition }) => (
            <div
              key={term}
              className="grid md:grid-cols-[220px_1fr] gap-4 py-5"
            >
              <dt className="font-serif font-normal text-xl text-ink leading-snug">
                {term}
              </dt>
              <dd className="text-sm text-muted leading-relaxed">
                {definition}
              </dd>
            </div>
          ))}
        </dl>
      </section>
    </>
  );
}
