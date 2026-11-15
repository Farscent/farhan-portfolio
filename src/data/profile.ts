export const profile = {
  name: "Farhan Adiwidya Pradana",
  shortName: "Farhan",
  identity:
    "Computer Science Undergraduate | Data Science, AI & Data Engineering | Technology & Business",
  university: "Universitas Gadjah Mada",
  location: "Yogyakarta, Indonesia",
  email: "farhanadiwidya@gmail.com",
  github: "https://github.com/Farscent",
  linkedin: "https://www.linkedin.com/in/farhanadiwidya/",
  description:
    "Computer Science undergraduate at Universitas Gadjah Mada, focused on continuous learning, problem-solving, and data-driven solutions.",
  portrait: {
    src: "/images/farhan.webp",
    alt: "Farhan Adiwidya Pradana smiling outdoors with trees and a mountain in the background",
    width: 1200,
    height: 1200,
  },
  // Add a local public/ asset path when a CV is available.
  cvUrl: null as string | null,
};
export function getSiteUrl() {
  return (
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000")
  ).replace(/\/$/, "");
}
export const navigation = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];
