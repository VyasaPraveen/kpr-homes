"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ProjectFiltersProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const filters = [
  { id: "all", label: "All Projects" },
  { id: "completed", label: "Completed" },
  { id: "ongoing", label: "Ongoing" },
];

export default function ProjectFilters({ activeFilter, onFilterChange }: ProjectFiltersProps) {
  return (
    <div className="flex flex-wrap gap-3 justify-center mb-10">
      {filters.map((filter) => (
        <button
          key={filter.id}
          onClick={() => onFilterChange(filter.id)}
          className={cn(
            "relative px-6 py-2.5 text-sm font-medium rounded-full transition-all duration-300",
            activeFilter === filter.id
              ? "text-white"
              : "text-charcoal-600 hover:text-navy-900 bg-white shadow-sm"
          )}
        >
          {activeFilter === filter.id && (
            <motion.div
              layoutId="filterPill"
              className="absolute inset-0 bg-navy-900 rounded-full"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
          <span className="relative z-10">{filter.label}</span>
        </button>
      ))}
    </div>
  );
}
