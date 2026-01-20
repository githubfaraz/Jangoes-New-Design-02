
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-xl border-b border-slate-100 py-4 shadow-xl' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center space-x-3 cursor-pointer group">
          <div className="w-11 h-11 blue-green-gradient rounded-xl flex items-center justify-center shadow-2xl group-hover:rotate-6 transition-transform">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className={`text-2xl font-black tracking-tighter ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
            JAN<span className="text-emerald-400 italic">GOES</span>
          </span>
        </div>

        <nav className="hidden lg:flex items-center space-x-12">
          {['Network', 'Solutions', 'Impact', 'About'].map((item) => (
            <a key={item} href="#" className={`text-[10px] font-black uppercase tracking-[0.3em] transition-colors ${isScrolled ? 'text-slate-600 hover:text-blue-600' : 'text-white/80 hover:text-emerald-400'}`}>{item}</a>
          ))}
        </nav>

        <div className="flex items-center space-x-8">
          <button className={`hidden sm:block text-[10px] font-black uppercase tracking-[0.2em] transition-colors ${isScrolled ? 'text-slate-900 hover:text-blue-600' : 'text-white hover:text-emerald-400'}`}>Portal</button>
          <button className="btn-primary text-white px-8 py-3.5 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] shadow-2xl">
            Start Shipping
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
