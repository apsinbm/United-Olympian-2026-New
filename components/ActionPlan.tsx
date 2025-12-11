import React, { useState } from 'react';
import { ACTION_PLAN } from '../constants';
import { ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';

const MOBILE_INITIAL_COUNT = 3;

const ActionPlan: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [showAllMobile, setShowAllMobile] = useState(false);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="action-plan" className="bg-navy-deep py-24 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left Column: Intro */}
          <div className="lg:w-1/3">
            <span className="text-gold font-bold tracking-widest uppercase mb-2 block">The Manifesto</span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              Our 2026 <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-200">Action Plan</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 font-serif">
              We don't just have slogans. We have a concrete, funded, and actionable roadmap to modernize the WOA and empower National Olympians Associations.
            </p>
            <div className="p-6 bg-navy-light rounded-xl border border-white/10 shadow-lg">
              <h3 className="font-bold text-xl mb-2 text-white">Why this matters</h3>
              <p className="text-white/90 text-sm">
                The WOA needs to evolve from a ceremonial body to a functional support network. Our plan focuses on financial decentralization and tangible tools for life after sport.
              </p>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:w-2/3 space-y-4">
            {ACTION_PLAN.map((item, index) => {
              const isOpen = openIndex === index;
              const hiddenOnMobile = !showAllMobile && index >= MOBILE_INITIAL_COUNT;
              return (
                <div
                  key={item.id}
                  className={`rounded-lg transition-all duration-300 overflow-hidden ${isOpen ? 'bg-white text-navy-deep' : 'bg-navy-light hover:bg-navy-light/80 text-white'} ${hiddenOnMobile ? 'hidden md:block' : ''}`}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full px-6 py-5 flex items-center justify-between focus:outline-none"
                  >
                    <div className="flex items-center gap-4 text-left">
                      <span className={`flex items-center justify-center w-8 h-8 rounded-full font-bold text-sm ${isOpen ? 'bg-navy-deep text-gold' : 'bg-navy-deep/50 text-gray-400'}`}>
                        {index + 1}
                      </span>
                      <h3 className={`font-bold text-lg md:text-xl ${isOpen ? 'text-navy-deep' : 'text-gray-100'}`}>
                        {item.title}
                      </h3>
                    </div>
                    {isOpen ? <ChevronUp className="shrink-0 ml-4 text-crimson" /> : <ChevronDown className="shrink-0 ml-4 text-gray-400" />}
                  </button>

                  <div
                    className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <div className="px-6 pb-6 pl-[4.5rem] pr-8">
                       <p className="text-gray-600 leading-relaxed text-lg border-l-2 border-gold pl-4">
                         {item.description}
                       </p>
                       <div className="mt-4 flex items-center text-sm font-bold text-crimson uppercase tracking-wide">
                          <CheckCircle2 size={16} className="mr-2" />
                          Commitment
                       </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* View All button - mobile only */}
            {!showAllMobile && (
              <div className="md:hidden text-center pt-4">
                <button
                  onClick={() => setShowAllMobile(true)}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-navy-deep font-bold rounded-full hover:bg-yellow-400 transition-colors"
                >
                  View All {ACTION_PLAN.length} Commitments
                  <ChevronDown className="h-5 w-5" />
                </button>
              </div>
            )}

            {showAllMobile && (
              <div className="md:hidden text-center pt-4">
                <button
                  onClick={() => setShowAllMobile(false)}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-navy-light text-white font-bold rounded-full hover:bg-navy-light/80 transition-colors"
                >
                  Show Less
                  <ChevronUp className="h-5 w-5" />
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ActionPlan;