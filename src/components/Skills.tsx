"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFlask,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiSqlite,
  SiGit,
  SiGithub,
  SiDocker,
  SiPostman,
  SiVercel,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiLangchain,
  SiGooglegemini,
} from "react-icons/si";
import {
  Code2,
  Layout,
  Server,
  Brain,
  Sparkles,
  Database,
  Wrench,
  BrainCircuit,
  Bot,
  FileCode,
  BarChart3,
  Terminal,
} from "lucide-react";
import type { IconType } from "react-icons";
import type { LucideIcon } from "lucide-react";

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
      { name: "Java", icon: FileCode, color: "#ED8B00" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "SQL", icon: Database, color: "#4479A1" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    icon: Layout,
    skills: [
      { name: "React.js", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "HTML/CSS", icon: Code2, color: "#E34F26" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    icon: Server,
    skills: [
      { name: "Flask", icon: SiFlask, color: "#ffffff" },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#ffffff" },
    ],
  },
  {
    id: "aiml",
    title: "AI / ML",
    icon: Brain,
    skills: [
      { name: "Machine Learning", icon: BrainCircuit, color: "#A855F7" },
      { name: "Pandas", icon: SiPandas, color: "#150458" },
      { name: "NumPy", icon: SiNumpy, color: "#013243" },
      { name: "Scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
      { name: "Matplotlib", icon: BarChart3, color: "#11557C" },
    ],
  },
  {
    id: "genai",
    title: "Generative AI",
    icon: Sparkles,
    skills: [
      { name: "Prompt Engineering", icon: Terminal, color: "#10B981" },
      { name: "RAG", icon: Database, color: "#8B5CF6" },
      { name: "CrewAI", icon: Bot, color: "#A855F7" },
      { name: "LangGraph", icon: SiLangchain, color: "#1C3C3C" },
      { name: "OpenAI API", icon: BrainCircuit, color: "#ffffff" },
      { name: "Gemini API", icon: SiGooglegemini, color: "#886FBF" },
    ],
  },
  {
    id: "databases",
    title: "Databases",
    icon: Database,
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "SQLite", icon: SiSqlite, color: "#003B57" },
    ],
  },
  {
    id: "tools",
    title: "Tools",
    icon: Wrench,
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#ffffff" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "VS Code", icon: Code2, color: "#007ACC" },
      { name: "Vercel", icon: SiVercel, color: "#ffffff" },
    ],
  },
];

/**
 * Skills — interactive skill categories with tabbed navigation and animated icon cards.
 */
export function Skills() {
  const [activeTab, setActiveTab] = useState("programming");
  const activeCategory = categories.find((c) => c.id === activeTab)!;

  return (
    <section id="skills" className="relative py-32 px-6 overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute top-1/2 -right-40 w-96 h-96 rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-1/3 -left-40 w-80 h-80 rounded-full bg-secondary/5 blur-[120px]" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-mono text-primary tracking-[0.2em] uppercase mb-4">
            What I Work With
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-tight">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="mt-4 text-sm md:text-base text-muted/70 max-w-lg mx-auto">
            The tools, languages, and frameworks I use to build intelligent applications.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium transition-all duration-300 border ${
                activeTab === cat.id
                  ? "bg-primary/15 text-primary border-primary/25 shadow-lg shadow-primary/10"
                  : "bg-white/5 text-muted/60 border-border hover:text-foreground hover:bg-white/10 hover:border-primary/10"
              }`}
            >
              <cat.icon className="w-3.5 h-3.5" />
              {cat.title}
            </button>
          ))}
        </motion.div>

        {/* Skill Cards Grid */}
        <div className="min-h-[180px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
            >
              {activeCategory.skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.06 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group relative glass rounded-2xl p-5 border border-border hover:border-primary/20 transition-all duration-300 cursor-default overflow-hidden"
                >
                  {/* Gradient border glow on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative flex flex-col items-center gap-3 text-center">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors">
                      <skill.icon
                        className="w-6 h-6 transition-transform duration-300 group-hover:scale-110"
                        style={{ color: skill.color }}
                      />
                    </div>
                    <span className="text-xs font-medium text-foreground/80 group-hover:text-foreground transition-colors">
                      {skill.name}
                    </span>
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
