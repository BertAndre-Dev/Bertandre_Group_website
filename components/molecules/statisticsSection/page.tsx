"use client";

import React, { ReactNode } from "react";
import Image from "next/image";
import { Handshake, Lightbulb } from "lucide-react";

interface StatCardProps {
  readonly icon: ReactNode;
  readonly value: string;
  readonly label: string;
}

function StatCard({ icon, value, label }: StatCardProps) {
  return (
    <div className="flex items-center gap-4 p-6">
      <div className="shrink-0 flex items-center justify-center text-[#184b9e]">
        {icon}
      </div>

      <div>
        <p className="text-2xl sm:text-3xl font-medium text-[#000] leading-tight">
          {value}
        </p>
        <p className="text-base text-[#000]">{label}</p>
      </div>
    </div>
  );
}

const STATS = [
  {
    icon: <Image src="/assets/team.svg" alt="team" width={48} height={48} />,
    value: "12+",
    label: "Team Members",
  },
  {
    icon: <Handshake className="w-12 h-12 text-[#184b9e]" strokeWidth={1.5} />,
    value: "20+",
    label: "Businesses",
  },
  {
    icon: <Lightbulb className="w-12 h-12 text-[#184b9e]" strokeWidth={1.5} />,
    value: "50+",
    label: "Innovative Solutions",
  },
];

export default function StatisticsSection() {
  return (
    <section className="bg-[#F7F7F7] py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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
