import { useLanguage } from '@/context/LanguageContext';

const FooterSection = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-white/10 py-16 text-center">
      <div className="h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent mb-12" />
      <div className="text-2xl font-extrabold text-hub-text mb-3">👋 Sergiu Murgescu</div>
      <p className="text-sm text-hub-muted mb-2">{t.footerText}</p>
      <p className="text-sm text-hub-muted mb-6">{t.footerClick}</p>
      <span className="inline-block text-xs px-4 py-2 rounded-full bg-indigo-500/5 text-hub-muted border border-indigo-500/10">
        ✦ {t.footerPassion}
      </span>
    </footer>
  );
};

export default FooterSection;
