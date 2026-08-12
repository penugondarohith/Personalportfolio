"use client";

import { motion } from "framer-motion";
import { School, BookOpen, Star } from "lucide-react";

const educationData = [
  {
    level: "Bachelor of Technology (B.Tech)",
    institution: "Vignan Institute of Technology and Science",
    duration: "2023 – 2027",
    location: "Hyderabad",
    grade: "CGPA: 8.2 / 10",
    focus: ["AI & Machine Learning", "Web Development", "Data Structures", "Python"],
  },
  {
    level: "Intermediate (Class XII)",
    institution: "Sri Chaitanya Junior College",
    duration: "2021 – 2023",
    location: "Vijayawada",
    grade: "Score: 89.8%",
    focus: ["Mathematics", "Physics", "Chemistry", "Computer Science"],
  },
  {
    level: "Secondary School (SSC)",
    institution: "Noble High School",
    duration: "2021",
    location: "Vijayawada",
    grade: "GPA: 10 / 10",
    focus: ["Academic Excellence", "Discipline", "Leadership", "Community Service"],
  },
];

export function Education() {
  return (
    <section id="education" className="relative py-28 px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute top-1/4 right-0 w-72 h-72 rounded-full bg-secondary/5 blur-[100px]" />
        <div className="absolute bottom-1/4 left-0 w-72 h-72 rounded-full bg-primary/5 blur-[100px]" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-4 text-sm font-mono uppercase tracking-[0.3em] text-primary/90">
            <School className="w-4 h-4" />
            Education
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-tight">
            Academic Background &amp; Achievements
          </h2>
          <p className="mt-4 text-sm md:text-base text-muted/70 max-w-2xl mx-auto leading-relaxed">
            A strong academic foundation in AI/ML, web development, and computer science with proven results across school and college.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {educationData.map((item, index) => (
            <motion.article
              key={item.level}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="glass rounded-3xl border border-border p-6 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
            >
              <div className="flex items-center justify-between gap-3 mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{item.level}</h3>
                  <p className="text-xs uppercase tracking-[0.28em] text-primary/80 mt-1 font-semibold">{item.duration}</p>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <BookOpen className="w-5 h-5" />
                </div>
              </div>
              <p className="text-sm font-semibold text-foreground">{item.institution}</p>
              <p className="text-sm text-muted/70 mt-2">{item.location}</p>
              <p className="mt-4 text-sm text-primary font-medium">{item.grade}</p>
              <div className="mt-5 space-y-2">
                {item.focus.map((point) => (
                  <div key={point} className="flex items-center gap-3 text-sm text-muted/70">
                    <span className="inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.3 }}
          className="mt-16 glass rounded-3xl border border-primary/20 p-6 flex flex-col gap-4"
        >
          <div className="flex items-center gap-3">
            <Star className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-semibold text-foreground">Key Academic Strengths</h3>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 text-sm text-muted/80">
            <li>Consistent academic excellence across board and college examinations.</li>
            <li>Strong foundation in artificial intelligence, machine learning, and data science.</li>
            <li>Focused on practical web development and software engineering skills.</li>
            <li>Active learner with disciplined study habits and problem-solving focus.</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
