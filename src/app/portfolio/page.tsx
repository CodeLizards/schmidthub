import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { PortfolioCatalog } from "@/components/marketing/portfolio-catalog";
import { JoinCommunity } from "@/components/marketing/join-community";
import { LICENSE_GROUPS, PORTFOLIO_LICENSES } from "@/lib/content";

export const metadata: Metadata = {
  title: "IP Portfolio · SHIP",
  description:
    "Browse patents, datasets, software, and designs across the Schmidt ecosystem.",
};

const VALID_LICENSES: ReadonlySet<string> = new Set(PORTFOLIO_LICENSES);

export default async function PortfolioPage({
  searchParams,
}: {
  searchParams: Promise<{ licenseGroup?: string | string[]; license?: string | string[] }>;
}) {
  const { licenseGroup: group, license } = await searchParams;
  const selectedGroup = typeof group === "string" && Object.hasOwn(LICENSE_GROUPS, group) ? group : "";
  const initialLicenses = license === undefined
    ? LICENSE_GROUPS[selectedGroup] ?? []
    : (Array.isArray(license) ? license : [license]).filter((value) => VALID_LICENSES.has(value));
  return (
    <>
      <PageHeader
        eyebrow="IP Portfolio"
        title="Browse intellectual property from across the Schmidt ecosystem"
        description="Patents, datasets, software, and designs — filter by subject, entity, and tags, or search to find what you can license."
      />
      <PortfolioCatalog key={selectedGroup} initialLicenses={initialLicenses} initialLicenseGroup={selectedGroup} />
      <JoinCommunity />
    </>
  );
}
