"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, BookOpen, Calendar, Clock } from "lucide-react";
import { blogsData } from "@/data/portfolioData";

export default function BlogSection() {
  // Take first 3 blogs for the homepage
  const recentBlogs = blogsData.slice(0, 3);

  return (
    <section id="blog" className="py-20 md:py-28 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xs font-semibold tracking-widest text-primary uppercase font-mono mb-2">
              // Written Thoughts
            </h2>
            <p className="text-3xl sm:text-4xl font-heading font-black tracking-tight">
              Recent Blog Posts
            </p>
          </div>

          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
          >
            Visit all articles
            <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentBlogs.map((blog, idx) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="group flex flex-col justify-between p-6 rounded-2xl glass-panel glass-panel-hover border border-border overflow-hidden"
            >
              <div>
                {/* Meta details */}
                <div className="flex items-center justify-between text-[11px] font-mono text-foreground/45 mb-4">
                  <span className="px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/10 uppercase tracking-widest">
                    {blog.category}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="size-3" />
                      {blog.date}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-heading font-bold text-foreground leading-snug group-hover:text-primary transition-colors mb-3">
                  <Link href={`/blog#${blog.slug}`}>
                    {blog.title}
                  </Link>
                </h3>

                {/* Excerpt */}
                <p className="text-xs sm:text-sm text-foreground/60 leading-relaxed mb-6">
                  {blog.excerpt}
                </p>
              </div>

              {/* Bottom stats and link */}
              <div className="flex justify-between items-center pt-4 border-t border-border/50 text-[11px] font-mono text-foreground/45">
                <span className="flex items-center gap-1">
                  <Clock className="size-3.5" />
                  {blog.readTime}
                </span>

                <Link
                  href={`/blog#${blog.slug}`}
                  className="flex items-center gap-1 hover:text-primary font-bold transition-colors"
                >
                  <BookOpen className="size-3.5" />
                  <span>Read Article</span>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
