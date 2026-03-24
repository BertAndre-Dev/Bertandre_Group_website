import React from "react";

interface PillProps {
  readonly children: React.ReactNode;
  readonly active?: boolean;
  readonly className?: string;
}

export default function Pill({
  children,
  active = true,
  className = "",
}: PillProps) {
  return (
    <span
      className={`
        inline-block px-4 py-1 rounded-full text-[14px] md:text-[18px] font-semibold md:font-bold
        ${active ? "bg-[#FEE6D4] text-[#1A1A1A] border border-[#FA8128]" : "bg-gray-100 text-gray-600"}
        ${className}
      `}
    >
      {children}
    </span>
  );
}
