import { motion } from 'framer-motion';
import { ExternalLink, Building2, Users, BarChart3, FileText, Calendar, Brain, Globe, MessageSquare, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const features = [
  { icon: Building2, title: 'Gestiune Proprietăți', desc: 'Adaugă, editează și monitorizează toate proprietățile din portofoliu — apartamente, case, birouri, terenuri — cu detalii complete, fotografii și status actualizat în timp real.' },
  { icon: Users, title: 'Clienți & Leads CRM', desc: 'Sistem complet de management al clienților și lead-urilor. Tracking automat al interacțiunilor, scoring AI, și pipeline vizual pentru fiecare oportunitate.' },
  { icon: Brain, title: 'Matching AI Inteligent', desc: 'Algoritm AI care identifică automat potriviri între cereri și proprietăți din portofoliu. Primești notificări instant cu match-uri și potențial de comision estimat.' },
  { icon: Globe, title: 'Publicare Multi-Portal', desc: 'Publică anunțuri simultan pe OLX, Storia, Imobiliare.ro, Publi24 și site-ul propriu — cu un singur click. Sincronizare automată a modificărilor.' },
  { icon: FileText, title: 'Generare Contracte', desc: 'Generează contracte de intermediere, pre-contracte și acte adiționale automat, pre-completate cu datele din CRM. Template-uri conforme legislației.' },
  { icon: Calendar, title: 'Calendar Vizionări', desc: 'Programează și gestionează vizionări cu calendar integrat. Notificări automate pentru clienți, confirmări și follow-up post-vizionare.' },
  { icon: BarChart3, title: 'Analytics & Rapoarte', desc: 'Dashboard cu metrici cheie: comisioane lunare, rate de conversie, performanță pe zone, timp mediu de vânzare. Export rapoarte pentru management.' },
  { icon: MessageSquare, title: 'Campanii WhatsApp & Email', desc: 'Trimite campanii personalizate prin WhatsApp și email direct din platformă. Segmentare automată și tracking al răspunsurilor.' },
  { icon: TrendingUp, title: 'Pipeline & Comisioane', desc: 'Vizualizare pipeline completă de la lead la tranzacție finalizată. Tracking automat al comisioanelor, split-uri între agenți și raportare financiară.' },
];

const SocietyHubStoreSection = () => {
  const { language } = useLanguage();

  return (
    <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-amber-500/8 rounded-full blur-[160px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-6">
            <Building2 className="w-4 h-4" />
            {language === 'ro' ? 'Platformă Profesională' : 'Professional Platform'}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-black text-hub-text mb-4 lg:mb-6 leading-tight">
            SocietyHUB{' '}
            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent">
              CRM Imobiliar PRO
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-2xl text-hub-secondary max-w-4xl mx-auto leading-relaxed">
            {language === 'ro'
              ? 'Platforma completă de management imobiliar — CRM, proprietăți, publicare multi-portal, matching AI, contracte, vizionări și analytics — totul într-un singur dashboard profesional.'
              : 'Complete real estate management platform — CRM, properties, multi-portal publishing, AI matching, contracts, viewings and analytics — all in one professional dashboard.'}
          </p>
        </motion.div>

        {/* Screenshot showcase */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative mb-16 lg:mb-20"
        >
          <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden border border-amber-500/20 shadow-2xl shadow-amber-500/10">
            {/* Browser bar */}
            <div className="bg-hub-card/90 backdrop-blur-sm border-b border-white/10 px-4 py-3 flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <div className="flex-1 bg-white/5 rounded-lg px-3 py-1.5 text-xs sm:text-sm text-hub-muted font-mono">
                ssocietyhub.store
              </div>
            </div>
            {/* iframe */}
            <div className="aspect-[16/9] sm:aspect-[16/8] lg:aspect-[16/9]">
              <iframe
                src="https://ssocietyhub.store/"
                className="w-full h-full border-0"
                title="SocietyHUB CRM Imobiliar PRO"
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-16 lg:mb-20"
        >
          {[
            { value: '47+', label: 'Proprietăți gestionate' },
            { value: '83+', label: 'Leads active' },
            { value: '5+', label: 'Portale integrate' },
            { value: '18K€', label: 'Comisioane / lună' },
          ].map((stat, i) => (
            <div key={i} className="text-center p-4 sm:p-5 lg:p-6 rounded-xl lg:rounded-2xl bg-hub-card border border-amber-500/10 hover:border-amber-500/30 transition-colors">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">{stat.value}</div>
              <div className="text-xs sm:text-sm lg:text-base text-hub-muted mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Features grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 mb-12 lg:mb-16"
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-5 sm:p-6 lg:p-7 rounded-xl lg:rounded-2xl bg-hub-card border border-white/10 hover:border-amber-500/20 transition-colors group"
            >
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4 group-hover:bg-amber-500/20 transition-colors">
                <f.icon className="w-5 h-5 lg:w-6 lg:h-6 text-amber-400" />
              </div>
              <h3 className="text-base lg:text-lg font-bold text-hub-text mb-2">{f.title}</h3>
              <p className="text-sm lg:text-base text-hub-muted leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="https://ssocietyhub.store/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 sm:px-10 lg:px-12 py-4 lg:py-5 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-base sm:text-lg lg:text-xl hover:opacity-90 transition-all active:scale-[0.98] shadow-lg shadow-amber-500/25"
          >
            <ExternalLink className="w-5 h-5 lg:w-6 lg:h-6" />
            {language === 'ro' ? 'Deschide CRM Imobiliar PRO' : 'Open Real Estate CRM PRO'}
          </a>
          <p className="text-sm lg:text-base text-hub-muted mt-4">
            {language === 'ro' ? 'Dashboard complet pentru agenții imobiliare profesioniste' : 'Complete dashboard for professional real estate agencies'}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SocietyHubStoreSection;
