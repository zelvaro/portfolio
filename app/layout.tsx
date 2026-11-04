import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { CustomCursor } from "@/components/ui/CustomCursor";

export const metadata: Metadata = {
  title: "Sabir Essaad — AI Engineer & Full Stack Developer",
  description:
    "I don't build websites. I build intelligent software. AI Engineer & Full Stack Developer specializing in agentic systems, n8n automation, and Next.js applications.",
  keywords: [
    "Sabir Essaad",
    "AI Engineer",
    "Full Stack Developer",
    "Agentic Systems",
    "n8n Workflows",
    "Postule.ma",
    "Next.js Developer",
    "Morocco AI Engineer",
  ],
  authors: [{ name: "Sabir Essaad" }],
  openGraph: {
    title: "Sabir Essaad — AI Engineer & Full Stack Developer",
    description: "Building AI products that replace manual work.",
    type: "website",
    url: "https://essaad.ai",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-bg-base text-text-primary antialiased selection:bg-accent-primary/30 selection:text-white">
        <ScrollProgress />
        <CustomCursor />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
