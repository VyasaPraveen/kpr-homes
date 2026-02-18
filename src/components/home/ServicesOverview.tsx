"use client";

import { motion } from "framer-motion";
import {
  Home,
  Building2,
  Palette,
  Hammer,
  ClipboardCheck,
  Compass,
  ArrowRight,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import StaggerChildren from "@/components/animations/StaggerChildren";
import Link from "next/link";

const iconMap: Record<string, React.ElementType> = {
  Home,
  Building2,
  Palette,
  Hammer,
  ClipboardCheck,
  Compass,
};

const services = [
  {
    title: "Residential Construction",
    description:
      "From luxury apartments to premium villas, we build homes that reflect your lifestyle with uncompromising quality.",
    icon: "Home",
    href: "/projects/residential",
  },
  {
    title: "Commercial Buildings",
    description:
      "State-of-the-art office complexes, IT parks, and retail spaces engineered for productivity.",
    icon: "Building2",
    href: "/projects/commercial",
  },
  {
    title: "Interior Design",
    description:
      "Transform your spaces with our expert interior design team, creating stunning environments.",
    icon: "Palette",
    href: "/contact",
  },
  {
    title: "Renovation & Remodeling",
    description:
      "Breathe new life into existing structures with comprehensive renovation services.",
    icon: "Hammer",
    href: "/contact",
  },
  {
    title: "Project Management",
    description:
      "End-to-end project management ensuring timely delivery and quality standards.",
    icon: "ClipboardCheck",
    href: "/contact",
  },
  {
    title: "Architecture Planning",
    description:
      "Innovative architectural solutions balancing aesthetics, functionality, and sustainability.",
    icon: "Compass",
    href: "/contact",
  },
];

export default function ServicesOverview() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading
          title="Our Expertise"
          subtitle="Comprehensive construction services tailored to your vision"
        />

        <StaggerChildren
          staggerDelay={0.1}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service) => {
            const IconComponent = iconMap[service.icon];
            return (
              <motion.div
                key={service.title}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
              >
                <Card className="p-8 h-full group">
                  <div className="w-14 h-14 rounded-xl bg-gradient-gold flex items-center justify-center mb-6 group-hover:shadow-gold transition-shadow duration-300">
                    <IconComponent className="w-7 h-7 text-navy-900" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-navy-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-charcoal-500 text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-gold-600 hover:text-gold-700 group/link"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </Card>
              </motion.div>
            );
          })}
        </StaggerChildren>
      </div>
    </section>
  );
}
