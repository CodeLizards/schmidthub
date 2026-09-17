import { notFound } from "next/navigation";
import { PageHeader } from "@/components/ui/page-header";
import { Button } from "@/components/ui/button";

const PLANNED_PAGES: Record<string, string> = {
  contact: "Contact SHIP",
  dashboard: "Your dashboard",
  "one-time": "One-time submission",
  privacy: "Privacy Policy",
  terms: "Terms of Use",
  cookies: "Cookie Policy",
  social: "Connect with SHIP",
  "resources/templates": "Submission templates",
  "resources/reviewer-checklist": "Reviewer checklist",
  "resources/licenses": "License comparison",
  "resources/pilot-guide": "Pilot user guide",
  "learning-hub/what-is-intellectual-property-": "What is intellectual property?",
  "learning-hub/which-license-should-i-use-": "Which license should I use?",
  "learning-hub/preparing-an-ip-submission": "Preparing an IP submission",
  "learning-hub/how-the-review-process-works": "How the review process works",
};

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(PLANNED_PAGES).map((path) => ({ preview: path.split("/") }));
}

export default async function PreviewPage({ params }: { params: Promise<{ preview: string[] }> }) {
  const { preview } = await params;
  const title = PLANNED_PAGES[preview.join("/")];
  if (!title) notFound();

  return (
    <PageHeader
      eyebrow="Home page proof of concept"
      title={title}
      description="This destination is planned for the full SHIP application. You can explore the intended experience in the interactive wireframes. Accounts, submissions, and downloads are not enabled in this POC."
      actions={<>
        <Button href="https://ship-wireframes-v5.netlify.app/" size="md">Explore the wireframes →</Button>
        <Button href="/" variant="ghost" size="md">Back to home</Button>
      </>}
    />
  );
}
