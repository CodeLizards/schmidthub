export type LearningResource = {
  slug: string;
  category: "Report" | "IP Learning";
  date: string;
  title: string;
  description: string;
};

export const LEARNING_RESOURCES: LearningResource[] = [
  { slug: "ip-licensing-trends-report-2026", category: "Report", date: "2026-06-24", title: "IP Licensing Trends Report 2026", description: "Annual analysis of licensing activity across the portfolio — open vs. commercial uptake, fastest-moving fields, and time-to-license benchmarks." },
  { slug: "choosing-between-open-and-commercial-licensing", category: "IP Learning", date: "2026-05-28", title: "Choosing between open and commercial licensing", description: "A practical framework for deciding how to license your work — and why the answer is often both." },
  { slug: "academic-ip-impact-study", category: "Report", date: "2026-05-12", title: "Academic IP Impact Study", description: "Measuring what happens after publication: citations, re-use, and licensing outcomes across 3,800+ entries." },
  { slug: "what-reviewers-look-for-in-a-submission", category: "IP Learning", date: "2026-04-30", title: "What reviewers look for in a submission", description: "Inside the review panel — the five criteria that separate a fast approval from a returned entry." },
  { slug: "patents-101-for-researchers", category: "IP Learning", date: "2026-03-29", title: "Patents 101 for researchers", description: "What a patent does and doesn't protect, when filing makes sense, and how SHIP fits alongside a TTO." },
  { slug: "top-100-most-accessed-entries", category: "Report", date: "2026-03-08", title: "The Top 100 Most-Accessed Entries", description: "The portfolio's most downloaded and cited IP of the past year, and what the patterns suggest." },
];
