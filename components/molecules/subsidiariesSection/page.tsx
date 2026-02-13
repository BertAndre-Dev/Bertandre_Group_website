"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Pill from "@/components/atom/pill/page";

export interface SubsidiaryCardProps {
  readonly imageSrc: string;
  readonly imageAlt: string;
  readonly title: string;
  readonly description: string;
  readonly linkHref: string;
}

function SubsidiaryCard({
  imageSrc,
  imageAlt,
  title,
  description,
  linkHref,
}: SubsidiaryCardProps) {
  return (
    <article className="bg-white rounded-4xl shadow-sm border border-gray-100/80 hover:shadow-md transition-shadow">
      <div className="p-5 sm:p-6">
        <div className="relative w-full aspect-[16/10] overflow-hidden rounded-lg border-2 mb-8">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <h3 className="text-base md:text-xl font-semibold text-[#1560BD] mb-2">
          {title}
        </h3>
        <p className="text-[#4C4C4C] text-sm sm:text-base leading-relaxed mb-4">
          {description}
        </p>
        <Link
          href={linkHref}
          className="inline-flex items-center gap-1 text-[#1560BD] font-medium text-[14px] md:text-[16px] hover:underline"
        >
          Learn more
          <span aria-hidden="true"> →</span>
        </Link>
      </div>
    </article>
  );
}

const SUBSIDIARIES: SubsidiaryCardProps[] = [
  {
    imageSrc:
      "/assets/consulting.svg",
    imageAlt: "BertAndre Consulting – strategy and advisory",
    title: "BertAndre Consulting",
    description:
      "Strategy-led advisory and technology solutions supporting business growth and transformation.",
    linkHref: "/subsidiaries/bertandre-consulting",
  },
  {
    imageSrc: "/assets/real-estate.svg",
    imageAlt: "Primquisite Real Estate – property development",
    title: "Primquisite Real Estate",
    description:
      "Property development and PropTech-driven estate solutions delivering long-term asset value.",
    linkHref: "/subsidiaries/primquisite-real-estate",
  },
  {
    imageSrc: "/assets/saair.svg",
    imageAlt: "SAAIR Energy – energy solutions",
    title: "SAAIR Energy",
    description:
      "Integrated energy solutions focused on metering, monitoring, and scalable energy infrastructure.",
    linkHref: "/subsidiaries/saair-energy",
  },
  {
    imageSrc: "/assets/autoDate.svg",
    imageAlt: "Autodate Smart Fleet – fleet management",
    title: "Autodate Smart Fleet",
    description:
      "Technology-enabled fleet administration and mobility management for enterprises.",
    linkHref: "/subsidiaries/autodate-smart-fleet",
  },
];

export default function SubsidiariesSection() {
  return (
    <section className="bg-[#D0DFF2]">
      <div className="container mx-auto px-6 md:px-8 lg:px-10 xl:px-0">
        <div className="flex justify-center mb-10 pt-6  lg:mb-12">
          <Pill
            className="bg-white border border-[#1560BD] text-[#1560BD]"
            active
          >
            Subsidiaries
          </Pill>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 max-w-5xl pb-12 md:pb-20 mx-auto">
          {SUBSIDIARIES.map((sub) => (
            <SubsidiaryCard
              key={sub.title}
              imageSrc={sub.imageSrc}
              imageAlt={sub.imageAlt}
              title={sub.title}
              description={sub.description}
              linkHref={sub.linkHref}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
