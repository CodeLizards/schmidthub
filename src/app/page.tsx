import { ENTRIES, ENTRY_TYPES, PARTNERS, LICENSE_TYPES } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <Hero />
      <LicenseBand />
      <FeaturedEntries />
      <FoundingPartners />
      <CtaBand />
    </>
  );
}

/* ───────────────────────── Hero ───────────────────────── */

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-rule">
      {/* subtle radial light for depth, kept quiet */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, #1E3E63 0%, rgba(30,62,99,0) 70%)",
        }}
      />
      <div className="mx-auto grid max-w-[1240px] gap-16 px-6 pb-24 pt-20 md:grid-cols-[1.4fr_1fr] md:pt-28">
        <div>
          <div className="eyebrow flex items-center gap-3">
            <span className="h-px w-6 bg-muted" />
            Schmidt Hub for IP
          </div>
          <h1 className="mt-6 font-serif text-[54px] font-medium leading-[1.02] tracking-tight text-ink text-balance md:text-[68px]">
            Sharing Innovation.{" "}
            <span className="italic text-accent">
              Maximising&nbsp;Impact.
            </span>
          </h1>
          <p className="mt-6 max-w-[52ch] text-[17px] leading-relaxed text-ink-2">
            The Schmidt Hub connects world-class research with the institutions,
            entrepreneurs, and communities who can advance it — a single index
            of patents, datasets, tools, and academic work published across the
            Schmidt ecosystem, each entry with a clear license and a way to
            reach the people behind it.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 rounded-sm bg-accent px-5 py-3 text-[14px] font-medium text-ground transition-colors hover:bg-ink"
            >
              Browse the portfolio
              <span aria-hidden>→</span>
            </a>
            <a
              href="#add"
              className="inline-flex items-center gap-2 rounded-sm border border-rule px-5 py-3 text-[14px] font-medium text-ink transition-colors hover:border-accent hover:text-accent"
            >
              Add your Technology
            </a>
          </div>
        </div>

        {/* Explore / Participate paired cards */}
        <div className="grid content-start gap-4">
          <PathCard
            eyebrow="For discoverers"
            heading="Explore"
            body="Filter across five entry types and six subject areas. Every entry names its license, its contact, and what you get on download."
            cta="Browse the portfolio"
            href="#portfolio"
          />
          <PathCard
            eyebrow="For inventors"
            heading="Participate"
            body="Add a patent, dataset, tool, protocol, or creative work. Draft privately, submit for review, and choose the license the world sees."
            cta="Get started"
            href="#add"
          />
        </div>
      </div>
    </section>
  );
}

function PathCard({
  eyebrow,
  heading,
  body,
  cta,
  href,
}: {
  eyebrow: string;
  heading: string;
  body: string;
  cta: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="group relative block border border-rule bg-panel p-6 transition-colors hover:border-accent"
    >
      <div className="eyebrow">{eyebrow}</div>
      <h3 className="mt-3 font-serif text-[26px] font-medium tracking-tight text-ink">
        {heading}
      </h3>
      <p className="mt-2 text-[14px] leading-relaxed text-ink-2">
        {body}
      </p>
      <div className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
        {cta}
        <span
          aria-hidden
          className="transition-transform group-hover:translate-x-0.5"
        >
          →
        </span>
      </div>
    </a>
  );
}

/* ─────────────────────── License band ─────────────────── */

function LicenseBand() {
  return (
    <section id="licensing" className="border-b border-rule">
      <div className="mx-auto max-w-[1240px] px-6 py-24">
        <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
          <div>
            <div className="eyebrow flex items-center gap-3">
              <span className="h-px w-6 bg-muted" /> License IP
            </div>
            <h2 className="mt-6 max-w-[16ch] font-serif text-[38px] font-medium leading-tight tracking-tight text-ink text-balance">
              Every entry has a clear license.
            </h2>
            <p className="mt-4 max-w-[38ch] text-[15px] leading-relaxed text-ink-2">
              Three families, plus custom terms for cases that don&rsquo;t fit
              — chosen by the inventor when they submit, shown to the reader
              before they download.
            </p>
            <a
              href="#compare"
              className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-accent hover:text-ink"
            >
              Compare license types
              <span aria-hidden>→</span>
            </a>
          </div>

          <div className="grid gap-0 border border-rule bg-panel">
            {LICENSE_TYPES.map((l, i) => (
              <div
                key={l.id}
                className={
                  "grid grid-cols-[auto_1fr] gap-6 px-6 py-6 " +
                  (i < LICENSE_TYPES.length - 1
                    ? "border-b border-rule-soft "
                    : "")
                }
              >
                <div className="pt-1">
                  <div className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-accent">
                    {l.tag}
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-[20px] font-medium text-ink">
                    {l.name}
                  </h3>
                  <p className="mt-1 text-[14px] leading-relaxed text-ink-2">
                    {l.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── Featured entries ─────────────── */

function FeaturedEntries() {
  return (
    <section id="portfolio" className="border-b border-rule">
      <div className="mx-auto max-w-[1240px] px-6 py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="eyebrow flex items-center gap-3">
              <span className="h-px w-6 bg-muted" />
              Featured IP entries
            </div>
            <h2 className="mt-4 font-serif text-[36px] font-medium leading-tight tracking-tight text-ink text-balance">
              Recently added and highly accessed.
            </h2>
          </div>
          <a
            href="#portfolio"
            className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent hover:text-ink"
          >
            Browse all →
          </a>
        </div>

        {/* Filter tabs (visual only for the pitch) */}
        <div className="mt-10 flex flex-wrap gap-1 border-b border-rule-soft">
          {ENTRY_TYPES.map((t, i) => (
            <button
              key={t}
              className={
                "px-4 py-3 text-[13px] font-medium transition-colors " +
                (i === 0
                  ? "border-b-2 border-accent text-ink"
                  : "text-muted hover:text-ink")
              }
            >
              {t}
            </button>
          ))}
        </div>

        <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ENTRIES.map((e) => (
            <EntryCard key={e.id} entry={e} />
          ))}
        </ul>
      </div>
    </section>
  );
}

function EntryCard({ entry }: { entry: (typeof ENTRIES)[number] }) {
  return (
    <li className="group flex flex-col border border-rule bg-panel p-6 transition-colors hover:border-accent">
      <div className="flex flex-wrap gap-2">
        <Chip>{entry.type}</Chip>
        <Chip subtle>{entry.subject}</Chip>
      </div>
      <div className="mt-4 font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
        {entry.org}
      </div>
      <h3 className="mt-2 font-serif text-[22px] font-medium leading-snug tracking-tight text-ink text-balance">
        {entry.title}
      </h3>
      <p className="mt-3 text-[14px] leading-relaxed text-ink-2">
        {entry.description}
      </p>
      <ul className="mt-5 flex flex-wrap gap-1.5">
        {entry.tags.map((t) => (
          <li
            key={t}
            className="rounded-sm bg-accent-soft px-2 py-1 font-mono text-[10.5px] uppercase tracking-[0.08em] text-accent"
          >
            {t}
          </li>
        ))}
      </ul>
      <div className="mt-6 flex items-center justify-between border-t border-rule-soft pt-4 font-mono text-[10.5px] uppercase tracking-[0.1em] text-muted">
        <span>
          {entry.docs} doc{entry.docs === 1 ? "" : "s"} · {entry.images} images
        </span>
        <span className="num text-muted-2">{entry.id}</span>
      </div>
    </li>
  );
}

function Chip({
  children,
  subtle = false,
}: {
  children: React.ReactNode;
  subtle?: boolean;
}) {
  return (
    <span
      className={
        "rounded-sm px-2 py-1 font-mono text-[10.5px] uppercase tracking-[0.1em] " +
        (subtle
          ? "border border-rule text-ink-2"
          : "bg-panel-2 text-accent")
      }
    >
      {children}
    </span>
  );
}

/* ─────────────────────── Founding partners ────────────── */

function FoundingPartners() {
  return (
    <section id="about" className="border-b border-rule">
      <div className="mx-auto max-w-[1240px] px-6 py-24">
        <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
          <div>
            <div className="eyebrow flex items-center gap-3">
              <span className="h-px w-6 bg-muted" />
              Founding Partners
            </div>
            <h2 className="mt-6 max-w-[18ch] font-serif text-[38px] font-medium leading-tight tracking-tight text-ink text-balance">
              Six organisations, one directory.
            </h2>
            <p className="mt-4 max-w-[38ch] text-[15px] leading-relaxed text-ink-2">
              Each partner runs its own high-impact research programme, and
              each publishes here under the same review and licensing
              standards — so a reader can browse one directory instead of six.
            </p>
            <a
              href="#about"
              className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-accent hover:text-ink"
            >
              About SHIP
              <span aria-hidden>→</span>
            </a>
          </div>

          <ul className="grid gap-0 border border-rule bg-panel sm:grid-cols-2">
            {PARTNERS.map((p, i) => (
              <li
                key={p.id}
                className={
                  "flex gap-4 p-6 " +
                  (i % 2 === 0 ? "sm:border-r sm:border-rule-soft " : "") +
                  (i < PARTNERS.length - 2 ? "border-b border-rule-soft " : "sm:border-b-0 border-b border-rule-soft last:border-b-0")
                }
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-rule bg-panel-2 font-serif text-[15px] font-medium tracking-tight text-accent">
                  {p.initials}
                </div>
                <div>
                  <h3 className="font-serif text-[17px] font-medium text-ink">
                    {p.name}
                  </h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-ink-2">
                    {p.blurb}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── CTA ──────────────────────── */

function CtaBand() {
  return (
    <section className="border-b border-rule">
      <div className="mx-auto max-w-[1240px] px-6 py-24 text-center">
        <div className="eyebrow flex items-center justify-center gap-3">
          <span className="h-px w-6 bg-muted" />
          Ready to participate?
          <span className="h-px w-6 bg-muted" />
        </div>
        <h2 className="mt-6 font-serif text-[44px] font-medium leading-tight tracking-tight text-ink text-balance md:text-[56px]">
          Join our community.
        </h2>
        <p className="mx-auto mt-4 max-w-[54ch] text-[16px] leading-relaxed text-ink-2">
          Share your intellectual property, discover groundbreaking
          technologies, and reach a worldwide network of institutions,
          entrepreneurs, and researchers who can move it forward.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href="#add"
            className="inline-flex items-center gap-2 rounded-sm bg-accent px-5 py-3 text-[14px] font-medium text-ground transition-colors hover:bg-ink"
          >
            Add your Technology
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center gap-2 rounded-sm border border-rule px-5 py-3 text-[14px] font-medium text-ink transition-colors hover:border-accent hover:text-accent"
          >
            Browse the portfolio →
          </a>
        </div>
      </div>
    </section>
  );
}
