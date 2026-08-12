"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  BrainCircuit,
  Code2,
  Database,
  FileCode,
  GitBranch,
  Layers3,
  Sparkles,
  Wrench,
  Gauge,
  Cpu,
} from "lucide-react";
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiFlask,
  SiFastapi,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiSqlite,
  SiGit,
  SiVercel,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiJupyter,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import type { LucideIcon } from "lucide-react";
import type { IconType } from "react-icons";

interface Skill {
  name: string;
  icon: IconType | LucideIcon;
  color: string;
}

interface SkillCategory {
  id: string;
  title: string;
  icon: LucideIcon;
  skills: Skill[];
}

const categories: SkillCategory[] = [
  {
    id: "programming",
    title: "Programming",
    icon: Code2,
    skills: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "Java", icon: FaJava, color: "#ED8B00" },
      { name: "C", icon: FileCode, color: "#A7B1C2" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    ],
  },
  {
    id: "aiml",
    title: "AI / Machine Learning",
    icon: BrainCircuit,
    skills: [
      { name: "Machine Learning", icon: BrainCircuit, color: "#8B5CF6" },
      { name: "Scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
      { name: "Pandas", icon: SiPandas, color: "#150458" },
      { name: "NumPy", icon: SiNumpy, color: "#013243" },
      { name: "Matplotlib", icon: Gauge, color: "#22C55E" },
    ],
  },
  {
    id: "genai",
    title: "Generative AI",
    icon: Sparkles,
    skills: [
      { name: "LLMs", icon: Sparkles, color: "#8B5CF6" },
      { name: "Prompt Engineering", icon: Cpu, color: "#10B981" },
      { name: "RAG", icon: Database, color: "#A78BFA" },
      { name: "Embeddings", icon: Layers3, color: "#60A5FA" },
      { name: "Vector Databases", icon: Database, color: "#38BDF8" },
    ],
  },
  {
    id: "agentic",
    title: "Agentic AI",
    icon: Bot,
    skills: [
      { name: "AI Agents", icon: Bot, color: "#A855F7" },
      { name: "Multi-Agent Systems", icon: GitBranch, color: "#22D3EE" },
      { name: "CrewAI", icon: Bot, color: "#8B5CF6" },
      { name: "LangGraph", icon: GitBranch, color: "#4F46E5" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    icon: Layers3,
    skills: [
      { name: "React.js", icon: SiReact, color: "#61DAFB" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss, color: "#1572B6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    icon: Database,
    skills: [
      { name: "Flask", icon: SiFlask, color: "#FFFFFF" },
      { name: "FastAPI", icon: SiFastapi, color: "#009688" },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
      { name: "REST APIs", icon: Database, color: "#60A5FA" },
    ],
  },
  {
    id: "databases",
    title: "Databases",
    icon: Database,
    skills: [
      { name: "SQL", icon: Database, color: "#A78BFA" },
      { name: "SQLite", icon: SiSqlite, color: "#003B57" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Supabase", icon: Database, color: "#3ECF8E" },
    ],
  },
  {
    id: "tools",
    title: "Tools",
    icon: Wrench,
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "Vercel", icon: SiVercel, color: "#FFFFFF" },
      { name: "VS Code", icon: Code2, color: "#007ACC" },
      { name: "Jupyter", icon: SiJupyter, color: "#F37726" },
      { name: "Power BI", icon: Gauge, color: "#F2CC8C" },
    ],
  },
];

export function Skills() {
  const [activeTab, setActiveTab] = useState("programming");
  const activeCategory = categories.find((category) => category.id === activeTab) ?? categories[0];

  return (
    <section id="skills" className="relative overflow-hidden px-6 py-24 md:py-28">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <div className="absolute -right-20 top-1/3 h-72 w-72 rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute -left-20 bottom-1/4 h-72 w-72 rounded-full bg-secondary/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary">Skills</p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Tools for <span className="gradient-text">AI + software engineering</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="mb-10 flex flex-wrap justify-center gap-2"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => setActiveTab(category.id)}
              className={`flex items-center gap-2 rounded-xl border px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition-colors ${
                activeTab === category.id
                  ? "border-primary/30 bg-primary/10 text-primary"
                  : "border-border bg-white/5 text-muted hover:border-primary/20 hover:text-foreground"
              }`}
            >
              <category.icon className="h-3.5 w-3.5" />
              {category.title}
            </button>
          ))}
        </motion.div>

        <div className="min-h-[220px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
            >
              {activeCategory.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.04 }}
                  className="group rounded-2xl border border-border bg-white/4 p-4 transition-transform hover:-translate-y-1 hover:border-primary/20"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black/10">
                      <skill.icon className="h-5 w-5" style={{ color: skill.color }} />
                    </div>
                    <span className="text-sm font-medium text-foreground">{skill.name}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
