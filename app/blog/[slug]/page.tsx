import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { BLOG_POSTS, PERSONAL_INFO } from "@/lib/data";

interface BlogSlugProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: BlogSlugProps): Metadata {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  return post ? { title: `${post.title} — ${PERSONAL_INFO.name}`, description: post.summary } : {};
}

// Renders **bold** segments inside a line of text
function renderInline(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i} className="font-semibold text-ink">
        {part.slice(2, -2)}
      </strong>
    ) : (
      part
    )
  );
}

function renderBlock(block: string, index: number) {
  if (block.startsWith("### ")) {
    return (
      <h3 key={index} className="mt-8 text-xl font-semibold tracking-tight text-ink">
        {block.slice(4)}
      </h3>
    );
  }
  if (block.startsWith("## ")) {
    return (
      <h2 key={index} className="mt-10 text-2xl font-semibold tracking-tight text-ink">
        {block.slice(3)}
      </h2>
    );
  }
  if (block.startsWith("# ")) return null; // The article title is already shown above
  if (block.startsWith("```")) {
    const code = block.split("\n").slice(1, -1).join("\n");
    return (
      <pre key={index} className="overflow-x-auto rounded-2xl border border-line bg-surface p-4 text-sm">
        <code>{code}</code>
      </pre>
    );
  }
  const lines = block.split("\n");
  if (lines.every((l) => /^\d+\.\s/.test(l))) {
    return (
      <ol key={index} className="list-decimal space-y-3 pl-6 marker:text-subtle">
        {lines.map((l, i) => (
          <li key={i}>{renderInline(l.replace(/^\d+\.\s/, ""))}</li>
        ))}
      </ol>
    );
  }
  if (lines.every((l) => /^[-*]\s/.test(l))) {
    return (
      <ul key={index} className="list-disc space-y-3 pl-6 marker:text-subtle">
        {lines.map((l, i) => (
          <li key={i}>{renderInline(l.replace(/^[-*]\s/, ""))}</li>
        ))}
      </ul>
    );
  }
  return <p key={index}>{renderInline(block)}</p>;
}

export default function BlogPostPage({ params }: BlogSlugProps) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <article className="container-page max-w-3xl pb-24 pt-32 sm:pt-40">
      <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-ink">
        <ArrowLeft className="h-4 w-4" aria-hidden />
        All articles
      </Link>

      <header className="mt-8 border-b border-line pb-8">
        <p className="text-sm text-subtle">
          {post.category}, {post.date}, {post.readTime}
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">{post.title}</h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">{post.summary}</p>
        <p className="mt-6 text-sm text-muted">
          By <span className="font-semibold text-ink">{PERSONAL_INFO.name}</span>
        </p>
      </header>

      <div className="mt-10 space-y-6 text-lg leading-relaxed text-muted">
        {post.content.trim().split("\n\n").map(renderBlock)}
      </div>
    </article>
  );
}
