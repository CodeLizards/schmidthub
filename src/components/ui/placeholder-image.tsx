import type { ReactNode } from "react";

/**
 * Wireframe-style placeholder: gray square with a diagonal cross and an
 * optional label. Used where real imagery isn't wired up yet.
 */
export function PlaceholderImage({
  label,
  aspect = "video",
  fixedHeight,
  overlay,
  className = "",
}: {
  label?: string;
  aspect?: "video" | "square";
  fixedHeight?: string;
  overlay?: ReactNode;
  className?: string;
}) {
  const dims = fixedHeight
    ? fixedHeight
    : aspect === "video"
      ? "aspect-video"
      : "aspect-square";
  return (
    <div
      className={`relative w-full ${dims} rounded overflow-hidden bg-gray-100 border border-gray-200 ${className}`}
    >
      <svg
        className="absolute inset-0 w-full h-full text-gray-200"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
        aria-hidden
      >
        <line
          x1="0"
          y1="0"
          x2="100"
          y2="100"
          stroke="currentColor"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
        <line
          x1="100"
          y1="0"
          x2="0"
          y2="100"
          stroke="currentColor"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      {label && (
        <span className="absolute inset-0 flex items-center justify-center text-[10px] font-normal text-muted/60 uppercase tracking-[0.08em] px-2 text-center leading-relaxed">
          {label}
        </span>
      )}
      {overlay}
    </div>
  );
}
