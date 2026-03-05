import { motion } from 'framer-motion';
import { ExternalLink, Building2, Users, BarChart3, FileText, Calendar, Brain, Globe, MessageSquare, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const i18n: Record<string, {
  badge: string; desc: string; cta: string; ctaDesc: string;
  stats: { value: string; label: string }[];
  features: { icon: any; title: string; desc: string }[];
}> = {
  ro: {
    badge: 'Platformă Profesională',
    desc: 'Platforma completă de management imobiliar — CRM, proprietăți, publicare multi-portal, matching AI, contracte, vizionări și analytics — totul într-un singur dashboard profesional.',
    cta: 'Deschide CRM Imobiliar PRO',
    ctaDesc: 'Dashboard complet pentru agenții imobiliare profesioniste',
    stats: [
      { value: '47+', label: 'Proprietăți gestionate' },
      { value: '83+', label: 'Leads active' },
      { value: '5+', label: 'Portale integrate' },
      { value: '18K€', label: 'Comisioane / lună' },
    ],
    features: [
      { icon: Building2, title: 'Gestiune Proprietăți', desc: 'Adaugă, editează și monitorizează toate proprietățile din portofoliu cu detalii complete, fotografii și status în timp real.' },
      { icon: Users, title: 'Clienți & Leads CRM', desc: 'Management complet al clienților și lead-urilor. Tracking automat, scoring AI și pipeline vizual.' },
      { icon: Brain, title: 'Matching AI Inteligent', desc: 'Algoritm AI care identifică potriviri între cereri și proprietăți. Notificări instant cu match-uri.' },
      { icon: Globe, title: 'Publicare Multi-Portal', desc: 'Publică anunțuri pe OLX, Storia, Imobiliare.ro, Publi24 și site-ul propriu — cu un click.' },
      { icon: FileText, title: 'Generare Contracte', desc: 'Generează contracte automat, pre-completate cu datele din CRM. Template-uri conforme legislației.' },
      { icon: Calendar, title: 'Calendar Vizionări', desc: 'Programează vizionări cu calendar integrat. Notificări automate și follow-up post-vizionare.' },
      { icon: BarChart3, title: 'Analytics & Rapoarte', desc: 'Dashboard cu comisioane lunare, rate de conversie, performanță pe zone, timp mediu de vânzare.' },
      { icon: MessageSquare, title: 'Campanii WhatsApp & Email', desc: 'Campanii personalizate prin WhatsApp și email. Segmentare automată și tracking răspunsuri.' },
      { icon: TrendingUp, title: 'Pipeline & Comisioane', desc: 'Pipeline de la lead la tranzacție. Tracking comisioane, split-uri și raportare financiară.' },
    ],
  },
  en: {
    badge: 'Professional Platform',
    desc: 'Complete real estate management platform — CRM, properties, multi-portal publishing, AI matching, contracts, viewings and analytics — all in one professional dashboard.',
    cta: 'Open Real Estate CRM PRO',
    ctaDesc: 'Complete dashboard for professional real estate agencies',
    stats: [
      { value: '47+', label: 'Properties managed' },
      { value: '83+', label: 'Active leads' },
      { value: '5+', label: 'Integrated portals' },
      { value: '18K€', label: 'Commissions / month' },
    ],
    features: [
      { icon: Building2, title: 'Property Management', desc: 'Add, edit and monitor all properties in the portfolio with full details, photos and real-time status.' },
      { icon: Users, title: 'Clients & CRM Leads', desc: 'Complete client and lead management. Automatic tracking, AI scoring and visual pipeline.' },
      { icon: Brain, title: 'Smart AI Matching', desc: 'AI algorithm that identifies matches between requests and properties. Instant notifications.' },
      { icon: Globe, title: 'Multi-Portal Publishing', desc: 'Publish listings on OLX, Storia, Imobiliare.ro, Publi24 and your own site — with one click.' },
      { icon: FileText, title: 'Contract Generation', desc: 'Generate contracts automatically, pre-filled with CRM data. Templates compliant with legislation.' },
      { icon: Calendar, title: 'Viewing Calendar', desc: 'Schedule viewings with integrated calendar. Automatic notifications and post-viewing follow-up.' },
      { icon: BarChart3, title: 'Analytics & Reports', desc: 'Dashboard with monthly commissions, conversion rates, performance by area, average sale time.' },
      { icon: MessageSquare, title: 'WhatsApp & Email Campaigns', desc: 'Personalized campaigns via WhatsApp and email. Automatic segmentation and response tracking.' },
      { icon: TrendingUp, title: 'Pipeline & Commissions', desc: 'Pipeline from lead to completed transaction. Commission tracking, splits and financial reporting.' },
    ],
  },
  es: {
    badge: 'Plataforma Profesional',
    desc: 'Plataforma completa de gestión inmobiliaria — CRM, propiedades, publicación multi-portal, matching IA, contratos, visitas y analíticas — todo en un panel profesional.',
    cta: 'Abrir CRM Inmobiliario PRO',
    ctaDesc: 'Panel completo para agencias inmobiliarias profesionales',
    stats: [
      { value: '47+', label: 'Propiedades gestionadas' },
      { value: '83+', label: 'Leads activos' },
      { value: '5+', label: 'Portales integrados' },
      { value: '18K€', label: 'Comisiones / mes' },
    ],
    features: [
      { icon: Building2, title: 'Gestión de Propiedades', desc: 'Agrega, edita y monitorea todas las propiedades con detalles, fotos y estado en tiempo real.' },
      { icon: Users, title: 'Clientes & Leads CRM', desc: 'Gestión completa de clientes y leads. Seguimiento automático, scoring IA y pipeline visual.' },
      { icon: Brain, title: 'Matching IA Inteligente', desc: 'Algoritmo IA que identifica coincidencias entre solicitudes y propiedades. Notificaciones instantáneas.' },
      { icon: Globe, title: 'Publicación Multi-Portal', desc: 'Publica anuncios en múltiples portales y tu propio sitio — con un clic.' },
      { icon: FileText, title: 'Generación de Contratos', desc: 'Genera contratos automáticamente con datos del CRM. Plantillas conformes a la legislación.' },
      { icon: Calendar, title: 'Calendario de Visitas', desc: 'Programa visitas con calendario integrado. Notificaciones automáticas y seguimiento.' },
      { icon: BarChart3, title: 'Analíticas & Reportes', desc: 'Panel con comisiones mensuales, tasas de conversión, rendimiento por zona.' },
      { icon: MessageSquare, title: 'Campañas WhatsApp & Email', desc: 'Campañas personalizadas por WhatsApp y email. Segmentación automática.' },
      { icon: TrendingUp, title: 'Pipeline & Comisiones', desc: 'Pipeline de lead a transacción. Seguimiento de comisiones y reportes financieros.' },
    ],
  },
  fr: {
    badge: 'Plateforme Professionnelle',
    desc: 'Plateforme complète de gestion immobilière — CRM, propriétés, publication multi-portail, matching IA, contrats, visites et analytics — tout en un tableau de bord professionnel.',
    cta: 'Ouvrir CRM Immobilier PRO',
    ctaDesc: 'Tableau de bord complet pour agences immobilières professionnelles',
    stats: [
      { value: '47+', label: 'Propriétés gérées' },
      { value: '83+', label: 'Leads actifs' },
      { value: '5+', label: 'Portails intégrés' },
      { value: '18K€', label: 'Commissions / mois' },
    ],
    features: [
      { icon: Building2, title: 'Gestion des Propriétés', desc: 'Ajoutez, éditez et surveillez toutes les propriétés avec détails, photos et statut en temps réel.' },
      { icon: Users, title: 'Clients & Leads CRM', desc: 'Gestion complète des clients et leads. Suivi automatique, scoring IA et pipeline visuel.' },
      { icon: Brain, title: 'Matching IA Intelligent', desc: 'Algorithme IA identifiant les correspondances entre demandes et propriétés. Notifications instantanées.' },
      { icon: Globe, title: 'Publication Multi-Portail', desc: 'Publiez des annonces sur plusieurs portails et votre propre site — en un clic.' },
      { icon: FileText, title: 'Génération de Contrats', desc: 'Générez des contrats automatiquement avec les données CRM. Modèles conformes à la législation.' },
      { icon: Calendar, title: 'Calendrier des Visites', desc: 'Planifiez des visites avec calendrier intégré. Notifications automatiques et suivi.' },
      { icon: BarChart3, title: 'Analytics & Rapports', desc: 'Tableau de bord avec commissions mensuelles, taux de conversion, performance par zone.' },
      { icon: MessageSquare, title: 'Campagnes WhatsApp & Email', desc: 'Campagnes personnalisées par WhatsApp et email. Segmentation automatique.' },
      { icon: TrendingUp, title: 'Pipeline & Commissions', desc: 'Pipeline du lead à la transaction. Suivi des commissions et rapports financiers.' },
    ],
  },
  it: {
    badge: 'Piattaforma Professionale',
    desc: 'Piattaforma completa di gestione immobiliare — CRM, proprietà, pubblicazione multi-portale, matching IA, contratti, visite e analytics — tutto in un unico dashboard professionale.',
    cta: 'Apri CRM Immobiliare PRO',
    ctaDesc: 'Dashboard completo per agenzie immobiliari professionali',
    stats: [
      { value: '47+', label: 'Proprietà gestite' },
      { value: '83+', label: 'Lead attivi' },
      { value: '5+', label: 'Portali integrati' },
      { value: '18K€', label: 'Commissioni / mese' },
    ],
    features: [
      { icon: Building2, title: 'Gestione Proprietà', desc: 'Aggiungi, modifica e monitora tutte le proprietà con dettagli, foto e stato in tempo reale.' },
      { icon: Users, title: 'Clienti & Lead CRM', desc: 'Gestione completa clienti e lead. Tracking automatico, scoring IA e pipeline visuale.' },
      { icon: Brain, title: 'Matching IA Intelligente', desc: 'Algoritmo IA che identifica corrispondenze tra richieste e proprietà. Notifiche istantanee.' },
      { icon: Globe, title: 'Pubblicazione Multi-Portale', desc: 'Pubblica annunci su più portali e il tuo sito — con un clic.' },
      { icon: FileText, title: 'Generazione Contratti', desc: 'Genera contratti automaticamente con i dati del CRM. Template conformi alla legislazione.' },
      { icon: Calendar, title: 'Calendario Visite', desc: 'Programma visite con calendario integrato. Notifiche automatiche e follow-up.' },
      { icon: BarChart3, title: 'Analytics & Report', desc: 'Dashboard con commissioni mensili, tassi di conversione, performance per zona.' },
      { icon: MessageSquare, title: 'Campagne WhatsApp & Email', desc: 'Campagne personalizzate via WhatsApp ed email. Segmentazione automatica.' },
      { icon: TrendingUp, title: 'Pipeline & Commissioni', desc: 'Pipeline dal lead alla transazione. Tracking commissioni e reportistica finanziaria.' },
    ],
  },
  de: {
    badge: 'Professionelle Plattform',
    desc: 'Komplette Immobilienverwaltungsplattform — CRM, Immobilien, Multi-Portal-Veröffentlichung, KI-Matching, Verträge, Besichtigungen und Analytics — alles in einem professionellen Dashboard.',
    cta: 'Immobilien-CRM PRO öffnen',
    ctaDesc: 'Komplettes Dashboard für professionelle Immobilienagenturen',
    stats: [
      { value: '47+', label: 'Verwaltete Immobilien' },
      { value: '83+', label: 'Aktive Leads' },
      { value: '5+', label: 'Integrierte Portale' },
      { value: '18K€', label: 'Provisionen / Monat' },
    ],
    features: [
      { icon: Building2, title: 'Immobilienverwaltung', desc: 'Alle Immobilien hinzufügen, bearbeiten und überwachen mit Details, Fotos und Echtzeitstatus.' },
      { icon: Users, title: 'Kunden & CRM Leads', desc: 'Komplettes Kunden- und Lead-Management. Automatisches Tracking, KI-Scoring und visuelles Pipeline.' },
      { icon: Brain, title: 'Intelligentes KI-Matching', desc: 'KI-Algorithmus zur Identifizierung von Übereinstimmungen. Sofortige Benachrichtigungen.' },
      { icon: Globe, title: 'Multi-Portal-Veröffentlichung', desc: 'Anzeigen auf mehreren Portalen und eigener Website veröffentlichen — mit einem Klick.' },
      { icon: FileText, title: 'Vertragserstellung', desc: 'Verträge automatisch mit CRM-Daten erstellen. Gesetzeskonforme Vorlagen.' },
      { icon: Calendar, title: 'Besichtigungskalender', desc: 'Besichtigungen mit integriertem Kalender planen. Automatische Benachrichtigungen und Follow-up.' },
      { icon: BarChart3, title: 'Analytics & Berichte', desc: 'Dashboard mit monatlichen Provisionen, Konversionsraten, Leistung nach Gebiet.' },
      { icon: MessageSquare, title: 'WhatsApp & Email Kampagnen', desc: 'Personalisierte Kampagnen über WhatsApp und Email. Automatische Segmentierung.' },
      { icon: TrendingUp, title: 'Pipeline & Provisionen', desc: 'Pipeline vom Lead bis zur Transaktion. Provisionsverfolgung und Finanzberichte.' },
    ],
  },
  ar: {
    badge: 'منصة احترافية',
    desc: 'منصة إدارة عقارية متكاملة — CRM، عقارات، نشر متعدد البوابات، مطابقة ذكاء اصطناعي، عقود، معاينات وتحليلات — كل شيء في لوحة تحكم احترافية واحدة.',
    cta: 'افتح CRM العقاري PRO',
    ctaDesc: 'لوحة تحكم كاملة للوكالات العقارية المحترفة',
    stats: [
      { value: '47+', label: 'عقارات مُدارة' },
      { value: '83+', label: 'عملاء محتملون نشطون' },
      { value: '5+', label: 'بوابات متكاملة' },
      { value: '18K€', label: 'عمولات / شهر' },
    ],
    features: [
      { icon: Building2, title: 'إدارة العقارات', desc: 'أضف وعدّل وراقب جميع العقارات بتفاصيل كاملة وصور وحالة في الوقت الفعلي.' },
      { icon: Users, title: 'عملاء و CRM', desc: 'إدارة كاملة للعملاء والعملاء المحتملين. تتبع تلقائي وتسجيل ذكاء اصطناعي.' },
      { icon: Brain, title: 'مطابقة ذكية بالذكاء الاصطناعي', desc: 'خوارزمية ذكاء اصطناعي تحدد التطابقات بين الطلبات والعقارات. إشعارات فورية.' },
      { icon: Globe, title: 'نشر متعدد البوابات', desc: 'انشر إعلانات على بوابات متعددة وموقعك الخاص — بنقرة واحدة.' },
      { icon: FileText, title: 'إنشاء العقود', desc: 'أنشئ عقودًا تلقائيًا مع بيانات CRM. قوالب متوافقة مع التشريعات.' },
      { icon: Calendar, title: 'تقويم المعاينات', desc: 'جدول المعاينات مع تقويم متكامل. إشعارات تلقائية ومتابعة.' },
      { icon: BarChart3, title: 'تحليلات وتقارير', desc: 'لوحة تحكم بالعمولات الشهرية ومعدلات التحويل والأداء حسب المنطقة.' },
      { icon: MessageSquare, title: 'حملات واتساب وبريد إلكتروني', desc: 'حملات مخصصة عبر واتساب والبريد الإلكتروني. تقسيم تلقائي.' },
      { icon: TrendingUp, title: 'Pipeline والعمولات', desc: 'Pipeline من العميل المحتمل إلى الصفقة. تتبع العمولات والتقارير المالية.' },
    ],
  },
};

const SocietyHubStoreSection = () => {
  const { language } = useLanguage();
  const c = i18n[language] || i18n.en;

  return (
    <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-amber-500/8 rounded-full blur-[160px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-6">
            <Building2 className="w-4 h-4" />
            {c.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-black text-hub-text mb-4 lg:mb-6 leading-tight">
            SocietyHUB{' '}
            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent">CRM Imobiliar PRO</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-2xl text-hub-secondary max-w-4xl mx-auto leading-relaxed">{c.desc}</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="relative mb-16 lg:mb-20">
          <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden border border-amber-500/20 shadow-2xl shadow-amber-500/10">
            <div className="bg-hub-card/90 backdrop-blur-sm border-b border-white/10 px-4 py-3 flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <div className="flex-1 bg-white/5 rounded-lg px-3 py-1.5 text-xs sm:text-sm text-hub-muted font-mono">ssocietyhub.store</div>
            </div>
            <div className="aspect-[16/9] sm:aspect-[16/8] lg:aspect-[16/9]">
              <iframe src="https://ssocietyhub.store/" className="w-full h-full border-0" title="SocietyHUB CRM Imobiliar PRO" loading="lazy" />
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-16 lg:mb-20">
          {c.stats.map((stat, i) => (
            <div key={i} className="text-center p-4 sm:p-5 lg:p-6 rounded-xl lg:rounded-2xl bg-hub-card border border-amber-500/10 hover:border-amber-500/30 transition-colors">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">{stat.value}</div>
              <div className="text-xs sm:text-sm lg:text-base text-hub-muted mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 mb-12 lg:mb-16">
          {c.features.map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              className="p-5 sm:p-6 lg:p-7 rounded-xl lg:rounded-2xl bg-hub-card border border-white/10 hover:border-amber-500/20 transition-colors group">
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4 group-hover:bg-amber-500/20 transition-colors">
                <f.icon className="w-5 h-5 lg:w-6 lg:h-6 text-amber-400" />
              </div>
              <h3 className="text-base lg:text-lg font-bold text-hub-text mb-2">{f.title}</h3>
              <p className="text-sm lg:text-base text-hub-muted leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
          <a href="https://ssocietyhub.store/" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 sm:px-10 lg:px-12 py-4 lg:py-5 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-base sm:text-lg lg:text-xl hover:opacity-90 transition-all active:scale-[0.98] shadow-lg shadow-amber-500/25">
            <ExternalLink className="w-5 h-5 lg:w-6 lg:h-6" />
            {c.cta}
          </a>
          <p className="text-sm lg:text-base text-hub-muted mt-4">{c.ctaDesc}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default SocietyHubStoreSection;
