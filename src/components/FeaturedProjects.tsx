"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Sparkles } from "lucide-react";

const projects = [
  {
    title: "AI Portfolio Assistant",
    tagline: "Interactive AI chatbot for portfolio visitors.",
    description:
      "Built with Next.js, OpenAI, and custom AI prompts to answer questions about skills, projects, and experience in real time.",
    highlights: ["GPT-4.1 chat workflow", "Knowledge retrieval ready", "Modern responsive UI"],
    href: "https://github.com/penugondarohith",
  },
  {
    title: "Machine Learning Showcase",
    tagline: "End-to-end ML solutions for real-world datasets.",
    description:
      "Designed predictive classification systems with TensorFlow, Scikit-learn, and data-driven evaluation for accuracy and model quality.",
    highlights: ["Training pipelines", "Data analysis dashboards", "Performance validation"],
    href: "https://github.com/penugondarohith",
  },
  {
    title: "Portfolio Website",
    tagline: "A polished brand presence for a developer and AI student.",
    description:
      "This portfolio is built with Next.js, Tailwind CSS, and motion-rich interactions to showcase skills, projects, and contact pathways.",
    highlights: ["Next.js 16 + Turbopack", "Framer Motion animations", "Mobile-first experience"],
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
                  <Github className="h-4 w-4" />
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
