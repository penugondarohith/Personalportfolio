"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  FolderOpen,
  Download,
  MessageCircle,
} from "lucide-react";

const buttons = [
  {
    label: "Explore Projects",
    icon: FolderOpen,
    href: "#projects",
    variant: "primary" as const,
  },
  {
    label: "Download Resume",
    icon: Download,
    href: "https://drive.google.com/file/d/1OK8GSF-RO0DJ7wU-5JyFKAVnADycjX-h/view?usp=drive_link",
    variant: "outline" as const,
    external: true,
  },
  {
    label: "Let's Connect",
    icon: MessageCircle,
    href: "#contact",
    variant: "outline" as const,
  },
];

/**
 * CTAButtons — premium call-to-action buttons with magnetic hover,
 * gradient borders, glow effects, scale animation, and ripple on click.
 */
export function CTAButtons() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.0, duration: 0.6 }}
      className="flex flex-wrap gap-3"
    >
      {buttons.map((btn) => (
        <MagneticButton key={btn.label} {...btn} />
      ))}
    </motion.div>
  );
}

/** Individual magnetic button with glow + ripple */
function MagneticButton({
  label,
  icon: Icon,
  href,
  variant,
  external,
}: (typeof buttons)[0]) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [ripple, setRipple] = useState<{ x: number; y: number } | null>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.15;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.15;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => setPosition({ x: 0, y: 0 });

  const handleClick = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setRipple({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setTimeout(() => setRipple(null), 600);
  };

  const isPrimary = variant === "primary";

  return (
    <motion.a
      ref={ref}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      whileTap={{ scale: 0.95 }}
      className={`
        relative group flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium
        overflow-hidden transition-all duration-300 cursor-pointer
        ${
          isPrimary
            ? "bg-primary text-white shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:bg-primary/90"
            : "glass border border-border hover:border-primary/30 text-foreground hover:text-primary"
        }
      `}
      aria-label={label}
    >
      {/* Glow effect on hover */}
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
          isPrimary
            ? "bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20"
            : "bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5"
        }`}
      />

      {/* Ripple effect */}
      {ripple && (
        <span
          className="absolute rounded-full bg-white/20 animate-[ripple_0.6s_ease-out]"
          style={{
            left: ripple.x - 5,
            top: ripple.y - 5,
            width: 10,
            height: 10,
          }}
        />
      )}

      <Icon className="h-4 w-4 relative z-10" />
      <span className="relative z-10">{label}</span>
    </motion.a>
  );
}
