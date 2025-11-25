import React from 'react';
import { Quote } from 'lucide-react';
import { JOEL_ENDORSEMENT } from '../constants';

const EndorsementBanner: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-gold/10 to-gold/5 border-y border-gold/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Quote className="h-12 w-12 text-gold mx-auto mb-6 opacity-50" />

          <blockquote className="text-xl md:text-2xl text-navy-deep font-serif italic leading-relaxed">
            "{JOEL_ENDORSEMENT.quote}"
          </blockquote>

          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-gold/50" />
            <div className="text-center">
              <p className="font-bold text-navy-deep text-lg">{JOEL_ENDORSEMENT.author}</p>
              <p className="text-gray-600 text-sm">{JOEL_ENDORSEMENT.title}</p>
            </div>
            <div className="h-px w-12 bg-gold/50" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EndorsementBanner;
