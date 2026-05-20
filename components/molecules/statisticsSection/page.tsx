"use client";

import React, { ReactNode } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

interface StatCardProps {
  readonly icon: ReactNode;
  readonly value: string;
  readonly label: string;
}

function StatCard({ icon, value, label }: StatCardProps) {
  return (
    <div className="flex flex-col md:flex-row items-start justify-start md:justify-center md:items-center gap-4">
      <div className="flex items-center justify-center w-[30px] h-[30px] shrink-0">
        {icon}
      </div>

      <div>
        <p className="text-[36px] text-black font-bold leading-tight pb-2">
          {value}
        </p>
        <p className="text-base text-black">{label}</p>
      </div>
    </div>
  );
}

const STATS = [
  {
    icon: (
      <Image
        src="/assets/team.svg"
        alt="team"
        width={30}
        height={30}
        className="w-full h-full object-contain"
      />
    ),
    value: "12+",
    label: "Team Members",
  },
  {
    icon: (
      <Image
        src="/assets/handshake.svg"
        alt="handshake"
        width={30}
        height={30}
        className="w-full h-full object-contain"
      />
    ),
    value: "20+",
    label: "Businesses",
  },
  {
    icon: (
      <Image
        src="/assets/setting.svg"
        alt="setting"
        width={30}
        height={30}
        className="w-full h-full object-contain"
      />
    ),
    value: "10+",
    label: "Innovative Solutions",
  },
];

export default function StatisticsSection() {
  return (
    <section className="bg-[#FFF6EF]">
      <div className="mx-auto w-full max-w-7xl px-8 md:px-8 xl:px-0 pt-10 pb-6 md:py-20 my-12 md:my-20">
        {/* Mobile (sm and down): slider */}
        <div className="md:hidden">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={16}
            slidesPerView={1.15}
            centeredSlides={false}
            loop
            autoplay={{ delay: 2500, disableOnInteraction: false, pauseOnMouseEnter: true }}
            grabCursor
            pagination={{ clickable: true }}
            className="w-full"
          >
            {STATS.map((stat) => (
              <SwiperSlide key={stat.label} className="h-auto">
                <div className="w-[150px] md:w-full mb-9 md:mb-0 ">
                  <StatCard icon={stat.icon} value={stat.value} label={stat.label} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop (md+): normal layout */}
        <div className="hidden md:flex md:flex-row md:items-center md:justify-between gap-12 md:gap-8">
          {STATS.map((stat) => (
            <StatCard
              key={stat.label}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}