export interface Experience {
  organization: string;
  role: string;
  period: string;
  kind:
    | "Technology & strategy"
    | "Leadership"
    | "Technology & leadership"
    | "Education";
  description: string;
  highlights?: string[];
  previous?: { role: string; period: string; description: string }[];
}
// Roles, dates, and community figures are supplied by Farhan in the portfolio brief.
export const experience: Experience[] = [
  {
    organization: "ShARE Do Well Do Good UGM",
    role: "Expertise Network Manager — Technology & AI",
    period: "Present",
    kind: "Technology & strategy",
    description:
      "Lead the development of Tech & AI curriculum and consulting case studies, translating emerging technology, analytics, and digital maturity frameworks into structured business assessments and recommendations.",
  },
  {
    organization: "RiseIT Consulting",
    role: "Data Engineer Consultant",
    period: "Present",
    kind: "Technology & strategy",
    description:
      "Contribute to an end-to-end data engineering project under an IBM Data Engineer, working with Google Sheets, BigQuery, ETL/ELT, SQL transformations, validation, analytics modeling, and Looker Studio.",
  },
  {
    organization: "Google Developer Groups on Campus UGM",
    role: "Community Manager (Co-Lead)",
    period: "Aug 2025 — Jul 2026",
    kind: "Leadership",
    description:
      "Co-led a technology community and coordinated cross-functional teams to deliver events and learning opportunities.",
    highlights: [
      "24-member Core Team",
      "460+ community members",
      "12 major technology events",
    ],
    previous: [
      {
        role: "Hustler / Product Manager",
        period: "Dec 2024 — Jun 2025",
        description:
          "Led planning, scope management, delegation, and cross-functional collaboration for the APAC Google Solution Challenge.",
      },
    ],
  },
  {
    organization: "OmahTI UGM",
    role: "Senior Member, Data Science & AI · Senior Staff, Business Management",
    period: "Nov 2024 — Present",
    kind: "Technology & leadership",
    description:
      "Work across machine learning, business analytics, pricing, client relationships, and junior-member mentoring.",
    previous: [
      {
        role: "Project Manager · Coordinator of Problem Tester, Data Royale 2025",
        period: "Jan — Dec 2025",
        description:
          "Managed technology projects, validated Kaggle competition pipelines, and developed baseline notebooks covering preprocessing, EDA, and modeling.",
      },
    ],
  },
  {
    organization: "Himpunan Mahasiswa Ilmu Komputer UGM",
    role: "Data Science & AI Material Division",
    period: "Jul — Aug 2025",
    kind: "Education",
    description:
      "Developed and delivered introductory Data Science and AI educational materials for Computer Science Expo 2025.",
    highlights: ["80+ high school students"],
  },
  {
    organization: "BEM KM UGM",
    role: "Director General of Data Research",
    period: "Mar — Dec 2025",
    kind: "Leadership",
    description:
      "Led the Data Research Division in the Department of Research and Development, overseeing data collection, cleaning, EDA, visualization, statistical analysis, and predictive modeling.",
  },
];
