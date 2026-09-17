import type { Metadata } from "next";
import "./globals.css";
import { SiteNav } from "@/components/site/nav";
import { SiteFooter } from "@/components/site/footer";

export const metadata: Metadata = {
  title: "SHIP · Schmidt Hub for Intellectual Property",
  description:
    "The Schmidt Hub connects world-class research with the institutions, entrepreneurs, and communities who can advance it.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-white focus:p-3">Skip to content</a>
        <SiteNav />
        <main id="main-content" tabIndex={-1} className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
