import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/ui/page-header";
import { Card } from "@/components/ui/card";
import { Eyebrow } from "@/components/ui/eyebrow";

export const metadata: Metadata = {
  title: "Resources · SHIP",
  description:
    "Templates, checklists, and reference materials for SHIP submitters, reviewers, and partners.",
};

const RESOURCES = [
  {
    eyebrow: "Templates",
    title: "Submission templates",
    body: "Starter templates for each of the five entry types — patent, dataset, tool, protocol, or creative work.",
    href: "/resources/templates",
  },
  {
    eyebrow: "Checklists",
    title: "Reviewer checklist",
    body: "The one-page checklist reviewers work through before approving a submission for public listing.",
    href: "/resources/reviewer-checklist",
  },
  {
    eyebrow: "Reference",
    title: "License comparison table",
    body: "Side-by-side comparison of every license family SHIP supports, with typical use cases.",
    href: "/resources/licenses",
  },
  {
    eyebrow: "Onboarding",
    title: "Pilot user guide",
    body: "How to sign in as a pilot user and walk through the submit → review → publish loop.",
    href: "/resources/pilot-guide",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Resources"
        title="Templates, checklists, and reference material."
        description="Practical assets to help submitters draft entries, reviewers act quickly, and partners plan their contributions."
      />
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid gap-4 sm:grid-cols-2">
          {RESOURCES.map((r) => (
            <Card
              key={r.title}
              as={Link}
              href={r.href}
              interactive
              className="p-6"
            >
              <Eyebrow className="mb-3">{r.eyebrow}</Eyebrow>
              <h2 className="font-serif font-normal text-xl text-ink mb-2 leading-snug">
                {r.title}
              </h2>
              <p className="text-sm text-muted leading-relaxed">{r.body}</p>
              <span className="mt-4 inline-flex text-sm font-medium text-ink items-center gap-1.5">
                Open <span aria-hidden>→</span>
              </span>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
