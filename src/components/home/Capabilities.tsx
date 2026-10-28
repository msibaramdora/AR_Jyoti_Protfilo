import { Compass, Sparkles, Layers } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const capabilities = [
  {
    num: "01",
    title: "Architecture",
    tagline: "Form, Context & Materiality",
    icon: Compass,
    description:
      "Crafting sustainable, context-responsive spatial planning and building envelopes. From organic master concepts to precise municipal working drawings and technical detailing.",
    deliverables: [
      "Spatial planning & massing studies",
      "Vernacular & passive climate strategies",
      "Working drawings & municipal sheets",
      "False ceiling layouts & unfolded elevations",
    ],
  },
  {
    num: "02",
    title: "Interior Design",
    tagline: "Atmosphere & Tactile Luxury",
    icon: Layers,
    description:
      "Designing sensory-rich domestic and commercial interiors where natural cane, seasoned timber, warm ambient lighting, and bespoke joinery create timeless tranquility.",
    deliverables: [
      "Retail & residential space planning",
      "Material moodboards & finish selection",
      "Bespoke furniture & joinery detailing",
      "Lighting design (2700K–3000K ambient cove)",
    ],
  },
  {
    num: "03",
    title: "3D Visualization",
    tagline: "Cinematic Spatial Narratives",
    icon: Sparkles,
    description:
      "Translating architectural visions into high-fidelity photorealistic visualizations. Calibrating real-world daylighting, twilight moods, and PBR textures in D5 Render and Lumion.",
    deliverables: [
      "Photorealistic exterior & interior renders",
      "Twilight & dusk atmospheric lighting studies",
      "Exploded axonometric & conceptual diagrams",
      "Competition presentation renders & boards",
    ],
  },
];

export default function Capabilities() {
  return (
    <section className="py-20 lg:py-28 border-t border-[#DDD7CD] bg-[#F7F5F0]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="03 / CORE CAPABILITIES"
          title="Disciplines & Spatial Services"
          description="A multidisciplinary approach spanning structural architecture, bespoke interior environments, and high-fidelity digital visualization."
          className="mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {capabilities.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.num}
                className="bg-[#FCFAF7] border border-[#DDD7CD] p-8 lg:p-10 flex flex-col justify-between hover:border-[#252522] transition-colors duration-300 relative group"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between pb-6 border-b border-[#E8E3DA]">
                    <span className="font-serif text-3xl font-light text-[#D4C5B2] group-hover:text-[#252522] transition-colors">
                      {item.num}
                    </span>
                    <Icon className="w-5 h-5 text-[#77746D] group-hover:text-[#252522] transition-colors" />
                  </div>

                  <div className="space-y-2">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#77746D] font-semibold block">
                      {item.tagline}
                    </span>
                    <h3 className="font-serif text-2xl lg:text-3xl font-light text-[#252522]">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-sm text-[#77746D] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-8 mt-8 border-t border-[#E8E3DA]">
                  <span className="text-[10px] uppercase tracking-widest text-[#252522] font-semibold block mb-3">
                    Key Competencies
                  </span>
                  <ul className="space-y-2">
                    {item.deliverables.map((deliv, i) => (
                      <li
                        key={i}
                        className="text-xs text-[#77746D] flex items-center space-x-2"
                      >
                        <span className="w-1 h-1 rounded-full bg-[#D4C5B2]" />
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
