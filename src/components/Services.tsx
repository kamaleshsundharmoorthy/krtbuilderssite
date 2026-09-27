import React from 'react';
import { servicesData } from '../data/services';
import { ArrowRight, Check } from 'lucide-react';
import { ServiceItem } from '../types';
import { TiltCard } from './TiltCard';

interface ServicesProps {
  onSelectService: (service: ServiceItem) => void;
  onConsultationRequest: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({
  onSelectService,
  onConsultationRequest,
}) => {
  return (
    <section id="services" className="py-24 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#D32F2F] mb-3">
              <span>Comprehensive Construction Capabilities</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>Turnkey Execution</span>
            </div>
            <h2 className="editorial-title text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-[-0.035em]">
              What We Build<span className="text-[#D32F2F]">.</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-600 max-w-md font-light leading-relaxed">
            From vacant plots to fully furnished luxury estates. We unify architecture, civil engineering, material procurement, and interior execution under one accountable roof.
          </p>
        </div>

        {/* 6 Services Asymmetric Grid with 3D Tilt Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <TiltCard
              key={service.id}
              maxTilt={4}
              scale={1.02}
              className="group flex flex-col rounded-xl overflow-hidden border border-slate-200/90 bg-stone-50/70 hover:bg-white hover:border-slate-300 shadow-3d-hover relative"
            >
              {/* Top Accent Line on Hover */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-transparent group-hover:bg-[#D32F2F] transition-colors z-20" />

              {/* Card Image with Hover Zoom */}
              <div className="relative h-56 overflow-hidden bg-slate-950">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
                
                {/* Index & Tagline Lockup */}
                <div className="absolute top-3 left-4 z-10">
                  <span className="font-mono text-xs font-bold text-white/90 bg-black/60 px-2.5 py-0.5 rounded backdrop-blur-sm border border-white/10 shadow-sm">
                    0{index + 1}
                  </span>
                </div>

                <div className="absolute bottom-3 left-4 right-4 z-10">
                  <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-rose-300 drop-shadow-sm">
                    {service.tagline}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between relative z-10">
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900 mb-2.5 group-hover:text-[#D32F2F] transition-colors tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed font-light">
                    {service.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-1.5 mb-6 text-xs text-slate-700">
                    {service.highlights.slice(0, 3).map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#D32F2F] shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Trigger */}
                <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
                  <button
                    onClick={() => onSelectService(service)}
                    className="text-xs font-bold uppercase tracking-wider text-slate-900 hover:text-[#D32F2F] flex items-center gap-1.5 transition-colors cursor-pointer group-hover:translate-x-1 duration-200"
                  >
                    <span>Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onConsultationRequest(service.title)}
                    className="text-xs font-semibold text-[#D32F2F] hover:underline cursor-pointer"
                  >
                    Get Estimate →
                  </button>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};
