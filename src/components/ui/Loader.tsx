"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const counter = { value: 0 };
    const timeline = gsap.timeline({
      onComplete: () => {
        // Slide up animation for the container
        gsap.to("#preloader", {
          yPercent: -100,
          duration: 0.8,
          ease: "power4.inOut",
          onComplete: onComplete,
        });
      },
    });

    // Count up 0 to 100
    timeline.to(counter, {
      value: 100,
      duration: 1.8,
      ease: "power2.out",
      onUpdate: () => {
        setPercent(Math.floor(counter.value));
      },
    });

    // Animate text elements
    gsap.fromTo(
      ".loader-word",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" }
    );
  }, [onComplete]);

  return (
    <div
      id="preloader"
      className="fixed inset-0 bg-background z-[9999] flex flex-col justify-between p-8 md:p-16 select-none pointer-events-auto"
    >
      {/* Top Tagline */}
      <div className="flex justify-between items-center text-xs md:text-sm font-semibold tracking-widest text-primary uppercase">
        <span className="loader-word">DATA SCIENCE</span>
        <span className="loader-word">DEVELOPMENT</span>
        <span className="loader-word">DEVOPS</span>
      </div>

      {/* Middle Name */}
      <div className="flex flex-col items-start justify-center flex-grow py-12">
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-heading font-black tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary overflow-hidden py-4">
          <span className="inline-block loader-word">RANJITH GUMPILI</span>
        </h1>
        <p className="text-sm md:text-base text-foreground/50 max-w-md loader-word mt-2 font-mono">
          Loading virtual environment...
        </p>
      </div>

      {/* Bottom Counter */}
      <div className="flex justify-between items-end">
        <div className="flex flex-col">
          <span className="text-xs font-mono text-foreground/40 uppercase tracking-widest">System Status</span>
          <span className="text-sm font-semibold text-foreground/80 mt-1">Booting Engine</span>
        </div>
        <div className="text-7xl sm:text-8xl md:text-9xl font-heading font-black leading-none text-transparent stroke-text select-none">
          {percent}%
        </div>
      </div>

      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.1);
          color: transparent;
        }
        :global(.light) .stroke-text {
          -webkit-text-stroke: 1px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </div>
  );
}
