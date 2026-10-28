import Image from "next/image";

export default function Philosophy() {
  return (
    <section className="py-20 lg:py-28 bg-[#E9E2D8]/60 border-t border-[#DDD7CD] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Composition of Materials & Form */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative border border-[#DDD7CD] bg-[#F7F5F0] p-3 shadow-xs">
              <div className="relative aspect-4/5 w-full overflow-hidden">
                <Image
                  src="/images/profile/physical-model.jpg"
                  alt="Architectural physical scale model study of form and shadows by Jyoti Sahu"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="pt-3 pb-1 px-1 flex items-center justify-between text-[10px] tracking-widest uppercase text-[#77746D]">
                <span>Physical Model Study</span>
                <span>Spatial Geometry & Shadow</span>
              </div>
            </div>

            {/* Floating Material Detail Badge */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 w-48 bg-[#F7F5F0] border border-[#DDD7CD] p-3 shadow-md">
              <span className="text-[9px] uppercase tracking-[0.2em] text-[#77746D] block mb-1 font-semibold">
                Material Honesty
              </span>
              <p className="text-[11px] text-[#252522] leading-tight font-serif italic">
                “Form responds to climate, material evokes emotion.”
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Philosophy Statement */}
          <div className="lg:col-span-7 space-y-8 order-1 lg:order-2">
            <div className="space-y-3">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#77746D] font-medium block">
                02 / DESIGN PHILOSOPHY
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#252522] leading-[1.2] tracking-tight">
                “Good design is not just what a space looks like. It is how it{" "}
                <span className="italic font-normal">feels</span>,{" "}
                <span className="italic font-normal">functions</span>, and{" "}
                <span className="italic font-normal">connects</span> with the people who experience it.”
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 text-sm text-[#77746D] leading-relaxed">
              <div className="space-y-2">
                <h4 className="text-xs uppercase tracking-widest text-[#252522] font-semibold">
                  Contextual Sensitivity
                </h4>
                <p>
                  Every line drawn must acknowledge the topography, microclimate, vernacular heritage, and human scale of its location—ensuring natural longevity.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs uppercase tracking-widest text-[#252522] font-semibold">
                  Atmospheric Storytelling
                </h4>
                <p>
                  Visualization is not merely rendering surfaces; it is orchestrating how daylight penetrates an atrium, how shadow animates a jali screen, and how tactile textures evoke peace.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
