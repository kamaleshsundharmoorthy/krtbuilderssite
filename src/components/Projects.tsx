import React, { useState } from 'react';
import { projectsData } from '../data/projects';
import { Project, ProjectType } from '../types';
import { ProjectModal } from './ProjectModal';
import { MapPin, ArrowUpRight, Bed, Layers, Ruler } from 'lucide-react';

interface ProjectsProps {
  onStartProjectForDesign: (projectTitle: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onStartProjectForDesign }) => {
  const [selectedType, setSelectedType] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filterTabs = ['All', 'Luxury Villa', 'Independent House', 'Turnkey Home'];

  const filteredProjects = selectedType === 'All'
    ? projectsData
    : projectsData.filter((p) => p.type === selectedType);

  return (
    <section id="projects" className="py-24 bg-stone-100 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D32F2F] mb-3">
              <span>Architectural Portfolio</span>
              <span aria-hidden="true">·</span>
              <span>Delivered Excellence</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              SELECTED HOMES
            </h2>
          </div>

          {/* Interactive Filter Tabs (Segmented control) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-white border border-slate-200 rounded-lg shadow-sm">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedType(tab)}
                className={`px-4 py-2 text-xs font-semibold rounded transition-colors whitespace-nowrap cursor-pointer ${
                  selectedType === tab
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer rounded-lg overflow-hidden bg-white border border-slate-200 hover:border-slate-300 hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              {/* Media Frame with Hover Movement */}
              <div className="relative h-[340px] sm:h-[400px] overflow-hidden bg-slate-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent" />

                {/* Top Corner Badge: Project Type */}
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-bold uppercase tracking-wider bg-slate-950/80 backdrop-blur-md text-white px-3 py-1 rounded border border-slate-700">
                    {project.type}
                  </span>
                </div>

                {/* Top Corner Action Indicator */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 text-slate-900 flex items-center justify-center group-hover:bg-[#D32F2F] group-hover:text-white transition-all shadow-md group-hover:scale-110">
                  <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="flex items-center gap-1.5 text-xs text-rose-300 mb-1 font-semibold">
                    <MapPin className="w-3.5 h-3.5 text-[#D32F2F]" />
                    <span>{project.location}</span>
                  </div>
                  <h3 className="text-2xl font-extrabold tracking-tight group-hover:text-rose-100 transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Bottom Metadata Bar (Clean, unboxed text with typographic separators) */}
              <div className="p-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600 bg-white">
                <div className="flex items-center gap-3">
                  <span className="font-semibold text-slate-900 flex items-center gap-1">
                    <Ruler className="w-3.5 h-3.5 text-slate-400" />
                    {project.builtUpArea}
                  </span>
                  <span aria-hidden="true" className="text-slate-300">·</span>
                  <span className="flex items-center gap-1">
                    <Bed className="w-3.5 h-3.5 text-slate-400" />
                    {project.bedrooms} BHK
                  </span>
                  <span aria-hidden="true" className="text-slate-300">·</span>
                  <span className="flex items-center gap-1">
                    <Layers className="w-3.5 h-3.5 text-slate-400" />
                    {project.floors} Floors
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-mono text-slate-500">Delivered {project.yearCompleted}</span>
                  <span className="text-xs font-bold text-[#D32F2F] group-hover:underline">View Case Study →</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Project Full Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onBuildLikeThis={(title) => {
            onStartProjectForDesign(title);
          }}
        />
      </div>
    </section>
  );
};
