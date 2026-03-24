import React from "react";
import Image from "next/image";

export interface ProjectCardProps {
  readonly imageSrc: string;
  readonly imageAlt: string;
  readonly category: string;
  readonly title: string;
  readonly description: string;
}

export default function ProjectCard({
  imageSrc,
  imageAlt,
  category,
  title,
  description,
}: ProjectCardProps) {
  return (
    <article className="w-full mx-auto border border-[#FEE6D4] md:border-none rounded-2xl md:rounded-none overflow-hidden bg-white shadow-sm md:shadow-none">
      <div className="rounded-3xl sm:border sm:border-[#FEE6D4] mx-auto">
        <div className="relative w-full rounded-xl sm:rounded-2xl overflow-hidden aspect-33/10 min-h-[150px]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-contain p-6"
          />
        </div>
      </div>
      <div className="p-6 md:p-0 md:py-6">
        <p className="text-[#FA8128] text-[16px] md:text-[20px] font-semibold uppercase tracking-wide mb-2">
          {category}
        </p>
        <h2 className="text-[#4C4C4C] text-[14px] md:text-2xl font-semibold md:font-bold mb-4">
          {title}
        </h2>
        <p className="text-[#4C4C4C] text-[14px] md:text-base xl:text-[18px] font-normal leading-relaxed">
          {description}
        </p>
      </div>
    </article>
  );
}
