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
    <nav className="bg-[#1A1A1A] shadow-md sticky top-0 z-50 py-4">

      {/* Main Navbar */}
      <div className="container  mx-auto px-6 md:px-8 lg:px-10 xl:px-0">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/Logo.svg"
              alt="Logo"
              width={150}
              height={150}
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-x-12 xl:gap-x-20">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              if (link.label === "Contact Us") {
                return (
                  <Link key={link.href} href={link.href}>
                    <Button
                      bg="bg-[#FA8128]"
                      hover="hover:bg-[#E6731E]"
                      text="text-[#F7F7F7]"
                      padding="px-8 py-3"
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
                      ? "text-[#FA8128]"
                      : "text-[#F7F7F7] hover:text-[#FA8128]"
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
          <div className="flex items-center justify-between px-6 py-4 border-b">
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              <Image
                src="/assets/Logo.svg"
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
                    pathname === link.href ? "text-[#FA8128]" : "text-[#111111]"
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
              bg="bg-[#FA8128]"
              text="text-white"
              rounded="rounded-full"
              padding="px-12 py-4"
              hover="hover:bg-[#E6731E]"
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
