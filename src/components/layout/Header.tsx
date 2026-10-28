"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/site-config";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Track scroll position for header elevation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#F7F5F0]/90 backdrop-blur-md border-b border-[#DDD7CD] py-3 shadow-xs"
          : "bg-transparent py-5 lg:py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand Logo & Descriptor */}
        <Link href="/" className="group flex flex-col focus-visible:outline-hidden">
          <span className="font-serif text-2xl lg:text-3xl tracking-[0.12em] uppercase font-light text-[#252522] group-hover:text-black transition-colors">
            {siteConfig.name}
          </span>
          <span className="text-[9px] tracking-[0.25em] uppercase text-[#77746D] font-medium mt-0.5">
            Architecture / Interiors / Visualization
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 lg:space-x-10 text-[13px] tracking-[0.15em] uppercase font-medium">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative py-1 transition-colors duration-200 ${
                  isActive
                    ? "text-[#252522] font-semibold"
                    : "text-[#77746D] hover:text-[#252522]"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#252522]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Availability Pill & Contact CTA */}
        <div className="hidden lg:flex items-center space-x-6">
          <div className="flex items-center space-x-2 text-[11px] uppercase tracking-wider text-[#77746D] border border-[#DDD7CD] px-3 py-1.5 rounded-full bg-[#FCFAF7]/80">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Available for Projects</span>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center text-[12px] tracking-[0.15em] uppercase font-medium bg-[#252522] text-[#F7F5F0] px-5 py-2 hover:bg-[#1A1A18] transition-colors duration-200"
          >
            Get in Touch
            <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 opacity-80" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#252522] hover:text-black focus:outline-hidden"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bg-[#F7F5F0] border-b border-[#DDD7CD] shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="px-6 py-8 space-y-6">
            <div className="flex items-center space-x-2 text-[11px] uppercase tracking-wider text-[#77746D] border border-[#DDD7CD] px-3 py-1.5 rounded-full w-fit bg-[#FCFAF7]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Projects</span>
            </div>

            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-lg tracking-[0.1em] uppercase font-serif py-1 ${
                      isActive
                        ? "text-[#252522] font-semibold pl-2 border-l-2 border-[#252522]"
                        : "text-[#77746D]"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            <div className="pt-4 border-t border-[#DDD7CD] space-y-3">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center w-full text-center text-xs tracking-[0.15em] uppercase font-medium bg-[#252522] text-[#F7F5F0] py-3"
              >
                Start a Conversation
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </Link>
              <div className="text-center text-xs text-[#77746D] pt-2">
                <a href={`mailto:${siteConfig.email}`} className="hover:underline">
                  {siteConfig.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
