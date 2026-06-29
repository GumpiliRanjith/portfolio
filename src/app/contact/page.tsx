"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import ContactSection from "@/components/home/ContactSection";

export default function ContactPage() {
  return (
    <>
      <CustomCursor />
      
      <div className="flex flex-col min-h-screen relative overflow-hidden">
        <div className="absolute inset-0 bg-background glow-mesh opacity-30 pointer-events-none z-0" />
        <Navbar />

        {/* Content wrapper */}
        <main id="main-content" className="flex-grow z-10 pt-16">
          <ContactSection />
        </main>

        <Footer />
      </div>
    </>
  );
}
