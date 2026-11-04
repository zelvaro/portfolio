import Link from "next/link";
import { BLOG_POSTS } from "@/lib/data";

export function BlogPreview() {
  return (
    <ul className="divide-y divide-line border-y border-line">
      {BLOG_POSTS.map((post) => (
        <li key={post.slug}>
          <Link href={`/blog/${post.slug}`} className="group block py-7">
            <p className="text-sm text-subtle">
              {post.date}, {post.readTime}
            </p>
            <h3 className="mt-2 text-xl font-semibold tracking-tight transition-colors group-hover:text-accent sm:text-2xl">
              {post.title}
            </h3>
            <p className="mt-2 max-w-2xl leading-relaxed text-muted">{post.summary}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
