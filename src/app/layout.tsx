import type { Metadata } from "next";
import { poppins, inter } from "@/lib/fonts";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/layout/ScrollToTop";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import ScrollProgressBar from "@/components/layout/ScrollProgressBar";
import ChatWidget from "@/components/chat/ChatWidget";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kprhomes.in"),
  title: {
    default: "KPR Homes | Premium Construction Contractor in Tirupati",
    template: "%s | KPR Homes",
  },
  description:
    "KPR Homes is a premium construction contractor in Tirupati specializing in commercial buildings and residential apartments. 15+ years of excellence, 500+ projects delivered. Call +91 98493 51276.",
  keywords: [
    "construction company Tirupati",
    "residential apartments Tirupati",
    "commercial buildings Tirupati",
    "luxury apartments Tirupati",
    "KPR Homes",
    "building contractor Andhra Pradesh",
    "home construction Tirupati",
    "apartment builders Tirupati",
    "commercial construction Andhra Pradesh",
    "KPR Homes Tirupati",
    "best construction company Tirupati",
    "premium apartments Tirupati",
  ],
  authors: [{ name: "KPR Homes" }],
  creator: "KPR Homes",
  publisher: "KPR Homes",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "KPR Homes | Premium Construction Contractor in Tirupati",
    description:
      "We create landmarks. Premium commercial buildings and residential apartments in Tirupati since 2008. 500+ projects, 200+ happy clients.",
    type: "website",
    locale: "en_IN",
    siteName: "KPR Homes",
    url: "https://kprhomes.in",
  },
  twitter: {
    card: "summary_large_image",
    title: "KPR Homes | Premium Construction Contractor in Tirupati",
    description:
      "Building Dreams Into Reality. Premium commercial buildings and residential apartments in Tirupati since 2008.",
  },
  alternates: {
    canonical: "https://kprhomes.in",
  },
  verification: {
    google: "add-your-google-verification-code-here",
  },
  other: {
    "geo.region": "IN-AP",
    "geo.placename": "Tirupati",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://kprhomes.in",
  name: "KPR Homes",
  description:
    "Premium construction contractor in Tirupati specializing in commercial buildings and residential apartments since 2008.",
  url: "https://kprhomes.in",
  telephone: "+919849351276",
  email: "kprprojects.ind@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "601, KPR Meridian, Revenue Colony, Near Hotel Taj, Beside Vintage INN",
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
  sameAs: [
    "https://facebook.com/kprhomes",
    "https://instagram.com/kprhomes",
    "https://linkedin.com/company/kprhomes",
    "https://youtube.com/@kprhomes",
  ],
  priceRange: "$$",
  foundingDate: "2008",
  numberOfEmployees: "50-200",
  areaServed: {
    "@type": "City",
    name: "Tirupati",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Construction Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Residential Apartment Construction",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Commercial Building Construction",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Interior Design",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Renovation & Remodeling",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1a2744" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased">
        <ScrollProgressBar />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
        <WhatsAppButton />
        <ChatWidget />
      </body>
    </html>
  );
}
