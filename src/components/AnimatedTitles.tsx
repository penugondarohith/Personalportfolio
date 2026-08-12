"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const titles = [
  "Agentic AI Developer",
  "Full Stack Developer",
  "AI/ML Engineer",
  "Software Engineer",
];

/**
 * AnimatedTitles — typewriter effect cycling through job titles.
 * Features blinking cursor, character-by-character typing/deleting,
 * and infinite looping with smooth transitions.
 */
export function AnimatedTitles() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const fullText = titles[currentIndex];

    if (!isDeleting) {
      // Typing
      setDisplayText(fullText.substring(0, displayText.length + 1));
      if (displayText.length === fullText.length) {
        // Pause before deleting
        setTimeout(() => setIsDeleting(true), 2000);
        return;
      }
    } else {
      // Deleting
      setDisplayText(fullText.substring(0, displayText.length - 1));
      if (displayText.length === 0) {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % titles.length);
        return;
      }
    }
  }, [currentIndex, displayText, isDeleting]);

  useEffect(() => {
    const speed = isDeleting ? 40 : 80;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting]);

  return (
    <div className="flex items-center gap-1 min-h-[2.5rem]">
      <AnimatePresence mode="wait">
        <motion.span
          key={displayText}
          className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold gradient-text"
        >
          {displayText}
        </motion.span>
      </AnimatePresence>
      <motion.span
        className="inline-block w-[3px] h-8 md:h-10 bg-primary rounded-full"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear", repeatType: "loop" }}
      />
    </div>
  );
}
