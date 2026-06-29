"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import { personalInfo, educationData, experienceData, skillsData, achievementsData } from "@/data/portfolioData";
import { Printer, ChevronDown, ChevronUp, Mail, MapPin, Globe } from "lucide-react";
import { Github } from "@/components/ui/BrandIcons";

export default function ResumePage() {
  const [expanded, setExpanded] = useState({
    summary: true,
    experience: true,
    education: true,
    skills: true,
    certifications: true,
  });

  const toggleSection = (section: keyof typeof expanded) => {
    setExpanded((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <CustomCursor />
      
      <div className="flex flex-col min-h-screen relative overflow-hidden">
        <div className="absolute inset-0 bg-background glow-mesh opacity-30 pointer-events-none z-0 print:hidden" />
        
        <div className="print:hidden">
          <Navbar />
        </div>

        <main id="main-content" className="flex-grow z-10 pt-32 pb-20 print:pt-0 print:pb-0">
          <div className="mx-auto max-w-4xl px-6 lg:px-8 print:px-0">
            
            {/* Header controls */}
            <div className="mb-12 border-b border-border/50 pb-8 flex justify-between items-end print:hidden">
              <div>
                <h1 className="text-4xl md:text-5xl font-heading font-black tracking-tight mb-4">
                  Interactive Resume
                </h1>
                <p className="text-sm md:text-base font-mono text-primary">
                  // Expand sections or trigger professional print layout
                </p>
              </div>

              <button
                onClick={handlePrint}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary hover:bg-primary/95 text-white text-sm font-semibold transition-all shadow-md active:scale-95 cursor-pointer"
              >
                <Printer className="size-4" />
                Print / PDF
              </button>
            </div>

            {/* Resume Canvas Area */}
            <div className="bg-card/40 border border-border/80 rounded-2xl p-6 sm:p-10 shadow-xl print:shadow-none print:border-0 print:bg-transparent print:p-0">
              
              {/* PRINT ONLY Header */}
              <div className="hidden print:block border-b border-neutral-300 pb-6 mb-8 text-neutral-900">
                <h1 className="text-3xl font-bold tracking-tight font-heading">{personalInfo.name}</h1>
                <p className="text-sm text-neutral-600 font-mono mt-1">{personalInfo.title}</p>
                <div className="grid grid-cols-2 gap-2 mt-4 text-xs font-mono text-neutral-500">
                  <div className="flex items-center gap-1.5"><Mail className="size-3.5" /> {personalInfo.email}</div>
                  <div className="flex items-center gap-1.5"><MapPin className="size-3.5" /> {personalInfo.location}</div>
                  <div className="flex items-center gap-1.5"><Github className="size-3.5" /> github.com/GumpiliRanjith</div>
                  <div className="flex items-center gap-1.5"><Globe className="size-3.5" /> gumpiliranjith.site</div>
                </div>
              </div>

              {/* SECTION: SUMMARY */}
              <div className="mb-8">
                <button
                  onClick={() => toggleSection("summary")}
                  className="w-full flex justify-between items-center text-left py-2 border-b border-border/80 text-foreground font-heading font-bold text-lg md:text-xl print:border-neutral-300 print:text-neutral-900"
                >
                  <span>Professional Summary</span>
                  <span className="print:hidden">
                    {expanded.summary ? <ChevronUp className="size-5" /> : <ChevronDown className="size-5" />}
                  </span>
                </button>
                {expanded.summary && (
                  <div className="mt-4 text-sm text-foreground/75 leading-relaxed print:text-neutral-700">
                    {personalInfo.detailedBio}
                  </div>
                )}
              </div>

              {/* SECTION: EXPERIENCE */}
              <div className="mb-8">
                <button
                  onClick={() => toggleSection("experience")}
                  className="w-full flex justify-between items-center text-left py-2 border-b border-border/80 text-foreground font-heading font-bold text-lg md:text-xl print:border-neutral-300 print:text-neutral-900"
                >
                  <span>Experience</span>
                  <span className="print:hidden">
                    {expanded.experience ? <ChevronUp className="size-5" /> : <ChevronDown className="size-5" />}
                  </span>
                </button>
                {expanded.experience && (
                  <div className="mt-4 space-y-6">
                    {experienceData.map((exp) => (
                      <div key={exp.id} className="group">
                        <div className="flex justify-between items-start flex-wrap gap-2 text-sm">
                          <div>
                            <h3 className="font-bold text-foreground print:text-neutral-900">{exp.role}</h3>
                            <h4 className="text-xs font-semibold text-primary font-mono print:text-neutral-600">{exp.company}</h4>
                          </div>
                          <div className="text-xs font-mono text-foreground/50 print:text-neutral-500">{exp.period} | {exp.location}</div>
                        </div>
                        <ul className="mt-2.5 space-y-1.5 pl-4 list-disc text-xs sm:text-sm text-foreground/70 print:text-neutral-700">
                          {exp.description.map((bullet, i) => (
                            <li key={i}>{bullet}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* SECTION: EDUCATION */}
              <div className="mb-8">
                <button
                  onClick={() => toggleSection("education")}
                  className="w-full flex justify-between items-center text-left py-2 border-b border-border/80 text-foreground font-heading font-bold text-lg md:text-xl print:border-neutral-300 print:text-neutral-900"
                >
                  <span>Education</span>
                  <span className="print:hidden">
                    {expanded.education ? <ChevronUp className="size-5" /> : <ChevronDown className="size-5" />}
                  </span>
                </button>
                {expanded.education && (
                  <div className="mt-4 space-y-6">
                    {educationData.map((edu) => (
                      <div key={edu.id}>
                        <div className="flex justify-between items-start flex-wrap gap-2 text-sm">
                          <div>
                            <h3 className="font-bold text-foreground print:text-neutral-900">{edu.degree}</h3>
                            <h4 className="text-xs font-semibold text-foreground/70 print:text-neutral-600">{edu.institution}</h4>
                          </div>
                          <div className="text-xs font-mono text-foreground/50 print:text-neutral-500">{edu.period} | {edu.location}</div>
                        </div>
                        {edu.gpa && (
                          <div className="text-xs font-mono text-primary font-semibold mt-1">GPA / Score: {edu.gpa}</div>
                        )}
                        <ul className="mt-2 space-y-1 pl-4 list-disc text-xs text-foreground/60 print:text-neutral-600">
                          {edu.highlights?.map((h, i) => (
                            <li key={i}>{h}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* SECTION: SKILLS */}
              <div className="mb-8">
                <button
                  onClick={() => toggleSection("skills")}
                  className="w-full flex justify-between items-center text-left py-2 border-b border-border/80 text-foreground font-heading font-bold text-lg md:text-xl print:border-neutral-300 print:text-neutral-900"
                >
                  <span>Core Skills</span>
                  <span className="print:hidden">
                    {expanded.skills ? <ChevronUp className="size-5" /> : <ChevronDown className="size-5" />}
                  </span>
                </button>
                {expanded.skills && (
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {skillsData.categories.map((cat) => (
                      <div key={cat.title}>
                        <h4 className="text-xs font-mono font-semibold text-primary uppercase tracking-widest mb-3 print:text-neutral-800">
                          {cat.title}
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {cat.skills.map((skill) => (
                            <span
                              key={skill.name}
                              className="px-2 py-0.5 rounded text-[10px] font-mono bg-foreground/5 text-foreground/75 border border-border/40 print:bg-neutral-100 print:text-neutral-800 print:border-neutral-300"
                            >
                              {skill.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* SECTION: CERTIFICATIONS */}
              <div className="mb-8 print:mb-0">
                <button
                  onClick={() => toggleSection("certifications")}
                  className="w-full flex justify-between items-center text-left py-2 border-b border-border/80 text-foreground font-heading font-bold text-lg md:text-xl print:border-neutral-300 print:text-neutral-900"
                >
                  <span>Certifications & Achievements</span>
                  <span className="print:hidden">
                    {expanded.certifications ? <ChevronUp className="size-5" /> : <ChevronDown className="size-5" />}
                  </span>
                </button>
                {expanded.certifications && (
                  <div className="mt-4 space-y-4">
                    {achievementsData.map((ach) => (
                      <div key={ach.id} className="text-sm">
                        <div className="flex justify-between items-start flex-wrap gap-2">
                          <h3 className="font-bold text-foreground print:text-neutral-900">{ach.title}</h3>
                          <span className="text-xs font-mono text-foreground/50 print:text-neutral-500">{ach.date}</span>
                        </div>
                        <h4 className="text-xs font-semibold text-primary font-mono mt-0.5 print:text-neutral-600">{ach.issuer}</h4>
                        <p className="text-xs text-foreground/60 mt-1 leading-relaxed print:text-neutral-600">{ach.description}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

            </div>
          </div>
        </main>

        <div className="print:hidden">
          <Footer />
        </div>
      </div>

      {/* Styled print configurations */}
      <style jsx global>{`
        @media print {
          body {
            background: white !important;
            color: #171717 !important;
          }
          * {
            background: transparent !important;
            color: #171717 !important;
            border-color: #d4d4d4 !important;
            box-shadow: none !important;
            text-shadow: none !important;
          }
          /* Ensure content spreads completely */
          main {
            padding-top: 0 !important;
            padding-bottom: 0 !important;
          }
          /* Hide links URLs when printing */
          a[href]::after {
            content: none !important;
          }
        }
      `}</style>
    </>
  );
}
