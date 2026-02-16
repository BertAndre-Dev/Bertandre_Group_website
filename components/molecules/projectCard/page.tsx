import React from "react";
import Image from "next/image";

export interface ProjectCardProps {
  readonly imageSrc: string;
  readonly imageAlt: string;
  readonly imageSrcMobile: string;
  readonly category: string;
  readonly title: string;
  readonly description: string;
}

export default function ProjectCard({
  imageSrc,
  imageAlt,
  imageSrcMobile,
  category,
  title,
  description,
}: ProjectCardProps) {
  return (
    <article className="w-full max-w-[1320px] mx-auto border border-[#D0DFF2] sm:border-0 rounded-2xl sm:rounded-none overflow-hidden bg-white shadow-sm md:shadow-none">
      {/* Image Section */}
      <div className="p-4 sm:p-6">
        <div className="relative w-full rounded-[15px] md:rounded-[30px] overflow-hidden min-h-[250px] md:aspect-[33/10] sm:border sm:border-[#D0DFF2]">
          {/* Mobile Image */}
          <Image
            src={imageSrcMobile}
            alt={imageAlt}
            fill
            className="object-cover md:hidden"
            sizes="100vw"
            priority
          />

          {/* Desktop Image */}
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-contain hidden md:block"
            sizes="(max-width: 1024px) 90vw, 1320px"
            priority
          />
        </div>
      </div>

      {/* Text Content */}
      <div className="p-6 sm:p-8 lg:p-10">
        <p className="text-[#1560BD] text-[16px] md:text-[20px] font-semibold uppercase tracking-wide mb-2">
          {category}
        </p>

        <h2 className="text-[#4C4C4C] text-[18px] md:text-[32px] lg:text-[40px] font-semibold md:font-bold mb-4">
          {title}
        </h2>

        <p className="text-[#4C4C4C] text-[14px] md:text-[18px] leading-relaxed">
          {description}
        </p>
      </div>
    </article>
  );
}