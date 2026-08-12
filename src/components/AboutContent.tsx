"use client";

import { motion } from "framer-motion";
import {
  Rocket,
  Brain,
  Globe,
  Sparkles,
  GraduationCap,
  Target,
  Lightbulb,
  Zap,
} from "lucide-react";

const timeline = [
  { year: "2023", title: "Started B.Tech CS (AI & ML)", desc: "Began the journey into Computer Science with AI specialization." },
  { year: "2024", title: "Full Stack & AI Projects", desc: "Built multiple web apps with React, Flask, Next.js, and integrated ML models." },
  { year: "2025", title: "Agentic AI Development", desc: "Explored CrewAI, LangGraph, and built autonomous AI agent systems." },
  { year: "Now", title: "Open for Internships", desc: "Actively seeking internship opportunities in AI/ML and Full Stack roles." },
];

const featureCards = [
  { icon: Brain, title: "AI-First Approach", desc: "Building with Generative AI and autonomous agents at the core." },
  { icon: Globe, title: "Full Stack Skills", desc: "End-to-end development from React frontends to Flask/Node backends." },
  { icon: Rocket, title: "Fast Learner", desc: "Quickly adapting to new technologies and frameworks." },
  { icon: Sparkles, title: "Clean Code", desc: "Writing production-quality, maintainable, and scalable code." },
];

/**
 * AboutContent — center column with about text, journey timeline, education, mission, feature cards.
 */
export function AboutContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="space-y-8"
    >
      {/* About Text */}
      <div className="space-y-4">
        <h3 className="text-xl font-heading font-bold flex items-center gap-2">
          <Lightbulb className="w-5 h-5 text-primary" />
          Who I Am
        </h3>
        <p className="text-sm text-muted/80 leading-relaxed">
          I&apos;m a B.Tech Computer Science student specializing in AI &amp; Machine Learning,
          passionate about building intelligent applications that solve real-world problems.
          I combine Generative AI, Agentic AI, and Full Stack Development to create
          impactful software solutions.
        </p>
      </div>

      {/* Journey Timeline */}
      <div className="space-y-4">
        <h3 className="text-xl font-heading font-bold flex items-center gap-2">
          <GraduationCap className="w-5 h-5 text-primary" />
          My Journey
        </h3>
        <div className="relative space-y-4 pl-6 border-l-2 border-primary/20">
          {timeline.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="relative"
            >
              {/* Dot on timeline */}
              <div className="absolute -left-[25px] top-1 w-3 h-3 rounded-full bg-primary/30 border-2 border-primary" />
              <div className="glass rounded-xl p-3 border border-border hover:border-primary/20 transition-colors">
                <span className="text-[10px] font-mono text-primary font-bold uppercase tracking-wider">
                  {item.year}
                </span>
                <h4 className="text-sm font-semibold text-foreground mt-0.5">{item.title}</h4>
                <p className="text-xs text-muted/70 mt-1 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mission */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="glass rounded-xl p-4 border border-primary/20 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="relative flex items-start gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 shrink-0 mt-0.5">
            <Target className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="text-sm font-heading font-bold text-foreground">My Mission</h3>
            <p className="text-xs text-muted/80 mt-1 leading-relaxed">
              To bridge the gap between cutting-edge AI research and practical software engineering,
              creating intelligent applications that are both powerful and user-friendly.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Feature Cards */}
      <div className="grid grid-cols-2 gap-3">
        {featureCards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 + i * 0.1 }}
            whileHover={{ y: -3 }}
            className="glass rounded-xl p-3 border border-border hover:border-primary/20 transition-all group cursor-default"
          >
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 mb-2 group-hover:bg-primary/20 transition-colors">
              <card.icon className="w-4 h-4 text-primary" />
            </div>
            <h4 className="text-xs font-semibold text-foreground">{card.title}</h4>
            <p className="text-[11px] text-muted/70 mt-0.5 leading-relaxed">{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
