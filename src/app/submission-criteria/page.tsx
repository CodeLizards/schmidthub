import type { Metadata } from "next";
import Link from "next/link";
import { JoinCommunity } from "@/components/marketing/join-community";

export const metadata: Metadata = { title: "Submission criteria · SHIP" };

const routes = [
  ["Schmidt-affiliated researchers", "Researchers and inventors whose work was funded or supported by a Schmidt entity. Request a submitter account through the contact form — approval typically takes 2 business days."],
  ["Onboarded institutions", "Universities and research organisations onboarded to the platform submit through their organization dashboard, with governance and rights managed by their Org Admin."],
  ["Invited one-time contributors", "Grantees without permanent accounts submit through a secure one-time link sent by an Org Admin — the in-flow agreement covers rights and terms."],
];
const checks = [
  ["Rights to submit", "You are the creator, or your institution holds the rights and you're authorised to publish on its behalf. Co-created work needs all contributors named."],
  ["Completeness", "A clear title, an accurate description of what the IP is and does, named inventors or authors, and a filing or creation date."],
  ["Correct classification", "The right entry type — Patents, Academic Research, Technology & Equipment, Scientific Datasets, or Creative Works — with ontology tags that make it findable."],
  ["Licensing readiness", "Selected target goals and a license the panel can verify — a standard open license, or clear custom terms attached as a document."],
  ["Verifiable sources", "External links resolve to what they claim: journal records, patent registers, or data repositories. Uploaded files open and match the description."],
];

export default function SubmissionCriteriaPage() {
  return <>
    <article className="max-w-4xl mx-auto px-6 py-12 md:py-20 text-ink">
      <Link href="/about" className="text-sm text-muted hover:text-ink">← About SHIP</Link>
      <p className="text-xs uppercase tracking-[0.12em] text-muted mt-12 mb-3">Participation Guide</p>
      <h1 className="font-serif text-4xl md:text-5xl mb-4">Submission criteria</h1>
      <p className="text-lg text-muted leading-relaxed mb-14">Who can submit to SHIP, and what the review panel looks for before an entry is published.</p>
      <section className="border-t border-border pt-9 mb-14">
        <h2 className="font-serif text-3xl mb-4">Who can submit</h2>
        <p className="text-muted mb-7">SHIP is open to work arising from the Schmidt research ecosystem. You qualify through one of three routes:</p>
        <div className="space-y-6">{routes.map(([title, body], index) => <div className="grid grid-cols-[2.5rem_1fr] gap-4" key={title}><span className="font-mono text-xs text-muted pt-1">0{index + 1}</span><div><h3 className="font-serif text-xl mb-2">{title}</h3><p className="text-sm leading-relaxed text-muted">{body}</p></div></div>)}</div>
      </section>
      <section className="border-t border-border pt-9">
        <h2 className="font-serif text-3xl mb-4">What gets accepted</h2>
        <p className="text-muted mb-7">The review panel checks every routed submission against five criteria. Entries already public at an authoritative external source, with no licensing transaction on SHIP, publish immediately and skip this review.</p>
        <div className="grid sm:grid-cols-2 gap-4">{checks.map(([title, body]) => <div className="bg-white border border-border rounded p-5" key={title}><h3 className="font-serif text-xl mb-2">{title}</h3><p className="text-sm leading-relaxed text-muted">{body}</p></div>)}</div>
        <div className="bg-white border-l-2 border-ink p-6 mt-7"><h3 className="font-serif text-xl mb-2">If a submission falls short</h3><p className="text-sm leading-relaxed text-muted">It isn&apos;t rejected outright — the panel returns it to Draft with a written reason, and you can revise and resubmit. Typical review takes 5–10 days.</p></div>
      </section>
    </article>
    <JoinCommunity />
  </>;
}
