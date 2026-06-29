"use client";

import { useState } from "react";
import Loader from "@/components/ui/Loader";
import CustomCursor from "@/components/ui/CustomCursor";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import SkillsSection from "@/components/home/SkillsSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import ExperienceSection from "@/components/home/ExperienceSection";
import AchievementsSection from "@/components/home/AchievementsSection";
import GitHubStatsSection from "@/components/home/GitHubStatsSection";
import ServicesSection from "@/components/home/ServicesSection";
import BlogSection from "@/components/home/BlogSection";
import ContactSection from "@/components/home/ContactSection";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* Dynamic Screen preloader */}
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}

      {/* Lag-free spring trailing cursor */}
      <CustomCursor />

      {/* Page Layout */}
      <div className="flex flex-col min-h-screen relative overflow-hidden">
        {/* Glowing gradient background */}
        <div className="absolute inset-0 bg-background glow-mesh opacity-40 pointer-events-none z-0" />
        
        {/* Sticky navbar */}
        <Navbar />

        {/* Content sections */}
        <main id="main-content" className="flex-grow z-10">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <AchievementsSection />
          <GitHubStatsSection />
          <ServicesSection />
          <BlogSection />
          <ContactSection />
        </main>

        {/* Bottom footer and Scroll-to-Top */}
        <Footer />
      </div>
    </>
  );
}
