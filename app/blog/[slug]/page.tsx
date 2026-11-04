import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import { BLOG_POSTS, PERSONAL_INFO } from "@/lib/data";

interface BlogSlugProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: BlogSlugProps) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto min-h-screen">
      {/* Back Link */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-xs font-mono text-text-muted hover:text-accent-secondary mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to all articles</span>
      </Link>

      {/* Article Header */}
      <div className="mb-10 pb-8 border-b border-border-hairline">
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs uppercase tracking-wider px-3 py-1 rounded bg-bg-surface-2 border border-border-hairline text-accent-secondary">
            {post.category}
          </span>
          <span className="text-text-muted text-xs">•</span>
          <div className="flex items-center gap-1.5 text-xs text-text-muted font-mono">
            <Clock className="w-3.5 h-3.5 text-accent-secondary" />
            <span>{post.readTime}</span>
          </div>
          <span className="text-text-muted text-xs">•</span>
          <div className="flex items-center gap-1.5 text-xs text-text-muted font-mono">
            <Calendar className="w-3.5 h-3.5" />
            <span>{post.date}</span>
          </div>
        </div>

        <h1 className="font-display text-3xl sm:text-5xl font-semibold text-text-primary tracking-tight leading-tight mb-4">
          {post.title}
        </h1>

        <p className="text-lg text-text-secondary leading-relaxed">
          {post.summary}
        </p>

        {/* Author info bar */}
        <div className="mt-6 pt-6 border-t border-border-hairline/50 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-accent-gradient p-px">
              <div className="w-full h-full rounded-full bg-bg-surface flex items-center justify-center font-mono font-bold text-xs text-accent-secondary">
                SE
              </div>
            </div>
            <div>
              <div className="text-sm font-semibold text-text-primary">{PERSONAL_INFO.name}</div>
              <div className="text-xs text-text-muted font-mono">{PERSONAL_INFO.title}</div>
            </div>
          </div>

          <Link
            href="/contact"
            className="text-xs font-mono text-accent-secondary hover:underline"
          >
            Inquire project →
          </Link>
        </div>
      </div>

      {/* Article Body */}
      <div className="prose prose-invert max-w-none space-y-6 text-text-secondary text-base leading-relaxed font-normal">
        {post.content.split("\n\n").map((paragraph, index) => {
          if (paragraph.startsWith("# ")) {
            return (
              <h1 key={index} className="font-display text-3xl font-semibold text-text-primary mt-8 mb-4">
                {paragraph.replace("# ", "")}
              </h1>
            );
          }
          if (paragraph.startsWith("## ")) {
            return (
              <h2 key={index} className="font-display text-2xl font-semibold text-text-primary mt-8 mb-4">
                {paragraph.replace("## ", "")}
              </h2>
            );
          }
          if (paragraph.startsWith("### ")) {
            return (
              <h3 key={index} className="font-display text-xl font-semibold text-text-primary mt-6 mb-3">
                {paragraph.replace("### ", "")}
              </h3>
            );
          }
          if (paragraph.startsWith("```")) {
            const lines = paragraph.split("\n");
            const code = lines.slice(1, -1).join("\n");
            return (
              <pre key={index} className="p-4 rounded-xl bg-bg-surface border border-border-hairline font-mono text-xs overflow-x-auto text-accent-secondary my-6">
                <code>{code}</code>
              </pre>
            );
          }
          return <p key={index}>{paragraph}</p>;
        })}
      </div>
    </article>
  );
}
