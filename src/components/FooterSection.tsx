import { useLanguage } from '@/context/LanguageContext';

const FooterSection = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-white/10 py-12 sm:py-16 text-center px-4">
      <div className="h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent mb-8 sm:mb-12" />
      <div className="text-xl sm:text-2xl font-extrabold text-hub-text mb-2 sm:mb-3">👋 Sergiu Murgescu</div>
      <p className="text-xs sm:text-sm text-hub-muted mb-2 leading-relaxed">{t.footerText}</p>
      <p className="text-xs sm:text-sm text-hub-muted mb-5 sm:mb-6 leading-relaxed">{t.footerClick}</p>
      <span className="inline-block text-[11px] sm:text-xs px-4 py-2 rounded-full bg-indigo-500/5 text-hub-muted border border-indigo-500/10">
        ✦ {t.footerPassion}
      </span>
    </footer>
  );
};

export default FooterSection;
