"use client";

import { motion } from "framer-motion";
import {
  SiReact,
  SiPython,
  SiNextdotjs,
  SiFlask,
  SiNodedotjs,
  SiDocker,
  SiGithub,
  SiGooglegemini,
  SiTensorflow,
  SiLangchain,
} from "react-icons/si";
import { Bot, BrainCircuit } from "lucide-react";

const techIcons = [
  { Icon: SiReact, label: "React", color: "#61DAFB" },
  { Icon: SiPython, label: "Python", color: "#3776AB" },
  { Icon: SiNextdotjs, label: "Next.js", color: "#ffffff" },
  { Icon: SiFlask, label: "Flask", color: "#ffffff" },
  { Icon: SiNodedotjs, label: "Node.js", color: "#339933" },
  { Icon: SiDocker, label: "Docker", color: "#2496ED" },
  { Icon: SiGithub, label: "GitHub", color: "#ffffff" },
  { Icon: BrainCircuit, label: "OpenAI", color: "#ffffff" },
  { Icon: SiGooglegemini, label: "Gemini", color: "#886FBF" },
  { Icon: Bot, label: "CrewAI", color: "#A855F7" },
  { Icon: SiLangchain, label: "LangGraph", color: "#1C3C3C" },
  { Icon: SiTensorflow, label: "TensorFlow", color: "#FF6F00" },
];

/** Radius of the circular orbit (pixels from center) */
const ORBIT_RADIUS = 160;

/**
 * FloatingIcons — tech icons arranged in a perfect circle around the profile photo.
 * Each icon is evenly distributed using trigonometry and floats independently.
 */
export function FloatingIcons() {
  return (
    <div className="absolute inset-0 overflow-visible" aria-hidden="true">
      {techIcons.map((tech, index) => {
        // Calculate position on circle (centered in 400x400 container)
        const angle = (index / techIcons.length) * 2 * Math.PI - Math.PI / 2;
        const centerX = 200 + Math.cos(angle) * ORBIT_RADIUS - 20; // 20 = half icon width
        const centerY = 200 + Math.sin(angle) * ORBIT_RADIUS - 20; // 20 = half icon height

        return (
          <motion.div
            key={tech.label}
            className="absolute pointer-events-auto"
            style={{ left: centerX, top: centerY }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 1.5 + index * 0.1,
              type: "spring",
              stiffness: 100,
            }}
          >
            <motion.div
              animate={{
                y: [0, -4, 0],
                x: [0, (Math.random() - 0.5) * 4, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.3,
              }}
              whileHover={{ scale: 1.3, zIndex: 10 }}
              className="group relative"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-xl glass border border-border hover:border-primary/30 transition-all cursor-default">
                <tech.Icon
                  className="w-5 h-5 transition-transform group-hover:scale-110"
                  style={{ color: tech.color }}
                />
              </div>

              {/* Tooltip */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[10px] font-mono text-muted whitespace-nowrap bg-card/90 px-2 py-0.5 rounded-md border border-border">
                  {tech.label}
                </span>
              </div>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}
