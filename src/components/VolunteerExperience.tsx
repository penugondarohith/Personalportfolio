"use client";

import { motion } from "framer-motion";
import { Users, HeartHandshake, Seedling } from "lucide-react";

const activities = [
  {
    title: "NSS Member",
    desc: "Active participant in National Service Scheme initiatives focused on community development and awareness campaigns.",
  },
  {
    title: "Community Outreach",
    desc: "Supported educational and environmental drives to build social impact and local engagement.",
  },
  {
    title: "Leadership & Teamwork",
    desc: "Collaborated with peers to organize events, manage volunteer activities, and deliver service programs.",
  },
];

export function VolunteerExperience() {
  return (
    <section id="volunteer" className="relative py-28 px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute top-1/4 left-0 w-64 h-64 rounded-full bg-secondary/5 blur-[100px]" />
        <div className="absolute bottom-1/4 right-0 w-64 h-64 rounded-full bg-primary/5 blur-[100px]" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-4 text-sm font-mono uppercase tracking-[0.3em] text-primary/90">
            <Users className="w-4 h-4" />
            Volunteer Experience
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-tight">
            Community Service &amp; NSS Involvement
          </h2>
          <p className="mt-4 text-sm md:text-base text-muted/70 max-w-2xl mx-auto leading-relaxed">
            Committed to giving back through service, leadership, and social awareness initiatives as part of NSS and local volunteer programs.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="glass rounded-3xl border border-border p-6 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 text-primary mb-4">
                {index === 0 ? <HeartHandshake className="w-6 h-6" /> : index === 1 ? <Seedling className="w-6 h-6" /> : <Users className="w-6 h-6" />}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{activity.title}</h3>
              <p className="text-sm text-muted/70 leading-relaxed">{activity.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
