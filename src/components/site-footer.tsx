import Link from "next/link";

const EXPLORE = [
  { label: "IP Portfolio", href: "#portfolio" },
  { label: "About SHIP", href: "#about" },
  { label: "IP Learning Hub", href: "#learning" },
  { label: "IP Glossary", href: "#glossary" },
  { label: "Resources", href: "#resources" },
];

const PARTICIPATE = [
  { label: "Contact", href: "#contact" },
  { label: "Sign In", href: "#signin" },
  { label: "Sign Up", href: "#signup" },
];

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-rule bg-panel">
      <div className="mx-auto max-w-[1240px] px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="flex items-baseline gap-0.5 font-serif text-[22px] tracking-tight">
              <span className="font-medium">schmidt</span>
              <span className="font-medium text-accent">hub</span>
              <span className="text-muted">.org</span>
            </div>
            <p className="mt-4 max-w-[38ch] text-[13.5px] leading-relaxed text-ink-2">
              A SHIP initiative connecting intellectual property with the
              people who can advance it.
            </p>
            <ul className="mt-6 flex gap-4 text-[12px] font-mono uppercase tracking-[0.14em] text-muted">
              <li><a href="#" className="hover:text-accent">LinkedIn</a></li>
              <li><a href="#" className="hover:text-accent">X</a></li>
              <li><a href="#" className="hover:text-accent">YouTube</a></li>
              <li><a href="#" className="hover:text-accent">Instagram</a></li>
            </ul>
          </div>

          <FooterColumn heading="Explore" links={EXPLORE} />
          <FooterColumn heading="Participate" links={PARTICIPATE} />

          {/* Prototype nook — houses the delivery plan link */}
          <div>
            <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
              For the sponsor
            </div>
            <ul className="space-y-2.5 text-[13.5px]">
              <li>
                <a
                  href="/plan.html"
                  className="inline-flex items-center gap-2 text-ink-2 transition-colors hover:text-accent"
                >
                  12-week delivery plan
                  <span aria-hidden>→</span>
                </a>
              </li>
              <li>
                <Link
                  href="#dashboard"
                  className="text-ink-2 transition-colors hover:text-accent"
                >
                  Preview dashboard
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-rule-soft pt-8 text-[12px] text-muted md:flex-row md:items-center">
          <div>© 2026 Schmidt Foundation. All rights reserved.</div>
          <ul className="flex gap-6">
            <li><a href="#" className="hover:text-accent">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-accent">Terms of Use</a></li>
            <li><a href="#" className="hover:text-accent">Cookie Policy</a></li>
          </ul>
          <div className="font-mono uppercase tracking-[0.14em]">
            SHIP · Intellectual Property Platform
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  heading,
  links,
}: {
  heading: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
        {heading}
      </div>
      <ul className="space-y-2.5 text-[13.5px]">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="text-ink-2 transition-colors hover:text-accent"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
