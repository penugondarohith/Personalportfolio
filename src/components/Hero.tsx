"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CTAButtons } from "./CTAButtons";
import { FloatingIcons } from "./FloatingIcons";
import { AnimatedTitles } from "./AnimatedTitles";
import { SocialIcons } from "./SocialIcons";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-6 pb-20 pt-28 md:pb-24 md:pt-36">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(124,58,237,0.18),_transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.12),_transparent_24%)]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:min-h-[560px] lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
            <span className="h-2 w-2 rounded-full bg-primary" />
            Open for internship
          </div>

          <div className="space-y-3">
            <p className="text-sm font-medium text-muted">Hi, I&apos;m</p>
            <h1 className="max-w-xl text-4xl font-black leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Penugonda
              <br />
              <span className="gradient-text">Rohith</span>
            </h1>
            <AnimatedTitles />
          </div>

          <p className="max-w-xl text-sm italic leading-relaxed text-muted md:text-base">
            Transforming ideas into intelligent software.
          </p>

          <p className="max-w-xl text-xs leading-relaxed text-muted md:text-sm">
            I am a B.Tech Computer Science (AI &amp; Machine Learning) student passionate about
            building intelligent applications using Generative AI, Agentic AI, Machine Learning,
            and Full Stack development. I enjoy solving real-world problems by combining AI with
            scalable software engineering and modern web technologies.
          </p>

          <CTAButtons />
          <SocialIcons />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto flex w-full max-w-md items-center justify-center"
        >
          <div className="relative h-[400px] w-[400px] max-w-full">
            <div className="absolute inset-20 rounded-full bg-primary/20 blur-3xl" />
            <FloatingIcons />
            <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-primary via-secondary to-accent p-1 shadow-2xl shadow-primary/30">
              <div className="h-full w-full overflow-hidden rounded-full border-4 border-background">
                <Image
                  src="/profile.jpg"
                  alt="Rohith Penugonda"
                  width={640}
                  height={800}
                  priority
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
