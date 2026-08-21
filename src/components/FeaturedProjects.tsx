"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Multi-Agent Interview Preparation System",
    problem: "Candidates need structured interview preparation across resume analysis, technical readiness, and role-specific feedback.",
    solution:
      "A multi-agent workflow that evaluates resumes, matches them to job descriptions, runs HR and technical interview agents, and suggests learning roadmaps using collaborative AI reasoning.",
    architecture: [
      "Resume analysis agent",
      "Job-description matching agent",
      "HR interview agent",
      "Technical interview agent",
      "Aptitude agent",
      "Feedback agent",
      "Career advisor",
      "Skill-gap recommendation engine",
    ],
    tech: ["React.js", "Python", "Flask", "CrewAI", "Gemini/OpenAI", "REST APIs"],
    href: "https://github.com/penugondarohith",
    demo: "#",
  },
  {
    title: "Skill Gap AI",
    problem: "Job seekers often struggle to map their current skills to target roles and identify missing competencies.",
    solution:
      "An AI-driven skill-gap analysis tool that compares a resume against a job description and generates a prioritized learning roadmap.",
    architecture: [
      "Resume parsing",
      "Job description analysis",
      "Skill matching",
      "Gap identification",
      "Personalized learning roadmap",
    ],
    tech: ["Python", "ML/NLP", "LLMs", "Streamlit"],
    href: "https://github.com/penugondarohith",
    demo: "#",
  },
  {
    title: "Customer Churn Prediction",
    problem: "Businesses need actionable insights into customers at risk of churn before retention efforts are lost.",
    solution:
      "A machine learning workflow for customer data preprocessing, feature engineering, model comparison, and churn-risk analysis.",
    architecture: [
      "Data preprocessing",
      "EDA",
      "Feature engineering",
      "Model evaluation",
      "Business insights",
    ],
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"],
    href: "https://github.com/penugondarohith",
    demo: "#",
  },
  {
    title: "Smart Book Recommendation System",
    problem: "Readers need personalized recommendations that help them discover relevant books quickly.",
    solution:
      "A recommendation engine that suggests relevant books based on user interests, behavior, and reading patterns.",
    architecture: [
      "Recommendation algorithm",
      "User preferences",
      "Intuitive UI",
    ],
    tech: ["Python", "Machine Learning", "Streamlit"],
    href: "https://github.com/penugondarohith",
    demo: "#",
  },
  {
    title: "Blog Platform",
    problem: "Content creators need a simple, modern space to publish and manage blog content.",
    solution:
      "A full-stack blogging platform with content management, rich text authoring, and responsive publishing workflows.",
    architecture: [
      "Content management",
      "Responsive design",
      "SEO-friendly architecture",
    ],
    tech: ["Next.js", "React", "Node.js", "MongoDB"],
    href: "https://github.com/penugondarohith",
    demo: "#",
  },
];

export function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null);

  return (
    <section id="projects" className="relative overflow-hidden px-6 py-24 md:py-28">
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
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-primary">Projects</p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Selected Work <span className="gradient-text">Highlights</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-xs leading-relaxed text-muted">
            A curated showcase of recent AI, machine learning, and web development projects that demonstrate practical impact and polished delivery.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="flex min-h-[264px] flex-col rounded-2xl border border-border bg-white/[0.03] p-3 transition-colors hover:border-primary/25"
            >
              <div className="flex flex-1 flex-col space-y-3 p-1">
                <p className="w-fit rounded-full bg-primary/10 px-2 py-1 text-[8px] font-semibold uppercase tracking-[0.2em] text-primary">Project {index + 1}</p>
                <h3 className="text-sm font-semibold leading-tight text-foreground">{project.title}</h3>
                <p className="text-[10px] leading-relaxed text-muted">{project.problem}</p>
                <p className="text-[10px] leading-relaxed text-muted">{project.solution}</p>

                <div className="space-y-1">
                  {project.architecture.slice(0, 3).map((item) => (
                    <div key={item} className="flex items-center gap-2 text-[10px] text-muted">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap gap-2 pt-3">
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-between rounded-xl border border-border bg-white/[0.02] px-2.5 py-1.5 text-[10px] font-medium text-primary hover:border-primary/30"
                  >
                    <FaGithub className="h-4 w-4" />
                    GH View on GitHub
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 px-4 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(event) => event.stopPropagation()}
              className="max-h-[85vh] w-full max-w-3xl overflow-y-auto rounded-[28px] border border-border bg-slate-950 p-6 shadow-2xl"
            >
              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-primary">Case Study</p>
                  <h3 className="mt-2 text-2xl font-semibold text-foreground">{selectedProject.title}</h3>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="rounded-full border border-border px-3 py-1.5 text-sm text-muted"
                >
                  Close
                </button>
              </div>

              <div className="space-y-6 text-sm text-muted">
                <div>
                  <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-foreground">Problem</p>
                  <p>{selectedProject.problem}</p>
                </div>
                <div>
                  <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-foreground">Solution</p>
                  <p>{selectedProject.solution}</p>
                </div>
                <div>
                  <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-foreground">Architecture</p>
                  <ul className="space-y-2">
                    {selectedProject.architecture.map((step) => (
                      <li key={step} className="flex gap-2">
                        <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-foreground">Technologies</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech) => (
                      <span key={tech} className="rounded-full border border-border px-2.5 py-1 text-xs text-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-foreground">Key Challenges</p>
                  <p>Designing a reliable multi-step AI workflow, aligning outputs to user intent, and ensuring the application remains understandable and usable for real-world scenarios.</p>
                </div>
                <div>
                  <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-foreground">Results</p>
                  <p>Built a functional AI-driven project workflow demonstrating practical application of ML, Generative AI, and product thinking without claiming unsupported metrics.</p>
                </div>
                <div className="flex flex-wrap gap-3 pt-2">
                  <a href={selectedProject.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-border px-3 py-2 text-sm font-semibold text-foreground">
                    <FaGithub className="h-4 w-4" />
                    GitHub
                  </a>
                  {selectedProject.demo !== "#" && (
                    <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-primary/20 bg-primary/10 px-3 py-2 text-sm font-semibold text-primary">
                      Live Demo
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
