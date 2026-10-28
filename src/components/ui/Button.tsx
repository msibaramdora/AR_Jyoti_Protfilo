import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "text";
  size?: "sm" | "md" | "lg";
  icon?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  external?: boolean;
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  icon = true,
  className = "",
  type = "button",
  disabled = false,
  external = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium tracking-[0.14em] uppercase transition-all duration-200 focus-visible:outline-hidden disabled:opacity-50 disabled:cursor-not-allowed";

  const sizeStyles = {
    sm: "text-[11px] px-4 py-2",
    md: "text-xs px-6 py-3.5",
    lg: "text-[13px] px-8 py-4",
  };

  const variantStyles = {
    primary:
      "bg-[#252522] text-[#F7F5F0] hover:bg-[#1A1A18] hover:shadow-md border border-[#252522]",
    secondary:
      "bg-transparent text-[#252522] border border-[#252522] hover:bg-[#252522] hover:text-[#F7F5F0]",
    outline:
      "bg-transparent text-[#252522] border border-[#DDD7CD] hover:border-[#252522] hover:bg-[#FAF8F5]",
    text: "bg-transparent text-[#252522] hover:text-black p-0 border-b border-current hover:border-black",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          <span>{children}</span>
          {icon && <ArrowUpRight className="w-3.5 h-3.5 ml-2 shrink-0 opacity-80" />}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        <span>{children}</span>
        {icon && <ArrowUpRight className="w-3.5 h-3.5 ml-2 shrink-0 opacity-80" />}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
    >
      <span>{children}</span>
      {icon && <ArrowUpRight className="w-3.5 h-3.5 ml-2 shrink-0 opacity-80" />}
    </button>
  );
}
