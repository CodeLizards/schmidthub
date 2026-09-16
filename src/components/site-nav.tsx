import Link from "next/link";

const NAV_LINKS = [
  { label: "About SHIP", href: "#about" },
  { label: "IP Portfolio", href: "#portfolio" },
  { label: "IP Learning Hub", href: "#learning" },
  { label: "Resources", href: "#resources" },
];

export function SiteNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-ground/85 backdrop-blur supports-[backdrop-filter]:bg-ground/70">
      <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-6 px-6 py-4">
        <Link
          href="/"
          className="group flex items-baseline gap-0.5 font-serif text-[22px] tracking-tight text-ink"
        >
          <span className="font-medium">schmidt</span>
          <span className="font-medium text-accent">hub</span>
          <span className="text-muted">.org</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13.5px] text-ink-2 transition-colors hover:text-accent"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#signin"
            className="hidden text-[13.5px] text-ink-2 transition-colors hover:text-accent sm:inline"
          >
            Sign in
          </a>
          <a
            href="#add"
            className="inline-flex items-center gap-2 rounded-sm bg-accent px-4 py-2 text-[13px] font-medium text-ground transition-colors hover:bg-ink"
          >
            Add your Technology
          </a>
        </div>
      </div>
    </header>
  );
}
