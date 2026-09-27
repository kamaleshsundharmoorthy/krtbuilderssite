import React from 'react';
import { servicesData } from '../data/services';
import { ArrowRight, Check } from 'lucide-react';
import { ServiceItem } from '../types';

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
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D32F2F] mb-3">
              <span>Comprehensive Construction Capabilities</span>
              <span aria-hidden="true">·</span>
              <span>Turnkey Execution</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              WHAT WE BUILD
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-600 max-w-md">
            From vacant plots to fully furnished luxury estates. We unify architecture, civil engineering, material procurement, and interior execution under one accountable roof.
          </p>
        </div>

        {/* 6 Services Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="group flex flex-col rounded-lg overflow-hidden border border-slate-200 bg-stone-50 hover:border-slate-300 hover:shadow-xl transition-all duration-300"
            >
              {/* Card Image with Hover Zoom */}
              <div className="relative h-56 overflow-hidden bg-slate-900">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-rose-300">
                    {service.tagline}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2.5 group-hover:text-[#D32F2F] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-1.5 mb-6 text-xs text-slate-700">
                    {service.highlights.slice(0, 3).map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#D32F2F] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Trigger */}
                <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
                  <button
                    onClick={() => onSelectService(service)}
                    className="text-xs font-bold text-slate-900 hover:text-[#D32F2F] flex items-center gap-1.5 transition-colors cursor-pointer group-hover:translate-x-1 duration-200"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onConsultationRequest(service.title)}
                    className="text-[11px] font-semibold text-[#D32F2F] hover:underline cursor-pointer"
                  >
                    Get Estimate
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
