import type { Metadata } from "next";
import { Arimo } from "next/font/google";
import "./globals.css";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

const arimo = Arimo({
  variable: "--font-arimo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SHIP · Schmidt Hub for Intellectual Property",
  description:
    "The Schmidt Hub connects world-class research with the institutions, entrepreneurs, and communities who can advance it.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${arimo.variable} h-full`}>
      <body className="min-h-full flex flex-col">
        <SiteNav />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
