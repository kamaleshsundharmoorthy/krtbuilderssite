import React from 'react';
import { ArrowRight, MapPin, Maximize2, Bed, Layers, Calendar, Clock } from 'lucide-react';

interface FeaturedStoryProps {
  onViewFeaturedProject: () => void;
  onStartCustomProject: () => void;
}

export const FeaturedStory: React.FC<FeaturedStoryProps> = ({
  onViewFeaturedProject,
  onStartCustomProject,
}) => {
  return (
    <section className="relative py-28 bg-slate-950 text-white overflow-hidden">
      {/* Background Architectural Canvas with Parallax Feel */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/project_horizon_residence_1790486511207.jpg"
          alt="The Horizon Villa architectural showcase by KRT Builders"
          className="w-full h-full object-cover object-center scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/75 to-slate-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-rose-400 mb-3">
            <span>Featured Architectural Story</span>
            <span aria-hidden="true">·</span>
            <span>Case Study 02</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            A HOME DESIGNED AROUND YOU.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed text-balance">
            The Horizon Villa in Madurai: A striking 3,850 sq.ft contemporary cantilever residence featuring double-height ceiling volumes, automated acoustic glass facades, and deep passive solar overhangs.
          </p>

          {/* Quick Metric Matrix */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 p-4 rounded-lg bg-slate-950/80 backdrop-blur-md border border-slate-800 text-xs mb-8">
            <div>
              <span className="text-slate-400 block text-[11px]">Location</span>
              <strong className="text-white text-xs sm:text-sm font-semibold truncate block">Madurai, TN</strong>
            </div>
            <div>
              <span className="text-slate-400 block text-[11px]">Built-up Area</span>
              <strong className="text-white text-xs sm:text-sm font-semibold font-mono">3,850 sq.ft</strong>
            </div>
            <div>
              <span className="text-slate-400 block text-[11px]">Bedrooms</span>
              <strong className="text-white text-xs sm:text-sm font-semibold">5 BHK Suites</strong>
            </div>
            <div>
              <span className="text-slate-400 block text-[11px]">Floors</span>
              <strong className="text-white text-xs sm:text-sm font-semibold">2 Levels (G+1)</strong>
            </div>
            <div>
              <span className="text-slate-400 block text-[11px]">Duration</span>
              <strong className="text-white text-xs sm:text-sm font-semibold">12 Months</strong>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onViewFeaturedProject}
              className="px-6 py-3.5 text-xs uppercase tracking-wider font-bold text-white bg-[#D32F2F] hover:bg-[#B71C1C] rounded shadow transition-all duration-200 flex items-center gap-2 cursor-pointer"
            >
              <span>View Case Study</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={onStartCustomProject}
              className="px-6 py-3.5 text-xs font-semibold text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700 rounded transition-all cursor-pointer backdrop-blur-sm"
            >
              Consult On a Similar Design
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
