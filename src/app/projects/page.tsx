"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import { projectsData } from "@/data/portfolioData";
import { FolderGit2, ExternalLink, Star, GitFork, Search } from "lucide-react";
import { Github } from "@/components/ui/BrandIcons";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<"all" | "data-science" | "development" | "devops">("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "data-science", name: "Data Science" },
    { id: "development", name: "Java & Development" },
    { id: "devops", name: "DevOps & Cloud" },
  ];

  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory = activeCategory === "all" || project.category === activeCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

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
    <>
      <CustomCursor />
      
      <div className="flex flex-col min-h-screen relative overflow-hidden">
        <div className="absolute inset-0 bg-background glow-mesh opacity-30 pointer-events-none z-0" />
        <Navbar />

        <main id="main-content" className="flex-grow z-10 pt-32 pb-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            
            {/* Header */}
            <div className="mb-12 border-b border-border/50 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-heading font-black tracking-tight mb-4">
                  My Projects
                </h1>
                <p className="text-sm md:text-base font-mono text-primary">
                  // Portfolio repository and experimental showcases
                </p>
              </div>

              {/* Search input */}
              <div className="relative w-full max-w-xs">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-foreground/40" />
                <input
                  type="text"
                  placeholder="Search projects or tags..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 bg-foreground/5 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all font-mono"
                />
              </div>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-foreground/5 border border-border w-fit mb-12 backdrop-blur-md">
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

            {/* Grid Container */}
            {filteredProjects.length > 0 ? (
              <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence mode="popLayout">
                  {filteredProjects.map((project) => (
                    <motion.div
                      layout
                      key={project.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className={`rounded-2xl border flex flex-col justify-between overflow-hidden glass-panel glass-panel-hover p-6 ${getProjectVisual(
                        project.category
                      )}`}
                    >
                      <div>
                        {/* Header icon and stats */}
                        <div className="flex justify-between items-start mb-6">
                          <div className="p-3 rounded-xl bg-foreground/5 text-primary border border-border flex items-center justify-center">
                            <FolderGit2 className="size-6 stroke-[1.5]" />
                          </div>
                          {project.stats && (
                            <div className="flex items-center gap-3 text-[11px] font-mono text-foreground/45">
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

                        {/* Title and descriptions */}
                        <h2 className="text-xl font-heading font-bold text-foreground mb-2.5">
                          {project.title}
                        </h2>
                        <p className="text-xs sm:text-sm text-foreground/65 leading-relaxed mb-6">
                          {project.longDescription || project.description}
                        </p>
                      </div>

                      <div>
                        {/* Tags */}
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

                        {/* Footer links */}
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
            ) : (
              <div className="text-center py-20 border border-border border-dashed rounded-2xl bg-card/10">
                <FolderGit2 className="size-12 mx-auto text-foreground/20 stroke-[1.5] mb-4" />
                <h3 className="font-heading font-bold text-lg text-foreground mb-1">No Projects Found</h3>
                <p className="text-xs sm:text-sm text-foreground/50 max-w-xs mx-auto">
                  Try adjusting your search criteria or clearing filters to view other repositories.
                </p>
              </div>
            )}
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
