import Link from "next/link";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import { BLOG_POSTS } from "@/lib/data";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

export default function BlogIndexPage() {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
      <SectionHeader
        eyebrow="// TECHNICAL WRITING"
        title="Articles, Architecture & Lessons"
        description="Engineering insights on building production-ready AI agents and system reliability."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {BLOG_POSTS.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
            <SpotlightCard className="p-8 bg-bg-surface border-border-hairline h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="font-mono text-xs uppercase tracking-wider px-2.5 py-0.5 rounded bg-bg-surface-2 border border-border-hairline text-accent-secondary">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-text-muted font-mono">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h2 className="font-display text-2xl font-semibold text-text-primary group-hover:text-accent-secondary transition-colors mb-3 leading-tight">
                  {post.title}
                </h2>

                <p className="text-text-secondary text-sm leading-relaxed mb-6">
                  {post.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-border-hairline/60 flex items-center justify-between text-xs text-text-muted">
                <div className="flex items-center gap-1.5 font-mono">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{post.date}</span>
                </div>
                <span className="inline-flex items-center gap-1 text-text-primary group-hover:text-accent-secondary font-medium transition-colors">
                  <span>Read Post</span>
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </SpotlightCard>
          </Link>
        ))}
      </div>
    </div>
  );
}
