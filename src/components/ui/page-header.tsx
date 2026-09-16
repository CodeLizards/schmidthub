import type { ReactNode } from "react";
import { Eyebrow } from "@/components/ui/eyebrow";

/**
 * Standard page header used at the top of secondary routes: eyebrow,
 * big serif title, description paragraph, optional action row.
 */
export function PageHeader({
  eyebrow,
  title,
  description,
  actions,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
}) {
  return (
    <section className="pt-24 pb-12 border-b border-border bg-white">
      <div className="max-w-4xl mx-auto px-6">
        {eyebrow && <Eyebrow className="mb-4">{eyebrow}</Eyebrow>}
        <h1 className="font-serif font-normal text-4xl md:text-5xl text-ink leading-[1.1] tracking-[-0.02em] mb-4">
          {title}
        </h1>
        {description && (
          <p className="text-lg text-muted leading-relaxed max-w-2xl">
            {description}
          </p>
        )}
        {actions && <div className="mt-8 flex flex-wrap gap-3">{actions}</div>}
      </div>
    </section>
  );
}
