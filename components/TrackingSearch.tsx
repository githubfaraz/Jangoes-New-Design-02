
import React, { useState } from 'react';

interface TrackingSearchProps {
  onSearch: (id: string) => void;
}

const TrackingSearch: React.FC<TrackingSearchProps> = ({ onSearch }) => {
  const [trackingId, setTrackingId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingId.trim()) {
      onSearch(trackingId);
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="flex items-center bg-white rounded-2xl p-1 shadow-2xl border border-slate-100 group transition-all focus-within:ring-4 focus-within:ring-emerald-400/20">
        <div className="pl-6 pr-4 text-blue-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="text"
          value={trackingId}
          onChange={(e) => setTrackingId(e.target.value)}
          placeholder="Global Shipment ID..."
          className="flex-grow py-5 px-2 outline-none text-lg font-bold text-slate-800 placeholder-slate-300 bg-transparent"
        />
        <button
          type="submit"
          className="btn-primary text-white px-10 py-5 rounded-xl font-black text-sm uppercase tracking-widest hover:scale-[1.02] transition-all active:scale-95 whitespace-nowrap"
        >
          Locate Now
        </button>
      </form>
      <div className="mt-6 flex flex-wrap gap-8 justify-center lg:justify-start text-[10px] font-black uppercase tracking-[0.3em] text-white/60">
        <span className="flex items-center group cursor-help hover:text-emerald-400 transition-colors">
          <span className="w-2 h-2 rounded-full bg-emerald-400 mr-2 animate-pulse"></span>
          Satellite Telemetry Active
        </span>
        <span className="flex items-center group cursor-help hover:text-blue-400 transition-colors">
          <span className="w-2 h-2 rounded-full bg-blue-400 mr-2"></span>
          End-to-End Cryptography
        </span>
      </div>
    </div>
  );
};

export default TrackingSearch;
