"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

const codeLines = [
  { text: "const developer = {", indent: 0, type: "keyword" },
  { text: '  name: "Penugonda Rohith",', indent: 0, type: "string" },
  { text: '  role: "Agentic AI Developer",', indent: 0, type: "string" },
  { text: "  skills: [", indent: 0, type: "keyword" },
  {
    text: '    "Python", "React", "Next.js",',
    indent: 0,
    type: "string",
  },
  {
    text: '    "Flask", "Node.js",',
    indent: 0,
    type: "string",
  },
  {
    text: '    "Machine Learning", "CrewAI",',
    indent: 0,
    type: "string",
  },
  {
    text: '    "LangGraph", "Prompt Engineering"',
    indent: 0,
    type: "string",
  },
  { text: "  ],", indent: 0, type: "keyword" },
  { text: '  status: "Open for Internships"', indent: 0, type: "string" },
  { text: "};", indent: 0, type: "keyword" },
];

/**
 * LiveCode — VS Code-styled live code editor block.
 * Features line-by-line typing animation with syntax highlighting,
 * window controls, line numbers, and blinking cursor.
 */
export function LiveCode() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const totalLines = codeLines.length;

  const tick = useCallback(() => {
    if (isComplete) return;

    if (visibleLines < totalLines) {
      const currentLine = codeLines[visibleLines];
      if (currentCharIndex < currentLine.text.length) {
        setCurrentCharIndex((prev) => prev + 1);
      } else {
        setVisibleLines((prev) => prev + 1);
        setCurrentCharIndex(0);
      }
    } else {
      setIsComplete(true);
      // Reset after a pause
      setTimeout(() => {
        setVisibleLines(0);
        setCurrentCharIndex(0);
        setIsComplete(false);
      }, 3000);
    }
  }, [visibleLines, currentCharIndex, isComplete, totalLines]);

  useEffect(() => {
    const speed = isComplete ? 100 : 35;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, isComplete]);

  /** Syntax-highlight a single code line */
  const highlightSyntax = (text: string) => {
    return text.split(/(".*?")|(const|let|var)|([{}[\],;:])/).map((part, i) => {
      if (!part) return null;
      if (/^".*"$/.test(part))
        return (
          <span key={i} className="text-emerald-400">
            {part}
          </span>
        );
      if (/^(const|let|var)$/.test(part))
        return (
          <span key={i} className="text-purple-400">
            {part}
          </span>
        );
      if (/^[{}[\],;:]$/.test(part))
        return (
          <span key={i} className="text-muted">
            {part}
          </span>
        );
      return (
        <span key={i} className="text-sky-300">
          {part}
        </span>
      );
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.6 }}
      className="w-full max-w-lg"
    >
      <div className="rounded-xl overflow-hidden glass border border-border shadow-2xl shadow-primary/5">
        {/* Title Bar */}
        <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-black/20">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <span className="text-xs text-muted ml-2 font-mono">
            developer.ts
          </span>
        </div>

        {/* Code Content */}
        <div className="p-4 font-mono text-xs sm:text-sm leading-6 min-h-[280px]">
          {codeLines.map((line, lineIndex) => {
            if (lineIndex > visibleLines) return null;

            const isCurrentLine = lineIndex === visibleLines;
            const displayedText = isCurrentLine
              ? line.text.substring(0, currentCharIndex)
              : line.text;

            return (
              <div key={lineIndex} className="flex">
                <span className="w-8 text-right pr-4 text-muted/40 select-none shrink-0">
                  {lineIndex + 1}
                </span>
                <span className="flex-1">
                  {highlightSyntax(displayedText)}
                  {isCurrentLine && !isComplete && (
                    <motion.span
                      className="inline-block w-[2px] h-4 bg-primary ml-0.5 align-middle"
                      animate={{ opacity: [1, 0] }}
                      transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  )}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
