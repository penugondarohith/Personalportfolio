"use client";

import { motion } from "framer-motion";

/**
 * ProfileCard — floating glass card with stylized initials avatar,
 * gradient glow backdrop, glass shapes, blur circles, and floating rings.
 * Features subtle hover tilt effect via CSS perspective transform.
 */
export function ProfileCard() {
  return (
    <div className="relative w-64 h-72 md:w-72 md:h-80 mx-auto">
      {/* Gradient glow behind card */}
      <motion.div
        className="absolute inset-0 rounded-3xl blur-[60px] opacity-40"
        style={{
          background:
            "linear-gradient(135deg, rgba(124, 58, 237, 0.5), rgba(59, 130, 246, 0.3), rgba(168, 85, 247, 0.4))",
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating decorative rings */}
      <motion.div
        className="absolute -top-6 -right-6 w-20 h-20 rounded-full border border-primary/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full border border-secondary/20"
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />

      {/* Blur circles */}
      <motion.div
        className="absolute top-1/4 -right-8 w-12 h-12 rounded-full bg-primary/20 blur-xl"
        animate={{ y: [0, -15, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 -left-6 w-10 h-10 rounded-full bg-secondary/20 blur-xl"
        animate={{ y: [0, 10, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, delay: 1 }}
      />

      {/* Glass card */}
      <motion.div
        className="relative w-full h-full rounded-3xl glass overflow-hidden group cursor-default"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ rotateY: 5, rotateX: -5, scale: 1.02 }}
        style={{ perspective: 1000, transformStyle: "preserve-3d" }}
      >
        {/* Inner gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Avatar with initials */}
        <div className="flex items-center justify-center h-full">
          <div className="relative">
            {/* Glow ring around avatar */}
            <motion.div
              className="absolute -inset-3 rounded-full"
              style={{
                background:
                  "conic-gradient(from 0deg, #7C3AED, #3B82F6, #A855F7, #7C3AED)",
                padding: 2,
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-full h-full rounded-full bg-card" />
            </motion.div>

            {/* Initials circle */}
            <div className="relative w-32 h-32 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center border border-primary/20">
              <span className="text-4xl md:text-5xl font-heading font-bold gradient-text">
                PR
              </span>
            </div>
          </div>
        </div>

        {/* Name + Role at bottom */}
        <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/40 to-transparent text-center">
          <p className="text-sm font-heading font-semibold text-white">
            Penugonda Rohith
          </p>
          <p className="text-xs text-white/60">Agentic AI Developer</p>
        </div>

        {/* Glass shapes */}
        <div className="absolute top-4 right-4 w-6 h-6 rounded-md bg-white/5 rotate-45" />
        <div className="absolute top-8 right-8 w-4 h-4 rounded-full bg-white/5" />
      </motion.div>
    </div>
  );
}
