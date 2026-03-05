import { useState, useEffect } from 'react';

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

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
          Folosim cookie-uri pentru a îmbunătăți experiența ta.{' '}
          <a href="/politica-cookies.html" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2">
            Află mai multe
          </a>
        </p>
        <div className="flex gap-2 shrink-0">
          <a
            href="/politica-cookies.html"
            className="px-3 py-1.5 text-xs rounded-md border border-white/10 text-hub-muted hover:text-hub-text transition-colors"
          >
            Setări
          </a>
          <button
            onClick={refuse}
            className="px-3 py-1.5 text-xs rounded-md border border-white/10 text-hub-muted hover:text-hub-text transition-colors"
          >
            Refuz
          </button>
          <button
            onClick={accept}
            className="px-4 py-1.5 text-xs rounded-md bg-indigo-600 text-white hover:bg-indigo-500 transition-colors font-medium"
          >
            Accept toate
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
