import Image from "next/image";
import type { Metadata } from "next";
import Navbar from "@/components/molecules/navbar/page";
import Footer from "@/components/molecules/footer/page";
import Pill from "@/components/atom/pill/page";
import CallToActionSection from "@/components/molecules/callToActionSection/page";

export const metadata: Metadata = {
  title: "About Us | BertAndre Group",
  description:
    "BertAndre Group is a diversified holding company building purpose-driven ventures across consulting, real estate, energy, mobility, and technology.",
};

const ABOUT_COPY = {
  pill: "About Us",
  paragraphs: [
    "BertAndre Group is a diversified holding company established to build, operate, and scale purpose-driven ventures across consulting, real estate, energy, mobility, and technology. The Group was formed in response to real operational challenges observed across multiple sectors, with a clear mandate to create practical, scalable, and technology-enabled solutions.",
    "Our structure allows each venture to operate as an independent business unit while benefiting from shared strategic direction, governance, technology infrastructure, and operational expertise. This approach ensures agility at the venture level and resilience at the Group level.",
    "BertAndre Group is intentional about growth. Some ventures are fully active and generating traction, while others are strategically positioned for expansion, partnerships, and market development.",
  ],
};

const MISSION_ITEMS = [
  "To provide strategic, financial, and technology-driven advisory services that help individuals and businesses make informed decisions, optimize performance, and achieve sustainable growth.",
  "To provide innovative and accessible energy solutions that support productivity, resilience, and sustainable economic activity across communities and industries in both renewable and non renewable energy sector.",
  "To deliver reliable, transparent, and technology-enabled fleet management solutions that improve mobility, reduce operational risk, and enhance efficiency for businesses and individuals.",
  "To develop and facilitate real estate investments that deliver long-term value, promote responsible development, and support secure property ownership across residential and commercial markets.",
];

const VISION_PARAGRAPHS = [
  "To become a leading African group of purpose-driven ventures shaping the future of consulting, real estate, mobility, and energy through innovation, integrity, and measurable impact.",
  "BertAndre Group envisions itself as a trusted force in building resilient businesses and enabling sustainable growth across the markets we serve. Through a combination of expertise, technology, and collaboration across our ventures, we deliver solutions that improve how people operate, invest, move, and access energy.",
  "Our vision is anchored in long-term value creation, building businesses that are scalable, ethical, and responsive to evolving economic and infrastructure needs. We are intentional about growth, expanding responsibly while forming strong partnerships and developing solutions that generate lasting value for clients, partners, and communities.",
];

const VALUES_ITEMS = [
  {
    term: "Integrity",
    description:
      "Ethical conduct and transparent decision-making across all ventures",
  },
  {
    term: "Innovation",
    description: "Practical solutions driven by technology and insight",
  },
  {
    term: "Accountability",
    description: "Ownership of outcomes and responsibility to stakeholders",
  },
  {
    term: "Collaboration",
    description: "Leveraging cross-venture synergies and partnerships",
  },
  {
    term: "Sustainability",
    description: "Long-term value creation over short-term gains",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        {/* Hero: Banner image */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 lg:pt-10 pb-6 sm:pb-8">
          <div className="max-w-[1320px] border border-[#D0DFF2] rounded-3xl  mx-auto">
            <div className="relative w-full rounded-xl sm:rounded-2xl overflow-hidden aspect-[33/10] min-h-[150px] md:min-h-[320px] lg:min-h-[400px]">
              <Image
                src="/assets/about-us/about-us.svg"
                alt="BertAndre Group"
                fill
                blurDataURL="/assets/about-us/about-us.svg"
                placeholder="blur"
                loading="lazy"
                className="object-contain py-2 px-6 md:py-6 md:px-6"
                priority
                sizes="(max-width: 640px) 80vw, (max-width: 1024px) 90vw, 1320px"
              />
            </div>
          </div>
        </section>

        {/* About Us pill + intro text */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-12 lg:pb-16">
          <div className="max-w-[1320px] mx-auto">
            <Pill className="px-8 mb-6 sm:mb-8 mt-12" active>
              {ABOUT_COPY.pill}
            </Pill>
            <div className="space-y-3">
              {ABOUT_COPY.paragraphs.map((text) => (
                <p
                  key={text}
                  className="text-[#4C4C4C] text-[14px] md:text-[20px] xl:text-[24px] font-normal leading-relaxed"
                >
                  {text}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Mission: Image + heading + numbered list */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 lg:pt-10 pb-6 sm:pb-8">
          <div className="max-w-[1320px] border border-[#D0DFF2] rounded-3xl  mx-auto">
            <div className="relative w-full rounded-xl sm:rounded-2xl overflow-hidden aspect-[33/10] min-h-[150px] md:min-h-[320px] lg:min-h-[400px]">
              <Image
                src="/assets/about-us/about-us1.svg"
                alt="Our mission"
                fill
                className="object-contain p-6"
                loading="lazy"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1320px"
              />
            </div>
          </div>
          <div className="pt-6">
            <h2 className="text-[#1560BD] text-base md:text-[20px] xl:text-[24px] font-medium mb-4 md:mb-8">
              Mission
            </h2>
            <ol className="list-decimal list-inside space-y-4 sm:space-y-5">
              {MISSION_ITEMS.map((item) => (
                <li
                  key={item}
                  className="text-[#4C4C4C] text-[14px] md:text-[20px] xl:text-[24px] font-normal leading-relaxed pl-1"
                >
                  {item}
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Vision */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-12">
          <div className="max-w-[1320px] mx-auto">
            <h2 className="text-[#1560BD] text-base md:text-[20px] xl:text-[24px] font-medium mb-4 md:mb-8">
              Vision
            </h2>
            <div className="space-y-4 sm:space-y-5">
              {VISION_PARAGRAPHS.map((text) => (
                <p
                  key={text}
                  className="text-[#4C4C4C] text-[14px] md:text-[20px] xl:text-[24px] font-normal leading-relaxed"
                >
                  {text}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Separator */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[1320px] mx-auto">
            <hr className="border-t border-[#FA8128]" />
          </div>
        </section>

        {/* Values */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-12 pb-0 md:pb-20">
          <div className="max-w-[1320px] mx-auto">
            <h2 className="text-[#1560BD] text-base md:text-[20px] xl:text-[24px] font-medium mb-4 md:mb-8">
              Values
            </h2>
            <ul className="w-full space-y-4 sm:space-y-5 list-none">
              {VALUES_ITEMS.map(({ term, description }) => (
                <li key={term} className="flex gap-2 sm:gap-3">
                  <span
                    className="text-[#4C4C4C] shrink-0 mt-3.5 w-1 md:w-2 h-1 md:h-2 rounded-full bg-[#4c4c4c]"
                    aria-hidden
                  />
                  <div>
                    <span className="text-[#4C4C4C] text-[14px] md:text-[20px] xl:text-[24px] font-normal">
                      {term} -
                    </span>{" "}
                    <span className="text-[#4C4C4C] text-[14px] md:text-[20px] xl:text-[24px] font-normal leading-relaxed">
                      {description}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
            <hr className="border-t border-[#FA8128]/60 mt-12 sm:mt-14 max-w-[1320px]" />
          </div>
        </section>

        <CallToActionSection />
      </main>
      <Footer />
    </div>
  );
}
