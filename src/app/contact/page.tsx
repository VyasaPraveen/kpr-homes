import { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import OfficeInfo from "@/components/contact/OfficeInfo";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Contact Us - Free Construction Quote in Tirupati",
  description:
    "Contact KPR Homes for free construction quotes in Tirupati. Call +91 98493 51276 or visit us at 601, KPR Meridian, Revenue Colony, Tirupati 517501. Residential apartments & commercial building enquiries.",
  keywords: [
    "contact KPR Homes",
    "construction enquiry Tirupati",
    "building contractor contact Tirupati",
    "KPR Homes phone number",
    "KPR Homes address Tirupati",
    "free construction quote Tirupati",
    "builders near me Tirupati",
    "construction consultation Tirupati",
    "KPR Homes Revenue Colony",
    "building estimate Tirupati",
  ],
  alternates: {
    canonical: "https://kprhomes.in/contact",
  },
  openGraph: {
    title: "Contact KPR Homes - Free Construction Consultation in Tirupati",
    description:
      "Get a free quote for residential apartments and commercial buildings. Call +91 98493 51276 or visit our Tirupati office.",
    url: "https://kprhomes.in/contact",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact KPR Homes Tirupati - Free Construction Quote",
    description:
      "Get in touch for free construction consultation. Call +91 98493 51276. Visit us at Revenue Colony, Tirupati.",
  },
};

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "KPR Homes",
  telephone: "+919849351276",
  email: "kprprojects.ind@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "601, KPR Meridian, Revenue Colony, Near Hotel Taj, Beside Vintage INN",
    addressLocality: "Tirupati",
    addressRegion: "Andhra Pradesh",
    postalCode: "517501",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "13.6288",
    longitude: "79.4192",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:00",
    closes: "18:00",
  },
  url: "https://kprhomes.in/contact",
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <PageHero
        label="Get In Touch"
        title="Contact Us"
        subtitle="Have a project in mind? We'd love to hear from you."
      />
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
