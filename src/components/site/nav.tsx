"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { label: "About SHIP", href: "/about" },
  { label: "IP Portfolio", href: "/portfolio" },
  { label: "IP Learning Hub", href: "/learning-hub" },
  { label: "Resources", href: "/resources" },
];

export function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  return (
    <header onKeyDown={(event) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        menuButton.current?.focus();
      }
    }} className="sticky top-0 z-40 border-b border-border bg-white/95 backdrop-blur">
      <nav className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between gap-8">
        <Link
          href="/"
          className="shrink-0 font-serif font-normal text-lg tracking-[-0.02em] text-ink"
        >
          schmidt
          <span className="text-muted/60">hub</span>
          <span className="text-gray-300">.org</span>
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={pathname === l.href || (l.href === "/learning-hub" && (pathname.startsWith("/topics/") || pathname.startsWith("/insights/") || pathname === "/licensing")) ? "page" : undefined}
              className={`px-3 py-1.5 text-sm rounded transition-colors hover:text-ink hover:bg-gray-50 ${pathname === l.href || (l.href === "/learning-hub" && (pathname.startsWith("/topics/") || pathname.startsWith("/insights/") || pathname === "/licensing")) ? "bg-[#edf0f6] text-ink" : "text-muted"}`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
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
          ref={menuButton}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
          className="lg:hidden text-muted hover:text-ink p-3 -mr-3"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      {open && (
        <nav id="mobile-navigation" aria-label="Mobile navigation" className="lg:hidden border-t border-border bg-white px-6 py-4">
          {[...NAV_LINKS, { label: "Sign in", href: "/sign-in" }, { label: "Add your Technology", href: "/submit" }].map((link) => (
            <Link key={link.href} href={link.href} aria-current={pathname === link.href ? "page" : undefined} onClick={() => setOpen(false)} className="block rounded px-3 py-3 text-sm text-ink hover:bg-panel">
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
