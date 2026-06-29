"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, ArrowRight } from "lucide-react";
import { experienceData } from "@/data/portfolioData";
import Link from "next/link";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-xs font-semibold tracking-widest text-primary uppercase font-mono mb-2">
            // Professional History
          </h2>
          <p className="text-3xl sm:text-4xl font-heading font-black tracking-tight">
            Experience Timeline
          </p>
        </div>

        {/* Timeline container */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Center Line */}
          <div className="absolute left-4 md:left-1/2 top-2 bottom-2 w-0.5 bg-border/50 -translate-x-1/2 hidden md:block" />
          <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-border/50 md:hidden" />

          {/* Timeline Nodes */}
          <div className="space-y-12">
            {experienceData.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={exp.id}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {/* Timeline circular node marker */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1/2 z-10 shadow" />

                  {/* Card Container */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className={`w-full md:w-[45%] pl-10 md:pl-0 ${
                      isEven ? "md:pr-8" : "md:pl-8"
                    }`}
                  >
                    <div className="p-6 rounded-2xl glass-panel glass-panel-hover border border-border/80">
                      {/* Meta header info */}
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-foreground/40 font-mono mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="size-3.5" />
                          {exp.period}
                        </span>
                        <span className="hidden sm:inline">&middot;</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="size-3.5" />
                          {exp.location}
                        </span>
                      </div>

                      {/* Role & Company */}
                      <h3 className="text-lg font-heading font-bold text-foreground">
                        {exp.role}
                      </h3>
                      <h4 className="text-sm font-semibold text-primary/80 mb-4">
                        {exp.company}
                      </h4>

                      {/* Bullet Description */}
                      <ul className="space-y-2 mb-6">
                        {exp.description.map((bullet, bIdx) => (
                          <li key={bIdx} className="text-xs sm:text-sm text-foreground/65 flex items-start gap-2">
                            <span className="text-primary mt-1">&middot;</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Applied Skills Tags */}
                      <div className="flex flex-wrap gap-1 border-t border-border/40 pt-4">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-0.5 rounded text-[10px] font-mono bg-primary/5 text-primary border border-primary/10"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* View Career Roadmap Link */}
        <div className="mt-16 text-center">
          <Link
            href="/career"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
          >
            View full education & career roadmap
            <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
