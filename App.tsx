
import React, { useState } from 'react';
import Header from './components/Header';
import TrackingSearch from './components/TrackingSearch';
import Calculator from './components/Calculator';
import Chatbot from './components/Chatbot';

const App: React.FC = () => {
  const [trackingId, setTrackingId] = useState<string | null>(null);

  const handleSearch = (id: string) => {
    setTrackingId(id);
    alert(`🛰️ Jango Satellite Uplink: Locating ${id}...`);
  };

  const services = [
    {
      title: "Aerial Logistics",
      description: "Artistic precision in air freight, reaching over 200 countries overnight.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      ),
      color: "bg-blue-600"
    },
    {
      title: "Maritime Masters",
      description: "Fluid and sustainable sea freight solutions for the modern global economy.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      color: "bg-emerald-600"
    },
    {
      title: "Smart Network",
      description: "Interconnected land-based routing powered by AI for maximum efficiency.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: "bg-blue-500"
    },
    {
      title: "Eco Fulfillment",
      description: "Carbon-neutral warehousing and delivery for responsible brands.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      color: "bg-emerald-500"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />

      <main className="flex-grow">
        {/* Artistic Hero Banner Section */}
        <section className="relative h-[90vh] min-h-[700px] flex items-center overflow-hidden">
          {/* Background Image with Slow Zoom */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop" 
              alt="Artistic Port View" 
              className="w-full h-full object-cover animate-slow-zoom"
            />
            <div className="absolute inset-0 hero-overlay"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl text-white">
              <div className="inline-block px-4 py-1 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-400/30 text-emerald-300 text-xs font-bold uppercase tracking-[0.3em] mb-8 animate-in slide-in-from-left duration-700">
                Precision Logistics 2025
              </div>
              <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter mb-8 drop-shadow-2xl">
                The Art of <br />
                <span className="text-emerald-400">Moving Forward.</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-50/80 mb-12 max-w-2xl font-medium leading-relaxed drop-shadow-lg">
                Jangoes blends high-performance technology with artistic operational excellence to redefine global commerce.
              </p>

              <div className="glass-card p-2 rounded-2xl max-w-2xl shadow-2xl">
                <TrackingSearch onSearch={handleSearch} />
              </div>
            </div>
          </div>

          {/* Abstract Artistic Shapes */}
          <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-gradient-to-tl from-emerald-500/20 to-transparent blur-3xl rounded-full"></div>
        </section>

        {/* Global Stats with Blue & Green theme */}
        <section className="py-24 container mx-auto px-6 relative -mt-16 z-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-1 p-1 bg-white shadow-2xl rounded-3xl overflow-hidden border border-slate-100">
            {[
              { label: "Active Hubs", val: "1,200+", icon: "📍", color: "text-blue-600" },
              { label: "Delivery Success", val: "99.98%", icon: "✅", color: "text-emerald-600" },
              { label: "Global Reach", val: "195 Countries", icon: "🌎", color: "text-blue-500" },
              { label: "AI Requests/s", val: "12,500", icon: "⚡", color: "text-emerald-500" }
            ].map((stat, i) => (
              <div key={i} className="bg-white p-10 flex flex-col items-center justify-center text-center hover:bg-slate-50 transition-colors">
                <span className="text-3xl mb-4">{stat.icon}</span>
                <span className={`text-4xl font-black ${stat.color} mb-2 tracking-tighter`}>{stat.val}</span>
                <span className="text-slate-400 font-bold uppercase text-[10px] tracking-widest">{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Artistic Section with Image and Calculator */}
        <section className="py-32 bg-white">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-br from-blue-100 to-emerald-100 rounded-[3rem] blur-2xl opacity-50"></div>
                <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop" 
                    alt="Sustainable Logistics Hub" 
                    className="w-full aspect-[4/5] object-cover hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
                  <div className="absolute bottom-10 left-10 text-white">
                    <h3 className="text-3xl font-black mb-2">Sustainable Impact</h3>
                    <p className="text-blue-100 font-medium max-w-xs">Our green corridors reduce carbon footprint by 40% compared to traditional routes.</p>
                  </div>
                </div>
              </div>

              <div>
                <span className="text-emerald-600 font-black uppercase tracking-[0.3em] text-xs mb-4 block">Smart Quoting</span>
                <h2 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter leading-tight mb-8">
                  Intelligence in <br /><span className="text-gradient">Every Calculation.</span>
                </h2>
                <p className="text-slate-500 text-lg mb-12 font-medium leading-relaxed">
                  Real-time market data fused with localized logistics intelligence provides you with the most accurate quotes instantly.
                </p>
                <Calculator />
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid with Professional Blue/Green Theme */}
        <section className="py-32 bg-slate-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-100/50 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-emerald-100/50 rounded-full blur-3xl -ml-32 -mb-32"></div>
          
          <div className="container mx-auto px-6 max-w-7xl relative z-10">
            <div className="text-center mb-24">
              <h2 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter">Artistic Execution.</h2>
              <p className="text-slate-500 font-medium text-lg mt-6 max-w-2xl mx-auto">
                We handle the complexity so you can focus on creativity and growth.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, idx) => (
                <div key={idx} className="bg-white p-12 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-50 hover:border-emerald-500/30 transition-all hover:-translate-y-4 group cursor-pointer">
                  <div className={`${service.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg group-hover:rotate-12 transition-transform`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-blue-600 transition-colors tracking-tight">{service.title}</h3>
                  <p className="text-slate-500 font-medium leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact/CTA Section with Professional Blue Theme */}
        <section className="py-32">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="bg-blue-700 rounded-[4rem] p-16 lg:p-24 flex flex-col md:flex-row items-center gap-16 relative overflow-hidden shadow-3xl shadow-blue-200">
               {/* Decorative Background Artistic Image Overlay */}
               <div className="absolute inset-0 opacity-20 mix-blend-overlay">
                  <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1974&auto=format&fit=crop" className="w-full h-full object-cover" />
               </div>
               
               <div className="relative z-10 flex-grow">
                 <h2 className="text-5xl lg:text-7xl font-black text-white leading-none tracking-tighter mb-8">Ready to <br />Jango?</h2>
                 <p className="text-blue-100 text-xl font-medium max-w-md">Experience logistics as an art form. Start your global journey with Jangoes today.</p>
               </div>

               <div className="relative z-10 flex flex-col gap-4 w-full md:w-auto">
                 <button className="px-12 py-6 bg-white text-blue-700 rounded-3xl font-black text-xl hover:bg-blue-50 transition-colors shadow-2xl uppercase tracking-widest whitespace-nowrap">Join the Network</button>
                 <button className="px-12 py-6 bg-blue-800 text-white rounded-3xl font-black text-xl border border-blue-600 hover:bg-blue-900 transition-colors uppercase tracking-widest whitespace-nowrap">Corporate Sales</button>
               </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white py-24 border-t border-slate-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-4 gap-16 mb-24">
            <div>
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-10 h-10 blue-green-gradient rounded-xl flex items-center justify-center text-white shadow-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <span className="text-2xl font-black tracking-tighter text-slate-900">JANGOES</span>
              </div>
              <p className="text-slate-500 font-medium leading-relaxed mb-8">
                Where professional logistics meets artistic vision. The premier partner for global expansion.
              </p>
            </div>
            {['Platforms', 'Solutions', 'Insights'].map(title => (
              <div key={title}>
                <h4 className="font-black text-slate-900 mb-8 uppercase tracking-[0.2em] text-[10px]">{title}</h4>
                <ul className="space-y-4">
                  {['Customs AI', 'Global Hubs', 'API Docs', 'Green Shipping'].map(item => (
                    <li key={item}><a href="#" className="text-slate-500 hover:text-blue-600 font-medium transition-colors text-sm">{item}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center text-slate-400 font-bold text-[10px] uppercase tracking-[0.3em]">
            <p>&copy; 2025 JANGOES GLOBAL. ALL SYSTEMS OPERATIONAL.</p>
            <div className="flex space-x-10 mt-6 md:mt-0">
              <a href="#" className="hover:text-emerald-600 transition-colors">Privacy</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Compliance</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Security</a>
            </div>
          </div>
        </div>
      </footer>

      <Chatbot />
    </div>
  );
};

export default App;
