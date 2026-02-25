"use client";

import { motion } from "framer-motion";
import { MapPin, ArrowRight, Calendar, Ruler } from "lucide-react";
import Link from "next/link";
import Badge from "@/components/ui/Badge";
import { Project } from "@/types";

const fallbackImages = {
  commercial: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
  residential: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80",
};

export default function ProjectCard({ project }: { project: Project }) {
  const imageUrl = project.thumbnail || project.images[0] || fallbackImages[project.category];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link href={`/projects/${project.slug}`}>
        <div className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500">
          <div className="relative h-56 overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-110 group-hover:brightness-105"
              style={{ backgroundImage: `url('${imageUrl}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent" />
            <div className="absolute top-4 left-4">
              <Badge variant={project.status === "completed" ? "completed" : "ongoing"}>
                {project.status === "completed" ? "Completed" : "Ongoing"}
              </Badge>
            </div>
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-sm font-medium flex items-center gap-1">
                View Details <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </div>
          <div className="p-6">
            <h3 className="font-heading text-lg font-bold text-navy-900 mb-2 group-hover:text-gold-600 transition-colors">
              {project.title}
            </h3>
            <p className="text-charcoal-500 text-sm mb-4 line-clamp-2">{project.description}</p>
            <div className="flex flex-wrap gap-4 text-xs text-charcoal-400">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                {project.location}
              </span>
              <span className="flex items-center gap-1">
                <Ruler className="w-3.5 h-3.5" />
                {project.area}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {project.year}
              </span>
            </div>
          </div>
          <div className="h-1 bg-gradient-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
        </div>
      </Link>
    </motion.div>
  );
}
