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
    <article className="w-full max-w-[1320px] mx-auto border border-[#D0DFF2] md:border-none rounded-2xl md:rounded-none overflow-hidden bg-white shadow-sm md:shadow-none">
      <div className="p-4 md:p-0 py-4">
        <div className="relative w-full rounded-[15px] md:rounded-[30px] overflow-hidden min-h-[250px] sm:border sm:border-[#D0DFF2]">
          {/* Mobile Image */}
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover md:hidden"
            priority
          />

          {/* Desktop Image — wrapped to allow independent padding + radius */}
          <div className="hidden md:block absolute inset-0 p-6">
            <div className="relative w-full h-full rounded-[20px] overflow-hidden">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 sm:py-8 lg:py-10 px-4 md:px-0 ">
        <h2 className="text-[#4C4C4C] text-[14px] md:text-[40px] lg:text-3xl font-semibold md:font-bold mb-4">
          {title}
        </h2>
        <p className="text-[#4C4C4C] text-[14px] md:text-[20px] font-normal leading-relaxed mb-4">
          {description}
        </p>
        <Link
          href={linkHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[#1560BD] font-medium text-[14px] md:text-[20px] hover:underline"
        >
          {/* Desktop */}
          <span className="">{linkLabel}</span>

          <span aria-hidden="true"> →</span>
        </Link>
      </div>
    </article>
  );
}
