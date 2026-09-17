import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { LEARNING_RESOURCES } from "@/lib/learning";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { JoinCommunity } from "@/components/marketing/join-community";
import { RelatedLearning } from "@/components/learning/related-learning";
import { ShareLinks } from "@/components/learning/share-links";

export const dynamicParams = false;
export function generateStaticParams() { return LEARNING_RESOURCES.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const resource = LEARNING_RESOURCES.find((item) => item.slug === slug);
  return { title: resource ? `${resource.title} · SHIP` : "IP Learning Hub · SHIP" };
}

export default async function InsightPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const resource = LEARNING_RESOURCES.find((item) => item.slug === slug);
  if (!resource) notFound();
  return <>
    <article className="max-w-4xl mx-auto px-6 pt-16 pb-14">
      <Link href="/learning-hub" className="text-sm underline underline-offset-4 text-muted hover:text-ink">← Back to the IP Learning Hub</Link>
      <div className="mt-12"><p className="text-xs uppercase tracking-[0.1em] text-muted mb-4">{resource.category} · {resource.date}</p><h1 className="font-serif text-4xl md:text-5xl leading-tight mb-6">{resource.title}</h1>
        <p className="text-lg leading-relaxed text-muted mb-6">{resource.description}</p>
        <p className="text-base leading-relaxed text-muted mb-5">This is placeholder body copy for the wireframe. The opening section establishes context for the piece — what prompted it, who it is for, and the single idea a reader should leave with. Where the copy names a term like <Link href="/glossary" className="underline underline-offset-4">intellectual property</Link> or the <Link href="/glossary" className="underline underline-offset-4">public domain</Link>, the first mention is linked to the glossary automatically.</p>
        <p className="text-base leading-relaxed text-muted mb-6">A second paragraph develops the argument with supporting detail. In a published article this is where data, examples from the portfolio, or quotes from researchers and reviewers would appear. Terms such as <Link href="/glossary" className="underline underline-offset-4">patent</Link>, <Link href="/glossary" className="underline underline-offset-4">copyright</Link>, <Link href="/glossary" className="underline underline-offset-4">attribution</Link>, and <Link href="/glossary" className="underline underline-offset-4">royalty</Link> are picked up the same way, once each.</p>
        <h2 className="font-serif text-3xl mb-4">A section heading within the article</h2>
        <p className="text-base leading-relaxed text-muted mb-6">Longer pieces break into sections with serif headings at the H2 scale. Inline links follow the site convention — underlined, arrowed where they lead away from the page. A <Link href="/glossary" className="underline underline-offset-4">licensee</Link> reading this page can jump from any highlighted term straight to its definition.</p>
        <figure className="mb-6"><PlaceholderImage label="Optional inline figure — added as content" fixedHeight="h-64" /><figcaption className="text-xs text-muted mt-2">Fig. 1 — images are optional and sit inside the content flow.</figcaption></figure>
        <p className="text-base leading-relaxed text-muted">The closing paragraph resolves the piece: what it means for submitters, seekers, or institutions, and where to go next.</p>
        <ShareLinks />
      </div>
    </article>
    <RelatedLearning excludeSlug={slug} />
    <JoinCommunity />
  </>;
}
