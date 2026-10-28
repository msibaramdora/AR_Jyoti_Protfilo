"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen pt-28 pb-16 flex flex-col justify-between overflow-hidden arch-grid-bg">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full flex-1 flex flex-col justify-center">
        {/* Discipline Tag & Status */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-[#DDD7CD]">
          <div className="flex items-center space-x-3 text-[11px] sm:text-xs uppercase tracking-[0.22em] text-[#77746D]">
            <span>Architecture</span>
            <span className="text-[#DDD7CD]">•</span>
            <span>Interior Design</span>
            <span className="text-[#DDD7CD]">•</span>
            <span>3D Visualization</span>
          </div>

          <div className="text-[11px] tracking-[0.18em] uppercase text-[#77746D]">
            Selected Works <span className="text-[#252522] font-semibold">2021 — 2026</span>
          </div>
        </div>

        {/* Main Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center py-10 lg:py-14">
          {/* Left Column: Bold Architectural Headline & Bio */}
          <div className="lg:col-span-6 space-y-6 lg:space-y-8">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-light text-[#252522] tracking-[-0.02em] leading-[1.08]">
              Designing Spaces <br />
              <span className="italic font-normal">for a Better</span> Tomorrow.
            </h1>

            <p className="text-[#77746D] text-base sm:text-lg leading-relaxed max-w-xl font-light">
              I’m Jyoti Sahu, an architect, interior designer, and 3D visualizer passionate about creating thoughtful spaces through form, material, light, and spatial storytelling.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button href="/projects" size="lg" variant="primary">
                Explore My Work
              </Button>
              <Button href="/contact" size="lg" variant="secondary">
                Let’s Connect
              </Button>
            </div>

            {/* Credentials Micro-strip */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-[#E8E3DA]">
              <div>
                <span className="font-serif text-2xl lg:text-3xl font-light text-[#252522] block">
                  Top 10
                </span>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#77746D] leading-tight block">
                  National Finalist
                </span>
              </div>
              <div>
                <span className="font-serif text-2xl lg:text-3xl font-light text-[#252522] block">
                  B.Arch
                </span>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#77746D] leading-tight block">
                  Piloo Mody College
                </span>
              </div>
              <div>
                <span className="font-serif text-2xl lg:text-3xl font-light text-[#252522] block">
                  6 Mos.
                </span>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#77746D] leading-tight block">
                  Hafeez Contractor
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Feature */}
          <div className="lg:col-span-6">
            <div className="relative group overflow-hidden border border-[#DDD7CD] shadow-sm bg-[#E9E2D8]">
              {/* Aspect Ratio Box */}
              <div className="relative aspect-4/3 sm:aspect-16/11 w-full overflow-hidden">
                <Image
                  src="/images/projects/infinix/hero.jpg"
                  alt="Infinix Commercial Hub — Architectural Visualization by Jyoti Sahu"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                {/* Overlay Metadata Card */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 flex items-end justify-between text-[#F7F5F0]">
                  <div className="space-y-1">
                    <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#D4C5B2] font-semibold">
                      Featured Project · Transparence 19.0
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-light text-white">
                      Infinix — Commercial & Retail Hub
                    </h3>
                    <p className="text-xs text-[#E9E2D8] font-light hidden sm:block">
                      Organic massing & passive climate envelope in Khordha
                    </p>
                  </div>

                  <Link
                    href="/projects/infinix"
                    className="shrink-0 p-3 bg-white/10 hover:bg-white text-white hover:text-[#252522] backdrop-blur-md transition-all duration-300"
                    aria-label="View Infinix Project"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hidden lg:flex items-center justify-between pt-6 border-t border-[#DDD7CD] text-xs text-[#77746D]">
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#77746D]" />
            <span className="tracking-widest uppercase text-[10px]">
              Scroll to explore selected projects
            </span>
          </div>
          <a
            href="#selected-works"
            className="flex items-center space-x-1.5 uppercase tracking-widest text-[10px] text-[#252522] hover:text-black transition-colors"
          >
            <span>Explore</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
