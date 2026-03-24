"use client";

import Image from "next/image";
import React, { useCallback, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const EASE = [0.22, 1, 0.36, 1] as const;

const SLIDES = [
  {
    id: "consulting",
    label: "Consulting",
    image: "/sliders2/about-us2.svg",
    icon: "/sliders2/consulting-icon.svg",
    description:
      "\u201cClarity drives growth. We combine strategy, financial insight, and technology to help businesses make informed decisions, navigate complexity, and scale with confidence.\u201d",
  },
  {
    id: "energy",
    label: "Energy",
    image: "/sliders2/saair.svg",
    icon: "/sliders2/energy-icon.svg",
    description:
      "\u201cReliable energy is the foundation of productivity. We design practical energy solutions that power communities, estates, and enterprises today while enabling sustainable infrastructure for tomorrow.\u201d",
  },
  {
    id: "smart-fleet",
    label: "Smart Fleet",
    image: "/sliders2/autodate.svg",
    icon: "/sliders2/smart-icon.svg",
    description:
      "\u201cMobility should be efficient, compliant, and predictable. We simplify fleet operations and vehicle administration so businesses can focus on performance, not paperwork.\u201d",
  },
  {
    id: "real-estate",
    label: "Real Estate",
    image: "/sliders2/prim.svg",
    icon: "/sliders2/real-icon.svg",
    description:
      "\u201cReal estate value is built over time. We develop and manage properties with discipline, transparency, and technology-driven efficiency to deliver long-term asset value.\u201d",
  },
] as const;

export default function HeroBanner() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  const goToSlide = useCallback((index: number) => {
    swiperRef.current?.slideToLoop(index);
    setActiveIndex(index);
  }, []);

  const activeSlide = SLIDES[activeIndex] ?? SLIDES[0];

  return (
    <section className="mx-auto w-full max-w-7xl px-4 md:px-8 xl:px-0 pb-12 lg:pb-16">
      <div className="relative w-full rounded-2xl lg:rounded-3xl overflow-hidden aspect-33/10 min-h-[200px] max-h-[320px] bg-[#001F3F]">
        <Swiper
          modules={[Autoplay]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.realIndex);
          }}
          spaceBetween={0}
          slidesPerView={1}
          loop
          speed={600}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          className="h-full"
        >
          {SLIDES.map((slide, index) => (
            <SwiperSlide key={slide.id} className="h-full">
              <div className="relative h-full min-h-[240px] w-full">
                {/* Large SVGs: native img avoids layout issues with embedded rasters */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={slide.image}
                  alt={slide.label}
                  className="absolute inset-0 h-full w-full object-cover"
                  loading={index === 0 ? "eager" : "lazy"}
                  fetchPriority={index === 0 ? "high" : "low"}
                  decoding="async"
                />
                <div
                  className="absolute inset-0 bg-black/35"
                  aria-hidden
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Tab controls */}
        <div className="pointer-events-none absolute inset-x-0 top-3 z-20 flex justify-center px-2 sm:top-4">
          <div className="pointer-events-auto flex max-w-[calc(100%-1rem)] flex-nowrap items-center justify-center gap-1.5 sm:gap-2 md:gap-3">
            {SLIDES.map((slide, index) => {
              const isActive = activeIndex === index;
              return (
                <button
                  key={slide.id}
                  type="button"
                  aria-label={`Show ${slide.label}${isActive ? " (current)" : ""}`}
                  aria-current={isActive ? "true" : undefined}
                  onClick={() => goToSlide(index)}
                  className={[
                    "flex min-w-0 shrink-0 cursor-pointer items-center mt-0  xl:mt-4 justify-center  gap-1.5 rounded-full px-2.5 py-2 text-xs font-medium transition-all duration-300 sm:gap-2 sm:px-4 sm:py-2.5 sm:text-sm md:px-5",
                    isActive
                      ? "bg-[#FA8128] text-white shadow-md ring-1 ring-white/20"
                      : "border border-[#FA8128]/90 bg-black/25 text-white backdrop-blur-sm hover:bg-black/40",
                  ].join(" ")}
                >
                  <span className="relative inline-block h-4 w-4 shrink-0 sm:h-5 sm:w-5">
                    <Image
                      src={slide.icon}
                      alt=""
                      fill
                      className="object-contain"
                      sizes="20px"
                    />
                  </span>
                  <span className={isActive ? "inline" : "hidden sm:inline"}>
                    {slide.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Quote overlay */}
        <div className="pointer-events-none absolute inset-0 z-10 flex items-end justify-center p-4 sm:p-6 lg:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide.id}
              initial={
                reduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }
              }
              animate={
                reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
              }
              exit={
                reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }
              }
              transition={{
                duration: reduceMotion ? 0.2 : 0.55,
                ease: EASE,
              }}
              className="w-full max-w-140 rounded-2xl border border-white/10 bg-black/55 px-4 py-4 text-center shadow-lg backdrop-blur-md sm:px-6 sm:py-5 lg:px-8 lg:py-6"
            >
              <p className="text-sm leading-relaxed text-white sm:text-base lg:text-lg">
                {activeSlide.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
