import Link from "next/link";

export function SignInForm({ compact = false }: { compact?: boolean }) {
  return (
    <div id="sign-in" className="flex flex-col h-full">
      {compact ? (
        <>
          <p className="text-xs uppercase tracking-[0.12em] text-muted mb-3">Already have an account?</p>
          <h2 className="font-serif text-3xl mb-3">Sign in to submit</h2>
          <p className="text-sm leading-relaxed text-muted mb-8">Sign in to start a new entry, pick up a saved draft, or check where an existing submission sits in review.</p>
        </>
      ) : (
        <>
          <p className="font-serif text-3xl text-center mb-2">schmidthub</p>
          <h1 className="text-center text-sm text-muted mb-8">Sign in to your account</h1>
        </>
      )}
      <p className="text-xs text-muted mb-4" role="note">Account sign-in is unavailable in this proof of concept.</p>
      <div className="space-y-4">
        <label className="block text-sm font-medium">Email
          <input name="email" type="email" autoComplete="email" spellCheck={false} placeholder="you@institution.edu" className="mt-2 w-full rounded border border-border bg-white px-4 py-3 text-sm focus-visible:outline-2 focus-visible:outline-ink" />
        </label>
        <div><div className="flex justify-between text-sm font-medium"><label htmlFor={compact ? "submit-password" : "account-password"}>Password</label><span className="text-xs text-muted">Forgot? (unavailable)</span></div>
          <input id={compact ? "submit-password" : "account-password"} name="password" type="password" autoComplete="current-password" placeholder="••••••••" className="mt-2 w-full rounded border border-border bg-white px-4 py-3 text-sm focus-visible:outline-2 focus-visible:outline-ink" />
        </div>
      </div>
      <button type="button" disabled className="mt-4 w-full rounded bg-ink px-5 py-3 text-sm font-semibold text-white opacity-50 cursor-not-allowed">Continue (unavailable)</button>
      <div className="flex items-center gap-3 my-5 text-xs text-muted"><span className="h-px bg-border flex-1" />or<span className="h-px bg-border flex-1" /></div>
      <button type="button" disabled className="w-full rounded border border-border px-5 py-3 text-sm font-medium opacity-50 cursor-not-allowed">Sign in with Google (unavailable)</button>
      {!compact && <p className="text-sm text-muted text-center mt-7">No account? <Link className="text-ink underline" href="/sign-up">Request to join →</Link></p>}
    </div>
  );
}
