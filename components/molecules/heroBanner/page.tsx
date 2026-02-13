// "use client";

// import Image from "next/image";
// import React, { useState, useEffect } from "react";

// const SLIDES = [
//   {
//     desktop: "/assets/sliders/consulting.svg",
//     mobile: "/assets/sliders/consulting-mobile.svg",
//     alt: "Consulting Services",
//   },
//   {
//     desktop: "/assets/sliders/energy.svg",
//     mobile: "/assets/sliders/energy-mobile.svg",
//     alt: "Energy Solutions",
//   },
//   {
//     desktop: "/assets/sliders/smart fleet.svg",
//     mobile: "/assets/sliders/smart fleet-mobile.svg",
//     alt: "Smart Fleet Management",
//   },
//   {
//     desktop: "/assets/sliders/real estate.svg",
//     mobile: "/assets/sliders/real estate-mobile.svg",
//     alt: "Real Estate",
//   },
// ];

// export default function HeroBanner() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     checkMobile();
//     window.addEventListener("resize", checkMobile);

//     return () => window.removeEventListener("resize", checkMobile);
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
//     }, 3000); // Change slide every 3 seconds

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="container mx-auto pb-12 lg:pb-16">
//       <div className="relative w-full rounded-2xl lg:rounded-3xl overflow-hidden aspect-[33/10] min-h-[240px] max-h-[420px] group">
//         {/* Slides */}
//         {SLIDES.map((slide, index) => (
//           <div
//             key={index}
//             className={`absolute inset-0 transition-opacity duration-700 ${
//               index === currentSlide ? "opacity-100" : "opacity-0"
//             }`}
//           >
//             <Image
//               width={1720}
//               height={600}
//               src={isMobile ? slide.mobile : slide.desktop}
//               alt={slide.alt}
//               className="md:w-full h-full md:object-cover object-contain "
//               fetchPriority={index === 0 ? "high" : "low"}
//               loading={index === 0 ? "eager" : "lazy"}
//             />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

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

export default function HeroBanner() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile === null) {
    return null;
  }

  return (
    <section className="container mx-auto pb-12 lg:pb-16">
      <div className="relative w-full rounded-2xl lg:rounded-3xl overflow-hidden aspect-[33/10] min-h-[240px] max-h-[420px]">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="h-full"
        >
          {SLIDES.map((slide, index) => (
            <SwiperSlide key={index}>
              <Image
                width={1720}
                height={600}
                src={isMobile ? slide.mobile : slide.desktop}
                alt={slide.alt}
                className="w-full h-full object-contain"
                priority={index === 0}
                loading={index === 0 ? "eager" : "lazy"}
                fetchPriority={index === 0 ? "high" : "low"}
                sizes="(max-width: 768px) 100vw, 1720px"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}