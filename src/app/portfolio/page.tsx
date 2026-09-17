import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { PortfolioCatalog } from "@/components/marketing/portfolio-catalog";
import { JoinCommunity } from "@/components/marketing/join-community";

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
        title="Browse intellectual property from across the Schmidt ecosystem"
        description="Patents, datasets, software, and designs — filter by subject, entity, and tags, or search to find what you can license."
      />
      <PortfolioCatalog />
      <JoinCommunity />
    </>
  );
}
