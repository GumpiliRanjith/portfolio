"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, MessageSquare, AlertCircle, CheckCircle2 } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";
import confetti from "canvas-confetti";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate sending email
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Save mock contact to localStorage for testing
    try {
      const existing = JSON.parse(localStorage.getItem("contact_messages") || "[]");
      existing.push({ ...formData, date: new Date().toISOString() });
      localStorage.setItem("contact_messages", JSON.stringify(existing));
    } catch (err) {
      console.error("Local storage write error", err);
    }

    setIsSubmitting(false);
    setSubmitSuccess(true);
    setFormData({ name: "", email: "", subject: "", message: "" });

    // Trigger success confetti
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
      colors: ["#06b6d4", "#6366f1"],
    });

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitSuccess(false), 6000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-xs font-semibold tracking-widest text-primary uppercase font-mono mb-2">
            // Let's connect
          </h2>
          <p className="text-3xl sm:text-4xl font-heading font-black tracking-tight">
            Contact Me
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto">
          {/* Left Column: Direct info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-8"
          >
            <div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                Let's Discuss a Project
              </h3>
              <p className="text-sm sm:text-base text-foreground/60 leading-relaxed">
                Have an interesting data pipeline problem, a backend service that needs optimization, or looking to collaborate? Drop me a message and I'll reply within 24 hours.
              </p>
            </div>

            {/* Info details cards */}
            <div className="space-y-4">
              <div className="p-4 rounded-xl border border-border bg-card/25 flex items-center gap-4">
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                  <Mail className="size-5 stroke-[1.5]" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-foreground/40 uppercase tracking-wider">Direct Email</div>
                  <a href={`mailto:${personalInfo.email}`} className="text-sm font-semibold text-foreground/80 hover:text-primary transition-colors">
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-border bg-card/25 flex items-center gap-4">
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                  <MapPin className="size-5 stroke-[1.5]" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-foreground/40 uppercase tracking-wider">Location</div>
                  <div className="text-sm font-semibold text-foreground/80">
                    {personalInfo.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Micro details tagline */}
            <div className="text-[11px] font-mono text-foreground/35 border-t border-border/50 pt-6">
              * Local validation compliant with WCAG accessibility standards. Form values logged in storage.
            </div>
          </motion.div>

          {/* Right Column: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 rounded-2xl glass-panel p-6 sm:p-8 border border-border shadow-xl relative"
          >
            {submitSuccess && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 bg-background/95 rounded-2xl flex flex-col items-center justify-center text-center p-6 z-10"
              >
                <CheckCircle2 className="size-16 text-emerald-500 mb-4 animate-bounce" />
                <h4 className="text-xl font-heading font-bold text-foreground mb-2">Message Sent!</h4>
                <p className="text-sm text-foreground/60 max-w-sm leading-relaxed mb-6">
                  Thank you for reaching out, Ranjith has received your query and will connect shortly.
                </p>
                <button
                  onClick={() => setSubmitSuccess(false)}
                  className="px-5 py-2.5 bg-foreground/5 hover:bg-foreground/10 border border-border rounded-xl text-xs font-semibold font-mono transition-all"
                >
                  Send another message
                </button>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name field */}
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-xs font-mono font-semibold text-foreground/60">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className={`w-full px-4 py-2.5 rounded-xl border bg-foreground/[0.02] text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all ${
                    errors.name ? "border-red-500/60 ring-2 ring-red-500/10" : "border-border"
                  }`}
                />
                {errors.name && (
                  <div className="flex items-center gap-1 text-[11px] text-red-500 font-mono">
                    <AlertCircle className="size-3.5" />
                    <span>{errors.name}</span>
                  </div>
                )}
              </div>

              {/* Email field */}
              <div className="space-y-1.5">
                <label htmlFor="email" className="text-xs font-mono font-semibold text-foreground/60">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className={`w-full px-4 py-2.5 rounded-xl border bg-foreground/[0.02] text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all ${
                    errors.email ? "border-red-500/60 ring-2 ring-red-500/10" : "border-border"
                  }`}
                />
                {errors.email && (
                  <div className="flex items-center gap-1 text-[11px] text-red-500 font-mono">
                    <AlertCircle className="size-3.5" />
                    <span>{errors.email}</span>
                  </div>
                )}
              </div>

              {/* Subject field */}
              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-xs font-mono font-semibold text-foreground/60">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Inquiry / Opportunity"
                  className={`w-full px-4 py-2.5 rounded-xl border bg-foreground/[0.02] text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all ${
                    errors.subject ? "border-red-500/60 ring-2 ring-red-500/10" : "border-border"
                  }`}
                />
                {errors.subject && (
                  <div className="flex items-center gap-1 text-[11px] text-red-500 font-mono">
                    <AlertCircle className="size-3.5" />
                    <span>{errors.subject}</span>
                  </div>
                )}
              </div>

              {/* Message field */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-mono font-semibold text-foreground/60">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hey Ranjith, I would love to collaborate on..."
                  className={`w-full px-4 py-2.5 rounded-xl border bg-foreground/[0.02] text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all resize-none ${
                    errors.message ? "border-red-500/60 ring-2 ring-red-500/10" : "border-border"
                  }`}
                />
                {errors.message && (
                  <div className="flex items-center gap-1 text-[11px] text-red-500 font-mono">
                    <AlertCircle className="size-3.5" />
                    <span>{errors.message}</span>
                  </div>
                )}
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-primary hover:bg-primary/95 text-white font-medium rounded-xl transition-all shadow-md hover:shadow-primary/20 active:scale-98 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <MessageSquare className="size-4 animate-spin" />
                    <span>Processing message...</span>
                  </>
                ) : (
                  <>
                    <Send className="size-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
