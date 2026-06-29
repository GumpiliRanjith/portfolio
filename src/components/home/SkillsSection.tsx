"use client";

import { motion } from "framer-motion";
const fm = motion;
import { skillsData } from "@/data/portfolioData";
import { Database, Layout, Terminal as TermIcon, Shield, Layers, Settings, FileCode, CheckCircle2 } from "lucide-react";

export default function SkillsSection() {
  const iconMap: { [key: string]: React.ReactNode } = {
    "Data Science & Python": <Database className="size-5 text-primary" />,
    "Software Development": <Layers className="size-5 text-primary" />,
    "DevOps & Infrastructure": <TermIcon className="size-5 text-primary" />,
  };

  const techStack = [
    { name: "Java", category: "Core Development", logo: <FileCode className="size-6 text-orange-500" /> },
    { name: "Spring Boot", category: "Framework", logo: <Layers className="size-6 text-emerald-500" /> },
    { name: "Python", category: "Data Science", logo: <FileCode className="size-6 text-blue-500" /> },
    { name: "Docker", category: "DevOps", logo: <Settings className="size-6 text-sky-500" /> },
    { name: "PostgreSQL", category: "Database", logo: <Database className="size-6 text-indigo-400" /> },
    { name: "Git", category: "Version Control", logo: <Shield className="size-6 text-red-500" /> },
    { name: "GitHub Actions", category: "CI/CD", logo: <Settings className="size-6 text-violet-500" /> },
    { name: "Linux Bash", category: "Scripting", logo: <TermIcon className="size-6 text-amber-500" /> },
  ];

  return (
    <section id="skills" className="py-20 md:py-28 relative bg-card/10 border-y border-border/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-xs font-semibold tracking-widest text-primary uppercase font-mono mb-2">
            // Tech Stack & Skills
          </h2>
          <p className="text-3xl sm:text-4xl font-heading font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-foreground via-foreground to-foreground/50">
            Technical Mastery
          </p>
        </div>

        {/* Layout grid: Skills left, Tech Stack grid right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Categorized Skill bars */}
          <div className="space-y-8">
            {skillsData.categories.map((category, idx) => (
              <fm.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-2xl glass-panel"
              >
                <div className="flex items-center gap-2.5 mb-6">
                  {iconMap[category.title] || <CheckCircle2 className="size-5 text-primary" />}
                  <h3 className="font-heading font-bold text-lg text-foreground">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-5">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between text-xs sm:text-sm font-mono">
                        <span className="text-foreground/80 font-medium">{skill.name}</span>
                        <span className="text-primary font-bold">{skill.level}%</span>
                      </div>
                      <div className="h-2 w-full bg-foreground/5 rounded-full overflow-hidden">
                        <fm.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </fm.div>
            ))}
          </div>

          {/* Right Column: Visual Tech Stack Grid */}
          <div className="space-y-6 lg:sticky lg:top-28">
            <div>
              <h3 className="font-heading font-bold text-xl text-foreground mb-2">
                Active Toolchain
              </h3>
              <p className="text-sm text-foreground/60 leading-relaxed mb-6">
                Tools, frameworks, and environments I use daily to implement algorithms, write APIs, package containers, and manage versioning.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {techStack.map((tech, i) => (
                <fm.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="p-4 rounded-xl glass-panel glass-panel-hover flex flex-col items-center justify-center text-center gap-3 border border-border"
                >
                  <div className="p-2.5 rounded-lg bg-foreground/5 flex items-center justify-center">
                    {tech.logo}
                  </div>
                  <div>
                    <div className="font-heading font-bold text-sm text-foreground leading-tight">
                      {tech.name}
                    </div>
                    <div className="text-[10px] font-mono text-foreground/40 mt-1 uppercase tracking-wider">
                      {tech.category}
                    </div>
                  </div>
                </fm.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
