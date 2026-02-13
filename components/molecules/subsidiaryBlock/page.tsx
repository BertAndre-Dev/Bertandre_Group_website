"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export interface SubsidiaryBlockProps {
  readonly title: string;
  readonly description: string;
  readonly linkLabel: string;
  readonly linkHref: string;
  readonly imageSrc: string;
  readonly imageAlt: string;
}

export default function SubsidiaryBlock({
  title,
  description,
  linkLabel,
  linkHref,
  imageSrc,
  imageAlt,
}: SubsidiaryBlockProps) {
  return (
    <section className="space-y-4 sm:space-y-5">
      <h2 className="text-[#0150ac] md:text-[#4c4c4c] text-base md:text-[40px] font-semibold md:font-bold leading-tight">
        {title}
      </h2>
      <p className="text-[#4c4c4c] text-base md:text-[24px] leading-relaxed">
        {description}
      </p>
      <Link
        href={linkHref}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 text-[#0150ac] font-medium text-base md:text-[18px] cursor-pointer hover:underline"
      >
        {linkLabel}
        <span aria-hidden="true"> →</span>
      </Link>
      <div className="relative w-full overflow-hidden rounded-xl sm:rounded-2xl border border-[#D0DFF2] bg-white shadow-sm aspect-16/10 min-h-[200px] sm:min-h-[280px]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1320px"
        />
      </div>
    </section>
  );
}
