import { useLanguage } from '@/context/LanguageContext';

const FooterSection = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-white/10 py-12 sm:py-16 text-center px-4">
      <div className="h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent mb-8 sm:mb-12" />
      <div className="text-xl sm:text-2xl font-extrabold text-hub-text mb-2 sm:mb-3">👋 Sergiu Murgescu</div>
      <p className="text-xs sm:text-sm text-hub-muted mb-2 leading-relaxed">{t.footerText}</p>
      <p className="text-xs sm:text-sm text-hub-muted mb-5 sm:mb-6 leading-relaxed">{t.footerClick}</p>
      <span className="inline-block text-[11px] sm:text-xs px-4 py-2 rounded-full bg-indigo-500/5 text-hub-muted border border-indigo-500/10 mb-8 sm:mb-12">
        ✦ {t.footerPassion}
      </span>

      {/* Legal footer */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6 sm:mb-8" />
      <div className="max-w-2xl mx-auto space-y-2">
        <div className="text-sm sm:text-base font-bold text-hub-text tracking-wide">SSocietyHUB</div>
        <div className="text-[11px] sm:text-xs text-hub-muted">MURSE ADVERTISING S.R.L</div>
        <div className="text-[11px] sm:text-xs text-hub-muted">CUI: 44923890 · J40/16148/2021</div>
        <div className="text-[11px] sm:text-xs text-hub-muted mt-1">© 2024–2026 Toate drepturile rezervate</div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 pt-3 text-[11px] sm:text-xs text-hub-muted">
          <a href="mailto:sergiusociety@gmail.com" className="hover:text-indigo-400 transition-colors flex items-center gap-1.5">
            ✉ sergiusociety@gmail.com
          </a>
          <span className="hidden sm:inline text-hub-muted/30">·</span>
          <a href="https://wa.me/40768676141" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
            📱 +40 768 676 141
          </a>
        </div>
        <div className="flex items-center justify-center gap-3 sm:gap-4 pt-3">
          <a
            href="/termeni-si-conditii.html"
            className="text-[11px] sm:text-xs text-hub-muted hover:text-indigo-400 transition-colors underline underline-offset-2"
          >
            Termeni și Condiții
          </a>
          <span className="text-hub-muted/30">·</span>
          <a
            href="/politica-cookies.html"
            className="text-[11px] sm:text-xs text-hub-muted hover:text-indigo-400 transition-colors underline underline-offset-2"
          >
            Politică Cookies
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
