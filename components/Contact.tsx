import React, { useState, useEffect, useRef } from 'react';
import { Send, ArrowRight, Loader2 } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';

// Declare Turnstile global type
declare global {
  interface Window {
    turnstile?: {
      render: (container: HTMLElement, options: {
        sitekey: string;
        callback: (token: string) => void;
        'error-callback'?: () => void;
        'expired-callback'?: () => void;
        theme?: 'light' | 'dark' | 'auto';
      }) => string;
      reset: (widgetId: string) => void;
      remove: (widgetId: string) => void;
    };
  }
}

const TURNSTILE_SITE_KEY = '0x4AAAAAACHFrmZM1yAOY7AO';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const turnstileRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);

  // Initialize Turnstile widget
  useEffect(() => {
    const initTurnstile = () => {
      if (window.turnstile && turnstileRef.current && !widgetIdRef.current) {
        widgetIdRef.current = window.turnstile.render(turnstileRef.current, {
          sitekey: TURNSTILE_SITE_KEY,
          callback: (token: string) => {
            setTurnstileToken(token);
          },
          'error-callback': () => {
            setTurnstileToken(null);
          },
          'expired-callback': () => {
            setTurnstileToken(null);
          },
          theme: 'light'
        });
      }
    };

    // Wait for Turnstile to load
    if (window.turnstile) {
      initTurnstile();
    } else {
      const checkTurnstile = setInterval(() => {
        if (window.turnstile) {
          clearInterval(checkTurnstile);
          initTurnstile();
        }
      }, 100);
      return () => clearInterval(checkTurnstile);
    }

    return () => {
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const form = e.currentTarget;
    const formData = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      noa: (form.elements.namedItem('noa') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      whatsapp: (form.elements.namedItem('whatsapp') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
      turnstileToken: turnstileToken,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit');
      }

      setSubmitted(true);
      form.reset();
    } catch (err) {
      setError('Something went wrong. Please try again or contact us directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-light-grey -skew-x-12 translate-x-1/4 z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-navy-deep rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[500px]">

          {/* CTA Side */}
          <div className="md:w-1/2 p-12 flex flex-col justify-center relative bg-navy-deep text-white">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <h2 className="text-4xl font-extrabold mb-6">{t('contact.title')}</h2>
            <p className="text-gray-300 text-lg mb-8 font-serif">
              {t('contact.subtitle')}
            </p>
            <div className="flex items-center gap-2 text-gold font-bold text-xl">
               <span>{t('contact.tagline')}</span>
               <ArrowRight />
            </div>
          </div>

          {/* Form Side */}
          <div className="md:w-1/2 p-12 bg-white flex flex-col justify-center">
            {submitted ? (
              <div className="text-center animate-fade-in" role="status" aria-live="polite">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                  <Send size={32} />
                </div>
                <h3 className="text-2xl font-bold text-navy-deep mb-2">{t('contact.success.title')}</h3>
                <p className="text-gray-500">{t('contact.success.message')}</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm text-navy-deep underline hover:no-underline"
                >
                  {t('contact.success.another')}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div role="alert" aria-live="polite" className="bg-red-50 text-red-600 p-3 rounded-lg text-sm">
                    {t('contact.error')}
                  </div>
                )}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">{t('contact.form.nameLabel')}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    disabled={loading}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition disabled:bg-gray-100"
                    placeholder={t('contact.form.namePlaceholder')}
                  />
                </div>
                <div>
                  <label htmlFor="noa" className="block text-sm font-medium text-gray-700 mb-1">{t('contact.form.noaLabel')}</label>
                  <input
                    type="text"
                    id="noa"
                    name="noa"
                    required
                    disabled={loading}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition disabled:bg-gray-100"
                    placeholder={t('contact.form.noaPlaceholder')}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">{t('contact.form.emailLabel')}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    disabled={loading}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition disabled:bg-gray-100"
                    placeholder={t('contact.form.emailPlaceholder')}
                  />
                </div>
                <div>
                  <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 mb-1">{t('contact.form.whatsappLabel')}</label>
                  <input
                    type="tel"
                    id="whatsapp"
                    name="whatsapp"
                    disabled={loading}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition disabled:bg-gray-100"
                    placeholder={t('contact.form.whatsappPlaceholder')}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">{t('contact.form.messageLabel')}</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    disabled={loading}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition resize-none disabled:bg-gray-100"
                    placeholder={t('contact.form.messagePlaceholder')}
                  />
                </div>
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="privacy"
                    checked={privacyAccepted}
                    onChange={(e) => setPrivacyAccepted(e.target.checked)}
                    disabled={loading}
                    aria-required="true"
                    className="mt-1 w-4 h-4 text-gold border-gray-300 rounded focus:ring-gold cursor-pointer disabled:cursor-not-allowed"
                  />
                  <label htmlFor="privacy" className="text-sm text-gray-600 cursor-pointer">
                    {t('contact.form.privacyLabel')}
                  </label>
                </div>
                {/* Cloudflare Turnstile CAPTCHA */}
                <div ref={turnstileRef} className="flex justify-center" aria-label="Security verification"></div>
                <button
                  type="submit"
                  disabled={loading || !privacyAccepted || !turnstileToken}
                  aria-busy={loading}
                  className="w-full bg-crimson hover:bg-crimson-hover text-white font-bold py-4 rounded-lg shadow-lg transform active:scale-95 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <Loader2 className="animate-spin" size={20} />
                      {t('contact.form.submitting')}
                    </>
                  ) : (
                    t('contact.form.submit')
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
