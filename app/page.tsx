import { Hero } from "@/components/home/Hero";
import { ExperienceCards } from "@/components/home/ExperienceCards";
import { StackOrbit } from "@/components/home/StackOrbit";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { ContactSection } from "@/components/home/ContactSection";
import { Section } from "@/components/ui/Section";

export default function Home() {
  return (
    <>
      <Hero />
      <Section id="experience" title="Work experience">
        <ExperienceCards />
      </Section>
      <section id="stack" className="relative py-20 sm:py-24">
        <div className="container-page">
          <StackOrbit />
        </div>
      </section>
      <Section id="work" title="Projects" intro="A selection of internship and academic projects.">
        <FeaturedProjects />
      </Section>
      <ContactSection />
    </>
  );
}
