import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectGrid from "@/components/projects/ProjectGrid";
import { getAllProjects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore the complete architectural, interior design, and 3D visualization portfolio of Jyoti Sahu. Features national finalist projects, commercial hubs, eco-residences, and thesis research.",
};

export default function ProjectsPage() {
  const allProjects = getAllProjects();

  return (
    <div className="pt-32 pb-24 lg:pt-40 lg:pb-32 bg-[#F7F5F0] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
        {/* Page Header */}
        <div className="border-b border-[#DDD7CD] pb-10">
          <SectionHeading
            eyebrow="INDEX / SELECTED WORKS"
            title="Projects & Visualizations"
            description="An editorial collection spanning sustainable residential architecture, commercial retail hubs, waterfront convention centers, and photorealistic 3D renders."
          />
        </div>

        {/* Interactive Filterable Grid */}
        <ProjectGrid initialProjects={allProjects} />
      </div>
    </div>
  );
}
