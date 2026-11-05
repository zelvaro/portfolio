import { Hero } from "@/components/home/Hero";
import { AboutBento } from "@/components/home/AboutBento";
import { ProjectBento } from "@/components/home/ProjectBento";
import { StackOrbit } from "@/components/home/StackOrbit";
import { ContactSection } from "@/components/home/ContactSection";
import { Section } from "@/components/ui/Section";
import { findPublicImage } from "@/lib/assets";

export default function Home() {
  const avatar = findPublicImage("avatar");

  return (
    <>
      <Hero avatarSrc={avatar} />
      <Section id="about" title="About me">
        <AboutBento avatarSrc={avatar} />
      </Section>
      <Section
        id="work"
        title="Projects"
        intro="Internship and academic projects across web, mobile and AI."
        action={{ href: "/work", label: "Project details" }}
      >
        <ProjectBento />
      </Section>
      <section id="stack" className="relative overflow-hidden border-t border-line py-20 sm:py-24">
        <div className="container-page">
          <StackOrbit />
        </div>
      </section>
      <ContactSection />
    </>
  );
}
