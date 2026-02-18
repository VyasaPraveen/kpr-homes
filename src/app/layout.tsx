import type { Metadata } from "next";
import { playfairDisplay, inter } from "@/lib/fonts";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/layout/ScrollToTop";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "KPR Homes | Premium Construction Contractor",
    template: "%s | KPR Homes",
  },
  description:
    "KPR Homes is a premium construction contractor specializing in commercial and residential projects. Building excellence, delivering trust since 2008.",
  keywords: [
    "construction company",
    "residential construction",
    "commercial construction",
    "luxury apartments",
    "KPR Homes",
    "building contractor",
    "Hyderabad",
  ],
  openGraph: {
    title: "KPR Homes | Premium Construction Contractor",
    description:
      "Building Dreams Into Reality. Premium commercial and residential construction services.",
    type: "website",
    locale: "en_IN",
    siteName: "KPR Homes",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${inter.variable}`}>
      <body className="font-body antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
