import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { FeaturedEntries } from "@/components/marketing/featured-entries";

export const metadata: Metadata = {
  title: "IP Portfolio · SHIP",
  description:
    "Browse patents, datasets, software, and designs across the Schmidt ecosystem.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        eyebrow="IP Portfolio"
        title="Browse the SHIP portfolio"
        description="Patents, datasets, software, and designs — filter by subject, entity, and tags, or search to find what you can license."
      />
      <FeaturedEntries />
    </>
  );
}
