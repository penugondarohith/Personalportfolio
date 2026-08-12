"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "HackerRank Problem Solving",
    link: "https://www.hackerrank.com/certificates/2a2eec208394",
  },
  {
    title: "HackerRank Python (Basic)",
    link: "https://www.hackerrank.com/certificates/454772d2f949",
  },
  {
    title: "CodeChef 500 Difficulty Rating",
    link: "https://www.codechef.com/certificates/public/1071799",
  },
  {
    title: "NxtWave CCBP Build Your Static Website",
    link: "https://certificates.ccbp.in/academy/static-website?id=LXTDXFRMTH",
  },
  {
    title: "NxtWave CCBP Build Your Responsive Website",
    link: "https://certificates.ccbp.in/academy/build-your-own-responsive-website?id=UFOSTXSZPF",
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="relative py-28 px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute top-1/3 left-0 w-72 h-72 rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute bottom-1/4 right-0 w-72 h-72 rounded-full bg-secondary/5 blur-[100px]" />
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
            <Award className="w-4 h-4" />
            Certifications
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-tight">
            Validated Skills &amp; Learning Achievements
          </h2>
          <p className="mt-4 text-sm md:text-base text-muted/70 max-w-2xl mx-auto leading-relaxed">
            Continuous learning through hands-on courses, competitive programming, and trusted certification programs.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <motion.a
              key={cert.title}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="glass rounded-3xl border border-border p-5 flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
            >
              <div className="flex items-center justify-between gap-3 text-left">
                <div>
                  <p className="text-sm text-muted/70">Certification</p>
                  <h3 className="mt-2 text-lg font-semibold text-foreground">{cert.title}</h3>
                </div>
                <CheckCircle className="w-6 h-6 text-primary" />
              </div>
              <div className="mt-6 inline-flex items-center gap-2 text-xs font-medium text-primary">
                View certificate
                <ExternalLink className="w-3.5 h-3.5" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
