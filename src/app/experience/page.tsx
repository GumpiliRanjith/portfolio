"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import { experienceData } from "@/data/portfolioData";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

export default function ExperiencePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

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
                Work Experience
              </h1>
              <p className="text-sm md:text-base font-mono text-primary">
                // Timeline of internships and developer contributions
              </p>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              {experienceData.map((exp) => (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  className="p-6 sm:p-8 rounded-2xl glass-panel border border-border"
                >
                  {/* Title and metadata */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-border/40 mb-6">
                    <div>
                      <h2 className="text-xl sm:text-2xl font-heading font-bold text-foreground">
                        {exp.role}
                      </h2>
                      <h3 className="text-base font-semibold text-primary/95 mt-1">
                        {exp.company}
                      </h3>
                    </div>

                    <div className="flex flex-col md:items-end text-xs font-mono text-foreground/45 gap-1.5">
                      <span className="flex items-center gap-1.5 md:justify-end">
                        <Calendar className="size-3.5" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5 md:justify-end">
                        <MapPin className="size-3.5" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Bullet points */}
                  <div className="space-y-4 mb-8">
                    <h4 className="text-xs font-mono font-semibold text-foreground/50 uppercase tracking-widest">
                      Key Contributions
                    </h4>
                    <ul className="space-y-3">
                      {exp.description.map((bullet, i) => (
                        <li key={i} className="text-sm sm:text-base text-foreground/75 flex items-start gap-3">
                          <CheckCircle2 className="size-4.5 text-primary mt-1 flex-shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technical skills used */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-mono font-semibold text-foreground/50 uppercase tracking-widest">
                      Skills Applied
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-0.5 rounded-lg text-xs font-mono bg-primary/5 text-primary border border-primary/10"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
