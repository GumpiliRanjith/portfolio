"use client";

import { motion } from "framer-motion";
import { Award, Calendar, ExternalLink, ShieldCheck } from "lucide-react";
import { achievementsData } from "@/data/portfolioData";
import confetti from "canvas-confetti";

export default function AchievementsSection() {
  const triggerCelebration = (id: string) => {
    // Only trigger if it's the hackathon runner-up or general award
    if (id.startsWith("hck")) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#06b6d4", "#6366f1", "#10b981"],
      });
    }
  };

  return (
    <section id="achievements" className="py-20 md:py-28 bg-card/5 border-t border-border/40 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-xs font-semibold tracking-widest text-primary uppercase font-mono mb-2">
            // Certifications & Wins
          </h2>
          <p className="text-3xl sm:text-4xl font-heading font-black tracking-tight">
            Key Achievements
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievementsData.map((ach, idx) => (
            <motion.div
              key={ach.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => triggerCelebration(ach.id)}
              className="p-6 rounded-2xl glass-panel glass-panel-hover border border-border flex flex-col justify-between cursor-pointer"
            >
              <div>
                {/* Header Icon */}
                <div className="flex justify-between items-start mb-6">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary border border-primary/20 flex items-center justify-center">
                    {ach.id.startsWith("hck") ? (
                      <Award className="size-5 stroke-[1.5]" />
                    ) : (
                      <ShieldCheck className="size-5 stroke-[1.5]" />
                    )}
                  </div>
                  <span className="flex items-center gap-1 text-[11px] font-mono text-foreground/40 mt-1">
                    <Calendar className="size-3.5" />
                    {ach.date}
                  </span>
                </div>

                {/* Info details */}
                <h3 className="text-lg font-heading font-bold text-foreground leading-snug mb-1">
                  {ach.title}
                </h3>
                <span className="text-xs font-semibold text-primary font-mono block mb-4">
                  {ach.issuer}
                </span>

                <p className="text-xs sm:text-sm text-foreground/60 leading-relaxed mb-6">
                  {ach.description}
                </p>
              </div>

              {ach.id.startsWith("hck") && (
                <div className="text-[10px] text-primary/70 font-mono flex items-center gap-1 select-none">
                  <span>Click to celebrate!</span>
                  <ExternalLink className="size-3" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
