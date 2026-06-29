"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import { personalInfo } from "@/data/portfolioData";
import { BookOpen, Coffee, Award, ShieldCheck, Cpu, Code2, Compass } from "lucide-react";

export default function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const methodologies = [
    { title: "Clean & Readable Code", desc: "Writing self-documenting code with clear design patterns." },
    { title: "Object Oriented Principles", desc: "Applying robust abstraction, inheritance, and encapsulation." },
    { title: "Automated Deployments", desc: "Using containerization (Docker) to ensure environment consistency." },
  ];

  const devSetup = [
    { label: "Operating System", value: "Linux Ubuntu / Windows WSL" },
    { label: "Primary Editor", value: "VS Code / IntelliJ IDEA" },
    { label: "Theme Preference", value: "Tokyo Night / Dark Default" },
    { label: "Shell Environment", value: "Zsh with Oh-My-Zsh" },
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
                About Me
              </h1>
              <p className="text-sm md:text-base font-mono text-primary">
                // Ranjith Gumpili / background & story
              </p>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-12"
            >
              {/* Profile Narrative Section */}
              <motion.section variants={itemVariants} className="space-y-6">
                <h2 className="text-2xl font-heading font-bold text-foreground flex items-center gap-2">
                  <BookOpen className="size-5 text-primary" /> My Coding Journey
                </h2>
                <p className="text-foreground/75 leading-relaxed">
                  I am a passionate developer currently specializing in **Data Science** and system infrastructure. My coding path started in secondary school when I discovered object-oriented modeling. Since then, I've spent thousands of hours writing algorithms in **Java** and building data extraction scripts in **Python**.
                </p>
                <p className="text-foreground/75 leading-relaxed">
                  I believe that software development is only half the battle. The other half is deployment and scaling. This realization led me down the **DevOps** learning path. Mastering **Docker** containerization, automated testing, and basic CI/CD integrations has empowered me to create services that are not only functional but also stable, portable, and easy to deploy.
                </p>
                
              </motion.section>

              {/* Grid: Methodologies and Dev Setup */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Methodologies */}
                <motion.section variants={itemVariants} className="space-y-4">
                  <h2 className="text-xl font-heading font-bold text-foreground flex items-center gap-2">
                    <Code2 className="size-5 text-primary" /> Coding Philosophy
                  </h2>
                  <div className="space-y-3">
                    {methodologies.map((m, idx) => (
                      <div key={idx} className="p-4 rounded-xl border border-border bg-card/20">
                        <div className="text-sm font-semibold text-foreground mb-1">{m.title}</div>
                        <div className="text-xs text-foreground/50 leading-relaxed">{m.desc}</div>
                      </div>
                    ))}
                  </div>
                </motion.section>

                {/* Dev Setup */}
                <motion.section variants={itemVariants} className="space-y-4">
                  <h2 className="text-xl font-heading font-bold text-foreground flex items-center gap-2">
                    <Cpu className="size-5 text-primary" /> Dev Environment Setup
                  </h2>
                  <div className="rounded-xl border border-border bg-card/25 p-5 space-y-3">
                    {devSetup.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center text-xs py-1.5 border-b border-border/40 last:border-0">
                        <span className="text-foreground/50 font-mono">{item.label}</span>
                        <span className="font-semibold text-foreground/80">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </motion.section>
              </div>

              {/* Goals */}
              <motion.section variants={itemVariants} className="space-y-4">
                <h2 className="text-xl font-heading font-bold text-foreground flex items-center gap-2">
                  <Compass className="size-5 text-primary" /> Where I'm Headed
                </h2>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  My short-term goal is to deepen my knowledge of large-scale statistical pipelines and backend microservices using the Spring Boot framework. In the long run, I aim to merge these fields to work on cloud-native MLOps architectures, deploying automated intelligence systems at scale.
                </p>
                <div className="flex gap-4 items-center text-xs font-mono text-foreground/40 mt-4 bg-foreground/[0.02] p-4 rounded-xl border border-border/40">
                  <Coffee className="size-4 text-primary animate-bounce" />
                  <span>Powered by filter coffee and curiosity. Always learning, always building.</span>
                </div>
              </motion.section>
            </motion.div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
