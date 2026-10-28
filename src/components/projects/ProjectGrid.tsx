"use client";

import { useState, useMemo } from "react";
import { Project, ProjectCategory } from "@/types/project";
import ProjectCard from "./ProjectCard";
import ProjectFilters from "./ProjectFilters";
import { Sparkles } from "lucide-react";

interface ProjectGridProps {
  initialProjects: Project[];
}

const CATEGORIES: (ProjectCategory | "All")[] = [
  "All",
  "Architecture",
  "Interior Design",
  "3D Visualization",
];

export default function ProjectGrid({ initialProjects }: ProjectGridProps) {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | "All">("All");

  // Calculate counts for categories
  const counts = useMemo(() => {
    const res: Record<string, number> = {
      All: initialProjects.length,
    };
    initialProjects.forEach((p) => {
      res[p.category] = (res[p.category] || 0) + 1;
    });
    return res;
  }, [initialProjects]);

  // Filter projects
  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return initialProjects;
    return initialProjects.filter((p) => p.category === activeCategory);
  }, [initialProjects, activeCategory]);

  return (
    <div className="space-y-10">
      {/* Filters Bar */}
      <ProjectFilters
        categories={CATEGORIES}
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
        counts={counts}
      />

      {/* Grid of Projects */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              priority={index < 3}
            />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="py-24 text-center border border-dashed border-[#DDD7CD] bg-[#FCFAF7] p-8 space-y-4">
          <Sparkles className="w-8 h-8 text-[#77746D] mx-auto" />
          <h3 className="font-serif text-2xl font-light text-[#252522]">
            No projects found in this category
          </h3>
          <p className="text-sm text-[#77746D] max-w-md mx-auto">
            We are constantly expanding our architectural archive. Please check back soon or explore other disciplines.
          </p>
          <button
            type="button"
            onClick={() => setActiveCategory("All")}
            className="text-xs uppercase tracking-widest text-[#252522] underline pt-2"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}
