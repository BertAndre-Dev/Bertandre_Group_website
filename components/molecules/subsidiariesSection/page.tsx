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
  readonly layout?: "normal" | "image-right";
}

function SubsidiaryCard({
  imageSrc,
  imageAlt,
  title,
  description,
  linkHref,
  layout = "normal",
}: SubsidiaryCardProps) {
  const isImageRight = layout === "image-right";

  if (isImageRight) {
    return (
      <article className="bg-white rounded-[15px] md:rounded-[30px] shadow-sm border border-gray-100/80 overflow-hidden relative">
        <div className="flex flex-col md:flex-row md:items-center">
          {/* Text - Left */}
          <div className="px-5 md:px-6 py-5 md:py-6 md:w-1/2 order-2 md:order-1">
            <h3 className="text-base md:text-xl font-semibold text-[#1560BD] mb-2">
              {title}
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-[#4C4C4C] mb-4">
              {description}
            </p>
            <Link
              href={linkHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#1560BD] font-medium text-[14px] md:text-[16px] hover:underline"
            >
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>

          {/* Image - Right */}
          <div className="relative md:w-1/2 order-1 md:order-2">
            <div className="p-5 sm:p-6">
              <div className="relative w-full aspect-16/10 md:aspect-4/3 overflow-hidden rounded-lg">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }

  // Normal vertical layout
  return (
    <article className="bg-white rounded-[15px] md:rounded-[30px] shadow-sm border border-gray-100/80 overflow-hidden relative flex flex-col">
      <div className="p-5 sm:p-6">
        <div className="relative w-full aspect-16/10 overflow-hidden rounded-lg border-2">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

      <div className="px-5 md:px-6 pb-5 md:pb-6 mt-2 md:mt-0 bg-white">
        <h3 className="text-base md:text-xl font-semibold text-[#1560BD] mb-2">
          {title}
        </h3>

        <p className="text-sm sm:text-base leading-relaxed text-[#4C4C4C] mb-4">
          {description}
        </p>

        <Link
          href={linkHref}
          target="_blank"
          rel="noopener noreferrer"
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
    imageSrc: "/assets/consulting.svg",
    imageAlt: "BertAndre Consulting – strategy and advisory",
    title: "BertAndre Consulting",
    description:
      "Strategy-led advisory and technology solutions supporting business growth and transformation.",
    linkHref: "https://www.bertandreconsulting.com/",
    layout: "normal",
  },
  {
    imageSrc: "/assets/saair.svg",
    imageAlt: "SAAIR Energy – energy solutions",
    title: "SAAIR Energy",
    description:
      "Integrated energy solutions focused on metering, monitoring, and scalable energy infrastructure.",
    linkHref: "https://saairenergy.com/",
    layout: "image-right",
  },
  {
    imageSrc: "/assets/real-estate.svg",
    imageAlt: "Primquisite Real Estate – property development",
    title: "Primquisite Real Estate",
    description:
      "Property development and PropTech-driven estate solutions delivering long-term asset value.",
    linkHref: "https://www.linkedin.com/company/primquisite-real-estae/",
    layout: "image-right",
  },
  {
    imageSrc: "/assets/autoDate.svg",
    imageAlt: "Autodate Smart Fleet – fleet management",
    title: "Autodate Smart Fleet",
    description:
      "Technology-enabled fleet administration and mobility management for enterprises.",
    linkHref: "https://www.linkedin.com/company/autodate-smart-fleet/",
    layout: "normal",
  },
];

export default function SubsidiariesSection() {
  return (
    <section className="bg-[#D0DFF2]">
      <div className="container mx-auto px-6 md:px-8 lg:px-10 xl:px-0">
        <div className="flex justify-center mb-10 pt-6 lg:mb-12">
          <Pill
            className="bg-white border border-[#1560BD] text-[#1560BD]"
            active
          >
            Subsidiaries
          </Pill>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 pb-10">
          {/* First Column */}
          <div className="flex flex-col gap-6 lg:gap-8">
            {SUBSIDIARIES.slice(0, 2).map((sub) => (
              <SubsidiaryCard
                key={sub.title}
                imageSrc={sub.imageSrc}
                imageAlt={sub.imageAlt}
                title={sub.title}
                description={sub.description}
                linkHref={sub.linkHref}
                layout={sub.layout}
              />
            ))}
          </div>

          {/* Second Column */}
          <div className="flex flex-col gap-6 lg:gap-8">
            {SUBSIDIARIES.slice(2, 4).map((sub) => (
              <SubsidiaryCard
                key={sub.title}
                imageSrc={sub.imageSrc}
                imageAlt={sub.imageAlt}
                title={sub.title}
                description={sub.description}
                linkHref={sub.linkHref}
                layout={sub.layout}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
