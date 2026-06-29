import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Ranjith Gumpili | Personal Portfolio",
    template: "%s | Ranjith Gumpili"
  },
  description: "Personal portfolio of Ranjith Gumpili - Data Science Student, Java & Python Developer, and DevOps Learner. Discover projects, technical skills, and career timeline.",
  keywords: [
    "Ranjith Gumpili",
    "gumpiliranjith.site",
    "Data Science Student",
    "Java Developer",
    "Python Developer",
    "DevOps Learner",
    "Andhra Pradesh",
    "Software Engineer Portfolio"
  ],
  authors: [{ name: "Ranjith Gumpili", url: "https://gumpiliranjith.site" }],
  creator: "Ranjith Gumpili",
  metadataBase: new URL("https://gumpiliranjith.site"),
  openGraph: {
    title: "Ranjith Gumpili | Personal Portfolio",
    description: "Data Science Student, Java & Python Developer, and DevOps Learner.",
    url: "https://gumpiliranjith.site",
    siteName: "Ranjith Gumpili Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ranjith Gumpili | Personal Portfolio",
    description: "Data Science Student, Java & Python Developer, and DevOps Learner.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#030712" },
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground antialiased selection:bg-primary/30 select-none custom-cursor-active">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
