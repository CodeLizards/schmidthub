import type { Metadata } from "next";
import { ResourcesCatalog } from "@/components/resources/resources-catalog";
import { JoinCommunity } from "@/components/marketing/join-community";

export const metadata: Metadata = {
  title: "Resources · SHIP",
  description: "Templates, provisions, documents, and references for submitting and licensing IP.",
};

export default function ResourcesPage() {
  return <>
    <ResourcesCatalog />
    <JoinCommunity />
  </>;
}
