"use client";

import Link from "next/link";
import { ArrowUpRight, Clock, Calendar } from "lucide-react";
import { BLOG_POSTS } from "@/lib/data";
import { SpotlightCard } from "../ui/SpotlightCard";
import { SectionHeader } from "../ui/SectionHeader";

export function BlogPreview() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-border-hairline/60">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
        <SectionHeader
          eyebrow="// WRITING & ARTICLES"
          title="Engineering Insights"
          description="Technical deep dives on production AI, resume parsing, and agent architectures."
          className="mb-0"
        />

        <Link
          href="/blog"
          className="mt-4 sm:mt-0 inline-flex items-center gap-2 text-sm font-semibold text-accent-secondary hover:underline self-start sm:self-auto"
        >
          <span>View all articles</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {BLOG_POSTS.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
            <SpotlightCard className="p-6 bg-bg-surface border-border-hairline h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded bg-bg-surface-2 border border-border-hairline text-accent-secondary">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] text-text-muted font-mono">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="font-display text-xl font-semibold text-text-primary group-hover:text-accent-secondary transition-colors mb-3 leading-snug">
                  {post.title}
                </h3>

                <p className="text-text-secondary text-sm leading-relaxed mb-6 line-clamp-3">
                  {post.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-border-hairline/60 flex items-center justify-between text-xs text-text-muted">
                <div className="flex items-center gap-1.5 font-mono">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{post.date}</span>
                </div>
                <span className="inline-flex items-center gap-1 text-text-primary group-hover:text-accent-secondary font-medium transition-colors">
                  <span>Read article</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </SpotlightCard>
          </Link>
        ))}
      </div>
    </section>
  );
}
