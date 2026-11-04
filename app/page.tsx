import { Hero } from "@/components/home/Hero";
import { ProjectsGrid } from "@/components/home/ProjectsGrid";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { TechStackGrid } from "@/components/home/TechStackGrid";
import { TimelineSection } from "@/components/home/TimelineSection";
import { BlogPreview } from "@/components/home/BlogPreview";
import { ContactSection } from "@/components/home/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ProjectsGrid />
      <ServicesGrid />
      <TechStackGrid />
      <TimelineSection />
      <BlogPreview />
      <ContactSection />
    </>
  );
}
