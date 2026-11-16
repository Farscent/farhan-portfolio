import type { Metadata, Viewport } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { getSiteUrl, profile } from "@/data/profile";
import "@fontsource-variable/inter";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "Farhan Adiwidya Pradana | Data Science, AI & Data Engineering",
    template: "%s | Farhan Adiwidya Pradana",
  },
  description:
    "Farhan’s personal portfolio: a Computer Science student at UGM building with data, AI, and engineering, with interests in business, leadership, anime, and cars.",
  authors: [{ name: profile.name }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: profile.name,
    title: "Farhan Adiwidya Pradana | Data, AI & Engineering",
    description:
      "Hey, I’m Farhan. I build with data, think in systems, and enjoy the process. Explore my projects, campus work, and life beyond the code.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Farhan Adiwidya Pradana — Data, AI, Engineering, Strategy",
      },
    ],
  },
  twitter: { card: "summary_large_image", images: ["/opengraph-image"] },
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F8F7F4" },
    { media: "(prefers-color-scheme: dark)", color: "#141414" },
  ],
};
const themeScript = `(function(){try{var t=localStorage.getItem('theme');document.documentElement.dataset.theme=t==='dark'||t==='light'?t:matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}catch(e){document.documentElement.dataset.theme='light'}})()`;
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
