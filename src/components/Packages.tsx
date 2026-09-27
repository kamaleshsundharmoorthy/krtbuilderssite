import React, { useState } from 'react';
import { packagesData } from '../data/packages';
import { ConstructionPackage, PackageTier } from '../types';
import { PackageComparison } from './PackageComparison';
import { PackageCustomizer } from './PackageCustomizer';
import { Check, ArrowRight, ShieldCheck, Sliders, ListTree, Sparkles } from 'lucide-react';

interface PackagesProps {
  onSelectPackage: (packageName: string) => void;
  onCustomQuoteCalculated: (config: any) => void;
}

export const Packages: React.FC<PackagesProps> = ({
  onSelectPackage,
  onCustomQuoteCalculated,
}) => {
  const [activeTab, setActiveTab] = useState<'packages' | 'customizer' | 'comparison'>('packages');

  return (
    <section id="packages" className="py-24 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D32F2F] mb-3">
            <span>Transparent Residential Standards</span>
            <span aria-hidden="true">·</span>
            <span>Benchmark Specifications</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            BUILD YOUR HOME YOUR WAY.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            Our construction packages are not rigid boxes—they provide a crystal-clear starting point to understand quality, material specifications, and inclusions before we begin architectural drawings.
          </p>
        </div>

        {/* View Switcher: Packages Cards / Interactive Customizer / 16-Category Comparison */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-stone-100 rounded-lg border border-slate-200 mb-12 max-w-fit">
          <button
            onClick={() => setActiveTab('packages')}
            className={`px-4 py-2 text-xs font-bold rounded flex items-center gap-2 transition-colors cursor-pointer ${
              activeTab === 'packages'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <span>Package Overview</span>
          </button>

          <button
            onClick={() => setActiveTab('customizer')}
            className={`px-4 py-2 text-xs font-bold rounded flex items-center gap-2 transition-colors cursor-pointer ${
              activeTab === 'customizer'
                ? 'bg-[#D32F2F] text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>Customize Your Package</span>
          </button>

          <button
            onClick={() => setActiveTab('comparison')}
            className={`px-4 py-2 text-xs font-bold rounded flex items-center gap-2 transition-colors cursor-pointer ${
              activeTab === 'comparison'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <ListTree className="w-3.5 h-3.5" />
            <span>16-Category Spec Matrix</span>
          </button>
        </div>

        {/* MAIN PACKAGES CARDS VIEW */}
        {activeTab === 'packages' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packagesData.map((pkg) => {
              const isPopular = pkg.isPopular;

              return (
                <div
                  key={pkg.id}
                  className={`flex flex-col rounded-lg transition-all duration-300 relative overflow-hidden ${
                    isPopular
                      ? 'border-2 border-[#D32F2F] shadow-xl bg-white scale-[1.02] z-10'
                      : 'border border-slate-200 bg-stone-50 hover:border-slate-300 hover:shadow-lg'
                  }`}
                >
                  {/* Popular Ribbon */}
                  {isPopular && (
                    <div className="bg-[#D32F2F] text-white text-[10px] font-extrabold uppercase tracking-widest text-center py-1.5 px-4">
                      Most Selected by Homeowners
                    </div>
                  )}

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Name & Tagline */}
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-slate-900 mb-1">
                          {pkg.name}
                        </h3>
                        <p className="text-xs text-slate-500 min-h-[32px]">
                          {pkg.tagline}
                        </p>
                      </div>

                      {/* Approximate Baseline Rate */}
                      <div className="py-3 px-3.5 rounded bg-white border border-slate-200 mb-5">
                        <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                          Baseline Construction Rate
                        </div>
                        <div className="text-xl font-extrabold text-slate-900 font-mono">
                          {pkg.approxRatePerSqFt}
                        </div>
                        <div className="text-[10px] text-slate-400 mt-0.5">
                          *Subject to site conditions & soil test
                        </div>
                      </div>

                      {/* Summary Highlights */}
                      <div className="mb-6">
                        <span className="text-[11px] font-bold text-slate-800 uppercase tracking-wider block mb-2">
                          Key Inclusions:
                        </span>
                        <ul className="space-y-2 text-xs text-slate-700">
                          {pkg.summaryHighlights.slice(0, 5).map((hl, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <Check className="w-3.5 h-3.5 text-[#D32F2F] shrink-0 mt-0.5" />
                              <span className="leading-snug">{hl}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Disciplines Snapshot */}
                      <div className="pt-4 border-t border-slate-200/80 space-y-2 text-[11px]">
                        <div>
                          <strong className="text-slate-900 block font-semibold">Structure:</strong>
                          <span className="text-slate-600 line-clamp-1">{pkg.structureHighlight}</span>
                        </div>
                        <div>
                          <strong className="text-slate-900 block font-semibold">Flooring:</strong>
                          <span className="text-slate-600 line-clamp-1">{pkg.flooringHighlight}</span>
                        </div>
                        <div>
                          <strong className="text-slate-900 block font-semibold">Bathrooms:</strong>
                          <span className="text-slate-600 line-clamp-1">{pkg.bathroomHighlight}</span>
                        </div>
                      </div>
                    </div>

                    {/* Action CTA */}
                    <div className="pt-6 mt-6 border-t border-slate-200">
                      <button
                        onClick={() => onSelectPackage(pkg.name)}
                        className={`w-full py-3 px-4 text-xs uppercase tracking-wider font-bold rounded transition-colors flex items-center justify-center gap-2 cursor-pointer ${
                          isPopular
                            ? 'bg-[#D32F2F] hover:bg-[#B71C1C] text-white shadow-md'
                            : 'bg-slate-900 hover:bg-slate-800 text-white'
                        }`}
                      >
                        <span>Choose {pkg.name.split(' ')[0]}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={() => setActiveTab('comparison')}
                        className="w-full text-center text-[11px] text-slate-500 hover:text-slate-800 font-medium mt-2 cursor-pointer"
                      >
                        Compare All Specifications
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* INTERACTIVE CUSTOMIZER VIEW */}
        {activeTab === 'customizer' && (
          <PackageCustomizer onQuoteRequested={onCustomQuoteCalculated} />
        )}

        {/* 16-CATEGORY SPECIFICATION MATRIX VIEW */}
        {activeTab === 'comparison' && (
          <PackageComparison onSelectPackageForEnquiry={onSelectPackage} />
        )}
      </div>
    </section>
  );
};
