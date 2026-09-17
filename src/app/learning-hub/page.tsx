import type { Metadata } from "next";
import { LearningHub } from "@/components/learning/learning-hub";
import { JoinCommunity } from "@/components/marketing/join-community";

export const metadata: Metadata = {
  title: "IP Learning Hub · SHIP",
  description: "Explainers, licensing guidance, reports, and the full glossary for the Schmidt Hub for IP.",
};

export default function LearningHubPage() {
  return <><LearningHub /><JoinCommunity /></>;
}
