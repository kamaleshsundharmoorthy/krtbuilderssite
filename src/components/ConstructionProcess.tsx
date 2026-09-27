import React, { useState } from 'react';
import { processData } from '../data/process';
import { CheckCircle2, Clock, FileCheck, ArrowRight, ShieldCheck, ChevronRight } from 'lucide-react';

export const ConstructionProcess: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const currentStep = processData[activeStepIndex];

  return (
    <section id="process" className="py-24 bg-stone-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-rose-400 mb-3">
            <span>Rigorous 13-Stage Roadmap</span>
            <span aria-hidden="true">·</span>
            <span>Zero-Deviation Protocol</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            FROM PLOT TO HOME.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed text-balance">
            Every home we build follows a transparent, phased engineering sequence. Each stage requires physical verification and milestone approval before progressing to the next.
          </p>
        </div>

        {/* 13-Stage Interactive Horizontal / Grid Track */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Stage Selector List (5 cols) */}
          <div className="lg:col-span-5 bg-slate-950/80 rounded-lg border border-slate-800 p-2 sm:p-3 max-h-[620px] overflow-y-auto space-y-1">
            {processData.map((step, index) => {
              const isActive = index === activeStepIndex;

              return (
                <button
                  key={step.stepNumber}
                  onClick={() => setActiveStepIndex(index)}
                  className={`w-full text-left p-3 rounded transition-all flex items-center justify-between cursor-pointer ${
                    isActive
                      ? 'bg-rose-950/50 border-l-4 border-[#D32F2F] text-white shadow-md'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`text-xs font-mono font-bold ${isActive ? 'text-rose-400' : 'text-slate-500'}`}>
                      {step.stepNumber}
                    </span>
                    <div>
                      <div className="text-xs sm:text-sm font-bold tracking-tight">
                        {step.title}
                      </div>
                      <div className="text-[11px] text-slate-500">
                        {step.category} · {step.duration}
                      </div>
                    </div>
                  </div>

                  <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? 'text-[#D32F2F] translate-x-1' : 'text-slate-600'}`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Stage Deep-Dive Card (7 cols) */}
          <div className="lg:col-span-7 bg-slate-950 rounded-lg border border-slate-800 p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between min-h-[500px]">
            {/* Background watermarked index */}
            <div className="absolute top-2 right-4 text-7xl sm:text-9xl font-black text-slate-900/80 select-none pointer-events-none font-mono">
              {currentStep.stepNumber}
            </div>

            <div className="relative z-10">
              <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-400 mb-2">
                <span>Phase {currentStep.stepNumber}</span>
                <span aria-hidden="true">·</span>
                <span>{currentStep.category}</span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1 text-slate-300">
                  <Clock className="w-3.5 h-3.5 text-rose-400" />
                  {currentStep.duration}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-4">
                {currentStep.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8">
                {currentStep.description}
              </p>

              {/* Two Blocks: Deliverables & Quality Verification */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
                {/* Deliverables */}
                <div className="p-4 rounded bg-slate-900/90 border border-slate-800">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    <FileCheck className="w-4 h-4 text-[#D32F2F]" />
                    <span>Documentation & Deliverables</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-400">
                    {currentStep.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-rose-500 font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Quality Checks */}
                <div className="p-4 rounded bg-slate-900/90 border border-slate-800">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Engineering Quality Audit</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-400">
                    {currentStep.qualityChecks.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Stepper Navigation Buttons */}
            <div className="relative z-10 pt-4 border-t border-slate-800 flex items-center justify-between">
              <button
                disabled={activeStepIndex === 0}
                onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors"
              >
                ← Previous Stage
              </button>

              <div className="text-xs text-slate-500 font-mono">
                {activeStepIndex + 1} of {processData.length}
              </div>

              <button
                disabled={activeStepIndex === processData.length - 1}
                onClick={() => setActiveStepIndex((prev) => Math.min(processData.length - 1, prev + 1))}
                className="px-5 py-2 text-xs font-bold uppercase tracking-wider text-white bg-[#D32F2F] hover:bg-[#B71C1C] rounded disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors"
              >
                Next Stage →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
