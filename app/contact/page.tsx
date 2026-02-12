import type { Metadata } from "next";
import Navbar from "@/components/molecules/navbar/page";
import Footer from "@/components/molecules/footer/page";
import ContactForm from "@/components/molecules/contactForm/page";
import ContactCards from "@/components/molecules/contactCards/page";

export const metadata: Metadata = {
  title: "Contact Us | BertAndre Group",
  description:
    "Get in touch with BertAndre Group. Visit us, call us, or send a consultation request.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <section className="container mx-auto px-6 md:px-8 lg:px-0 pt-18 sm:pt-12 lg:pt-16 mb-50">
          <div className="max-w-[1320px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              <ContactCards />
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
