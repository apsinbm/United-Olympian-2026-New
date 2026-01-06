import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { Map, Wrench, CheckCircle, ArrowRight } from "lucide-react";

const DeliveryTeaser: React.FC = () => {
  const { t } = useLanguage();

  const proofPoints = [
    {
      key: "roadmap",
      icon: Map,
    },
    {
      key: "tools",
      icon: Wrench,
    },
    {
      key: "accountability",
      icon: CheckCircle,
    },
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-deep mb-4">
            {t("deliveryTeaser.sectionTitle")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("deliveryTeaser.sectionSubtitle")}
          </p>
        </div>

        {/* Proof Points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {proofPoints.map((point) => {
            const Icon = point.icon;
            return (
              <div key={point.key} className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-navy-deep rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-gold" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-navy-deep mb-4">
                  {t(`deliveryTeaser.items.${point.key}.title`)}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {t(`deliveryTeaser.items.${point.key}.description`)}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            to="/how-well-deliver"
            className="inline-flex items-center px-8 py-4 bg-navy-deep text-white rounded-md font-semibold text-lg hover:bg-gold hover:text-navy-deep transition-colors shadow-lg"
          >
            {t("deliveryTeaser.ctaButton")}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DeliveryTeaser;
