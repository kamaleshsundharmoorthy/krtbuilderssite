import React, { useState } from 'react';
import { projectsData } from '../data/projects';
import { Project, ProjectType } from '../types';
import { ProjectModal } from './ProjectModal';
import { MapPin, ArrowUpRight, Bed, Layers, Ruler } from 'lucide-react';
import { TiltCard } from './TiltCard';

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
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#D32F2F] mb-3">
              <span>Architectural Portfolio</span>
              <span aria-hidden="true" className="text-slate-300">/</span>
              <span>Delivered Residences</span>
            </div>
            <h2 className="editorial-title text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-[-0.035em]">
              Selected Homes<span className="text-[#D32F2F]">.</span>
            </h2>
          </div>

          {/* Interactive Filter Tabs (Segmented control) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-white border border-slate-200/90 rounded-lg shadow-xs">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedType(tab)}
                className={`px-4.5 py-2 text-xs font-bold uppercase tracking-wider rounded transition-all whitespace-nowrap cursor-pointer ${
                  selectedType === tab
                    ? 'bg-slate-950 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid with 3D Depth */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {filteredProjects.map((project) => (
            <TiltCard
              key={project.id}
              maxTilt={3.5}
              scale={1.015}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer rounded-xl overflow-hidden bg-white border border-slate-200/90 shadow-3d-hover hover:border-slate-300 transition-all duration-300 flex flex-col"
            >
              {/* Media Frame with Hover Movement */}
              <div className="relative h-[340px] sm:h-[420px] overflow-hidden bg-slate-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

                {/* Top Corner Badge: Project Type */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-[11px] font-bold uppercase tracking-[0.14em] bg-slate-950/80 backdrop-blur-md text-white px-3.5 py-1.5 rounded border border-white/10 shadow-sm">
                    {project.type}
                  </span>
                </div>

                {/* Top Corner Action Indicator with 3D Pop */}
                <div className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/95 text-slate-950 flex items-center justify-center group-hover:bg-[#D32F2F] group-hover:text-white transition-all shadow-xl group-hover:scale-115">
                  <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-5 left-5 right-5 text-white z-10">
                  <div className="flex items-center gap-1.5 text-xs text-rose-300 mb-1.5 font-semibold drop-shadow-sm">
                    <MapPin className="w-3.5 h-3.5 text-[#D32F2F]" />
                    <span>{project.location}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight group-hover:text-rose-100 transition-colors drop-shadow-sm">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Bottom Metadata Bar */}
              <div className="p-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600 bg-white relative z-10">
                <div className="flex items-center gap-3">
                  <span className="font-bold text-slate-900 flex items-center gap-1">
                    <Ruler className="w-3.5 h-3.5 text-slate-400" />
                    {project.builtUpArea}
                  </span>
                  <span aria-hidden="true" className="text-slate-300">·</span>
                  <span className="flex items-center gap-1 font-medium">
                    <Bed className="w-3.5 h-3.5 text-slate-400" />
                    {project.bedrooms} BHK
                  </span>
                  <span aria-hidden="true" className="text-slate-300">·</span>
                  <span className="flex items-center gap-1 font-medium">
                    <Layers className="w-3.5 h-3.5 text-slate-400" />
                    {project.floors} Floors
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-mono text-slate-500">Delivered {project.yearCompleted}</span>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#D32F2F] group-hover:underline">Case Study →</span>
                </div>
              </div>
            </TiltCard>
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
