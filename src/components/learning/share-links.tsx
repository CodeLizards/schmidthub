"use client";

import { useState, useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";

export function ShareLinks() {
  const [message, setMessage] = useState("");
  const pathname = usePathname();
  const url = useSyncExternalStore(() => () => {}, () => window.location.origin + pathname, () => "");
  const encoded = encodeURIComponent(url);
  return <div className="border-t border-border mt-12 pt-6 flex flex-wrap items-center gap-5 text-sm text-muted">
    <span>Share</span>
    <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encoded}`} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-ink">LinkedIn</a>
    <a href={`https://twitter.com/intent/tweet?url=${encoded}`} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-ink">X</a>
    <a href={`mailto:?body=${encoded}`} className="underline underline-offset-4 hover:text-ink">Email</a>
    <button type="button" onClick={async () => { try { await navigator.clipboard.writeText(window.location.href); setMessage("Link copied to clipboard"); } catch { setMessage("Unable to copy link"); } }} className="underline underline-offset-4 hover:text-ink">{message === "Link copied to clipboard" ? "Copied" : "Copy link"}</button>
    <span role="status" className="sr-only">{message}</span>
  </div>;
}
