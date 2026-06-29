"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import { educationData, achievementsData, experienceData } from "@/data/portfolioData";
import { GraduationCap, Award, Briefcase, Calendar, Star } from "lucide-react";

interface Milestone {
  date: string;
  title: string;
  subtitle: string;
  description: string;
  type: "education" | "award" | "work";
}

export default function CareerPage() {
  // Combine education, achievements, and experience into a sorted timeline of milestones
  const milestones: Milestone[] = [
    {
      date: "May 2025 - July 2025",
      title: "Machine Learning Intern",
      subtitle: "AI Innovation Labs (Virtual)",
      description: "Preprocessed customer datasets, trained XGBoost and Random Forest classifiers, and deployed inference scripts in Python.",
      type: "work",
    },
    {
      date: "March 2025",
      title: "Runner-Up in Campus Hackathon",
      subtitle: "State Tech University",
      description: "Co-developed an automated disaster-alerting API within 36 hours utilizing Python scripting, Docker packaging, and webhook triggers.",
      type: "award",
    },
    {
      date: "January 2025",
      title: "Docker Certified Associate Course",
      subtitle: "KodeKloud Certification",
      description: "Mastered container namespaces, layers, volumes, bridge networking, multi-stage builds, and deployment security rules.",
      type: "award",
    },
    {
      date: "November 2024",
      title: "Java SE Programming foundations",
      subtitle: "Oracle Academy Certificate",
      description: "Validated fundamental OOP architectures, exception handling, compiler syntax, data streams, and memory management.",
      type: "award",
    },
    {
      date: "2023 - Present",
      title: "B.Tech in Data Science",
      subtitle: "State Technological University",
      description: "Studying core statistics, linear algebra, machine learning modeling, and big data structures. Active member of technical and scripting club.",
      type: "education",
    },
    {
      date: "2021 - 2023",
      title: "Senior Secondary Education (MPC)",
      subtitle: "Sri Chaitanya Junior College",
      description: "Completed secondary exams in Mathematics, Physics, and Chemistry, securing an overall score of 96.5%.",
      type: "education",
    },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case "education":
        return <GraduationCap className="size-5 text-primary" />;
      case "award":
        return <Award className="size-5 text-amber-500" />;
      case "work":
        return <Briefcase className="size-5 text-emerald-500" />;
      default:
        return <Star className="size-5 text-primary" />;
    }
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
                Career Roadmap
              </h1>
              <p className="text-sm md:text-base font-mono text-primary">
                // Academic records, professional timeline, and certifications
              </p>
            </div>

            {/* Vertical Milestones Roadmap */}
            <div className="relative border-l border-border/50 ml-4 md:ml-6 space-y-10 py-4">
              {milestones.map((milestone, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="relative pl-10 sm:pl-12"
                >
                  {/* Indicator Icon */}
                  <div className="absolute left-0 -translate-x-1/2 top-1.5 size-9 sm:size-10 rounded-xl bg-card border border-border flex items-center justify-center shadow-md">
                    {getIcon(milestone.type)}
                  </div>

                  {/* Card Panel */}
                  <div className="p-5 rounded-2xl glass-panel border border-border/80 flex flex-col justify-between">
                    <div>
                      {/* Date Header */}
                      <span className="inline-flex items-center gap-1.5 text-xs font-mono text-foreground/45 mb-2.5">
                        <Calendar className="size-3.5" />
                        {milestone.date}
                      </span>

                      {/* Title & Subtitle */}
                      <h2 className="text-lg font-heading font-bold text-foreground">
                        {milestone.title}
                      </h2>
                      <h3 className="text-xs sm:text-sm font-semibold text-primary/80 mt-1 mb-3">
                        {milestone.subtitle}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-foreground/60 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
