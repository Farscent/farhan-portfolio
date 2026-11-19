interface Achievement {
  title: string;
  context: string;
  year: string;
  href?: string;
  detail?: string;
  icon: "analytics" | "security" | "strategy" | "technology";
}

export const achievements: Achievement[] = [
  {
    title: "First Place Data Analytics Competition",
    icon: "analytics",
    context: "HIMTI (Himpunan Mahasiswa Teknik Informatika) BINUS UNIVERSITY - TECHFEST",
    year: "Jul 2025",
    href: "https://github.com/Farscent/Data-Analysis-Techfest2025",
  },
  {
    title: "Honorable Mention Capstone Project DCSE Summer Course",
    icon: "security",
    context: "AUTOSIEM",
    year: "Aug 2025",
    href: "https://github.com/Farscent/AUTOSIEM",
    detail: "Universitas Gadjah Mada - Faculty of Mathematics and Natural Sciences - Department of Computer Science and Electronics",
  },
  {
    title: "Semifinalist",
    context: "YED Universitas Indonesia Business Case Competition 2025",
    year: "Dec 2025",
    detail: "BEM FMIPA Universitas Indonesia",
    icon: "strategy",
  },
  {
    title: "Finalist",
    context: "Data Royale 2024",
    year: "Nov 2024",
    detail: "OmahTI UGM & Kotak Riset · Lab Sistem Cerdas, Department of Computer Science and Electronics, Universitas Gadjah Mada",
    icon: "analytics",
  },
  {
    title: "Best Project",
    context: "OemOem OmahTI · Cybersecurity",
    year: "Aug 2024",
    detail: "OmahTI UGM · Universitas Gadjah Mada",
    icon: "security",
  },
  {
    title: "Best Project",
    context: "OemOem OmahTI · Data Science & Artificial Intelligence",
    year: "Aug 2024",
    detail: "OmahTI UGM · Universitas Gadjah Mada",
    icon: "technology",
  },
];
export const research = {
  title:
    "Penggunaan Artificial Intelligence dan Machine Learning dalam Pembelajaran Ilmu Eksakta",
  description:
    "Research exploring applications of AI and machine learning in mathematics and physics education.",
  year: "2023",
  url: "https://www.researchgate.net/publication/391452783_Penggunaan_Artificial_Intelligence_dan_Machine_Learning_dalam_Pembelajaran_Ilmu_Eksakta",
  doi: "https://doi.org/10.13140/RG.2.2.21555.95527",
  status: "Research manuscript",
};
