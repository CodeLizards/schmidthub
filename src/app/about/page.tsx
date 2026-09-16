import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { FoundingPartners } from "@/components/marketing/founding-partners";
import { JoinCommunity } from "@/components/marketing/join-community";

export const metadata: Metadata = {
  title: "About SHIP",
  description:
    "SHIP is a shared platform for intellectual property published across the Schmidt ecosystem.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About SHIP"
        title="One index for six research programmes."
        description="The Schmidt Hub for Intellectual Property brings together patents, datasets, protocols, and creative works from six founding partners, published under clear licenses and connected to the people behind them."
      />
      <FoundingPartners />
      <JoinCommunity />
    </>
  );
}
