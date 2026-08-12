"use client";

import { motion } from "framer-motion";
import { AboutLeft } from "./AboutLeft";
import { AboutRight } from "./AboutRight";

/**
 * AboutMe — redesigned two-column section.
 * Left: About text, journey timeline, mission
 * Right: AI chatbot, quick facts, feature highlights
 */
export function AboutMe() {
  return (
    <section id="about" className="relative py-32 px-6 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute top-1/3 -left-40 w-80 h-80 rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-1/4 -right-40 w-80 h-80 rounded-full bg-secondary/5 blur-[120px]" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-xs font-mono text-primary tracking-[0.2em] uppercase mb-4">
            Get to Know Me
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-tight">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="mt-4 text-sm md:text-base text-muted/70 max-w-lg mx-auto leading-relaxed">
            A passionate developer building intelligent solutions at the intersection of AI and modern web technologies.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          <AboutLeft />
          <AboutRight />
        </div>
      </div>
    </section>
  );
}
