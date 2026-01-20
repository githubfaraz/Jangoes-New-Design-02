
import React, { useState, useRef, useEffect } from 'react';
import { getLogisticsAdvice } from '../services/geminiService.ts';
import { ChatMessage } from '../types.ts';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Welcome to Jangoes. I am Jango AI, your logistics curator. How may I assist your global vision today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const responseText = await getLogisticsAdvice(messages, input);
    
    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-10 right-10 z-[60]">
      {isOpen ? (
        <div className="w-[420px] bg-white rounded-[2.5rem] shadow-[0_48px_100px_-24px_rgba(30,64,175,0.2)] border border-slate-100 flex flex-col h-[650px] overflow-hidden transform transition-all animate-in fade-in zoom-in duration-500">
          <div className="blue-green-gradient p-8 flex items-center justify-between text-white shadow-lg">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h4 className="font-black text-lg tracking-tight">JANGO AI</h4>
                <div className="flex items-center text-[9px] font-black uppercase tracking-[0.2em] text-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-white mr-2 animate-pulse"></span>
                  Connected to Mainframe
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-2 rounded-xl transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div ref={scrollRef} className="flex-grow overflow-y-auto p-8 space-y-8 bg-slate-50/30">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-6 rounded-[2rem] text-sm leading-relaxed shadow-sm font-medium ${msg.role === 'user' ? 'bg-blue-600 text-white rounded-br-none' : 'bg-white text-slate-700 border border-slate-100 rounded-bl-none'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex space-x-2">
                  <div className="w-2 h-2 bg-blue-200 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-emerald-300 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-8 bg-white border-t border-slate-50">
            <div className="flex items-center space-x-3 bg-slate-50 p-2 rounded-2xl border border-slate-100">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask Jango AI anything..."
                className="flex-grow bg-transparent p-4 text-sm focus:outline-none font-bold text-slate-700 placeholder-slate-300"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="btn-primary text-white p-4 rounded-xl shadow-xl shadow-blue-200/50 disabled:opacity-50"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="w-20 h-20 blue-green-gradient rounded-[2rem] flex items-center justify-center text-white shadow-[0_25px_50px_-12px_rgba(30,64,175,0.4)] hover:scale-110 active:scale-95 transition-all group overflow-hidden relative"
        >
          <div className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
          <svg className="w-8 h-8 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Chatbot;
