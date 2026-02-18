"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Building2, Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import FadeInWhenVisible from "@/components/animations/FadeInWhenVisible";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Commercial Projects", href: "/projects/commercial" },
  { label: "Residential Projects", href: "/projects/residential" },
  { label: "Cost Estimator", href: "/cost-estimator" },
  { label: "Compare Packages", href: "/compare-packages" },
];

const serviceLinks = [
  { label: "Residential Construction", href: "/projects/residential" },
  { label: "Commercial Buildings", href: "/projects/commercial" },
  { label: "Interior Design", href: "/contact" },
  { label: "Renovation", href: "/contact" },
  { label: "Project Management", href: "/contact" },
  { label: "Architecture Planning", href: "/contact" },
];

const socialLinks = [
  { icon: Facebook, href: SITE_CONFIG.socialLinks.facebook, label: "Facebook" },
  { icon: Instagram, href: SITE_CONFIG.socialLinks.instagram, label: "Instagram" },
  { icon: Linkedin, href: SITE_CONFIG.socialLinks.linkedin, label: "LinkedIn" },
  { icon: Youtube, href: SITE_CONFIG.socialLinks.youtube, label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-dark text-white">
      {/* Gold accent line */}
      <div className="h-1 bg-gradient-gold" />

      <div className="container-custom section-padding">
        <FadeInWhenVisible>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center gap-2 mb-6 group">
                <div className="w-10 h-10 bg-gradient-gold rounded-lg flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-navy-900" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-heading font-bold text-white leading-tight">
                    KPR Homes
                  </span>
                  <span className="text-[10px] text-gold-400 tracking-[0.2em] uppercase leading-tight">
                    Building Dreams
                  </span>
                </div>
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {SITE_CONFIG.description}
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, color: "#f0c040" }}
                    className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white/10 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-heading text-lg font-semibold mb-6 text-gold-400">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white text-sm transition-colors duration-200 hover:pl-1"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-heading text-lg font-semibold mb-6 text-gold-400">
                Our Services
              </h3>
              <ul className="space-y-3">
                {serviceLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white text-sm transition-colors duration-200 hover:pl-1"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-heading text-lg font-semibold mb-6 text-gold-400">
                Contact Us
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-3 text-sm">
                  <MapPin className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                  <span className="text-gray-400">{SITE_CONFIG.address}</span>
                </li>
                <li className="flex gap-3 text-sm">
                  <Phone className="w-5 h-5 text-gold-400 shrink-0" />
                  <a href={`tel:${SITE_CONFIG.phone}`} className="text-gray-400 hover:text-white transition-colors">
                    {SITE_CONFIG.phone}
                  </a>
                </li>
                <li className="flex gap-3 text-sm">
                  <Mail className="w-5 h-5 text-gold-400 shrink-0" />
                  <a href={`mailto:${SITE_CONFIG.email}`} className="text-gray-400 hover:text-white transition-colors">
                    {SITE_CONFIG.email}
                  </a>
                </li>
                <li className="flex gap-3 text-sm">
                  <Clock className="w-5 h-5 text-gold-400 shrink-0" />
                  <span className="text-gray-400">{SITE_CONFIG.workingHours}</span>
                </li>
              </ul>
            </div>
          </div>
        </FadeInWhenVisible>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} KPR Homes. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
