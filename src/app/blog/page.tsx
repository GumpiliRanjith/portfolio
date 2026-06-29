"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import { blogsData } from "@/data/portfolioData";
import { BookOpen, Calendar, Clock, ChevronDown, ChevronUp, Tag } from "lucide-react";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [expandedBlog, setExpandedBlog] = useState<string | null>(null);

  const categories = ["all", "DevOps", "Data Science", "Software Development"];

  const filteredBlogs = activeCategory === "all"
    ? blogsData
    : blogsData.filter(b => b.category === activeCategory);

  const toggleExpand = (id: string) => {
    setExpandedBlog(expandedBlog === id ? null : id);
  };

  // Mock full body contents for the expanded blogs to make them interactive and realistic
  const fullArticleContent: { [key: string]: string[] } = {
    "docker-guide": [
      "Docker has revolutionized how developers package and run applications. By encapsulating code, runtime, system tools, and libraries inside a lightweight container, you guarantee that if it runs on your machine, it will run in production.",
      "To write an optimized Dockerfile, always use multi-stage builds. This technique allows you to use heavy SDK images for compiling your code (e.g. Maven/JDK for Java, npm/Node for React), and then copy only the compiled binaries/assets into a minimal runner image (e.g. alpine, distroless). This reduces container image size by up to 90%, speeding up deployment and shrinking the security attack surface.",
      "Always avoid running containers as root. Specify a custom USER in your Dockerfile to mitigate container breakout vulnerabilities. In addition, configure volume mappings instead of writing persistent data directly to the container layer, as container filesystem layers are ephemeral and will destroy data on restart."
    ],
    "pandas-pipelines": [
      "In data science, 80% of your time is spent cleaning and preparing data. Dirty datasets containing null entries, extreme outliers, incorrect types, and unformatted strings will ruin the performance of any machine learning model.",
      "Writing structured cleaning pipelines using Pandas is critical. Rather than writing ad-hoc Jupyter Notebook blocks, wrap your operations in standard Python functions. Chain functions together using the `.pipe()` method. This makes your transformation steps explicit, reproducible, and easily testable.",
      "Handle missing values systematically: impute numerical fields using median values, map categorical properties, and scale ranges using MinMaxScaler or StandardScaler before training algorithms. Document all pipeline processes with clear log outputs to catch database schema drift."
    ],
    "spring-security-jwt": [
      "Modern APIs require stateless, token-based authorization. JSON Web Tokens (JWT) allow backend systems to verify user identities without maintaining active session storage records.",
      "To secure a Spring Boot application, establish a custom SecurityFilterChain. Define routing endpoints that require authentication and those that remain public (e.g. /api/auth/register). Implement a JWT Filter that intercept incoming HTTP requests, extracts the authorization header, validates the signature using your secret key, and registers authentication tokens in Spring's SecurityContextHolder.",
      "Always set appropriate token expiration times (e.g., 15 minutes) and implement refresh token workflows. Store secret signing keys securely in environment variables (configured via application.properties) and never commit secrets directly to git repositories."
    ]
  };

  return (
    <>
      <CustomCursor />
      
      <div className="flex flex-col min-h-screen relative overflow-hidden">
        <div className="absolute inset-0 bg-background glow-mesh opacity-30 pointer-events-none z-0" />
        <Navbar />

        <main id="main-content" className="flex-grow z-10 pt-32 pb-20">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            
            {/* Header */}
            <div className="mb-12 border-b border-border/50 pb-8">
              <h1 className="text-4xl md:text-5xl font-heading font-black tracking-tight mb-4">
                Technical Blog
              </h1>
              <p className="text-sm md:text-base font-mono text-primary">
                // Research notes, guides, and tutorials
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-foreground/5 border border-border w-fit mb-12 backdrop-blur-md">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium font-heading transition-all ${
                    activeCategory === cat
                      ? "bg-primary text-white"
                      : "text-foreground/60 hover:text-foreground hover:bg-foreground/5"
                  }`}
                >
                  {cat === "all" ? "All Posts" : cat}
                </button>
              ))}
            </div>

            {/* Articles Feed */}
            <div className="space-y-8">
              {filteredBlogs.map((blog) => {
                const isExpanded = expandedBlog === blog.id;
                return (
                  <article
                    key={blog.id}
                    id={blog.slug}
                    className="p-6 rounded-2xl glass-panel border border-border transition-all duration-300"
                  >
                    {/* Header info */}
                    <div className="flex items-center justify-between text-xs font-mono text-foreground/45 mb-4">
                      <span className="flex items-center gap-1.5 text-primary font-bold">
                        <Tag className="size-3.5" />
                        {blog.category}
                      </span>
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="size-3.5" />
                          {blog.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="size-3.5" />
                          {blog.readTime}
                        </span>
                      </div>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl sm:text-2xl font-heading font-bold text-foreground mb-3">
                      {blog.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-sm sm:text-base text-foreground/75 leading-relaxed mb-6">
                      {blog.excerpt}
                    </p>

                    {/* Interactive read button */}
                    <button
                      onClick={() => toggleExpand(blog.id)}
                      className="flex items-center gap-2 text-xs font-mono font-semibold text-primary hover:text-primary/80 transition-colors"
                    >
                      <BookOpen className="size-4" />
                      <span>{isExpanded ? "Collapse Article" : "Read Full Article inline"}</span>
                      {isExpanded ? <ChevronUp className="size-4" /> : <ChevronDown className="size-4" />}
                    </button>

                    {/* Expanded Article Body Content */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="mt-8 pt-8 border-t border-border/40 space-y-4 text-sm sm:text-base text-foreground/80 leading-relaxed">
                            {fullArticleContent[blog.id]?.map((p, pIdx) => (
                              <p key={pIdx}>{p}</p>
                            ))}
                            <div className="mt-6 p-4 rounded-xl border border-dashed border-border bg-card/20 text-xs font-mono text-foreground/45 flex items-center gap-2">
                              <span>* Note: This is an educational reference article drafted by Ranjith Gumpili.</span>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </article>
                );
              })}
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
