import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://penugondarohith.dev"),
  title: "Rohith Penugonda | AI/ML Engineer | Generative AI & Agentic AI",
  description:
    "AI/ML engineering student building Generative AI, Agentic AI, Machine Learning and full-stack applications.",
  keywords: [
    "Rohith Penugonda",
    "AI/ML Engineer",
    "Generative AI Engineer",
    "Agentic AI Engineer",
    "Machine Learning",
    "LLM Applications",
    "RAG",
    "Multi-Agent Systems",
    "Full Stack Developer",
    "Python",
    "React",
    "Flask",
    "OpenAI",
    "CrewAI",
    "LangGraph",
  ],
  authors: [{ name: "Rohith Penugonda" }],
  creator: "Rohith Penugonda",
  publisher: "Rohith Penugonda",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://penugondarohith.dev",
    title: "Rohith Penugonda | AI/ML Engineer | Generative AI & Agentic AI",
    description:
      "AI/ML engineering student building Generative AI, Agentic AI, Machine Learning and full-stack applications.",
    siteName: "Rohith Penugonda Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rohith Penugonda | AI/ML Engineer | Generative AI & Agentic AI",
    description:
      "AI/ML engineering student building Generative AI, Agentic AI, Machine Learning and full-stack applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Rohith Penugonda",
  url: "https://penugondarohith.dev",
  jobTitle: "AI/ML Engineer",
  description:
    "AI/ML engineering student building Generative AI, Agentic AI, Machine Learning and full-stack applications.",
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
      <body className="min-h-screen bg-background text-foreground antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
