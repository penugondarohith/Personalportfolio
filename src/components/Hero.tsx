"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedTitles } from "./AnimatedTitles";
import { CTAButtons } from "./CTAButtons";
import { SocialIcons } from "./SocialIcons";
import { FloatingIcons } from "./FloatingIcons";
import { HeroBackground } from "./HeroBackground";
import { ScrollIndicator } from "./ScrollIndicator";

/**
 * Hero — full-viewport hero section with split layout.
 * Left: introduction, animated titles, CTAs, socials.
 * Right: profile photo centered among floating tech icons.
 */
export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 py-24 overflow-hidden"
    >
      <HeroBackground />

      <div className="relative z-10 w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* ========== LEFT SIDE ========== */}
        <div className="space-y-6 md:space-y-8">
          {/* Open for Internships Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-primary border border-primary/20 animate-[badge-glow_3s_ease-in-out_infinite]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              Open for Internships
            </div>
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-2"
          >
            <p className="text-lg md:text-xl text-muted font-medium">
              Hi, I&apos;m
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold leading-[1.1] tracking-tight">
              <span className="text-foreground">Penugonda</span>
              <br />
              <span className="gradient-text">Rohith</span>
            </h1>
          </motion.div>

          {/* Animated Job Titles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <AnimatedTitles />
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-base md:text-lg text-muted font-medium italic"
          >
            Transforming Ideas into Intelligent Software.
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-sm md:text-base text-muted/80 leading-relaxed max-w-xl"
          >
            I am a B.Tech Computer Science (AI &amp; Machine Learning) student
            passionate about building intelligent applications using Generative
            AI, Agentic AI, Machine Learning, and Full Stack Development. I enjoy
            solving real-world problems by combining AI with scalable software
            engineering and modern web technologies.
          </motion.p>

          {/* CTA Buttons */}
          <CTAButtons />

          {/* Social Icons */}
          <SocialIcons />
        </div>

        {/* ========== RIGHT SIDE — Profile Photo + Floating Icons ========== */}
        <motion.div
          initial={{ opacity: 0, x: 60, filter: "blur(20px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="hidden lg:flex items-center justify-center"
        >
          <div className="relative" style={{ width: 400, height: 400 }}>
            {/* Floating Tech Icons — orbiting circle */}
            <FloatingIcons />

            {/* Decorative orbit rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div
                className="absolute w-[320px] h-[320px] rounded-full border border-primary/10"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute w-[380px] h-[380px] rounded-full border border-secondary/5"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />
            </div>

            {/* Profile Photo — absolutely centered */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="relative">
                {/* Gradient glow behind photo */}
                <motion.div
                  className="absolute -inset-8 rounded-full blur-[50px] opacity-40"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(124, 58, 237, 0.5), rgba(59, 130, 246, 0.3), rgba(168, 85, 247, 0.4))",
                  }}
                  animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Rotating gradient ring */}
                <motion.div
                  className="absolute -inset-2 rounded-full"
                  style={{
                    background:
                      "conic-gradient(from 0deg, #7C3AED, #3B82F6, #A855F7, #7C3AED)",
                    padding: 3,
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <div className="w-full h-full rounded-full bg-background" />
                </motion.div>

                {/* Actual photo */}
                <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-primary/20 shadow-2xl shadow-primary/20 group cursor-default">
                  <Image
                    src="/profile.jpg"
                    alt="Penugonda Rohith"
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    priority
                    sizes="192px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <ScrollIndicator />
    </section>
  );
}
