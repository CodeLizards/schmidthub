import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/eyebrow";

export function JoinCommunity() {
  return (
    <section className="border-t border-border bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <Eyebrow className="mb-3">Ready to participate?</Eyebrow>
          <h2 className="font-serif font-normal text-3xl text-ink tracking-[-0.02em] leading-tight mb-3">
            Join our Community
          </h2>
          <p className="text-muted text-sm leading-relaxed max-w-xl">
            Share your intellectual property, discover groundbreaking
            technologies, and join a worldwide network of technologists working
            for good.
          </p>
        </div>
        <div className="flex flex-col gap-3 shrink-0">
          <Link
            href="/submit"
            className="bg-ink hover:bg-ink-hover text-white px-7 py-3 rounded text-sm font-semibold transition-colors inline-flex items-center justify-center gap-2 whitespace-nowrap"
          >
            Add your Technology <ArrowRight size={14} strokeWidth={2} />
          </Link>
          <Link
            href="/portfolio"
            className="text-sm underline underline-offset-2 text-muted hover:text-ink transition-colors text-center"
          >
            Browse the portfolio →
          </Link>
        </div>
      </div>
    </section>
  );
}
