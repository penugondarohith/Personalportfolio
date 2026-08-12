"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness, CalendarDays, Building2 } from "lucide-react";

const experiences = [
  {
    role: "Full-Stack Developer Intern",
    company: "Hypersolve Pvt Ltd",
    duration: "Jan 2025 – Present",
    bullets: [
      "Built responsive web interfaces and backend integrations for AI-driven product workflows.",
      "Worked with modern frontend and server-side technologies to improve user-facing functionality.",
      "Collaborated on feature development and technical problem-solving across the product lifecycle.",
    ],
    tech: ["React.js", "Node.js", "REST APIs", "Full-Stack Development"],
  },
  {
    role: "AI/ML Intern",
    company: "AICTE / Industry-connected training project",
    duration: "2024",
    bullets: [
      "Worked on applied AI and machine learning tasks focused on model building and data-driven decision-making.",
      "Explored dataset preparation, experimentation, and iterative improvement for practical solutions.",
      "Applied Python-based workflows to convert project ideas into implementation-ready systems.",
    ],
    tech: ["Python", "Machine Learning", "Pandas", "NumPy"],
  },
  {
    role: "Project-based AI Developer",
    company: "Independent / Academic Projects",
    duration: "2023 – 2025",
    bullets: [
      "Developed end-to-end AI and full-stack projects covering data analysis, ML pipelines, and application design.",
      "Integrated AI features with web interfaces and APIs to build functional, user-centric solutions.",
      "Focused on project structure, experimentation, and practical deployment-oriented implementation.",
    ],
    tech: ["Python", "Flask", "React.js", "AI/ML"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden px-6 py-24 md:py-28">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary">Experience</p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Career and project experience in <span className="gradient-text">AI + software engineering</span>
          </h2>
        </motion.div>

        <div className="relative before:absolute before:left-[18px] before:top-0 before:h-full before:w-px before:bg-gradient-to-b before:from-primary/40 before:via-primary/20 before:to-transparent">
          {experiences.map((item, index) => (
            <motion.article
              key={`${item.role}-${item.company}`}
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative mb-8 pl-12"
            >
              <div className="absolute left-0 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-primary/25 bg-primary/10 text-primary">
                <BriefcaseBusiness className="h-4 w-4" />
              </div>

              <div className="rounded-[28px] border border-border bg-white/4 p-6 md:p-7">
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">{item.role}</p>
                    <h3 className="mt-2 text-2xl font-semibold text-foreground">{item.company}</h3>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted">
                    <CalendarDays className="h-4 w-4" />
                    {item.duration}
                  </div>
                </div>

                <ul className="mt-5 space-y-3 text-sm leading-relaxed text-muted md:text-base">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {item.tech.map((tech) => (
                    <span key={tech} className="rounded-full border border-border bg-black/10 px-2.5 py-1.5 text-xs font-medium text-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
