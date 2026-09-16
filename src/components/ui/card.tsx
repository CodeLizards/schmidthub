import type { ComponentProps, ElementType, ReactNode } from "react";

/**
 * White card container with border and hover-border. Optionally
 * renderable as <a>, <button>, or <li>. Used for hero path cards,
 * featured-entry cards, partner cards.
 */
export function Card<T extends ElementType = "div">({
  as,
  interactive = false,
  className = "",
  children,
  ...rest
}: {
  as?: T;
  interactive?: boolean;
  className?: string;
  children: ReactNode;
} & Omit<ComponentProps<T>, "as" | "children" | "className">) {
  const Tag = (as ?? "div") as ElementType;
  const base =
    "block bg-white border border-border rounded transition-colors";
  const hover = interactive
    ? " hover:border-gray-400 hover:shadow-sm transition-all duration-200"
    : "";
  return (
    <Tag className={`${base}${hover} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
