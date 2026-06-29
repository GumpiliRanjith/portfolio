"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Database, BarChart2, Terminal, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { servicesData, testimonialsData } from "@/data/portfolioData";

export default function ServicesSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "database":
        return <Database className="size-6 text-primary" />;
      case "bar-chart-2":
        return <BarChart2 className="size-6 text-primary" />;
      case "terminal":
        return <Terminal className="size-6 text-primary" />;
      default:
        return <Database className="size-6 text-primary" />;
    }
  };

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  return (
    <section id="services" className="py-20 md:py-28 relative bg-card/10 border-y border-border/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* SERVICES SECTION */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-xs font-semibold tracking-widest text-primary uppercase font-mono mb-2">
            // What I Offer
          </h2>
          <p className="text-3xl sm:text-4xl font-heading font-black tracking-tight">
            Developer Services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {servicesData.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-2xl glass-panel glass-panel-hover border border-border flex flex-col justify-between"
            >
              <div>
                <div className="p-3 w-fit rounded-xl bg-primary/10 text-primary border border-primary/20 flex items-center justify-center mb-6">
                  {getServiceIcon(service.icon)}
                </div>

                <h3 className="text-lg font-heading font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-foreground/60 leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1 pt-4 border-t border-border/40">
                {service.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 rounded text-[10px] font-mono bg-foreground/5 text-foreground/55 border border-border/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* TESTIMONIALS SECTION */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-xs font-semibold tracking-widest text-primary uppercase font-mono mb-2">
            // Client Feedbacks
          </h2>
          <p className="text-3xl sm:text-4xl font-heading font-black tracking-tight">
            Peer Recommendations
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto rounded-2xl glass-panel p-8 sm:p-10 border border-border/80 shadow-lg">
          <Quote className="absolute top-6 left-6 size-12 text-primary/10 stroke-[2] pointer-events-none" />

          <div className="min-h-[160px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                <p className="text-sm sm:text-base md:text-lg italic text-foreground/75 leading-relaxed mb-8">
                  "{testimonialsData[activeTestimonial].quote}"
                </p>
                <div className="flex items-center justify-center gap-3">
                  <div className="flex flex-col text-center">
                    <span className="font-heading font-bold text-sm sm:text-base text-foreground leading-tight">
                      {testimonialsData[activeTestimonial].name}
                    </span>
                    <span className="text-xs text-primary font-mono mt-1 uppercase tracking-wider">
                      {testimonialsData[activeTestimonial].role} &middot; {testimonialsData[activeTestimonial].company}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Nav Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8 pt-6 border-t border-border/40">
            <button
              onClick={prevTestimonial}
              className="p-1.5 rounded-full hover:bg-foreground/5 text-foreground/50 hover:text-primary transition-colors border border-border"
              aria-label="Previous recommendation"
            >
              <ChevronLeft className="size-4" />
            </button>
            <div className="flex gap-1.5">
              {testimonialsData.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className={`size-2 rounded-full transition-all ${
                    activeTestimonial === i ? "bg-primary w-4" : "bg-foreground/15"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="p-1.5 rounded-full hover:bg-foreground/5 text-foreground/50 hover:text-primary transition-colors border border-border"
              aria-label="Next recommendation"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
