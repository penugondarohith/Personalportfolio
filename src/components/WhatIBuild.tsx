"use client";

import { motion } from "framer-motion";
import { Bot, BrainCircuit, Cpu, Layers3 } from "lucide-react";

const builds = [
  {
    title: "AI Agents",
    description: "Autonomous systems capable of reasoning, planning and executing tasks.",
    icon: Bot,
  },
  {
    title: "Generative AI",
    description: "LLM-powered applications, RAG systems and intelligent assistants.",
    icon: BrainCircuit,
  },
  {
    title: "Machine Learning",
    description: "Predictive models, NLP, data analysis and ML-powered solutions.",
    icon: Cpu,
  },
  {
    title: "Full-Stack AI Applications",
    description: "Modern web applications integrated with AI/ML backends and APIs.",
    icon: Layers3,
  },
];

export function WhatIBuild() {
  return (
    <section id="what-i-build" className="relative overflow-hidden px-6 py-24 md:py-28">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary">What I Build</p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Practical AI systems that turn ideas into product outcomes
          </h2>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {builds.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-[28px] border border-border bg-white/4 p-6 transition-transform hover:-translate-y-1 hover:border-primary/20"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 rounded-[28px] border border-border bg-white/4 p-5">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">Currently exploring</p>
          <div className="flex flex-wrap gap-2">
            {[
              "Agentic AI",
              "RAG Systems",
              "LLM Applications",
              "LangGraph",
              "Multi-Agent Architectures",
              "AI-powered Software Engineering",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-black/10 px-3 py-1.5 text-sm text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
