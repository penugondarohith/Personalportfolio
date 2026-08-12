"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BadgeCheck } from "lucide-react";

const certifications = [
  {
    title: "HackerRank Problem Solving",
    organization: "HackerRank",
    year: "2024",
    link: "https://www.hackerrank.com/certificates/2a2eec208394",
  },
  {
    title: "HackerRank Python (Basic)",
    organization: "HackerRank",
    year: "2024",
    link: "https://www.hackerrank.com/certificates/454772d2f949",
  },
  {
    title: "CodeChef 500 Difficulty Rating",
    organization: "CodeChef",
    year: "2024",
    link: "https://www.codechef.com/certificates/public/1071799",
  },
  {
    title: "Build Your Static Website",
    organization: "NxtWave CCBP",
    year: "2024",
    link: "https://certificates.ccbp.in/academy/static-website?id=LXTDXFRMTH",
  },
  {
    title: "Build Your Responsive Website",
    organization: "NxtWave CCBP",
    year: "2024",
    link: "https://certificates.ccbp.in/academy/build-your-own-responsive-website?id=UFOSTXSZPF",
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="relative overflow-hidden px-6 py-24 md:py-28">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary">Certifications</p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Verified learning and <span className="gradient-text">problem-solving</span>
          </h2>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {certifications.map((cert, index) => (
            <motion.a
              key={cert.title}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="group rounded-[24px] border border-border bg-white/4 p-5 transition-transform hover:-translate-y-1 hover:border-primary/20"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted">{cert.organization}</p>
                  <h3 className="mt-3 text-lg font-semibold text-foreground">{cert.title}</h3>
                </div>
                <div className="rounded-xl border border-primary/25 bg-primary/10 p-2 text-primary">
                  <BadgeCheck className="h-4 w-4" />
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between gap-3 text-sm text-muted">
                <span>{cert.year}</span>
                <span className="inline-flex items-center gap-1 text-primary">
                  View Certificate
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
