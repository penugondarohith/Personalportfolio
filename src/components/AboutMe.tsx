"use client";

import { motion } from "framer-motion";
import { BookOpenText, BrainCircuit, Cpu, Sparkles } from "lucide-react";

const quickFacts = [
  { label: "Education", value: "B.Tech CSE (AI & ML)" },
  { label: "Focus", value: "GenAI, Agentic AI, LLMs" },
  { label: "Strength", value: "Full-Stack Development" },
  { label: "Goal", value: "AI/ML + Software Engineering" },
];

export function AboutMe() {
  return (
    <section id="about" className="relative overflow-hidden px-6 py-24 md:py-28">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-secondary/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary">About</p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Building <span className="gradient-text">intelligent systems</span> for real-world impact
          </h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 rounded-[28px] border border-border bg-white/4 p-6 md:p-8"
          >
            <p className="text-base leading-relaxed text-muted md:text-lg">
              I am a B.Tech Computer Science student specializing in AI &amp; ML, with a strong interest in
              AI/ML, Generative AI, and Agentic AI. I enjoy building end-to-end intelligent applications that
              combine model-driven reasoning with robust software engineering.
            </p>
            <p className="text-base leading-relaxed text-muted md:text-lg">
              My work spans full-stack development, LLM applications, RAG systems, AI agents, and multi-agent
              workflows. I focus on creating practical tools that solve real problems and translate emerging AI
              capabilities into usable products.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-black/10 p-4">
                <BookOpenText className="mb-3 h-5 w-5 text-primary" />
                <p className="text-sm font-semibold text-foreground">AI/ML &amp; GenAI</p>
                <p className="mt-2 text-sm text-muted">LLM apps, RAG, model-driven systems, and experimentation.</p>
              </div>
              <div className="rounded-2xl border border-border bg-black/10 p-4">
                <BrainCircuit className="mb-3 h-5 w-5 text-primary" />
                <p className="text-sm font-semibold text-foreground">Agentic AI</p>
                <p className="mt-2 text-sm text-muted">AI agents, multi-agent workflows, and autonomous task execution.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-[28px] border border-border bg-white/4 p-6 md:p-8"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Cpu className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Profile Summary</h3>
            </div>

            <div className="space-y-3">
              {quickFacts.map((fact) => (
                <div key={fact.label} className="flex items-center justify-between gap-3 rounded-xl border border-border bg-black/10 px-3 py-2.5">
                  <span className="text-sm text-muted">{fact.label}</span>
                  <span className="text-right text-sm font-medium text-foreground">{fact.value}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-primary/20 bg-primary/10 p-4">
              <div className="flex items-center gap-2 text-primary">
                <Sparkles className="h-4 w-4" />
                <span className="text-sm font-semibold">Open to opportunities</span>
              </div>
              <p className="mt-2 text-sm text-muted">
                Looking for AI/ML and software engineering opportunities where I can build practical and
                impactful intelligent systems.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
