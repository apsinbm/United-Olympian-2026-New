import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { ArrowLeft, ArrowRight } from "lucide-react";

const ThomasPage: React.FC = () => {
  const { t } = useLanguage();

  const candidate = {
    name: t("candidates.thomas.name"),
    role: t("candidates.thomas.role"),
    sport: t("candidates.thomas.sport"),
    country: t("candidates.thomas.country"),
    location: t("candidates.thomas.location"),
    keyAchievement: t("candidates.thomas.keyAchievement"),
    business: t("candidates.thomas.business"),
    trackRecord: t("candidates.thomas.trackRecord"),
    achievements: t("candidates.thomas.achievements") as string[],
    governance: t("candidates.thomas.governance") as string[],
    education: t("candidates.thomas.education") as string[],
    bioFull: t("candidates.thomas.bioFull"),
    manifesto: t("candidates.thomas.manifesto"),
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          to="/team"
          className="inline-flex items-center text-navy-deep hover:text-gold mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Team
        </Link>

        {/* Header Section */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="md:flex">
            <div className="md:w-1/3">
              <img
                src="/Thomas/WOA Election Photos/Best Photos/1730736078464.jpeg"
                alt={candidate.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-2/3 p-8">
              <h1 className="text-4xl font-bold text-navy-deep mb-2">
                {candidate.name}
              </h1>
              <p className="text-2xl text-gold font-semibold mb-4">
                {candidate.role}
              </p>
              <div className="grid grid-cols-2 gap-4 text-gray-700 mb-4">
                <div>
                  <span className="font-semibold">Sport:</span>{" "}
                  {candidate.sport}
                </div>
                <div>
                  <span className="font-semibold">Country:</span>{" "}
                  {candidate.country}
                </div>
                <div className="col-span-2">
                  <span className="font-semibold">Based In:</span>{" "}
                  {candidate.location}
                </div>
              </div>
              <p className="text-lg text-gray-800 font-semibold mb-4">
                {candidate.keyAchievement}
              </p>
            </div>
          </div>
        </div>

        {/* Biography */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-navy-deep mb-6">Biography</h2>
          <div className="prose prose-lg max-w-none text-gray-700 whitespace-pre-line">
            {candidate.bioFull}
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-navy-deep mb-6">
            Athletic Achievements
          </h2>
          <ul className="space-y-2">
            {candidate.achievements.map((achievement, index) => (
              <li key={index} className="flex items-start">
                <span className="text-gold mr-3 mt-1">•</span>
                <span className="text-gray-700">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Governance Experience */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-navy-deep mb-6">
            Governance Experience
          </h2>
          <ul className="space-y-2">
            {candidate.governance.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-gold mr-3 mt-1">•</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Education */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-navy-deep mb-6">Education</h2>
          <ul className="space-y-2">
            {candidate.education.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-gold mr-3 mt-1">•</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Business & Track Record */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-navy-deep mb-4">Business</h2>
            <p className="text-gray-700">{candidate.business}</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-navy-deep mb-4">
              Track Record
            </h2>
            <p className="text-gray-700">{candidate.trackRecord}</p>
          </div>
        </div>

        {/* Manifesto */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-navy-deep mb-6">
            My Vision for the WOA
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 whitespace-pre-line">
            {candidate.manifesto}
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/team"
            className="flex-1 bg-navy-deep text-white px-8 py-4 rounded-md font-semibold hover:bg-gold transition-colors text-center"
          >
            Meet the Full Team
          </Link>
          <Link
            to="/priorities"
            className="flex-1 bg-white border-2 border-navy-deep text-navy-deep px-8 py-4 rounded-md font-semibold hover:bg-navy-deep hover:text-white transition-colors text-center flex items-center justify-center"
          >
            Our Priorities
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThomasPage;
