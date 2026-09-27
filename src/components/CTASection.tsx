import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { companyInfo } from '../data/company';

interface CTASectionProps {
  onStartProject: () => void;
  onContactClick: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({
  onStartProject,
  onContactClick,
}) => {
  return (
    <section className="relative py-28 bg-slate-950 text-white overflow-hidden text-center">
      {/* Background with Architectural Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_luxury_villa_1790486487640.jpg"
          alt="Luxury custom residence backdrop"
          className="w-full h-full object-cover object-center filter brightness-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/80" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="inline-block text-xs font-bold uppercase tracking-[0.16em] text-rose-300 mb-4 bg-rose-950/60 backdrop-blur-md px-3.5 py-1.5 rounded border border-rose-800/60">
          Begin Your Journey
        </div>

        <h2 className="editorial-title text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-[-0.035em] mb-6 text-balance">
          Ready to Build Your Home<span className="text-[#D32F2F]">?</span>
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed text-balance font-light">
          Tell us about your dream home. We'll help you turn the idea into reality with professional architectural planning, certified structural engineering, and honest pricing.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onStartProject}
            className="w-full sm:w-auto px-8 py-4 text-xs sm:text-sm uppercase tracking-[0.16em] font-extrabold text-white bg-[#D32F2F] hover:bg-[#B71C1C] rounded border border-rose-500/50 shadow-2xl shadow-rose-950/70 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
          >
            <span>Start A Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={`tel:${companyInfo.contact.phone}`}
            className="w-full sm:w-auto px-7 py-4 text-xs sm:text-sm uppercase tracking-[0.14em] font-bold text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-white/15 rounded transition-all flex items-center justify-center gap-2 cursor-pointer backdrop-blur-md"
          >
            <Phone className="w-4 h-4 text-[#D32F2F]" />
            <span className="font-mono">Call: {companyInfo.contact.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
