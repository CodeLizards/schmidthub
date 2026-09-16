import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { label: "About SHIP", href: "/about" },
  { label: "IP Portfolio", href: "/portfolio" },
  { label: "IP Learning Hub", href: "/learning-hub" },
  { label: "Resources", href: "/resources" },
];

export function SiteNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-white/95 backdrop-blur">
      <nav className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between gap-8">
        <Link
          href="/"
          className="shrink-0 font-serif font-normal text-lg tracking-[-0.02em] text-ink"
        >
          schmidt
          <span className="text-muted/60">hub</span>
          <span className="text-gray-300">.org</span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="px-3 py-1.5 text-sm rounded transition-colors text-muted hover:text-ink hover:bg-gray-50"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/sign-in"
            className="text-sm text-muted hover:text-ink px-4 py-1.5 rounded transition-colors font-medium whitespace-nowrap"
          >
            Sign in
          </Link>
          <Button href="/submit" variant="primary">
            Add your Technology
          </Button>
        </div>

        <button
          type="button"
          aria-label="Open menu"
          className="md:hidden text-muted hover:text-ink"
        >
          <Menu size={20} strokeWidth={2} />
        </button>
      </nav>
    </header>
  );
}
