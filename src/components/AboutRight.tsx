"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  GraduationCap,
  Search,
  Building2,
  Brain,
  Globe,
  Cpu,
  Puzzle,
} from "lucide-react";
import { AboutChatbot } from "./AboutChatbot";

const quickFacts = [
  { icon: GraduationCap, label: "B.Tech CS (AI/ML)", subtitle: "Education", color: "text-violet-400" },
  { icon: Building2, label: "Vignan University", subtitle: "College", color: "text-blue-400" },
  { icon: Search, label: "AI/ML & Full Stack", subtitle: "Looking For", color: "text-emerald-400" },
  { icon: MapPin, label: "India", subtitle: "Location", color: "text-amber-400" },
];

const features = [
  { icon: Brain, title: "Agentic AI", desc: "Building autonomous AI agent systems with CrewAI & LangGraph" },
  { icon: Globe, title: "Full Stack", desc: "React, Next.js, Flask, Node.js — end to end" },
  { icon: Cpu, title: "AI / ML", desc: "TensorFlow, LangChain, RAG, Generative AI" },
  { icon: Puzzle, title: "Problem Solving", desc: "Turning complex requirements into clean solutions" },
];

/**
 * AboutRight — right column with AI chatbot, quick facts grid, and feature highlights.
 */
export function AboutRight() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.15 }}
      className="space-y-10"
    >
      {/* AI Chatbot — compact */}
      <AboutChatbot />

      {/* Quick Facts */}
      <div className="space-y-4">
        <h4 className="text-xs font-mono text-muted tracking-[0.2em] uppercase">Quick Facts</h4>
        <div className="grid grid-cols-2 gap-3">
          {quickFacts.map((fact, i) => (
            <motion.div
              key={fact.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              whileHover={{ y: -2 }}
              className="glass rounded-xl p-4 border border-border hover:border-primary/15 transition-all duration-300 cursor-default group"
            >
              <div className={`flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 mb-3 group-hover:bg-white/10 transition-colors`}>
                <fact.icon className={`w-4.5 h-4.5 ${fact.color}`} />
              </div>
              <p className="text-[11px] text-muted/60 mb-0.5">{fact.subtitle}</p>
              <p className="text-sm font-medium text-foreground">{fact.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Feature Highlights */}
      <div className="space-y-4">
        <h4 className="text-xs font-mono text-muted tracking-[0.2em] uppercase">What I Do</h4>
        <div className="grid grid-cols-2 gap-3">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              whileHover={{ y: -2 }}
              className="glass rounded-xl p-4 border border-border hover:border-primary/15 transition-all duration-300 cursor-default group"
            >
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary/10 mb-3 group-hover:bg-primary/15 transition-colors">
                <feat.icon className="w-4.5 h-4.5 text-primary" />
              </div>
              <h5 className="text-sm font-semibold text-foreground mb-1">{feat.title}</h5>
              <p className="text-[11px] text-muted/60 leading-relaxed">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
