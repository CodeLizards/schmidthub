import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "ghost" | "link";
type Size = "sm" | "md";

const BASE = "inline-flex items-center gap-1.5 rounded transition-colors font-medium whitespace-nowrap";

const VARIANT: Record<Variant, string> = {
  primary: "bg-ink text-white hover:bg-ink-hover",
  ghost: "text-muted hover:text-ink hover:bg-white border border-border",
  link: "text-muted hover:text-ink underline underline-offset-2",
};

const SIZE: Record<Size, string> = {
  sm: "text-sm px-4 py-1.5",
  md: "text-sm px-7 py-3 font-semibold",
};

type Props = {
  variant?: Variant;
  size?: Size;
  as?: "a" | "button";
  children: ReactNode;
  className?: string;
} & (ComponentProps<"a"> | ComponentProps<"button">);

/**
 * Text button with three visual variants. Renders as <a> when href is
 * provided (default), else <button>. Padding and font-weight come from
 * size; color and background from variant.
 */
export function Button({
  variant = "primary",
  size = "sm",
  as,
  className = "",
  children,
  ...rest
}: Props) {
  const cls = `${BASE} ${VARIANT[variant]} ${
    variant === "link" ? "" : SIZE[size]
  } ${className}`;
  const Tag = (as ?? ("href" in rest ? "a" : "button")) as "a" | "button";
  if (Tag === "a") {
    return (
      <a className={cls} {...(rest as ComponentProps<"a">)}>
        {children}
      </a>
    );
  }
  return (
    <button
      type="button"
      className={cls}
      {...(rest as ComponentProps<"button">)}
    >
      {children}
    </button>
  );
}
