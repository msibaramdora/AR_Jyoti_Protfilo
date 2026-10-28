import type { Metadata } from "next";
import { MapPin, ArrowUpRight, MessageSquare, Clock } from "lucide-react";
import { InstagramIcon } from "@/components/ui/Icons";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/contact/ContactForm";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Jyoti Sahu for architectural consultations, 3D visualization commissions, design studio roles, and collaborations.",
};

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 lg:pt-40 lg:pb-32 bg-[#F7F5F0] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
        {/* Page Header */}
        <div className="border-b border-[#DDD7CD] pb-10">
          <SectionHeading
            eyebrow="INQUIRIES / STUDIO COLLABORATION"
            title="Start a Conversation"
            description="Whether you have an upcoming architectural commission, a 3D visualization brief, or a studio opportunity, I welcome your inquiry."
          />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Contact Information */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#77746D] font-semibold block">
                Direct Channels
              </span>
              <h2 className="font-serif text-3xl font-light text-[#252522]">
                Contact Information
              </h2>
              <p className="text-sm text-[#77746D] leading-relaxed">
                Feel free to reach out via email, phone, or Instagram. Consultations can be conducted digitally via video conference or in person across Mumbai / Dombivli.
              </p>
            </div>

            {/* Contact Details List */}
            <div className="bg-[#FCFAF7] border border-[#DDD7CD] divide-y divide-[#E8E3DA]">
              {/* Email */}
              <div className="p-6 space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-[#77746D] font-semibold block">
                  Email
                </span>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="font-serif text-lg sm:text-xl text-[#252522] hover:text-black hover:underline flex items-center justify-between group"
                >
                  <span className="truncate">{siteConfig.email}</span>
                  <ArrowUpRight className="w-4 h-4 ml-2 shrink-0 opacity-60 group-hover:opacity-100" />
                </a>
              </div>

              {/* Phone & WhatsApp */}
              <div className="p-6 space-y-2">
                <span className="text-[10px] uppercase tracking-widest text-[#77746D] font-semibold block">
                  Phone & WhatsApp
                </span>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
                    className="font-serif text-lg text-[#252522] hover:underline"
                  >
                    {siteConfig.phone}
                  </a>
                  <a
                    href={`https://wa.me/${siteConfig.phone.replace(/[^0-9]/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 w-fit inline-flex items-center hover:bg-emerald-100 transition-colors"
                  >
                    <MessageSquare className="w-3 h-3 mr-1.5" />
                    WhatsApp
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="p-6 space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-[#77746D] font-semibold block">
                  Studio Location
                </span>
                <p className="text-sm text-[#252522] font-medium flex items-start">
                  <MapPin className="w-4 h-4 mr-2 text-[#77746D] shrink-0 mt-0.5" />
                  <span>{siteConfig.location} — 421202</span>
                </p>
              </div>

              {/* Social Channels */}
              <div className="p-6 space-y-2">
                <span className="text-[10px] uppercase tracking-widest text-[#77746D] font-semibold block">
                  Social & Portfolio
                </span>
                <div className="flex items-center space-x-4 pt-1">
                  <a
                    href={siteConfig.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs uppercase tracking-wider text-[#252522] hover:text-black border border-[#DDD7CD] px-3 py-1.5 bg-[#F7F5F0] hover:bg-white transition-colors"
                  >
                    <InstagramIcon className="w-3.5 h-3.5 mr-1.5" />
                    <span>@{siteConfig.instagram}</span>
                    <ArrowUpRight className="w-3 h-3 ml-1" />
                  </a>
                </div>
              </div>
            </div>

            {/* Availability Note */}
            <div className="p-6 bg-[#E9E2D8]/50 border border-[#DDD7CD] space-y-2">
              <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#252522]">
                <Clock className="w-4 h-4" />
                <span>Current Status: Open to Opportunities</span>
              </div>
              <p className="text-xs text-[#77746D] leading-relaxed">
                Currently available for full-time Junior Architect roles, visualization studio assignments, and select private design consultations.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
