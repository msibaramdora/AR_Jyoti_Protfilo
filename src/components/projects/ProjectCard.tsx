import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

export default function ProjectCard({ project, priority = false }: ProjectCardProps) {
  return (
    <article className="group flex flex-col justify-between h-full bg-[#FCFAF7] border border-[#DDD7CD] transition-all duration-300 hover:border-[#252522]">
      {/* Clickable Image Container */}
      <Link
        href={`/projects/${project.slug}`}
        className="block relative overflow-hidden bg-[#E9E2D8] focus-visible:outline-hidden"
      >
        <div className="relative aspect-16/11 w-full overflow-hidden">
          <Image
            src={project.coverImage}
            alt={project.altText || project.title}
            fill
            priority={priority}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
        </div>

        {/* Category Badge */}
        <div className="absolute top-3 left-3 z-10">
          <span className="text-[10px] uppercase tracking-[0.2em] font-semibold bg-[#F7F5F0]/95 backdrop-blur-xs text-[#252522] px-2.5 py-1 border border-[#DDD7CD]">
            {project.category}
          </span>
        </div>

        {/* Award Badge if present */}
        {project.awards && project.awards.length > 0 && (
          <div className="absolute bottom-3 left-3 right-3 z-10 pointer-events-none">
            <span className="text-[9px] uppercase tracking-wider bg-[#252522]/90 backdrop-blur-xs text-[#F7F5F0] px-2 py-0.5 border border-[#3D3D38] inline-block truncate max-w-full">
              ★ {project.awards[0]}
            </span>
          </div>
        )}
      </Link>

      {/* Info & Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          {/* Metadata pill */}
          <div className="flex items-center space-x-2 text-[10px] uppercase tracking-wider text-[#77746D]">
            {project.location && <span>{project.location}</span>}
            {project.year && (
              <>
                <span className="text-[#DDD7CD]">•</span>
                <span>{project.year}</span>
              </>
            )}
          </div>

          {/* Title */}
          <h3 className="font-serif text-xl sm:text-2xl font-light text-[#252522] group-hover:text-black transition-colors leading-snug">
            <Link href={`/projects/${project.slug}`}>
              {project.title}
            </Link>
          </h3>

          {/* Short description */}
          <p className="text-xs text-[#77746D] line-clamp-2 leading-relaxed">
            {project.shortDescription}
          </p>
        </div>

        {/* Footer info: Softwares & View link */}
        <div className="pt-4 border-t border-[#E8E3DA] flex items-center justify-between">
          <div className="text-[10px] uppercase tracking-wider text-[#77746D] truncate max-w-[70%]">
            {project.softwares.slice(0, 3).join(", ")}
          </div>

          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center text-xs tracking-wider uppercase font-semibold text-[#252522] group-hover:text-black"
            aria-label={`View ${project.title}`}
          >
            <span>View</span>
            <ArrowUpRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
