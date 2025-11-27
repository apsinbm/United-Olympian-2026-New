import React, { useState } from 'react';
import { Medal, Menu, X, Globe } from 'lucide-react';
import { LANGUAGES } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('EN');

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-navy-deep text-white shadow-lg border-b border-navy-light/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <div className="bg-gold p-2 rounded-full mr-3 text-navy-deep">
              <Medal size={24} strokeWidth={2.5} />
            </div>
            <span className="font-sans font-extrabold text-xl tracking-wider">OLYMPIANS UNITED</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollTo('team')} className="hover:text-gold transition-colors font-medium">The Team</button>
            <button onClick={() => scrollTo('achievements')} className="hover:text-gold transition-colors font-medium">Our Accomplishments</button>
            <button onClick={() => scrollTo('action-plan')} className="hover:text-gold transition-colors font-medium">2026 Action Plan</button>
            
            {/* Language Switcher */}
            <div className="relative">
              <button 
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center space-x-1 text-sm bg-navy-light px-3 py-1 rounded hover:bg-navy-light/80 transition"
              >
                <Globe size={14} />
                <span>{currentLang}</span>
              </button>
              {langOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg py-1 text-navy-deep ring-1 ring-black ring-opacity-5">
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => { setCurrentLang(lang.code); setLangOpen(false); }}
                      className="block px-4 py-2 text-sm w-full text-left hover:bg-gray-100"
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button onClick={() => scrollTo('contact')} className="bg-gold hover:bg-gold-hover text-navy-deep px-5 py-2 rounded-md font-bold transition-all transform hover:scale-105 shadow-md">
              Join the Movement
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-navy-deep border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
            <button onClick={() => scrollTo('team')} className="block px-3 py-2 text-base font-medium hover:text-gold">The Team</button>
            <button onClick={() => scrollTo('achievements')} className="block px-3 py-2 text-base font-medium hover:text-gold">Our Accomplishments</button>
            <button onClick={() => scrollTo('action-plan')} className="block px-3 py-2 text-base font-medium hover:text-gold">2026 Action Plan</button>
            <div className="flex space-x-2 py-2">
              {LANGUAGES.slice(0, 3).map(l => (
                <span key={l.code} className="text-xs text-gray-400 border border-gray-600 px-2 py-1 rounded cursor-pointer" onClick={() => { setCurrentLang(l.code); setIsOpen(false);}}>
                  {l.code}
                </span>
              ))}
            </div>
            <button onClick={() => scrollTo('contact')} className="w-full mt-4 bg-gold text-navy-deep py-3 rounded-md font-bold">
              Join the Movement
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;