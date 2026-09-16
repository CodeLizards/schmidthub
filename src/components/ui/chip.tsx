import type { ComponentProps, ReactNode } from "react";

type Tone = "solid" | "soft" | "outline";

const TONE: Record<Tone, string> = {
  solid: "bg-ink text-white border border-ink",
  soft: "text-muted bg-gray-100 border border-gray-200",
  outline: "text-muted border border-border",
};

/**
 * Small pill used for tags, subject badges, filter tabs, and status
 * markers. When `onClick` is passed it renders as an interactive button
 * with hover state; otherwise as an inert span.
 */
export function Chip({
  tone = "soft",
  active = false,
  size = "sm",
  className = "",
  children,
  ...rest
}: {
  tone?: Tone;
  active?: boolean;
  size?: "xs" | "sm";
  className?: string;
  children: ReactNode;
} & (ComponentProps<"span"> | ComponentProps<"button">)) {
  const sz = size === "xs"
    ? "text-[11px] px-2 py-0.5"
    : "text-xs px-3 py-1.5";
  const tone_ = active ? TONE.solid : TONE[tone];
  const hover = "onClick" in rest && rest.onClick
    ? " hover:text-ink hover:border-gray-400 transition-colors"
    : "";
  const cls = `inline-flex items-center gap-1 rounded ${sz} ${tone_}${hover} ${className}`;
  if ("onClick" in rest && rest.onClick) {
    return (
      <button
        type="button"
        className={cls}
        aria-pressed={active}
        {...(rest as ComponentProps<"button">)}
      >
        {children}
      </button>
    );
  }
  return (
    <span className={cls} {...(rest as ComponentProps<"span">)}>
      {children}
    </span>
  );
}
