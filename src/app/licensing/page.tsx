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
    <article className="max-w-4xl mx-auto px-6 pt-16 pb-14">
      <Link href="/learning-hub" className="text-sm underline underline-offset-4 text-muted hover:text-ink">← Back to the IP Learning Hub</Link>
      <p className="text-xs uppercase tracking-[0.12em] text-muted mt-12 mb-3">Topic</p>
      <h1 className="font-serif text-4xl md:text-5xl mb-6">Licensing options</h1>
      <p className="text-lg leading-relaxed text-muted mb-12">Every published entry carries a <Link href="/glossary#license" className="underline underline-offset-4">license</Link> that defines how others may use it. SHIP supports five, from fully open to negotiated commercial terms. Your choice determines who can use the work, whether they may build on it commercially, and whether a negotiation has to happen first — the license attached at publication is the one seekers act on.</p>
      <div className="border-t border-border">{licenses.map(([title, body]) => <section className="border-b border-border py-6" key={title}><h2 className="font-serif text-2xl mb-2">{title}</h2><p className="text-muted leading-relaxed">{body}</p></section>)}</div>
      <Link href="/glossary" className="inline-block text-sm font-medium underline underline-offset-4 mt-9">Browse the full IP glossary →</Link>
      <ShareLinks />
    </article>
    <RelatedLearning topic="licensing" />
    <JoinCommunity />
  </>;
}
