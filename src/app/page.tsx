import { Hero } from "@/components/marketing/hero";
import { FeaturedEntries } from "@/components/marketing/featured-entries";
import { LicensingOptions } from "@/components/marketing/licensing-options";
import { FoundingPartners } from "@/components/marketing/founding-partners";
import { JoinCommunity } from "@/components/marketing/join-community";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedEntries />
      <LicensingOptions />
      <FoundingPartners />
      <JoinCommunity />
    </>
  );
}
