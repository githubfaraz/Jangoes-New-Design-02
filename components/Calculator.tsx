
import React, { useState } from 'react';

const Calculator: React.FC = () => {
  const [weight, setWeight] = useState(50);
  const [distance, setDistance] = useState(500);
  const [estimatedCost, setEstimatedCost] = useState<number | null>(null);

  const calculateCost = () => {
    const baseFare = 25;
    const ratePerKg = 4.75;
    const ratePerKm = 0.55;
    const total = baseFare + (weight * ratePerKg) + (distance * ratePerKm);
    setEstimatedCost(total);
  };

  return (
    <div className="bg-white rounded-[3.5rem] p-12 shadow-[0_48px_100px_-24px_rgba(30,64,175,0.15)] border border-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 rounded-full -mr-32 -mt-32 opacity-60"></div>
      
      <div className="relative z-10">
        <h3 className="text-3xl font-black mb-2 text-slate-900 tracking-tighter">Instant Logistics Quote</h3>
        <p className="text-slate-400 mb-12 font-bold uppercase text-[10px] tracking-widest">Algorithmic Pricing Engine</p>
        
        <div className="space-y-12">
          <div>
            <div className="flex justify-between items-center mb-6">
              <label className="text-[10px] font-black text-blue-900/40 uppercase tracking-[0.3em]">Load Weight</label>
              <span className="text-blue-600 font-black text-2xl">{weight} <span className="text-xs font-bold uppercase tracking-widest text-slate-400">kg</span></span>
            </div>
            <input
              type="range"
              min="1"
              max="5000"
              value={weight}
              onChange={(e) => setWeight(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-6">
              <label className="text-[10px] font-black text-blue-900/40 uppercase tracking-[0.3em]">Traverse Distance</label>
              <span className="text-emerald-600 font-black text-2xl">{distance} <span className="text-xs font-bold uppercase tracking-widest text-slate-400">km</span></span>
            </div>
            <input
              type="range"
              min="10"
              max="20000"
              value={distance}
              onChange={(e) => setDistance(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-emerald-500"
            />
          </div>

          <button
            onClick={calculateCost}
            className="w-full py-6 btn-primary text-white rounded-3xl font-black text-lg shadow-2xl uppercase tracking-[0.2em] hover:-translate-y-1 active:translate-y-0"
          >
            Generate Calculation
          </button>

          {estimatedCost !== null && (
            <div className="mt-10 p-10 blue-green-gradient rounded-[2.5rem] text-center transform animate-in zoom-in duration-500 shadow-2xl shadow-blue-200">
              <span className="text-white/80 text-[10px] font-bold uppercase tracking-[0.3em] block mb-2">Estimated Investment</span>
              <div className="flex items-center justify-center">
                <span className="text-white text-6xl font-black tracking-tighter">${estimatedCost.toFixed(2)}</span>
              </div>
              <p className="text-[8px] text-white/50 mt-6 leading-relaxed font-bold uppercase tracking-[0.4em]">Auth Code: JN-X-771-ALPHA</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
