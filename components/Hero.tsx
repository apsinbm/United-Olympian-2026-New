import React from 'react';
import { ChevronDown, Handshake } from 'lucide-react';
import HeroSlideshow from './HeroSlideshow';

const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen flex flex-col" id="mission">
      {/* Background Slideshow */}
      <HeroSlideshow />

      <div className="relative z-10 h-[calc(100vh-140px)] flex items-center justify-center text-center px-4">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <span className="inline-block py-1 px-3 rounded-full bg-gold/20 text-gold border border-gold/40 text-sm font-bold mb-6 tracking-widest uppercase">
            Official 2026 Campaign
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            Proven Leaders. <br/>
            <span className="text-gold">United Action.</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 mb-10 font-serif max-w-2xl mx-auto">
            Gold Medalists, Global Captains, and Tech Innovators serving the next generation.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => scrollTo('team')}
              className="w-full sm:w-auto px-8 py-4 bg-gold hover:bg-gold-hover text-navy-deep rounded-full font-bold text-lg shadow-[0_0_20px_rgba(251,191,36,0.4)] transition-all transform hover:-translate-y-1"
            >
              Meet the Slate
            </button>
            <button 
              onClick={() => scrollTo('action-plan')}
              className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white hover:bg-white/10 text-white rounded-full font-bold text-lg transition-all"
            >
              View 2026 Action Plan
            </button>
          </div>
        </div>
      </div>

      {/* Collaboration Banner */}
      <div className="relative z-20 bg-white/5 backdrop-blur-sm border-t border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center text-center gap-3 text-gray-300">
          <Handshake className="text-gold h-6 w-6" />
          <p className="font-medium text-sm md:text-base">
            <span className="text-white font-bold">Independent but Collaborative.</span> We are the real bridge to the IOC.
          </p>
        </div>
      </div>

      <div className="absolute bottom-4 left-0 right-0 z-10 flex justify-center animate-bounce">
        <ChevronDown className="text-white/50 w-8 h-8" />
      </div>
    </div>
  );
};

export default Hero;