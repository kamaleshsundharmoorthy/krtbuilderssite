import React from 'react';
import { companyInfo } from '../data/company';
import { CheckCircle2, Compass, ShieldAlert, Award, FileText, Ruler } from 'lucide-react';

interface AboutProps {
  onLearnProcess: () => void;
  onExploreMaterials: () => void;
}

export const About: React.FC<AboutProps> = ({
  onLearnProcess,
  onExploreMaterials,
}) => {
  const personalizationFactors = [
    { label: "Your Lifestyle", desc: "Open courtyards, work-from-home acoustic zones, or terrace gardens designed around daily habits." },
    { label: "Family Requirements", desc: "Elder-accessible ground floor suites, children's study alcoves, and puja rooms in northeast alignments." },
    { label: "Site & Soil Conditions", desc: "Customized foundation engineering (pile, raft, or footing) matched precisely to geotechnical soil tests." },
    { label: "Architectural Vision", desc: "Contemporary cubic lines, traditional Chettinad heritage touches, or sleek glass cantilever overhangs." },
    { label: "Realistic Budgeting", desc: "Transparent line-item Bill of Quantities (BOQ) with fixed milestone tranches—zero surprise escalations." },
    { label: "Material Preferences", desc: "Handpicked vitrified slabs, authentic Burma teak, and Grohe/Kohler fixtures aligned to your taste." }
  ];

  return (
    <section id="about" className="py-24 bg-stone-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#D32F2F] mb-3">
            <span>Philosophy & Leadership</span>
            <span aria-hidden="true" className="text-slate-300">/</span>
            <span>Civil Engineering Discipline</span>
          </div>
          <h2 className="editorial-title text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-[-0.035em] mb-6">
            Built Around Your Life<span className="text-[#D32F2F]">.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            A home is not just a layout of bricks and concrete; it is the physical framework of your family’s future. At KRT Builders, we do not build cookie-cutter templates. Every residence is an architectural collaboration engineered around how your family moves, gathers, and lives.
          </p>
        </div>

        {/* Editorial Layout: Image & Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Left Column: Architectural Photo with Engineer Tag */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-lg overflow-hidden border border-slate-200/80 shadow-2xl bg-slate-100 group">
              <img
                src="/src/assets/images/construction_craftsmanship_1790486522293.jpg"
                alt="Er. Ashok Thangavel reviewing architectural drawings and structural engineering at KRT Builders site"
                className="w-full h-[450px] sm:h-[520px] object-cover object-center group-hover:scale-102 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded bg-slate-950/90 backdrop-blur-md border border-white/10 text-white">
                <div className="text-[11px] uppercase tracking-[0.16em] text-rose-400 font-bold mb-1">
                  Proprietor & Principal Engineer
                </div>
                <div className="text-lg font-extrabold text-white mb-1">
                  Er. Ashok Thangavel, B.E. (Civil)
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Direct personal oversight on all structural bar-bending schedules, concrete cube compressive tests, and slab casting across Sivagangai and South Tamil Nadu.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Personalization Principles */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[2px] bg-[#D32F2F]" />
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Core Foundations</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Six Pillars of Custom House Building
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {personalizationFactors.map((factor, index) => (
                <div key={index} className="p-4 rounded-lg bg-white border border-slate-200 shadow-xs hover:border-slate-300 hover:shadow-sm transition-all">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900 mb-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D32F2F]" />
                    {factor.label}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {factor.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onLearnProcess}
                className="px-6 py-3.5 text-xs uppercase tracking-[0.14em] font-bold text-white bg-slate-900 hover:bg-slate-800 rounded transition-colors cursor-pointer"
              >
                Explore 13-Stage Process
              </button>
              <button
                onClick={onExploreMaterials}
                className="px-6 py-3.5 text-xs uppercase tracking-[0.14em] font-bold text-slate-800 hover:text-slate-950 bg-white border border-slate-300 hover:border-slate-400 rounded transition-colors cursor-pointer"
              >
                View Material Philosophy
              </button>
            </div>
          </div>
        </div>

        {/* Four Editable Metric Proofs with 3D Depth */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {companyInfo.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-white border border-slate-200/90 shadow-3d-hover hover:border-slate-300 transition-all flex flex-col justify-between"
            >
              <div className="border-l-3 border-[#D32F2F] pl-4 mb-2">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-mono tabular-nums mb-1 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-extrabold text-slate-800 mb-0.5 tracking-tight">
                  {stat.label}
                </div>
              </div>
              <div className="text-xs text-slate-500 pl-4 font-light">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
