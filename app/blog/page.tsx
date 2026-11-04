import type { Metadata } from "next";
import { BlogPreview } from "@/components/home/BlogPreview";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata: Metadata = { title: "Writing — Sabir Essaad" };

export default function BlogPage() {
  return (
    <>
      <PageHeader title="Writing" intro="Notes on building software and taking AI from prototype to production." />
      <div className="container-page pb-24">
        <BlogPreview />
      </div>
    </>
  );
}
