import React from 'react';
import { X } from 'lucide-react';

interface PrivacyPolicyProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-navy-deep">Privacy Policy</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition"
            aria-label="Close"
          >
            <X size={24} />
          </button>
        </div>

        <div className="px-6 py-6 space-y-6 text-gray-700">
          <p className="text-sm text-gray-500">Last updated: December 2025</p>

          <section>
            <h3 className="font-bold text-navy-deep mb-2">Information We Collect</h3>
            <p>
              When you use our contact form, we may collect information you voluntarily provide, including your name, email address, phone number, and any message content you submit.
            </p>
          </section>

          <section>
            <h3 className="font-bold text-navy-deep mb-2">How We Use Your Information</h3>
            <p>
              We use the information you provide solely to respond to your inquiries and facilitate communication regarding the Olympians United campaign.
            </p>
          </section>

          <section>
            <h3 className="font-bold text-navy-deep mb-2">Information Sharing</h3>
            <p>
              We do not sell, trade, or transfer your personal information to third parties. Information may be shared among campaign team members as necessary to respond to your inquiry.
            </p>
          </section>

          <section>
            <h3 className="font-bold text-navy-deep mb-2">Data Retention</h3>
            <p>
              We retain your information only as long as necessary to fulfill the purposes for which it was collected or as required by law.
            </p>
          </section>

          <section>
            <h3 className="font-bold text-navy-deep mb-2">Your Rights</h3>
            <p>
              You may request access to, correction of, or deletion of your personal information by contacting us. We will respond to such requests in accordance with applicable law.
            </p>
          </section>

          <section>
            <h3 className="font-bold text-navy-deep mb-2">Third-Party Services</h3>
            <p>
              This website may contain embedded content from third-party platforms (such as YouTube and Vimeo). These services may collect information about you according to their own privacy policies.
            </p>
          </section>

          <section>
            <h3 className="font-bold text-navy-deep mb-2">Changes to This Policy</h3>
            <p>
              We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date.
            </p>
          </section>

          <section>
            <h3 className="font-bold text-navy-deep mb-2">Contact</h3>
            <p>
              For questions about this privacy policy, please use the contact form on this website.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
