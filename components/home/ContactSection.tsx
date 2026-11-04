"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import confetti from "canvas-confetti";
import { Check, Copy, FileText, Github, Linkedin, Mail, Send } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/data";
import { SpotlightCard } from "../ui/SpotlightCard";

const PROJECT_TYPES = [
  "Full Stack Web App",
  "Mobile App",
  "AI / ML Integration",
  "DevOps & Deployment",
  "Internship / Job Opportunity",
];

function ContactFormInner() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get("service");

  const [selectedType, setSelectedType] = useState<string>(PROJECT_TYPES[0]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (serviceParam) {
      if (serviceParam === "full-stack") setSelectedType("Full Stack Web App");
      if (serviceParam === "mobile") setSelectedType("Mobile App");
      if (serviceParam === "ai-ml") setSelectedType("AI / ML Integration");
      if (serviceParam === "devops") setSelectedType("DevOps & Deployment");
    }
  }, [serviceParam]);

  const [error, setError] = useState<string | null>(null);

  // Set NEXT_PUBLIC_FORMSPREE_ID to send messages through Formspree.
  // Without it, the form opens the visitor's email client with the message pre-filled.
  const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

  const celebrate = () =>
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.7 },
      colors: ["#6C5CE7", "#22D3EE", "#34D399"],
    });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!formspreeId) {
      const subject = `[Portfolio] ${selectedType} — ${name}`;
      const body = `${message}\n\n— ${name} (${email})`;
      window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name, email, type: selectedType, message, _replyto: email }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setSubmitted(true);
      celebrate();
    } catch {
      setError(`The message could not be sent. Please email me directly at ${PERSONAL_INFO.email}.`);
    } finally {
      setSubmitting(false);
    }
  };

  return submitted ? (
    <div className="py-12 text-center flex flex-col items-center justify-center">
      <div className="w-16 h-16 rounded-full bg-accent-success/20 border border-accent-success/40 flex items-center justify-center mb-4 text-accent-success">
        <Check className="w-8 h-8" />
      </div>
      <h3 className="font-display text-2xl font-semibold text-text-primary mb-2">
        Message Sent!
      </h3>
      <p className="text-text-secondary text-sm max-w-md mx-auto mb-6">
        Thank you for reaching out, {name}. I will get back to you as soon as possible.
      </p>
      <button
        onClick={() => {
          setSubmitted(false);
          setName("");
          setEmail("");
          setMessage("");
        }}
        className="px-5 py-2.5 rounded-xl bg-bg-surface-2 border border-border-hairline text-text-primary text-xs font-mono hover:bg-bg-surface-2/80 transition-colors"
      >
        Send Another Inquiry
      </button>
    </div>
  ) : (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Project Type Selector Pills */}
      <div>
        <label className="block text-xs font-mono text-text-muted uppercase tracking-wider mb-3">
          Select Project Type
        </label>
        <div className="flex flex-wrap gap-2">
          {PROJECT_TYPES.map((type) => {
            const isSelected = selectedType === type;
            return (
              <button
                type="button"
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-3.5 py-2 rounded-lg font-mono text-xs transition-all duration-200 ${
                  isSelected
                    ? "bg-accent-gradient text-white shadow-md shadow-accent-primary/20 font-semibold"
                    : "bg-bg-surface-2 border border-border-hairline text-text-secondary hover:text-text-primary"
                }`}
              >
                {type}
              </button>
            );
          })}
        </div>
      </div>

      {/* Inputs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-mono text-text-muted uppercase tracking-wider mb-2">
            Your Name
          </label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Alex Vance"
            className="w-full px-4 py-3 rounded-xl bg-bg-base border border-border-hairline text-text-primary placeholder:text-text-muted text-sm focus:outline-none focus:border-accent-primary transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-mono text-text-muted uppercase tracking-wider mb-2">
            Email Address
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="alex@company.com"
            className="w-full px-4 py-3 rounded-xl bg-bg-base border border-border-hairline text-text-primary placeholder:text-text-muted text-sm focus:outline-none focus:border-accent-primary transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-mono text-text-muted uppercase tracking-wider mb-2">
          Project Details &amp; Scope
        </label>
        <textarea
          required
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Briefly describe your goals, expected timeline, and current tools..."
          className="w-full px-4 py-3 rounded-xl bg-bg-base border border-border-hairline text-text-primary placeholder:text-text-muted text-sm focus:outline-none focus:border-accent-primary transition-colors resize-none"
        />
      </div>

      {error && (
        <p role="alert" className="text-sm text-red-400">
          {error}
        </p>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={submitting}
        className="w-full py-4 rounded-xl bg-accent-gradient text-white font-medium text-base shadow-xl shadow-accent-primary/20 hover:shadow-accent-primary/35 transition-all flex items-center justify-center gap-2 group disabled:opacity-50"
      >
        {submitting ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            <span>Sending...</span>
          </>
        ) : (
          <>
            <span>Send Project Brief</span>
            <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </>
        )}
      </button>
    </form>
  );
}

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-border-hairline/60">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column */}
        <div className="lg:col-span-5 flex flex-col justify-between h-full">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-px w-4 bg-accent-primary/60" />
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-accent-secondary">
                // INITIATE CONTACT
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-semibold tracking-tight text-text-primary mb-6 leading-tight">
              Have a project or an opportunity?
            </h2>

            <p className="text-text-secondary text-base sm:text-lg leading-relaxed mb-8">
              Tell me what you&apos;re building or hiring for — I&apos;ll get back to you quickly.
            </p>

            <div className="space-y-4 mb-8">
              <div className="p-4 rounded-xl bg-bg-surface border border-border-hairline flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-bg-surface-2 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-accent-secondary" />
                  </div>
                  <div>
                    <div className="text-xs text-text-muted">Direct Email</div>
                    <div className="font-mono text-sm text-text-primary font-medium">{PERSONAL_INFO.email}</div>
                  </div>
                </div>

                <button
                  onClick={copyEmail}
                  className="px-3 py-1.5 rounded-lg bg-bg-surface-2 border border-border-hairline text-xs font-mono text-text-secondary hover:text-text-primary transition-colors flex items-center gap-1.5"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-accent-success" />
                      <span className="text-accent-success">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={PERSONAL_INFO.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-bg-surface border border-border-hairline flex items-center justify-between hover:border-accent-primary/40 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-bg-surface-2 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-accent-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-text-muted">Curriculum Vitae</div>
                    <div className="font-mono text-sm text-text-primary font-medium">Sabir_Essaad_CV.pdf</div>
                  </div>
                </div>
                <span className="text-xs font-mono text-accent-secondary group-hover:underline">
                  Download ↓
                </span>
              </a>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-bg-surface border border-border-hairline text-text-secondary hover:text-text-primary hover:border-accent-primary/40 transition-colors text-xs font-mono"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Profile</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-bg-surface border border-border-hairline text-text-secondary hover:text-text-primary hover:border-accent-primary/40 transition-colors text-xs font-mono"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Form with Suspense Boundary */}
        <div className="lg:col-span-7">
          <SpotlightCard className="p-6 sm:p-10 bg-bg-surface border-border-hairline">
            <Suspense fallback={<div className="p-8 text-center text-xs font-mono text-text-muted">Loading form...</div>}>
              <ContactFormInner />
            </Suspense>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}
