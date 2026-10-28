import Hero from "@/components/home/Hero";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Philosophy from "@/components/home/Philosophy";
import Capabilities from "@/components/home/Capabilities";
import Process from "@/components/home/Process";
import AboutPreview from "@/components/home/AboutPreview";
import ContactCTA from "@/components/home/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <Philosophy />
      <Capabilities />
      <Process />
      <AboutPreview />
      <ContactCTA />
    </>
  );
}
