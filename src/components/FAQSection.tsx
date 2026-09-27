import React, { useState } from 'react';
import { faqData } from '../data/faq';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const categories = ['All', 'Process', 'Packages & Pricing', 'Materials', 'Approvals & Warranty'];

  const filteredFaqs = selectedCategory === 'All'
    ? faqData
    : faqData.filter((item) => item.category === selectedCategory);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-stone-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#D32F2F] mb-3">
            <HelpCircle className="w-4 h-4" />
            <span>Clarity Before Commitment</span>
          </div>
          <h2 className="editorial-title text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-[-0.035em] mb-4">
            Frequently Asked Questions<span className="text-[#D32F2F]">.</span>
          </h2>
          <p className="text-base text-slate-600 font-light">
            Everything you need to know about architectural planning, construction contracts, materials, timelines, and handover.
          </p>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-semibold rounded transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-stone-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="bg-white rounded-lg border border-slate-200 shadow-xs overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-stone-50/70 select-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900 pr-2">
                    {faq.question}
                  </span>
                  <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    <p>{faq.answer}</p>
                    <div className="mt-3 text-[11px] text-[#D32F2F] font-semibold">
                      Category: {faq.category}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
