"use client";

import { AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { Project } from "@/types";

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <section className="section-padding bg-charcoal-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
