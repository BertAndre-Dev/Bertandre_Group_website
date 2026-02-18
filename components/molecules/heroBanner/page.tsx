// "use client";

// import React, { useRef, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import type { Swiper as SwiperType } from "swiper";


// import "swiper/css";
// import Image from "next/image";

// interface SlideData {
//   id: string;
//   label: string;
//   src: string;
//   alt: string;
//   description: string;
//   icon: React.ReactNode;
// }

// function SlideContent({
//   slide,
//   index,
// }: {
//   readonly slide: SlideData;
//   readonly index: number;
// }) {
//   const [imageLoaded, setImageLoaded] = useState(false);

//   return (
//     <div className="relative w-full h-full">
//       <Image
//         fill
//         src={slide.src}
//         alt={slide.alt}
//         className="object-cover transition-opacity duration-300"
//         style={{ opacity: imageLoaded ? 1 : 0 }}
//         priority={index === 0}
//         // loading={index === 0 ? "eager" : "lazy"}
//         loading="lazy"
//         sizes="(max-width: 1024px) 100vw, 1720px"
//         onLoad={() => setImageLoaded(true)}
//       />
//       {!imageLoaded && (
//         <div
//           className="absolute inset-0 bg-gray-200 animate-pulse"
//           aria-hidden
//         />
//       )}
//       {imageLoaded && (
//         <div
//           className="absolute inset-0 flex items-end justify-center p-4 sm:p-6 lg:p-8 pb-8 sm:pb-10 lg:pb-12"
//           style={{
//             background:
//               "linear-gradient(0deg, rgba(0,0,0,0.3), rgba(0,0,0,0.3))",
//           }}
//         >
//           <div className="w-full lg:w-2/3 xl:w-2/4 max-w-3xl rounded-2xl bg-white/90 backdrop-blur-sm px-4 py-4 sm:px-6 sm:py-5 shadow-sm border border-white/80">
//             <p className="text-[#4C4C4C] text-sm sm:text-base lg:text-lg leading-relaxed">
//               {slide.description}
//             </p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// const SLIDES = [
//   {
//     id: "consulting",
//     label: "Consulting",
//     src: "/assets/sliders/consulting.svg",
//     alt: "Consulting Services",
//     description:
//       "“Clarity drives growth. We combine strategy, financial insight, and technology to help businesses make informed decisions, navigate complexity, and scale with confidence.”",
//     icon: (
//       <svg
//         className="w-5 h-5 shrink-0"
//         fill="none"
//         stroke="currentColor"
//         viewBox="0 0 24 24"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={2}
//           d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
//         />
//       </svg>
//     ),
//   },
//   {
//     id: "energy",
//     label: "Energy",
//     src: "/assets/sliders/saair.svg",
//     alt: "Energy Solutions",
//     description:
//       "“Reliable energy is the foundation of productivity. We design practical energy solutions that power communities, estates, and enterprises today while enabling sustainable infrastructure for tomorrow.”",
//     icon: (
//       <svg
//         className="w-5 h-5 shrink-0"
//         fill="none"
//         stroke="currentColor"
//         viewBox="0 0 24 24"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={2}
//           d="M13 10V3L4 14h7v7l9-11h-7z"
//         />
//       </svg>
//     ),
//   },
//   {
//     id: "smart-fleet",
//     label: "Smart Fleet",
//     src: "/assets/sliders/autodate.svg",
//     alt: "Smart Fleet Management",
//     description:
//       "“Mobility should be efficient, compliant, and predictable. We simplify fleet operations and vehicle administration so businesses can focus on performance, not paperwork.”",
//     icon: (
//       <svg
//         className="w-5 h-5 shrink-0"
//         fill="none"
//         stroke="currentColor"
//         viewBox="0 0 24 24"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={2}
//           d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
//         />
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={2}
//           d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
//         />
//       </svg>
//     ),
//   },
//   {
//     id: "real-estate",
//     label: "Real Estate",
//     src: "/assets/sliders/prim.svg",
//     alt: "Real Estate",
//     description:
//       "“Real estate value is built over time. We develop and manage properties with discipline, transparency, and technology-driven efficiency to deliver long-term asset value.”",
//     icon: (
//       <svg
//         className="w-5 h-5 shrink-0"
//         fill="none"
//         stroke="currentColor"
//         viewBox="0 0 24 24"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={2}
//           d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
//         />
//       </svg>
//     ),
//   },
// ];

// export default function HeroBanner() {
//   const swiperRef = useRef<SwiperType | null>(null);
//   const [activeIndex, setActiveIndex] = useState(0);

//   return (
//     <section className="container mx-auto pb-12 lg:pb-16">
//       <div className="relative w-full rounded-2xl lg:rounded-3xl overflow-hidden aspect-33/10 min-h-[240px] max-h-[420px] bg-gray-50">
//         <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 flex flex-nowrap items-center justify-center gap-1.5 sm:gap-3 px-2 min-w-0 max-w-[calc(100%-1rem)]">
//           {SLIDES.map((slide, index) => {
//             const isActive = activeIndex === index;
//             return (
//               <button
//                 key={slide.id}
//                 type="button"
//                 aria-label={`Show ${slide.label}${isActive ? " (current)" : ""}`}
//                 onClick={() => {
//                   swiperRef.current?.slideTo(index);
//                   setActiveIndex(index);
//                 }}
//                 className={`
//                   flex shrink-0 items-center justify-center gap-2 rounded-full px-2.5 py-2 sm:px-5 sm:py-2.5 text-sm font-medium cursor-pointer transition-colors min-w-0
//                   ${
//                     isActive
//                       ? "bg-white text-[#1560BD] shadow-md border border-[#1560BD]/20"
//                       : "bg-white/80 text-[#4C4C4C] border border-gray-200/80 hover:bg-white hover:border-[#1560BD]/30"
//                   }
//                 `}
//               >
//                 <span className={isActive ? "hidden sm:block" : "block"}>
//                   {slide.icon}
//                 </span>
//                 <span className={isActive ? "block" : "hidden sm:inline"}>
//                   {slide.label}
//                 </span>
//               </button>
//             );
//           })}
//         </div>

//         <Swiper
//           onSwiper={(swiper) => {
//             swiperRef.current = swiper;
//           }}
//           onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
//           spaceBetween={0}
//           slidesPerView={1}
//           loop={true}
//           speed={500}
//           className="h-full"
//         >
//           {SLIDES.map((slide, index) => (
//             <SwiperSlide key={slide.id} className="h-full">
//               <SlideContent slide={slide} index={index} />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// }


"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import Image from "next/image";

interface SlideData {
  id: string;
  label: string;
  src: string;
  alt: string;
  description: string;
  icon: React.ReactNode;
}

function SlideContent({
  slide,
  index,
}: {
  readonly slide: SlideData;
  readonly index: number;
}) {
  const [imageLoaded, setImageLoaded] = useState(false);

  // iOS Safari: onLoad often doesn't fire for SVG/cached images (WebKit bug). A fallback
  // timeout ensures we show the image instead of leaving a white or dark block.
  React.useEffect(() => {
    const fallback = setTimeout(() => setImageLoaded(true), 800);
    return () => clearTimeout(fallback);
  }, [slide.src]);

  return (
    <div className="relative w-full h-full">
      {/* Skeleton shown while image loads */}
      {!imageLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" aria-hidden />
      )}

      <Image
        fill
        src={slide.src}
        alt={slide.alt}
        unoptimized
        className="object-cover"
        style={{
          opacity: imageLoaded ? 1 : 0,
          willChange: "opacity",
        }}
        priority={index === 0}
        loading={index === 0 ? "eager" : "lazy"}
        sizes="(max-width: 1024px) 100vw, 1720px"
        onLoad={(e) => {
          const img = e.currentTarget;
          if (img.complete && img.naturalWidth > 0) {
            setImageLoaded(true);
          }
        }}
        onError={() => setImageLoaded(true)}
      />

      {imageLoaded && (
        <div
          className="absolute inset-0 flex items-end justify-center p-4 sm:p-6 lg:p-8 pb-8 sm:pb-10 lg:pb-12"
          style={{
            background: "linear-gradient(0deg, rgba(0,0,0,0.3), rgba(0,0,0,0.3))",
          }}
        >
          <div className="w-full lg:w-2/3 xl:w-2/4 max-w-3xl rounded-2xl bg-white/90 backdrop-blur-sm px-4 py-4 sm:px-6 sm:py-5 shadow-sm border border-white/80">
            <p className="text-[#4C4C4C] text-sm sm:text-base lg:text-lg leading-relaxed">
              {slide.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

const SLIDES = [
  {
    id: "consulting",
    label: "Consulting",
    src: "/assets/Picture1.png",
    alt: "Consulting Services",
    description:
      "\u201cClarity drives growth. We combine strategy, financial insight, and technology to help businesses make informed decisions, navigate complexity, and scale with confidence.\u201d",
    icon: (
      <svg
        className="w-5 h-5 shrink-0"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
  },
  {
    id: "energy",
    label: "Energy",
    src: "/assets/sliders/saair.svg",
    alt: "Energy Solutions",
    description:
      "\u201cReliable energy is the foundation of productivity. We design practical energy solutions that power communities, estates, and enterprises today while enabling sustainable infrastructure for tomorrow.\u201d",
    icon: (
      <svg
        className="w-5 h-5 shrink-0"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    id: "smart-fleet",
    label: "Smart Fleet",
    src: "/assets/sliders/autodate.svg",
    alt: "Smart Fleet Management",
    description:
      "\u201cMobility should be efficient, compliant, and predictable. We simplify fleet operations and vehicle administration so businesses can focus on performance, not paperwork.\u201d",
    icon: (
      <svg
        className="w-5 h-5 shrink-0"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    id: "real-estate",
    label: "Real Estate",
    src: "/assets/sliders/prim.svg",
    alt: "Real Estate",
    description:
      "\u201cReal estate value is built over time. We develop and manage properties with discipline, transparency, and technology-driven efficiency to deliver long-term asset value.\u201d",
    icon: (
      <svg
        className="w-5 h-5 shrink-0"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
  },
];

export default function HeroBanner() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="container mx-auto pb-12 lg:pb-16">
      <div className="relative w-full rounded-2xl lg:rounded-3xl overflow-hidden aspect-33/10 min-h-[240px] max-h-[420px] bg-gray-50">
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 flex flex-nowrap items-center justify-center gap-1.5 sm:gap-3 px-2 min-w-0 max-w-[calc(100%-1rem)]">
          {SLIDES.map((slide, index) => {
            const isActive = activeIndex === index;
            return (
              <button
                key={slide.id}
                type="button"
                aria-label={`Show ${slide.label}${isActive ? " (current)" : ""}`}
                onClick={() => {
                  swiperRef.current?.slideTo(index);
                  setActiveIndex(index);
                }}
                className={`
                  flex shrink-0 items-center justify-center gap-2 rounded-full px-2.5 py-2 sm:px-5 sm:py-2.5 text-sm font-medium cursor-pointer transition-colors min-w-0
                  ${
                    isActive
                      ? "bg-white text-[#1560BD] shadow-md border border-[#1560BD]/20"
                      : "bg-white/80 text-[#4C4C4C] border border-gray-200/80 hover:bg-white hover:border-[#1560BD]/30"
                  }
                `}
              >
                <span className={isActive ? "hidden sm:block" : "block"}>
                  {slide.icon}
                </span>
                <span className={isActive ? "block" : "hidden sm:inline"}>
                  {slide.label}
                </span>
              </button>
            );
          })}
        </div>

        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          speed={500}
          className="h-full"
        >
          {SLIDES.map((slide, index) => (
            <SwiperSlide key={slide.id} className="h-full">
              <SlideContent slide={slide} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}