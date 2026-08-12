"use client";

import { motion } from "framer-motion";
import { Heart, Mail } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";

const socialLinks = [
  {
    icon: SiGithub,
    href: "https://github.com/penugondarohith",
    label: "GitHub",
  },
  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/penugonda-rohith-543250313",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:penugondarohith2004@gmail.com",
    label: "Email",
  },
];

/**
 * Footer — minimal, premium footer with gradient top border,
 * social links, and copyright notice.
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border">
      {/* Gradient top border overlay */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left — Branding */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <div className="flex items-center gap-1">
              <span className="text-sm font-mono text-muted">&lt;</span>
              <span className="text-sm font-heading font-bold gradient-text">
                PR
              </span>
              <span className="text-sm font-mono text-muted">/&gt;</span>
            </div>
            <span className="text-sm text-muted">
              © {currentYear} Penugonda Rohith
            </span>
          </motion.div>

          {/* Center — Built with love */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-1.5 text-sm text-muted"
          >
            Built with
            <Heart className="h-3.5 w-3.5 text-red-500 fill-red-500" />
            using Next.js &amp; Framer Motion
          </motion.p>

          {/* Right — Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2"
          >
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="flex h-8 w-8 items-center justify-center rounded-lg text-muted hover:text-foreground hover:bg-white/5 transition-all"
                aria-label={link.label}
              >
                <link.icon className="h-4 w-4" />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
