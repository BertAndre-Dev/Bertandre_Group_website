import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const CONTACT_CARDS = [
  {
    title: "Visit Us",
    icon: "location" as const,
    content:
      "20 Awudu Ekpekha Blvd St, Lekki Phase 1, Lekki 106104, Lagos, Nigeria",
  },
  {
    title: "Call Us",
    icon: "phone" as const,
    content: "+234 9138667927",
    sub: "Mon-Fri | 8AM - 4PM (WAT)",
  },
  {
    title: "Email Us",
    icon: "email" as const,
    content: "info@bertandregroup.com",
  },
];

function ContactIcon({
  type,
}: {
  readonly type: "location" | "phone" | "email";
}) {
  const className = "w-6 h-6 text-[#1560BD] shrink-0";

  switch (type) {
    case "location":
      return <MapPin className={className} aria-hidden />;
    case "phone":
      return <Phone className={className} aria-hidden />;
    default:
      return <Mail className={className} aria-hidden />;
  }
}

function ContactCard({
  card,
}: {
  readonly card: (typeof CONTACT_CARDS)[number];
}) {
  return (
    <div
      className="
        bg-[#D0DFF24D]
        rounded-[30px]
        px-6 py-8
        flex gap-4 items-start
        min-h-[176px] sm:min-h-0
      "
    >
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white border border-[#D0DFF2] shrink-0">
        <ContactIcon type={card.icon} />
      </div>

      <div>
        <h3 className="text-[#000] text-base md:text-[20px] font-bold mb-2">
          {card.title}
        </h3>

        {card.title === "Visit Us" ? (
          <p className="text-[#4C4C4C] text-[14px] md:text-base font-normal">
            <span className="sm:hidden">
              20 Awudu Ekpekha Blvd St,
              <br />
              Lekki Phase 1, Lekki 106104,
              <br />
              Lagos, Nigeria
            </span>
            <span className="hidden sm:inline">
              20 Awudu Ekpekha Blvd St, Lekki Phase 1, Lekki 106104, Lagos, Nigeria
            </span>
          </p>
        ) : (
          <p className="text-[#4C4C4C] text-[14px] md:text-base font-medium">
            {card.content}
          </p>
        )}

        {card.sub && (
          <p className="text-[#4C4C4C] text-[14px] md:text-base font-medium mt-1">
            {card.sub}
          </p>
        )}
      </div>
    </div>
  );
}

export default function ContactCards() {
  const [firstCard, ...otherCards] = CONTACT_CARDS;

  return (
    <div className="space-y-6">
      {/* Standalone first card */}
      <ContactCard card={firstCard} />

      {/* Two cards in a row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {otherCards.map((card) => (
          <ContactCard key={card.title} card={card} />
        ))}
      </div>
    </div>
  );
}
