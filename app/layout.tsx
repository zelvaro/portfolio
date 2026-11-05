import type { Metadata, Viewport } from "next";
import { Manrope, Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { MotionProvider } from "@/components/ui/MotionProvider";

const display = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sabir Essaad — Full Stack & AI Developer",
  description:
    "Computer Science & Networks engineering student at EMSI and full stack developer. Web, mobile, and AI-powered applications.",
  keywords: [
    "Sabir Essaad",
    "Full Stack Developer",
    "AI Developer",
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

export const viewport: Viewport = {
  themeColor: "#04183B",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="min-h-screen">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-on-accent"
        >
          Skip to content
        </a>
        <MotionProvider>
          <ScrollProgress />
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
