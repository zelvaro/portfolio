import { Hero } from "@/components/home/Hero";
import { ProjectsGrid } from "@/components/home/ProjectsGrid";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { TechStackGrid } from "@/components/home/TechStackGrid";
import { Timeline } from "@/components/home/TimelineSection";
import { BlogPreview } from "@/components/home/BlogPreview";
import { ContactSection } from "@/components/home/ContactSection";
import { Section } from "@/components/ui/Section";

export default function Home() {
  return (
    <>
      <Hero />
      <Section
        id="work"
        title="Selected projects"
        intro="Internship and academic projects across web, mobile and AI. Open a project to see what it does and how it was built."
        action={{ href: "/work", label: "All projects" }}
      >
        <ProjectsGrid limit={5} />
      </Section>
      <Section id="experience" title="Experience and education">
        <Timeline />
      </Section>
      <Section id="stack" title="Tech stack" intro="The tools I use most, each one tied to a real project.">
        <TechStackGrid />
      </Section>
      <Section id="services" title="What I can build" action={{ href: "/services", label: "Service details" }}>
        <ServicesGrid />
      </Section>
      <Section id="blog" title="Writing" action={{ href: "/blog", label: "All articles" }}>
        <BlogPreview />
      </Section>
      <ContactSection />
    </>
  );
}
