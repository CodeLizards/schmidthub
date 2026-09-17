import type { Metadata } from "next";
import Link from "next/link";
import { JoinCommunity } from "@/components/marketing/join-community";
import { GlossaryTabs } from "@/components/learning/glossary-tabs";

export const metadata: Metadata = {
  title: "IP Glossary · SHIP",
  description: "Plain-language definitions of intellectual property, licensing, and transaction terms used on SHIP.",
};

const SECTIONS = [
  { id: "foundations", title: "Foundations", terms: [
    ["Intellectual Property (IP)", "Creations of the human mind recognised and protected by law — inventions, research findings, designs, brands, data compilations, and creative expression. Unlike physical property, IP is intangible: the legal right attaches to the idea's expression or application, not to any single object. Ownership grants the holder defined exclusive rights for a limited period."],
    ["Patent", "A government-granted exclusive right over an invention or technical process, typically lasting 20 years from the filing date. In exchange for public disclosure of how the invention works, the holder may prevent others from making, using, or selling it without permission. Patents are territorial — protection applies only where the patent is granted."],
    ["Copyright", "Automatic legal protection for original creative works — literature, software code, film, photography, music, and art — arising the moment the work is fixed in tangible form. It protects the expression, not the underlying idea, and generally lasts the author's life plus 70 years. Registration is not required, though it strengthens enforcement."],
    ["Trademark", "Protection for brand identifiers — names, logos, slogans, and distinctive design elements — used to distinguish goods or services in commerce. Rights arise through use and are strengthened by registration; they can last indefinitely while the mark remains in use and defended."],
    ["Trade Secret", "Confidential business or technical information that derives commercial value from being secret — formulas, processes, datasets, methods. Protection lasts as long as reasonable secrecy measures are maintained; there is no registration and no expiry, but the protection is lost if the information becomes public."],
    ["Public Domain", "The status of works whose exclusive rights have expired, been forfeited, or never applied. Public-domain material may be used, modified, and redistributed by anyone without permission or payment — the shared foundation everyone is free to build on."],
    ["Prior Art", "All information publicly available before a patent filing date — publications, products, presentations, or earlier patents. Prior art can invalidate a patent claim if it shows the invention was already known, which is why the timing of publication matters for researchers considering patent protection."],
  ] },
  { id: "licensing", title: "Licensing", terms: [
    ["License", "A legal permission from an IP holder allowing another party to use the IP under defined terms — scope, territory, duration, and payment — without transferring ownership. The holder (licensor) retains the IP; the user (licensee) gains only the rights the agreement grants."],
    ["Open Licensing", "A license published in advance that grants anyone use of the IP under standard terms — commonly requiring attribution and sometimes limiting commercial use. Examples include CC BY 4.0 for content and data, and MIT or Apache 2.0 for software. Open licenses remove negotiation from the path between discovery and use."],
    ["Commercial Licensing", "A negotiated agreement granting use of IP in commercial products or services, typically involving fees, royalties, or equity. Terms are agreed privately between holder and licensee — scope, exclusivity, territory, and duration are all negotiable."],
    ["Exclusive vs. Non-exclusive License", "An exclusive license grants rights to a single licensee — even the IP holder may be barred from using the IP in the licensed field. A non-exclusive license can be granted to any number of parties in parallel. Exclusivity commands higher fees and is common where the licensee must invest heavily to bring the IP to market."],
    ["Royalty", "A recurring payment from licensee to licensor, usually calculated as a percentage of revenue or a fee per unit sold, in exchange for ongoing use of the IP. Alternatives include lump-sum payments, milestone payments, or equity."],
  ] },
  { id: "transactions", title: "Transactions & obligations", terms: [
    ["Full Assignment of Intellectual Property", "The complete transfer of IP ownership from one party to another — unlike a license, the original holder retains no rights after assignment. Assignments are typically permanent, must be in writing, and are used when a buyer needs unencumbered control of the IP."],
    ["Attribution", "The obligation to credit the IP's creators when using their work. On SHIP, attribution means citing the entry title, its inventors or authors, the SHIP entry ID, and schmidthub.org. Most open licenses make attribution a binding condition — failing to attribute is a license breach, not a courtesy lapse."],
    ["Licensor & Licensee", "The two parties to a license: the licensor owns the IP and grants permission; the licensee receives the right to use it under the agreed terms. On SHIP, the licensor is typically the submitting researcher or their institution."],
  ] },
];

function termId(term: string) { return term.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-$/, ""); }

export default function GlossaryPage() {
  return <>
    <div className="max-w-7xl mx-auto px-6 pt-16 pb-20">
      <nav aria-label="Breadcrumb" className="text-sm text-muted mb-10"><Link href="/learning-hub" className="hover:text-ink">IP Learning Hub</Link><span aria-hidden="true" className="mx-3">›</span>IP Glossary</nav>
      <p className="text-xs uppercase tracking-[0.1em] text-muted mb-5">Reference</p>
      <h1 className="font-serif text-5xl md:text-6xl mb-6">IP Glossary</h1>
      <p className="text-lg leading-relaxed text-muted max-w-2xl mb-14">The legal terms you&apos;ll meet across the platform — what they mean, how long they last, and what they oblige you to do.</p>
      <GlossaryTabs />
      <div className="space-y-16 pt-16">{SECTIONS.map(({ id, title, terms }) => <section id={id} key={id} className="scroll-mt-28 grid md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-8" aria-labelledby={`${id}-title`}>
        <h2 id={`${id}-title`} className="font-serif text-3xl">{title}</h2>
        <div className="space-y-4">{terms.map(([term, description]) => <article key={term} id={termId(term)} className="scroll-mt-28 rounded border border-border bg-white p-6"><h3 className="font-serif text-xl mb-3">{term}</h3><p className="text-sm leading-relaxed text-muted">{description}</p></article>)}</div>
      </section>)}</div>
    </div>
    <JoinCommunity />
  </>;
}
