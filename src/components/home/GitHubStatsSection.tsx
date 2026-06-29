"use client";

import { motion } from "framer-motion";
import { GitPullRequest, GitCommit, GitBranch, ExternalLink } from "lucide-react";
import { Github } from "@/components/ui/BrandIcons";
import { personalInfo } from "@/data/portfolioData";

export default function GitHubStatsSection() {
  // Generate mock contribution grid data (53 weeks * 7 days = 371 squares)
  // Let's create an array of contribution values (0 to 4) representing activity level
  const contributionLevels = Array.from({ length: 140 }, () => {
    const rand = Math.random();
    if (rand < 0.4) return 0; // Empty
    if (rand < 0.7) return 1; // Light green
    if (rand < 0.85) return 2; // Mid green
    if (rand < 0.95) return 3; // Deep green
    return 4; // Brightest green
  });

  const getLevelColor = (level: number) => {
    switch (level) {
      case 1: return "bg-emerald-950/80 border border-emerald-900/40";
      case 2: return "bg-emerald-800 border border-emerald-700/30";
      case 3: return "bg-emerald-600 border border-emerald-500/20";
      case 4: return "bg-primary border border-primary/20";
      default: return "bg-foreground/5 border border-border/20";
    }
  };

  const statCards = [
    { label: "Total Contributions", value: "842", icon: <GitCommit className="size-4 text-emerald-500" /> },
    { label: "Public Repos", value: "18", icon: <GitBranch className="size-4 text-primary" /> },
    { label: "Pull Requests", value: "45", icon: <GitPullRequest className="size-4 text-secondary" /> },
  ];

  return (
    <section id="github-stats" className="py-20 md:py-28 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-xs font-semibold tracking-widest text-primary uppercase font-mono mb-2">
            // Active Coding
          </h2>
          <p className="text-3xl sm:text-4xl font-heading font-black tracking-tight">
            GitHub Contributions
          </p>
        </div>

        {/* Dashboard Frame */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full rounded-2xl glass-panel p-6 sm:p-8 border border-border max-w-4xl mx-auto shadow-xl"
        >
          {/* Dashboard Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border/50 mb-8">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-full bg-foreground/5 flex items-center justify-center border border-border text-foreground">
                <Github className="size-5 stroke-[1.5]" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-base text-foreground">
                  GumpiliRanjith
                </h3>
                <p className="text-xs text-foreground/40 font-mono">
                  github.com/GumpiliRanjith
                </p>
              </div>
            </div>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold border border-border bg-foreground/5 hover:bg-foreground/10 text-foreground transition-all duration-300 active:scale-95"
            >
              <span>Visit Profile</span>
              <ExternalLink className="size-3.5 text-primary" />
            </a>
          </div>

          {/* Activity Grid */}
          <div className="mb-8">
            <div className="flex justify-between items-center text-xs font-mono text-foreground/40 mb-3 uppercase tracking-wider">
              <span>Contribution Calendar (Simulated)</span>
              <span>12 Months Activity</span>
            </div>
            
            {/* Scrollable grid container for small viewports */}
            <div className="overflow-x-auto pb-2 scrollbar-none">
              <div className="flex gap-1 min-w-[620px] justify-between">
                {/* Visual block grids */}
                <div className="grid grid-flow-col grid-rows-7 gap-1 flex-grow">
                  {contributionLevels.map((level, i) => (
                    <div
                      key={i}
                      className={`size-3 rounded-sm transition-all duration-300 hover:scale-125 ${getLevelColor(level)}`}
                      title={`Level ${level} activity`}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            {/* Grid legend */}
            <div className="flex items-center justify-end gap-1.5 mt-3 text-[10px] font-mono text-foreground/40">
              <span>Less</span>
              <div className="size-2.5 rounded-sm bg-foreground/5 border border-border" />
              <div className="size-2.5 rounded-sm bg-emerald-950/80" />
              <div className="size-2.5 rounded-sm bg-emerald-800" />
              <div className="size-2.5 rounded-sm bg-emerald-600" />
              <div className="size-2.5 rounded-sm bg-primary" />
              <span>More</span>
            </div>
          </div>

          {/* Cards stats grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {statCards.map((stat, i) => (
              <div
                key={i}
                className="p-5 rounded-xl border border-border/50 bg-foreground/[0.02] flex items-center justify-between"
              >
                <div>
                  <div className="text-xs text-foreground/45 font-mono mb-1">{stat.label}</div>
                  <div className="text-2xl font-heading font-black text-foreground">{stat.value}</div>
                </div>
                <div className="p-2.5 rounded-lg bg-foreground/5 border border-border/30">
                  {stat.icon}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
