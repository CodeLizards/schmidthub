import Link from "next/link";
import { Card } from "@/components/ui/card";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { PARTNERS, type Partner } from "@/lib/content";

export function FoundingPartners() {
  return (
    <section id="about" className="py-20 border-t border-border bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <h2 className="font-serif font-normal text-3xl text-ink tracking-[-0.02em] leading-tight mb-4">
              Founding Partners
            </h2>
            <p className="text-muted leading-relaxed max-w-2xl">
              The organisations behind SHIP — each focused on a distinct
              domain of high-impact research, and each contributing IP to the
              platform.
            </p>
          </div>
          <Link
            href="/about"
            className="text-sm underline underline-offset-2 text-muted hover:text-ink transition-colors"
          >
            About SHIP →
          </Link>
        </div>

        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-6 px-6">
          {PARTNERS.map((p) => (
            <PartnerCard key={p.id} partner={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PartnerCard({ partner }: { partner: Partner }) {
  return (
    <Card
      as={Link}
      href={`/about#${partner.id}`}
      id={partner.id}
      interactive
      className="group relative scroll-mt-20 snap-start shrink-0 w-72 overflow-hidden text-left cursor-pointer"
    >
      <div className="h-full p-6 flex flex-col items-start justify-between gap-4">
        <PlaceholderImage label={`${partner.name} logo`} aspect="video" />
        <h3 className="font-serif font-normal text-xl text-ink leading-snug">
          {partner.name}
        </h3>
      </div>

      <div className="absolute inset-0 bg-white p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-200 pointer-events-none">
        <div>
          <h3 className="font-serif font-normal text-xl text-ink leading-snug">
            {partner.name}
          </h3>
          <p className="text-sm text-muted leading-relaxed mt-3">
            {partner.blurb}
          </p>
        </div>
        <span className="text-sm font-medium text-ink inline-flex items-center gap-1.5">
          View more <span aria-hidden>→</span>
        </span>
      </div>
    </Card>
  );
}
