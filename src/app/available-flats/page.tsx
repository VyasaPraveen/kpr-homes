import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BedDouble, Ruler, IndianRupee, MessageCircle, Phone, Info } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeInWhenVisible from "@/components/animations/FadeInWhenVisible";
import ProjectQuickNav from "@/components/projects/ProjectQuickNav";
import { SITE_CONFIG } from "@/lib/constants";
import { formatCurrency } from "@/lib/utils";
import {
  AVAILABLE_FLATS,
  AVAILABLE_FLAT_IMAGES,
  FLAT_PRICE_NOTE,
  flatPrice,
} from "@/data/availableFlats";

export const metadata: Metadata = {
  title: "2 & 3 BHK Flats for Sale in Tirupati",
  description:
    "2 BHK (1,217 sq ft) and 3 BHK (1,740 - 2,040 sq ft) flats for sale in Tirupati by KPR Homes, from Rs. 4,900 per sq ft. See sizes, prices and construction progress, and enquire on WhatsApp.",
  keywords: [
    "flats for sale in Tirupati",
    "2 BHK flat for sale Tirupati",
    "3 BHK flat for sale Tirupati",
    "apartments for sale Tirupati",
    "new apartments Tirupati",
    "KPR Homes flats",
    "KPR Developments",
    "flat price per sq ft Tirupati",
  ],
  alternates: {
    canonical: "https://kprhomes.in/available-flats",
  },
  openGraph: {
    title: "Flats for Sale in Tirupati - KPR Homes",
    description:
      "2 BHK & 3 BHK flats from 1,217 to 2,040 sq ft. Prices from Rs. 4,900 per sq ft.",
    url: "https://kprhomes.in/available-flats",
    images: [{ url: `https://kprhomes.in${AVAILABLE_FLAT_IMAGES.elevation}`, alt: "KPR Homes apartment elevation" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flats for Sale in Tirupati - KPR Homes",
    description: "2 BHK & 3 BHK flats from 1,217 to 2,040 sq ft. Prices from Rs. 4,900 per sq ft.",
  },
};

const whatsappFor = (label: string) =>
  `${SITE_CONFIG.socialLinks.whatsapp}?text=${encodeURIComponent(
    `Hi KPR Homes, I'm interested in the ${label} flat listed on your website. Please share availability, floor plan and site-visit details.`
  )}`;

const flatsJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Flats for sale in Tirupati by KPR Homes",
  url: "https://kprhomes.in/available-flats",
  numberOfItems: AVAILABLE_FLATS.length,
  itemListElement: AVAILABLE_FLATS.map((f, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Offer",
      name: `${f.type} flat - ${f.areaSqft} sq ft`,
      price: flatPrice(f),
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      seller: { "@type": "Organization", name: "KPR Homes", url: "https://kprhomes.in" },
      itemOffered: {
        "@type": "Apartment",
        name: `${f.type} - ${f.areaSqft} sq ft`,
        numberOfRooms: parseInt(f.type, 10),
        floorSize: { "@type": "QuantitativeValue", value: f.areaSqft, unitCode: "FTK" },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Tirupati",
          addressRegion: "Andhra Pradesh",
          addressCountry: "IN",
        },
      },
    },
  })),
};

export default function AvailableFlatsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(flatsJsonLd) }}
      />
      <PageHero
        label="KPR Developments"
        title="Available Flats"
        subtitle="2 & 3 BHK apartments for sale in Tirupati. Premium Homes. Thoughtfully Built."
      />
      <ProjectQuickNav variant="residential" />

      {/* Units + price list */}
      <section className="section-padding bg-charcoal-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
            <FadeInWhenVisible direction="left" className="lg:col-span-2">
              <figure className="rounded-2xl overflow-hidden shadow-card bg-white">
                <Image
                  src={AVAILABLE_FLAT_IMAGES.elevation}
                  alt="Front elevation of the KPR Homes apartment project in Tirupati (artist's impression)"
                  width={1080}
                  height={662}
                  className="w-full h-auto"
                  priority
                />
                <figcaption className="px-5 py-3 text-xs text-charcoal-500">
                  Elevation (artist&apos;s impression)
                </figcaption>
              </figure>
            </FadeInWhenVisible>

            <div className="lg:col-span-3">
              <SectionHeading
                title="Flats Available Now"
                subtitle="Choose your size. Price = area x rate per sq ft."
                align="left"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {AVAILABLE_FLATS.map((f, i) => {
                  const label = `${f.type} (${f.areaSqft.toLocaleString("en-IN")} sq ft)`;
                  return (
                    <FadeInWhenVisible key={`${f.type}-${f.areaSqft}`} delay={i * 0.08} className="h-full">
                      <article className="h-full bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow duration-300 border border-charcoal-100 flex flex-col">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="inline-flex items-center gap-2 font-heading text-xl font-bold text-navy-900">
                            <BedDouble className="w-5 h-5 text-gold-500" aria-hidden="true" />
                            {f.type}
                          </h3>
                          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-green-50 text-green-700 border border-green-200">
                            Available
                          </span>
                        </div>
                        <dl className="space-y-2 text-sm mb-5">
                          <div className="flex justify-between">
                            <dt className="flex items-center gap-1.5 text-charcoal-500">
                              <Ruler className="w-4 h-4" aria-hidden="true" /> Area
                            </dt>
                            <dd className="font-medium text-navy-900">{f.areaSqft.toLocaleString("en-IN")} sq ft</dd>
                          </div>
                          <div className="flex justify-between">
                            <dt className="flex items-center gap-1.5 text-charcoal-500">
                              <IndianRupee className="w-4 h-4" aria-hidden="true" /> Rate
                            </dt>
                            <dd className="font-medium text-navy-900">{formatCurrency(f.ratePerSqft)} / sq ft</dd>
                          </div>
                        </dl>
                        <div className="mt-auto">
                          <p className="text-xs text-charcoal-400">Price</p>
                          <p className="font-heading text-2xl font-bold text-gold-600 mb-4">
                            {formatCurrency(flatPrice(f))}
                          </p>
                          <a
                            href={whatsappFor(label)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 w-full py-2.5 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold rounded-lg transition-colors"
                            aria-label={`Enquire about the ${label} flat on WhatsApp`}
                          >
                            <MessageCircle className="w-4 h-4" aria-hidden="true" /> Enquire on WhatsApp
                          </a>
                        </div>
                      </article>
                    </FadeInWhenVisible>
                  );
                })}
              </div>
              <p className="mt-6 flex items-start gap-2 text-sm text-charcoal-600 bg-gold-50 border border-gold-200 rounded-xl px-4 py-3">
                <Info className="w-4 h-4 mt-0.5 text-gold-600 shrink-0" aria-hidden="true" />
                <span>{FLAT_PRICE_NOTE} Prices and availability are subject to change; please confirm with our team.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Construction progress */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading title="Construction Progress" subtitle="Latest photos from the site" />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {AVAILABLE_FLAT_IMAGES.progress.map((src, i) => (
              <FadeInWhenVisible key={src} delay={i * 0.08}>
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-card">
                  <Image
                    src={src}
                    alt={`Construction progress photo ${i + 1}: foundation and column work`}
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy-900">
        <div className="container-custom text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Book a Site Visit</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            See the site, floor plans and specifications with our team. Call us or send a message on WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${SITE_CONFIG.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-gold text-navy-900 font-semibold rounded-lg hover:shadow-gold-lg transition-all duration-300"
            >
              <Phone className="w-5 h-5" aria-hidden="true" /> {SITE_CONFIG.phone}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
