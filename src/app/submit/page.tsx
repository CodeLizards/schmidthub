import type { Metadata } from "next";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { SignInForm } from "@/components/participate/sign-in-form";

export const metadata: Metadata = { title: "Participate · SHIP", description: "Request submitter access or sign in to share your intellectual property." };

export default function SubmitPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10 md:py-14">
      <Link href="/" className="text-sm text-muted hover:text-ink">← Back to home</Link>
      <div className="grid md:grid-cols-2 gap-5 mt-7">
        <Card className="p-7 md:p-10 min-h-[510px] flex flex-col">
          <p className="text-xs uppercase tracking-[0.12em] text-muted mb-3">New here?</p>
          <h1 className="font-serif text-3xl mb-3">Request a submitter account</h1>
          <p className="text-sm text-muted leading-relaxed">Submitter access is free for anyone working under one of our registered entities. Request an account and we will set you up — or send a one-time submission link if you only need to publish once.</p>
          <div className="mt-auto pt-10">
            <ul className="space-y-3 text-sm text-muted mb-7">
              <li><span className="text-ink mr-2" aria-hidden="true">✓</span>Free for Schmidt-affiliated researchers</li>
              <li><span className="text-ink mr-2" aria-hidden="true">✓</span>Approval typically takes 2 business days</li>
              <li><span className="text-ink mr-2" aria-hidden="true">✓</span>No account needed for a one-time submission</li>
            </ul>
            <Link href="/sign-up" className="inline-flex rounded bg-ink px-6 py-3 text-sm font-semibold text-white hover:bg-ink-hover">Request to join →</Link>
          </div>
        </Card>
        <Card className="p-7 md:p-10"><SignInForm compact /></Card>
      </div>
      <Card className="mt-5 p-7 md:p-10">
        <p className="text-xs uppercase tracking-[0.12em] text-muted mb-3">Not ready to submit?</p>
        <h2 className="font-serif text-2xl mb-3">Explore the portfolio first</h2>
        <p className="text-sm text-muted leading-relaxed max-w-2xl mb-6">Browsing needs no account. See what is already published, how entries are described, and which licenses other researchers chose.</p>
        <div className="flex flex-wrap gap-6 text-sm font-medium"><Link className="underline underline-offset-4" href="/portfolio">Browse the portfolio →</Link><Link className="underline underline-offset-4" href="/submission-criteria">Read the submission criteria →</Link></div>
      </Card>
    </div>
  );
}
