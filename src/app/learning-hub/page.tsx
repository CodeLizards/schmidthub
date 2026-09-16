import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/ui/page-header";
import { Card } from "@/components/ui/card";
import { Eyebrow } from "@/components/ui/eyebrow";

export const metadata: Metadata = {
  title: "IP Learning Hub · SHIP",
  description:
    "Short guides on how IP licensing works and how to prepare submissions for SHIP.",
};

const TOPICS = [
  {
    eyebrow: "Getting started",
    title: "What is intellectual property?",
    body: "A working definition covering patents, copyrights, trademarks, trade secrets, and where each fits in a research programme.",
  },
  {
    eyebrow: "Licensing",
    title: "Which license should I use?",
    body: "How to pick between Open Research, CC BY 4.0, MIT, Apache 2.0, or a custom commercial license — with concrete examples.",
  },
  {
    eyebrow: "Submissions",
    title: "Preparing an IP submission",
    body: "What to include in your abstract, attachments, and inventor list so a reviewer can move quickly.",
  },
  {
    eyebrow: "Review",
    title: "How the review process works",
    body: "The four decisions a reviewer can make, what triggers a legal review, and how to respond to a request for more info.",
  },
];

export default function LearningHubPage() {
  return (
    <>
      <PageHeader
        eyebrow="IP Learning Hub"
        title="Short guides for inventors and reviewers."
        description="Practical explainers, written for people who don't spend all day thinking about intellectual property."
      />
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
          {TOPICS.map((t) => (
            <Card
              key={t.title}
              as={Link}
              href={`/learning-hub/${t.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              interactive
              className="p-6"
            >
              <Eyebrow className="mb-3">{t.eyebrow}</Eyebrow>
              <h2 className="font-serif font-normal text-xl text-ink mb-2 leading-snug">
                {t.title}
              </h2>
              <p className="text-sm text-muted leading-relaxed">{t.body}</p>
              <span className="mt-4 inline-flex text-sm font-medium text-ink items-center gap-1.5">
                Read guide <span aria-hidden>→</span>
              </span>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
