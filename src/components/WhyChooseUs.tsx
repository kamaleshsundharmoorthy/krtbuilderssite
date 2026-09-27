import React from 'react';
import { whyChooseUsData, qualityPhilosophy } from '../data/whyChooseUs';
import { companyInfo } from '../data/company';
import { ShieldCheck, HardHat, FileSpreadsheet, Clock, Droplets, Zap, CheckCircle2, Award } from 'lucide-react';

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
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D32F2F] mb-3">
            <span>Direct Engineering Accountability</span>
            <span aria-hidden="true">·</span>
            <span>Zero Brokerage / Zero Subcontracting</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            WHY PEOPLE BUILD WITH US.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            Building a house is usually a once-in-a-lifetime milestone. We protect your hard-earned investment with absolute structural rigor, transparent line-item contracts, and hands-on supervision by qualified civil engineers.
          </p>
        </div>

        {/* 8 Trust Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {whyChooseUsData.map((pillar) => (
            <div
              key={pillar.number}
              className="p-6 rounded-lg bg-white border border-slate-200 shadow-sm hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="text-xs font-mono font-bold text-[#D32F2F] mb-2">
                  {pillar.number}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2.5">
                  {pillar.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500 font-medium">
                {pillar.detail}
              </div>
            </div>
          ))}
        </div>

        {/* QUALITY & MATERIALS PHILOSOPHY: "BUILT TO LAST" */}
        <div className="rounded-xl bg-slate-950 text-white p-8 sm:p-12 border border-slate-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl mb-10 relative z-10">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-400 mb-2">
              <Award className="w-4 h-4 text-[#D32F2F]" />
              <span>Material Science & Site Supervision</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
              {qualityPhilosophy.headline}
            </h3>
            <p className="text-sm sm:text-base text-slate-300">
              {qualityPhilosophy.subtitle} We enforce an uncompromising material testing regime so your home retains its strength for generations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10 mb-8">
            {qualityPhilosophy.pillars.map((item, idx) => (
              <div key={idx} className="p-5 rounded bg-slate-900/90 border border-slate-800">
                <div className="w-2.5 h-2.5 rounded-full bg-[#D32F2F] mb-3" />
                <h4 className="text-sm font-bold text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
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
              className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#D32F2F] hover:bg-[#B71C1C] rounded transition-colors cursor-pointer shrink-0"
            >
              Consult Our Site Engineers
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
