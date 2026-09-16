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

const PROTOTYPE = [
  { label: "Dashboard", href: "#dashboard" },
  { label: "1-Time Submission", href: "#one-time" },
  { label: "12-week delivery plan", href: "/plan.html" },
];

const SOCIALS: { label: string; href: string }[] = [
  { label: "LinkedIn", href: "#" },
  { label: "X", href: "#" },
  { label: "YouTube", href: "#" },
  { label: "Instagram", href: "#" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-10">
        {/* Brand column */}
        <div className="col-span-2 md:col-span-1">
          <div className="font-sans font-bold text-ink text-base mb-3">
            schmidthub<span className="text-muted/60">.org</span>
          </div>
          <p className="text-sm text-muted leading-relaxed max-w-xs">
            A SHIP initiative connecting intellectual property with the people
            who can advance it.
          </p>
          <div className="flex items-center gap-3 mt-5">
            {SOCIALS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-8 h-8 rounded border border-border flex items-center justify-center text-muted/60 hover:text-ink hover:border-gray-400 transition-colors text-xs font-medium"
              >
                {label === "X" ? "X" : label.slice(0, 2)}
              </a>
            ))}
          </div>
        </div>

        <FooterColumn heading="Explore" links={EXPLORE} />
        <FooterColumn heading="Participate" links={PARTICIPATE} />
        <FooterColumn heading="Only here for prototype purpose" links={PROTOTYPE} />
      </div>

      {/* Copyright bar */}
      <div className="border-t border-border max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-muted/60">
          © 2026 Schmidt Foundation. All rights reserved.
        </p>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-4">
            <a href="#" className="text-xs text-muted/60 underline underline-offset-2 hover:text-ink transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-muted/60 underline underline-offset-2 hover:text-ink transition-colors">
              Terms of Use
            </a>
            <a href="#" className="text-xs text-muted/60 underline underline-offset-2 hover:text-ink transition-colors">
              Cookie Policy
            </a>
          </div>
          <p className="text-xs text-muted/60 font-mono">
            SHIP · Intellectual Property Platform
          </p>
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
      <p className="text-xs font-normal text-muted/60 uppercase tracking-[0.08em] mb-4">
        {heading}
      </p>
      <ul className="space-y-2">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="text-sm text-muted hover:text-ink transition-colors"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
