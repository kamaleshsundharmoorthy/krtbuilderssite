import React from 'react';
import { whyChooseUsData, qualityPhilosophy } from '../data/whyChooseUs';
import { companyInfo } from '../data/company';
import { ShieldCheck, HardHat, FileSpreadsheet, Clock, Droplets, Zap, CheckCircle2, Award } from 'lucide-react';
import { TiltCard } from './TiltCard';

interface WhyChooseUsProps {
  onStartConsultation: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({
  onStartConsultation,
}) => {
  return (
    <section id="why-us" className="py-24 bg-stone-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#D32F2F] mb-3">
            <span>Direct Engineering Accountability</span>
            <span aria-hidden="true" className="text-slate-300">/</span>
            <span>Zero Brokerage · Zero Subcontracting</span>
          </div>
          <h2 className="editorial-title text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-[-0.035em] mb-4">
            Why People Build With Us<span className="text-[#D32F2F]">.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed text-balance font-light">
            Building a house is usually a once-in-a-lifetime milestone. We protect your hard-earned investment with absolute structural rigor, transparent line-item contracts, and hands-on supervision by qualified civil engineers.
          </p>
        </div>

        {/* 8 Trust Pillars Grid with 3D Depth */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {whyChooseUsData.map((pillar) => (
            <TiltCard
              key={pillar.number}
              maxTilt={4}
              scale={1.02}
              className="p-6 rounded-xl bg-white border border-slate-200/90 shadow-3d-hover hover:border-slate-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="text-xs font-mono font-bold text-[#D32F2F] mb-2">
                  {pillar.number}
                </div>
                <h3 className="text-base font-extrabold text-slate-900 mb-2.5 tracking-tight">
                  {pillar.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4 font-light">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500 font-medium">
                {pillar.detail}
              </div>
            </TiltCard>
          ))}
        </div>

        {/* QUALITY & MATERIALS PHILOSOPHY: "BUILT TO LAST" */}
        <div className="rounded-2xl bg-slate-950 text-white p-8 sm:p-12 border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-rose-600/15 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl mb-10 relative z-10">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-400 mb-2">
              <Award className="w-4 h-4 text-[#D32F2F]" />
              <span>Material Science & Site Supervision</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
              {qualityPhilosophy.headline}
            </h3>
            <p className="text-sm sm:text-base text-slate-300 font-light">
              {qualityPhilosophy.subtitle} We enforce an uncompromising material testing regime so your home retains its strength for generations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10 mb-8">
            {qualityPhilosophy.pillars.map((item, idx) => (
              <TiltCard
                key={idx}
                maxTilt={4}
                scale={1.02}
                className="p-5 rounded-xl bg-slate-900/90 border border-white/10 shadow-3d-dark-hover"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-[#D32F2F] mb-3 shadow-[0_0_8px_#D32F2F]" />
                <h4 className="text-sm font-extrabold text-white mb-2 tracking-tight">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed font-light">
                  {item.desc}
                </p>
              </TiltCard>
            ))}
          </div>

          {/* Engineer Direct Supervision Statement */}
          <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-400 relative z-10">
            <div className="flex items-center gap-3">
              <HardHat className="w-5 h-5 text-rose-500 shrink-0" />
              <span>
                Supervised on site by <strong className="text-white">{companyInfo.founder.name}, {companyInfo.founder.credentials}</strong>. Full IS:456 and IS:13920 code compliance.
              </span>
            </div>

            <button
              onClick={onStartConsultation}
              className="px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white bg-[#D32F2F] hover:bg-[#B71C1C] rounded border border-rose-500/40 shadow-lg shadow-rose-950/50 transition-all cursor-pointer shrink-0 active:scale-95"
            >
              Consult Our Site Engineers
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
