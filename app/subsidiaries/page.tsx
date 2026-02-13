import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/molecules/navbar/page";
import Footer from "@/components/molecules/footer/page";
import Pill from "@/components/atom/pill/page";
import SubsidiaryBlock from "@/components/molecules/subsidiaryBlock/page";
import CallToActionSection from "@/components/molecules/callToActionSection/page";

export const metadata: Metadata = {
  title: "Subsidiaries | BertAndre Group",
  description:
    "BertAndre Group subsidiaries: BertAndre Consulting, Primquisite Real Estate, SAAIR Energy, and Autodate Smart Fleet.",
};

const SUBSIDIARIES = [
  {
    title: "BertAndre Consulting",
    description:
      "BertAndre Consulting provides strategic, financial, real estate, and technology advisory services to corporates, SMEs, startups, and institutions. The venture supports market entry, operational improvement, financial structuring, digital transformation, and real estate advisory. It also serves as the technology and product development backbone for the Group.",
    linkLabel: "www.bertandreconsulting.com",
    linkHref: "https://www.bertandreconsulting.com",
    imageSrc: "/assets/subsidiaries/consulting.svg",
    imageAlt: "BertAndre Consulting – strategy and advisory",
  },
  {
    title: "Primquisite Real Estate",
    description:
      "Primquisite Real Estate delivers property development, estate operations, and technology-enabled real estate solutions. The venture focuses on responsible development, asset optimization, and integrated estate solutions that combine real estate, energy, and technology.",
    linkLabel: "www.primquisiterealestate.com",
    linkHref: "https://www.primquisiterealestate.com",
    imageSrc: "/assets/subsidiaries/prim.svg",
    imageAlt: "Primquisite Real Estate – property development",
  },
  {
    title: "SAAIR Energy",
    description:
      "SAAIR Energy delivers integrated energy solutions across metering, monitoring, and energy infrastructure. The venture supports estates, enterprises, and institutions with reliable energy access while positioning for expansion into renewable energy, energy-as-a-service, and infrastructure-backed solutions.",
    linkLabel: "www.SAAIRenergy.com",
    linkHref: "https://www.saairenergy.com",
    imageSrc: "/assets/subsidiaries/saair.svg",
    imageAlt: "SAAIR Energy – energy solutions",
  },
  {
    title: "Autodate Smart Fleet",
    description:
      "Autodate Smart Fleet provides end-to-end fleet administration, compliance management, and mobility solutions for corporate and institutional clients. The platform simplifies vehicle registration, licensing, insurance management, and compliance while evolving toward smart mobility and EV-enabled solutions.",
    linkLabel: "www.autodatesmartfleet.com",
    linkHref: "https://www.autodatesmartfleet.com",
    imageSrc: "/assets/subsidiaries/autodate.svg",
    imageAlt: "Autodate Smart Fleet – fleet management",
  },
];

export default function SubsidiariesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 lg:pt-10 pb-12 sm:pb-16 lg:pb-20">
          <div className="max-w-[1320px] mx-auto">
            <Pill
              className="bg-[#D0DFF280] border border-[#739FD7] text-[#1560BD] mb-6 sm:mb-8"
              active
            >
              Subsidiaries
            </Pill>

            <div className="flex flex-col gap-20 md:gap-24">
              {SUBSIDIARIES.map((sub) => (
                <SubsidiaryBlock
                  key={sub.title}
                  title={sub.title}
                  description={sub.description}
                  linkLabel={sub.linkLabel}
                  linkHref={sub.linkHref}
                  imageSrc={sub.imageSrc}
                  imageAlt={sub.imageAlt}
                />
              ))}
            </div>
          </div>
        </div>
        <CallToActionSection />
      </main>
      <Footer />
    </div>
  );
}
