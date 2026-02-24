"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin, Youtube, MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import FadeInWhenVisible from "@/components/animations/FadeInWhenVisible";

const contactInfo = [
  {
    icon: MapPin,
    label: "Visit Us",
    value: SITE_CONFIG.address,
  },
  {
    icon: Phone,
    label: "Call Us",
    value: SITE_CONFIG.phone,
    value2: SITE_CONFIG.phone2,
    href: `tel:${SITE_CONFIG.phone}`,
    href2: `tel:${SITE_CONFIG.phone2}`,
  },
  {
    icon: Mail,
    label: "Email Us",
    value: SITE_CONFIG.email,
    href: `mailto:${SITE_CONFIG.email}`,
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: SITE_CONFIG.workingHours,
  },
];

const socialLinks = [
  { icon: Facebook, href: SITE_CONFIG.socialLinks.facebook, label: "Facebook", color: "hover:bg-blue-500" },
  { icon: Instagram, href: SITE_CONFIG.socialLinks.instagram, label: "Instagram", color: "hover:bg-pink-500" },
  { icon: Linkedin, href: SITE_CONFIG.socialLinks.linkedin, label: "LinkedIn", color: "hover:bg-blue-600" },
  { icon: Youtube, href: SITE_CONFIG.socialLinks.youtube, label: "YouTube", color: "hover:bg-red-500" },
  { icon: MessageCircle, href: SITE_CONFIG.socialLinks.whatsapp, label: "WhatsApp", color: "hover:bg-green-500" },
];

export default function OfficeInfo() {
  return (
    <FadeInWhenVisible direction="right">
      <div className="bg-navy-900 rounded-2xl p-8 text-white sticky top-24">
        <h3 className="font-heading text-xl font-bold mb-8 text-gold-400">
          Contact Information
        </h3>

        <div className="space-y-6 mb-10">
          {contactInfo.map((info) => (
            <div key={info.label} className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                <info.icon className="w-5 h-5 text-gold-400" />
              </div>
              <div>
                <p className="text-gray-400 text-xs mb-1">{info.label}</p>
                {info.href ? (
                  <div className="flex flex-col gap-1">
                    <a
                      href={info.href}
                      className="text-white hover:text-gold-400 transition-colors text-sm"
                    >
                      {info.value}
                    </a>
                    {info.value2 && (
                      <a
                        href={info.href2}
                        className="text-white hover:text-gold-400 transition-colors text-sm"
                      >
                        {info.value2}
                      </a>
                    )}
                  </div>
                ) : (
                  <p className="text-white text-sm">{info.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div>
          <p className="text-gray-400 text-xs mb-4">Follow Us</p>
          <div className="flex gap-3">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15 }}
                className={`w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white transition-all duration-300 ${social.color} hover:text-white`}
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </FadeInWhenVisible>
  );
}
