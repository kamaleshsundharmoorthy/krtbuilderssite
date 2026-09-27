import React from 'react';
import { MaterialSpecificationCategory } from '../types';
import { X, CheckCircle, Info } from 'lucide-react';

interface MaterialModalProps {
  category: MaterialSpecificationCategory | null;
  onClose: () => void;
  onSelectPackageForEnquiry: (packageName: string) => void;
}

export const MaterialModal: React.FC<MaterialModalProps> = ({
  category,
  onClose,
  onSelectPackageForEnquiry,
}) => {
  if (!category) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      <div className="relative w-full max-w-4xl bg-white rounded-lg shadow-2xl overflow-hidden border border-slate-200 my-8 max-h-[90vh] flex flex-col text-slate-900">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-stone-50">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#B8594E]">
              Technical Specification Dossier
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              {category.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-500 hover:text-slate-900 rounded-full hover:bg-slate-200 transition-colors cursor-pointer"
            aria-label="Close specification modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Description */}
        <div className="p-6 bg-white border-b border-slate-100">
          <p className="text-sm text-slate-600 mb-2 font-light">
            {category.description}
          </p>
          <div className="flex items-center gap-2 text-xs text-amber-800 bg-amber-50 p-2.5 rounded border border-amber-200">
            <Info className="w-4 h-4 shrink-0 text-amber-600" />
            <span>Specifications represent benchmark construction standards. All brands & finishes can be customized in your itemized Bill of Quantities (BOQ).</span>
          </div>
        </div>

        {/* Detailed Items Table */}
        <div className="overflow-y-auto p-6 space-y-6">
          {category.items.map((item, idx) => (
            <div key={idx} className="border border-slate-200 rounded-lg p-5 bg-stone-50">
              <h4 className="text-base font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200 flex items-center justify-between">
                <span>{item.component}</span>
                {item.technicalNotes && (
                  <span className="text-xs font-normal text-slate-500 italic max-w-md text-right hidden sm:inline">
                    {item.technicalNotes}
                  </span>
                )}
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
                {/* Essential */}
                <div className="p-3 rounded bg-white border border-slate-200">
                  <div className="font-bold text-slate-500 uppercase tracking-wider mb-1 text-[11px]">
                    Essential
                  </div>
                  <p className="text-slate-700 leading-relaxed font-light">
                    {item.essential}
                  </p>
                </div>

                {/* Signature */}
                <div className="p-3 rounded bg-white border border-rose-200 ring-1 ring-rose-100">
                  <div className="font-bold text-[#B8594E] uppercase tracking-wider mb-1 text-[11px]">
                    Signature (Popular)
                  </div>
                  <p className="text-slate-800 leading-relaxed font-medium">
                    {item.signature}
                  </p>
                </div>

                {/* Premium */}
                <div className="p-3 rounded bg-white border border-slate-300">
                  <div className="font-bold text-slate-900 uppercase tracking-wider mb-1 text-[11px]">
                    Premium
                  </div>
                  <p className="text-slate-800 leading-relaxed font-light">
                    {item.premium}
                  </p>
                </div>

                {/* Luxury */}
                <div className="p-3 rounded bg-slate-900 text-white border border-slate-800">
                  <div className="font-bold text-[#E8A59C] uppercase tracking-wider mb-1 text-[11px]">
                    Luxury Estate
                  </div>
                  <p className="text-slate-200 leading-relaxed font-light">
                    {item.luxury}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 px-6 border-t border-slate-200 bg-stone-50 flex items-center justify-between">
          <span className="text-xs text-slate-500">
            KRT Builders Quality Assurance Manual (IS Standards Compliant)
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-bold uppercase tracking-wider text-white bg-slate-900 hover:bg-slate-800 rounded cursor-pointer transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
