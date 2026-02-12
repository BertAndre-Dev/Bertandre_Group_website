import React from "react";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";

interface NavbarTopProps {
  phone: string;
  email: string;
  address: string;
  instagramUrl: string;
  facebookUrl: string;
}

export default function NavbarTop({
  phone,
  email,
  address,
  instagramUrl,
  facebookUrl,
}: NavbarTopProps) {
  return (
    <div className="bg-[#1560BD] text-white py-8">
      <div className="container mx-auto px-4 hidden lg:block">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 md:gap-4 lg:gap-12 items-center text-sm">
          {/* Phone */}
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <a
              href={`tel:${phone.replace(/\s/g, "")}`}
              className="hover transition-colors text-base font-medium"
            >
              {phone}
            </a>
          </div>

          {/* Email */}
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <a
              href={`mailto:${email}`}
              className="hover transition-colors text-base font-medium"
            >
              {email}
            </a>
          </div>

          {/* Address */}
          <div className="flex items-center gap-2 lg:col-span-2">
            <MapPin className="w-4 h-4 flex-shrink-0" />
            <span className="text-base font-medium">{address}</span>
          </div>

          {/* Social Media */}
          <div className="flex items-center gap-4">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
