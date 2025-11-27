
import React, { useState, useEffect, useCallback } from 'react';
import { CANDIDATES } from '../constants';
import { Candidate } from '../types';
import { X, Award, Briefcase, Trophy, Globe, PlayCircle, GraduationCap, Linkedin, MapPin, Twitter, Facebook, Instagram, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

const GALLERY_ORDER = [15, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 16, 17, 18];

const TeamGrid: React.FC = () => {
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const navigateLightbox = useCallback((direction: 'prev' | 'next') => {
    if (!lightboxImage) return;
    const match = lightboxImage.match(/\/Pernilla\/(\d+)\.jpg/);
    if (!match) return;
    const currentNum = parseInt(match[1]);
    const currentIndex = GALLERY_ORDER.indexOf(currentNum);
    if (currentIndex === -1) return;

    let newIndex;
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % GALLERY_ORDER.length;
    } else {
      newIndex = (currentIndex - 1 + GALLERY_ORDER.length) % GALLERY_ORDER.length;
    }
    setLightboxImage(`/Pernilla/${GALLERY_ORDER[newIndex]}.jpg`);
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-navy-deep mb-4">The Dream Team</h2>
          <div className="h-1 w-24 bg-gold mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-serif">
            Three experienced and successful administrators. One unified vision for the future of the WOA.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {CANDIDATES.map((candidate) => (
            <div key={candidate.id} className="group flex flex-col bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">

              {/* Top: Business Photo */}
              <div className="h-56 w-full overflow-hidden bg-navy-deep relative">
                <img
                  src={candidate.imageAction}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://picsum.photos/800/600?random=${candidate.id}`;
                  }}
                  alt={`${candidate.name} in action`}
                  className={`h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 ${candidate.id === 'thomas' ? 'w-[120%] -mr-[15%] ml-auto' : 'w-full'}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-gold text-navy-deep text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  {candidate.country}
                </div>
              </div>

              {/* Middle: Content */}
              <div className="flex-grow px-6 pt-4 pb-6 text-center">
                <h3 className="text-2xl font-bold text-navy-deep leading-tight">{candidate.name}</h3>
                <p className="text-crimson font-bold text-sm uppercase tracking-wide mt-1">{candidate.role}</p>

                <div className="mt-4 text-sm text-gray-600 space-y-2 mb-6">
                  <p className="flex items-center justify-center gap-2">
                    <Trophy size={16} className="text-gold" />
                    <span>{candidate.sport}</span>
                  </p>
                </div>

                <p className="text-gray-500 text-sm line-clamp-3 mb-6 font-serif italic">
                  "{candidate.keyAchievement}"
                </p>

                <button
                  onClick={() => setSelectedCandidate(candidate)}
                  className="w-full py-2 border-2 border-navy-deep text-navy-deep font-bold rounded hover:bg-navy-deep hover:text-white transition-colors"
                >
                  View Full Profile
                </button>
              </div>

              {/* Bottom: Sport Photo */}
              <div className="h-56 w-full overflow-hidden bg-gray-200 relative">
                <img
                  src={candidate.imageHeadshot}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://picsum.photos/800/600?random=${candidate.id}2`;
                  }}
                  alt={`${candidate.name} sport`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedCandidate && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
          <div 
            className="absolute inset-0 bg-navy-deep/90 backdrop-blur-sm"
            onClick={() => setSelectedCandidate(null)}
          ></div>
          <div className="relative bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl animate-fade-in">
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
                  src={selectedCandidate.id === 'pernilla' ? '/Pernilla Headshot.jpg' : selectedCandidate.imageHeadshot}
                  onError={(e) => { (e.target as HTMLImageElement).src = `https://picsum.photos/300/300?random=${selectedCandidate.id}2`; }}
                  className="w-32 h-32 rounded-full border-4 border-gold shadow-lg mb-6 mx-auto md:mx-0 object-cover"
                  alt={selectedCandidate.name}
                />
                <h3 className="text-2xl font-bold mb-1">{selectedCandidate.name}</h3>
                <p className="text-gold font-medium mb-6">{selectedCandidate.role}</p>
                
                <div className="space-y-4 text-sm text-gray-300">
                  <div className="flex items-start gap-3">
                    <Award className="text-gold shrink-0 mt-1" size={18} />
                    <div>
                      <span className="block text-white font-bold">Athletic Highlights</span>
                      <ul className="list-disc pl-4 mt-1 space-y-1">
                        {selectedCandidate.achievements.map((a, i) => (
                          <li key={i}>{a}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {selectedCandidate.business && (
                    <div className="flex items-start gap-3">
                      <Briefcase className="text-gold shrink-0 mt-1" size={18} />
                      <div>
                        <span className="block text-white font-bold">Business</span>
                        <p>{selectedCandidate.business}</p>
                      </div>
                    </div>
                  )}

                  <div className="flex items-start gap-3">
                    <Globe className="text-gold shrink-0 mt-1" size={18} />
                    <div>
                      <span className="block text-white font-bold">Country</span>
                      <p>{selectedCandidate.country}</p>
                    </div>
                  </div>

                  {selectedCandidate.location && (
                    <div className="flex items-start gap-3">
                      <MapPin className="text-gold shrink-0 mt-1" size={18} />
                      <div>
                        <span className="block text-white font-bold">Based In</span>
                        <p>{selectedCandidate.location}</p>
                      </div>
                    </div>
                  )}

                  {selectedCandidate.education && selectedCandidate.education.length > 0 && (
                    <div className="flex items-start gap-3">
                      <GraduationCap className="text-gold shrink-0 mt-1" size={18} />
                      <div>
                        <span className="block text-white font-bold">Education</span>
                        <ul className="list-disc pl-4 mt-1 space-y-1">
                          {selectedCandidate.education.map((e, i) => (
                            <li key={i}>{e}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {selectedCandidate.socialLinks && (
                    <div className="mt-6 space-y-2">
                      <span className="block text-white font-bold mb-2">Connect</span>
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
                      <span className="block text-white font-bold mb-3">Gallery</span>
                      <div className="grid grid-cols-2 gap-2">
                        {GALLERY_ORDER.map((num) => (
                          <div key={num} className="w-full h-20 rounded-lg overflow-hidden">
                            <img
                              src={`/Pernilla/${num}.jpg`}
                              alt={`Pernilla gallery ${num}`}
                              className="w-full h-full object-cover hover:opacity-80 transition-opacity cursor-pointer"
                              style={
                                num === 3 ? { objectPosition: 'top' } :
                                num === 17 ? { objectPosition: 'center 25%' } :
                                num === 13 ? { transform: 'scale(1.5)' } :
                                undefined
                              }
                              onClick={() => setLightboxImage(`/Pernilla/${num}.jpg`)}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Modal Right: Bio */}
              <div className="md:w-2/3 p-8 md:p-12">
                <h4 className="text-3xl font-extrabold text-navy-deep mb-6 font-serif">Biography</h4>

                {/* Video Biography Section */}
                <div className="mb-8 group relative rounded-xl overflow-hidden shadow-lg bg-navy-deep">
                  <div className="absolute top-4 left-4 z-10 bg-crimson text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1 shadow-sm">
                    <PlayCircle size={12} />
                    <span>Video Bio</span>
                  </div>
                  <video 
                    controls 
                    className="w-full aspect-video object-cover"
                    poster={`https://picsum.photos/seed/${selectedCandidate.id}video/800/450`}
                  >
                    <source src={`/videos/${selectedCandidate.id}_bio.mp4`} type="video/mp4" />
                    {/* Fallback for demo purposes */}
                    <source src="https://assets.mixkit.co/videos/preview/mixkit-people-jogging-on-a-running-track-32777-large.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="bg-navy-light px-4 py-2 text-white text-sm">
                    <span className="text-gold font-bold">Watch:</span> A personal message from {selectedCandidate.name.split(' ')[0]}.
                  </div>
                </div>

                <div className="prose prose-lg text-gray-600">
                  {selectedCandidate.bioFull.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4">{paragraph}</p>
                  ))}

                  {selectedCandidate.trackRecord && (
                    <div className="bg-gold/10 p-6 rounded-lg border-l-4 border-gold mb-6">
                      <h5 className="font-bold text-navy-deep mb-2 text-lg">Track Record</h5>
                      <p className="text-gray-700">{selectedCandidate.trackRecord}</p>
                    </div>
                  )}

                  {selectedCandidate.governance.length > 0 && (
                     <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gold mb-6">
                        <h5 className="font-bold text-navy-deep mb-2 text-lg">Governance Experience</h5>
                        <ul className="space-y-2">
                           {selectedCandidate.governance.map((g, i) => (
                              <li key={i} className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-crimson rounded-full"></span>
                                {g}
                              </li>
                           ))}
                        </ul>
                     </div>
                  )}

                  {selectedCandidate.keyAchievement && (
                    <div className="mt-8">
                       <h5 className="font-bold text-navy-deep mb-2">Key Achievement</h5>
                       <p className="text-navy-deep font-serif italic text-lg">"{selectedCandidate.keyAchievement}"</p>
                    </div>
                  )}

                  {/* YouTube Videos - Pernilla only */}
                  {selectedCandidate.id === 'pernilla' && (
                    <div className="mt-8">
                      <h5 className="font-bold text-navy-deep mb-4">Videos</h5>
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
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                        <div className="aspect-video rounded-lg overflow-hidden shadow-md">
                          <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/llhptd5RZsw?start=120"
                            title="Pernilla Wiberg Video 3"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                        <div className="aspect-video rounded-lg overflow-hidden shadow-md">
                          <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/TYJWxz5Bmgo"
                            title="Pernilla Wiberg Video 4"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                        <div className="aspect-video rounded-lg overflow-hidden shadow-md">
                          <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/JCOqo-i4kbo"
                            title="Pernilla Wiberg Video 5"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Photo Gallery - Mobile only, shown at end of content */}
                  {selectedCandidate.id === 'pernilla' && (
                    <div className="mt-8 md:hidden">
                      <h5 className="font-bold text-navy-deep mb-4">Photo Gallery</h5>
                      <div className="grid grid-cols-3 gap-2">
                        {GALLERY_ORDER.map((num) => (
                          <div key={num} className="w-full aspect-square rounded-lg overflow-hidden">
                            <img
                              src={`/Pernilla/${num}.jpg`}
                              alt={`Pernilla gallery ${num}`}
                              className="w-full h-full object-cover hover:opacity-80 transition-opacity cursor-pointer"
                              style={
                                num === 3 ? { objectPosition: 'top' } :
                                num === 17 ? { objectPosition: 'center 25%' } :
                                num === 13 ? { transform: 'scale(1.5)' } :
                                undefined
                              }
                              onClick={() => setLightboxImage(`/Pernilla/${num}.jpg`)}
                            />
                          </div>
                        ))}
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
