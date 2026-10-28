"use client";

import Link from "next/link";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";
import { InstagramIcon } from "@/components/ui/Icons";
import { siteConfig } from "@/data/site-config";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#252522] text-[#F7F5F0] pt-16 pb-12 border-t border-[#33332E]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-[#3D3D38]">
          {/* Brand & Statement */}
          <div className="md:col-span-5 space-y-4">
            <h3 className="font-serif text-3xl lg:text-4xl tracking-[0.08em] uppercase font-light text-[#F7F5F0]">
              {siteConfig.name}
            </h3>
            <p className="text-xs uppercase tracking-[0.2em] text-[#D4C5B2]">
              {siteConfig.title}
            </p>
            <p className="text-sm text-[#A39F97] leading-relaxed max-w-sm pt-2">
              Translating architectural vision, natural materiality, and atmospheric light into context-responsive spaces and immersive 3D visualizations.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#D4C5B2] font-semibold block">
              Navigation
            </span>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-[#A39F97] hover:text-[#F7F5F0] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-[#A39F97] hover:text-[#F7F5F0] transition-colors">
                  Selected Works
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#A39F97] hover:text-[#F7F5F0] transition-colors">
                  About & Credentials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#A39F97] hover:text-[#F7F5F0] transition-colors">
                  Contact & Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Connect */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#D4C5B2] font-semibold block">
              Direct Contact
            </span>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center text-[#A39F97] hover:text-[#F7F5F0] transition-colors group"
                >
                  <Mail className="w-4 h-4 mr-2 text-[#D4C5B2]" />
                  <span>{siteConfig.email}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
                  className="inline-flex items-center text-[#A39F97] hover:text-[#F7F5F0] transition-colors"
                >
                  <Phone className="w-4 h-4 mr-2 text-[#D4C5B2]" />
                  <span>{siteConfig.phone}</span>
                </a>
              </li>
              <li className="flex items-start text-[#A39F97]">
                <MapPin className="w-4 h-4 mr-2 text-[#D4C5B2] shrink-0 mt-0.5" />
                <span>{siteConfig.location}</span>
              </li>
              <li className="pt-2">
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs tracking-wider uppercase text-[#D4C5B2] hover:text-[#F7F5F0] transition-colors"
                >
                  <InstagramIcon className="w-4 h-4 mr-2" />
                  <span>@{siteConfig.instagram}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#77746D] space-y-4 sm:space-y-0">
          <p>
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <p className="tracking-widest uppercase text-[10px]">
            Architecture · Interior Design · 3D Visualization
          </p>
        </div>
      </div>
    </footer>
  );
}
