"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, MapPin } from "lucide-react";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import { projects } from "@/data/projects";

const featuredProjects = projects.slice(0, 6);

export default function FeaturedProjects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % featuredProjects.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex(
      (prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length
    );
  }, []);

  const getVisibleProjects = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(
        featuredProjects[(currentIndex + i) % featuredProjects.length]
      );
    }
    return visible;
  };

  return (
    <section className="section-padding bg-charcoal-50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <SectionHeading
            title="Featured Projects"
            subtitle="Showcasing our finest commercial and residential work"
            align="left"
            className="mb-0"
          />
          <div className="flex gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border-2 border-navy-200 flex items-center justify-center text-navy-900 hover:bg-navy-900 hover:text-white hover:border-navy-900 transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-navy-900 flex items-center justify-center text-white hover:bg-navy-800 transition-all duration-300"
            >
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getVisibleProjects().map((project, i) => (
            <motion.div
              key={`${project.id}-${currentIndex}-${i}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Link href={`/projects/${project.slug}`}>
                <div className="group relative bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-${
                          project.category === "commercial"
                            ? "1486406146926-c627a92ad1ab"
                            : "1545324418-cc1a3fa10c00"
                        }?w=600&q=80')`,
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Status Badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <Badge
                        variant={
                          project.status === "completed"
                            ? "completed"
                            : "ongoing"
                        }
                      >
                        {project.status === "completed"
                          ? "Completed"
                          : "Ongoing"}
                      </Badge>
                    </div>

                    {/* Hover overlay content */}
                    <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <span className="text-white font-medium flex items-center gap-2">
                        View Project <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-charcoal-400 text-sm mb-2">
                      <MapPin className="w-3.5 h-3.5" />
                      {project.location}
                    </div>
                    <h3 className="font-heading text-lg font-bold text-navy-900 mb-1 group-hover:text-gold-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-charcoal-500 text-sm">
                      {project.subcategory} &middot; {project.area}
                    </p>
                  </div>

                  {/* Gold bottom accent */}
                  <div className="h-1 bg-gradient-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-10">
          {featuredProjects.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? "w-8 bg-gold-400"
                  : "w-2 bg-navy-200 hover:bg-navy-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
