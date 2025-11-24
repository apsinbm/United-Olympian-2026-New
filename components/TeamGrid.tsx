
import React, { useState } from 'react';
import { CANDIDATES } from '../constants';
import { Candidate } from '../types';
import { X, Award, Briefcase, Trophy, Globe, PlayCircle } from 'lucide-react';

const TeamGrid: React.FC = () => {
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(null);

  return (
    <section id="team" className="py-24 bg-light-grey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-navy-deep mb-4">The Dream Team</h2>
          <div className="h-1 w-24 bg-gold mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-serif">
            Three distinct paths to excellence. One unified vision for the future of the WOA.
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
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-gold text-navy-deep text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  {candidate.country}
                </div>
              </div>

              {/* Middle: Content */}
              <div className="flex-grow px-6 py-4 text-center">
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
                  src={selectedCandidate.imageHeadshot} 
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
                  <p className="mb-6">{selectedCandidate.bioFull}</p>
                  
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
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TeamGrid;
