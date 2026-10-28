import { Mail, Phone, MapPin } from "lucide-react";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/data/site-config";

export default function ContactCTA() {
  return (
    <section className="py-20 lg:py-28 bg-[#252522] text-[#F7F5F0] border-t border-[#33332E] relative overflow-hidden">
      {/* Subtle architectural background grid */}
      <div className="absolute inset-0 opacity-5 pointer-events-none arch-grid-bg" />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10 space-y-8">
        <span className="text-[11px] uppercase tracking-[0.25em] text-[#D4C5B2] font-semibold block">
          06 / COLLABORATE
        </span>

        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#F7F5F0] tracking-[-0.02em] max-w-3xl mx-auto leading-[1.12]">
          Have a space in mind?
        </h2>

        <p className="text-[#A39F97] text-base sm:text-lg max-w-xl mx-auto font-light leading-relaxed">
          Let’s discuss how thoughtful design and visualization can bring your ideas to life. Open for full-time junior architect roles, visualization studios, and freelance design collaborations.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            href="/contact"
            size="lg"
            className="bg-[#F7F5F0] text-[#252522] hover:bg-[#FAF8F5] border-[#F7F5F0]"
          >
            Contact Me
          </Button>
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-xs tracking-[0.15em] uppercase text-[#D4C5B2] hover:text-[#F7F5F0] py-3 px-6 border border-[#44443E] hover:border-[#D4C5B2] transition-colors"
          >
            {siteConfig.email}
          </a>
        </div>

        {/* Micro contact line */}
        <div className="pt-8 border-t border-[#3D3D38] flex flex-wrap items-center justify-center gap-8 text-xs text-[#A39F97]">
          <span className="inline-flex items-center">
            <MapPin className="w-3.5 h-3.5 mr-2 text-[#D4C5B2]" />
            {siteConfig.location}
          </span>
          <span className="inline-flex items-center">
            <Phone className="w-3.5 h-3.5 mr-2 text-[#D4C5B2]" />
            {siteConfig.phone}
          </span>
          <span className="inline-flex items-center">
            <Mail className="w-3.5 h-3.5 mr-2 text-[#D4C5B2]" />
            {siteConfig.email}
          </span>
        </div>
      </div>
    </section>
  );
}
