"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

/**
 * ScrollIndicator — bouncing "Scroll Down" indicator at bottom center of hero.
 * Fades in with delay and features continuous bounce animation.
 */
export function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 1 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
      onClick={() => {
        window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
      }}
      role="button"
      aria-label="Scroll down"
      tabIndex={0}
    >
      <span className="text-xs font-mono text-muted tracking-widest uppercase">
        Scroll Down
      </span>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="h-5 w-5 text-muted" />
      </motion.div>
    </motion.div>
  );
}
