"use client";

import { motion } from "framer-motion";
import { Mail, FileText } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";

const socials = [
  {
    icon: SiGithub,
    href: "https://github.com/penugondarohith",
    label: "GitHub",
    hoverColor: "hover:text-white hover:bg-white/10",
  },
  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/penugonda-rohith-543250313",
    label: "LinkedIn",
    hoverColor: "hover:text-blue-400 hover:bg-blue-400/10",
  },
  {
    icon: Mail,
    href: "mailto:penugondarohith2004@gmail.com",
    label: "Email",
    hoverColor: "hover:text-emerald-400 hover:bg-emerald-400/10",
  },
  {
    icon: FileText,
    href: "https://drive.google.com/file/d/1zLwCrz3eioHIPHRhXv-ugFsTM_QFqtN2/view?usp=sharing",
    label: "Resume",
    hoverColor: "hover:text-amber-400 hover:bg-amber-400/10",
  },
];

/**
 * SocialIcons — icon-only social links with glass styling and hover effects.
 */
export function SocialIcons() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.3, duration: 0.6 }}
      className="flex items-center gap-3"
    >
      {socials.map((social, index) => (
        <motion.a
          key={social.label}
          href={social.href}
          target={social.href.startsWith("http") ? "_blank" : undefined}
          rel={
            social.href.startsWith("http") ? "noopener noreferrer" : undefined
          }
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.4 + index * 0.1, type: "spring" }}
          whileHover={{ scale: 1.15, y: -2 }}
          whileTap={{ scale: 0.9 }}
          className={`flex h-10 w-10 items-center justify-center rounded-xl glass text-muted transition-all duration-300 ${social.hoverColor}`}
          aria-label={social.label}
        >
          <social.icon className="h-4 w-4" />
        </motion.a>
      ))}
    </motion.div>
  );
}
