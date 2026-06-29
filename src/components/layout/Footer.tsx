"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUp, Mail } from "lucide-react";
import { Github, Linkedin, Twitter } from "@/components/ui/BrandIcons";
import { personalInfo } from "@/data/portfolioData";

export default function Footer() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.scrollY > 400) {
        setShowScroll(true);
      } else if (showScroll && window.scrollY <= 400) {
        setShowScroll(false);
      }
    };
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [showScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border bg-card/30 backdrop-blur-md mt-auto">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        {/* Social Icons */}
        <div className="flex justify-center space-x-6 md:order-2">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/50 hover:text-primary transition-colors duration-300"
            aria-label="GitHub"
          >
            <Github className="size-6 stroke-[1.5]" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/50 hover:text-primary transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="size-6 stroke-[1.5]" />
          </a>
          <a
            href={personalInfo.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/50 hover:text-primary transition-colors duration-300"
            aria-label="Twitter"
          >
            <Twitter className="size-6 stroke-[1.5]" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-foreground/50 hover:text-primary transition-colors duration-300"
            aria-label="Email"
          >
            <Mail className="size-6 stroke-[1.5]" />
          </a>
        </div>

        {/* Links and Copyright */}
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-foreground/40 font-mono">
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <div className="mt-2 flex justify-center gap-4 text-xs font-mono text-foreground/50">
            <Link href="/about" className="hover:text-primary transition-colors">About</Link>
            <span>&middot;</span>
            <Link href="/projects" className="hover:text-primary transition-colors">Projects</Link>
            <span>&middot;</span>
            <Link href="/resume" className="hover:text-primary transition-colors">Resume</Link>
            <span>&middot;</span>
            <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
          </div>
        </div>
      </div>

      {/* Floating Scroll to Top button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 flex items-center justify-center p-3 rounded-full bg-primary hover:bg-primary/90 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 active:scale-95 border border-white/10"
          aria-label="Scroll to top"
        >
          <ArrowUp className="size-5 animate-bounce" />
        </button>
      )}
    </footer>
  );
}
