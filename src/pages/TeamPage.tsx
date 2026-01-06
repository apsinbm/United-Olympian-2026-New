import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { ArrowRight } from "lucide-react";

const TeamPage: React.FC = () => {
  const { t } = useLanguage();

  const candidates = [
    {
      key: "pernilla",
      name: t("candidates.pernilla.name"),
      role: t("candidates.pernilla.role"),
      image: "/Pernilla/1.jpg",
      keyAchievement: t("candidates.pernilla.keyAchievement"),
    },
    {
      key: "lumi",
      name: t("candidates.lumi.name"),
      role: t("candidates.lumi.role"),
      image: "/Lumi/WhatsApp Image 2025-12-09 at 19.06.40.jpeg",
      keyAchievement: t("candidates.lumi.keyAchievement"),
    },
    {
      key: "thomas",
      name: t("candidates.thomas.name"),
      role: t("candidates.thomas.role"),
      image: "/Thomas/WOA Election Photos/Best%20Photos/1730736078464.jpeg",
      keyAchievement: t("candidates.thomas.keyAchievement"),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-navy-deep mb-4">
            {t("teamPage.title")}
          </h1>
          <p className="text-xl text-gray-600 mb-6">{t("teamPage.subtitle")}</p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            {t("teamPage.intro")}
          </p>
        </div>

        {/* Candidate Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {candidates.map((candidate) => (
            <Link
              key={candidate.key}
              to={`/${candidate.key}`}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow group"
            >
              <div className="aspect-w-3 aspect-h-4 relative overflow-hidden">
                <img
                  src={candidate.image}
                  alt={candidate.name}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-navy-deep mb-2">
                  {candidate.name}
                </h3>
                <p className="text-gold font-semibold mb-3">{candidate.role}</p>
                <p className="text-gray-700 mb-4 line-clamp-3">
                  {candidate.keyAchievement}
                </p>
                <div className="flex items-center text-navy-deep font-semibold group-hover:text-gold transition-colors">
                  {t("teamPage.viewFullBio")}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* How to Reach Us */}
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <h2 className="text-3xl font-bold text-navy-deep mb-4">
            {t("teamPage.reachUs.title")}
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            {t("teamPage.reachUs.description")}
          </p>
          <Link
            to="/contact"
            className="inline-block bg-navy-deep text-white px-8 py-3 rounded-md font-semibold hover:bg-gold transition-colors"
          >
            {t("nav.contact")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
