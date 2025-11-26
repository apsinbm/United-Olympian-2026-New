import React from 'react';
import { Vote } from 'lucide-react';

interface VoteDisciplineBannerProps {
  variant?: 'top' | 'bottom';
}

const VoteDisciplineBanner: React.FC<VoteDisciplineBannerProps> = ({ variant = 'top' }) => {
  const isTop = variant === 'top';

  return (
    <div className={`bg-gradient-to-r from-bermuda to-bermuda-dark text-white py-3 px-4 ${isTop ? '' : 'mt-0'}`}>
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center text-center gap-2 sm:gap-4">
        <Vote className="h-5 w-5 flex-shrink-0" />
        <p className="text-sm sm:text-base font-medium">
          <span className="font-bold">The Complete Package:</span>{' '}
          <span className="text-white/90">Pernilla (President) + Lumi (Secretary General) + Thomas (Treasurer)</span>
        </p>
      </div>
    </div>
  );
};

export default VoteDisciplineBanner;
