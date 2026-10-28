import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Award } from "lucide-react";
import { getAllProjects, getProjectBySlug, getAdjacentProjects } from "@/data/projects";
import ProjectGallery from "@/components/projects/ProjectGallery";
import Button from "@/components/ui/Button";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const allProjects = getAllProjects();
  return allProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} — Jyoti Sahu`,
    description: project.shortDescription,
    openGraph: {
      title: `${project.title} | Jyoti Sahu Architecture`,
      description: project.shortDescription,
      images: [
        {
          url: project.coverImage,
          width: 1200,
          height: 630,
          alt: project.altText,
        },
      ],
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { prev, next } = getAdjacentProjects(slug);

  return (
    <article className="pt-28 lg:pt-36 pb-24 bg-[#F7F5F0] min-h-screen">
      {/* Top Breadcrumb & Back Link */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-8">
        <Link
          href="/projects"
          className="inline-flex items-center text-xs uppercase tracking-[0.18em] text-[#77746D] hover:text-[#252522] transition-colors group"
        >
          <ArrowLeft className="w-3.5 h-3.5 mr-2 transition-transform group-hover:-translate-x-1" />
          <span>Back to All Projects</span>
        </Link>
      </div>

      {/* Project Header & Metadata */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-12 lg:mb-16">
        <div className="border-b border-[#DDD7CD] pb-10 space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold bg-[#252522] text-[#F7F5F0] px-3 py-1">
              {project.category}
            </span>
            {project.status && (
              <span className="text-xs uppercase tracking-wider text-[#77746D] border border-[#DDD7CD] px-3 py-1 bg-[#FCFAF7]">
                {project.status}
              </span>
            )}
            {project.awards && project.awards.length > 0 && (
              <span className="text-xs uppercase tracking-wider text-[#252522] border border-[#D4C5B2] px-3 py-1 bg-[#E9E2D8] flex items-center font-medium">
                <Award className="w-3.5 h-3.5 mr-1.5 text-[#252522]" />
                {project.awards[0]}
              </span>
            )}
          </div>

          <div className="space-y-2">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#252522] leading-[1.1] tracking-tight">
              {project.title}
            </h1>
            {project.subtitle && (
              <p className="text-lg sm:text-xl font-serif italic text-[#77746D]">
                {project.subtitle}
              </p>
            )}
          </div>

          <p className="text-base sm:text-lg text-[#77746D] max-w-3xl leading-relaxed">
            {project.shortDescription}
          </p>

          {/* Project Spec Strip */}
          <div className="pt-6 border-t border-[#E8E3DA] grid grid-cols-2 sm:grid-cols-4 gap-6 text-xs">
            {project.location && (
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#77746D] block mb-1">
                  Location
                </span>
                <span className="font-medium text-[#252522]">{project.location}</span>
              </div>
            )}
            {project.year && (
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#77746D] block mb-1">
                  Year
                </span>
                <span className="font-medium text-[#252522]">{project.year}</span>
              </div>
            )}
            {project.area && (
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#77746D] block mb-1">
                  Scope / Area
                </span>
                <span className="font-medium text-[#252522]">{project.area}</span>
              </div>
            )}
            {project.context && (
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#77746D] block mb-1">
                  Context / Studio
                </span>
                <span className="font-medium text-[#252522]">{project.context}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Hero Visual */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-16 lg:mb-24">
        <div className="relative aspect-16/10 sm:aspect-21/10 w-full overflow-hidden border border-[#DDD7CD] shadow-sm bg-[#E9E2D8]">
          <Image
            src={project.coverImage}
            alt={project.altText}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="pt-3 flex items-center justify-between text-xs text-[#77746D]">
          <span>{project.altText}</span>
          <span className="text-[10px] uppercase tracking-widest text-[#A39F97]">
            3D Photorealistic Architectural Visualization
          </span>
        </div>
      </div>

      {/* Concept & Architectural Intent Narrative */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-16 lg:mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4 space-y-4">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#77746D] font-semibold block">
              Concept & Intent
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#252522] leading-tight">
              Spatial Storytelling & Environmental Form
            </h2>
            <div className="pt-4 space-y-2">
              <span className="text-[10px] uppercase tracking-widest text-[#77746D] block font-semibold">
                Software & Tools
              </span>
              <div className="flex flex-wrap gap-1.5">
                {project.softwares.map((sw) => (
                  <span
                    key={sw}
                    className="text-[11px] bg-[#FCFAF7] border border-[#DDD7CD] px-2.5 py-1 text-[#252522]"
                  >
                    {sw}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-6 text-[#77746D] leading-relaxed">
            <p className="text-lg font-light text-[#252522] leading-relaxed">
              {project.concept}
            </p>

            {project.designApproach && project.designApproach.length > 0 && (
              <div className="pt-6 border-t border-[#DDD7CD] space-y-4">
                <h3 className="text-xs uppercase tracking-widest text-[#252522] font-semibold">
                  Design & Spatial Strategies
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.designApproach.map((item, idx) => (
                    <li
                      key={idx}
                      className="bg-[#FCFAF7] border border-[#E8E3DA] p-4 text-xs text-[#77746D] flex items-start space-x-3"
                    >
                      <span className="font-serif text-sm font-semibold text-[#252522] shrink-0">
                        0{idx + 1}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.materialsAndLighting && (
              <div className="pt-6 border-t border-[#DDD7CD] bg-[#FCFAF7] p-6 border border-[#DDD7CD]">
                <h3 className="text-xs uppercase tracking-widest text-[#252522] font-semibold mb-2">
                  Materials, Tactility & Illumination
                </h3>
                <p className="text-xs sm:text-sm text-[#77746D] leading-relaxed">
                  {project.materialsAndLighting}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Gallery & Drawings */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-20 lg:mb-28">
        <div className="border-t border-[#DDD7CD] pt-12 mb-10 flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#77746D] font-semibold block">
              Drawings & Visuals
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-light text-[#252522]">
              Case Study Gallery ({project.gallery.length} Plates)
            </h2>
          </div>
          <span className="text-xs text-[#77746D] hidden sm:block">
            Click any image to inspect in full resolution
          </span>
        </div>

        <ProjectGallery gallery={project.gallery} />
      </div>

      {/* Navigation Between Projects */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 border-t border-[#DDD7CD] pt-12 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {prev ? (
            <Link
              href={`/projects/${prev.slug}`}
              className="p-6 bg-[#FCFAF7] border border-[#DDD7CD] hover:border-[#252522] transition-colors group space-y-2 block"
            >
              <div className="flex items-center space-x-2 text-[10px] uppercase tracking-widest text-[#77746D]">
                <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
                <span>Previous Project</span>
              </div>
              <h4 className="font-serif text-xl font-light text-[#252522] group-hover:text-black">
                {prev.title}
              </h4>
              <span className="text-[11px] text-[#77746D] block">{prev.category}</span>
            </Link>
          ) : (
            <div />
          )}

          {next ? (
            <Link
              href={`/projects/${next.slug}`}
              className="p-6 bg-[#FCFAF7] border border-[#DDD7CD] hover:border-[#252522] transition-colors group space-y-2 text-right block"
            >
              <div className="flex items-center justify-end space-x-2 text-[10px] uppercase tracking-widest text-[#77746D]">
                <span>Next Project</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </div>
              <h4 className="font-serif text-xl font-light text-[#252522] group-hover:text-black">
                {next.title}
              </h4>
              <span className="text-[11px] text-[#77746D] block">{next.category}</span>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>

      {/* Contact Prompt */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center pt-8">
        <div className="bg-[#252522] text-[#F7F5F0] p-10 sm:p-12 border border-[#33332E] space-y-4">
          <h3 className="font-serif text-2xl sm:text-3xl font-light">
            Interested in collaborating on a similar architectural challenge?
          </h3>
          <p className="text-xs sm:text-sm text-[#A39F97] max-w-md mx-auto">
            Discuss design concepts, municipal drawings, or high-fidelity 3D visualization.
          </p>
          <div className="pt-2">
            <Button
              href="/contact"
              size="md"
              className="bg-[#F7F5F0] text-[#252522] hover:bg-[#FAF8F5] border-[#F7F5F0]"
            >
              Request a Consultation
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
