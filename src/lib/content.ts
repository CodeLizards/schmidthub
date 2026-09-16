/**
 * Landing-page content. All strings pulled from the SHIP wireframes so
 * the pitch site shows real, recognizable content — not lorem.
 */

export type EntryType =
  | "Patents"
  | "Technology & Equipment"
  | "Scientific Datasets"
  | "Academic Research"
  | "Creative Works";

export type Subject =
  | "Clean Energy"
  | "Climate & Environment"
  | "Data & Computing"
  | "Health & Medicine"
  | "Ocean Sciences";

export type Entry = {
  id: string;
  type: EntryType;
  subject: Subject;
  org: string;
  title: string;
  description: string;
  tags: string[];
  docs: number;
  images: number;
};

export const ENTRIES: Entry[] = [
  {
    id: "SH-2024-0801",
    type: "Patents",
    subject: "Health & Medicine",
    org: "Schmidt Futures",
    title: "Adaptive Neural Interface for Prosthetic Control",
    description:
      "A novel brain-machine interface design enabling fine motor control in prosthetic limbs through adaptive signal processing algorithms.",
    tags: ["neuroscience", "prosthetics", "signal-processing"],
    docs: 2,
    images: 3,
  },
  {
    id: "SH-2024-0714",
    type: "Technology & Equipment",
    subject: "Climate & Environment",
    org: "Schmidt Ocean Institute",
    title: "ClimateTrace Attribution Engine",
    description:
      "Open-source tool for high-resolution attribution of greenhouse gas emissions to individual facilities and supply chains.",
    tags: ["climate", "emissions", "open-source"],
    docs: 3,
    images: 4,
  },
  {
    id: "SH-2024-0623",
    type: "Scientific Datasets",
    subject: "Ocean Sciences",
    org: "Schmidt Marine Technology",
    title: "Global Coral Reef Bleaching Dataset 2024",
    description:
      "Satellite-derived thermal stress and bleaching probability records for 14,000+ reef locations spanning 2018–2024.",
    tags: ["marine", "climate", "open-data"],
    docs: 1,
    images: 5,
  },
  {
    id: "SH-2024-0512",
    type: "Technology & Equipment",
    subject: "Data & Computing",
    org: "Schmidt DataX",
    title: "Federated Privacy-Preserving ML Framework",
    description:
      "Toolkit enabling collaborative machine learning across institutions without sharing raw patient or user data.",
    tags: ["privacy", "federated-learning", "healthcare"],
    docs: 2,
    images: 6,
  },
  {
    id: "SH-2024-0428",
    type: "Academic Research",
    subject: "Health & Medicine",
    org: "Schmidt Pandemic Science",
    title: "Rapid Pathogen Genomic Sequencing Protocol",
    description:
      "Field-deployable sequencing workflow reducing pathogen identification time from 72 hours to under 8 hours.",
    tags: ["genomics", "pandemic", "diagnostics"],
    docs: 3,
    images: 2,
  },
  {
    id: "SH-2024-0331",
    type: "Creative Works",
    subject: "Clean Energy",
    org: "Schmidt Clean Energy",
    title: "Solar-Powered Desalination Membrane Array",
    description:
      "Modular membrane design reducing energy consumption in desalination by 34% while increasing throughput in high-salinity environments.",
    tags: ["water", "energy", "hardware"],
    docs: 1,
    images: 3,
  },
];

export const ENTRY_TYPES: (EntryType | "All")[] = [
  "All",
  "Patents",
  "Technology & Equipment",
  "Scientific Datasets",
  "Academic Research",
  "Creative Works",
];

export type Partner = {
  id: string;
  name: string;
  initials: string;
  blurb: string;
};

export const PARTNERS: Partner[] = [
  {
    id: "futures",
    name: "Schmidt Futures",
    initials: "SF",
    blurb:
      "Funding scientific and technological breakthroughs to serve humanity, with a portfolio spanning AI, biosciences, and public interest tech.",
  },
  {
    id: "ocean",
    name: "Schmidt Ocean Institute",
    initials: "SO",
    blurb:
      "Operating research vessels and open technology platforms to accelerate discovery in the ocean sciences.",
  },
  {
    id: "datax",
    name: "Schmidt DataX",
    initials: "DX",
    blurb:
      "Advancing data-driven discovery through interdisciplinary teams building open, reusable computational tools.",
  },
  {
    id: "marine",
    name: "Schmidt Marine Technology",
    initials: "SM",
    blurb:
      "Developing and licensing next-generation instruments, sensors, and platforms that expand what ocean scientists can measure.",
  },
  {
    id: "pandemic",
    name: "Schmidt Pandemic Science",
    initials: "PS",
    blurb:
      "Cross-institutional programs accelerating the tools and protocols the world needs to detect and respond to pathogens faster.",
  },
  {
    id: "energy",
    name: "Schmidt Clean Energy",
    initials: "CE",
    blurb:
      "Backing hardware and modelling breakthroughs that push clean-energy systems from lab to grid at scale.",
  },
];

export const LICENSE_TYPES = [
  {
    id: "open",
    name: "Open Licenses",
    tag: "Freely usable",
    description:
      "Freely usable and modifiable under open-source terms — includes licenses such as Apache 2.0, MIT, BSD, and Creative Commons variants.",
  },
  {
    id: "academic",
    name: "Free Academic & Research",
    tag: "Non-commercial",
    description:
      "No-cost access limited to academic and non-commercial research use. A separate commercial license is available on request.",
  },
  {
    id: "commercial",
    name: "Commercial Licenses",
    tag: "Paid",
    description:
      "Paid licenses granting rights to use the IP in commercial products and services, negotiated per entry.",
  },
];
