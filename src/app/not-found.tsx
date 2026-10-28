import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-[#F7F5F0] px-6 py-32 arch-grid-bg">
      <div className="max-w-md w-full bg-[#FCFAF7] border border-[#DDD7CD] p-8 sm:p-12 text-center space-y-6 shadow-sm">
        <div className="w-12 h-12 mx-auto rounded-full bg-[#E9E2D8] flex items-center justify-center text-[#252522]">
          <Compass className="w-6 h-6" />
        </div>

        <div className="space-y-2">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#77746D] font-semibold block">
            404 / Spatial Boundary
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-light text-[#252522]">
            Page Not Found
          </h1>
          <p className="text-xs sm:text-sm text-[#77746D] leading-relaxed pt-1">
            The architectural drawing or page you are looking for does not exist or has been relocated within the portfolio archive.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center text-xs tracking-wider uppercase font-medium bg-[#252522] text-[#F7F5F0] px-6 py-3 hover:bg-black transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5 mr-2" />
            <span>Return Home</span>
          </Link>
          <Link
            href="/projects"
            className="w-full sm:w-auto inline-flex items-center justify-center text-xs tracking-wider uppercase font-medium border border-[#DDD7CD] text-[#252522] px-6 py-3 hover:bg-[#F7F5F0] transition-colors"
          >
            <span>View Projects</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
