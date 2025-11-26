import React, { useState, useRef, useEffect } from 'react';
import { CheckCircle2, ChevronDown, ExternalLink } from 'lucide-react';
import { ACHIEVEMENTS } from '../constants';

const AchievementsSection: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setExpandedIndex(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleExpanded = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white" id="achievements">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-crimson font-bold tracking-widest uppercase text-sm">14 Years of Successful Delivery</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-navy-deep mt-4">
            What We've <span className="text-gold">Already Built</span>
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Some candidates promise what is already being delivered. Here's our track record.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12" ref={dropdownRef}>
          {ACHIEVEMENTS.map((achievement, index) => (
            <div key={index} className="relative">
              <div
                onClick={() => achievement.links && achievement.links.length > 0 && toggleExpanded(index)}
                className={`flex items-start gap-4 p-6 bg-gray-50 rounded-xl border border-gray-100 hover:border-gold/50 hover:shadow-lg transition-all ${
                  achievement.links && achievement.links.length > 0 ? 'cursor-pointer' : ''
                } ${expandedIndex === index ? 'border-gold shadow-lg' : ''}`}
              >
                <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <div className="flex-grow">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-navy-deep text-lg">{achievement.title}</h3>
                    {achievement.links && achievement.links.length > 0 && (
                      <ChevronDown
                        className={`h-5 w-5 text-gray-400 transition-transform ${
                          expandedIndex === index ? 'rotate-180' : ''
                        }`}
                      />
                    )}
                  </div>
                  <p className="text-gray-600 mt-1">{achievement.description}</p>
                </div>
              </div>

              {expandedIndex === index && achievement.links && achievement.links.length > 0 && (
                <div className="absolute z-50 left-0 right-0 mt-2 bg-white rounded-xl border border-gray-200 shadow-xl max-h-80 overflow-y-auto">
                  <div className="p-3">
                    <p className="text-xs text-gray-500 uppercase font-bold mb-2 px-2">Related Resources</p>
                    {achievement.links.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors group"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                        <div className="flex-grow min-w-0">
                          <p className="font-medium text-navy-deep text-sm group-hover:text-gold transition-colors">
                            {link.label}
                          </p>
                          <p className="text-xs text-gray-500 line-clamp-2">{link.description}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-navy-deep to-navy-light rounded-2xl p-8 md:p-12 text-center">
          <p className="text-xl md:text-2xl text-white font-serif italic max-w-3xl mx-auto">
            "14 years ago, the WOA did very little. No grants, no scholarships, no NOA toolkits, no Development Officers. Our team built the resources your NOA relies on today."
          </p>
          <p className="text-gold font-bold text-xl md:text-2xl mt-4">
            Continue what works!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
