import React, { useState, useMemo } from 'react';
import { PackageTier } from '../types';
import { Calculator, Check, ArrowRight, Sparkles, AlertCircle } from 'lucide-react';

interface PackageCustomizerProps {
  onQuoteRequested: (config: {
    packageTier: string;
    area: number;
    floors: number;
    flooringChoice: string;
    kitchenChoice: string;
    bathroomChoice: string;
    joineryChoice: string;
    smartChoice: string;
    estimatedCost: string;
  }) => void;
}

export const PackageCustomizer: React.FC<PackageCustomizerProps> = ({
  onQuoteRequested,
}) => {
  const [baseTier, setBaseTier] = useState<PackageTier>('signature');
  const [builtUpArea, setBuiltUpArea] = useState<number>(2400);
  const [floors, setFloors] = useState<number>(2);

  // Customization Selections
  const [flooringChoice, setFlooringChoice] = useState<string>('GVT Glazed Slabs (800x1600mm)');
  const [kitchenChoice, setKitchenChoice] = useState<string>('Jet Black Granite with SS Franke Sink');
  const [bathroomChoice, setBathroomChoice] = useState<string>('Jaquar & Kohler Concealed Cisterns');
  const [joineryChoice, setJoineryChoice] = useState<string>('1st Quality Teakwood Main Door + UPVC Windows');
  const [smartChoice, setSmartChoice] = useState<string>('Living & Master Bed Wi-Fi Smart Switches');

  // Rates baseline per sq.ft
  const baseRates: Record<PackageTier, number> = {
    essential: 2150,
    signature: 2550,
    premium: 3150,
    luxury: 3950,
  };

  // Addon cost adjustments per sq.ft
  const calculatedRatePerSqFt = useMemo(() => {
    let rate = baseRates[baseTier];

    // Flooring adjustments
    if (flooringChoice.includes('Italian Marble')) rate += 220;
    else if (flooringChoice.includes('Hardwood')) rate += 140;

    // Kitchen adjustments
    if (kitchenChoice.includes('Engineered Quartz')) rate += 65;
    else if (kitchenChoice.includes('Sintered Stone')) rate += 120;

    // Bathroom adjustments
    if (bathroomChoice.includes('Grohe Thermostatic')) rate += 85;
    else if (bathroomChoice.includes('TOTO Smart')) rate += 180;

    // Smart Home adjustments
    if (smartChoice.includes('Full KNX')) rate += 140;
    else if (smartChoice.includes('Schneider')) rate += 60;

    return rate;
  }, [baseTier, flooringChoice, kitchenChoice, bathroomChoice, smartChoice]);

  const totalMin = Math.round((calculatedRatePerSqFt * 0.96 * builtUpArea) / 100000) / 10;
  const totalMax = Math.round((calculatedRatePerSqFt * 1.05 * builtUpArea) / 100000) / 10;

  const handleTransferToForm = () => {
    onQuoteRequested({
      packageTier: baseTier.toUpperCase(),
      area: builtUpArea,
      floors: floors,
      flooringChoice,
      kitchenChoice,
      bathroomChoice,
      joineryChoice,
      smartChoice,
      estimatedCost: `₹${totalMin} Lakhs – ₹${totalMax} Lakhs (~₹${calculatedRatePerSqFt}/sq.ft)`,
    });
  };

  return (
    <div className="mt-16 bg-white text-slate-900 rounded-2xl border border-slate-200/90 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
      {/* Decorative Subtle Brand Glow */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-rose-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="max-w-3xl mb-8 relative z-10">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B8594E] mb-2">
          <Sparkles className="w-4 h-4" />
          <span>Interactive Estimation Platform</span>
        </div>
        <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
          CUSTOMIZE YOUR PACKAGE
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-2 font-light">
          Tailor each building element to your taste. Combine our solid structural engineering framework with your preferred finishing materials to receive an immediate investment range.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
        {/* Controls Column (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          {/* Step 1: Base Tier Selection */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
              1. Choose Starting Package Framework
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {(['essential', 'signature', 'premium', 'luxury'] as PackageTier[]).map((tier) => (
                <button
                  key={tier}
                  onClick={() => setBaseTier(tier)}
                  className={`p-3 rounded-lg text-left border transition-all cursor-pointer ${
                    baseTier === tier
                      ? 'border-[#B8594E] bg-rose-50/70 text-slate-950 ring-1 ring-[#B8594E] shadow-xs'
                      : 'border-slate-200 bg-stone-50/70 text-slate-700 hover:border-slate-300 hover:bg-white'
                  }`}
                >
                  <div className="text-xs font-bold capitalize">{tier}</div>
                  <div className="text-[11px] text-slate-500 font-mono mt-0.5">
                    ~₹{baseRates[tier]}/sq.ft
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Area & Floor Sliders */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-stone-50/80 border border-slate-200">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold text-slate-700">Expected Built-Up Area</span>
                <span className="text-xs font-mono font-bold text-[#B8594E]">
                  {builtUpArea.toLocaleString()} sq.ft
                </span>
              </div>
              <input
                type="range"
                min="1200"
                max="6000"
                step="100"
                value={builtUpArea}
                onChange={(e) => setBuiltUpArea(Number(e.target.value))}
                className="w-full accent-[#B8594E] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
                <span>1,200 sq.ft</span>
                <span>3,500 sq.ft</span>
                <span>6,000 sq.ft</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold text-slate-700">Number of Floors</span>
                <span className="text-xs font-mono font-bold text-[#B8594E]">
                  {floors === 1 ? 'Ground Floor Only (G)' : `G + ${floors - 1} Floors`}
                </span>
              </div>
              <div className="flex gap-2">
                {[1, 2, 3].map((f) => (
                  <button
                    key={f}
                    onClick={() => setFloors(f)}
                    className={`flex-1 py-1.5 text-xs font-semibold rounded-lg border cursor-pointer transition-colors ${
                      floors === f
                        ? 'bg-[#B8594E] text-white border-[#B8594E] shadow-xs'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-stone-100'
                    }`}
                  >
                    {f === 1 ? '1 Floor' : `${f} Floors`}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Step 3: Finishes Selections */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Flooring */}
            <div>
              <label className="text-xs font-bold text-slate-600 block mb-1.5">
                Living & Bedroom Flooring
              </label>
              <select
                value={flooringChoice}
                onChange={(e) => setFlooringChoice(e.target.value)}
                className="w-full text-xs bg-white border border-slate-300 rounded-lg p-2.5 text-slate-800 focus:outline-none focus:ring-1 focus:ring-[#B8594E]"
              >
                <option value="Vitrified Double-Charged (600x600mm)">Vitrified Double-Charged (600x600mm)</option>
                <option value="GVT Glazed Slabs (800x1600mm)">GVT Glazed Slabs (800x1600mm) [Recommended]</option>
                <option value="Hardwood & GVT Combination">Hardwood & GVT Combination (+₹140/sq.ft)</option>
                <option value="Italian Marble (Statuario/Botticino)">Italian Marble (Statuario/Botticino) (+₹220/sq.ft)</option>
              </select>
            </div>

            {/* Kitchen */}
            <div>
              <label className="text-xs font-bold text-slate-600 block mb-1.5">
                Kitchen Countertop & Sink
              </label>
              <select
                value={kitchenChoice}
                onChange={(e) => setKitchenChoice(e.target.value)}
                className="w-full text-xs bg-white border border-slate-300 rounded-lg p-2.5 text-slate-800 focus:outline-none focus:ring-1 focus:ring-[#B8594E]"
              >
                <option value="Jet Black Granite with SS Franke Sink">Jet Black Granite with SS Franke Sink</option>
                <option value="Engineered Quartz Countertop + Carysil Sink">Engineered Quartz Countertop + Carysil Sink (+₹65/sq.ft)</option>
                <option value="Sintered Stone Island Countertop">Sintered Stone Island Countertop (+₹120/sq.ft)</option>
              </select>
            </div>

            {/* Bathrooms */}
            <div>
              <label className="text-xs font-bold text-slate-600 block mb-1.5">
                Sanitaryware & Bath CP Fittings
              </label>
              <select
                value={bathroomChoice}
                onChange={(e) => setBathroomChoice(e.target.value)}
                className="w-full text-xs bg-white border border-slate-300 rounded-lg p-2.5 text-slate-800 focus:outline-none focus:ring-1 focus:ring-[#B8594E]"
              >
                <option value="Parryware & Jaquar Classic">Parryware & Jaquar Classic</option>
                <option value="Jaquar & Kohler Concealed Cisterns">Jaquar & Kohler Concealed Cisterns [Standard]</option>
                <option value="Grohe Thermostatic Diverters + Glass Partition">Grohe Thermostatic Diverters + Glass Partition (+₹85/sq.ft)</option>
                <option value="TOTO Smart Washlet & Axor Ceiling Shower">TOTO Smart Washlet & Axor Ceiling Shower (+₹180/sq.ft)</option>
              </select>
            </div>

            {/* Smart Home */}
            <div>
              <label className="text-xs font-bold text-slate-600 block mb-1.5">
                Electrical & Smart Automation
              </label>
              <select
                value={smartChoice}
                onChange={(e) => setSmartChoice(e.target.value)}
                className="w-full text-xs bg-white border border-slate-300 rounded-lg p-2.5 text-slate-800 focus:outline-none focus:ring-1 focus:ring-[#B8594E]"
              >
                <option value="Standard Modular Concealed (Anchor/GM)">Standard Modular Concealed (Anchor/GM)</option>
                <option value="Living & Master Bed Wi-Fi Smart Switches">Living & Master Bed Wi-Fi Smart Switches [Popular]</option>
                <option value="Schneider Touch Automation + 4-Cam CCTV">Schneider Touch Automation + 4-Cam CCTV (+₹60/sq.ft)</option>
                <option value="Full KNX Integrated Home Automation">Full KNX Integrated Home Automation (+₹140/sq.ft)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Real-Time Cost Summary Box (4 cols) */}
        <div className="lg:col-span-4 bg-stone-50 rounded-xl p-6 border border-slate-200/90 shadow-sm flex flex-col justify-between">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#B8594E] mb-1">
              Estimated Investment Range
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-mono tabular-nums mb-1">
              ₹{totalMin} – ₹{totalMax} <span className="text-lg font-sans font-normal text-slate-600">Lakhs</span>
            </div>
            <div className="text-xs text-slate-500 mb-4 font-mono">
              ~₹{calculatedRatePerSqFt.toLocaleString()} / sq.ft for {builtUpArea.toLocaleString()} sq.ft
            </div>

            <div className="space-y-2 py-4 border-y border-slate-200 text-xs text-slate-600">
              <div className="flex justify-between">
                <span>Base Framework:</span>
                <span className="font-bold text-slate-900 capitalize">{baseTier}</span>
              </div>
              <div className="flex justify-between">
                <span>Total Built-Up Area:</span>
                <span className="font-bold text-slate-900 font-mono">{builtUpArea} sq.ft</span>
              </div>
              <div className="flex justify-between">
                <span>Floors:</span>
                <span className="font-bold text-slate-900">{floors} Floors</span>
              </div>
              <div className="flex justify-between">
                <span>Civil Site Supervision:</span>
                <span className="font-bold text-emerald-700">Included</span>
              </div>
              <div className="flex justify-between">
                <span>10-Yr Structural Warranty:</span>
                <span className="font-bold text-emerald-700">Included</span>
              </div>
            </div>

            {/* Mandatory Non-Binding Disclaimer */}
            <div className="mt-4 p-3 rounded-lg bg-amber-50/70 border border-amber-200/80 text-[11px] text-amber-900 leading-normal flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <span>
                Final pricing depends on site conditions, built-up area, architectural design, specific material selections, and municipal requirements.
              </span>
            </div>
          </div>

          <div className="mt-6 pt-4">
            <button
              onClick={handleTransferToForm}
              className="w-full py-3.5 px-4 text-xs uppercase tracking-wider font-bold text-white bg-[#B8594E] hover:bg-[#9E453A] rounded-lg shadow-md shadow-[#B8594E]/20 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
            >
              <span>Request Detailed BOQ Quotation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
