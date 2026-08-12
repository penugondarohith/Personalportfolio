"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CTAButtons } from "./CTAButtons";
import { SocialIcons } from "./SocialIcons";

const credibility = [
  "8.2 GPA",
  "700+ Coding Problems",
  "B.Tech AI/ML | 2023–2027",
  "AI/ML Projects",
];

const resumeUrl = "https://drive.google.com/file/d/1OK8GSF-RO0DJ7wU-5JyFKAVnADycjX-h/view?usp=drive_link";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-6 pb-16 pt-28 md:pt-36">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(124,58,237,0.18),_transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.12),_transparent_24%)]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-7"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
            <span className="h-2 w-2 rounded-full bg-primary" />
            AI / ML Engineer
          </div>

          <div className="space-y-4">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-muted md:text-base">
              Rohith Penugonda
            </p>
            <h1 className="max-w-2xl text-4xl font-black tracking-tight text-foreground md:text-5xl lg:text-6xl">
              AI/ML Engineer | Generative AI &amp; Agentic AI | Software Developer
            </h1>
          </div>

          <p className="max-w-xl text-base leading-relaxed text-muted md:text-lg">
            AI/ML engineering student building intelligent applications using Machine
            Learning, Generative AI, Agentic AI, LLMs, and modern full-stack technologies.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-transform hover:-translate-y-0.5"
            >
              View Projects
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-white/5 px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/30 hover:text-primary"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
            <a
              href="https://github.com/penugondarohith"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-white/5 px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/30 hover:text-primary"
            >
              <FaGithub className="h-4 w-4" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/penugonda-rohith-543250313"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-white/5 px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/30 hover:text-primary"
            >
              <FaLinkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </div>

          <div className="grid max-w-xl gap-3 sm:grid-cols-2">
            {credibility.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 rounded-2xl border border-border bg-white/4 px-3 py-2.5 text-sm font-medium text-muted"
              >
                <Sparkles className="h-4 w-4 text-primary" />
                {item}
              </div>
            ))}
          </div>

          <SocialIcons />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-10 rounded-full bg-primary/15 blur-3xl" />
            <div className="absolute inset-0 rounded-[32px] border border-primary/15 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
            <div className="relative overflow-hidden rounded-[30px] border border-border bg-card/80 p-3 shadow-2xl shadow-primary/10">
              <div className="aspect-[4/5] w-full overflow-hidden rounded-[24px] border border-border bg-slate-950">
                <Image
                  src="/profile.jpg"
                  alt="Rohith Penugonda"
                  width={640}
                  height={800}
                  priority
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="rounded-2xl border border-border bg-white/5 p-3">
              <p className="text-xs uppercase tracking-[0.18em] text-muted">Focus</p>
              <p className="mt-2 text-base font-semibold text-foreground">Generative AI</p>
            </div>
            <div className="rounded-2xl border border-border bg-white/5 p-3">
              <p className="text-xs uppercase tracking-[0.18em] text-muted">Builds</p>
              <p className="mt-2 text-base font-semibold text-foreground">AI Agents</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
