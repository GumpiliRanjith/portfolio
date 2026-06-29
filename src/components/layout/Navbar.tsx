"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useTheme } from "@/context/ThemeContext";
import { Keyboard, Share2, Sun, Moon, Menu, X, Check, Copy, HelpCircle } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [shortcutsOpen, setShortcutsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
    { name: "Experience", href: "/experience" },
    { name: "Career", href: "/career" },
    { name: "Resume", href: "/resume" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  // Key shortcuts listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Check if target is input or textarea to avoid intercepting typing
      if (
        document.activeElement?.tagName === "INPUT" ||
        document.activeElement?.tagName === "TEXTAREA"
      ) {
        return;
      }

      const key = e.key.toLowerCase();
      
      // Shift + ? for shortcut dialog
      if (e.key === "?") {
        e.preventDefault();
        setShortcutsOpen((prev) => !prev);
      }

      // Alt + shortcuts
      if (e.altKey) {
        switch (key) {
          case "h":
            e.preventDefault();
            router.push("/");
            break;
          case "a":
            e.preventDefault();
            router.push("/about");
            break;
          case "s":
            e.preventDefault();
            router.push("/skills");
            break;
          case "p":
            e.preventDefault();
            router.push("/projects");
            break;
          case "e":
            e.preventDefault();
            router.push("/experience");
            break;
          case "c":
            e.preventDefault();
            router.push("/contact");
            break;
          case "r":
            e.preventDefault();
            router.push("/resume");
            break;
          case "b":
            e.preventDefault();
            router.push("/blog");
            break;
          case "t":
            e.preventDefault();
            toggleTheme();
            break;
          default:
            break;
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [router, toggleTheme]);

  const handleShare = async () => {
    const url = window.location.origin;
    try {
      if (navigator.share) {
        await navigator.share({
          title: "Ranjith Gumpili Portfolio",
          text: "Check out Ranjith Gumpili's personal developer portfolio!",
          url: url,
        });
      } else {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch (err) {
      // Fallback: copy to clipboard
      try {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (e) {
        console.error("Failed to share", e);
      }
    }
  };

  return (
    <>
      <header className="fixed top-3 md:top-4 left-0 right-0 z-40 px-3 sm:px-4 md:px-8">
        <div className="mx-auto w-full max-w-7xl rounded-xl md:rounded-2xl bg-background/50 border border-border backdrop-blur-xl shadow-lg px-4 md:px-6 py-2.5 md:py-4 transition-all duration-300">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 group transition-transform duration-300 hover:scale-105"
            >
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-heading font-black text-lg">
                R
              </div>
              <span className="font-heading font-bold text-lg md:text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-foreground to-secondary group-hover:from-primary group-hover:to-secondary">
                Ranjith.
              </span>
            </Link>

            {/* Desktop Navbar */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative px-3 py-1.5 text-sm font-medium transition-colors duration-300 rounded-lg hover:text-primary ${
                      isActive ? "text-primary bg-primary/5" : "text-foreground/70"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-primary rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-1 sm:gap-2">
              {/* Keyboard Shortcuts Trigger */}
              <button
                onClick={() => setShortcutsOpen(true)}
                className="hidden sm:inline-flex items-center justify-center rounded-full size-9 hover:bg-foreground/5 text-foreground/80 hover:text-primary transition-all active:scale-95"
                title="Keyboard Shortcuts (?)"
                aria-label="Keyboard Shortcuts"
              >
                <Keyboard className="size-5 stroke-[1.5]" />
              </button>

              {/* Share Button */}
              <button
                onClick={handleShare}
                className="hidden sm:inline-flex items-center justify-center rounded-full size-9 hover:bg-foreground/5 text-foreground/80 hover:text-primary transition-all active:scale-95"
                title="Share Portfolio"
                aria-label="Share Portfolio"
              >
                {copied ? <Check className="size-5 text-emerald-500" /> : <Share2 className="size-5 stroke-[1.5]" />}
              </button>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="inline-flex items-center justify-center rounded-full size-9 hover:bg-foreground/5 text-foreground/80 hover:text-primary transition-all active:scale-95"
                title="Toggle Theme (Alt+T)"
                aria-label="Toggle Theme"
              >
                {theme === "dark" ? (
                  <Sun className="size-5 stroke-[1.5]" />
                ) : (
                  <Moon className="size-5 stroke-[1.5]" />
                )}
              </button>

              {/* Mobile Menu Trigger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden inline-flex items-center justify-center rounded-full size-9 hover:bg-foreground/5 text-foreground/80 hover:text-primary transition-all"
                aria-label="Toggle Mobile Menu"
              >
                {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="absolute top-16 left-3 right-3 bg-background/95 border border-border backdrop-blur-xl rounded-xl shadow-xl p-4 flex flex-col gap-2 md:hidden">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                    isActive ? "text-primary bg-primary/10" : "text-foreground/80 hover:bg-foreground/5"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <hr className="border-border my-1" />
            <div className="flex justify-around py-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setShortcutsOpen(true);
                }}
                className="flex items-center gap-2 text-xs text-foreground/60 hover:text-primary"
              >
                <Keyboard className="size-4" /> Keyboard Helper
              </button>
              <button
                onClick={() => {
                  handleShare();
                  setMobileMenuOpen(false);
                }}
                className="flex items-center gap-2 text-xs text-foreground/60 hover:text-primary"
              >
                {copied ? <Check className="size-4 text-emerald-500" /> : <Share2 className="size-4" />}
                Share Site
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Keyboard Shortcuts Modal */}
      {shortcutsOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-2xl bg-card border border-border p-6 shadow-2xl relative">
            <button
              onClick={() => setShortcutsOpen(false)}
              className="absolute top-4 right-4 text-foreground/40 hover:text-foreground hover:bg-foreground/5 p-1 rounded-full transition-colors"
            >
              <X className="size-5" />
            </button>

            <div className="flex items-center gap-2 text-primary mb-4">
              <HelpCircle className="size-6" />
              <h2 className="text-xl font-heading font-bold">Keyboard Shortcuts</h2>
            </div>

            <p className="text-sm text-foreground/60 mb-6">
              Press these combinations anywhere on the site for faster navigation.
            </p>

            <div className="space-y-3">
              {[
                { keys: ["Alt", "H"], desc: "Go to Home page" },
                { keys: ["Alt", "A"], desc: "Navigate to About Me" },
                { keys: ["Alt", "S"], desc: "Navigate to Skills" },
                { keys: ["Alt", "P"], desc: "Navigate to Projects" },
                { keys: ["Alt", "E"], desc: "Navigate to Experience" },
                { keys: ["Alt", "R"], desc: "Navigate to Resume" },
                { keys: ["Alt", "B"], desc: "Navigate to Blog" },
                { keys: ["Alt", "C"], desc: "Navigate to Contact Me" },
                { keys: ["Alt", "T"], desc: "Toggle Dark / Light Mode" },
                { keys: ["?"], desc: "Show / Hide this shortcut menu" },
              ].map((shortcut, i) => (
                <div key={i} className="flex justify-between items-center text-sm py-1.5 border-b border-border/50">
                  <span className="text-foreground/70">{shortcut.desc}</span>
                  <div className="flex gap-1">
                    {shortcut.keys.map((key) => (
                      <kbd
                        key={key}
                        className="px-2 py-0.5 text-xs font-mono font-bold bg-foreground/5 border border-border rounded shadow"
                      >
                        {key}
                      </kbd>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => setShortcutsOpen(false)}
              className="mt-6 w-full py-2 bg-primary hover:bg-primary/95 text-white font-medium rounded-xl transition-all shadow-md active:scale-98"
            >
              Got it
            </button>
          </div>
        </div>
      )}

      {/* Share Toast Notification */}
      {copied && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-emerald-950 text-emerald-300 border border-emerald-800 rounded-xl px-4 py-3 shadow-2xl animate-bounce">
          <Check className="size-4" />
          <span className="text-sm font-semibold">Portfolio link copied to clipboard!</span>
        </div>
      )}
    </>
  );
}
