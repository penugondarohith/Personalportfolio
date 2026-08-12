"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Trophy } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="relative overflow-hidden px-6 py-24 md:py-28">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary">Education</p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Academic foundation in <span className="gradient-text">AI &amp; ML</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-[28px] border border-border bg-white/4 p-6 md:p-8"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="mb-4 flex items-center gap-3 text-primary">
                <GraduationCap className="h-5 w-5" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em]">B.Tech</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground">Computer Science Engineering (AI &amp; ML)</h3>
              <p className="mt-3 text-lg text-muted">Vignan Institute of Technology and Science</p>
              <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-muted">
                <span className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Hyderabad</span>
                <span>2023–2027</span>
              </div>
            </div>
            <div className="rounded-2xl border border-primary/20 bg-primary/10 px-3 py-2 text-right">
              <p className="text-[11px] uppercase tracking-[0.18em] text-primary">GPA</p>
              <p className="text-xl font-bold text-foreground">8.2</p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-border bg-black/10 p-4">
            <div className="flex items-center gap-2 text-primary">
              <Trophy className="h-4 w-4" />
              <span className="text-sm font-semibold">Academic outcome</span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Building a strong foundation in AI/ML, software engineering, data structures, and modern web technologies while maintaining a solid academic record.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
