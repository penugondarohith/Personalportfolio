"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness, CalendarDays, MapPin } from "lucide-react";

const internships = [
  {
    role: "AI/ML Engineering Intern",
    company: "Neoskills",
    duration: "Jan 2026 - Apr 2026",
    location: "Hyderabad",
    bullets: [
      "Trained supervised ML models using Random Forest, Logistic Regression, and SVM on 500+ record datasets.",
      "Built preprocessing pipelines with null handling, one-hot encoding, and feature engineering using Pandas and NumPy.",
      "Achieved up to 88% accuracy and improved baseline model performance by 18% through iterative hyperparameter tuning.",
      "Improved F1-scores by 18% across multiple benchmark ML tasks.",
    ],
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn"],
  },
  {
    role: "Data Analyst Intern",
    company: "Microsoft Elevate Program",
    duration: "Feb 2026 - Mar 2026",
    location: "Hyderabad",
    bullets: [
      "Built a Power BI customer churn dashboard over 10,000+ records using SQL queries to surface high-risk signals.",
      "Supported retention strategies projected to reduce churn by 15-20%.",
      "Automated data ingestion workflows through REST APIs, cutting manual reporting time by 35%.",
      "Delivered 3 executive-level analytical reports to stakeholders.",
    ],
    tech: ["Power BI", "SQL", "REST APIs"],
  },
];

export function InternshipExperience() {
  return (
    <section id="experience" className="relative overflow-hidden px-6 py-20 md:py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-primary">Experience / Internships</p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Experience <span className="gradient-text">&amp; Internships</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-xs leading-relaxed text-muted">
            Hands-on experience across machine learning engineering and data analytics, with measurable technical and business outcomes.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
          {internships.map((item, index) => (
            <motion.article
              key={`${item.role}-${item.company}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative rounded-2xl border border-border bg-white/[0.03] p-5 transition-colors hover:border-primary/25 md:p-6"
            >
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 text-primary">
                <BriefcaseBusiness className="h-4 w-4" />
              </div>

              <div className="flex flex-col gap-3">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">Internship</p>
                  <h3 className="mt-2 text-xl font-semibold text-foreground">{item.role}</h3>
                  <p className="mt-1 text-sm font-medium text-foreground">{item.company}</p>
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted">
                  <span className="flex items-center gap-1.5"><CalendarDays className="h-3.5 w-3.5 text-primary" />{item.duration}</span>
                  <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-primary" />{item.location}</span>
                </div>

                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold text-foreground">Technologies:</span>
                  {item.tech.map((tech) => (
                    <span key={tech} className="rounded-full border border-border bg-black/10 px-2.5 py-1 text-[10px] font-medium text-muted">{tech}</span>
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
