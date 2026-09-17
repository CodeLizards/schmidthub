import type { Metadata } from "next";
import Link from "next/link";
import { Award, FileText, LockKeyhole, Tag } from "lucide-react";
import { JoinCommunity } from "@/components/marketing/join-community";
import { RelatedLearning } from "@/components/learning/related-learning";
import { ShareLinks } from "@/components/learning/share-links";

export const metadata: Metadata = { title: "What is Intellectual Property? · SHIP" };

const TYPES = [
  { title: "Patents", description: "Protect inventions and technical processes. Valid for 20 years from filing date in most jurisdictions.", href: "/glossary#patent", Icon: Award },
  { title: "Copyright", description: "Automatically protects original creative works — literature, music, code, art — from reproduction without permission.", href: "/glossary#copyright", Icon: FileText },
  { title: "Trade Secrets", description: "Confidential business information with commercial value. Protected as long as secrecy is maintained.", href: "/glossary#trade-secret", Icon: LockKeyhole },
  { title: "Trademarks", description: "Protect brand identifiers — names, logos, slogans — used to distinguish goods or services in commerce.", href: "/glossary#trademark", Icon: Tag },
];

export default function WhatIsIPPage() {
  return <>
    <div className="max-w-7xl mx-auto px-6 pt-9"><Link href="/learning-hub" className="text-sm underline underline-offset-4 text-muted hover:text-ink">← Back to the IP Learning Hub</Link></div>
    <article className="max-w-3xl mx-auto px-6 md:px-0 pt-19 pb-14">
      <p className="text-xs uppercase tracking-[0.1em] text-muted mb-4">Topic</p><h1 className="font-serif text-4xl md:text-[40px] leading-tight mb-6">What is Intellectual Property?</h1>
      <p className="text-lg leading-relaxed text-muted mb-11"><Link href="/glossary#intellectual-property-ip" className="underline decoration-dotted underline-offset-4">IP</Link> refers to creations of the human mind that are recognised and protected by law — an idea, process, design, brand, or creative expression. The law grants owners exclusive rights for a period, after which the work enters the <Link href="/glossary#public-domain" className="underline decoration-dotted underline-offset-4">public domain</Link>. Which of the four categories below your work falls into determines how long it is protected, what you must disclose, and what you can license.</p>
      <div className="grid sm:grid-cols-2 gap-4">{TYPES.map(({ title, description, href, Icon }) => <section key={title} className="rounded border border-border bg-white p-6 min-h-44"><Icon size={17} strokeWidth={1.5} aria-hidden="true" className="text-muted/70 mb-5" /><h2 className="font-serif text-xl mb-3"><Link href={href} className="underline decoration-dotted underline-offset-4 hover:text-muted">{title}</Link></h2><p className="text-sm leading-relaxed text-muted">{description}</p></section>)}</div>
      <Link href="/glossary" className="inline-block mt-10 text-sm font-medium underline underline-offset-4">Browse the full IP glossary →</Link>
      <ShareLinks />
    </article>
    <RelatedLearning topic="ip" />
    <JoinCommunity />
  </>;
}
