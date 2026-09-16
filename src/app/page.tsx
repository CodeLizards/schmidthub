import { BarChart2, Zap, Shield, ArrowRight } from "lucide-react";
import { PARTNERS, LICENSE_TYPES } from "@/lib/content";
import { FeaturedEntries } from "@/components/featured-entries";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedEntries />
      <LicensingOptions />
      <FoundingPartners />
      <JoinCommunity />
    </>
  );
}

/* ─────────────────────────── Hero ─────────────────────────── */

function Hero() {
  return (
    <section className="pt-32 pb-16 border-b border-border bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs font-normal text-muted/60 uppercase tracking-[0.08em] mb-6">
            Schmidt Hub for IP
          </p>
          <h1 className="font-serif font-normal text-5xl md:text-6xl text-ink leading-[1.05] tracking-[-0.02em] mb-6">
            Sharing Innovation.
            <br />
            Maximising Impact.
          </h1>
          <p className="text-lg text-muted leading-relaxed max-w-2xl mx-auto mb-10">
            The Schmidt Hub connects world-class research with the institutions,
            entrepreneurs, and communities who can advance it. Explore what is
            available, or submit your own IP through a transparent, open
            platform.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          <HeroCard
            Icon={BarChart2}
            title="Explore"
            body="Browse patents, datasets, tools, and academic work across the Schmidt ecosystem. Filter by subject, entity, or license."
            cta="Browse the portfolio"
            href="#portfolio"
          />
          <HeroCard
            Icon={Zap}
            title="Participate"
            body="Submit your own IP through a simple, transparent workflow. Draft privately, submit for review, and pick the license the world sees."
            cta="Get started"
            href="#add"
          />
          <LicenseIPCard />
        </div>
      </div>
    </section>
  );
}

/* License IP hero card — mini list of license families with hover tooltip */
function LicenseIPCard() {
  return (
    <div className="w-full flex flex-col items-start text-left bg-white border border-border rounded p-5 transition-colors">
      <Shield size={16} className="mb-4 text-muted/60" />
      <h2 className="font-serif font-normal text-xl mb-2">License IP</h2>
      <p className="text-sm text-muted leading-relaxed mb-3">
        Every entry ships with a clear license — chosen by the inventor,
        shown to the reader before download.
      </p>
      <div className="space-y-1 w-full">
        {LICENSE_TYPES.map((l) => (
          <div key={l.id} className="relative group">
            <button
              type="button"
              className="w-full text-left text-sm font-medium text-ink hover:underline inline-flex items-center gap-1.5 py-1"
            >
              {l.name} <span aria-hidden>→</span>
            </button>
            <div className="absolute left-0 top-full mt-1 z-20 w-72 bg-gray-100 border border-gray-200 text-ink text-xs leading-relaxed rounded-md p-3 shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200">
              {l.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function HeroCard({
  Icon,
  title,
  body,
  cta,
  href,
}: {
  Icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  body: string;
  cta: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="group w-full flex flex-col items-start text-left bg-white border border-border hover:border-gray-400 text-ink rounded p-5 transition-colors"
    >
      <Icon size={16} className="mb-4 text-muted/60" />
      <h2 className="font-serif font-normal text-xl mb-2">{title}</h2>
      <p className="text-sm text-muted leading-relaxed mb-3">{body}</p>
      <span className="text-sm font-medium text-ink inline-flex items-center gap-1.5 mt-auto">
        {cta} <span aria-hidden>→</span>
      </span>
    </a>
  );
}

/* ────────────────────── Featured entries ──────────────────── */

/* ────────────────────── Licensing options ─────────────────── */

function LicensingOptions() {
  return (
    <section id="licensing" className="py-20 border-t border-border bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-serif font-normal text-3xl text-ink tracking-[-0.02em] leading-tight mb-3">
          Licensing options
        </h2>
        <p className="text-sm text-muted leading-relaxed mb-4 max-w-3xl">
          Many entries are published under a clear license:{" "}
          <strong className="font-semibold text-ink">Open Research License</strong>,{" "}
          <strong className="font-semibold text-ink">CC BY 4.0</strong>,{" "}
          <strong className="font-semibold text-ink">MIT</strong>,{" "}
          <strong className="font-semibold text-ink">Apache 2.0</strong>, or a{" "}
          <strong className="font-semibold text-ink">Commercial License</strong>.
          Each defines how the work can be used, shared, and built upon.
        </p>
        <a
          href="#compare"
          className="text-sm underline underline-offset-2 text-muted hover:text-ink transition-colors"
        >
          Compare the license types →
        </a>
      </div>
    </section>
  );
}

/* ────────────────────── Founding partners ─────────────────── */

function FoundingPartners() {
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
          <a
            href="#about"
            className="text-sm underline underline-offset-2 text-muted hover:text-ink transition-colors"
          >
            About SHIP →
          </a>
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

function PartnerCard({ partner }: { partner: (typeof PARTNERS)[number] }) {
  return (
    <a
      href={`#partner-${partner.id}`}
      className="group relative snap-start shrink-0 w-72 bg-white border border-border rounded overflow-hidden hover:border-gray-400 transition-colors text-left cursor-pointer"
    >
      <div className="h-full p-6 flex flex-col items-start justify-between gap-4">
        <div className="bg-gray-100 border border-gray-200 flex items-center justify-center relative overflow-hidden w-full aspect-video rounded">
          <svg
            className="absolute inset-0 w-full h-full text-gray-200"
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
            aria-hidden
          >
            <line x1="0" y1="0" x2="100" y2="100" stroke="currentColor" strokeWidth="1" vectorEffect="non-scaling-stroke" />
            <line x1="100" y1="0" x2="0" y2="100" stroke="currentColor" strokeWidth="1" vectorEffect="non-scaling-stroke" />
          </svg>
          <span className="relative text-[10px] font-normal text-muted/60 uppercase tracking-[0.08em] px-2 text-center leading-relaxed">
            {partner.name} logo
          </span>
        </div>
        <h3 className="font-serif font-normal text-xl text-ink leading-snug">
          {partner.name}
        </h3>
      </div>

      {/* Hover overlay with blurb */}
      <div className="absolute inset-0 bg-white p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
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
    </a>
  );
}

/* ───────────────────────── CTA band ───────────────────────── */

function JoinCommunity() {
  return (
    <section className="border-t border-border bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <p className="text-xs font-normal text-muted/60 uppercase tracking-[0.08em] mb-3">
            Ready to participate?
          </p>
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
          <a
            href="#add"
            className="bg-ink hover:bg-ink-hover text-white px-7 py-3 rounded text-sm font-semibold transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
          >
            Add your Technology <ArrowRight size={14} strokeWidth={2} />
          </a>
          <a
            href="#portfolio"
            className="text-sm underline underline-offset-2 text-muted hover:text-ink transition-colors text-center"
          >
            Browse the portfolio →
          </a>
        </div>
      </div>
    </section>
  );
}
