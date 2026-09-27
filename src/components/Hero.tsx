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
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-[0.14em] uppercase text-rose-400 mb-5">
            <span className="flex items-center gap-1.5 text-white">
              <ShieldCheck className="w-4 h-4 text-[#D32F2F]" />
              {companyInfo.founder.name}, {companyInfo.founder.credentials}
            </span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="flex items-center gap-1 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-[#D32F2F]" />
              Sivagangai & South TN
            </span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-400 font-mono text-[11px]">9.8433° N, 78.4809° E</span>
          </div>

          {/* Primary Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-[-0.04em] text-white mb-4 text-balance leading-[0.95]">
            WE BUILD <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-stone-100 to-rose-300">
              YOUR HOME.
            </span>
          </h1>

          {/* Secondary Headline */}
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-[2px] bg-[#D32F2F]" />
            <p className="text-xs sm:text-sm font-semibold tracking-[0.22em] uppercase text-rose-300">
              Dream <span className="text-slate-500 font-normal">→</span> Architectural Design <span className="text-slate-500 font-normal">→</span> Turnkey Reality
            </p>
          </div>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-9 max-w-2xl font-light leading-relaxed text-balance">
            Thoughtfully designed and professionally built homes, created around the way you live. Uncompromising civil engineering precision from foundation to handover.
          </p>

          {/* CTA Buttons Row */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
            <button
              onClick={onStartProject}
              className="px-8 py-4 text-xs uppercase tracking-[0.16em] font-bold text-white bg-[#D32F2F] hover:bg-[#B71C1C] rounded border border-rose-500/50 shadow-xl shadow-rose-950/60 hover:shadow-rose-900/80 transition-all duration-200 flex items-center justify-center gap-2.5 group cursor-pointer active:scale-95"
            >
              <span>Start A Project</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onViewProjects}
              className="px-7 py-4 text-xs uppercase tracking-[0.14em] font-bold text-slate-200 hover:text-white bg-slate-900/70 hover:bg-slate-800/90 border border-white/15 rounded transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer backdrop-blur-md hover:border-white/30"
            >
              <span>View Selected Homes</span>
            </button>

            <button
              onClick={onExplorePackages}
              className="px-4 py-3 text-xs font-semibold tracking-wider uppercase text-slate-400 hover:text-white transition-colors cursor-pointer text-center underline underline-offset-8 decoration-rose-500/60 hover:decoration-rose-400"
            >
              Explore Packages
            </button>
          </div>

          {/* Live Engineering Trust Markers */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-xl bg-slate-950/60 backdrop-blur-md border border-white/10 shadow-lg">
            <div>
              <div className="text-2xl sm:text-3xl font-black text-white font-mono tabular-nums tracking-tight">150+</div>
              <div className="text-[11px] uppercase tracking-[0.14em] text-slate-400 font-semibold mt-0.5">Homes Built</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-white font-mono tabular-nums tracking-tight">10+ Yrs</div>
              <div className="text-[11px] uppercase tracking-[0.14em] text-slate-400 font-semibold mt-0.5">Civil Engineering</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-white font-mono tabular-nums tracking-tight">100%</div>
              <div className="text-[11px] uppercase tracking-[0.14em] text-slate-400 font-semibold mt-0.5">On-Site Supervision</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-white font-mono tabular-nums tracking-tight">10 Yrs</div>
              <div className="text-[11px] uppercase tracking-[0.14em] text-slate-400 font-semibold mt-0.5">Structural Warranty</div>
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
