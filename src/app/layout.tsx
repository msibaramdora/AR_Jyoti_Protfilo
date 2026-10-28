import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#F7F5F0",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://jyotisahu.design"),
  title: {
    default: "Jyoti Sahu — Architect · Interior Designer · 3D Visualizer",
    template: "%s | Jyoti Sahu",
  },
  description:
    "Portfolio of Jyoti Sahu, an architect, interior designer, and 3D visualizer based in Mumbai / Dombivli. Specializing in sustainable architecture, tactile interior environments, and photorealistic spatial rendering.",
  keywords: [
    "Jyoti Sahu",
    "Architect",
    "Interior Designer",
    "3D Visualizer",
    "Architecture Portfolio",
    "Architect Hafeez Contractor",
    "Piloo Mody College of Architecture",
    "D5 Render",
    "Lumion",
    "Sustainable Architecture",
    "Mumbai Architect",
  ],
  authors: [{ name: "Jyoti Sahu" }],
  creator: "Jyoti Sahu",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jyotisahu.design",
    siteName: "Jyoti Sahu Portfolio",
    title: "Jyoti Sahu — Architect · Interior Designer · 3D Visualizer",
    description:
      "Architecture, interior design, and 3D visualization portfolio of Jyoti Sahu. Featured works in sustainable housing, mixed-use commercial hubs, and oceanographic research.",
    images: [
      {
        url: "/images/profile/hero-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Jyoti Sahu Architecture & Visualization Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jyoti Sahu — Architect · Interior Designer · 3D Visualizer",
    description: "Designing thoughtful spaces through form, material, light, and spatial storytelling.",
    images: ["/images/profile/hero-cover.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${manrope.variable}`}>
      <body className="min-h-screen flex flex-col bg-[#F7F5F0] text-[#252522] font-sans antialiased selection:bg-[#D4C5B2] selection:text-[#252522]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
