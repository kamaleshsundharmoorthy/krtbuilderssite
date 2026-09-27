import React, { useState } from 'react';
import { Project } from '../types';
import { X, MapPin, Maximize2, Bed, Layers, Calendar, Clock, CheckCircle2, ArrowRight } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onBuildLikeThis: (projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onBuildLikeThis,
}) => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  if (!project) return null;

  const currentHeroImage = activeImage || project.image;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      <div className="relative w-full max-w-5xl bg-white rounded-lg shadow-2xl overflow-hidden border border-slate-200 my-8 max-h-[92vh] flex flex-col text-slate-900">
        {/* Sticky Header with Title and Close */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-white sticky top-0 z-20">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B8594E]">
              <span>Case Study</span>
              <span aria-hidden="true">·</span>
              <span>{project.type}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              {project.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto p-6 space-y-8">
          {/* Main Hero Media Stage */}
          <div className="relative rounded-lg overflow-hidden h-[340px] sm:h-[460px] bg-slate-950">
            <img
              src={currentHeroImage}
              alt={project.title}
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-6 right-6 text-white flex flex-wrap items-center justify-between gap-2">
              <span className="text-sm font-semibold flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#C86C60]" />
                {project.location}
              </span>
              <span className="text-xs bg-black/60 backdrop-blur-sm px-3 py-1 rounded text-slate-200">
                Completed in {project.duration}
              </span>
            </div>
          </div>

          {/* Quick Specifications Bar (Single Elevation, Unboxed Text) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 p-4 rounded-lg bg-stone-100 border border-slate-200 text-xs">
            <div>
              <span className="text-slate-500 block">Built-up Area</span>
              <strong className="text-slate-900 text-sm font-mono">{project.builtUpArea}</strong>
            </div>
            <div>
              <span className="text-slate-500 block">Plot Size</span>
              <strong className="text-slate-900 text-sm">{project.plotArea}</strong>
            </div>
            <div>
              <span className="text-slate-500 block">Bedrooms</span>
              <strong className="text-slate-900 text-sm">{project.bedrooms} BHK Suites</strong>
            </div>
            <div>
              <span className="text-slate-500 block">Floors</span>
              <strong className="text-slate-900 text-sm">{project.floors} Levels (G+{project.floors - 1})</strong>
            </div>
            <div>
              <span className="text-slate-500 block">Year Delivered</span>
              <strong className="text-slate-900 text-sm font-mono">{project.yearCompleted}</strong>
            </div>
            <div>
              <span className="text-slate-500 block">Project Duration</span>
              <strong className="text-slate-900 text-sm">{project.duration}</strong>
            </div>
          </div>

          {/* Architectural Concept & Client Requirements */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-3 border-b border-slate-200 pb-2">
                Architectural Concept
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed font-light">
                {project.designConcept}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-3 border-b border-slate-200 pb-2">
                Homeowner Requirements
              </h3>
              <ul className="space-y-2 text-sm text-slate-700">
                {project.clientRequirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#B8594E] shrink-0 mt-0.5" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Construction Stages & Engineering */}
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">
              Construction Engineering Stages
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {project.constructionStages.map((stage, idx) => (
                <div key={idx} className="p-4 rounded-lg bg-stone-50 border border-slate-200">
                  <div className="text-xs font-bold text-[#B8594E] uppercase mb-1">
                    Stage {idx + 1} · {stage.stage}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-light">
                    {stage.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Materials & Finishes Summary */}
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">
              Materials & Specifications Installed
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-stone-50 rounded border border-slate-200">
                <span className="font-bold text-slate-800 block mb-0.5">Structure & Cement:</span>
                <span className="text-slate-600">{project.specifications.structure}</span>
              </div>
              <div className="p-3 bg-stone-50 rounded border border-slate-200">
                <span className="font-bold text-slate-800 block mb-0.5">Flooring:</span>
                <span className="text-slate-600">{project.specifications.flooring}</span>
              </div>
              <div className="p-3 bg-stone-50 rounded border border-slate-200">
                <span className="font-bold text-slate-800 block mb-0.5">Doors & Joinery:</span>
                <span className="text-slate-600">{project.specifications.joinery}</span>
              </div>
              <div className="p-3 bg-stone-50 rounded border border-slate-200">
                <span className="font-bold text-slate-800 block mb-0.5">Bathrooms & Plumbing:</span>
                <span className="text-slate-600">{project.specifications.sanitary}</span>
              </div>
            </div>
          </div>

          {/* Gallery View */}
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-3 border-b border-slate-200 pb-2">
              Project Gallery
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {project.gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`relative rounded overflow-hidden h-24 border-2 transition-all cursor-pointer ${
                    currentHeroImage === img ? 'border-[#B8594E] scale-95' : 'border-transparent opacity-80 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`${project.title} detail ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Action Footer */}
        <div className="p-6 border-t border-slate-200 bg-stone-50 flex flex-col sm:flex-row items-center justify-between gap-4 sticky bottom-0 z-20">
          <div className="text-xs text-slate-600">
            Inspired by this design? We can tailor this layout to your plot orientation and budget.
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-4 py-2.5 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-white border border-slate-300 rounded cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onBuildLikeThis(project.title);
              }}
              className="w-1/2 sm:w-auto px-6 py-2.5 text-xs uppercase tracking-wider font-bold text-white bg-[#B8594E] hover:bg-[#9E453A] rounded border border-rose-300/30 shadow-md shadow-[#B8594E]/25 transition-colors flex items-center justify-center gap-2 cursor-pointer active:scale-95"
            >
              <span>Build A Home Like This</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
