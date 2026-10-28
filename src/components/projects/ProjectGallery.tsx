"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import { GalleryItem } from "@/types/project";

interface ProjectGalleryProps {
  gallery: GalleryItem[];
}

export default function ProjectGallery({ gallery }: ProjectGalleryProps) {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIdx(index);
  const closeLightbox = () => setSelectedIdx(null);

  const prevImage = () => {
    if (selectedIdx === null) return;
    setSelectedIdx((selectedIdx - 1 + gallery.length) % gallery.length);
  };

  const nextImage = () => {
    if (selectedIdx === null) return;
    setSelectedIdx((selectedIdx + 1) % gallery.length);
  };

  if (!gallery || gallery.length === 0) return null;

  return (
    <>
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {gallery.map((item, idx) => {
            const isFullWidth = item.aspect === "ultrawide" || idx === 0;

            return (
              <figure
                key={idx}
                className={`group relative bg-[#E9E2D8] border border-[#DDD7CD] overflow-hidden cursor-pointer ${
                  isFullWidth ? "md:col-span-2" : "md:col-span-1"
                }`}
                onClick={() => openLightbox(idx)}
              >
                <div
                  className={`relative w-full ${
                    item.aspect === "portrait"
                      ? "aspect-3/4"
                      : isFullWidth
                      ? "aspect-16/9 sm:aspect-21/9"
                      : "aspect-16/10"
                  }`}
                >
                  <Image
                    src={item.url}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 60vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3 bg-[#252522]/80 text-[#F7F5F0] backdrop-blur-xs rounded-full">
                      <ZoomIn className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Caption Strip */}
                {item.caption && (
                  <figcaption className="p-4 bg-[#FCFAF7] border-t border-[#DDD7CD] flex items-center justify-between text-xs text-[#77746D]">
                    <span>{item.caption}</span>
                    {item.type && (
                      <span className="text-[10px] uppercase tracking-wider text-[#A39F97] px-2 py-0.5 border border-[#E8E3DA]">
                        {item.type}
                      </span>
                    )}
                  </figcaption>
                )}
              </figure>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedIdx !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#1A1A18]/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8 animate-in fade-in duration-200"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between text-[#F7F5F0] pb-4 border-b border-white/10 z-10">
            <span className="text-xs uppercase tracking-widest text-[#D4C5B2]">
              {selectedIdx + 1} / {gallery.length} — {gallery[selectedIdx].caption || "Project Drawing & Visual"}
            </span>

            <button
              type="button"
              onClick={closeLightbox}
              className="p-2 text-[#F7F5F0] hover:text-[#D4C5B2] transition-colors"
              aria-label="Close image modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Center Image */}
          <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
            <div className="relative w-full h-full max-h-[82vh]">
              <Image
                src={gallery[selectedIdx].url}
                alt={gallery[selectedIdx].alt}
                fill
                priority
                sizes="100vw"
                className="object-contain"
              />
            </div>

            {/* Navigation buttons */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-2 sm:left-4 p-3 bg-black/40 hover:bg-black/80 text-white rounded-full backdrop-blur-xs transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-2 sm:right-4 p-3 bg-black/40 hover:bg-black/80 text-white rounded-full backdrop-blur-xs transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Caption */}
          <div className="text-center text-xs text-[#A39F97] pt-2">
            Use arrows or click outside to view. High-resolution architectural presentation drawing.
          </div>
        </div>
      )}
    </>
  );
}
