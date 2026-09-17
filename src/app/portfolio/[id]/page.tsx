import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EntryDetail } from "@/components/marketing/entry-detail";
import { ENTRIES, PORTFOLIO_ENTRIES, type Entry } from "@/lib/content";

const featuredIds = new Set(ENTRIES.map(({ id }) => id));
const featuredRank = new Map(ENTRIES.map(({ id }, index) => [id, index]));

export const dynamicParams = false;

export function generateStaticParams() {
  return PORTFOLIO_ENTRIES.map(({ id }) => ({ id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const entry = PORTFOLIO_ENTRIES.find((item) => item.id === id);
  if (!entry) notFound();
  return {
    title: `${entry.title} · SHIP`,
    description: entry.description,
    robots: { index: false, follow: false },
  };
}

function relatedEntries(entry: Entry) {
  return PORTFOLIO_ENTRIES
    .filter((item) => item.id !== entry.id)
    .map((item, order) => ({
      item,
      order,
      score: Number(item.subject === entry.subject) * 3
        + Number(item.org === entry.org) * 2
        + item.tags.filter((tag) => entry.tags.includes(tag)).length
        + Number(item.subject !== entry.subject && featuredIds.has(item.id)),
    }))
    .sort((a, b) => {
      if (a.score !== b.score) return b.score - a.score;
      if (a.item.subject === entry.subject && b.item.subject === entry.subject) return a.order - b.order;
      return (featuredRank.get(a.item.id) ?? 100 + a.order)
        - (featuredRank.get(b.item.id) ?? 100 + b.order);
    })
    .slice(0, 4)
    .map(({ item }) => item);
}

export default async function EntryPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const entry = PORTFOLIO_ENTRIES.find((item) => item.id === id);
  if (!entry) notFound();
  return <EntryDetail entry={entry} related={relatedEntries(entry)} />;
}
