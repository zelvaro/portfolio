import { Hero } from "@/components/home/Hero";
import { FlagshipShowcase } from "@/components/home/FlagshipShowcase";
import { ComingSoonGrid } from "@/components/home/ComingSoonGrid";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { TechStackGrid } from "@/components/home/TechStackGrid";
import { TimelineSection } from "@/components/home/TimelineSection";
import { BlogPreview } from "@/components/home/BlogPreview";
import { ContactSection } from "@/components/home/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <FlagshipShowcase />
      <ComingSoonGrid />
      <ServicesGrid />
      <TechStackGrid />
      <TimelineSection />
      <BlogPreview />
      <ContactSection />
    </>
  );
}
