"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

const projects = [
  {
    title: "Multi-Agent Interview Preparation System",
    tagline: "AI-driven interview practice with collaborative agent workflows.",
    description:
      "Built a multi-agent system that coordinates study plans, generates interview questions, and delivers personalized feedback for technical candidates.",
    highlights: ["Agent orchestration", "Adaptive question generation", "Performance tracking"],
    href: "https://github.com/penugondarohith",
  },
  {
    title: "Customer Churn Project",
    tagline: "Predicting churn to increase customer retention using ML.",
    description:
      "Developed a predictive analytics solution to identify churn risk and recommend retention strategies using supervised learning models.",
    highlights: ["Data preprocessing", "Model evaluation", "Business insights"],
    href: "https://github.com/penugondarohith",
  },
  {
    title: "SkillGap AI",
    tagline: "Intelligent skill-gap analysis for learner upskilling.",
    description:
      "Created an AI tool that maps current skills to target roles and suggests learning paths to close career gaps effectively.",
    highlights: ["Skill profiling", "Role alignment", "Personalized recommendations"],
    href: "https://github.com/penugondarohith",
  },
  {
    title: "Smart Book Recommendation System",
    tagline: "A recommendation engine for personalized book discovery.",
    description:
      "Implemented a smart book recommender that suggests relevant books based on user interests, behavior, and reading patterns.",
    highlights: ["Recommendation algorithm", "User preferences", "Intuitive UI"],
    href: "https://github.com/penugondarohith",
  },
  {
    title: "Blog Platform",
    tagline: "A dynamic blogging platform with modern CMS features.",
    description:
      "Built a full-stack blog solution with content management, rich text authoring, and responsive design for seamless publishing.",
    highlights: ["Content management", "Responsive design", "SEO-friendly architecture"],
    href: "https://github.com/penugondarohith",
  },
];

export function FeaturedProjects() {
  return (
    <section id="projects" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute top-1/4 right-0 w-72 h-72 rounded-full bg-secondary/5 blur-[140px]" />
        <div className="absolute bottom-1/4 left-0 w-72 h-72 rounded-full bg-primary/5 blur-[140px]" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4 text-sm font-mono uppercase tracking-[0.3em] text-primary/90">
            <Sparkles className="w-4 h-4" />
            Highlighted Projects
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-tight">
            Selected Work <span className="gradient-text">Highlights</span>
          </h2>
          <p className="mt-4 text-sm md:text-base text-muted/70 max-w-2xl mx-auto leading-relaxed">
            A curated showcase of recent AI, machine learning, and web development projects that demonstrate practical impact and polished delivery.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-3xl border border-border p-6 flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
            >
              <div className="space-y-5">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                  Project {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground tracking-tight">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted/70 leading-relaxed">
                    {project.tagline}
                  </p>
                </div>
                <p className="text-sm text-muted/80 leading-relaxed">{project.description}</p>
                <div className="space-y-2">
                  {project.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-center gap-3 text-sm text-foreground/80">
                      <span className="inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-between gap-2 rounded-2xl border border-border px-4 py-3 text-sm font-medium text-primary hover:bg-primary/5 transition-all duration-200"
              >
                <span className="flex items-center gap-2">
                  <span className="h-4 w-4 text-primary">GH</span>
                  View on GitHub
                </span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
