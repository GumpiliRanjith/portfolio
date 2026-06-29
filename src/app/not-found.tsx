"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AlertTriangle, Home, Terminal } from "lucide-react";
import CustomCursor from "@/components/ui/CustomCursor";

export default function NotFound() {
  return (
    <>
      <CustomCursor />
      
      <div className="min-h-screen bg-background flex flex-col justify-center items-center p-6 relative overflow-hidden">
        {/* Glow backdrop */}
        <div className="absolute inset-0 bg-background glow-mesh opacity-30 pointer-events-none z-0" />

        <div className="relative z-10 flex flex-col items-center text-center max-w-md">
          {/* Animated Warning Icon */}
          <motion.div
            animate={{ scale: [1, 1.05, 1], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="p-4 rounded-full bg-red-950/20 border border-red-900/30 text-red-500 mb-8"
          >
            <AlertTriangle className="size-12 stroke-[1.5]" />
          </motion.div>

          {/* Title */}
          <h1 className="text-8xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-primary leading-none tracking-tighter mb-4">
            404
          </h1>
          <h2 className="text-xl font-heading font-bold text-foreground mb-6">
            PAGE_NOT_FOUND
          </h2>

          {/* Terminal log panel */}
          <div className="w-full rounded-2xl glass-panel p-5 font-mono text-xs border border-border text-left mb-10">
            <div className="flex items-center gap-1.5 text-red-500/80 mb-3">
              <Terminal className="size-4" />
              <span>stderr logs</span>
            </div>
            <div className="space-y-1.5 text-foreground/60 leading-relaxed">
              <div><span className="text-foreground/40">[2026-06-30]</span> KERNEL: Route index lookup failed.</div>
              <div><span className="text-foreground/40">[2026-06-30]</span> ERROR: GET request at undefined URL path.</div>
              <div><span className="text-foreground/40">[2026-06-30]</span> WARN: Page file mismatch, loading fallback shell...</div>
            </div>
          </div>

          {/* Home button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary hover:bg-primary/95 text-white font-medium shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 active:scale-95 text-sm"
          >
            <Home className="size-4" />
            <span>Return to Safety</span>
          </Link>
        </div>
      </div>
    </>
  );
}
