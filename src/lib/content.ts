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
  filed: string;
  type: EntryType;
  subject: Subject;
  org: string;
  title: string;
  description: string;
  tags: string[];
  license: string;
  docs: number;
  images: number;
  detail?: {
    description: string[];
    inventors: { name: string; role: string; affiliation: string }[];
    attachments: { name: string; format: string; size: string }[];
  };
};

export const ENTRIES: Entry[] = [
  {
    id: "SH-2024-0801",
    filed: "2024-03-18",
    type: "Patents",
    subject: "Health & Medicine",
    org: "Schmidt Futures",
    title: "Adaptive Neural Interface for Prosthetic Control",
    description:
      "A novel brain-machine interface design enabling fine motor control in prosthetic limbs through adaptive signal processing algorithms.",
    tags: ["neuroscience", "prosthetics", "signal-processing"],
    license: "Open Research License",
    docs: 2,
    images: 3,
    detail: {
      description: [
        "This invention presents a novel adaptive neural interface designed for precision control of upper-limb prosthetics. The system integrates a multi-channel electrode array with a real-time adaptive signal processing pipeline that continuously learns the user's electromyographic (EMG) signal characteristics.",
        "Unlike static signal decoders, the adaptive layer recalibrates every 200ms using an online gradient descent algorithm, maintaining high accuracy even as electrode-skin contact degrades over the course of a day.",
        "In clinical trials with 24 participants across 6 months, the interface achieved a 91.4% intent classification accuracy for 8 discrete gesture classes.",
      ],
      inventors: [
        { name: "Dr. Anya Kowalski", role: "Principal Investigator", affiliation: "Schmidt Futures / MIT Media Lab" },
        { name: "Prof. Marcus Lee", role: "Co-Inventor, Signal Processing", affiliation: "University of California, Berkeley" },
      ],
      attachments: [
        { name: "Neural_Interface_Patent_Draft.pdf", format: "PDF", size: "4.2 MB" },
        { name: "EMG_Signal_Dataset_2024.csv", format: "CSV", size: "128 MB" },
        { name: "Electrode_Array_CAD_Files.zip", format: "ZIP", size: "38.1 MB" },
      ],
    },
  },
  {
    id: "SH-2024-0802",
    filed: "2024-01-22",
    type: "Technology & Equipment",
    subject: "Climate & Environment",
    org: "Schmidt Ocean Institute",
    title: "ClimateTrace Attribution Engine",
    description:
      "Open-source tool for high-resolution attribution of greenhouse gas emissions to individual facilities and supply chains.",
    tags: ["climate", "emissions", "open-source"],
    license: "Apache 2.0",
    docs: 3,
    images: 4,
  },
  {
    id: "SH-2024-0803",
    filed: "2024-05-10",
    type: "Scientific Datasets",
    subject: "Ocean Sciences",
    org: "Schmidt Marine Technology",
    title: "Global Coral Reef Bleaching Dataset 2024",
    description:
      "Satellite-derived thermal stress and bleaching probability records for 14,000+ reef locations spanning 2018–2024.",
    tags: ["marine", "climate", "open-data"],
    license: "CC BY 4.0",
    docs: 1,
    images: 5,
  },
  {
    id: "SH-2024-0804",
    filed: "2023-11-04",
    type: "Technology & Equipment",
    subject: "Data & Computing",
    org: "Schmidt DataX",
    title: "Federated Privacy-Preserving ML Framework",
    description:
      "Toolkit enabling collaborative machine learning across institutions without sharing raw patient or user data.",
    tags: ["privacy", "federated-learning", "healthcare"],
    license: "MIT",
    docs: 2,
    images: 6,
  },
  {
    id: "SH-2024-0805",
    filed: "2024-02-28",
    type: "Academic Research",
    subject: "Health & Medicine",
    org: "Schmidt Pandemic Science",
    title: "Rapid Pathogen Genomic Sequencing Protocol",
    description:
      "Field-deployable sequencing workflow reducing pathogen identification time from 72 hours to under 8 hours.",
    tags: ["genomics", "pandemic", "diagnostics"],
    license: "Open Research License",
    docs: 3,
    images: 2,
  },
  {
    id: "SH-2024-0806",
    filed: "2023-09-14",
    type: "Creative Works",
    subject: "Clean Energy",
    org: "Schmidt Clean Energy",
    title: "Solar-Powered Desalination Membrane Array",
    description:
      "Modular membrane design reducing energy consumption in desalination by 34% while increasing throughput in high-salinity environments.",
    tags: ["water", "energy", "hardware"],
    license: "Full IP Assignment Available",
    docs: 1,
    images: 3,
  },
];

export const PORTFOLIO_LICENSES = [
  "Open Research License",
  "CC BY 4.0",
  "MIT",
  "Apache 2.0",
  "Commercial License",
] as const;

export const PORTFOLIO_ENTRIES: Entry[] = [
  {
    id: "SH-2024-0812",
    filed: "2023-11-05",
    type: "Patents",
    subject: "Clean Energy",
    org: "Schmidt Clean Energy",
    title: "Grid-Scale Battery Thermal Management Method",
    description: "Phase-change cooling geometry extending cell life 22% in high-cycling grid storage applications.",
    tags: ["energy", "hardware", "thermal"],
    license: "Commercial License",
    docs: 1,
    images: 4,
  },
  {
    id: "SH-2024-0811",
    filed: "2023-12-12",
    type: "Creative Works",
    subject: "Ocean Sciences",
    org: "Schmidt Ocean Institute",
    title: "Coral Restoration Field Photography Archive",
    description: "12,000 georeferenced reef photographs documenting restoration sites over five years, cleared for research and media use.",
    tags: ["ocean", "media", "conservation"],
    license: "CC BY 4.0",
    docs: 3,
    images: 3,
  },
  {
    id: "SH-2024-0810",
    filed: "2024-01-30",
    type: "Academic Research",
    subject: "Climate & Environment",
    org: "Schmidt DataX",
    title: "Wildfire Smoke Dispersion Model Validation Study",
    description: "Multi-season validation of plume dispersion models against ground sensor networks across the western US.",
    tags: ["climate", "modelling", "open-data"],
    license: "CC BY 4.0",
    docs: 2,
    images: 2,
  },
  {
    id: "SH-2024-0809",
    filed: "2024-02-27",
    type: "Patents",
    subject: "Ocean Sciences",
    org: "Schmidt Marine Technology",
    title: "Low-Cost Ocean pH Sensor Design",
    description: "Solid-state pH sensing element manufacturable under $40 per unit with 18-month drift under 0.02 pH.",
    tags: ["ocean", "sensors", "hardware"],
    license: "Open Research License",
    docs: 1,
    images: 6,
  },
  {
    id: "SH-2024-0808",
    filed: "2024-04-11",
    type: "Scientific Datasets",
    subject: "Health & Medicine",
    org: "Schmidt Pandemic Science",
    title: "Antibiotic Resistance Gene Atlas",
    description: "Curated atlas of 48,000 resistance gene sequences with clinical metadata across 60 countries.",
    tags: ["genomics", "health", "open-data"],
    license: "CC BY 4.0",
    docs: 3,
    images: 5,
  },
  {
    id: "SH-2024-0807",
    filed: "2024-05-02",
    type: "Technology & Equipment",
    subject: "Ocean Sciences",
    org: "Schmidt Ocean Institute",
    title: "Deep-Sea Autonomous Sampling Vehicle",
    description: "Pressure-tolerant autonomous vehicle for repeatable benthic sampling to 6,000m with modular payload bays.",
    tags: ["ocean", "robotics", "hardware"],
    license: "Commercial License",
    docs: 2,
    images: 4,
  },
  ...ENTRIES.slice().reverse(),
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

export const LICENSE_GROUPS: Record<string, readonly string[]> = {
  open: ["CC BY 4.0", "MIT", "Apache 2.0"],
  academic: ["Open Research License"],
  commercial: ["Commercial License"],
};
