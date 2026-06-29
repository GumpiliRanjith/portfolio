"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import { skillsData } from "@/data/portfolioData";
import { Cpu, Server, Code, ShieldCheck, Database, GitMerge } from "lucide-react";

export default function SkillsPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  // Additional detail skills
  const otherSkills = [
    { title: "Languages", items: ["Java", "Python", "SQL", "C/C++", "JavaScript", "HTML/CSS", "Bash"] },
    { title: "Libraries", items: ["Pandas", "NumPy", "Scikit-Learn", "Matplotlib", "Seaborn", "Spring Boot"] },
    { title: "DevOps & Tools", items: ["Docker", "Git", "GitHub Actions", "Linux", "Visual Studio Code", "WSL"] },
    { title: "Database Systems", items: ["PostgreSQL", "MySQL", "MongoDB (Basic)"] },
  ];

  return (
    <>
      <CustomCursor />
      
      <div className="flex flex-col min-h-screen relative overflow-hidden">
        <div className="absolute inset-0 bg-background glow-mesh opacity-30 pointer-events-none z-0" />
        <Navbar />

        <main id="main-content" className="flex-grow z-10 pt-32 pb-20">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            {/* Header */}
            <div className="mb-12 border-b border-border/50 pb-8">
              <h1 className="text-4xl md:text-5xl font-heading font-black tracking-tight mb-4">
                Technical Skills
              </h1>
              <p className="text-sm md:text-base font-mono text-primary">
                // Categorized proficiency and competency metrics
              </p>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-12"
            >
              {/* Core Skill Bars Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {skillsData.categories.map((cat, idx) => (
                  <motion.div
                    key={cat.title}
                    variants={itemVariants}
                    className="p-6 rounded-2xl glass-panel border border-border"
                  >
                    <div className="flex items-center gap-2 mb-6">
                      {idx === 0 ? (
                        <Database className="size-5 text-primary" />
                      ) : idx === 1 ? (
                        <Code className="size-5 text-primary" />
                      ) : (
                        <Server className="size-5 text-primary" />
                      )}
                      <h2 className="font-heading font-bold text-base text-foreground">
                        {cat.title}
                      </h2>
                    </div>

                    <div className="space-y-4">
                      {cat.skills.map((skill) => (
                        <div key={skill.name} className="space-y-1.5">
                          <div className="flex justify-between text-[11px] font-mono">
                            <span className="text-foreground/80">{skill.name}</span>
                            <span className="text-primary font-bold">{skill.level}%</span>
                          </div>
                          <div className="h-1.5 w-full bg-foreground/5 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{ duration: 0.8, ease: "easeOut" }}
                              className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Grid: Complete skills list */}
              <motion.section variants={itemVariants} className="space-y-6">
                <h2 className="text-2xl font-heading font-bold text-foreground flex items-center gap-2">
                  <Cpu className="size-5 text-primary" /> Skill Directory
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                  {otherSkills.map((category) => (
                    <div key={category.title} className="p-5 rounded-xl border border-border bg-card/20">
                      <h3 className="font-heading font-bold text-sm text-foreground/80 mb-3 border-b border-border/50 pb-2">
                        {category.title}
                      </h3>
                      <div className="flex flex-wrap gap-1.5">
                        {category.items.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-0.5 rounded text-[10px] font-mono bg-foreground/5 text-foreground/70 border border-border/40"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.section>

              {/* Methodology details */}
              <motion.section variants={itemVariants} className="p-6 rounded-2xl glass-panel border border-border">
                <h2 className="text-lg font-heading font-bold text-foreground flex items-center gap-2 mb-3">
                  <GitMerge className="size-5 text-primary" /> Integrated Workflow
                </h2>
                <p className="text-sm text-foreground/60 leading-relaxed">
                  My development workflow starts in local containers using **Docker Compose** to model database schemas. From there, I construct backend systems in **Java/Spring Boot**, verify interfaces with automated test scripts, configure version control nodes on **Git**, and implement automated deployments using **GitHub Actions** pipelines.
                </p>
              </motion.section>
            </motion.div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
