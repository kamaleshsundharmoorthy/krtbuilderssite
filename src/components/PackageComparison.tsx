import React, { useState } from 'react';
import { materialSpecifications } from '../data/materials';
import { MaterialSpecificationCategory } from '../types';
import { MaterialModal } from './MaterialModal';
import { ChevronDown, ChevronUp, Layers, Check, ExternalLink } from 'lucide-react';

interface PackageComparisonProps {
  onSelectPackageForEnquiry: (packageName: string) => void;
}

export const PackageComparison: React.FC<PackageComparisonProps> = ({
  onSelectPackageForEnquiry,
}) => {
  const [selectedCategoryTab, setSelectedCategoryTab] = useState<string>('all');
  const [activeModalCategory, setActiveModalCategory] = useState<MaterialSpecificationCategory | null>(null);
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({
    structure: true,
    flooring: true,
    kitchen: true,
    bathroom: true,
  });

  const toggleCategory = (id: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const categoriesToShow = selectedCategoryTab === 'all'
    ? materialSpecifications
    : materialSpecifications.filter((c) => c.id === selectedCategoryTab);

  return (
    <div className="mt-16 bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
      {/* Table Header Controls */}
      <div className="p-6 border-b border-slate-200 bg-stone-50 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#D32F2F] block mb-1">
            Material Specification Matrix
          </span>
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
            Compare All 16 Construction Disciplines
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Expand any category below to inspect exact material brands, allowances, and finishes across each package level.
          </p>
        </div>

        {/* Quick Filter Select for Mobile & Desktop */}
        <div className="flex items-center gap-2">
          <label htmlFor="cat-filter" className="text-xs font-medium text-slate-600 whitespace-nowrap">
            Filter Discipline:
          </label>
          <select
            id="cat-filter"
            value={selectedCategoryTab}
            onChange={(e) => setSelectedCategoryTab(e.target.value)}
            className="text-xs font-semibold bg-white border border-slate-300 rounded px-3 py-2 text-slate-800 focus:outline-none focus:ring-1 focus:ring-rose-500"
          >
            <option value="all">All 16 Disciplines</option>
            {materialSpecifications.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Package Column Headers (Sticky Subhead) */}
      <div className="hidden lg:grid grid-cols-12 gap-4 px-6 py-4 bg-slate-900 text-white text-xs font-bold tracking-wider uppercase border-b border-slate-800">
        <div className="col-span-4 text-slate-300">Construction Category & Detail</div>
        <div className="col-span-2 text-slate-300">Essential</div>
        <div className="col-span-2 text-rose-400 font-extrabold">Signature (Popular)</div>
        <div className="col-span-2 text-slate-200">Premium</div>
        <div className="col-span-2 text-amber-300">Luxury Estate</div>
      </div>

      {/* Accordion List of Categories */}
      <div className="divide-y divide-slate-200">
        {categoriesToShow.map((cat) => {
          const isExpanded = expandedCategories[cat.id] ?? false;

          return (
            <div key={cat.id} className="transition-colors">
              {/* Category Header Row */}
              <div
                onClick={() => toggleCategory(cat.id)}
                className="p-5 px-6 flex items-center justify-between cursor-pointer hover:bg-stone-50 select-none"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-rose-50 border border-rose-200 flex items-center justify-center text-[#D32F2F]">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                      <span>{cat.title}</span>
                      <span className="text-xs font-normal text-slate-500">
                        ({cat.items.length} items)
                      </span>
                    </h4>
                    <p className="text-xs text-slate-500 line-clamp-1">
                      {cat.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveModalCategory(cat);
                    }}
                    className="text-xs font-bold text-[#D32F2F] hover:underline flex items-center gap-1 p-1 px-2.5 rounded bg-rose-50 hover:bg-rose-100 transition-colors"
                  >
                    <span>Full Specs</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>

                  <div className="p-1 rounded text-slate-500 hover:text-slate-900">
                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </div>
              </div>

              {/* Category Items Detailed View */}
              {isExpanded && (
                <div className="bg-stone-50/70 p-4 sm:p-6 border-t border-slate-200 space-y-4">
                  {cat.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded bg-white border border-slate-200 text-xs shadow-xs"
                    >
                      <div className="font-bold text-slate-900 mb-3 pb-1 border-b border-slate-100 text-sm flex items-center justify-between">
                        <span>{item.component}</span>
                        {item.technicalNotes && (
                          <span className="text-[11px] font-normal text-slate-500 italic hidden sm:inline">
                            Note: {item.technicalNotes}
                          </span>
                        )}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {/* Essential */}
                        <div className="p-2.5 rounded bg-stone-50 border border-slate-200">
                          <span className="font-bold text-slate-500 uppercase tracking-wider block mb-1 text-[10px]">
                            Essential
                          </span>
                          <span className="text-slate-700 leading-normal block">
                            {item.essential}
                          </span>
                        </div>

                        {/* Signature */}
                        <div className="p-2.5 rounded bg-rose-50/50 border border-rose-200">
                          <span className="font-bold text-[#D32F2F] uppercase tracking-wider block mb-1 text-[10px]">
                            Signature
                          </span>
                          <span className="text-slate-800 leading-normal block font-medium">
                            {item.signature}
                          </span>
                        </div>

                        {/* Premium */}
                        <div className="p-2.5 rounded bg-slate-50 border border-slate-300">
                          <span className="font-bold text-slate-800 uppercase tracking-wider block mb-1 text-[10px]">
                            Premium
                          </span>
                          <span className="text-slate-800 leading-normal block">
                            {item.premium}
                          </span>
                        </div>

                        {/* Luxury */}
                        <div className="p-2.5 rounded bg-slate-900 text-white border border-slate-800">
                          <span className="font-bold text-rose-400 uppercase tracking-wider block mb-1 text-[10px]">
                            Luxury Estate
                          </span>
                          <span className="text-slate-200 leading-normal block">
                            {item.luxury}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Modal for Technical Dossier */}
      <MaterialModal
        category={activeModalCategory}
        onClose={() => setActiveModalCategory(null)}
        onSelectPackageForEnquiry={onSelectPackageForEnquiry}
      />
    </div>
  );
};
