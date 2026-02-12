"use client";

import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    serviceType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form submission logic can be added here
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="bg-[#1560BD] rounded-[30px] p-6 sm:p-8 lg:p-10">
      <h2 className="text-white text-[20px] md:text-[24px] font-extrabold mb-3">
        Make a Consultation
      </h2>
      <p className="text-[#F7F7F7] text-[14px] md:text-base font-medium mb-6">
        Feel free to contact us with your queries
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full rounded-xl px-4 py-3 bg-white border border-[#4480CA] text-[#4C4C4C] placeholder-[#666666] text-sm md:text-base font-medium focus:outline-none focus:ring-2 focus:ring-white/50"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="w-full rounded-xl px-4 py-3 bg-white border border-[#4480CA] text-[#4C4C4C] placeholder-[#666666] text-sm md:text-base font-medium focus:outline-none focus:ring-2 focus:ring-white/50"
          required
        />
        <select
          name="serviceType"
          value={formData.serviceType}
          onChange={handleChange}
          aria-label="Service Type"
          className="w-full rounded-xl px-4 py-3 bg-white border border-[#4480CA] text-[#4C4C4C] text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-white/50 appearance-none cursor-pointer bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%234C4C4C%22%20stroke-width%3D%222%22%3E%3Cpath%20d%3D%22M6%209l6%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-size-[1.25rem] bg-position-[right_0.75rem_center] bg-no-repeat pr-10"
        >
          <option value="">Service Type</option>
          <option value="consulting">Consulting</option>
          <option value="real-estate">Real Estate</option>
          <option value="energy">Energy</option>
          <option value="mobility">Mobility</option>
          <option value="technology">Technology</option>
          <option value="other">Other</option>
        </select>
        <textarea
          name="message"
          placeholder="Write your message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full rounded-xl px-4 py-3 bg-white border border-[#4480CA] text-[#4C4C4C] placeholder-[#666666] text-sm md:text-base font-medium focus:outline-none focus:ring-2 focus:ring-white/50 resize-y min-h-[120px]"
          required
        />
        <button
          type="submit"
          className="w-full rounded-full py-3 px-6 bg-white text-[#1560BD] font-semibold text-base hover:bg-white/95 transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
