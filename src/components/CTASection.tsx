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
        <div className="inline-block text-xs font-bold uppercase tracking-widest text-rose-400 mb-4 bg-rose-950/50 px-3 py-1 rounded border border-rose-800">
          Begin Your Journey
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-6 text-balance">
          READY TO BUILD YOUR HOME?
        </h2>

        <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed text-balance">
          Tell us about your dream home. We'll help you turn the idea into reality with professional architectural planning, certified structural engineering, and honest pricing.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onStartProject}
            className="w-full sm:w-auto px-8 py-4 text-xs sm:text-sm uppercase tracking-wider font-bold text-white bg-[#D32F2F] hover:bg-[#B71C1C] rounded shadow-xl shadow-rose-950/60 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Start A Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={`tel:${companyInfo.contact.phone}`}
            className="w-full sm:w-auto px-7 py-4 text-xs sm:text-sm font-semibold text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700 rounded transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Phone className="w-4 h-4 text-[#D32F2F]" />
            <span>Call: {companyInfo.contact.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
