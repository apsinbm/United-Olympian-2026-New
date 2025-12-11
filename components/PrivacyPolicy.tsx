import React from 'react';
import { X } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';

interface PrivacyPolicyProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();

  if (!isOpen) return null;

  const sections = ['collection', 'usage', 'thirdParty', 'retention', 'rights', 'contact'] as const;

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-navy-deep">{t('privacy.title')}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition"
            aria-label={t('privacy.close')}
          >
            <X size={24} />
          </button>
        </div>

        <div className="px-6 py-6 space-y-6 text-gray-700">
          <p className="text-sm text-gray-500">{t('privacy.lastUpdated')}</p>

          {sections.map((section) => (
            <section key={section}>
              <h3 className="font-bold text-navy-deep mb-2">{t(`privacy.sections.${section}.title`)}</h3>
              <p>{t(`privacy.sections.${section}.content`)}</p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
