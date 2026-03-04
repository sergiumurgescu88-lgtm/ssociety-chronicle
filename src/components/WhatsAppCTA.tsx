import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { User, ShieldCheck } from 'lucide-react';

const WhatsAppCTA = () => {
  const { t } = useLanguage();

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      className="max-w-2xl mx-auto px-3 sm:px-4 py-8 sm:py-10"
    >
      <div className="relative bg-hub-card border border-emerald-500/20 rounded-2xl p-6 sm:p-8 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#25D366]/10 rounded-full blur-[60px]" />
        <div className="relative">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-3">
              <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8 text-[#25D366] fill-current shrink-0">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.386 0-4.592-.842-6.313-2.244l-.44-.358-3.265 1.094 1.094-3.265-.358-.44A9.96 9.96 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/>
              </svg>
              <h3 className="text-base sm:text-lg font-bold text-hub-text">{t.whatsappHeadline}</h3>
            </div>
            <span className="flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full bg-white/5 text-hub-muted border border-white/10 w-fit">
              <User className="w-3 h-3" />
              <ShieldCheck className="w-3 h-3" />
              {t.humanBot}
            </span>
          </div>
          <p className="text-sm leading-relaxed text-hub-muted mb-3">{t.whatsappBody}</p>
          <p className="text-xs text-[#25D366] mb-5 sm:mb-6 flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#25D366]" />{t.whatsappTagline}</p>
          <a
            href="https://wa.me/40768676141"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold transition-colors text-base active:scale-[0.98]"
          >
            {t.whatsappButton}
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default WhatsAppCTA;
