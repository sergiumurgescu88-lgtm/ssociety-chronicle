import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative px-4 pt-20 pb-16 text-center max-w-5xl mx-auto">
      <div className="absolute top-6 right-6">
        <LanguageSwitcher />
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-sm text-indigo-400 mb-6">
          <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
          LIVE — 2026
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }}
        className="text-3xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-500 via-cyan-400 to-indigo-500 bg-clip-text text-transparent mb-6"
      >
        {t.heroTitle}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }}
        className="text-lg text-hub-secondary max-w-2xl mx-auto mb-4"
      >
        {t.heroSubtitle}
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.5 }}
        className="text-hub-muted max-w-xl mx-auto mb-8"
      >
        {t.heroDescription}
      </motion.p>

      <div className="h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />
    </section>
  );
};

export default HeroSection;
