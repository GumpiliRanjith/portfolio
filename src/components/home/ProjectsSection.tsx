"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Star, GitFork, ArrowRight, FolderGit2 } from "lucide-react";
import { Github } from "@/components/ui/BrandIcons";
import { projectsData, Project } from "@/data/portfolioData";
import Link from "next/link";

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<"all" | "data-science" | "development" | "devops">("all");

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "data-science", name: "Data Science" },
    { id: "development", name: "Java & Development" },
    { id: "devops", name: "DevOps & Cloud" },
  ];

  const filteredProjects = activeCategory === "all"
    ? projectsData
    : projectsData.filter(p => p.category === activeCategory);

  // Take first 3 featured projects for homepage
  const displayProjects = filteredProjects.slice(0, 3);

  // Background visual grids for project cards representing their domain
  const getProjectVisual = (category: string) => {
    switch (category) {
      case "data-science":
        return "bg-gradient-to-br from-cyan-900/30 to-background border-cyan-800/20";
      case "development":
        return "bg-gradient-to-br from-orange-950/20 to-background border-orange-900/10";
      case "devops":
        return "bg-gradient-to-br from-violet-950/20 to-background border-violet-900/10";
      default:
        return "bg-gradient-to-br from-slate-900/40 to-background border-border/20";
    }
  };

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xs font-semibold tracking-widest text-primary uppercase font-mono mb-2">
              // Portfolio Work
            </h2>
            <p className="text-3xl sm:text-4xl font-heading font-black tracking-tight">
              Featured Creations
            </p>
          </div>

          {/* Filtering Tabs */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-foreground/5 border border-border backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium font-heading transition-all ${
                  activeCategory === cat.id
                    ? "bg-primary text-white shadow"
                    : "text-foreground/60 hover:text-foreground hover:bg-foreground/5"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {displayProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className={`rounded-2xl border flex flex-col justify-between overflow-hidden glass-panel glass-panel-hover p-6 ${getProjectVisual(
                  project.category
                )}`}
              >
                <div>
                  {/* Card Visual Header */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 rounded-xl bg-foreground/5 text-primary border border-border flex items-center justify-center">
                      <FolderGit2 className="size-6 stroke-[1.5]" />
                    </div>
                    {/* Stars and Forks */}
                    {project.stats && (
                      <div className="flex items-center gap-3 text-[11px] font-mono text-foreground/40">
                        <span className="flex items-center gap-1">
                          <Star className="size-3.5 fill-yellow-500/20 text-yellow-500" />
                          {project.stats.stars}
                        </span>
                        <span className="flex items-center gap-1">
                          <GitFork className="size-3.5 text-primary" />
                          {project.stats.forks}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-heading font-bold text-foreground mb-2.5">
                    {project.title}
                  </h3>
                  <p className="text-sm text-foreground/65 leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Skill tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-foreground/5 text-foreground/60 border border-border/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex justify-between items-center pt-4 border-t border-border/50 text-sm">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 font-medium text-foreground/70 hover:text-primary transition-colors"
                      >
                        <Github className="size-4 stroke-[1.5]" />
                        <span>Source Code</span>
                      </a>
                    )}
                    {project.liveUrl && project.liveUrl !== "#" && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 font-medium text-primary hover:text-primary/80 transition-colors"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="size-4" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Explore All link */}
        <div className="mt-16 text-center">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border bg-card/25 hover:bg-foreground/5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5"
          >
            Explore all {projectsData.length} projects
            <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform text-primary" />
          </Link>
        </div>
      </div>
    </section>
  );
}
