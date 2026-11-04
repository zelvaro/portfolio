import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { CustomCursor } from "@/components/ui/CustomCursor";

export const metadata: Metadata = {
  title: "Sabir Essaad — Full Stack & AI Developer",
  description:
    "Computer Science & Networks engineering student at EMSI and full stack developer. Web, mobile, and AI-powered applications.",
  keywords: [
    "Sabir Essaad",
    "AI Developer",
    "Full Stack Developer",
    "Generative AI",
    "EMSI",
    "React",
    "Spring Boot",
    "Marrakech",
  ],
  authors: [{ name: "Sabir Essaad" }],
  openGraph: {
    title: "Sabir Essaad — Full Stack & AI Developer",
    description: "Web, mobile, and AI-powered applications.",
    type: "website",
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
