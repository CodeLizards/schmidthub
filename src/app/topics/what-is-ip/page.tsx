import type { Metadata } from "next";
import Link from "next/link";
import { JoinCommunity } from "@/components/marketing/join-community";
import { RelatedLearning } from "@/components/learning/related-learning";
import { ShareLinks } from "@/components/learning/share-links";

export const metadata: Metadata = { title: "What is Intellectual Property? · SHIP" };

const TYPES = [
  ["Patents", "Protect inventions and technical processes. Valid for 20 years from filing date in most jurisdictions."],
  ["Copyright", "Automatically protects original creative works — literature, music, code, art — from reproduction without permission."],
  ["Trade Secrets", "Confidential business information with commercial value. Protected as long as secrecy is maintained."],
  ["Trademarks", "Protect brand identifiers — names, logos, slogans — used to distinguish goods or services in commerce."],
];

export default function WhatIsIPPage() {
  return <>
    <article className="max-w-4xl mx-auto px-6 pt-16 pb-14">
      <Link href="/learning-hub" className="text-sm underline underline-offset-4 text-muted hover:text-ink">← Back to the IP Learning Hub</Link>
      <div className="mt-12"><p className="text-xs uppercase tracking-[0.1em] text-muted mb-4">Topic</p><h1 className="font-serif text-4xl md:text-5xl mb-6">What is Intellectual Property?</h1>
        <p className="text-lg leading-relaxed text-muted mb-10"><Link href="/glossary#intellectual-property-ip" className="underline underline-offset-4">IP</Link> refers to creations of the human mind that are recognised and protected by law — an idea, process, design, brand, or creative expression. The law grants owners exclusive rights for a period, after which the work enters the <Link href="/glossary#public-domain" className="underline underline-offset-4">public domain</Link>. Which of the four categories below your work falls into determines how long it is protected, what you must disclose, and what you can license.</p>
        <div className="space-y-7">{TYPES.map(([title, description]) => <section key={title}><h2 className="font-serif text-2xl mb-2">{title}</h2><p className="text-muted leading-relaxed">{description}</p></section>)}</div>
        <Link href="/glossary" className="inline-block mt-8 text-sm font-medium underline underline-offset-4">Browse the full IP glossary →</Link>
        <ShareLinks />
      </div>
    </article>
    <RelatedLearning topic="ip" />
    <JoinCommunity />
  </>;
}
