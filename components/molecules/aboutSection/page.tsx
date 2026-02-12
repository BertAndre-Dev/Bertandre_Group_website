"use client";

import React from "react";
import Link from "next/link";
import Button from "@/components/atom/button/page";
import Pill from "@/components/atom/pill/page";

const ABOUT_COPY = {
  pill: "About Us",
  left: `BertAndre Group is a multi-venture holding company focused on developing and scaling businesses across key sectors shaping Africa’s future. Our approach combines strategic thinking, operational execution, and technology-driven solutions to address real market gaps. Each venture operates independently while benefiting from shared expertise, governance, and innovation.`,
  learnMore: "Learn More",
  learnMoreHref: "/about",
  mission: {
    title: "Mission",
    text: "To deliver strategic, financial, technology, energy, mobility, and real estate solutions that enable sustainable growth and informed decision-making.",
  },
  vision: {
    title: "Vision",
    text: "To become a leading African group of purpose-driven ventures shaping the future of consulting, real estate, energy, and mobility.",
  },
  values: {
    title: "Values",
    text: "Integrity, Innovation, Accountability, Collaboration, Long-Term Value Creation.",
  },
};

function InfoCard({
  title,
  text,
  showIcon = false,
}: {
  readonly title: string;
  readonly text: string;
  readonly showIcon?: boolean;
}) {
  return (
    <div className="mb-4 last:mb-0 border-b border-[#FA8128] pb-3">
      <h3 className="text-base md:text-lg font-semibold text-[#1560BD] flex items-center gap-2 mb-2">
        {title}
      </h3>
      <p className="text-[#4C4C4C] text-base leading-relaxed">{text}</p>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section className="bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-10 xl:gap-16">
          {/* Left column: About Us */}
          <div>
            <Pill className="mb-6" active>
              {ABOUT_COPY.pill}
            </Pill>
            <p className="text-[#4C4C4C] text-[14px] md:text-[20px] font-normal leading-8 mb-6">
              {ABOUT_COPY.left}
            </p>
            <Link href={ABOUT_COPY.learnMoreHref}>
              <Button
                className="bg-[#1560BD] hover:bg-[#133a7d] text-white rounded-full px-6 py-3 font-medium"
                bg="bg-[#184b9e]"
                text="text-white"
                hover="hover:bg-[#133a7d]"
                rounded="rounded-full"
              >
                {ABOUT_COPY.learnMore}
              </Button>
            </Link>
          </div>

          {/* Right column: Mission, Vision, Values */}
          <div>
            <InfoCard
              title={ABOUT_COPY.mission.title}
              text={ABOUT_COPY.mission.text}
            />
            <InfoCard
              title={ABOUT_COPY.vision.title}
              text={ABOUT_COPY.vision.text}
            />
            <InfoCard
              title={ABOUT_COPY.values.title}
              text={ABOUT_COPY.values.text}
              showIcon
            />
          </div>
        </div>
      </div>
    </section>
  );
}
