"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import NavbarTop from "@/components/atom/navbarTop/page";
import Button from "@/components/atom/button/page";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/subsidiaries", label: "Subsidiaries" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact Us" },
  ];

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      {/* 🔹 Navbar Top with Props */}
      <NavbarTop
        phone="+234 123 456 7890"
        email="info@bertandregroup.com"
        address="20 Audu Ekphega street Lekki Phase 1"
        instagramUrl="https://instagram.com/bertandregroup"
        facebookUrl="https://facebook.com/bertandregroup"
      />

      {/* Main Navbar */}
      <div className="container mx-auto px-6 md:px-8 lg:px-10 xl:px-0">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/Logo.png"
              alt="Logo"
              width={100}
              height={100}
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-x-16 xl:gap-x-20">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              if (link.label === "Contact Us") {
                return (
                  <Link key={link.href} href={link.href}>
                    <Button
                      bg="bg-[#1560BD]"
                      hover="hover:bg-[#124ea0]"
                      text="text-white"
                      padding="px-8 py-4"
                      rounded="rounded-full"
                    >
                      Contact Us
                    </Button>
                  </Link>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-base font-medium transition-colors ${
                    isActive
                      ? "text-[#1560BD]"
                      : "text-[#4C4C4C] hover:text-[#1560BD]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 cursor-pointer"
            aria-label="Toggle menu"
          >
            <Image
              src="/assets/Mobile hamburger.svg"
              alt="Menu"
              width={40}
              height={40}
            />
          </button>
        </div>
      </div>

      {/* Mobile Fullscreen Menu */}
      {isMenuOpen && (
        // <div className="fixed inset-0 z-[999] bg-white md:hidden">
        <div className="fixed inset-0 z-999 bg-white lg:hidden">
          <div className="flex items-center justify-between px-6 py-5 border-b">
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              <Image
                src="/assets/Logo.png"
                alt="Logo"
                width={100}
                height={100}
                priority
              />
            </Link>

            <Button onClick={toggleMenu} className="p-2">
              <Image
                src="/assets/Close.svg"
                alt="Close"
                width={40}
                height={40}
                className=""
              />
            </Button>
          </div>

          <div className="flex flex-col items-center justify-center h-[calc(80vh-210px)] gap-y-12">
            {navLinks
              .filter((link) => link.label !== "Contact Us")
              .map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-xl font-medium ${
                    pathname === link.href ? "text-[#1560BD]" : "text-[#4C4C4C]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
          </div>

          <div className="flex justify-center">
            <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
              <Button 
              // className="w-full bg-[#1560BD]  py-2 text-white text-lg rounded="rounded-full" "
              bg="bg-[#1560BD]"
              text="text-white"
              rounded="rounded-full"
              padding="px-12 py-4"
              hover="hover:bg-[#124ea0]"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
