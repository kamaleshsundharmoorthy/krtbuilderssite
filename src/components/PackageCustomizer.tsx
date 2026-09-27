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
    <div className="mt-16 bg-slate-900 text-white rounded-lg border border-slate-800 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
      {/* Decorative Brand Glow */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#D32F2F]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="max-w-3xl mb-8 relative z-10">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-400 mb-2">
          <Sparkles className="w-4 h-4" />
          <span>Interactive Estimation Platform</span>
        </div>
        <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
          CUSTOMIZE YOUR PACKAGE
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 mt-2">
          Tailor each building element to your taste. Combine our solid structural engineering framework with your preferred finishing materials to receive an immediate investment range.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
        {/* Controls Column (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          {/* Step 1: Base Tier Selection */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
              1. Choose Starting Package Framework
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {(['essential', 'signature', 'premium', 'luxury'] as PackageTier[]).map((tier) => (
                <button
                  key={tier}
                  onClick={() => setBaseTier(tier)}
                  className={`p-3 rounded text-left border transition-all cursor-pointer ${
                    baseTier === tier
                      ? 'border-[#D32F2F] bg-rose-950/40 text-white ring-1 ring-[#D32F2F]'
                      : 'border-slate-800 bg-slate-800/70 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  <div className="text-xs font-bold capitalize">{tier}</div>
                  <div className="text-[11px] text-slate-400 font-mono mt-0.5">
                    ~₹{baseRates[tier]}/sq.ft
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Area & Floor Sliders */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded bg-slate-950/70 border border-slate-800">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold text-slate-300">Expected Built-Up Area</span>
                <span className="text-xs font-mono font-bold text-rose-400">
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
                className="w-full accent-[#D32F2F] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                <span>1,200 sq.ft</span>
                <span>3,500 sq.ft</span>
                <span>6,000 sq.ft</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold text-slate-300">Number of Floors</span>
                <span className="text-xs font-mono font-bold text-rose-400">
                  {floors === 1 ? 'Ground Floor Only (G)' : `G + ${floors - 1} Floors`}
                </span>
              </div>
              <div className="flex gap-2">
                {[1, 2, 3].map((f) => (
                  <button
                    key={f}
                    onClick={() => setFloors(f)}
                    className={`flex-1 py-1.5 text-xs font-semibold rounded border cursor-pointer ${
                      floors === f
                        ? 'bg-[#D32F2F] text-white border-[#D32F2F]'
                        : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
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
              <label className="text-xs font-bold text-slate-400 block mb-1.5">
                Living & Bedroom Flooring
              </label>
              <select
                value={flooringChoice}
                onChange={(e) => setFlooringChoice(e.target.value)}
                className="w-full text-xs bg-slate-950 border border-slate-700 rounded p-2.5 text-slate-200 focus:outline-none focus:ring-1 focus:ring-rose-500"
              >
                <option value="Vitrified Double-Charged (600x600mm)">Vitrified Double-Charged (600x600mm)</option>
                <option value="GVT Glazed Slabs (800x1600mm)">GVT Glazed Slabs (800x1600mm) [Recommended]</option>
                <option value="Hardwood & GVT Combination">Hardwood & GVT Combination (+₹140/sq.ft)</option>
                <option value="Italian Marble (Statuario/Botticino)">Italian Marble (Statuario/Botticino) (+₹220/sq.ft)</option>
              </select>
            </div>

            {/* Kitchen */}
            <div>
              <label className="text-xs font-bold text-slate-400 block mb-1.5">
                Kitchen Countertop & Sink
              </label>
              <select
                value={kitchenChoice}
                onChange={(e) => setKitchenChoice(e.target.value)}
                className="w-full text-xs bg-slate-950 border border-slate-700 rounded p-2.5 text-slate-200 focus:outline-none focus:ring-1 focus:ring-rose-500"
              >
                <option value="Jet Black Granite with SS Franke Sink">Jet Black Granite with SS Franke Sink</option>
                <option value="Engineered Quartz Countertop + Carysil Sink">Engineered Quartz Countertop + Carysil Sink (+₹65/sq.ft)</option>
                <option value="Sintered Stone Island Countertop">Sintered Stone Island Countertop (+₹120/sq.ft)</option>
              </select>
            </div>

            {/* Bathrooms */}
            <div>
              <label className="text-xs font-bold text-slate-400 block mb-1.5">
                Sanitaryware & Bath CP Fittings
              </label>
              <select
                value={bathroomChoice}
                onChange={(e) => setBathroomChoice(e.target.value)}
                className="w-full text-xs bg-slate-950 border border-slate-700 rounded p-2.5 text-slate-200 focus:outline-none focus:ring-1 focus:ring-rose-500"
              >
                <option value="Parryware & Jaquar Classic">Parryware & Jaquar Classic</option>
                <option value="Jaquar & Kohler Concealed Cisterns">Jaquar & Kohler Concealed Cisterns [Standard]</option>
                <option value="Grohe Thermostatic Diverters + Glass Partition">Grohe Thermostatic Diverters + Glass Partition (+₹85/sq.ft)</option>
                <option value="TOTO Smart Washlet & Axor Ceiling Shower">TOTO Smart Washlet & Axor Ceiling Shower (+₹180/sq.ft)</option>
              </select>
            </div>

            {/* Smart Home */}
            <div>
              <label className="text-xs font-bold text-slate-400 block mb-1.5">
                Electrical & Smart Automation
              </label>
              <select
                value={smartChoice}
                onChange={(e) => setSmartChoice(e.target.value)}
                className="w-full text-xs bg-slate-950 border border-slate-700 rounded p-2.5 text-slate-200 focus:outline-none focus:ring-1 focus:ring-rose-500"
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
        <div className="lg:col-span-4 bg-slate-950 rounded-lg p-6 border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-rose-400 mb-1">
              Estimated Investment Range
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tabular-nums mb-1">
              ₹{totalMin} – ₹{totalMax} <span className="text-lg font-sans font-normal text-slate-400">Lakhs</span>
            </div>
            <div className="text-xs text-slate-400 mb-4 font-mono">
              ~₹{calculatedRatePerSqFt.toLocaleString()} / sq.ft for {builtUpArea.toLocaleString()} sq.ft
            </div>

            <div className="space-y-2 py-4 border-y border-slate-800 text-xs text-slate-300">
              <div className="flex justify-between">
                <span>Base Framework:</span>
                <span className="font-bold text-white capitalize">{baseTier}</span>
              </div>
              <div className="flex justify-between">
                <span>Total Built-Up Area:</span>
                <span className="font-bold text-white font-mono">{builtUpArea} sq.ft</span>
              </div>
              <div className="flex justify-between">
                <span>Floors:</span>
                <span className="font-bold text-white">{floors} Floors</span>
              </div>
              <div className="flex justify-between">
                <span>Civil Site Supervision:</span>
                <span className="font-bold text-emerald-400">Included</span>
              </div>
              <div className="flex justify-between">
                <span>10-Yr Structural Warranty:</span>
                <span className="font-bold text-emerald-400">Included</span>
              </div>
            </div>

            {/* Mandatory Non-Binding Disclaimer */}
            <div className="mt-4 p-3 rounded bg-slate-900 border border-slate-800 text-[11px] text-slate-400 leading-normal flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
              <span>
                Final pricing depends on site conditions, built-up area, architectural design, specific material selections, and municipal requirements.
              </span>
            </div>
          </div>

          <div className="mt-6 pt-4">
            <button
              onClick={handleTransferToForm}
              className="w-full py-3.5 px-4 text-xs uppercase tracking-wider font-bold text-white bg-[#D32F2F] hover:bg-[#B71C1C] rounded shadow-lg shadow-rose-950/60 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
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
