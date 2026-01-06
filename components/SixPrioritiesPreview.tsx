import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import {
  User,
  Trophy,
  Building2,
  DollarSign,
  Zap,
  Users,
  ArrowRight,
} from "lucide-react";

const SixPrioritiesPreview: React.FC = () => {
  const { t } = useLanguage();

  const priorities = [
    {
      key: "olympiansBeyondSport",
      icon: User,
      anchor: "olympians-beyond-sport",
    },
    {
      key: "projectsLegacy",
      icon: Trophy,
      anchor: "projects-legacy",
    },
    {
      key: "noaSupport",
      icon: Building2,
      anchor: "noa-support",
    },
    {
      key: "financialSustainability",
      icon: DollarSign,
      anchor: "financial-sustainability",
    },
    {
      key: "technology",
      icon: Zap,
      anchor: "technology",
    },
    {
      key: "collaboration",
      icon: Users,
      anchor: "collaboration",
    },
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-deep mb-4">
            {t("sixPriorities.sectionTitle")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("sixPriorities.sectionSubtitle")}
          </p>
        </div>

        {/* Priority Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {priorities.map((priority) => {
            const Icon = priority.icon;
            return (
              <Link
                key={priority.key}
                to={`/priorities#${priority.anchor}`}
                className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow group"
              >
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                      <Icon className="w-6 h-6 text-gold" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold text-navy-deep mb-2 group-hover:text-gold transition-colors">
                      {t(`sixPriorities.items.${priority.key}.title`)}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-700 mb-4 line-clamp-2">
                  {t(`sixPriorities.items.${priority.key}.description`)}
                </p>
                <div className="flex items-center text-navy-deep font-semibold group-hover:text-gold transition-colors">
                  {t("sixPriorities.learnMore")}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SixPrioritiesPreview;
