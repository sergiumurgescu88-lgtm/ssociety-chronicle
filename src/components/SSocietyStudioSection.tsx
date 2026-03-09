import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const i18n: Record<string, {
  badge: string; title: string; desc: string; cta: string;
  guideTitle: string; guide1: string; guide2: string; guide3: string;
  stats: { emoji: string; value: string; label: string }[];
  features: { emoji: string; title: string; desc: string }[];
}> = {
  ro: {
    badge: 'SSociety Studio — 6 Agenți AI',
    title: 'Armata ta digitală de agenți AI care crește business-ul',
    desc: '6 agenți AI specializați — CEO, CMO, CRO, CTO, CSO, CFO — care lucrează 24/7 pe marketing, vânzări, CRM și conținut. Tu decizi strategia, ei execută.',
    cta: '⚡ Începe gratuit →',
    guideTitle: 'Ce include platforma',
    guide1: '6 Agenți AI: CEO, CMO, CRO, CTO, CSO, CFO — fiecare cu rol și autonomie configurabilă, lucrând ca o echipă coordonată',
    guide2: 'CRM Neural: Scorizare lead-uri cu AI, pipeline vizual, interacțiuni automate — contactele tale devin inteligente',
    guide3: 'Content Factory: Generare conținut multi-platformă cu AI — LinkedIn, Instagram, Blog cu variații și hashtag-uri automate',
    stats: [
      { emoji: '🤖', value: '6', label: 'Agenți AI activi' },
      { emoji: '👥', value: '500+', label: 'Utilizatori activi' },
      { emoji: '📈', value: '3x', label: 'Creștere medie ROI' },
      { emoji: '⏱️', value: '20h', label: 'Economisite / săpt.' },
    ],
    features: [
      { emoji: '🤖', title: '6 Agenți AI Specializați', desc: 'CEO, CMO, CRO, CTO, CSO, CFO — fiecare cu rol și autonomie configurabilă.' },
      { emoji: '💬', title: 'Command Chat', desc: 'Chat centralizat cu toți agenții — comenzi în limbaj natural, acțiuni concrete.' },
      { emoji: '📊', title: 'CRM Neural', desc: 'Scorizare lead-uri cu AI, pipeline vizual și interacțiuni automate.' },
      { emoji: '📝', title: 'Content Factory', desc: 'Conținut multi-platformă: LinkedIn, Instagram, Blog cu AI.' },
      { emoji: '⚙️', title: 'Workflow Engine', desc: 'Automatizări vizuale: trigger → condiție → acțiune cu template-uri.' },
      { emoji: '📈', title: 'Dashboard Real-Time', desc: 'KPI-uri live, revenue charts, health score și activitate agenți.' },
      { emoji: '💰', title: 'Revenue Tracking', desc: 'Monitorizare €24.5K+ revenue cu trend-uri și predicții AI.' },
      { emoji: '🎯', title: 'Lead Management', desc: '342+ lead-uri gestionate cu scorizare inteligentă și follow-up automat.' },
      { emoji: '✅', title: 'Task Automation', desc: '1,847+ tasks automatizate cu +31% eficiență lunară.' },
    ],
  },
  en: {
    badge: 'SSociety Studio — 6 AI Agents',
    title: 'Your digital army of AI agents growing your business',
    desc: '6 specialized AI agents — CEO, CMO, CRO, CTO, CSO, CFO — working 24/7 on marketing, sales, CRM and content. You set the strategy, they execute.',
    cta: '⚡ Start free →',
    guideTitle: 'What the platform includes',
    guide1: '6 AI Agents: CEO, CMO, CRO, CTO, CSO, CFO — each with configurable role and autonomy, working as a coordinated team',
    guide2: 'Neural CRM: AI lead scoring, visual pipeline, automated interactions — your contacts become intelligent',
    guide3: 'Content Factory: Multi-platform AI content generation — LinkedIn, Instagram, Blog with auto variations and hashtags',
    stats: [
      { emoji: '🤖', value: '6', label: 'Active AI agents' },
      { emoji: '👥', value: '500+', label: 'Active users' },
      { emoji: '📈', value: '3x', label: 'Average ROI growth' },
      { emoji: '⏱️', value: '20h', label: 'Saved / week' },
    ],
    features: [
      { emoji: '🤖', title: '6 Specialized AI Agents', desc: 'CEO, CMO, CRO, CTO, CSO, CFO — each with configurable role and autonomy.' },
      { emoji: '💬', title: 'Command Chat', desc: 'Centralized chat with all agents — natural language commands, concrete actions.' },
      { emoji: '📊', title: 'Neural CRM', desc: 'AI lead scoring, visual pipeline and automated interactions.' },
      { emoji: '📝', title: 'Content Factory', desc: 'Multi-platform content: LinkedIn, Instagram, Blog with AI.' },
      { emoji: '⚙️', title: 'Workflow Engine', desc: 'Visual automations: trigger → condition → action with templates.' },
      { emoji: '📈', title: 'Real-Time Dashboard', desc: 'Live KPIs, revenue charts, health score and agent activity.' },
      { emoji: '💰', title: 'Revenue Tracking', desc: '€24.5K+ revenue monitoring with AI trends and predictions.' },
      { emoji: '🎯', title: 'Lead Management', desc: '342+ leads managed with smart scoring and auto follow-up.' },
      { emoji: '✅', title: 'Task Automation', desc: '1,847+ automated tasks with +31% monthly efficiency.' },
    ],
  },
  es: {
    badge: 'SSociety Studio — 6 Agentes AI',
    title: 'Tu ejército digital de agentes AI que crece tu negocio',
    desc: '6 agentes AI especializados — CEO, CMO, CRO, CTO, CSO, CFO — trabajando 24/7 en marketing, ventas y contenido.',
    cta: '⚡ Comienza gratis →',
    guideTitle: 'Qué incluye la plataforma',
    guide1: '6 Agentes AI: CEO, CMO, CRO, CTO, CSO, CFO — cada uno con rol y autonomía configurable',
    guide2: 'CRM Neural: Scoring de leads con AI, pipeline visual e interacciones automáticas',
    guide3: 'Content Factory: Contenido multi-plataforma con AI — LinkedIn, Instagram, Blog',
    stats: [
      { emoji: '🤖', value: '6', label: 'Agentes AI' },
      { emoji: '👥', value: '500+', label: 'Usuarios' },
      { emoji: '📈', value: '3x', label: 'ROI medio' },
      { emoji: '⏱️', value: '20h', label: 'Ahorradas / sem.' },
    ],
    features: [
      { emoji: '🤖', title: '6 Agentes AI', desc: 'CEO, CMO, CRO, CTO, CSO, CFO — con rol y autonomía configurable.' },
      { emoji: '💬', title: 'Command Chat', desc: 'Chat centralizado con comandos en lenguaje natural.' },
      { emoji: '📊', title: 'CRM Neural', desc: 'Scoring de leads con AI y pipeline visual.' },
      { emoji: '📝', title: 'Content Factory', desc: 'Contenido multi-plataforma con AI.' },
      { emoji: '⚙️', title: 'Workflow Engine', desc: 'Automatizaciones visuales con templates.' },
      { emoji: '📈', title: 'Dashboard Real-Time', desc: 'KPIs en vivo y gráficos de revenue.' },
      { emoji: '💰', title: 'Revenue Tracking', desc: 'Monitoreo de ingresos con tendencias AI.' },
      { emoji: '🎯', title: 'Lead Management', desc: 'Gestión de leads con scoring inteligente.' },
      { emoji: '✅', title: 'Task Automation', desc: '1,847+ tareas automatizadas.' },
    ],
  },
  fr: {
    badge: 'SSociety Studio — 6 Agents IA',
    title: 'Votre armée digitale d\'agents IA qui fait croître votre business',
    desc: '6 agents IA spécialisés — CEO, CMO, CRO, CTO, CSO, CFO — travaillant 24/7 sur le marketing, les ventes et le contenu.',
    cta: '⚡ Commencer gratuitement →',
    guideTitle: 'Ce que la plateforme inclut',
    guide1: '6 Agents IA: CEO, CMO, CRO, CTO, CSO, CFO — chacun avec rôle et autonomie configurables',
    guide2: 'CRM Neural: Scoring de leads avec IA, pipeline visuel et interactions automatiques',
    guide3: 'Content Factory: Contenu multi-plateforme avec IA — LinkedIn, Instagram, Blog',
    stats: [
      { emoji: '🤖', value: '6', label: 'Agents IA' },
      { emoji: '👥', value: '500+', label: 'Utilisateurs' },
      { emoji: '📈', value: '3x', label: 'ROI moyen' },
      { emoji: '⏱️', value: '20h', label: 'Économisées / sem.' },
    ],
    features: [
      { emoji: '🤖', title: '6 Agents IA', desc: 'CEO, CMO, CRO, CTO, CSO, CFO — rôle et autonomie configurables.' },
      { emoji: '💬', title: 'Command Chat', desc: 'Chat centralisé avec commandes en langage naturel.' },
      { emoji: '📊', title: 'CRM Neural', desc: 'Scoring de leads IA et pipeline visuel.' },
      { emoji: '📝', title: 'Content Factory', desc: 'Contenu multi-plateforme avec IA.' },
      { emoji: '⚙️', title: 'Workflow Engine', desc: 'Automatisations visuelles avec templates.' },
      { emoji: '📈', title: 'Dashboard Temps Réel', desc: 'KPIs en direct et graphiques de revenus.' },
      { emoji: '💰', title: 'Suivi des Revenus', desc: 'Suivi des revenus avec tendances IA.' },
      { emoji: '🎯', title: 'Gestion des Leads', desc: 'Gestion avec scoring intelligent.' },
      { emoji: '✅', title: 'Automatisation', desc: '1,847+ tâches automatisées.' },
    ],
  },
  it: {
    badge: 'SSociety Studio — 6 Agenti AI',
    title: 'Il tuo esercito digitale di agenti AI che fa crescere il business',
    desc: '6 agenti AI specializzati — CEO, CMO, CRO, CTO, CSO, CFO — che lavorano 24/7 su marketing, vendite e contenuti.',
    cta: '⚡ Inizia gratis →',
    guideTitle: 'Cosa include la piattaforma',
    guide1: '6 Agenti AI: CEO, CMO, CRO, CTO, CSO, CFO — ciascuno con ruolo e autonomia configurabili',
    guide2: 'CRM Neural: Scoring lead con AI, pipeline visuale e interazioni automatiche',
    guide3: 'Content Factory: Contenuti multi-piattaforma con AI — LinkedIn, Instagram, Blog',
    stats: [
      { emoji: '🤖', value: '6', label: 'Agenti AI' },
      { emoji: '👥', value: '500+', label: 'Utenti' },
      { emoji: '📈', value: '3x', label: 'ROI medio' },
      { emoji: '⏱️', value: '20h', label: 'Risparmiate / sett.' },
    ],
    features: [
      { emoji: '🤖', title: '6 Agenti AI', desc: 'CEO, CMO, CRO, CTO, CSO, CFO — ruolo e autonomia configurabili.' },
      { emoji: '💬', title: 'Command Chat', desc: 'Chat centralizzata con comandi in linguaggio naturale.' },
      { emoji: '📊', title: 'CRM Neural', desc: 'Scoring lead AI e pipeline visuale.' },
      { emoji: '📝', title: 'Content Factory', desc: 'Contenuti multi-piattaforma con AI.' },
      { emoji: '⚙️', title: 'Workflow Engine', desc: 'Automazioni visuali con template.' },
      { emoji: '📈', title: 'Dashboard Real-Time', desc: 'KPI live e grafici revenue.' },
      { emoji: '💰', title: 'Revenue Tracking', desc: 'Monitoraggio ricavi con trend AI.' },
      { emoji: '🎯', title: 'Lead Management', desc: 'Gestione lead con scoring intelligente.' },
      { emoji: '✅', title: 'Task Automation', desc: '1,847+ task automatizzati.' },
    ],
  },
  de: {
    badge: 'SSociety Studio — 6 KI-Agenten',
    title: 'Deine digitale Armee von KI-Agenten, die dein Business wachsen lässt',
    desc: '6 spezialisierte KI-Agenten — CEO, CMO, CRO, CTO, CSO, CFO — die 24/7 an Marketing, Vertrieb und Content arbeiten.',
    cta: '⚡ Kostenlos starten →',
    guideTitle: 'Was die Plattform beinhaltet',
    guide1: '6 KI-Agenten: CEO, CMO, CRO, CTO, CSO, CFO — jeweils mit konfigurierbarer Rolle und Autonomie',
    guide2: 'Neural CRM: KI-Lead-Scoring, visuelle Pipeline und automatisierte Interaktionen',
    guide3: 'Content Factory: Multi-Plattform-Content mit KI — LinkedIn, Instagram, Blog',
    stats: [
      { emoji: '🤖', value: '6', label: 'KI-Agenten' },
      { emoji: '👥', value: '500+', label: 'Nutzer' },
      { emoji: '📈', value: '3x', label: 'Durchschnittl. ROI' },
      { emoji: '⏱️', value: '20h', label: 'Gespart / Woche' },
    ],
    features: [
      { emoji: '🤖', title: '6 KI-Agenten', desc: 'CEO, CMO, CRO, CTO, CSO, CFO — konfigurierbarer Rolle.' },
      { emoji: '💬', title: 'Command Chat', desc: 'Zentraler Chat mit natürlichsprachlichen Befehlen.' },
      { emoji: '📊', title: 'Neural CRM', desc: 'KI-Lead-Scoring und visuelle Pipeline.' },
      { emoji: '📝', title: 'Content Factory', desc: 'Multi-Plattform-Content mit KI.' },
      { emoji: '⚙️', title: 'Workflow Engine', desc: 'Visuelle Automatisierungen mit Templates.' },
      { emoji: '📈', title: 'Echtzeit-Dashboard', desc: 'Live-KPIs und Revenue-Charts.' },
      { emoji: '💰', title: 'Umsatz-Tracking', desc: 'Umsatzüberwachung mit KI-Trends.' },
      { emoji: '🎯', title: 'Lead-Management', desc: 'Intelligentes Scoring und Auto-Follow-up.' },
      { emoji: '✅', title: 'Task-Automatisierung', desc: '1,847+ automatisierte Aufgaben.' },
    ],
  },
  ar: {
    badge: 'SSociety Studio — 6 وكلاء AI',
    title: 'جيشك الرقمي من وكلاء AI الذي ينمي عملك',
    desc: '6 وكلاء AI متخصصون — CEO, CMO, CRO, CTO, CSO, CFO — يعملون 24/7 على التسويق والمبيعات والمحتوى.',
    cta: '⚡ ابدأ مجاناً ←',
    guideTitle: 'ما تتضمنه المنصة',
    guide1: '6 وكلاء AI: CEO, CMO, CRO, CTO, CSO, CFO — كل منهم بدور واستقلالية قابلة للتخصيص',
    guide2: 'CRM عصبي: تقييم العملاء بالذكاء الاصطناعي وخط أنابيب مرئي وتفاعلات تلقائية',
    guide3: 'مصنع المحتوى: محتوى متعدد المنصات بالذكاء الاصطناعي — LinkedIn, Instagram, Blog',
    stats: [
      { emoji: '🤖', value: '6', label: 'وكلاء AI' },
      { emoji: '👥', value: '500+', label: 'مستخدم' },
      { emoji: '📈', value: '3x', label: 'نمو ROI' },
      { emoji: '⏱️', value: '20h', label: 'موفرة / أسبوع' },
    ],
    features: [
      { emoji: '🤖', title: '6 وكلاء AI', desc: 'CEO, CMO, CRO, CTO, CSO, CFO — بدور واستقلالية قابلة للتخصيص.' },
      { emoji: '💬', title: 'دردشة الأوامر', desc: 'دردشة مركزية بأوامر لغة طبيعية.' },
      { emoji: '📊', title: 'CRM عصبي', desc: 'تقييم العملاء بـ AI وخط أنابيب مرئي.' },
      { emoji: '📝', title: 'مصنع المحتوى', desc: 'محتوى متعدد المنصات بالذكاء الاصطناعي.' },
      { emoji: '⚙️', title: 'محرك سير العمل', desc: 'أتمتة مرئية مع قوالب.' },
      { emoji: '📈', title: 'لوحة تحكم فورية', desc: 'KPIs مباشرة ورسوم بيانية للإيرادات.' },
      { emoji: '💰', title: 'تتبع الإيرادات', desc: 'مراقبة الإيرادات مع اتجاهات AI.' },
      { emoji: '🎯', title: 'إدارة العملاء', desc: 'تقييم ذكي ومتابعة تلقائية.' },
      { emoji: '✅', title: 'أتمتة المهام', desc: '1,847+ مهمة مؤتمتة.' },
    ],
  },
};

const SSocietyStudioSection = () => {
  const [guideOpen, setGuideOpen] = useState(false);
  const { language } = useLanguage();
  const c = i18n[language] || i18n.en;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      className="max-w-6xl mx-auto px-3 sm:px-4 py-8 sm:py-10 lg:py-14"
    >
      <div className="relative bg-[#060a0d] border border-sky-500/15 rounded-2xl sm:rounded-[2.5rem] overflow-hidden">
        <div className="h-1 bg-gradient-to-r from-transparent via-sky-400 to-transparent animate-pulse" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-sky-500/8 rounded-full blur-[100px]" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500/5 rounded-full blur-[100px]" />

        <div className="relative p-5 sm:p-8 lg:p-12">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-5 sm:mb-6 lg:mb-8">
            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br from-sky-400 to-indigo-600 flex items-center justify-center shrink-0">
              <span className="text-2xl sm:text-3xl lg:text-4xl">⚡</span>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl lg:text-4xl font-extrabold text-sky-50 leading-tight">{c.badge}</h2>
              <p className="text-sm sm:text-base lg:text-lg text-sky-300 font-medium mt-1">{c.title}</p>
            </div>
          </div>

          <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-sky-500/10 mb-6 sm:mb-8 bg-black/50">
            <div className="bg-[#0d1117] border-b border-sky-500/10 px-4 py-2.5 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex-1 text-center">
                <span className="text-xs text-sky-300/60 font-mono">ssocietystudio.lovable.app</span>
              </div>
            </div>
            <div className="aspect-video">
              <iframe src="https://ssocietystudio.lovable.app" className="w-full h-full border-0" title="SSociety Studio Live" loading="lazy" sandbox="allow-scripts allow-same-origin" />
            </div>
          </div>

          <p className="text-sky-200/60 text-[13px] sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8">{c.desc}</p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 mb-6 sm:mb-8">
            {c.stats.map((s, i) => (
              <div key={i} className="text-center p-3 sm:p-4 lg:p-5 rounded-xl bg-sky-500/5 border border-sky-500/10">
                <div className="text-lg sm:text-xl mb-1">{s.emoji}</div>
                <div className="text-lg sm:text-2xl lg:text-3xl font-extrabold text-sky-400">{s.value}</div>
                <div className="text-[10px] sm:text-xs lg:text-sm text-sky-300/60 mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
            {c.features.map((f, i) => (
              <div key={i} className="flex items-start gap-3 p-3 sm:p-4 lg:p-5 rounded-xl border border-sky-500/10 hover:border-sky-500/25 transition-colors bg-sky-500/[0.03]">
                <span className="text-lg sm:text-xl lg:text-2xl">{f.emoji}</span>
                <div>
                  <div className="text-[13px] sm:text-sm lg:text-base font-semibold text-sky-50">{f.title}</div>
                  <div className="text-xs lg:text-sm text-sky-300/60 leading-relaxed">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <button onClick={() => setGuideOpen(!guideOpen)}
            className="w-full flex items-center justify-between p-3.5 sm:p-4 lg:p-5 rounded-xl bg-sky-500/5 border border-sky-500/10 mt-6 mb-5 sm:mb-6 text-sky-50 font-medium text-sm sm:text-base lg:text-lg">
            {c.guideTitle}
            <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform ${guideOpen ? 'rotate-180' : ''}`} />
          </button>
          {guideOpen && (
            <div className="p-4 sm:p-6 rounded-xl bg-sky-500/5 border border-sky-500/10 mb-5 sm:mb-6 text-[13px] sm:text-sm lg:text-base text-sky-300/60 space-y-3 leading-relaxed">
              <p><strong className="text-sky-50">{c.guide1.split(':')[0]}:</strong> {c.guide1.split(':').slice(1).join(':')}</p>
              <p><strong className="text-sky-50">{c.guide2.split(':')[0]}:</strong> {c.guide2.split(':').slice(1).join(':')}</p>
              <p><strong className="text-sky-50">{c.guide3.split(':')[0]}:</strong> {c.guide3.split(':').slice(1).join(':')}</p>
            </div>
          )}

          <a href="https://ssocietystudio.lovable.app" target="_blank" rel="noopener noreferrer"
            className="block w-full text-center py-3.5 sm:py-4 lg:py-5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-bold text-base lg:text-lg hover:opacity-90 transition-opacity active:scale-[0.98]">
            {c.cta}
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default SSocietyStudioSection;
