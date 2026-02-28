"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Send,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import FadeInWhenVisible from "@/components/animations/FadeInWhenVisible";
import VisitorCounter from "@/components/layout/VisitorCounter";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Commercial Buildings", href: "/projects/commercial" },
  { label: "Residential Apartments", href: "/projects/residential" },
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

function QuickEnquiryForm() {
  const [formData, setFormData] = useState({ name: "", phone: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hi, I'm ${formData.name}. My phone number is ${formData.phone}. I'm interested in your services. Please contact me.`;
    const whatsappUrl = `https://wa.me/919849351276?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    setFormData({ name: "", phone: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        type="text"
        placeholder="Your Name"
        value={formData.name}
        onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
        required
        className="w-full px-3 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-gold-400/50 transition-colors"
      />
      <input
        type="tel"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
        required
        className="w-full px-3 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-gold-400/50 transition-colors"
      />
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-gold text-navy-900 font-semibold text-sm rounded-lg hover:shadow-gold transition-all duration-300"
      >
        <Send className="w-4 h-4" />
        Send via WhatsApp
      </motion.button>
    </form>
  );
}

export default function Footer() {
  return (
    <footer className="bg-gradient-dark text-white">
      {/* Gold accent line */}
      <div className="h-1 bg-gradient-gold" />

      <div className="container-custom section-padding">
        <FadeInWhenVisible>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center mb-6 group">
                <Image
                  src="/images/logo.png"
                  alt="KPR Homes - We create landmarks"
                  width={140}
                  height={42}
                  className="h-10 w-auto object-contain brightness-0 invert group-hover:opacity-90 transition-opacity"
                />
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
                  <Phone className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-1">
                    <a href={`tel:${SITE_CONFIG.phone}`} className="text-gray-400 hover:text-white transition-colors">
                      {SITE_CONFIG.phone}
                    </a>
                    <a href={`tel:${SITE_CONFIG.phone2}`} className="text-gray-400 hover:text-white transition-colors">
                      {SITE_CONFIG.phone2}
                    </a>
                  </div>
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

            {/* Quick Enquiry */}
            <div>
              <h3 className="font-heading text-lg font-semibold mb-6 text-gold-400">
                Quick Enquiry
              </h3>
              <QuickEnquiryForm />
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

      {/* Visitor Counter */}
      <div className="border-t border-white/5 py-4">
        <div className="container-custom">
          <VisitorCounter />
        </div>
      </div>
    </footer>
  );
}
