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
    <article className="w-full max-w-[1320px] mx-auto border border-[#D0DFF2] md:border-none rounded-2xl md:rounded-none overflow-hidden bg-white shadow-sm md:shadow-none">
      <div className="max-w-[1320px] rounded-3xl sm:border sm:border-[#D0DFF2] mx-auto">
        <div className="relative w-full rounded-xl sm:rounded-2xl overflow-hidden aspect-[33/10] min-h-[150px] md:min-h-[320px] lg:min-h-[400px]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-contain p-6"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1320px"
          />
        </div>
      </div>
      <div className="p-6 sm:p-8 lg:p-10">
        <p className="text-[#1560BD] text-[16px] md:text-[20px] font-semibold uppercase tracking-wide mb-2">
          {category}
        </p>
        <h2 className="text-[#4C4C4C] text-[14px] md:text-[40px] lg:text-3xl font-semibold md:font-bold mb-4">
          {title}
        </h2>
        <p className="text-[#4C4C4C] text-[14px] md:text-[20px] font-normal leading-relaxed">
          {description}
        </p>
      </div>
    </article>
  );
}
