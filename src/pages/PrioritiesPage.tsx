import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { ArrowRight } from "lucide-react";

const PrioritiesPage: React.FC = () => {
  const { t } = useLanguage();

  const pillarKeys = [
    { key: "olympiansBeyondSport", anchor: "olympians-beyond-sport" },
    { key: "projectsLegacy", anchor: "projects-legacy" },
    { key: "noaSupport", anchor: "noa-support" },
    { key: "financialSustainability", anchor: "financial-sustainability" },
    { key: "technology", anchor: "technology" },
    { key: "collaboration", anchor: "collaboration" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-navy-deep mb-6">
            {t("prioritiesPage.title")}
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
            {t("prioritiesPage.intro")}
          </p>
        </div>

        {/* Pillars */}
        <div className="space-y-12 mb-16">
          {pillarKeys.map(({ key, anchor }) => {
            const examples = t(
              `prioritiesPage.pillars.${key}.examples`,
            ) as string[];
            return (
              <div
                key={key}
                id={anchor}
                className="bg-white rounded-lg shadow-md p-8 scroll-mt-24"
              >
                <h2 className="text-3xl font-bold text-navy-deep mb-4">
                  {t(`prioritiesPage.pillars.${key}.title`)}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {t(`prioritiesPage.pillars.${key}.description`)}
                </p>
                <div className="mt-6">
                  <h3 className="text-xl font-semibold text-navy-deep mb-4">
                    {t("prioritiesPage.whatThisLooksLike")}
                  </h3>
                  <ul className="space-y-3">
                    {examples.map((example, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-gold mr-3 mt-1 flex-shrink-0">
                          •
                        </span>
                        <span className="text-gray-700">{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* WOA's Role */}
        <div className="bg-navy-deep rounded-lg shadow-md p-8 mb-12 text-white">
          <h2 className="text-3xl font-bold mb-4">
            {t("prioritiesPage.woaRole.title")}
          </h2>
          <p className="text-lg leading-relaxed text-gray-200">
            {t("prioritiesPage.woaRole.description")}
          </p>
        </div>

        {/* Footer CTA */}
        <div className="text-center bg-white rounded-lg shadow-md p-8">
          <h3 className="text-3xl font-bold text-navy-deep mb-6">
            {t("prioritiesPage.footerCTA.headline")}
          </h3>
          <Link
            to="/how-well-deliver"
            className="inline-flex items-center px-8 py-4 bg-navy-deep text-white rounded-md font-semibold text-lg hover:bg-gold hover:text-navy-deep transition-colors"
          >
            {t("prioritiesPage.footerCTA.ctaButton")}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrioritiesPage;
