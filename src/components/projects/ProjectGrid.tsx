"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import ProjectFilters from "./ProjectFilters";
import ProjectCard from "./ProjectCard";
import { Project } from "@/types";

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState("all");

  const filtered = filter === "all" ? projects : projects.filter((p) => p.status === filter);

  return (
    <section className="section-padding bg-charcoal-50">
      <div className="container-custom">
        <ProjectFilters activeFilter={filter} onFilterChange={setFilter} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </div>
        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-charcoal-400 text-lg">No projects found for this filter.</p>
          </div>
        )}
      </div>
    </section>
  );
}
