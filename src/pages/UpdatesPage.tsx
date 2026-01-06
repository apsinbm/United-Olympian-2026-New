import React from "react";
import { useLanguage } from "../../context/LanguageContext";

const UpdatesPage: React.FC = () => {
  const { t } = useLanguage();

  const updates = t("updatesPage.updates") as Array<{
    date: string;
    headline: string;
    body: string;
  }>;

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-navy-deep mb-4">
            {t("updatesPage.title")}
          </h1>
          <p className="text-lg text-gray-600">{t("updatesPage.subtitle")}</p>
        </div>

        {/* Updates Feed */}
        <div className="space-y-8">
          {updates && updates.length > 0 ? (
            updates.map((update, index) => (
              <article
                key={index}
                className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow"
              >
                <div className="text-sm text-gray-500 mb-2">{update.date}</div>
                <h2 className="text-2xl font-bold text-navy-deep mb-4">
                  {update.headline}
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700 whitespace-pre-line">
                  {update.body}
                </div>
              </article>
            ))
          ) : (
            <div className="text-center py-12 bg-white rounded-lg shadow-md">
              <p className="text-gray-500 text-lg">
                {t("updatesPage.noUpdates")}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UpdatesPage;
