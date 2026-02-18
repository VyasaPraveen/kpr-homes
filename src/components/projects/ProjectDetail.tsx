"use client";

import { MapPin, Calendar, Ruler, Clock, User, ArrowLeft, Check } from "lucide-react";
import Link from "next/link";
import Badge from "@/components/ui/Badge";
import FadeInWhenVisible from "@/components/animations/FadeInWhenVisible";
import { Project } from "@/types";

export default function ProjectDetail({ project }: { project: Project }) {
  const imageUrl =
    project.category === "commercial"
      ? "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80"
      : "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80";

  return (
    <>
      <section className="relative h-[60vh] min-h-[400px]">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${imageUrl}')` }} />
        <div className="absolute inset-0 bg-gradient-overlay" />
        <div className="absolute inset-0 flex items-end">
          <div className="container-custom pb-12">
            <Link
              href={`/projects/${project.category}`}
              className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-4 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to {project.category === "commercial" ? "Commercial" : "Residential"} Projects
            </Link>
            <Badge variant={project.status === "completed" ? "completed" : "ongoing"} className="mb-4 block w-fit">
              {project.status === "completed" ? "Completed" : "Ongoing"}
            </Badge>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-2">{project.title}</h1>
            <div className="flex flex-wrap gap-4 text-white/70 text-sm">
              <span className="flex items-center gap-1"><MapPin className="w-4 h-4" />{project.location}</span>
              <span className="flex items-center gap-1"><Ruler className="w-4 h-4" />{project.area}</span>
              <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{project.year}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <FadeInWhenVisible>
                <h2 className="font-heading text-2xl font-bold text-navy-900 mb-4">About This Project</h2>
                <p className="text-charcoal-600 leading-relaxed mb-8">{project.description}</p>
                <h3 className="font-heading text-xl font-bold text-navy-900 mb-4">Key Features</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3 p-3 bg-charcoal-50 rounded-lg">
                      <div className="w-6 h-6 rounded-full bg-gold-100 flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5 text-gold-600" />
                      </div>
                      <span className="text-charcoal-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </FadeInWhenVisible>
            </div>

            <div>
              <FadeInWhenVisible direction="right">
                <div className="bg-charcoal-50 rounded-2xl p-6 sticky top-24">
                  <h3 className="font-heading text-lg font-bold text-navy-900 mb-6">Project Details</h3>
                  <div className="space-y-4">
                    {[
                      { icon: MapPin, label: "Location", value: project.location },
                      { icon: Ruler, label: "Total Area", value: project.area },
                      { icon: Calendar, label: "Year", value: String(project.year) },
                      ...(project.duration ? [{ icon: Clock, label: "Duration", value: project.duration }] : []),
                      ...(project.client ? [{ icon: User, label: "Client", value: project.client }] : []),
                    ].map((item) => (
                      <div key={item.label} className="flex items-center gap-3 pb-4 border-b border-gray-200 last:border-0">
                        <item.icon className="w-5 h-5 text-gold-500" />
                        <div>
                          <p className="text-xs text-charcoal-400">{item.label}</p>
                          <p className="text-sm font-medium text-navy-900">{item.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Link
                    href="/contact"
                    className="mt-6 block w-full text-center px-6 py-3 bg-gradient-gold text-navy-900 font-semibold rounded-lg hover:shadow-gold-lg transition-all duration-300"
                  >
                    Enquire About This Project
                  </Link>
                </div>
              </FadeInWhenVisible>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
