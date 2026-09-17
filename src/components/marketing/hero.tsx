import Link from "next/link";
import { BarChart2, Zap, Shield, type LucideIcon } from "lucide-react";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Card } from "@/components/ui/card";
import { LICENSE_TYPES } from "@/lib/content";

export function Hero() {
  return (
    <section className="pt-16 md:pt-18 pb-12 border-b border-border bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <Eyebrow className="mb-6">Schmidt Hub for IP</Eyebrow>
          <h1 className="font-serif font-normal text-5xl md:text-6xl text-ink leading-[1.05] tracking-[-0.02em] mb-6">
            Sharing Innovation.
            <br />
            Maximizing Impact.
          </h1>
          <p className="text-lg text-muted leading-relaxed max-w-3xl mx-auto mb-10">
            The Schmidt Hub connects world-class research with the institutions,
            entrepreneurs, and communities who can advance it. Explore what is
            available, or submit your own IP through a transparent, open
            platform.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          <PathCard
            Icon={BarChart2}
            title="Explore"
            body="Browse patents, datasets, tools, and academic work across the Schmidt ecosystem. Filter by subject, entity, or license."
            cta="Browse the portfolio"
            href="/portfolio"
          />
          <PathCard
            Icon={Zap}
            title="Participate"
            body="Submit your own IP through a simple, transparent workflow. Draft privately, submit for review, and pick the license the world sees."
            cta="Get started"
            href="/submit"
          />
          <LicenseIPCard />
        </div>
      </div>
    </section>
  );
}

function PathCard({
  Icon,
  title,
  body,
  cta,
  href,
}: {
  Icon: LucideIcon;
  title: string;
  body: string;
  cta: string;
  href: string;
}) {
  return (
    <Card as={Link} href={href} interactive className="group text-ink p-5">
      <div className="flex flex-col items-start text-left">
        <Icon size={16} className="mb-4 text-muted/60" />
        <h2 className="font-serif font-normal text-xl mb-2">{title}</h2>
        <p className="text-sm text-muted leading-relaxed mb-3">{body}</p>
        <span className="text-sm font-medium text-ink inline-flex items-center gap-1.5 mt-auto">
          {cta} <span aria-hidden>→</span>
        </span>
      </div>
    </Card>
  );
}

/** Third hero card: mini list of license families with a hover tooltip. */
function LicenseIPCard() {
  return (
    <Card className="p-5">
      <div className="flex flex-col items-start text-left">
        <Shield size={16} className="mb-4 text-muted/60" />
        <h2 className="font-serif font-normal text-xl mb-2">License IP</h2>
        <p className="text-sm text-muted leading-relaxed mb-3">
          Every entry ships with a clear license — chosen by the inventor,
          shown to the reader before download.
        </p>
        <div className="space-y-1 w-full">
          {LICENSE_TYPES.map((l) => (
            <div key={l.id} className="relative group">
              <Link
                href={`/licensing#${l.id}`}
                className="w-full text-left text-sm font-medium text-ink hover:underline inline-flex items-center gap-1.5 py-1"
              >
                {l.name} <span aria-hidden>→</span>
              </Link>
              <div className="absolute left-0 top-full mt-1 z-20 w-full max-w-72 bg-gray-100 border border-gray-200 text-ink text-xs leading-relaxed rounded-md p-3 shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-200">
                {l.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
