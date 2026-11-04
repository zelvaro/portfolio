"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X, FileText } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/data";

const NAV_LINKS = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "glass-nav py-3"
            : "bg-transparent py-5 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Mark */}
          <Link
            href="/"
            className="group flex items-center gap-3 text-text-primary hover:text-white transition-colors"
          >
            <div className="w-8 h-8 rounded-lg bg-bg-surface-2 border border-border-hairline flex items-center justify-center group-hover:border-accent-primary transition-all duration-300">
              <span className="font-mono text-sm font-bold text-accent-secondary">
                SE
              </span>
            </div>
            <span className="font-display font-semibold tracking-tight text-sm sm:text-base">
              Sabir Essaad
            </span>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-1 bg-bg-surface/60 p-1.5 rounded-full border border-border-hairline/80 backdrop-blur-md">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "text-text-primary bg-bg-surface-2 shadow-sm"
                      : "text-text-secondary hover:text-text-primary hover:bg-bg-surface-2/50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={PERSONAL_INFO.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border-hairline text-xs font-mono text-text-secondary hover:text-text-primary hover:border-accent-primary/40 transition-colors"
            >
              <FileText className="w-3.5 h-3.5 text-accent-secondary" />
              <span>CV.pdf</span>
            </a>

            <Link
              href="/contact"
              className="relative group overflow-hidden rounded-full bg-accent-gradient p-px font-medium text-sm text-white shadow-lg transition-all duration-300 hover:shadow-accent-primary/25"
            >
              <div className="relative flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-bg-base/90 group-hover:bg-bg-base/70 transition-all duration-300">
                <span>Let&apos;s talk</span>
                <ArrowUpRight className="w-4 h-4 text-accent-secondary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-lg bg-bg-surface border border-border-hairline text-text-primary"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-bg-base/98 backdrop-blur-2xl md:hidden pt-24 px-6 flex flex-col justify-between pb-10"
          >
            <div className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-2xl font-display font-semibold py-3 border-b border-border-hairline/40 flex items-center justify-between ${
                      isActive ? "text-accent-secondary" : "text-text-primary"
                    }`}
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-5 h-5 opacity-40" />
                  </Link>
                );
              })}
            </div>

            <div className="flex flex-col gap-3">
              <a
                href={PERSONAL_INFO.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl border border-border-hairline bg-bg-surface text-text-primary font-mono text-sm"
              >
                <FileText className="w-4 h-4 text-accent-secondary" />
                <span>Download CV (PDF)</span>
              </a>

              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-accent-gradient text-white font-medium text-base shadow-lg shadow-accent-primary/20"
              >
                <span>Let&apos;s talk</span>
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
