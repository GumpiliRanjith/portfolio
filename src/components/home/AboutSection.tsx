"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MapPin, User, GraduationCap, Code } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

export default function AboutSection() {
  const stats = [
    { value: "10+", label: "Projects Completed" },
    { value: "3+", label: "Certifications Earned" },
    { value: "4+", label: "Languages Mastered" },
    { value: "96.5%", label: "HS Score" },
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-xs font-semibold tracking-widest text-primary uppercase font-mono mb-2">
            // About Me
          </h2>
          <p className="text-3xl sm:text-4xl font-heading font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-foreground via-foreground to-foreground/50">
            Who Is Ranjith?
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: UNIX Terminal mockup */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 w-full rounded-2xl glass-panel shadow-2xl overflow-hidden font-mono text-xs border border-border"
          >
            {/* Terminal Window Header */}
            <div className="bg-foreground/5 px-4 py-3 flex items-center justify-between border-b border-border">
              <div className="flex space-x-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-foreground/40 text-[10px]">ranjith_profile.sh</span>
              <div className="w-8" />
            </div>

            {/* Terminal Window Body */}
            <div className="p-5 space-y-4 text-foreground/80 leading-relaxed">
              <div>
                <span className="text-primary">$</span> <span className="text-secondary">cat</span> developer_details.json
              </div>
              <div className="pl-4 text-emerald-500/90 font-light">
                {`{`}
                <div className="pl-4"><span className="text-sky-400">"name"</span>: "{personalInfo.name}",</div>
                <div className="pl-4"><span className="text-sky-400">"location"</span>: "{personalInfo.location}",</div>
                <div className="pl-4"><span className="text-sky-400">"status"</span>: "Undergrad Student",</div>
                <div className="pl-4"><span className="text-sky-400">"interests"</span>: ["Machine Learning", "Backend APIs", "DevOps"],</div>
                <div className="pl-4"><span className="text-sky-400">"motto"</span>: "Automate everything, optimize code structure."</div>
                {`}`}
              </div>
              <div>
                <span className="text-primary">$</span> <span className="text-secondary">node</span> speed_test.js
              </div>
              <div className="pl-4 text-foreground/50">
                &gt; Initializing systems... <br />
                &gt; Algorithms loaded successfully. <br />
                &gt; Status: Ready to build.
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio Narrative & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
              Student of Data, Engineer of Systems
            </h3>
            <p className="text-base text-foreground/75 leading-relaxed mb-6">
              {personalInfo.detailedBio}
            </p>

            {/* Quick Profile Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-sm">
              <div className="flex items-center gap-3 text-foreground/70">
                <MapPin className="size-5 text-primary" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-3 text-foreground/70">
                <GraduationCap className="size-5 text-primary" />
                <span>Data Science Undergrad</span>
              </div>
              <div className="flex items-center gap-3 text-foreground/70">
                <Code className="size-5 text-primary" />
                <span>Java, Python & Shell</span>
              </div>
              <div className="flex items-center gap-3 text-foreground/70">
                <User className="size-5 text-primary" />
                <span>Open-Source Contributor</span>
              </div>
            </div>

            {/* Animated statistics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-border pt-8">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-3xl font-heading font-black text-primary leading-none">
                    {stat.value}
                  </span>
                  <span className="text-xs text-foreground/50 font-mono mt-2 uppercase tracking-wider leading-snug">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Call to action */}
            <div className="mt-8">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
              >
                Read my full story
                <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
