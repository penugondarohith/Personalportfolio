import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

/* --- Font Configuration --- */
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

/* --- SEO Metadata --- */
export const metadata: Metadata = {
  title: "Penugonda Rohith | Agentic AI Developer & Full Stack Engineer",
  description:
    "Portfolio of Penugonda Rohith — B.Tech CS (AI & ML) student building intelligent applications with Generative AI, Agentic AI, Machine Learning, and Full Stack Development.",
  keywords: [
    "Penugonda Rohith",
    "Agentic AI Developer",
    "Full Stack Developer",
    "AI/ML Engineer",
    "Software Engineer",
    "Portfolio",
    "Next.js",
    "React",
    "Python",
    "Machine Learning",
    "CrewAI",
    "LangGraph",
  ],
  authors: [{ name: "Penugonda Rohith" }],
  creator: "Penugonda Rohith",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://penugondarohith.dev",
    title: "Penugonda Rohith | Agentic AI Developer & Full Stack Engineer",
    description:
      "B.Tech CS (AI & ML) student building intelligent applications with Generative AI, Agentic AI, and Full Stack Development.",
    siteName: "Penugonda Rohith — Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Penugonda Rohith | Agentic AI Developer & Full Stack Engineer",
    description:
      "B.Tech CS (AI & ML) student building intelligent applications with Generative AI, Agentic AI, and Full Stack Development.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

/* --- JSON-LD Structured Data --- */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Penugonda Rohith",
  url: "https://penugondarohith.dev",
  jobTitle: "Agentic AI Developer",
  description:
    "B.Tech Computer Science (AI & ML) student passionate about building intelligent applications.",
  sameAs: [
    "https://github.com/penugondarohith",
    "https://www.linkedin.com/in/penugonda-rohith-543250313",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} dark`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased noise-overlay">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
