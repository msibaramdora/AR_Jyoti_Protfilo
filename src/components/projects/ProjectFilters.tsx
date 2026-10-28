"use client";

import { ProjectCategory } from "@/types/project";

interface ProjectFiltersProps {
  categories: (ProjectCategory | "All")[];
  activeCategory: ProjectCategory | "All";
  onSelectCategory: (category: ProjectCategory | "All") => void;
  counts: Record<string, number>;
}

export default function ProjectFilters({
  categories,
  activeCategory,
  onSelectCategory,
  counts,
}: ProjectFiltersProps) {
  return (
    <div className="flex flex-wrap items-center gap-2 sm:gap-3 py-4 border-b border-[#DDD7CD]">
      {categories.map((category) => {
        const isActive = activeCategory === category;
        const count = counts[category] || 0;

        return (
          <button
            key={category}
            type="button"
            onClick={() => onSelectCategory(category)}
            className={`text-xs uppercase tracking-[0.15em] px-4 py-2 transition-all duration-200 border focus-visible:outline-hidden ${
              isActive
                ? "bg-[#252522] text-[#F7F5F0] border-[#252522] font-semibold"
                : "bg-transparent text-[#77746D] border-[#DDD7CD] hover:border-[#252522] hover:text-[#252522]"
            }`}
            aria-pressed={isActive}
          >
            <span>{category}</span>
            <span
              className={`ml-2 text-[10px] ${
                isActive ? "text-[#D4C5B2]" : "text-[#A39F97]"
              }`}
            >
              ({count})
            </span>
          </button>
        );
      })}
    </div>
  );
}
