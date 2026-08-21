"use client";

import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Star } from "lucide-react";

const educationCards = [
  {
    title: "Bachelor of Technology (B.Tech)",
    period: "2023 - 2027",
    school: "Vignan Institute of Technology and Science",
    location: "Hyderabad",
    detail: "Bachelor of Technology coursework in AI & Machine Learning, Web Development, and Data Structures",
    points: ["AI & Machine Learning", "Web Development", "Data Structures", "Python"],
  },
  {
    title: "Intermediate (Class XII)",
    period: "2021 - 2023",
    school: "Sri Chaitanya Junior College",
    location: "Vijayawada",
    detail: "Score: 89.8%",
    points: ["Mathematics", "Physics", "Chemistry", "Computer Science"],
  },
  {
    title: "Secondary School (SSC)",
    period: "2021",
    school: "Noble High School",
    location: "Vijayawada",
    detail: "GPA: 10 / 10",
    points: ["Academic Excellence", "Discipline", "Leadership", "Community Service"],
  },
];

export function Education() {
  return (
    <section id="education" className="relative overflow-hidden px-6 py-20 md:py-24">
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
          <p className="mb-3 flex items-center justify-center gap-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-primary">
            <GraduationCap className="h-3 w-3" /> Education
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Academic Background <span className="gradient-text">&amp; Achievements</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-xs leading-relaxed text-muted">
            A strong academic foundation in AI/ML, web development, and computer science with proven results across school and college.
          </p>
        </motion.div>

        <div className="grid gap-4 lg:grid-cols-3">
          {educationCards.map((card, index) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="rounded-2xl border border-border bg-white/[0.03] p-4 transition-colors hover:border-primary/25"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-sm font-bold leading-tight text-foreground">{card.title}</h3>
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <BookOpen className="h-4 w-4" />
                </div>
              </div>
              <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-primary">{card.period}</p>
              <p className="mt-3 text-[10px] font-semibold text-foreground">{card.school}</p>
              <p className="mt-1 text-[10px] text-muted">{card.location}</p>
              <p className="mt-4 text-[10px] leading-relaxed text-primary">{card.detail}</p>
              <ul className="mt-4 space-y-2">
                {card.points.map((point) => (
                  <li key={point} className="flex items-center gap-2 text-[10px] text-muted">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 rounded-2xl border border-border bg-white/[0.03] p-4"
        >
          <div className="flex items-center gap-2 text-foreground">
            <Star className="h-4 w-4 text-primary" />
            <h3 className="text-sm font-semibold">Key Academic Strengths</h3>
          </div>
          <div className="mt-4 grid gap-3 text-[10px] leading-relaxed text-muted md:grid-cols-2">
            <p>Consistent academic excellence across board and college examinations.</p>
            <p>Strong foundation in artificial intelligence, machine learning, and data science.</p>
            <p>Focused on practical web development and software engineering skills.</p>
            <p>Active learner with disciplined study habits and problem-solving focus.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
