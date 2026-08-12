"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  SiReact,
  SiPython,
  SiNextdotjs,
  SiNodedotjs,
  SiDocker,
  SiTensorflow,
} from "react-icons/si";
import { MapPin, GraduationCap, Coffee, Code } from "lucide-react";

const miniIcons = [
  { Icon: SiReact, color: "#61DAFB" },
  { Icon: SiPython, color: "#3776AB" },
  { Icon: SiNextdotjs, color: "#ffffff" },
  { Icon: SiNodedotjs, color: "#339933" },
  { Icon: SiDocker, color: "#2496ED" },
  { Icon: SiTensorflow, color: "#FF6F00" },
];

const quickFacts = [
  { icon: MapPin, label: "India", value: "Based in" },
  { icon: GraduationCap, label: "B.Tech CS (AI/ML)", value: "Studying" },
  { icon: Coffee, label: "10+ Projects", value: "Built" },
  { icon: Code, label: "2+ Years", value: "Coding" },
];

/**
 * AboutPhoto — left column with professional photo, mini floating icons, and quick facts.
 */
export function AboutPhoto() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      {/* Profile Photo */}
      <div className="relative mx-auto w-48 h-56 lg:w-full lg:h-64 rounded-2xl overflow-hidden glass border border-border group">
        <Image
          src="/profile.jpg"
          alt="Penugonda Rohith"
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 1024px) 192px, 256px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
      </div>

      {/* Floating Mini Icons */}
      <div className="flex items-center justify-center gap-2">
        {miniIcons.map((tech, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.08, type: "spring" }}
            whileHover={{ scale: 1.2, y: -3 }}
            className="flex items-center justify-center w-8 h-8 rounded-lg glass border border-border cursor-default"
          >
            <tech.Icon className="w-4 h-4" style={{ color: tech.color }} />
          </motion.div>
        ))}
      </div>

      {/* Quick Facts */}
      <div className="space-y-2">
        {quickFacts.map((fact, i) => (
          <motion.div
            key={fact.label}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 + i * 0.1 }}
            className="flex items-center gap-3 p-2.5 rounded-xl glass border border-border hover:border-primary/20 transition-colors"
          >
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 shrink-0">
              <fact.icon className="w-4 h-4 text-primary" />
            </div>
            <div className="min-w-0">
              <p className="text-[11px] text-muted leading-tight">{fact.value}</p>
              <p className="text-sm font-medium text-foreground truncate">{fact.label}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
