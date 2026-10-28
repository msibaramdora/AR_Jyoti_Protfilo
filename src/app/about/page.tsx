import type { Metadata } from "next";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import {
  siteConfig,
  educationList,
  experienceList,
  achievementsList,
  softwareSkills,
  architecturalCompetencies,
} from "@/data/site-config";

export const metadata: Metadata = {
  title: "About",
  description:
    "Biography, architectural background, academic credentials, and software proficiencies of Jyoti Sahu — B.Arch graduate from Piloo Mody College and former intern at Architect Hafeez Contractor.",
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 lg:pt-40 lg:pb-32 bg-[#F7F5F0] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16 lg:space-y-24">
        {/* Page Header */}
        <div className="border-b border-[#DDD7CD] pb-10">
          <SectionHeading
            eyebrow="PROFILE / ARCHITECT & VISUALIZER"
            title="Jyoti Sahu"
            description="Bridging spatial design, physical materiality, and cinematic 3D architectural visualization."
          />
        </div>

        {/* Hero Bio Grid: Portrait + Biography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Portrait & Metadata Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="border border-[#DDD7CD] bg-[#E9E2D8] p-3 shadow-xs">
              <div className="relative aspect-4/5 w-full overflow-hidden">
                <Image
                  src="/images/profile/jyoti-portrait.jpg"
                  alt="Jyoti Sahu — Architect & 3D Visualizer"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-top"
                />
              </div>
              <div className="pt-3 pb-1 px-1 flex items-center justify-between text-[11px] tracking-wider uppercase text-[#77746D]">
                <span className="font-medium text-[#252522]">Jyoti Sahu</span>
                <span>Dombivli / Mumbai, India</span>
              </div>
            </div>

            {/* Quick Contact & Download Bar */}
            <div className="bg-[#FCFAF7] border border-[#DDD7CD] p-6 space-y-4">
              <span className="text-[10px] uppercase tracking-widest text-[#77746D] font-semibold block">
                Professional Details
              </span>
              <ul className="text-xs space-y-2.5 text-[#77746D]">
                <li className="flex justify-between border-b border-[#E8E3DA] pb-2">
                  <span>Degree</span>
                  <span className="font-medium text-[#252522]">B.Arch (2021–2026)</span>
                </li>
                <li className="flex justify-between border-b border-[#E8E3DA] pb-2">
                  <span>Institution</span>
                  <span className="font-medium text-[#252522]">Piloo Mody College of Arch.</span>
                </li>
                <li className="flex justify-between border-b border-[#E8E3DA] pb-2">
                  <span>Internship</span>
                  <span className="font-medium text-[#252522]">Architect Hafeez Contractor</span>
                </li>
                <li className="flex justify-between">
                  <span>Languages</span>
                  <span className="font-medium text-[#252522]">English, Hindi, Marathi, Odia</span>
                </li>
              </ul>

              <div className="pt-2">
                <Button
                  href="/contact"
                  size="sm"
                  variant="primary"
                  className="w-full text-center"
                >
                  Get in Touch
                </Button>
              </div>
            </div>
          </div>

          {/* Biography Content Column */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#77746D] font-semibold block">
                Biography
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#252522] leading-tight">
                “I’m interested in the delicate relationship between space, material, light, and human experience.”
              </h2>
            </div>

            <div className="space-y-4 text-base text-[#77746D] leading-relaxed">
              {siteConfig.fullBio.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Philosophy Callout */}
            <div className="p-6 bg-[#FCFAF7] border-l-2 border-[#252522] border-y border-r border-[#DDD7CD] space-y-2">
              <span className="text-[10px] uppercase tracking-widest text-[#77746D] font-semibold block">
                Design Philosophy
              </span>
              <p className="font-serif text-xl font-light text-[#252522] italic">
                “{siteConfig.philosophyQuote}”
              </p>
            </div>

            {/* Core Competencies Grid */}
            <div className="pt-4 space-y-4">
              <h3 className="text-xs uppercase tracking-widest text-[#252522] font-semibold">
                Architectural Competencies
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {architecturalCompetencies.map((comp, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-[#FCFAF7] border border-[#DDD7CD] space-y-1"
                  >
                    <h4 className="font-medium text-xs text-[#252522]">
                      {comp.title}
                    </h4>
                    <p className="text-[11px] text-[#77746D] leading-relaxed">
                      {comp.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Professional Experience Section */}
        <div className="border-t border-[#DDD7CD] pt-16 space-y-10">
          <div className="space-y-2">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#77746D] font-semibold block">
              Experience & Practice
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#252522]">
              Professional Experience
            </h2>
          </div>

          <div className="space-y-8">
            {experienceList.map((exp, idx) => (
              <div
                key={idx}
                className="bg-[#FCFAF7] border border-[#DDD7CD] p-8 lg:p-10 space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#E8E3DA] pb-4">
                  <div>
                    <h3 className="font-serif text-2xl font-light text-[#252522]">
                      {exp.role}
                    </h3>
                    <p className="text-xs uppercase tracking-wider text-[#77746D]">
                      {exp.company} · {exp.location}
                    </p>
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#252522] bg-[#E9E2D8] px-3 py-1 border border-[#DDD7CD] w-fit">
                    {exp.period}
                  </span>
                </div>

                <p className="text-sm text-[#77746D] leading-relaxed">
                  {exp.description}
                </p>

                <div className="space-y-2">
                  <span className="text-[10px] uppercase tracking-widest text-[#252522] font-semibold block">
                    Key Responsibilities & Deliverables
                  </span>
                  <ul className="space-y-2">
                    {exp.keyContributions.map((contrib, cIdx) => (
                      <li
                        key={cIdx}
                        className="text-xs text-[#77746D] flex items-start space-x-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#252522] mt-1.5 shrink-0" />
                        <span>{contrib}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Competitions & Achievements */}
        <div className="border-t border-[#DDD7CD] pt-16 space-y-10">
          <div className="space-y-2">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#77746D] font-semibold block">
              Recognitions
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#252522]">
              Competitions & Honors
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {achievementsList.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#FCFAF7] border border-[#DDD7CD] p-6 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-[#77746D]">
                    <span>{item.competition}</span>
                    <span className="font-semibold text-[#252522]">{item.year}</span>
                  </div>
                  <h3 className="font-serif text-xl font-light text-[#252522]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#77746D] leading-relaxed">
                    {item.highlight}
                  </p>
                </div>
                <div className="pt-3 border-t border-[#E8E3DA] text-[10px] uppercase tracking-widest text-[#A39F97]">
                  Organizer: {item.organizer}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Timeline */}
        <div className="border-t border-[#DDD7CD] pt-16 space-y-10">
          <div className="space-y-2">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#77746D] font-semibold block">
              Academic Background
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#252522]">
              Education & Training
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {educationList.map((edu, idx) => (
              <div
                key={idx}
                className="bg-[#FCFAF7] border border-[#DDD7CD] p-6 space-y-3"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-[#77746D] block">
                  {edu.period}
                </span>
                <h3 className="font-serif text-xl font-light text-[#252522]">
                  {edu.degree}
                </h3>
                <p className="text-xs text-[#77746D]">
                  {edu.institution}
                </p>
                <span className="text-[11px] text-[#A39F97] block">
                  {edu.location}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Software & Technical Skills */}
        <div className="border-t border-[#DDD7CD] pt-16 space-y-10">
          <div className="space-y-2">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#77746D] font-semibold block">
              Digital Toolkit
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#252522]">
              Verified Software & Technologies
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {softwareSkills.map((cat, idx) => (
              <div
                key={idx}
                className="bg-[#FCFAF7] border border-[#DDD7CD] p-6 space-y-4"
              >
                <h3 className="text-xs uppercase tracking-widest font-semibold text-[#252522] pb-3 border-b border-[#E8E3DA]">
                  {cat.category}
                </h3>
                <ul className="space-y-4">
                  {cat.skills.map((skill, sIdx) => (
                    <li key={sIdx} className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-medium text-[#252522]">{skill.name}</span>
                        <span className="text-[10px] uppercase tracking-wider text-[#77746D] bg-[#E9E2D8] px-2 py-0.5 border border-[#DDD7CD]">
                          {skill.level}
                        </span>
                      </div>
                      {skill.note && (
                        <p className="text-[11px] text-[#77746D] leading-tight">
                          {skill.note}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="border-t border-[#DDD7CD] pt-16 pb-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h3 className="font-serif text-2xl font-light text-[#252522]">
              Looking to review selected architectural works?
            </h3>
            <p className="text-xs text-[#77746D]">
              Explore projects across residential, commercial, and research facilities.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Button href="/projects" variant="primary" size="md">
              View Portfolio
            </Button>
            <Button href="/contact" variant="secondary" size="md">
              Contact Jyoti
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
