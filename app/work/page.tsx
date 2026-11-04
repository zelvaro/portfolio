import type { Metadata } from "next";
import { ProjectsGrid } from "@/components/home/ProjectsGrid";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata: Metadata = { title: "Projects — Sabir Essaad" };

export default function WorkPage() {
  return (
    <>
      <PageHeader
        title="Projects"
        intro="Web, mobile and AI applications built during internships and at EMSI. Filter by type and open a project for details."
      />
      <div className="container-page pb-24">
        <ProjectsGrid showFilter />
      </div>
    </>
  );
}
