import type { Metadata } from "next";
import Navbar from "@/components/molecules/navbar/page";
import Footer from "@/components/molecules/footer/page";
import Pill from "@/components/atom/pill/page";
import CallToActionSection from "@/components/molecules/callToActionSection/page";
import ProjectCard from "@/components/molecules/projectCard/page";

export const metadata: Metadata = {
  title: "Our Projects | BertAndre Group",
  description:
    "BertAndre Group projects and ventures including Berta Estate Hub and other purpose-driven solutions.",
};

const PROJECT_ITEMS = [
  {
    imageSrc: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1320&q=80",
    imageAlt: "Berta Estate Hub - estate and community management",
    category: "PROPERTY MANAGEMENT",
    title: "Berta Estate Hub App",
    description:
      "Berta Estate Hub is a digital estate and community management platform developed to address operational inefficiencies in residential estates. The platform centralizes resident onboarding, utility-related processes, billing visibility, and communication between residents, estate managers, and service providers. Initially developed from real challenges encountered within Group real estate projects, Berta Estate Hub is currently in pilot deployment and positioned for scale across multiple estates and developers as a core PropTech asset within the Group.",
  },
  {
    imageSrc: "https://images.unsplash.com/photo-1504309092620-4d0ec726efa4?w=1320&q=80",
    imageAlt: "Mobility and fleet solutions",
    category: "MOBILITY",
    title: "Fleet & Mobility Solutions",
    description:
      "Our fleet management and mobility solutions deliver reliable, transparent, and technology-enabled services that improve mobility, reduce operational risk, and enhance efficiency for businesses and individuals.",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 lg:pt-14 pb-10 sm:pb-14">
          <div className="max-w-[1320px] mx-auto flex flex-col items-center">
            <Pill className="mb-8 sm:mb-10" active>
              Our Projects
            </Pill>
            <div className="w-full space-y-10 md:space-y-14">
              {PROJECT_ITEMS.map((item) => (
                <ProjectCard
                  key={item.title}
                  imageSrc={item.imageSrc}
                  imageAlt={item.imageAlt}
                  category={item.category}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </section>
        <CallToActionSection />
      </main>
      <Footer />
    </div>
  );
}
