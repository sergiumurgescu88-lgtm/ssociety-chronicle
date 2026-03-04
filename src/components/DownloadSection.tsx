import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const DownloadSection = () => {
  const { t } = useLanguage();

  const pdfs = [
    { badge: 'RO', badgeClass: 'bg-gradient-to-r from-amber-500 to-orange-500', title: 'Prezentare MBEuroparts (Română)', href: '/MBEuroparts-RO.pdf' },
    { badge: 'EN', badgeClass: 'bg-gradient-to-r from-indigo-500 to-blue-500', title: 'MBEuroparts Presentation (English)', href: '/MBEuroparts-EN.pdf' },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      className="max-w-6xl mx-auto px-3 sm:px-4 py-8 sm:py-10 lg:py-14"
    >
      <div className="relative bg-hub-section/50 border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-12 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-500/5 rounded-full blur-[100px]" />
        <div className="absolute -bottom-40 -left-40 w-60 h-60 bg-cyan-500/5 rounded-full blur-[100px]" />

        <div className="relative grid lg:grid-cols-2 gap-6 sm:gap-10 items-center">
          <div>
            <span className="text-[11px] sm:text-xs lg:text-sm px-3 py-1.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 font-medium">
              {t.pdfResources}
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-extrabold text-hub-text mt-3 sm:mt-4 mb-2 sm:mb-3 leading-tight">{t.downloadPdf}</h2>
            <p className="text-hub-muted text-[13px] sm:text-base lg:text-lg leading-relaxed">{t.pdfDescription}</p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-5">
            {pdfs.map((pdf, i) => (
              <motion.a
                key={i}
                href={pdf.href}
                download
                whileHover={{ y: -8, scale: 1.02 }}
                className="block p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl bg-hub-card border border-white/10 hover:border-indigo-500/30 transition-colors group"
              >
                <span className={`inline-block text-[10px] sm:text-xs lg:text-sm px-2 py-0.5 rounded text-white font-bold mb-2 sm:mb-3 ${pdf.badgeClass}`}>{pdf.badge}</span>
                <Download className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-hub-muted group-hover:text-indigo-400 transition-colors mb-2 sm:mb-3" />
                <h3 className="font-bold text-hub-text text-xs sm:text-sm lg:text-base mb-1 leading-snug">{pdf.title}</h3>
                <span className="text-[11px] sm:text-xs lg:text-sm text-indigo-400">{t.downloadNow} →</span>
                <div className="text-[10px] sm:text-xs lg:text-sm text-hub-muted mt-1.5 sm:mt-2">PDF · 2.4 MB</div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default DownloadSection;
