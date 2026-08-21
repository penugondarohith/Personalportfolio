"use client";

import { motion } from "framer-motion";
import { AboutLeft } from "./AboutLeft";
import { AboutRight } from "./AboutRight";

export function AboutMe() {
  return (
    <section id="about" className="relative overflow-hidden px-6 py-20 md:py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-secondary/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-primary">Get to know me</p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-xs leading-relaxed text-muted">
            A passionate developer building intelligent solutions at the intersection of AI and modern web technologies.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <AboutLeft />
          <AboutRight />
        </div>
      </div>
    </section>
  );
}
