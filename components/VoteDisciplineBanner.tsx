import React from 'react';
import { Vote } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';

interface VoteDisciplineBannerProps {
  variant?: 'top' | 'bottom';
}

const VoteDisciplineBanner: React.FC<VoteDisciplineBannerProps> = ({ variant = 'top' }) => {
  const isTop = variant === 'top';
  const { t } = useTranslation();

  return (
    <div className={`hidden md:block text-white py-3 px-4 ${isTop ? '' : 'mt-0'}`} style={{ backgroundColor: '#1A365D' }}>
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center text-center gap-2 sm:gap-4">
        <Vote className="h-5 w-5 flex-shrink-0" />
        <p className="text-sm sm:text-base font-medium">
          <span className="font-bold">{t('voteBanner.label')}</span>{' '}
          <span className="text-white/90">{t('voteBanner.candidates')}</span>
        </p>
      </div>
    </div>
  );
};

export default VoteDisciplineBanner;
