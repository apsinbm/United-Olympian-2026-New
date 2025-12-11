import React from 'react';
import { Handshake } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';

const CollaborationBanner: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-navy-deep py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center text-center gap-3 text-gray-300">
        <Handshake className="text-gold h-6 w-6" />
        <p className="font-medium text-sm md:text-base">
          <span className="text-white font-bold">{t('collaboration.highlight')}</span> {t('collaboration.subtitle')}
        </p>
      </div>
    </div>
  );
};

export default CollaborationBanner;
