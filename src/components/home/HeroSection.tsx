"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download, Terminal } from "lucide-react";
import ParticleBackground from "@/components/ui/ParticleBackground";
import { personalInfo } from "@/data/portfolioData";

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentRole = personalInfo.roles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && displayText === currentRole) {
      // Pause before deleting
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
    } else {
      timer = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentRole.substring(0, displayText.length - 1)
            : currentRole.substring(0, displayText.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      {/* 3D Background */}
      <ParticleBackground />

      {/* Hero content container */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Terminal Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel text-xs md:text-sm font-mono text-primary mb-6"
        >
          <Terminal className="size-4 animate-pulse" />
          <span>hello_world.sh &middot; active</span>
        </motion.div>

        {/* Introduction */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-4xl sm:text-6xl md:text-7xl font-heading font-black tracking-tight leading-none"
        >
          I am{" "}
          <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-secondary animate-pulse-slow">
            {personalInfo.name}
          </span>
        </motion.h1>

        {/* Dynamic Typewriter text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="h-10 md:h-12 flex items-center mt-6 text-xl sm:text-2xl md:text-3xl font-mono text-foreground/80"
        >
          <span>{displayText}</span>
          <span className="inline-block w-1.5 h-6 md:h-8 bg-primary ml-1.5 animate-pulse" />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-6 text-base sm:text-lg text-foreground/60 max-w-2xl leading-relaxed"
        >
          {personalInfo.bio}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href="/projects"
            className="group px-6 py-3 rounded-xl bg-primary hover:bg-primary/95 text-white font-medium shadow-lg hover:shadow-primary/30 transition-all duration-300 flex items-center gap-2 hover:-translate-y-0.5 active:scale-95 text-sm md:text-base"
          >
            Explore Projects
            <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link
            href="/contact"
            className="px-6 py-3 rounded-xl border border-border bg-card/40 hover:bg-foreground/5 font-medium transition-all duration-300 hover:-translate-y-0.5 active:scale-95 text-sm md:text-base"
          >
            Get In Touch
          </Link>

          <Link
            href="/resume"
            className="px-6 py-3 rounded-xl border border-primary/30 text-primary hover:bg-primary/10 font-medium transition-all duration-300 flex items-center gap-2 hover:-translate-y-0.5 active:scale-95 text-sm md:text-base"
          >
            <Download className="size-4" />
            Resume
          </Link>
        </motion.div>
      </div>

      {/* Down arrow scroll helper */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 opacity-50">
        <span className="text-[10px] font-mono tracking-widest uppercase">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-1.5 h-1.5 bg-foreground rounded-full"
        />
      </div>
    </section>
  );
}
