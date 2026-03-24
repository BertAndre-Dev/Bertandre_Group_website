"use client";

import React from "react";
import Link from "next/link";
import Button from "@/components/atom/button/page";
import Pill from "@/components/atom/pill/page";

export default function CallToActionSection() {
  return (
    <section className="bg-white pb-12 pt-18 lg:pb-16 lg:pt-20">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-0">
        <div className="flex flex-col items-center text-center xl:max-w-3xl mx-auto gap-8">
          <Pill className="px-6 py-2" active>
            {" "}
            Reach out to us
          </Pill>
          <p className="text-[#4C4C4C] text-[14px] md:text-base xl:text-[18px] font-normal leading-7 xl:leading-8">
            Have a partnership idea or business inquiry? Let&apos;s explore
            opportunities together.
          </p>
          <p className="w-[300px] md:w-full text-center text-[#4C4C4C] text-[14px] md:text-base xl:text-[18px] font-semibold leading-snug">
            Connect with BertAndre Group to start a conversation.
          </p>
          <Link href="/contact">
            <Button
              className="bg-[#FA8128] hover:bg-[#E6731E] text-white rounded-full px-10 py-4 text-base font-semibold"
              bg="bg-[#FA8128]"
              text="text-white"
              hover="hover:bg-[#E6731E]"
              rounded="rounded-full"
            >
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
