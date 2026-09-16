import type { ReactNode } from "react";

/**
 * Standard section header: a heading on the left, an optional link on
 * the right, an optional small mono subtitle below the heading.
 */
export function SectionHeader({
  heading,
  subtitle,
  right,
  size = "md",
  className = "",
}: {
  heading: ReactNode;
  subtitle?: ReactNode;
  right?: ReactNode;
  size?: "md" | "lg";
  className?: string;
}) {
  const h = size === "lg"
    ? "text-3xl md:text-4xl"
    : "text-3xl";
  return (
    <div
      className={`flex items-end justify-between mb-8 flex-wrap gap-4 ${className}`}
    >
      <div>
        <h2
          className={`font-serif font-normal ${h} text-ink tracking-[-0.02em] leading-tight`}
        >
          {heading}
        </h2>
        {subtitle && (
          <p className="text-sm text-muted/60 mt-1 font-mono">{subtitle}</p>
        )}
      </div>
      {right}
    </div>
  );
}
