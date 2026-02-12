import type { Metadata } from "next";
import Navbar from "@/components/molecules/navbar/page";
import Footer from "@/components/molecules/footer/page";
import Pill from "@/components/atom/pill/page";
import CallToActionSection from "@/components/molecules/callToActionSection/page";
import ProjectCard from "@/components/molecules/projectCard/page";

export const metadata: Metadata = {
  title: "Our Portfolio | BertAndre Group",
  description:
    "Explore BertAndre Group's portfolio of ventures and solutions across consulting, real estate, energy, mobility, and technology.",
};

const PORTFOLIO_ITEMS = [
  {
    imageSrc: "/assets/portfolio/saair.svg",
    imageAlt: "Smart metering and energy technology",
    category: "SMART METER",
    title: "SAAIR",
    description:
      "Our smart metering solutions enable transparent, efficient, and data-driven energy management for residential estates and smart homes. These solutions support accurate consumption tracking, improved billing visibility, and better energy control for both residents and estate operators, forming a foundational component of intelligent estate infrastructure.",
  },
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 lg:pt-14 pb-10 sm:pb-14">
          <div className="max-w-[1320px] mx-auto flex flex-col items-center">
            <Pill className="mb-8 sm:mb-10" active>
              Our Portfolio
            </Pill>
            <div className="w-full space-y-10 md:space-y-14">
              {PORTFOLIO_ITEMS.map((item) => (
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
