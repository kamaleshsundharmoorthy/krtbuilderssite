import React, { useState } from 'react';
import { testimonialsData } from '../data/testimonials';
import { Quote, Star, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const activeReview = testimonialsData[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="py-24 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#D32F2F] mb-3">
            <span>Verified Homeowners</span>
            <span aria-hidden="true" className="text-slate-300">/</span>
            <span>Real Experiences</span>
          </div>
          <h2 className="editorial-title text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-[-0.035em] mb-4">
            Homes. Stories. Trust<span className="text-[#D32F2F]">.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed text-balance font-light">
            Real families sharing their journey of building with KRT Builders across Sivagangai, Madurai, Karaikudi, and surrounding districts.
          </p>
        </div>

        {/* Featured Testimonial Carousel Box */}
        <div className="bg-stone-50 rounded-xl border border-slate-200 p-8 sm:p-12 relative shadow-sm max-w-4xl mx-auto">
          {/* Quote Mark */}
          <div className="w-12 h-12 rounded-full bg-rose-50 text-[#D32F2F] flex items-center justify-center mb-6">
            <Quote className="w-6 h-6" />
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1 mb-4">
            {[...Array(activeReview.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
          </div>

          {/* Quote Body with Luxury Serif Editorial Styling */}
          <blockquote className="text-xl sm:text-2xl text-slate-800 font-serif-luxury font-normal leading-relaxed mb-8 italic">
            "{activeReview.quote}"
          </blockquote>

          {/* Client & Project Metadata */}
          <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="font-bold text-slate-900 text-base">
                {activeReview.clientName}
              </div>
              <div className="text-xs text-slate-500">
                {activeReview.profession}
              </div>
              <div className="flex items-center gap-2 text-xs text-[#D32F2F] font-medium mt-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>{activeReview.projectTitle} · {activeReview.location}</span>
                <span className="text-slate-400">({activeReview.builtArea})</span>
              </div>
            </div>

            {/* Stepper Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full border border-slate-300 bg-white hover:bg-slate-100 flex items-center justify-center text-slate-700 hover:text-slate-900 transition-colors cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="text-xs text-slate-500 font-mono px-2">
                {currentIndex + 1} / {testimonialsData.length}
              </span>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full border border-slate-300 bg-white hover:bg-slate-100 flex items-center justify-center text-slate-700 hover:text-slate-900 transition-colors cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
