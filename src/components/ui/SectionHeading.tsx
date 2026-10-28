interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`space-y-3 ${
        isCenter ? "text-center mx-auto max-w-2xl" : "max-w-2xl"
      } ${className}`}
    >
      {eyebrow && (
        <span
          className={`text-[11px] uppercase tracking-[0.25em] font-medium block ${
            light ? "text-[#D4C5B2]" : "text-[#77746D]"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-light tracking-[-0.015em] leading-[1.15] ${
          light ? "text-[#F7F5F0]" : "text-[#252522]"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-sm sm:text-base leading-relaxed ${
            light ? "text-[#A39F97]" : "text-[#77746D]"
          } pt-1`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
