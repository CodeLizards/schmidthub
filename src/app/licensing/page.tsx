import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { JoinCommunity } from "@/components/marketing/join-community";
import { RelatedLearning } from "@/components/learning/related-learning";
import { ShareLinks } from "@/components/learning/share-links";

export const metadata: Metadata = { title: "Licensing options · SHIP" };

const licenses: [string, ReactNode][] = [
  ["Open Research License", <>Free for academic and non-commercial research use with <Link href="/glossary#attribution" className="underline underline-offset-4">attribution</Link>. Commercial applications require a separate negotiated license.</>],
  ["CC BY 4.0", "Creative Commons Attribution. Anyone may use, share, and adapt the work — including commercially — as long as they credit the creator."],
  ["MIT", "A permissive open-source software license. Allows reuse, modification, and distribution, including in commercial products, with attribution and no warranty."],
  ["Apache 2.0", <>A permissive open-source license similar to MIT, with an explicit <Link href="/glossary#patent" className="underline underline-offset-4">patent</Link> grant that protects users from patent claims by contributors.</>],
  ["Commercial License", <>Access negotiated privately between the IP holder and <Link href="/glossary#licensor-licensee" className="underline underline-offset-4">licensee</Link>. Scope, exclusivity, territory, and fees are agreed case by case.</>],
];

export default function LicensingPage() {
  return <>
    <div className="max-w-7xl mx-auto px-6 pt-9"><Link href="/learning-hub" className="text-sm underline underline-offset-4 text-muted hover:text-ink">← Back to the IP Learning Hub</Link></div>
    <article className="max-w-3xl mx-auto px-6 md:px-0 pt-19 pb-14">
      <p className="text-xs uppercase tracking-[0.12em] text-muted mb-4">Topic</p>
      <h1 className="font-serif text-4xl md:text-[40px] leading-tight mb-6">Licensing options</h1>
      <p className="text-lg leading-relaxed text-muted mb-11">Every published entry carries a <Link href="/glossary#license" className="underline decoration-dotted underline-offset-4">license</Link> that defines how others may use it. SHIP supports five, from fully open to negotiated commercial terms. Your choice determines who can use the work, whether they may build on it commercially, and whether a negotiation has to happen first — the license attached at publication is the one seekers act on.</p>
      <div className="grid sm:grid-cols-2 gap-4">{licenses.map(([title, body]) => <section className="rounded border border-border bg-white p-6 min-h-36" key={title}><h2 className="font-serif text-xl mb-3">{title}</h2><p className="text-sm text-muted leading-relaxed">{body}</p></section>)}</div>
      <Link href="/glossary" className="inline-block text-sm font-medium underline underline-offset-4 mt-10">Browse the full IP glossary →</Link>
      <ShareLinks />
    </article>
    <RelatedLearning topic="licensing" />
    <JoinCommunity />
  </>;
}
