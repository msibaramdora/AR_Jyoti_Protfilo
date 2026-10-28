import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { getFeaturedProjects } from "@/data/projects";

export default function FeaturedProjects() {
  const featured = getFeaturedProjects().slice(0, 6);

  return (
    <section id="selected-works" className="py-20 lg:py-28 border-t border-[#DDD7CD] bg-[#F7F5F0]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 lg:pb-16 border-b border-[#DDD7CD]">
          <SectionHeading
            eyebrow="01 / SELECTED WORKS"
            title="Curated Architecture & Visualizations"
            description="A selection of academic studios, national competition finalists, and professional internship projects exploring light, materiality, and context."
          />
          <div className="shrink-0">
            <Button href="/projects" variant="secondary" size="md">
              View All Projects ({featured.length}+)
            </Button>
          </div>
        </div>

        {/* Editorial Grid: Asymmetrical Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 pt-12">
          {featured.map((project, index) => {
            // Editorial layout composition: alternation between wide and tall spans
            const isWide = index === 0 || index === 3;
            const colSpan = isWide ? "md:col-span-7" : "md:col-span-5";

            return (
              <article
                key={project.slug}
                className={`${colSpan} group flex flex-col justify-between`}
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="block relative overflow-hidden bg-[#E9E2D8] border border-[#DDD7CD] focus-visible:outline-hidden"
                >
                  <div
                    className={`relative w-full overflow-hidden ${
                      isWide ? "aspect-16/10" : "aspect-4/3 sm:aspect-1/1"
                    }`}
                  >
                    <Image
                      src={project.coverImage}
                      alt={project.altText || project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
                  </div>

                  {/* Corner Category Tag */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-semibold bg-[#F7F5F0]/90 backdrop-blur-xs text-[#252522] px-3 py-1 border border-[#DDD7CD]">
                      {project.category}
                    </span>
                  </div>
                </Link>

                {/* Metadata & Title Block */}
                <div className="pt-4 flex items-start justify-between">
                  <div className="space-y-1 pr-4">
                    <div className="flex items-center space-x-2 text-[11px] uppercase tracking-wider text-[#77746D]">
                      {project.location && <span>{project.location}</span>}
                      {project.year && (
                        <>
                          <span className="text-[#DDD7CD]">•</span>
                          <span>{project.year}</span>
                        </>
                      )}
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl font-light text-[#252522] group-hover:text-black transition-colors">
                      <Link href={`/projects/${project.slug}`}>
                        {project.title}
                      </Link>
                    </h3>

                    {project.subtitle && (
                      <p className="text-xs text-[#77746D] line-clamp-1 font-light">
                        {project.subtitle}
                      </p>
                    )}
                  </div>

                  <Link
                    href={`/projects/${project.slug}`}
                    className="shrink-0 mt-1 p-2 text-[#77746D] group-hover:text-[#252522] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                    aria-label={`View details for ${project.title}`}
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA Strip */}
        <div className="mt-16 pt-8 border-t border-[#DDD7CD] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-sm text-[#77746D]">
            Interested in viewing working drawings, floor plans, and technical details?
          </p>
          <Button href="/projects" variant="primary" size="sm">
            Browse Full Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
}
