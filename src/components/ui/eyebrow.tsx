/**
 * Small uppercase mono label used above headings and next to controls.
 * Optionally renders a short horizontal rule to its left.
 */
export function Eyebrow({
  children,
  rule = false,
  centered = false,
  className = "",
}: {
  children: React.ReactNode;
  rule?: boolean;
  centered?: boolean;
  className?: string;
}) {
  const base =
    "text-xs font-normal text-muted/60 uppercase tracking-[0.08em]";
  if (!rule) return <p className={`${base} ${className}`}>{children}</p>;
  return (
    <p
      className={`${base} inline-flex items-center ${
        centered ? "justify-center" : ""
      } gap-3 ${className}`}
    >
      <span aria-hidden className="h-px w-6 bg-muted/60" />
      {children}
      {centered && <span aria-hidden className="h-px w-6 bg-muted/60" />}
    </p>
  );
}
