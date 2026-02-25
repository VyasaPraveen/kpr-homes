import { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import OfficeInfo from "@/components/contact/OfficeInfo";

export const metadata: Metadata = {
  title: "Contact Us - Get a Free Quote",
  description:
    "Contact KPR Homes for residential apartments and commercial buildings in Tirupati. Call +91 98493 51276 or visit our office at Revenue Colony, Tirupati.",
  keywords: ["contact KPR Homes", "construction enquiry Tirupati", "building contractor contact", "KPR Homes phone number", "KPR Homes address"],
  openGraph: {
    title: "Contact KPR Homes - Free Construction Consultation",
    description: "Get in touch for residential and commercial construction projects. Call +91 98493 51276.",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-gradient-navy overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>
        <div className="container-custom relative z-10 text-center">
          <p className="text-gold-400 font-medium text-sm tracking-widest uppercase mb-4">
            Get In Touch
          </p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Have a project in mind? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
            <div className="lg:col-span-2">
              <OfficeInfo />
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-[400px] bg-charcoal-100 relative">
        <div className="absolute inset-0 flex items-center justify-center bg-navy-50">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-navy-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <p className="text-navy-900 font-heading font-bold text-lg">KPR Homes Office</p>
            <p className="text-charcoal-500 text-sm max-w-xs">601, KPR Meridian, Revenue Colony, Near Hotel Taj, Beside Vintage INN, Tirupati - 517501</p>
          </div>
        </div>
      </section>
    </>
  );
}
