import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { ArrowRight } from "lucide-react";

const HowWeDeliverPage: React.FC = () => {
  const { t } = useLanguage();

  const first100DaysActions = t("howWeDeliver.first100Days.actions") as Array<{
    title: string;
    description: string;
  }>;

  const tools = t("howWeDeliver.toolsForNOAs.tools") as Array<{
    title: string;
    description: string;
  }>;

  const principles = t("howWeDeliver.partnerships.principles") as Array<{
    title: string;
    description: string;
  }>;

  const partnershipExamples = t(
    "howWeDeliver.partnerships.examples",
  ) as string[];

  const commitments = t("howWeDeliver.communication.commitments") as Array<{
    title: string;
    description: string;
  }>;

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-navy-deep mb-4">
            {t("howWeDeliver.title")}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("howWeDeliver.subtitle")}
          </p>
        </div>

        {/* Section 1: First 100 Days */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-3xl font-bold text-navy-deep mb-4">
            {t("howWeDeliver.first100Days.title")}
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            {t("howWeDeliver.first100Days.intro")}
          </p>
          <div className="space-y-4">
            {first100DaysActions.map((action, index) => (
              <div key={index} className="border-l-4 border-gold pl-6">
                <h3 className="text-xl font-bold text-navy-deep mb-2">
                  {index + 1}. {action.title}
                </h3>
                <p className="text-gray-700">{action.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Tools NOAs Can Use */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-3xl font-bold text-navy-deep mb-4">
            {t("howWeDeliver.toolsForNOAs.title")}
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            {t("howWeDeliver.toolsForNOAs.intro")}
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {tools.map((tool, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-bold text-navy-deep mb-2">{tool.title}</h3>
                <p className="text-gray-700 text-sm">{tool.description}</p>
              </div>
            ))}
          </div>
          <p className="text-lg text-gold font-semibold italic">
            {t("howWeDeliver.toolsForNOAs.commitment")}
          </p>
        </div>

        {/* Section 3: Partnerships */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-3xl font-bold text-navy-deep mb-4">
            {t("howWeDeliver.partnerships.title")}
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            {t("howWeDeliver.partnerships.intro")}
          </p>
          <div className="space-y-4 mb-6">
            {principles.map((principle, index) => (
              <div key={index}>
                <h3 className="text-xl font-bold text-navy-deep mb-2">
                  {principle.title}
                </h3>
                <p className="text-gray-700">{principle.description}</p>
              </div>
            ))}
          </div>
          <h3 className="text-xl font-bold text-navy-deep mb-4">
            {t("howWeDeliver.partnerships.examplesTitle")}
          </h3>
          <ul className="space-y-2">
            {partnershipExamples.map((example, index) => (
              <li key={index} className="flex items-start">
                <span className="text-gold mr-3 mt-1">•</span>
                <span className="text-gray-700">{example}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Section 4: Communication and Accountability */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-3xl font-bold text-navy-deep mb-4">
            {t("howWeDeliver.communication.title")}
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            {t("howWeDeliver.communication.intro")}
          </p>
          <div className="space-y-4 mb-6">
            {commitments.map((commitment, index) => (
              <div key={index} className="border-l-4 border-gold pl-6">
                <h3 className="text-xl font-bold text-navy-deep mb-2">
                  {commitment.title}
                </h3>
                <p className="text-gray-700">{commitment.description}</p>
              </div>
            ))}
          </div>
          <p className="text-lg text-navy-deep font-bold italic text-center mt-8">
            {t("howWeDeliver.communication.tagline")}
          </p>
        </div>

        {/* Footer CTA */}
        <div className="text-center bg-navy-deep rounded-lg shadow-md p-8 text-white">
          <h3 className="text-3xl font-bold mb-6">
            {t("howWeDeliver.footerCTA.headline")}
          </h3>
          <Link
            to="/team"
            className="inline-flex items-center px-8 py-4 bg-gold text-navy-deep rounded-md font-semibold text-lg hover:bg-gold-hover transition-colors"
          >
            {t("howWeDeliver.footerCTA.ctaButton")}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HowWeDeliverPage;
