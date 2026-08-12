"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, FileText } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const contactLinks = [
  { label: "Email", href: "mailto:penugondarohith2004@gmail.com", icon: Mail },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/penugonda-rohith-543250313", icon: FaLinkedin as any },
  { label: "GitHub", href: "https://github.com/penugondarohith", icon: FaGithub as any },
  { label: "Resume", href: "https://drive.google.com/file/d/1OK8GSF-RO0DJ7wU-5JyFKAVnADycjX-h/view?usp=drive_link", icon: FileText },
];

export function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden px-6 py-24 md:py-28">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-5xl rounded-[32px] border border-border bg-white/4 p-8 md:p-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary">Contact</p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Let&apos;s build something intelligent.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            I&apos;m open to AI/ML, Generative AI, Agentic AI, and software engineering opportunities where I can
            contribute to impactful products and systems.
          </p>
        </motion.div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {contactLinks.map((item) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="group flex items-center justify-between rounded-2xl border border-border bg-black/10 px-4 py-3 text-sm font-medium text-muted transition-colors hover:border-primary/20 hover:text-foreground"
              >
                <span className="flex items-center gap-2">
                  <Icon className="h-4 w-4 text-primary" />
                  {item.label}
                </span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
