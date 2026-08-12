"use client";

import { motion } from "framer-motion";
import { Mail, FileText } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

interface FooterLink {
  label: string;
  href: string;
  icon: React.ComponentType<any>;
}

const footerLinks: FooterLink[] = [
  { label: "GitHub", href: "https://github.com/penugondarohith", icon: FaGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/penugonda-rohith-543250313", icon: FaLinkedin },
  { label: "Email", href: "mailto:penugondarohith2004@gmail.com", icon: Mail },
  { label: "Resume", href: "https://drive.google.com/file/d/1OK8GSF-RO0DJ7wU-5JyFKAVnADycjX-h/view?usp=drive_link", icon: FileText },
];

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left"
        >
          <div>
            <p className="text-xl font-semibold text-foreground">Rohith Penugonda</p>
            <p className="mt-2 text-sm text-muted">
              AI/ML Engineer • Generative AI • Agentic AI • Software Development
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 md:justify-end">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-3 py-1.5 text-sm text-muted transition-colors hover:border-primary/20 hover:text-primary"
              >
                <link.icon className="h-4 w-4" />
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
