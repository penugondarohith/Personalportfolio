"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Link2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export function GitHubActivity() {
  return (
    <section id="github" className="relative overflow-hidden px-6 py-24 md:py-28">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary">GitHub</p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Open-source contributions and project work
          </h2>
        </motion.div>

        <motion.a
          href="https://github.com/penugondarohith"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-5 rounded-[28px] border border-border bg-white/4 p-6 text-left transition-transform hover:-translate-y-1 hover:border-primary/20 md:flex-row md:items-center md:justify-between"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <FaGithub className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-muted">Profile</p>
              <p className="mt-1 text-xl font-semibold text-foreground">github.com/penugondarohith</p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm font-medium text-primary">
            View GitHub
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </motion.a>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            "AI/ML projects",
            "Generative AI experiments",
            "Full-stack application work",
          ].map((entry) => (
            <div key={entry} className="rounded-2xl border border-border bg-black/10 p-4 text-sm text-muted">
              <div className="mb-2 flex items-center gap-2 text-primary">
                <Link2 className="h-4 w-4" />
                <span className="font-medium text-foreground">Activity</span>
              </div>
              {entry}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
