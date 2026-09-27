import React from 'react';
import { ArrowRight, ChevronDown, Award, ShieldCheck, MapPin } from 'lucide-react';
import { companyInfo } from '../data/company';

interface HeroProps {
  onStartProject: () => void;
  onViewProjects: () => void;
  onExplorePackages: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onStartProject,
  onViewProjects,
  onExplorePackages,
}) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 text-white pt-24 pb-16">
      {/* Background Architectural Image with Luxury Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_luxury_villa_1790486487640.jpg"
          alt="Bespoke luxury residential villa built by KRT Builders"
          className="w-full h-full object-cover object-center scale-105 animate-subtle-zoom"
          referrerPolicy="no-referrer"
        />
        {/* Measured architectural scrim: allows full image appreciation while ensuring crisp 4.5:1 text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/65 to-slate-950/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/40 to-transparent" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-10">
        <div className="max-w-3xl">
          {/* Quiet Trust Bar (Unboxed text with typographic separators) */}
          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-rose-300 mb-4">
            <span className="flex items-center gap-1.5 text-white">
              <ShieldCheck className="w-4 h-4 text-[#D32F2F]" />
              {companyInfo.founder.name}, {companyInfo.founder.credentials}
            </span>
            <span aria-hidden="true" className="text-slate-500">·</span>
            <span className="flex items-center gap-1 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-[#D32F2F]" />
              Sivagangai & South TN
            </span>
            <span aria-hidden="true" className="text-slate-500">·</span>
            <span className="hidden sm:inline text-slate-300">10-Yr Structural Warranty</span>
          </div>

          {/* Primary Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-3 text-balance leading-none">
            WE BUILD <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-rose-100 to-rose-400">
              YOUR HOME.
            </span>
          </h1>

          {/* Secondary Headline */}
          <p className="text-sm sm:text-lg md:text-xl font-bold tracking-widest uppercase text-rose-500 mb-4">
            FROM DREAM <span className="text-slate-400">→</span> DESIGN <span className="text-slate-400">→</span> REALITY
          </p>

          {/* Supporting Copy */}
          <p className="text-base sm:text-xl text-slate-300 mb-8 max-w-2xl font-normal leading-relaxed text-balance">
            Thoughtfully designed and professionally built homes, created around the way you live. Uncompromising civil engineering precision from foundation to handover.
          </p>

          {/* CTA Buttons Row */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
            <button
              onClick={onStartProject}
              className="px-8 py-4 text-sm font-bold uppercase tracking-wider text-white bg-[#D32F2F] hover:bg-[#B71C1C] rounded shadow-lg shadow-rose-950/50 hover:shadow-rose-900/70 transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Start A Project</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onViewProjects}
              className="px-7 py-4 text-sm font-semibold tracking-wider text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/80 rounded transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer backdrop-blur-sm"
            >
              <span>View Our Homes</span>
            </button>

            <button
              onClick={onExplorePackages}
              className="px-5 py-4 text-xs font-semibold tracking-wider uppercase text-slate-400 hover:text-white transition-colors cursor-pointer text-center underline underline-offset-4 decoration-rose-500/50 hover:decoration-rose-500"
            >
              Explore Packages
            </button>
          </div>

          {/* Live Engineering Trust Markers */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-800/80">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white font-mono tabular-nums">150+</div>
              <div className="text-xs text-slate-400 font-medium">Homes Built</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white font-mono tabular-nums">10+ Yrs</div>
              <div className="text-xs text-slate-400 font-medium">Civil Engineering</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white font-mono tabular-nums">100%</div>
              <div className="text-xs text-slate-400 font-medium">On-Site Supervision</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white font-mono tabular-nums">10 Yrs</div>
              <div className="text-xs text-slate-400 font-medium">Structural Warranty</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-slate-400 text-xs tracking-widest uppercase">
        <span className="mb-1 text-[11px] text-slate-400">Scroll to explore</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-rose-500" />
      </div>
    </section>
  );
};
