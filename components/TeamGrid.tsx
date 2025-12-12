
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { CANDIDATES } from '../constants';
import { Candidate, OlympicYear } from '../types';
import { X, Award, Briefcase, Trophy, Globe, PlayCircle, GraduationCap, Linkedin, MapPin, Twitter, Facebook, Instagram, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation, useLanguage } from '../context/LanguageContext';

// Type for translated candidate content
interface TranslatedCandidateContent {
  name: string;
  role: string;
  sport: string;
  country: string;
  location: string;
  keyAchievement: string;
  philosophy?: string;
  business?: string;
  trackRecord?: string;
  achievements: string[];
  governance: string[];
  education?: string[];
  manifesto?: string;
  bioFull: string;
}

// Helper function to parse markdown-style links [text](url) into React elements
const parseMarkdownLinks = (text: string): React.ReactNode[] => {
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match;

  while ((match = linkRegex.exec(text)) !== null) {
    // Add text before the link
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    // Add the link
    parts.push(
      <a
        key={match.index}
        href={match[2]}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gold underline hover:text-gold/80 transition-colors"
      >
        {match[1]}
      </a>
    );
    lastIndex = match.index + match[0].length;
  }

  // Add remaining text after last link
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length > 0 ? parts : [text];
};

// Medal icon component
const MedalIcon: React.FC<{ type: 'gold' | 'silver' | 'bronze' }> = ({ type }) => {
  const colors = {
    gold: { fill: '#FFD700', stroke: '#B8860B', ribbon: '#DC143C' },
    silver: { fill: '#C0C0C0', stroke: '#808080', ribbon: '#1E90FF' },
    bronze: { fill: '#CD7F32', stroke: '#8B4513', ribbon: '#228B22' }
  };
  const c = colors[type];
  return (
    <svg width="16" height="20" viewBox="0 0 16 20" className="inline-block -mt-1">
      {/* Ribbon */}
      <path d="M6 0 L4 8 L8 6 L12 8 L10 0 Z" fill={c.ribbon} />
      {/* Medal circle */}
      <circle cx="8" cy="13" r="6" fill={c.fill} stroke={c.stroke} strokeWidth="1" />
      {/* Star on medal */}
      <path d="M8 9 L9 11.5 L11.5 11.5 L9.5 13 L10.5 15.5 L8 14 L5.5 15.5 L6.5 13 L4.5 11.5 L7 11.5 Z" fill={c.stroke} />
    </svg>
  );
};

// Olympic years display component
const OlympicYearsDisplay: React.FC<{ years?: OlympicYear[] }> = ({ years }) => {
  if (!years || years.length === 0) return null;
  return (
    <span className="flex flex-wrap items-center justify-center gap-2">
      {years.map((oy, idx) => (
        <span key={oy.year} className="inline-flex items-center gap-0.5">
          <span className="font-semibold">{oy.year}</span>
          {oy.medal && <MedalIcon type={oy.medal} />}
          {idx < years.length - 1 && <span className="ml-1">,</span>}
        </span>
      ))}
    </span>
  );
};

// Gallery pairs: sport photos paired with diplomacy photos
// Custom order: 1-16, then 18, then 17
const GALLERY_ORDER = [...Array.from({ length: 16 }, (_, i) => i + 1), 18, 17];
const GALLERY_PAIRS = GALLERY_ORDER.map((num) => ({
  num,
  sport: `/Pernilla/${num}.jpg`,
  diplomacy: `/Pernilla/Pernilla Diplomacy/${num}.jpeg`
}));

// Additional photos from More photos folder
const MORE_PHOTOS = [
  '/Pernilla/More photos/0a.jpg',
  '/Pernilla/More photos/1a.JPG',
  '/Pernilla/More photos/2a.jpg',
  '/Pernilla/More photos/3a.jpg',
  '/Pernilla/More photos/4a.jpg',
  '/Pernilla/More photos/5a.jpg',
  '/Pernilla/More photos/6a.jpg',
  '/Pernilla/More photos/7a.jpg',
  '/Pernilla/More photos/8a.jpg',
  '/Pernilla/More photos/9a.jpg',
];

// Lumi gallery photos (mixed order for variety)
const LUMI_GALLERY_PHOTOS = [
  '/Lumi/WhatsApp Image 2025-12-09 at 19.06.29.jpeg',      // Nigeria #15 Olympics shooting
  '/Lumi/WhatsApp Image 2025-12-09 at 19.06.40.jpeg',      // Suit red tie on stairs
  '/Lumi/WhatsApp Image 2025-12-09 at 19.06.52.jpeg',      // Seattle Sonics green jersey
  '/Lumi/WhatsApp Image 2025-12-09 at 19.06.47.jpeg',      // With child in grey shirt
  '/Lumi/WhatsApp Image 2025-12-09 at 19.31.12 (1).jpeg',  // Group ceremony photo
  '/Lumi/WhatsApp Image 2025-12-09 at 19.06.49.jpeg',      // White traditional outfit stairs
  '/Lumi/WhatsApp Image 2025-12-09 at 19.06.52 (1).jpeg',  // Sonics #00 shooting
  '/Lumi/WhatsApp Image 2025-12-09 at 19.31.18.jpeg',      // Two men OLY sashes
  '/Lumi/WhatsApp Image 2025-12-09 at 19.07.56.jpeg',      // Nigeria #15 biting medal
  '/Lumi/WhatsApp Image 2025-12-09 at 19.06.43 (1).jpeg',  // White Gucci tracksuit
  '/Lumi/WhatsApp Image 2025-12-09 at 19.31.19.jpeg',      // Group seated OLY members
  '/Lumi/WhatsApp Image 2025-12-09 at 19.06.51.jpeg',      // Flowers ceremony suit
  '/Lumi/WhatsApp Image 2025-12-09 at 19.06.48.jpeg',      // With toddler basketball
  '/Lumi/WhatsApp Image 2025-12-09 at 19.31.20.jpeg',      // Three men conversation
  '/Lumi/WhatsApp Image 2025-12-09 at 19.06.49 (1).jpeg',  // Black traditional with sunglasses
  '/Lumi/WhatsApp Image 2025-12-09 at 19.06.50.jpeg',      // Coaching youth orange jerseys
  '/Lumi/WhatsApp Image 2025-12-09 at 21.34.40.jpeg',      // Youth group photo outdoor
  '/Lumi/WhatsApp Image 2025-12-09 at 19.07.57.jpeg',      // Full suit on stairs
  '/Lumi/WhatsApp Image 2025-12-09 at 19.06.41.jpeg',
  '/Lumi/WhatsApp Image 2025-12-09 at 19.31.14.jpeg',      // Award ceremony group
  '/Lumi/WhatsApp Image 2025-12-09 at 19.31.22.jpeg',
  '/Lumi/WhatsApp Image 2025-12-09 at 19.06.42.jpeg',
  '/Lumi/WhatsApp Image 2025-12-09 at 19.31.24.jpeg',
  '/Lumi/WhatsApp Image 2025-12-09 at 19.13.42.jpeg',
  '/Lumi/WhatsApp Image 2025-12-09 at 19.13.50.jpeg',
  '/Lumi/WhatsApp Image 2025-12-09 at 19.31.26.jpeg',
  '/Lumi/WhatsApp Image 2025-12-09 at 19.14.07.jpeg',
  '/Lumi/WhatsApp Image 2025-12-09 at 21.34.39.jpeg',      // Night memorial photo
  '/Lumi/WhatsApp Image 2025-12-09 at 19.15.03.jpeg',
  '/Lumi/WhatsApp Image 2025-12-09 at 19.06.43.jpeg',
  '/Lumi/WhatsApp Image 2025-12-09 at 19.15.18.jpeg',
  '/Lumi/WhatsApp Image 2025-12-09 at 19.31.12.jpeg',
];

// Thomas gallery photos
const THOMAS_GALLERY_PHOTOS = [
  '/Thomas/WOA Election Photos/IMG_0155.jpeg',
  '/Thomas/WOA Election Photos/IMG_9604.jpeg',
  '/Thomas/WOA Election Photos/IMG_0516.jpeg',
  '/Thomas/WOA Election Photos/IMG_1172.jpeg',
  '/Thomas/WOA Election Photos/IMG_0834.jpeg',
  '/Thomas/WOA Election Photos/IMG_0847.jpeg',
  '/Thomas/WOA Election Photos/IMG_0850.jpeg',
  '/Thomas/WOA Election Photos/IMG_0950.jpeg',
  '/Thomas/WOA Election Photos/IMG_0992.jpeg',
  '/Thomas/WOA Election Photos/IMG_1068.jpeg',
  '/Thomas/WOA Election Photos/IMG_1089.jpeg',
  '/Thomas/WOA Election Photos/IMG_1101.jpeg',
  '/Thomas/WOA Election Photos/IMG_1171.jpeg',
  '/Thomas/WOA Election Photos/IMG_0566.JPEG',
  '/Thomas/WOA Election Photos/IMG_1174.jpeg',
  '/Thomas/WOA Election Photos/IMG_1194.jpeg',
  '/Thomas/WOA Election Photos/IMG_1207.jpeg',
  '/Thomas/WOA Election Photos/IMG_1247.jpeg',
  '/Thomas/WOA Election Photos/IMG_1298.jpeg',
  '/Thomas/WOA Election Photos/IMG_1389.jpeg',
  '/Thomas/WOA Election Photos/IMG_1399.jpeg',
  '/Thomas/WOA Election Photos/IMG_1406.jpeg',
  '/Thomas/WOA Election Photos/IMG_1907.jpeg',
  '/Thomas/WOA Election Photos/IMG_1953.jpeg',
  '/Thomas/WOA Election Photos/IMG_1954.jpeg',
  '/Thomas/WOA Election Photos/IMG_2148.jpeg',
  '/Thomas/WOA Election Photos/IMG_2175.JPG',
  '/Thomas/WOA Election Photos/IMG_2253.jpeg',
  '/Thomas/WOA Election Photos/IMG_2259.jpeg',
  '/Thomas/WOA Election Photos/IMG_2260.jpeg',
  '/Thomas/WOA Election Photos/IMG_2419.jpeg',
  '/Thomas/WOA Election Photos/IMG_2436.jpeg',
  '/Thomas/WOA Election Photos/IMG_2829.jpeg',
  '/Thomas/WOA Election Photos/IMG_2836.jpeg',
  '/Thomas/WOA Election Photos/IMG_2874.jpeg',
  '/Thomas/WOA Election Photos/IMG_2947.jpeg',
  '/Thomas/WOA Election Photos/IMG_3143.JPEG',
  '/Thomas/WOA Election Photos/IMG_3177.jpeg',
  '/Thomas/WOA Election Photos/IMG_3226.jpeg',
  '/Thomas/WOA Election Photos/IMG_3293.jpeg',
  '/Thomas/WOA Election Photos/IMG_3351.jpeg',
  '/Thomas/WOA Election Photos/IMG_3354.jpeg',
  '/Thomas/WOA Election Photos/IMG_3375.jpeg',
  '/Thomas/WOA Election Photos/IMG_3395.jpeg',
  '/Thomas/WOA Election Photos/IMG_3460.jpeg',
  '/Thomas/WOA Election Photos/IMG_3467.jpeg',
  '/Thomas/WOA Election Photos/IMG_3488.jpeg',
  '/Thomas/WOA Election Photos/IMG_3490.jpeg',
  '/Thomas/WOA Election Photos/IMG_3614.jpeg',
  '/Thomas/WOA Election Photos/IMG_3653.jpeg',
  '/Thomas/WOA Election Photos/IMG_3686.jpeg',
  '/Thomas/WOA Election Photos/IMG_3690.jpeg',
  '/Thomas/WOA Election Photos/IMG_3723.jpeg',
  '/Thomas/WOA Election Photos/IMG_3734.jpeg',
  '/Thomas/WOA Election Photos/IMG_3754.jpeg',
  '/Thomas/WOA Election Photos/IMG_3898.jpeg',
  '/Thomas/WOA Election Photos/IMG_3910.jpeg',
  '/Thomas/WOA Election Photos/IMG_3995.jpeg',
  '/Thomas/WOA Election Photos/IMG_4023.jpeg',
  '/Thomas/WOA Election Photos/IMG_4133.jpeg',
  '/Thomas/WOA Election Photos/IMG_4175.jpeg',
  '/Thomas/WOA Election Photos/IMG_4275.jpeg',
  '/Thomas/WOA Election Photos/IMG_4290.JPG',
  '/Thomas/WOA Election Photos/IMG_4294.JPG',
  '/Thomas/WOA Election Photos/IMG_4479.jpeg',
  '/Thomas/WOA Election Photos/IMG_4484.jpeg',
  '/Thomas/WOA Election Photos/IMG_4615.jpeg',
  '/Thomas/WOA Election Photos/IMG_4927.jpeg',
  '/Thomas/WOA Election Photos/IMG_5212.jpeg',
  '/Thomas/WOA Election Photos/IMG_5484.jpeg',
  '/Thomas/WOA Election Photos/IMG_5488.jpeg',
  '/Thomas/WOA Election Photos/IMG_5509.JPEG',
  '/Thomas/WOA Election Photos/IMG_5691.jpeg',
  '/Thomas/WOA Election Photos/IMG_5700.jpeg',
  '/Thomas/WOA Election Photos/IMG_5807.jpeg',
  '/Thomas/WOA Election Photos/IMG_5826.jpeg',
  '/Thomas/WOA Election Photos/IMG_5870.jpeg',
  '/Thomas/WOA Election Photos/IMG_6071.jpeg',
  '/Thomas/WOA Election Photos/IMG_6374.jpeg',
  '/Thomas/WOA Election Photos/IMG_6761.jpeg',
  '/Thomas/WOA Election Photos/IMG_9442.jpeg',
  '/Thomas/WOA Election Photos/IMG_0211.jpeg',
  '/Thomas/WOA Election Photos/IMG_9612.jpeg',
  '/Thomas/WOA Election Photos/IMG_9622.jpeg',
  '/Thomas/WOA Election Photos/IMG_9627.jpeg',
  '/Thomas/WOA Election Photos/IMG_9636.jpeg',
  '/Thomas/WOA Election Photos/IMG_9643.jpeg',
  '/Thomas/WOA Election Photos/IMG_9645.jpeg',
  '/Thomas/WOA Election Photos/IMG_9662.jpeg',
  '/Thomas/WOA Election Photos/IMG_9666.jpeg',
  '/Thomas/WOA Election Photos/IMG_9672.jpeg',
  '/Thomas/WOA Election Photos/IMG_9685.jpeg',
  '/Thomas/WOA Election Photos/IMG_9727.jpeg',
  '/Thomas/WOA Election Photos/IMG_9753.jpeg',
  '/Thomas/WOA Election Photos/44e1be3a-033d-4232-a905-64b7a548ba81.JPEG',
  '/Thomas/WOA Election Photos/4776813a-1ba5-4ad8-88c6-784f8b7e32cb.jpg',
  '/Thomas/WOA Election Photos/DSC06743.JPEG',
];

// Flat list of all Pernilla images for lightbox navigation (sport, diplomacy, sport, diplomacy..., then more photos)
const PERNILLA_GALLERY_IMAGES = [
  ...GALLERY_PAIRS.flatMap(({ sport, diplomacy }) => [sport, diplomacy]),
  ...MORE_PHOTOS
];

// Combined gallery for lightbox navigation
const ALL_GALLERY_IMAGES = [
  ...PERNILLA_GALLERY_IMAGES,
  ...LUMI_GALLERY_PHOTOS,
  ...THOMAS_GALLERY_PHOTOS
];

const TeamGrid: React.FC = () => {
  const { t, tRaw } = useTranslation();
  const { language } = useLanguage();
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  // Memoized translated content for modal - computed when selectedCandidate or language changes
  const translatedModal = useMemo(() => {
    if (!selectedCandidate) return null;
    const candidateKey = selectedCandidate.id as 'pernilla' | 'lumi' | 'thomas';
    return {
      name: t(`candidates.${candidateKey}.name`) || selectedCandidate.name,
      role: t(`candidates.${candidateKey}.role`) || selectedCandidate.role,
      sport: t(`candidates.${candidateKey}.sport`) || selectedCandidate.sport,
      country: t(`candidates.${candidateKey}.country`) || selectedCandidate.country,
      location: t(`candidates.${candidateKey}.location`) || selectedCandidate.location || '',
      keyAchievement: t(`candidates.${candidateKey}.keyAchievement`) || selectedCandidate.keyAchievement,
      philosophy: t(`candidates.${candidateKey}.philosophy`) || selectedCandidate.philosophy,
      business: t(`candidates.${candidateKey}.business`) || selectedCandidate.business,
      trackRecord: t(`candidates.${candidateKey}.trackRecord`) || selectedCandidate.trackRecord,
      achievements: (() => {
        const translated = tRaw(`candidates.${candidateKey}.achievements`);
        if (Array.isArray(translated)) return translated as string[];
        return selectedCandidate.achievements;
      })(),
      governance: (() => {
        const translated = tRaw(`candidates.${candidateKey}.governance`);
        if (Array.isArray(translated)) return translated as string[];
        return selectedCandidate.governance;
      })(),
      education: (() => {
        const translated = tRaw(`candidates.${candidateKey}.education`);
        if (Array.isArray(translated)) return translated as string[];
        return selectedCandidate.education;
      })(),
      manifesto: t(`candidates.${candidateKey}.manifesto`) || selectedCandidate.manifesto,
      bioFull: t(`candidates.${candidateKey}.bioFull`) || selectedCandidate.bioFull,
    };
  }, [selectedCandidate, t, tRaw]);

  // Helper function to get translated candidate content
  const getTranslatedContent = useCallback((candidate: Candidate): TranslatedCandidateContent => {
    const candidateKey = candidate.id as 'pernilla' | 'lumi' | 'thomas';

    return {
      name: t(`candidates.${candidateKey}.name`) || candidate.name,
      role: t(`candidates.${candidateKey}.role`) || candidate.role,
      sport: t(`candidates.${candidateKey}.sport`) || candidate.sport,
      country: t(`candidates.${candidateKey}.country`) || candidate.country,
      location: t(`candidates.${candidateKey}.location`) || candidate.location || '',
      keyAchievement: t(`candidates.${candidateKey}.keyAchievement`) || candidate.keyAchievement,
      philosophy: t(`candidates.${candidateKey}.philosophy`) || candidate.philosophy,
      business: t(`candidates.${candidateKey}.business`) || candidate.business,
      trackRecord: t(`candidates.${candidateKey}.trackRecord`) || candidate.trackRecord,
      achievements: (() => {
        const translated = tRaw(`candidates.${candidateKey}.achievements`);
        if (Array.isArray(translated)) return translated as string[];
        return candidate.achievements;
      })(),
      governance: (() => {
        const translated = tRaw(`candidates.${candidateKey}.governance`);
        if (Array.isArray(translated)) return translated as string[];
        return candidate.governance;
      })(),
      education: (() => {
        const translated = tRaw(`candidates.${candidateKey}.education`);
        if (Array.isArray(translated)) return translated as string[];
        return candidate.education;
      })(),
      manifesto: t(`candidates.${candidateKey}.manifesto`) || candidate.manifesto,
      bioFull: t(`candidates.${candidateKey}.bioFull`) || candidate.bioFull,
    };
  }, [t, tRaw]);

  const navigateLightbox = useCallback((direction: 'prev' | 'next') => {
    if (!lightboxImage) return;
    const currentIndex = ALL_GALLERY_IMAGES.indexOf(lightboxImage);
    if (currentIndex === -1) return;

    let newIndex;
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % ALL_GALLERY_IMAGES.length;
    } else {
      newIndex = (currentIndex - 1 + ALL_GALLERY_IMAGES.length) % ALL_GALLERY_IMAGES.length;
    }
    setLightboxImage(ALL_GALLERY_IMAGES[newIndex]);
  }, [lightboxImage]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxImage) return;
      if (e.key === 'ArrowRight') {
        navigateLightbox('next');
      } else if (e.key === 'ArrowLeft') {
        navigateLightbox('prev');
      } else if (e.key === 'Escape') {
        setLightboxImage(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxImage, navigateLightbox]);

  return (
    <section id="team" className="py-24 bg-light-grey">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-crimson font-bold tracking-widest uppercase text-sm">{t('team.sectionLabel')}</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-navy-deep mt-4 mb-4">{t('team.sectionTitle')} <span className="text-gold">{t('team.sectionTitleHighlight')}</span></h2>
          <div className="h-1 w-24 bg-gold mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-serif">
            {t('team.sectionSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {CANDIDATES.map((candidate) => {
            const translated = getTranslatedContent(candidate);
            return (
            <div key={candidate.id} className={`group flex flex-col bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
              candidate.id === 'pernilla' ? 'order-1 md:order-2' :
              candidate.id === 'lumi' ? 'order-2 md:order-1' :
              'order-3'
            }`}>

              {/* Top: Business Photo */}
              <div className="h-64 md:h-72 w-full overflow-hidden bg-navy-deep relative">
                <img
                  src={candidate.imageAction}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://picsum.photos/800/600?random=${candidate.id}`;
                  }}
                  alt={`${translated.name} in action`}
                  className="h-full w-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                  style={{ objectPosition: candidate.id === 'thomas' ? '80% 40%' : candidate.id === 'lumi' ? 'center 10%' : 'center 30%' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-gold text-navy-deep text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  {translated.country}
                </div>
              </div>

              {/* Middle: Content */}
              <div className="flex-grow px-6 pt-4 pb-6 text-center order-2">
                <h3 className="text-2xl font-bold text-navy-deep leading-tight">{translated.name}</h3>
                <p className="text-crimson font-bold text-sm uppercase tracking-wide mt-1">{translated.role}</p>

                <div className="mt-4 text-sm text-gray-600 space-y-2 mb-6">
                  <div className="flex items-center justify-center gap-2">
                    {candidate.olympicYears ? (
                      <OlympicYearsDisplay years={candidate.olympicYears} />
                    ) : (
                      <>
                        <Trophy size={16} className="text-gold flex-shrink-0" />
                        <span>{translated.sport}</span>
                      </>
                    )}
                  </div>
                </div>

                <p className="text-gray-500 text-sm line-clamp-6 mb-6 font-serif italic">
                  "{translated.keyAchievement}"
                </p>

                {/* Button - visible on desktop only */}
                <button
                  onClick={() => setSelectedCandidate(candidate)}
                  className="hidden md:block w-full py-2 border-2 border-navy-deep text-navy-deep font-bold rounded hover:bg-navy-deep hover:text-white transition-colors mb-4"
                >
                  {t('team.viewFullProfile')}
                </button>
              </div>

              {/* Bottom: Sport Photo */}
              <div className="h-64 md:h-72 w-full overflow-hidden bg-gray-200 relative order-3">
                <img
                  src={candidate.imageHeadshot}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://picsum.photos/800/600?random=${candidate.id}2`;
                  }}
                  alt={`${translated.name} sport`}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: candidate.id === 'lumi' ? 'center 35%' : 'center' }}
                />
              </div>

              {/* Button - visible on mobile only, after sport photo */}
              <div className="md:hidden px-6 pb-6 order-4">
                <button
                  onClick={() => setSelectedCandidate(candidate)}
                  className="w-full py-2 border-2 border-navy-deep text-navy-deep font-bold rounded hover:bg-navy-deep hover:text-white transition-colors"
                >
                  {t('team.viewFullProfile')}
                </button>
              </div>
            </div>
          );
          })}
        </div>
      </div>

      {/* Modal */}
      {selectedCandidate && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
          <div 
            className="absolute inset-0 bg-navy-deep/90 backdrop-blur-sm"
            onClick={() => setSelectedCandidate(null)}
          ></div>
          <div className="relative bg-white rounded-2xl w-full max-w-[95vw] md:max-w-[90vw] max-h-[90vh] overflow-y-auto shadow-2xl animate-fade-in">
            <button 
              onClick={() => setSelectedCandidate(null)}
              className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition text-navy-deep z-10"
            >
              <X size={24} />
            </button>

            <div className="flex flex-col md:flex-row">
              {/* Modal Left: Image & Quick Stats */}
              <div className="md:w-1/3 bg-navy-light text-white p-8">
                <img
                  src={selectedCandidate.id === 'pernilla' ? '/Pernilla Headshot.jpg' : selectedCandidate.id === 'lumi' ? '/Lumi/WhatsApp Image 2025-12-09 at 19.07.56.jpeg' : selectedCandidate.imageHeadshot}
                  onError={(e) => { (e.target as HTMLImageElement).src = `https://picsum.photos/300/300?random=${selectedCandidate.id}2`; }}
                  className="w-32 h-32 rounded-full border-4 border-gold shadow-lg mb-6 mx-auto md:mx-0 object-cover"
                  style={{ objectPosition: selectedCandidate.id === 'lumi' ? '80% -10%' : 'center' }}
                  alt={translatedModal.name}
                />
                <h3 className="text-2xl font-bold mb-1">{translatedModal.name}</h3>
                <p className="text-gold font-medium mb-6">{translatedModal.role}</p>
                
                <div className="space-y-4 text-sm text-gray-300">
                  <div className="flex items-start gap-3">
                    <Award className="text-gold shrink-0 mt-1" size={18} />
                    <div>
                      <span className="block text-white font-bold">{t('team.athleticHighlights')}</span>
                      <ul className="list-disc pl-4 mt-1 space-y-1">
                        {translatedModal.achievements.map((a, i) => (
                          <li key={i}>{a}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {translatedModal.business && (
                    <div className="flex items-start gap-3">
                      <Briefcase className="text-gold shrink-0 mt-1" size={18} />
                      <div>
                        <span className="block text-white font-bold">{t('team.business')}</span>
                        <p>{translatedModal.business}</p>
                      </div>
                    </div>
                  )}

                  <div className="flex items-start gap-3">
                    <Globe className="text-gold shrink-0 mt-1" size={18} />
                    <div>
                      <span className="block text-white font-bold">{t('team.country')}</span>
                      <p>{translatedModal.country}</p>
                    </div>
                  </div>

                  {translatedModal.location && (
                    <div className="flex items-start gap-3">
                      <MapPin className="text-gold shrink-0 mt-1" size={18} />
                      <div>
                        <span className="block text-white font-bold">{t('team.basedIn')}</span>
                        <p>{translatedModal.location}</p>
                      </div>
                    </div>
                  )}

                  {translatedModal.education && translatedModal.education.length > 0 && (
                    <div className="flex items-start gap-3">
                      <GraduationCap className="text-gold shrink-0 mt-1" size={18} />
                      <div>
                        <span className="block text-white font-bold">{t('team.education')}</span>
                        <ul className="list-disc pl-4 mt-1 space-y-1">
                          {translatedModal.education.map((e, i) => (
                            <li key={i}>{e}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {selectedCandidate.socialLinks && (
                    <div className="mt-6 space-y-2">
                      <span className="block text-white font-bold mb-2">{t('team.connect')}</span>
                      <div className="flex flex-wrap gap-2">
                        {selectedCandidate.socialLinks.linkedIn && (
                          <a
                            href={selectedCandidate.socialLinks.linkedIn}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-[#0A66C2] text-white rounded-lg hover:bg-[#004182] transition-colors"
                            title="LinkedIn"
                          >
                            <Linkedin size={18} />
                          </a>
                        )}
                        {selectedCandidate.socialLinks.twitter && (
                          <a
                            href={selectedCandidate.socialLinks.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
                            title="X (Twitter)"
                          >
                            <Twitter size={18} />
                          </a>
                        )}
                        {selectedCandidate.socialLinks.facebook && (
                          <a
                            href={selectedCandidate.socialLinks.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-[#1877F2] text-white rounded-lg hover:bg-[#0d5fc7] transition-colors"
                            title="Facebook"
                          >
                            <Facebook size={18} />
                          </a>
                        )}
                        {selectedCandidate.socialLinks.instagram && (
                          <a
                            href={selectedCandidate.socialLinks.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888] text-white rounded-lg hover:opacity-80 transition-opacity"
                            title="Instagram"
                          >
                            <Instagram size={18} />
                          </a>
                        )}
                        {selectedCandidate.socialLinks.website && (
                          <a
                            href={selectedCandidate.socialLinks.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-gold text-navy-deep rounded-lg hover:bg-gold-hover transition-colors"
                            title="Website"
                          >
                            <ExternalLink size={18} />
                          </a>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Photo Gallery - Pernilla only, hidden on mobile (shown at end of content area instead) */}
                  {selectedCandidate.id === 'pernilla' && (
                    <div className="mt-6 hidden md:block">
                      <span className="block text-white font-bold mb-3">{t('team.photoGallery')}</span>
                      <div className="space-y-2">
                        {GALLERY_PAIRS.map(({ num, sport, diplomacy }) => (
                          <div key={num} className="grid grid-cols-2 gap-2">
                            <div className="w-full h-28 lg:h-36 xl:h-40 rounded-lg overflow-hidden">
                              <img
                                src={sport}
                                alt={`Pernilla sport ${num}`}
                                loading="lazy"
                                className="w-full h-full object-cover hover:opacity-80 transition-opacity cursor-pointer"
                                style={
                                  num === 3 ? { objectPosition: 'center 15%' } :
                                  num === 17 ? { objectPosition: 'center 25%' } :
                                  num === 13 ? { transform: 'scale(1.5)' } :
                                  undefined
                                }
                                onClick={() => setLightboxImage(sport)}
                              />
                            </div>
                            <div className="w-full h-28 lg:h-36 xl:h-40 rounded-lg overflow-hidden">
                              <img
                                src={diplomacy}
                                alt={`Pernilla diplomacy ${num}`}
                                loading="lazy"
                                className="w-full h-full object-cover hover:opacity-80 transition-opacity cursor-pointer"
                                style={
                                  [3, 4, 8, 9, 13, 16].includes(num) ? { objectPosition: 'top' } :
                                  num === 18 ? { objectPosition: 'center 20%' } :
                                  undefined
                                }
                                onClick={() => setLightboxImage(diplomacy)}
                              />
                            </div>
                          </div>
                        ))}
                        {/* Additional photos */}
                        <div className="grid grid-cols-2 gap-2">
                          {MORE_PHOTOS.map((photo, idx) => (
                            <div key={`more-${idx}`} className="w-full h-28 lg:h-36 xl:h-40 rounded-lg overflow-hidden">
                              <img
                                src={photo}
                                alt={`Pernilla photo ${idx + 1}`}
                                loading="lazy"
                                className="w-full h-full object-cover hover:opacity-80 transition-opacity cursor-pointer"
                                style={
                                  [2, 3, 4, 5, 9].includes(idx) ? { objectPosition: 'center 10%' } : undefined
                                }
                                onClick={() => setLightboxImage(photo)}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Photo Gallery - Lumi only, hidden on mobile (shown at end of content area instead) */}
                  {selectedCandidate.id === 'lumi' && (
                    <div className="mt-6 hidden md:block">
                      <span className="block text-white font-bold mb-3">{t('team.photoGallery')}</span>
                      <div className="grid grid-cols-2 gap-2">
                        {LUMI_GALLERY_PHOTOS.map((photo, idx) => (
                          <div key={`lumi-${idx}`} className="w-full h-28 lg:h-36 xl:h-40 rounded-lg overflow-hidden">
                            <img
                              src={photo}
                              alt={`Lumi photo ${idx + 1}`}
                              loading="lazy"
                              className="w-full h-full object-cover hover:opacity-80 transition-opacity cursor-pointer"
                              style={{ objectPosition: photo.includes('19.06.52') ? 'center 20%' : 'top' }}
                              onClick={() => setLightboxImage(photo)}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Photo Gallery - Thomas only, hidden on mobile (shown at end of content area instead) */}
                  {selectedCandidate.id === 'thomas' && (
                    <div className="mt-6 hidden md:block">
                      <span className="block text-white font-bold mb-3">{t('team.photoGallery')}</span>
                      <div className="grid grid-cols-2 gap-2">
                        {THOMAS_GALLERY_PHOTOS.map((photo, idx) => {
                          // Custom positioning for Thomas photos
                          // Most rotated photos use 'center 15%' for headroom
                          // Properly cropped photos (40, 67, 82, 89) use 'center'
                          // Photos with too much ceiling (2, 69) use 'center 50%'
                          const properlyCroppedIndices = [1, 40, 67, 89]; // IMG_9604, IMG_3293, IMG_4615, IMG_9662 - replaced with cropped versions
                          const tooMuchHeadroomIndices = [2, 69]; // IMG_0516, IMG_5212
                          let objectPos = 'center 15%';
                          if (properlyCroppedIndices.includes(idx)) objectPos = 'center';
                          else if (tooMuchHeadroomIndices.includes(idx)) objectPos = 'center 50%';
                          return (
                            <div key={`thomas-${idx}`} className="w-full h-28 lg:h-36 xl:h-40 rounded-lg overflow-hidden">
                              <img
                                src={photo}
                                alt={`Thomas photo ${idx + 1}`}
                                loading="lazy"
                                className="w-full h-full object-cover hover:opacity-80 transition-opacity cursor-pointer"
                                style={{ objectPosition: objectPos }}
                                onClick={() => setLightboxImage(photo)}
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Modal Right: Bio */}
              <div className="md:w-2/3 p-8 md:p-12">
                <h4 className="text-3xl font-extrabold text-navy-deep mb-6 font-serif">{t('team.biography')}</h4>

                {/* Video Biography Section */}
                <div className="mb-8 group relative rounded-xl overflow-hidden shadow-lg bg-navy-deep">
                  {selectedCandidate.id === 'pernilla' ? (
                    <iframe
                      className="w-full aspect-video"
                      src="https://www.youtube.com/embed/E1ypHlcJQ6M"
                      title="Pernilla Wiberg - Video Bio"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  ) : (
                    <video
                      controls
                      className="w-full aspect-video object-cover"
                      poster={`https://picsum.photos/seed/${selectedCandidate.id}video/800/450`}
                    >
                      <source src={`/videos/${selectedCandidate.id}_bio.mp4`} type="video/mp4" />
                      <source src="https://assets.mixkit.co/videos/preview/mixkit-people-jogging-on-a-running-track-32777-large.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                  <div className="bg-navy-light px-4 py-2 text-white text-sm">
                    <span className="text-gold font-bold">Watch:</span> A personal message from {translatedModal.name.split(' ')[0]}.
                  </div>
                </div>

                {/* Vision Statement / Manifesto */}
                {translatedModal.manifesto && (
                  <div className="mb-8 bg-gradient-to-br from-navy-deep to-navy-light p-8 rounded-xl shadow-lg">
                    <h5 className="text-gold font-bold text-xl mb-4 flex items-center gap-2">
                      <span className="w-8 h-1 bg-gold rounded"></span>
                      {t('team.myVision')}
                    </h5>
                    <div className="text-white/90 space-y-4">
                      {translatedModal.manifesto.split('\n\n').map((paragraph, index) => (
                        <p key={index} className="leading-relaxed">{parseMarkdownLinks(paragraph)}</p>
                      ))}
                    </div>
                  </div>
                )}

                <div className="prose prose-lg text-gray-600">
                  {translatedModal.bioFull.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4">{paragraph}</p>
                  ))}

                  {translatedModal.trackRecord && selectedCandidate.id === 'thomas' && (
                    <div className="bg-gold/10 p-6 rounded-lg border-l-4 border-gold mb-6">
                      <h5 className="font-bold text-navy-deep mb-2 text-lg">{t('team.trackRecord')}</h5>
                      <p className="text-gray-700">{translatedModal.trackRecord}</p>
                    </div>
                  )}

                  {translatedModal.governance.length > 0 && (
                     <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gold mb-6">
                        <h5 className="font-bold text-navy-deep mb-2 text-lg">{t('team.governanceExperience')}</h5>
                        <ul className="space-y-2">
                           {translatedModal.governance.map((g, i) => (
                              <li key={i} className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-crimson rounded-full"></span>
                                {g}
                              </li>
                           ))}
                        </ul>
                     </div>
                  )}

                  {translatedModal.keyAchievement && (
                    <div className="mt-8">
                       <h5 className="font-bold text-navy-deep mb-2">{t('team.keyAchievement')}</h5>
                       <p className="text-navy-deep font-serif italic text-lg">"{translatedModal.keyAchievement}"</p>
                    </div>
                  )}

                  {/* YouTube Videos - Pernilla only */}
                  {selectedCandidate.id === 'pernilla' && (
                    <div className="mt-8">
                      <h5 className="font-bold text-navy-deep mb-4">{t('team.videos')}</h5>
                      <div className="space-y-4">
                        {/* Video 1 - embedding disabled by owner, show custom thumbnail with link */}
                        <a
                          href="https://www.youtube.com/watch?v=ARHMZ4OR5Fs"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block aspect-video rounded-lg overflow-hidden shadow-md"
                        >
                          <img
                            src="/Pernilla/Pernilla Lift.jpg"
                            alt="Pernilla Wiberg Video 1"
                            className="w-full h-full object-cover hover:opacity-90 transition-opacity"
                          />
                        </a>
                        <div className="aspect-video rounded-lg overflow-hidden shadow-md">
                          <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/4_xpxJqbpX8"
                            title="Pernilla Wiberg Video 2"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                        <div className="aspect-video rounded-lg overflow-hidden shadow-md">
                          <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/llhptd5RZsw?start=120"
                            title="Pernilla Wiberg Video 3"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                        <div className="aspect-video rounded-lg overflow-hidden shadow-md">
                          <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/TYJWxz5Bmgo"
                            title="Pernilla Wiberg Video 4"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                        <div className="aspect-video rounded-lg overflow-hidden shadow-md">
                          <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/JCOqo-i4kbo"
                            title="Pernilla Wiberg Video 5"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                        <div className="aspect-video rounded-lg overflow-hidden shadow-md">
                          <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/rXaIflEoyyo"
                            title="Pernilla Wiberg Video 6"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Videos - Thomas only */}
                  {selectedCandidate.id === 'thomas' && (
                    <div className="mt-8">
                      <h5 className="font-bold text-navy-deep mb-4">{t('team.videos')}</h5>
                      <div className="space-y-4">
                        {/* YouTube Videos */}
                        <div className="aspect-video rounded-lg overflow-hidden shadow-md">
                          <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/IXNAiMQkNGc"
                            title="Thomas Tang YouTube Video 1"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                        <div className="aspect-video rounded-lg overflow-hidden shadow-md">
                          <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/W1X_zPLEulA"
                            title="Thomas Tang YouTube Video 2"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                        <div className="aspect-video rounded-lg overflow-hidden shadow-md">
                          <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/JmFjJXkfHkw"
                            title="Thomas Tang YouTube Video 3"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                        <div className="aspect-video rounded-lg overflow-hidden shadow-md">
                          <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/nbOXHGimUD4"
                            title="Thomas Tang YouTube Video 4"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                        {/* Vimeo Video */}
                        <div className="aspect-video rounded-lg overflow-hidden shadow-md">
                          <iframe
                            className="w-full h-full"
                            src="https://player.vimeo.com/video/24643468"
                            title="Thomas Tang - Apantac"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            allow="autoplay; fullscreen; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                        {/* MP4 Videos */}
                        <div className="aspect-video rounded-lg overflow-hidden shadow-md">
                          <video controls preload="none" poster="/Thomas/WOA Election Photos/WOA Election Video/thumbnails/IMG_1936.jpg" className="w-full h-full object-cover">
                            <source src="/Thomas/WOA Election Photos/WOA Election Video/IMG_1936.mp4" type="video/mp4" />
                          </video>
                        </div>
                        <div className="aspect-video rounded-lg overflow-hidden shadow-md">
                          <video controls preload="none" poster="/Thomas/WOA Election Photos/WOA Election Video/thumbnails/IMG_2787.jpg" className="w-full h-full object-cover">
                            <source src="/Thomas/WOA Election Photos/WOA Election Video/IMG_2787.mp4" type="video/mp4" />
                          </video>
                        </div>
                        <div className="aspect-video rounded-lg overflow-hidden shadow-md">
                          <video controls preload="none" poster="/Thomas/WOA Election Photos/WOA Election Video/thumbnails/IMG_3723.jpg" className="w-full h-full object-cover">
                            <source src="/Thomas/WOA Election Photos/WOA Election Video/IMG_3723.mp4" type="video/mp4" />
                          </video>
                        </div>
                        <div className="aspect-video rounded-lg overflow-hidden shadow-md">
                          <video controls preload="none" poster="/Thomas/WOA Election Photos/WOA Election Video/thumbnails/IMG_4263.jpg" className="w-full h-full object-cover">
                            <source src="/Thomas/WOA Election Photos/WOA Election Video/IMG_4263.mp4" type="video/mp4" />
                          </video>
                        </div>
                        <div className="aspect-video rounded-lg overflow-hidden shadow-md">
                          <video controls preload="none" poster="/Thomas/WOA Election Photos/WOA Election Video/thumbnails/IMG_6220.jpg" className="w-full h-full object-cover">
                            <source src="/Thomas/WOA Election Photos/WOA Election Video/IMG_6220.mp4" type="video/mp4" />
                          </video>
                        </div>
                        <div className="aspect-video rounded-lg overflow-hidden shadow-md">
                          <video controls preload="none" poster="/Thomas/WOA Election Photos/WOA Election Video/thumbnails/IMG_8576.jpg" className="w-full h-full object-cover">
                            <source src="/Thomas/WOA Election Photos/WOA Election Video/IMG_8576.mp4" type="video/mp4" />
                          </video>
                        </div>
                        <div className="aspect-video rounded-lg overflow-hidden shadow-md">
                          <video controls preload="none" poster="/Thomas/WOA Election Photos/WOA Election Video/thumbnails/IMG_9556.jpg" className="w-full h-full object-cover">
                            <source src="/Thomas/WOA Election Photos/WOA Election Video/IMG_9556.mp4" type="video/mp4" />
                          </video>
                        </div>
                        <div className="aspect-video rounded-lg overflow-hidden shadow-md">
                          <video controls preload="none" poster="/Thomas/WOA Election Photos/WOA Election Video/thumbnails/IMG_9656.jpg" className="w-full h-full object-cover">
                            <source src="/Thomas/WOA Election Photos/WOA Election Video/IMG_9656.mp4" type="video/mp4" />
                          </video>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Videos - Lumi only */}
                  {selectedCandidate.id === 'lumi' && (
                    <div className="mt-8">
                      <h5 className="font-bold text-navy-deep mb-4">{t('team.videos')}</h5>
                      <div className="space-y-4">
                        {/* Instagram Video Link */}
                        <a
                          href="https://www.instagram.com/reel/DOWVJFqCDxr/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block aspect-video rounded-lg overflow-hidden shadow-md relative group"
                        >
                          <img
                            src="/Lumi/Lumi & Child.png"
                            alt="Olumide Oyedeji Video"
                            className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center">
                              <PlayCircle size={40} className="text-navy-deep" />
                            </div>
                          </div>
                        </a>
                        {/* MP4 Videos */}
                        <div className="aspect-video rounded-lg overflow-hidden shadow-md">
                          <video controls preload="none" poster="/Lumi/Videos/thumbnails/WhatsApp Video 2025-12-09 at 22.30.38.jpg" className="w-full h-full object-cover">
                            <source src="/Lumi/Videos/WhatsApp Video 2025-12-09 at 22.30.38.mp4" type="video/mp4" />
                          </video>
                        </div>
                        <div className="aspect-video rounded-lg overflow-hidden shadow-md">
                          <video controls preload="none" poster="/Lumi/Videos/thumbnails/WhatsApp Video 2025-12-09 at 19.44.32.jpg" className="w-full h-full object-cover">
                            <source src="/Lumi/Videos/WhatsApp Video 2025-12-09 at 19.44.32.mp4" type="video/mp4" />
                          </video>
                        </div>
                        <div className="aspect-video rounded-lg overflow-hidden shadow-md">
                          <video controls preload="none" poster="/Lumi/Videos/thumbnails/WhatsApp Video 2025-12-09 at 21.34.38.jpg" className="w-full h-full object-cover">
                            <source src="/Lumi/Videos/WhatsApp Video 2025-12-09 at 21.34.38.mp4" type="video/mp4" />
                          </video>
                        </div>
                        <div className="aspect-video rounded-lg overflow-hidden shadow-md">
                          <video controls preload="none" poster="/Lumi/Videos/thumbnails/WhatsApp Video 2025-12-09 at 21.34.38 (1).jpg" className="w-full h-full object-cover">
                            <source src="/Lumi/Videos/WhatsApp Video 2025-12-09 at 21.34.38 (1).mp4" type="video/mp4" />
                          </video>
                        </div>
                        <div className="aspect-video rounded-lg overflow-hidden shadow-md">
                          <video controls preload="none" poster="/Lumi/Videos/thumbnails/WhatsApp Video 2025-12-09 at 21.34.40.jpg" className="w-full h-full object-cover">
                            <source src="/Lumi/Videos/WhatsApp Video 2025-12-09 at 21.34.40.mp4" type="video/mp4" />
                          </video>
                        </div>
                        <div className="aspect-video rounded-lg overflow-hidden shadow-md">
                          <video controls preload="none" poster="/Lumi/Videos/thumbnails/WhatsApp Video 2025-12-09 at 21.39.58.jpg" className="w-full h-full object-cover">
                            <source src="/Lumi/Videos/WhatsApp Video 2025-12-09 at 21.39.58.mp4" type="video/mp4" />
                          </video>
                        </div>
                        <div className="aspect-video rounded-lg overflow-hidden shadow-md">
                          <video controls preload="none" poster="/Lumi/Videos/thumbnails/WhatsApp Video 2025-12-09 at 21.47.54.jpg" className="w-full h-full object-cover">
                            <source src="/Lumi/Videos/WhatsApp Video 2025-12-09 at 21.47.54.mp4" type="video/mp4" />
                          </video>
                        </div>
                        <div className="aspect-video rounded-lg overflow-hidden shadow-md">
                          <video controls preload="none" poster="/Lumi/Videos/thumbnails/WhatsApp Video 2025-12-09 at 21.47.55.jpg" className="w-full h-full object-cover">
                            <source src="/Lumi/Videos/WhatsApp Video 2025-12-09 at 21.47.55.mp4" type="video/mp4" />
                          </video>
                        </div>
                        <div className="aspect-video rounded-lg overflow-hidden shadow-md">
                          <video controls preload="none" poster="/Lumi/Videos/thumbnails/WhatsApp Video 2025-12-09 at 22.08.08.jpg" className="w-full h-full object-cover">
                            <source src="/Lumi/Videos/WhatsApp Video 2025-12-09 at 22.08.08.mp4" type="video/mp4" />
                          </video>
                        </div>
                        <div className="aspect-video rounded-lg overflow-hidden shadow-md">
                          <video controls preload="none" poster="/Lumi/Videos/thumbnails/WhatsApp Video 2025-12-09 at 22.34.24.jpg" className="w-full h-full object-cover">
                            <source src="/Lumi/Videos/WhatsApp Video 2025-12-09 at 22.34.24.mp4" type="video/mp4" />
                          </video>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Photo Gallery - Mobile only, shown at end of content */}
                  {selectedCandidate.id === 'pernilla' && (
                    <div className="mt-8 md:hidden">
                      <h5 className="font-bold text-navy-deep mb-4">{t('team.photoGallery')}</h5>
                      <div className="grid grid-cols-1 gap-2">
                        {GALLERY_PAIRS.map(({ num, sport, diplomacy }) => (
                          <React.Fragment key={num}>
                            <div className="w-full aspect-square rounded-lg overflow-hidden">
                              <img
                                src={sport}
                                alt={`Pernilla sport ${num}`}
                                loading="lazy"
                                className="w-full h-full object-cover hover:opacity-80 transition-opacity cursor-pointer"
                                style={
                                  num === 3 ? { objectPosition: 'center 15%' } :
                                  num === 17 ? { objectPosition: 'center 25%' } :
                                  num === 13 ? { transform: 'scale(1.5)' } :
                                  undefined
                                }
                                onClick={() => setLightboxImage(sport)}
                              />
                            </div>
                            <div className="w-full aspect-square rounded-lg overflow-hidden">
                              <img
                                src={diplomacy}
                                alt={`Pernilla diplomacy ${num}`}
                                loading="lazy"
                                className="w-full h-full object-cover hover:opacity-80 transition-opacity cursor-pointer"
                                style={
                                  [3, 4, 8, 9, 13, 16].includes(num) ? { objectPosition: 'top' } :
                                  num === 18 ? { objectPosition: 'center 20%' } :
                                  undefined
                                }
                                onClick={() => setLightboxImage(diplomacy)}
                              />
                            </div>
                          </React.Fragment>
                        ))}
                        {/* Additional photos */}
                        {MORE_PHOTOS.map((photo, idx) => (
                          <div key={`more-mobile-${idx}`} className="w-full aspect-square rounded-lg overflow-hidden">
                            <img
                              src={photo}
                              alt={`Pernilla photo ${idx + 1}`}
                              loading="lazy"
                              className="w-full h-full object-cover hover:opacity-80 transition-opacity cursor-pointer"
                              onClick={() => setLightboxImage(photo)}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Photo Gallery - Lumi only, Mobile, shown at end of content */}
                  {selectedCandidate.id === 'lumi' && (
                    <div className="mt-8 md:hidden">
                      <h5 className="font-bold text-navy-deep mb-4">{t('team.photoGallery')}</h5>
                      <div className="grid grid-cols-1 gap-2">
                        {LUMI_GALLERY_PHOTOS.map((photo, idx) => (
                          <div key={`lumi-mobile-${idx}`} className="w-full aspect-square rounded-lg overflow-hidden">
                            <img
                              src={photo}
                              alt={`Lumi photo ${idx + 1}`}
                              loading="lazy"
                              className="w-full h-full object-cover hover:opacity-80 transition-opacity cursor-pointer"
                              style={{ objectPosition: photo.includes('19.06.52') ? 'center 20%' : 'top' }}
                              onClick={() => setLightboxImage(photo)}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Photo Gallery - Thomas only, Mobile, shown at end of content */}
                  {selectedCandidate.id === 'thomas' && (
                    <div className="mt-8 md:hidden">
                      <h5 className="font-bold text-navy-deep mb-4">{t('team.photoGallery')}</h5>
                      <div className="grid grid-cols-1 gap-2">
                        {THOMAS_GALLERY_PHOTOS.map((photo, idx) => {
                          // Custom positioning for Thomas photos
                          // Most rotated photos use 'center 15%' for headroom
                          // Properly cropped photos (40, 67, 82, 89) use 'center'
                          // Photos with too much ceiling (2, 69) use 'center 50%'
                          const properlyCroppedIndices = [1, 40, 67, 89]; // IMG_9604, IMG_3293, IMG_4615, IMG_9662 - replaced with cropped versions
                          const tooMuchHeadroomIndices = [2, 69]; // IMG_0516, IMG_5212
                          let objectPos = 'center 15%';
                          if (properlyCroppedIndices.includes(idx)) objectPos = 'center';
                          else if (tooMuchHeadroomIndices.includes(idx)) objectPos = 'center 50%';
                          return (
                            <div key={`thomas-mobile-${idx}`} className="w-full aspect-square rounded-lg overflow-hidden">
                              <img
                                src={photo}
                                alt={`Thomas photo ${idx + 1}`}
                                loading="lazy"
                                className="w-full h-full object-cover hover:opacity-80 transition-opacity cursor-pointer"
                                style={{ objectPosition: objectPos }}
                                onClick={() => setLightboxImage(photo)}
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox for gallery images */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-navy-deep/95 backdrop-blur-sm cursor-pointer"
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-4 right-4 p-2 bg-white/10 rounded-full hover:bg-white/20 transition text-white z-10"
          >
            <X size={24} />
          </button>

          {/* Previous button */}
          <button
            onClick={(e) => { e.stopPropagation(); navigateLightbox('prev'); }}
            className="absolute left-4 p-3 bg-white/10 rounded-full hover:bg-white/20 transition text-white z-10"
          >
            <ChevronLeft size={32} />
          </button>

          {/* Next button */}
          <button
            onClick={(e) => { e.stopPropagation(); navigateLightbox('next'); }}
            className="absolute right-4 p-3 bg-white/10 rounded-full hover:bg-white/20 transition text-white z-10"
          >
            <ChevronRight size={32} />
          </button>

          <img
            src={lightboxImage}
            alt="Gallery full view"
            className={`object-contain rounded-lg shadow-2xl ${lightboxImage.includes('/1.jpg') ? 'max-w-[25vw] max-h-[25vh]' : 'max-w-[90vw] max-h-[90vh]'}`}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default TeamGrid;
