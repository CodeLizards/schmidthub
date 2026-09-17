import type { Metadata } from "next";
import Link from "next/link";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = { title: "Register your interest · SHIP" };

export default function SignUpPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 md:py-20">
      <Link href="/submit" className="text-sm text-muted hover:text-ink">← Back to sign in</Link>
      <p className="text-xs uppercase tracking-[0.12em] text-muted mt-10 mb-3">Contact</p>
      <h1 className="font-serif text-4xl md:text-5xl mb-4">Register Your Interest</h1>
      <p className="text-muted leading-relaxed mb-9">Our partnership team will evaluate your interest and get back to you as soon as possible.</p>
      <Card className="p-7 md:p-10">
        <h2 className="font-serif text-2xl mb-6">Tell us about yourself</h2>
        <p className="text-xs text-muted mb-6" role="note">Interest requests are unavailable in this proof of concept. Your details are not sent or saved.</p>
        <div className="grid sm:grid-cols-2 gap-5">
          {[{ label: "Full Name", name: "name", type: "text", complete: "name" }, { label: "Organization", name: "organization", type: "text", complete: "organization" }, { label: "Email", name: "email", type: "email", complete: "email" }, { label: "Website (optional)", name: "website", type: "url", complete: "url" }].map(({ label, name, type, complete }) => <label key={name} className="text-sm font-medium">{label}<input name={name} type={type} autoComplete={complete} spellCheck={type === "email" ? false : undefined} className="block mt-2 w-full rounded border border-border px-4 py-3 text-sm focus-visible:outline-2 focus-visible:outline-ink" /></label>)}
          <label className="sm:col-span-2 text-sm font-medium">Why are you interested in joining?<textarea name="interest" autoComplete="off" rows={5} className="block mt-2 w-full rounded border border-border px-4 py-3 text-sm focus-visible:outline-2 focus-visible:outline-ink" /></label>
        </div>
        <button type="button" disabled className="mt-4 rounded bg-ink px-6 py-3 text-sm font-semibold text-white opacity-50 cursor-not-allowed">Submit interest (unavailable)</button>
      </Card>
    </div>
  );
}
