"use client";

import React, { ReactNode } from "react";
import Image from "next/image";

interface StatCardProps {
  readonly icon: ReactNode;
  readonly value: string;
  readonly label: string;
}

function StatCard({ icon, value, label }: StatCardProps) {
  return (
    <div className="flex items-start justify-between gap-4">
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
      <div className="mx-auto w-full max-w-7xl px-4 md:px-0 py-10 md:py-20 my-12 md:my-20">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-12 md:gap-8">
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