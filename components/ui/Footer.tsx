"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUp, Check, Copy, Github, Linkedin, Mail } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/data";

export function Footer() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border-hairline bg-bg-base py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Availability pill & Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-xs">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bg-surface border border-border-hairline text-text-secondary">
            <span className="w-2 h-2 rounded-full bg-accent-secondary animate-pulse" />
            <span className="font-mono">{PERSONAL_INFO.status}</span>
          </div>
          <span className="text-text-muted">
            © {new Date().getFullYear()} Sabir Essaad. Engineered with restraint.
          </span>
        </div>

        {/* Channels & Actions */}
        <div className="flex items-center gap-4 text-xs text-text-secondary">
          {/* Copy Email Button */}
          <button
            onClick={copyEmail}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-bg-surface border border-border-hairline hover:border-accent-primary/40 text-text-secondary hover:text-text-primary transition-colors"
            title="Copy email to clipboard"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-accent-success" />
                <span className="font-mono text-accent-success">Copied!</span>
              </>
            ) : (
              <>
                <Mail className="w-3.5 h-3.5 text-accent-secondary" />
                <span className="font-mono">{PERSONAL_INFO.email}</span>
                <Copy className="w-3 h-3 opacity-60 ml-1" />
              </>
            )}
          </button>

          {/* Social Icons */}
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-bg-surface border border-border-hairline hover:border-accent-primary/40 hover:text-text-primary transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-bg-surface border border-border-hairline hover:border-accent-primary/40 hover:text-text-primary transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-bg-surface border border-border-hairline hover:border-accent-primary/40 hover:text-text-primary transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
