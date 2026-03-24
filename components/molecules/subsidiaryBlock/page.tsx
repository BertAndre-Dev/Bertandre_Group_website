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
    <article className="w-full mx-auto border border-[#FEE6D4] md:border-none rounded-2xl md:rounded-none overflow-hidden bg-white shadow-sm md:shadow-none">
      <div className="p-6 md:p-0 md:py-6">
        <h2 className="text-[#4C4C4C] text-[14px] md:text-2xl font-semibold md:font-bold mb-4">
          {title}
        </h2>
        <p className="text-[#4C4C4C] text-[14px] md:text-base xl:text-[18px] font-normal leading-relaxed mb-4">
          {description}
        </p>
        <Link
          href={linkHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[#FA8128] font-medium text-[14px] md:text-base hover:underline"
        >
          {/* Mobile */}
          <span className="md:hidden">Learn more</span>

          {/* Desktop */}
          <span className="hidden md:inline">{linkLabel}</span>

          <span aria-hidden="true"> →</span>
        </Link>
      </div>
      <div className="rounded-3xl sm:border sm:border-[#FEE6D4] mx-auto">
        <div className="relative w-full rounded-xl sm:rounded-2xl overflow-hidden aspect-33/10 min-h-[150px]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-contain p-6"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1320px"
          />
        </div>
      </div>
    </article>
  );
}
