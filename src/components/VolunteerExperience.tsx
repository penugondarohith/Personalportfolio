"use client";

import { motion } from "framer-motion";
import { HandHeart, Leaf, Users } from "lucide-react";

const experiences = [
  {
    icon: HandHeart,
    role: "NSS Member",
    description: "Active participant in National Service Scheme initiatives focused on community development and awareness campaigns.",
  },
  {
    icon: Leaf,
    role: "Community Outreach",
    description: "Supported educational and environmental drives to build social impact and local engagement.",
  },
  {
    icon: Users,
    role: "Leadership & Teamwork",
    description: "Collaborated with peers to organize events, manage volunteer activities, and deliver service programs.",
  },
];

export function Experience() {
  return (
    <section id="leadership" className="relative overflow-hidden px-6 py-20 md:py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-primary">Volunteer Experience</p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Community Service <span className="gradient-text">&amp; NSS Involvement</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
            Committed to giving back through service, leadership, and social awareness initiatives as part of NSS and local volunteer programs.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {experiences.map((item, index) => (
            <motion.article
              key={item.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="rounded-[28px] border border-border bg-white/[0.03] p-6 transition-colors hover:border-primary/25 md:p-7"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-foreground">{item.role}</h3>
              <p className="mt-4 text-base leading-relaxed text-muted">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
