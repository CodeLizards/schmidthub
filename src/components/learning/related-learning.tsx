import Link from "next/link";
import { LEARNING_RESOURCES } from "@/lib/learning";

export function RelatedLearning({ topic, excludeSlug }: { topic?: "ip" | "licensing"; excludeSlug?: string }) {
  const topicLink = topic === "ip"
    ? { href: "/topics/licensing", title: "Licensing options", description: "The five licenses SHIP supports, from fully open to negotiated commercial terms." }
    : { href: "/topics/what-is-ip", title: "What is Intellectual Property?", description: "Patents, copyright, trade secrets, and trademarks — what each protects and for how long." };
  const report = LEARNING_RESOURCES.find((resource) => resource.category === "Report" && resource.slug !== excludeSlug);
  return <section className="max-w-7xl mx-auto px-6 py-20" aria-label="Relevant topics">
    <div className="flex flex-wrap items-center justify-between gap-4 mb-10"><h2 className="font-serif text-3xl">Relevant topics</h2><Link href="/learning-hub" className="text-sm underline underline-offset-4 text-muted hover:text-ink">Visit the IP Learning Hub →</Link></div>
    <div className="grid sm:grid-cols-3 gap-4">
      <Link href={topicLink.href} className="rounded border border-border bg-white p-5 hover:border-gray-400"><p className="text-xs text-muted mb-3">Topic</p><h3 className="font-serif text-xl mb-2">{topicLink.title}</h3><p className="text-sm text-muted leading-relaxed">{topicLink.description}</p></Link>
      <Link href="/glossary" className="rounded border border-border bg-white p-5 hover:border-gray-400"><p className="text-xs text-muted mb-3">Reference</p><h3 className="font-serif text-xl mb-2">IP Glossary</h3><p className="text-sm text-muted leading-relaxed">Every legal term you will meet on the platform, defined in plain language.</p></Link>
      {report && <Link href={`/insights/${report.slug}`} className="rounded border border-border bg-white p-5 hover:border-gray-400"><p className="text-xs text-muted mb-3">Report · {report.date}</p><h3 className="font-serif text-xl mb-2">{report.title}</h3><p className="text-sm text-muted leading-relaxed">{report.description}</p></Link>}
    </div>
  </section>;
}
