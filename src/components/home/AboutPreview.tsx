import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Award, GraduationCap, Building2 } from "lucide-react";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/data/site-config";

export default function AboutPreview() {
  return (
    <section className="py-20 lg:py-28 border-t border-[#DDD7CD] bg-[#F7F5F0]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Portrait & Studio Photo */}
          <div className="lg:col-span-5 relative">
            <div className="relative border border-[#DDD7CD] bg-[#E9E2D8] p-3 shadow-xs">
              <div className="relative aspect-4/5 w-full overflow-hidden">
                <Image
                  src="/images/profile/jyoti-portrait.jpg"
                  alt="Jyoti Sahu — Architect, Interior Designer and 3D Visualizer"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-top"
                />
              </div>

              {/* Caption */}
              <div className="pt-3 pb-1 px-1 flex items-center justify-between text-[11px] tracking-wider uppercase text-[#77746D]">
                <span className="font-medium text-[#252522]">Jyoti Sahu</span>
                <span>Architect & Visualizer</span>
              </div>
            </div>

            {/* Quick Badge */}
            <div className="absolute -bottom-6 -left-4 sm:left-4 bg-[#252522] text-[#F7F5F0] p-4 border border-[#3D3D38] shadow-lg max-w-[240px]">
              <div className="flex items-center space-x-2 text-[#D4C5B2] text-xs font-serif italic mb-1">
                <Award className="w-3.5 h-3.5 text-[#D4C5B2]" />
                <span>Award-Winning Work</span>
              </div>
              <p className="text-[11px] text-[#A39F97] leading-tight">
                Triple National Finalist in Transparence, Saint-Gobain & TASA.
              </p>
            </div>
          </div>

          {/* Right Column: Bio & Credentials */}
          <div className="lg:col-span-7 space-y-6 lg:pl-6">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#77746D] font-medium block">
              05 / ABOUT JYOTI
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#252522] leading-[1.15] tracking-tight">
              A Blend of Creativity, Functionality & Problem-Solving
            </h2>

            <p className="text-base text-[#77746D] leading-relaxed">
              {siteConfig.bioSummary}
            </p>

            <p className="text-sm text-[#77746D] leading-relaxed">
              With a degree from Piloo Mody College of Architecture, extensive hands-on experience under Architect Hafeez Contractor in Mumbai, and top national recognitions, I bridge the gap between architectural rigor and vivid 3D visualization.
            </p>

            {/* Credential highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#E8E3DA]">
              <div className="flex items-start space-x-3">
                <Building2 className="w-5 h-5 text-[#252522] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#252522]">
                    Architect Hafeez Contractor
                  </h4>
                  <p className="text-xs text-[#77746D]">
                    6-month internship in Fort, Mumbai on large-scale civic projects.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <GraduationCap className="w-5 h-5 text-[#252522] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#252522]">
                    Piloo Mody College of Arch.
                  </h4>
                  <p className="text-xs text-[#77746D]">
                    B.Arch Graduate with studio honors in thesis and competitions.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex items-center space-x-6">
              <Button href="/about" variant="primary" size="md">
                Read Full Biography & CV
              </Button>
              <Link
                href="/projects"
                className="text-xs tracking-wider uppercase font-medium text-[#252522] hover:underline inline-flex items-center"
              >
                <span>View Portfolio</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
