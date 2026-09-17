"use client";

import { useState, useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";

export function ShareLinks() {
  const [message, setMessage] = useState("");
  const pathname = usePathname();
  const url = useSyncExternalStore(() => () => {}, () => window.location.origin + pathname, () => "");
  const encoded = encodeURIComponent(url);
  return <div className="border-t border-border mt-24 pt-8 flex flex-wrap items-center gap-3 text-xs text-muted">
    <span className="uppercase tracking-[0.08em] mr-1">Share</span>
    <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encoded}`} target="_blank" rel="noopener noreferrer" className="rounded border border-border bg-white px-3 py-2 hover:border-gray-400 hover:text-ink">LinkedIn</a>
    <a href={`https://twitter.com/intent/tweet?url=${encoded}`} target="_blank" rel="noopener noreferrer" className="rounded border border-border bg-white px-3 py-2 hover:border-gray-400 hover:text-ink">X</a>
    <a href={`mailto:?body=${encoded}`} className="rounded border border-border bg-white px-3 py-2 hover:border-gray-400 hover:text-ink">Email</a>
    <button type="button" onClick={async () => { try { await navigator.clipboard.writeText(window.location.href); setMessage("Link copied to clipboard"); } catch { setMessage("Unable to copy link"); } }} className="rounded border border-border bg-white px-3 py-2 hover:border-gray-400 hover:text-ink">{message === "Link copied to clipboard" ? "Copied" : "Copy link"}</button>
    <span role="status" className="sr-only">{message}</span>
  </div>;
}
