import { motion } from 'framer-motion';
import { Zap, Bot } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const WildBotSection = () => {
  const { t } = useLanguage();

  const stats = [
    { value: '2000+', label: t.wildBotStatMessages, icon: '📨', color: 'text-indigo-400', bg: 'bg-indigo-500/10' },
    { value: '0%', label: t.wildBotStatDetection, icon: '🛡️', color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
    { value: '~95%', label: t.wildBotStatDelivery, icon: '✅', color: 'text-cyan-400', bg: 'bg-cyan-500/10' },
    { value: '0€', label: t.wildBotStatSubscription, icon: '💰', color: 'text-amber-400', bg: 'bg-amber-500/10' },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      className="max-w-6xl mx-auto px-3 sm:px-4 py-8 sm:py-10"
    >
      <div className="relative bg-hub-section border border-white/10 rounded-2xl sm:rounded-[2.5rem] p-5 sm:p-8 lg:p-12 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-500/5 rounded-full blur-[100px]" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-500/5 rounded-full blur-[100px]" />

        <div className="relative grid lg:grid-cols-2 gap-8 sm:gap-10">
          {/* LEFT */}
          <div>
            <span className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-bold px-3 py-1.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-5 sm:mb-6">
              <Zap className="w-3 h-3 sm:w-3.5 sm:h-3.5 animate-pulse" /> {t.wildBotBadge}
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-extrabold mb-2 leading-tight">
              <span className="text-hub-text">{t.wildBotTitle1}</span>{' '}
              <span className="bg-gradient-to-r from-indigo-500 via-cyan-400 to-emerald-500 bg-clip-text text-transparent">{t.wildBotTitle2}</span>
            </h2>
            <p className="text-hub-muted text-[13px] sm:text-base leading-relaxed mb-6 sm:mb-8">{t.wildBotSubtitle}</p>

            <div className="aspect-video rounded-xl sm:rounded-2xl overflow-hidden bg-black/50 border border-white/5 mb-5 sm:mb-6">
              <video className="w-full h-full object-cover" controls muted loop playsInline>
                <source src="/videos/wildbot-demo.mp4" type="video/mp4" />
              </video>
            </div>

            <a
              href="https://wild-bot-rho.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-5 sm:px-6 py-3 rounded-xl bg-hub-card border border-white/10 hover:border-indigo-500/30 transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#25D366]">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              </svg>
              <span className="font-semibold text-hub-text text-sm sm:text-base">{t.wildBotButton}</span>
            </a>
          </div>

          {/* RIGHT */}
          <div className="space-y-3 sm:space-y-4">
            <div className="grid grid-cols-2 gap-2 sm:gap-4">
              {stats.map((s, i) => (
                <div key={i} className="p-3.5 sm:p-5 rounded-xl bg-hub-card border border-white/10">
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full ${s.bg} flex items-center justify-center text-lg sm:text-xl mb-2 sm:mb-3`}>{s.icon}</div>
                  <div className={`text-xl sm:text-2xl font-extrabold ${s.color}`}>{s.value}</div>
                  <div className="text-[10px] sm:text-xs text-hub-muted mt-1 leading-relaxed">{s.label}</div>
                </div>
              ))}
            </div>
            <div className="p-4 sm:p-5 rounded-xl bg-hub-card border border-white/10">
              <div className="flex items-center gap-3 mb-2">
                <Bot className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-400" />
                <span className="font-bold text-hub-text text-sm sm:text-base">{t.wildBotBehaviorBadge}</span>
              </div>
              <p className="text-[13px] sm:text-sm text-hub-muted leading-relaxed">{t.wildBotBehaviorDesc}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default WildBotSection;
