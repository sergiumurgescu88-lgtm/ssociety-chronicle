import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';

const i18n: Record<string, { text: string; learnMore: string; settings: string; refuse: string; acceptAll: string }> = {
  ro: {
    text: 'Folosim cookie-uri pentru a îmbunătăți experiența ta.',
    learnMore: 'Află mai multe',
    settings: 'Setări',
    refuse: 'Refuz',
    acceptAll: 'Accept toate',
  },
  en: {
    text: 'We use cookies to improve your experience.',
    learnMore: 'Learn more',
    settings: 'Settings',
    refuse: 'Decline',
    acceptAll: 'Accept all',
  },
  es: {
    text: 'Usamos cookies para mejorar tu experiencia.',
    learnMore: 'Más información',
    settings: 'Configuración',
    refuse: 'Rechazar',
    acceptAll: 'Aceptar todo',
  },
  fr: {
    text: 'Nous utilisons des cookies pour améliorer votre expérience.',
    learnMore: 'En savoir plus',
    settings: 'Paramètres',
    refuse: 'Refuser',
    acceptAll: 'Tout accepter',
  },
  it: {
    text: 'Utilizziamo i cookie per migliorare la tua esperienza.',
    learnMore: 'Scopri di più',
    settings: 'Impostazioni',
    refuse: 'Rifiuta',
    acceptAll: 'Accetta tutto',
  },
  de: {
    text: 'Wir verwenden Cookies, um Ihre Erfahrung zu verbessern.',
    learnMore: 'Mehr erfahren',
    settings: 'Einstellungen',
    refuse: 'Ablehnen',
    acceptAll: 'Alle akzeptieren',
  },
  ar: {
    text: 'نستخدم ملفات تعريف الارتباط لتحسين تجربتك.',
    learnMore: 'اعرف المزيد',
    settings: 'الإعدادات',
    refuse: 'رفض',
    acceptAll: 'قبول الكل',
  },
};

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);
  const { language } = useLanguage();
  const c = i18n[language] || i18n.en;

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setVisible(false);
  };

  const refuse = () => {
    localStorage.setItem('cookie-consent', 'refused');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] bg-[#111118] border-t border-white/10 px-4 sm:px-8 py-4 sm:py-5">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6">
        <p className="text-xs sm:text-sm text-hub-muted flex-1 leading-relaxed">
          {c.text}{' '}
          <a href="/politica-cookies.html" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2">
            {c.learnMore}
          </a>
        </p>
        <div className="flex gap-2 shrink-0">
          <a
            href="/politica-cookies.html"
            className="px-3 py-1.5 text-xs rounded-md border border-white/10 text-hub-muted hover:text-hub-text transition-colors"
          >
            {c.settings}
          </a>
          <button
            onClick={refuse}
            className="px-3 py-1.5 text-xs rounded-md border border-white/10 text-hub-muted hover:text-hub-text transition-colors"
          >
            {c.refuse}
          </button>
          <button
            onClick={accept}
            className="px-4 py-1.5 text-xs rounded-md bg-indigo-600 text-white hover:bg-indigo-500 transition-colors font-medium"
          >
            {c.acceptAll}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
