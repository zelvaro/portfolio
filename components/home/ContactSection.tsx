"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import confetti from "canvas-confetti";
import { Check, Copy } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/data";
import { Reveal } from "../ui/Reveal";

const PROJECT_TYPES = [
  "Internship or job",
  "Full stack web app",
  "Mobile app",
  "AI integration",
  "DevOps & deployment",
];

const SERVICE_TO_TYPE: Record<string, string> = {
  "full-stack": "Full stack web app",
  mobile: "Mobile app",
  "ai-ml": "AI integration",
  devops: "DevOps & deployment",
};

const inputClass =
  "w-full rounded-xl border border-line bg-bg px-4 py-3 text-base text-ink placeholder:text-subtle transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20";

function ContactForm() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get("service");

  const [selectedType, setSelectedType] = useState(PROJECT_TYPES[0]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Set NEXT_PUBLIC_FORMSPREE_ID to send messages through Formspree.
  // Without it, the form opens the visitor's email client with the message pre-filled.
  const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

  useEffect(() => {
    if (serviceParam && SERVICE_TO_TYPE[serviceParam]) setSelectedType(SERVICE_TO_TYPE[serviceParam]);
  }, [serviceParam]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!formspreeId) {
      const subject = `[Portfolio] ${selectedType}, from ${name}`;
      const body = `${message}\n\n${name} (${email})`;
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
      confetti({ particleCount: 70, spread: 60, origin: { y: 0.7 }, colors: ["#4F3FD6", "#988EF7", "#D69620"] });
    } catch {
      setError(`The message could not be sent. Email me directly at ${PERSONAL_INFO.email}.`);
    } finally {
      setSubmitting(false);
    }
  };

  const reset = () => {
    setSubmitted(false);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <AnimatePresence mode="wait" initial={false}>
      {submitted ? (
        <motion.div
          key="sent"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          className="flex flex-col items-center py-12 text-center"
          role="status"
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent-soft text-accent">
            <Check className="h-7 w-7" aria-hidden />
          </span>
          <h3 className="mt-5 text-2xl font-semibold tracking-tight">Message sent</h3>
          <p className="mt-2 max-w-sm text-muted">Thanks, {name}. I&apos;ll reply to {email} as soon as I can.</p>
          <button type="button" onClick={reset} className="btn-secondary mt-6">
            Write another message
          </button>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <fieldset>
            <legend className="mb-3 text-sm font-medium">What is it about?</legend>
            <div className="flex flex-wrap gap-2">
              {PROJECT_TYPES.map((type) => {
                const active = selectedType === type;
                return (
                  <button
                    type="button"
                    key={type}
                    aria-pressed={active}
                    onClick={() => setSelectedType(type)}
                    className={`rounded-full border px-3.5 py-2 text-sm font-medium transition-colors ${
                      active
                        ? "border-accent bg-accent text-on-accent"
                        : "border-line bg-bg text-muted hover:border-accent/60 hover:text-ink"
                    }`}
                  >
                    {type}
                  </button>
                );
              })}
            </div>
          </fieldset>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="contact-name" className="mb-2 block text-sm font-medium">
                Your name
              </label>
              <input
                id="contact-name"
                type="text"
                required
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="mb-2 block text-sm font-medium">
                Your email
              </label>
              <input
                id="contact-email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label htmlFor="contact-message" className="mb-2 block text-sm font-medium">
              Message
            </label>
            <textarea
              id="contact-message"
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="The role or project, the timeline, and anything I should know."
              className={`${inputClass} resize-none`}
            />
          </div>

          {error && (
            <p role="alert" className="text-sm font-medium text-red-600 dark:text-red-400">
              {error}
            </p>
          )}

          <button type="submit" disabled={submitting} className="btn-primary w-full py-3.5 text-base disabled:opacity-60">
            {submitting ? "Sending..." : "Send message"}
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${PERSONAL_INFO.email}`;
    }
  };

  return (
    <section id="contact" className="scroll-mt-20 border-t border-line py-20 sm:py-24">
      <div className="container-page grid items-start gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Let&apos;s talk</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Hiring for an internship or a junior role, or building something? Tell me about it and I&apos;ll get back
            to you quickly.
          </p>

          <dl className="mt-10 divide-y divide-line border-y border-line">
            <div className="flex items-center justify-between gap-4 py-4">
              <div className="min-w-0">
                <dt className="text-sm text-subtle">Email</dt>
                <dd className="truncate font-semibold">
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-accent">
                    {PERSONAL_INFO.email}
                  </a>
                </dd>
              </div>
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-line bg-surface px-3 py-1.5 text-sm font-medium text-muted transition-colors hover:text-ink"
              >
                {copied ? <Check className="h-4 w-4 text-accent" aria-hidden /> : <Copy className="h-4 w-4" aria-hidden />}
                <span aria-live="polite">{copied ? "Copied" : "Copy"}</span>
              </button>
            </div>
            <div className="py-4">
              <dt className="text-sm text-subtle">Resume</dt>
              <dd>
                <a href={PERSONAL_INFO.cvUrl} target="_blank" rel="noopener noreferrer" className="link">
                  Download CV (PDF)
                </a>
              </dd>
            </div>
            <div className="py-4">
              <dt className="text-sm text-subtle">Elsewhere</dt>
              <dd className="flex gap-6">
                <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="link">
                  GitHub
                </a>
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="link">
                  LinkedIn
                </a>
              </dd>
            </div>
          </dl>
        </Reveal>

        <Reveal delay={0.1} className="rounded-3xl border border-line bg-surface p-6 sm:p-8 lg:col-span-7">
          <Suspense fallback={<p className="py-12 text-center text-sm text-muted">Loading form...</p>}>
            <ContactForm />
          </Suspense>
        </Reveal>
      </div>
    </section>
  );
}
