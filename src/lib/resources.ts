export type ResourceCategory = "Template" | "Document" | "Provision" | "Reference";
export type ResourceAction = "download" | "page" | "external";

export type Resource = {
  category: ResourceCategory;
  date: string;
  title: string;
  description: string;
  format: string;
  action: ResourceAction;
  href?: string;
};

export const RESOURCES: Resource[] = [
  { category: "Template", date: "2026-07-01", title: "IP Submission — starter template", description: "A pre-filled submission form with placeholder text for each required field. Useful for first-time submitters and institutional onboarding.", format: "DOCX · 52 KB", action: "download" },
  { category: "Document", date: "2026-06-30", title: "Open Research License — template", description: "The standard SHIP research-use license. Attach as-is when your target goal is open licensing.", format: "PDF · 180 KB", action: "page" },
  { category: "Provision", date: "2026-06-22", title: "Royalty & reporting schedule", description: "Rate bands, payment cadence, and the reporting obligations that sit alongside them.", format: "Clause · table", action: "page" },
  { category: "Template", date: "2026-06-15", title: "Dataset README — template", description: "Standard structure for a dataset README: provenance, schema, licensing notes, and citation block. Copy and fill in.", format: "Markdown · 8 KB", action: "download" },
  { category: "Document", date: "2026-06-11", title: "Commercial License Agreement — template", description: "Starting point for negotiated terms: scope, territory, exclusivity, royalties, and reporting.", format: "DOCX · 96 KB", action: "download" },
  { category: "Provision", date: "2026-05-29", title: "Exclusivity and carve-outs", description: "Grants exclusivity while reserving the holder’s right to continue non-commercial research.", format: "Clause · 2 paragraphs", action: "page" },
  { category: "Template", date: "2026-05-20", title: "Software disclosure — template", description: "Covers repository URL, language and dependencies, open-source license choice, and contributor list. For code and algorithm submissions.", format: "DOCX · 44 KB", action: "download" },
  { category: "Document", date: "2026-05-18", title: "Submission checklist", description: "Everything the review panel checks, in the order they check it. Run through it before you publish.", format: "PDF · 64 KB", action: "download" },
  { category: "Reference", date: "2026-05-06", title: "Creative Commons — license chooser", description: "Pick and compare CC licenses, including the CC BY 4.0 terms SHIP supports.", format: "External · creativecommons.org", action: "external", href: "https://creativecommons.org/chooser/" },
  { category: "Provision", date: "2026-04-27", title: "Attribution clause", description: "Standard wording requiring credit to named inventors or authors, the SHIP entry ID, and schmidthub.org.", format: "Clause · 1 paragraph", action: "page" },
  { category: "Document", date: "2026-04-15", title: "Deed of Assignment — template", description: "For entries where full ownership of the IP transfers to the receiving party.", format: "DOCX · 74 KB", action: "download" },
  { category: "Provision", date: "2026-04-02", title: "Field-of-use limitation", description: "Restricts the licensee to a defined sector or application while leaving other fields open.", format: "Clause · 2 paragraphs", action: "page" },
  { category: "Document", date: "2026-03-24", title: "Attribution & citation guide", description: "How to cite a SHIP entry correctly in papers, products, datasets, and documentation.", format: "PDF · 88 KB", action: "download" },
  { category: "Reference", date: "2026-03-10", title: "Choose an open-source license", description: "Side-by-side comparison of MIT, Apache 2.0, and other permissive software licenses.", format: "Guide · schmidthub.org", action: "page" },
  { category: "Provision", date: "2026-02-26", title: "Warranty disclaimer", description: "Provides the work “as is” with no warranty of fitness — standard for research outputs.", format: "Clause · 1 paragraph", action: "page" },
  { category: "Document", date: "2026-02-12", title: "Mutual Non-Disclosure Agreement", description: "Covers evaluation conversations that happen before licensing terms are agreed.", format: "PDF · 120 KB", action: "download" },
  { category: "Provision", date: "2026-01-28", title: "Termination and reversion", description: "Conditions under which rights end and revert to the original holder.", format: "Clause · 1 paragraph", action: "page" },
  { category: "Reference", date: "2026-01-15", title: "WIPO — IP basics", description: "The World Intellectual Property Organization’s primer on rights, terms, and territories.", format: "External · wipo.int", action: "external", href: "https://www.wipo.int/en/web/about-ip" },
  { category: "Reference", date: "2025-12-04", title: "Google Patents", description: "Search prior art and verify patent records referenced in portfolio entries.", format: "External · patents.google.com", action: "external", href: "https://patents.google.com/" },
];
