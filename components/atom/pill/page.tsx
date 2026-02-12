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
        inline-block px-4 py-2 rounded-full text-[14px] md:text-[20px] font-semibold md:font-bold
        ${active ? "bg-[#D0DFF280] text-[#1560BD] border border-[#739FD7]" : "bg-gray-100 text-gray-600"}
        ${className}
      `}
    >
      {children}
    </span>
  );
}
