"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Target,
  Lightbulb,
} from "lucide-react";

const timeline = [
  {
    year: "2023",
    title: "Started B.Tech CS (AI & ML)",
    desc: "Began the journey into Computer Science with AI specialization.",
  },
  {
    year: "2024",
    title: "Full Stack & AI Projects",
    desc: "Built multiple web apps with React, Flask, Next.js, and integrated ML models.",
  },
  {
    year: "2025",
    title: "Agentic AI Development",
    desc: "Explored CrewAI, LangGraph, and built autonomous AI agent systems.",
  },
  {
    year: "Now",
    title: "Open for Internships",
    desc: "Actively seeking opportunities in AI/ML and Full Stack Development.",
  },
];

/**
 * AboutLeft — left column with intro text, journey timeline, and mission card.
 */
export function AboutLeft() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="space-y-12"
    >
      {/* Who I Am */}
      <div className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 border border-primary/10">
            <Lightbulb className="w-5 h-5 text-primary" />
          </div>
          <h3 className="text-xl md:text-2xl font-heading font-bold">Who I Am</h3>
        </div>
        <p className="text-sm md:text-base text-muted/80 leading-relaxed">
          I&apos;m a B.Tech Computer Science student specializing in AI &amp; Machine Learning,
          passionate about building intelligent applications that solve real-world problems.
        </p>
        <p className="text-sm md:text-base text-muted/60 leading-relaxed">
          I combine Generative AI, Agentic AI, and Full Stack Development to create
          impactful software solutions that push the boundaries of what&apos;s possible.
        </p>
      </div>

      {/* Journey Timeline */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 border border-primary/10">
            <GraduationCap className="w-5 h-5 text-primary" />
          </div>
          <h3 className="text-xl md:text-2xl font-heading font-bold">My Journey</h3>
        </div>

        <div className="relative space-y-5 pl-8">
          {/* Timeline line */}
          <div className="absolute left-[11px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-primary/30 via-primary/15 to-transparent" />

          {timeline.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 * i, duration: 0.5 }}
              className="relative group"
            >
              {/* Dot */}
              <div className="absolute -left-[21px] top-3 w-3.5 h-3.5 rounded-full border-2 border-primary bg-background group-hover:bg-primary/20 transition-colors" />

              <div className="glass rounded-xl p-4 border border-border hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                <div className="flex items-center gap-3 mb-1.5">
                  <span className="text-[11px] font-mono font-bold text-primary tracking-wider uppercase px-2 py-0.5 rounded-md bg-primary/10">
                    {item.year}
                  </span>
                  <h4 className="text-sm font-semibold text-foreground">{item.title}</h4>
                </div>
                <p className="text-xs text-muted/60 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mission Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        whileHover={{ y: -3 }}
        className="glass rounded-2xl p-6 border border-primary/15 relative overflow-hidden cursor-default"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="relative flex items-start gap-4">
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 border border-primary/10 shrink-0">
            <Target className="w-6 h-6 text-primary" />
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-heading font-bold text-foreground">My Mission</h3>
            <p className="text-sm text-muted/70 leading-relaxed">
              To bridge the gap between cutting-edge AI research and practical software engineering,
              creating intelligent applications that are both powerful and user-friendly.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
