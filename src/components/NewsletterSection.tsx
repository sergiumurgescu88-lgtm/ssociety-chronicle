import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Mail, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const NewsletterSection = () => {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1500);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      className="max-w-4xl mx-auto px-3 sm:px-4 py-12 sm:py-16"
    >
      <div className="relative bg-gradient-to-br from-indigo-600/20 to-cyan-600/20 border border-indigo-500/30 rounded-2xl sm:rounded-[2.5rem] p-6 sm:p-8 lg:p-12 overflow-hidden text-center">
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-indigo-500/10 rounded-full blur-[80px]" />
        <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-cyan-500/10 rounded-full blur-[80px]" />

        <div className="relative">
          <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center mb-5 sm:mb-6">
            <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 text-indigo-400" />
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-hub-text mb-2 sm:mb-3 leading-tight">{t.freeAccessTitle}</h2>
          <p className="text-hub-muted text-[13px] sm:text-base mb-6 sm:mb-8 max-w-lg mx-auto leading-relaxed">{t.freeAccessSubtitle}</p>

          {!success ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-hub-muted" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.subscribePlaceholder}
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-hub-bg border border-white/10 text-hub-text placeholder:text-hub-muted focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-3 rounded-xl bg-white text-black font-semibold hover:bg-indigo-400 hover:text-white transition-colors text-sm disabled:opacity-50 active:scale-[0.98]"
              >
                {loading ? '...' : t.subscribeButton}
              </button>
            </form>
          ) : (
            <div className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 max-w-md mx-auto">
              <CheckCircle2 className="w-5 h-5" />
              <span className="font-medium text-sm sm:text-base">{t.successSubscribe}</span>
            </div>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default NewsletterSection;
