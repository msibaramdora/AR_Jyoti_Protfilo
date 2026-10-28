import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  {
    step: "01",
    name: "Discover",
    subtitle: "Site, Context & Brief",
    description:
      "Deep analysis of geographic orientation, solar paths, prevailing coastal winds, vernacular culture, and client functional prerequisites.",
  },
  {
    step: "02",
    name: "Conceptualize",
    subtitle: "Geometry & Spatial Massing",
    description:
      "Synthesizing site parameters into hand sketches, fluid form massing, courtyard subtractions, and climate-responsive zoning layers.",
  },
  {
    step: "03",
    name: "Develop",
    subtitle: "Technical Detailing & Plans",
    description:
      "Transforming abstract massing into precise AutoCAD architectural working drawings, structural grids, false ceiling plans, and joinery details.",
  },
  {
    step: "04",
    name: "Visualize",
    subtitle: "Raytraced Light & Materiality",
    description:
      "Crafting photorealistic digital scenes with real physical materials (terracotta, rammed earth, timber, low-E glass) and authentic daylight moods.",
  },
];

export default function Process() {
  return (
    <section className="py-20 lg:py-28 border-t border-[#DDD7CD] bg-[#FCFAF7]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="04 / METHODOLOGY"
          title="The Architectural Process"
          description="A methodical progression from conceptual site analysis to meticulous technical documentation and cinematic spatial rendering."
          className="mb-14"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div
              key={item.step}
              className="relative p-6 bg-[#F7F5F0] border border-[#DDD7CD] flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#E8E3DA] pb-4">
                  <span className="font-serif text-3xl font-light text-[#252522]">
                    {item.step}
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-[#77746D]">
                    Stage 0{index + 1}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-2xl font-light text-[#252522]">
                    {item.name}
                  </h3>
                  <span className="text-[10px] uppercase tracking-wider text-[#77746D] font-semibold block mt-0.5">
                    {item.subtitle}
                  </span>
                </div>

                <p className="text-xs text-[#77746D] leading-relaxed pt-2">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#E8E3DA] flex items-center justify-between text-[10px] uppercase tracking-widest text-[#77746D]">
                <span>Phase Complete</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#252522]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
