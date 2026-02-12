"use client";

import React from "react";
import Link from "next/link";
import Button from "@/components/atom/button/page";

const HERO_COPY = {
  headline: [
    "Building Purpose-Driven Ventures for a Smarter, Sustainable Future",
  ],
  description:
    "BertAndre Group is a diversified business group operating across consulting, real estate, energy, mobility, and technology. We build scalable ventures that solve real operational challenges and deliver long-term value.",
  ctaPrimary: "View Companies",
  ctaSecondary: "Explore Services",
  ctaPrimaryHref: "/subsidiaries",
  ctaSecondaryHref: "/portfolio",
};

export default function HeroSection() {
  return (
    <section className="container mx-auto py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-12 items-center">
        {/* Left: Headline */}
        <div>
          <h1 className="text-[32px] md:text-[44px] lg:text-[50px] font-medium text-[#171717]">
            {HERO_COPY.headline[0]}
            <br className="hidden md:block" />
            {HERO_COPY.headline[1]}
          </h1>
        </div>

        {/* Right: Description + CTAs */}
        <div className="flex flex-col gap-6 lg:gap-4 xl:gap-8">
          <div className="relative">
            <p className="text-[14px] md:text-[24px] leading-7 md:leading-10 font-normal tracking-tight text-[#4C4C4C]">
              {HERO_COPY.description}
            </p>
          </div>
          <div className="flex items-center justify-center flex-wrap flex-col md:flex-row gap-4">
            <Link href={HERO_COPY.ctaPrimaryHref}>
              <Button
                className="bg-[#1560BD] hover:bg-[#124ea0] text-white rounded-full px-6 py-3 sm:px-8 sm:py-3 text-[14px] md:text-base font-medium"
                bg="bg-[#1560BD]"
                text="text-white"
                hover="hover:bg-[#124ea0]"
                rounded="rounded-full"
              >
                {HERO_COPY.ctaPrimary}
              </Button>
            </Link>
            <Link href={HERO_COPY.ctaSecondaryHref}>
              <Button
                className="bg-white border-2 border-[#1560BD] text-[#1560BD] hover:bg-[#f0f8ff] rounded-full px-6 py-3 sm:px-8 sm:py-3 text-[14px] md:text-base font-medium"
                bg="bg-white"
                text="text-[#1560BD]"
                hover="hover:bg-[#f0f8ff]"
                rounded="rounded-full"
              >
                {HERO_COPY.ctaSecondary}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
