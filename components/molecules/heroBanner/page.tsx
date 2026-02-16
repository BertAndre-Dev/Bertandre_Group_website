"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import NextImage from "next/image";

import "swiper/css";
import "swiper/css/pagination";

const SLIDES = [
  {
    desktop: "/assets/sliders/consulting.svg",
    mobile: "/assets/sliders/consulting-mobile.svg",
    alt: "Consulting Services",
  },
  {
    desktop: "/assets/sliders/energy.svg",
    mobile: "/assets/sliders/energy-mobile.svg",
    alt: "Energy Solutions",
  },
  {
    desktop: "/assets/sliders/smart fleet.svg",
    mobile: "/assets/sliders/smart fleet-mobile.svg",
    alt: "Smart Fleet Management",
  },
  {
    desktop: "/assets/sliders/real estate.svg",
    mobile: "/assets/sliders/real estate-mobile.svg",
    alt: "Real Estate",
  },
];

// Skeleton loader component
const ImageSkeleton = () => (
  <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
  </div>
);

// Individual slide component with loading states
const SlideImage = ({
  slide,
  index,
  isMobile,
}: {
  slide: (typeof SLIDES)[0];
  index: number;
  isMobile: boolean;
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const src = isMobile ? slide.mobile : slide.desktop;
  const displayClass = isMobile ? "md:hidden" : "hidden md:block";

  if (hasError) {
    return (
      <div
        className={`relative w-full h-full flex items-center justify-center bg-gray-100 ${displayClass}`}
      >
        <div className="text-center p-6">
          <svg
            className="w-12 h-12 mx-auto text-gray-400 mb-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <p className="text-sm text-gray-600">{slide.alt}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative w-full h-full ${displayClass}`}>
      {isLoading && <ImageSkeleton />}
      <NextImage
        fill
        src={src}
        alt={slide.alt}
        className={`object-cover transition-opacity duration-300 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        priority={index === 0}
        loading={index === 0 ? "eager" : "lazy"}
        quality={90}
        sizes={isMobile ? "100vw" : "1720px"}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setHasError(true);
        }}
      />
    </div>
  );
};

export default function HeroBanner() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="container mx-auto pb-12 lg:pb-16">
      <div
        className="relative w-full rounded-2xl lg:rounded-3xl overflow-hidden aspect-[33/10] min-h-[240px] max-h-[420px] bg-gray-50"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet !bg-white/60",
            bulletActiveClass: "swiper-pagination-bullet-active !bg-white",
          }}
          loop={true}
          speed={600}
          className="h-full"
          style={
            {
              "--swiper-pagination-bottom": "16px",
              "--swiper-pagination-bullet-size": "8px",
              "--swiper-pagination-bullet-horizontal-gap": "4px",
            } as React.CSSProperties
          }
        >
          {SLIDES.map((slide, index) => (
            <SwiperSlide key={index} className="h-full">
              {/* Mobile Image */}
              <SlideImage slide={slide} index={index} isMobile={true} />
              {/* Desktop Image */}
              <SlideImage slide={slide} index={index} isMobile={false} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Optional: Pause indicator */}
        {isPaused && (
          <div className="absolute top-4 right-4 bg-black/50 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
            Paused
          </div>
        )}
      </div>
    </section>
  );
}
