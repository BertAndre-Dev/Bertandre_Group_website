"use client";

import React from "react";
import Link from "next/link";
import Button from "@/components/atom/button/page";
import Pill from "@/components/atom/pill/page";

export default function CallToActionSection() {
  return (
    <section className="bg-white pb-12 pt-24 lg:pb-16 lg:pt-20">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto gap-6">
          <Pill className="px-6 py-2" active>
            {" "}
            Reach out to us
          </Pill>
          <p className="text-[#4C4C4C] text-[14px] md:text-[20px] xl:text-[24px] font-normal leading-7 xl:leading-8">
            Have a partnership idea or business inquiry? Let&apos;s explore
            opportunities together.
          </p>
          <p className="w-[300px] md:w-full text-center text-[#4C4C4C] text-[14px] md:text-[20px] xl:text-[24px] font-semibold leading-snug">
            Connect with BertAndre Group to start a conversation.
          </p>
          <Link href="/contact">
            <Button
              className="bg-[#1560BD] hover:bg-[#124ea0] text-white rounded-full px-14 py-3 text-base font-medium"
              bg="bg-[#1560BD]"
              text="text-white"
              hover="hover:bg-[#124ea0]"
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
