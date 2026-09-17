import type { Metadata } from "next";
import Link from "next/link";
import { JoinCommunity } from "@/components/marketing/join-community";

export const metadata: Metadata = { title: "Licensing options · SHIP" };

const licenses = [
  ["Open Research License", "Free for academic and non-commercial research use with attribution. Commercial applications require a separate negotiated license."],
  ["CC BY 4.0", "Creative Commons Attribution. Anyone may use, share, and adapt the work — including commercially — as long as they credit the creator."],
  ["MIT", "A permissive open-source software license. Allows reuse, modification, and distribution, including in commercial products, with attribution and no warranty."],
  ["Apache 2.0", "A permissive open-source license similar to MIT, with an explicit patent grant that protects users from patent claims by contributors."],
  ["Commercial License", "Access negotiated privately between the IP holder and licensee. Scope, exclusivity, territory, and fees are agreed case by case."],
];

export default function LicensingPage() {
  return <>
    <article className="max-w-4xl mx-auto px-6 py-12 md:py-20">
      <Link href="/learning-hub" className="text-sm text-muted hover:text-ink">← Back to the IP Learning Hub</Link>
      <p className="text-xs uppercase tracking-[0.12em] text-muted mt-12 mb-3">Topic</p>
      <h1 className="font-serif text-4xl md:text-5xl mb-6">Licensing options</h1>
      <p className="text-lg leading-relaxed text-muted mb-12">Every published entry carries a license that defines how others may use it. SHIP supports five, from fully open to negotiated commercial terms. Your choice determines who can use the work, whether they may build on it commercially, and whether a negotiation has to happen first — the license attached at publication is the one seekers act on.</p>
      <div className="border-t border-border">{licenses.map(([title, body]) => <section className="border-b border-border py-6" key={title}><h2 className="font-serif text-2xl mb-2">{title}</h2><p className="text-muted leading-relaxed">{body}</p></section>)}</div>
      <Link href="/glossary" className="inline-block text-sm font-medium underline underline-offset-4 mt-9">Browse the full IP glossary →</Link>
      <section className="border-t border-border mt-14 pt-8"><h2 className="font-serif text-2xl mb-5">Relevant topics</h2><div className="grid sm:grid-cols-2 gap-4"><Link href="/learning-hub" className="rounded border border-border bg-white p-5 hover:border-ink"><span className="text-xs text-muted">Topic</span><h3 className="font-serif text-xl mt-2">What is Intellectual Property?</h3></Link><Link href="/glossary" className="rounded border border-border bg-white p-5 hover:border-ink"><span className="text-xs text-muted">Reference</span><h3 className="font-serif text-xl mt-2">IP Glossary</h3></Link></div></section>
    </article>
    <JoinCommunity />
  </>;
}
