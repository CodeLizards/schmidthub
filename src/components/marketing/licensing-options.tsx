import Link from "next/link";

export function LicensingOptions() {
  return (
    <section id="licensing" className="py-20 border-t border-border bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-serif font-normal text-3xl text-ink tracking-[-0.02em] leading-tight mb-3">
          Licensing options
        </h2>
        <p className="text-sm text-muted leading-relaxed mb-4 max-w-3xl">
          Many entries are published under a clear license:{" "}
          <strong className="font-semibold text-ink">
            Open Research License
          </strong>
          ,{" "}
          <strong className="font-semibold text-ink">CC BY 4.0</strong>,{" "}
          <strong className="font-semibold text-ink">MIT</strong>,{" "}
          <strong className="font-semibold text-ink">Apache 2.0</strong>, or a{" "}
          <strong className="font-semibold text-ink">Commercial License</strong>
          . Each defines how the work can be used, shared, and built upon.
        </p>
        <Link
          href="/licensing"
          className="text-sm underline underline-offset-2 text-muted hover:text-ink transition-colors"
        >
          Compare the license types →
        </Link>
      </div>
    </section>
  );
}
