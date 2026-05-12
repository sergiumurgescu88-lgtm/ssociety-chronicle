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
    badge: 'MrDelivery — Restaurant Audit Pro',
    title: 'Platformă AI de audit digital pentru restaurante. SEO, Maps, delivery, meniu, social — și un plan de creștere pe 90 de zile.',
    desc: 'Doi agenți AI analizează datele reale din Google Places, calculează metrici de performanță și transformă auditul în planuri acționabile: roadmap 90 zile, strategii de preț, optimizare delivery, UGC loops și KPIs clari.',
    cta: '🚀 Intră în Dashboard →',
    guideTitle: 'Ce include platforma',
    guide1: 'Agentul 1 — Audit & Strategie: Analizează date reale Google Places, calculează metrici, identifică punctele slabe și generează rapoarte pe 10 module',
    guide2: 'Agentul 2 — Growth & Execuție: Transformă auditul în roadmap 90 zile, strategii de preț, optimizare delivery și KPIs clari pentru scalare',
    guide3: '9 Fișiere de Audit: SEO Local, Google Maps, Delivery, Website, Meniu, Social Media, Recenzii, Local SEO și Plan de Creștere',
    stats: [
      { emoji: '🤖', value: '2', label: 'Agenți AI dedicați' },
      { emoji: '📊', value: '10', label: 'Module audit' },
      { emoji: '📁', value: '9', label: 'Rapoarte generate' },
      { emoji: '🚀', value: '90', label: 'Zile plan creștere' },
    ],
    features: [
      { emoji: '🔍', title: 'SEO Local & Keywords', desc: 'Analiză cuvinte cheie și vizibilitate locală.' },
      { emoji: '🗺️', title: 'Google Maps & Foto', desc: 'Optimizare profil GBP și galerie foto.' },
      { emoji: '🛵', title: 'Delivery & Comisioane', desc: 'Audit Glovo, Bolt, Tazz și marje reale.' },
      { emoji: '💻', title: 'Website & UX', desc: 'Performanță, conversie și experiență mobilă.' },
      { emoji: '🍽️', title: 'Meniu & Neuromarketing', desc: 'Engineering meniu și psihologia prețurilor.' },
      { emoji: '📱', title: 'Social Media & UGC', desc: 'Strategie Instagram, TikTok și user content.' },
      { emoji: '⭐', title: 'Recenzii & Reputație', desc: 'Monitorizare review-uri și răspuns automat.' },
      { emoji: '📍', title: 'Local SEO & GBP', desc: 'Optimizare Google Business Profile complet.' },
      { emoji: '📈', title: 'Plan Creștere 90 Zile', desc: 'Roadmap acționabil cu KPIs săptămânali.' },
    ],
  },
  en: {
    badge: 'MrDelivery — Restaurant Audit Pro',
    title: 'AI digital audit platform for restaurants. SEO, Maps, delivery, menu, social — and a 90-day growth plan.',
    desc: 'Two AI agents analyze real Google Places data, calculate performance metrics and turn the audit into actionable plans: 90-day roadmap, pricing strategies, delivery optimization, UGC loops and clear KPIs.',
    cta: '🚀 Enter Dashboard →',
    guideTitle: 'What the platform includes',
    guide1: 'Agent 1 — Audit & Strategy: Analyzes real Google Places data, calculates metrics, identifies weak spots and generates 10-module reports',
    guide2: 'Agent 2 — Growth & Execution: Turns the audit into a 90-day roadmap, pricing strategies, delivery optimization and clear scaling KPIs',
    guide3: '9 Audit Files: Local SEO, Google Maps, Delivery, Website, Menu, Social Media, Reviews, Local SEO and Growth Plan',
    stats: [
      { emoji: '🤖', value: '2', label: 'Dedicated AI agents' },
      { emoji: '📊', value: '10', label: 'Audit modules' },
      { emoji: '📁', value: '9', label: 'Generated reports' },
      { emoji: '🚀', value: '90', label: 'Day growth plan' },
    ],
    features: [
      { emoji: '🔍', title: 'Local SEO & Keywords', desc: 'Keyword analysis and local visibility.' },
      { emoji: '🗺️', title: 'Google Maps & Photos', desc: 'GBP profile optimization and photo gallery.' },
      { emoji: '🛵', title: 'Delivery & Commissions', desc: 'Audit of Glovo, Bolt, Tazz and real margins.' },
      { emoji: '💻', title: 'Website & UX', desc: 'Performance, conversion and mobile UX.' },
      { emoji: '🍽️', title: 'Menu & Neuromarketing', desc: 'Menu engineering and pricing psychology.' },
      { emoji: '📱', title: 'Social Media & UGC', desc: 'Instagram, TikTok and user content strategy.' },
      { emoji: '⭐', title: 'Reviews & Reputation', desc: 'Review monitoring and auto-replies.' },
      { emoji: '📍', title: 'Local SEO & GBP', desc: 'Full Google Business Profile optimization.' },
      { emoji: '📈', title: '90-Day Growth Plan', desc: 'Actionable roadmap with weekly KPIs.' },
    ],
  },
  es: {
    badge: 'MrDelivery — Restaurant Audit Pro',
    title: 'Plataforma IA de auditoría digital para restaurantes. SEO, Maps, delivery, menú, social — y un plan de crecimiento de 90 días.',
    desc: 'Dos agentes IA analizan datos reales de Google Places, calculan métricas y convierten la auditoría en planes accionables.',
    cta: '🚀 Entrar al Dashboard →',
    guideTitle: 'Qué incluye la plataforma',
    guide1: 'Agente 1 — Auditoría y Estrategia: Analiza datos reales y genera informes en 10 módulos',
    guide2: 'Agente 2 — Crecimiento y Ejecución: Convierte la auditoría en un roadmap de 90 días con KPIs claros',
    guide3: '9 Archivos de Auditoría: SEO Local, Maps, Delivery, Web, Menú, Social, Reseñas, GBP y Plan de Crecimiento',
    stats: [
      { emoji: '🤖', value: '2', label: 'Agentes IA' },
      { emoji: '📊', value: '10', label: 'Módulos' },
      { emoji: '📁', value: '9', label: 'Informes' },
      { emoji: '🚀', value: '90', label: 'Días plan' },
    ],
    features: [
      { emoji: '🔍', title: 'SEO Local', desc: 'Palabras clave y visibilidad local.' },
      { emoji: '🗺️', title: 'Google Maps', desc: 'Perfil GBP y galería de fotos.' },
      { emoji: '🛵', title: 'Delivery', desc: 'Glovo, Bolt y márgenes reales.' },
      { emoji: '💻', title: 'Web & UX', desc: 'Rendimiento y conversión móvil.' },
      { emoji: '🍽️', title: 'Menú', desc: 'Ingeniería de menú y psicología de precios.' },
      { emoji: '📱', title: 'Social & UGC', desc: 'Estrategia Instagram y TikTok.' },
      { emoji: '⭐', title: 'Reseñas', desc: 'Monitoreo y respuestas automáticas.' },
      { emoji: '📍', title: 'GBP', desc: 'Optimización completa Google Business.' },
      { emoji: '📈', title: 'Plan 90 días', desc: 'Roadmap accionable con KPIs.' },
    ],
  },
  fr: {
    badge: 'MrDelivery — Restaurant Audit Pro',
    title: 'Plateforme IA d\'audit digital pour restaurants. SEO, Maps, livraison, menu, social — et un plan de croissance sur 90 jours.',
    desc: 'Deux agents IA analysent les données Google Places et transforment l\'audit en plans actionnables.',
    cta: '🚀 Accéder au Dashboard →',
    guideTitle: 'Ce que la plateforme comprend',
    guide1: 'Agent 1 — Audit & Stratégie: Analyse les données et génère des rapports sur 10 modules',
    guide2: 'Agent 2 — Croissance & Exécution: Transforme l\'audit en roadmap 90 jours avec KPIs clairs',
    guide3: '9 Fichiers d\'Audit: SEO Local, Maps, Livraison, Web, Menu, Social, Avis, GBP et Plan de Croissance',
    stats: [
      { emoji: '🤖', value: '2', label: 'Agents IA' },
      { emoji: '📊', value: '10', label: 'Modules' },
      { emoji: '📁', value: '9', label: 'Rapports' },
      { emoji: '🚀', value: '90', label: 'Jours plan' },
    ],
    features: [
      { emoji: '🔍', title: 'SEO Local', desc: 'Mots-clés et visibilité locale.' },
      { emoji: '🗺️', title: 'Google Maps', desc: 'Profil GBP et galerie photo.' },
      { emoji: '🛵', title: 'Livraison', desc: 'Glovo, Bolt et marges réelles.' },
      { emoji: '💻', title: 'Web & UX', desc: 'Performance et conversion mobile.' },
      { emoji: '🍽️', title: 'Menu', desc: 'Ingénierie de menu et psychologie des prix.' },
      { emoji: '📱', title: 'Social & UGC', desc: 'Stratégie Instagram et TikTok.' },
      { emoji: '⭐', title: 'Avis', desc: 'Surveillance et réponses automatiques.' },
      { emoji: '📍', title: 'GBP', desc: 'Optimisation Google Business.' },
      { emoji: '📈', title: 'Plan 90 jours', desc: 'Roadmap actionnable avec KPIs.' },
    ],
  },
  it: {
    badge: 'MrDelivery — Restaurant Audit Pro',
    title: 'Piattaforma IA di audit digitale per ristoranti. SEO, Maps, delivery, menu, social — e un piano di crescita di 90 giorni.',
    desc: 'Due agenti IA analizzano i dati reali di Google Places e trasformano l\'audit in piani azionabili.',
    cta: '🚀 Entra nella Dashboard →',
    guideTitle: 'Cosa include la piattaforma',
    guide1: 'Agente 1 — Audit & Strategia: Analizza i dati e genera report su 10 moduli',
    guide2: 'Agente 2 — Crescita & Esecuzione: Trasforma l\'audit in una roadmap 90 giorni con KPI chiari',
    guide3: '9 File di Audit: SEO Locale, Maps, Delivery, Web, Menu, Social, Recensioni, GBP e Piano di Crescita',
    stats: [
      { emoji: '🤖', value: '2', label: 'Agenti IA' },
      { emoji: '📊', value: '10', label: 'Moduli' },
      { emoji: '📁', value: '9', label: 'Report' },
      { emoji: '🚀', value: '90', label: 'Giorni piano' },
    ],
    features: [
      { emoji: '🔍', title: 'SEO Locale', desc: 'Parole chiave e visibilità locale.' },
      { emoji: '🗺️', title: 'Google Maps', desc: 'Profilo GBP e galleria foto.' },
      { emoji: '🛵', title: 'Delivery', desc: 'Glovo, Bolt e margini reali.' },
      { emoji: '💻', title: 'Web & UX', desc: 'Performance e conversione mobile.' },
      { emoji: '🍽️', title: 'Menu', desc: 'Ingegneria del menu e psicologia dei prezzi.' },
      { emoji: '📱', title: 'Social & UGC', desc: 'Strategia Instagram e TikTok.' },
      { emoji: '⭐', title: 'Recensioni', desc: 'Monitoraggio e risposte automatiche.' },
      { emoji: '📍', title: 'GBP', desc: 'Ottimizzazione Google Business.' },
      { emoji: '📈', title: 'Piano 90 giorni', desc: 'Roadmap azionabile con KPI.' },
    ],
  },
  de: {
    badge: 'MrDelivery — Restaurant Audit Pro',
    title: 'KI-Plattform für digitales Restaurant-Audit. SEO, Maps, Lieferung, Menü, Social — und ein 90-Tage-Wachstumsplan.',
    desc: 'Zwei KI-Agenten analysieren echte Google Places Daten und verwandeln das Audit in umsetzbare Pläne.',
    cta: '🚀 Zum Dashboard →',
    guideTitle: 'Was die Plattform umfasst',
    guide1: 'Agent 1 — Audit & Strategie: Analysiert Daten und erstellt Berichte zu 10 Modulen',
    guide2: 'Agent 2 — Wachstum & Umsetzung: Verwandelt das Audit in eine 90-Tage-Roadmap mit klaren KPIs',
    guide3: '9 Audit-Dateien: Lokales SEO, Maps, Lieferung, Web, Menü, Social, Bewertungen, GBP und Wachstumsplan',
    stats: [
      { emoji: '🤖', value: '2', label: 'KI-Agenten' },
      { emoji: '📊', value: '10', label: 'Module' },
      { emoji: '📁', value: '9', label: 'Berichte' },
      { emoji: '🚀', value: '90', label: 'Tage Plan' },
    ],
    features: [
      { emoji: '🔍', title: 'Lokales SEO', desc: 'Keywords und lokale Sichtbarkeit.' },
      { emoji: '🗺️', title: 'Google Maps', desc: 'GBP-Profil und Fotogalerie.' },
      { emoji: '🛵', title: 'Lieferung', desc: 'Glovo, Bolt und echte Margen.' },
      { emoji: '💻', title: 'Web & UX', desc: 'Performance und mobile Konversion.' },
      { emoji: '🍽️', title: 'Menü', desc: 'Menü-Engineering und Preispsychologie.' },
      { emoji: '📱', title: 'Social & UGC', desc: 'Instagram- und TikTok-Strategie.' },
      { emoji: '⭐', title: 'Bewertungen', desc: 'Überwachung und automatische Antworten.' },
      { emoji: '📍', title: 'GBP', desc: 'Komplette Google Business Optimierung.' },
      { emoji: '📈', title: '90-Tage-Plan', desc: 'Umsetzbare Roadmap mit KPIs.' },
    ],
  },
  ar: {
    badge: 'MrDelivery — تدقيق المطاعم برو',
    title: 'منصة ذكاء اصطناعي للتدقيق الرقمي للمطاعم. SEO، خرائط، توصيل، قائمة، اجتماعي — وخطة نمو 90 يوماً.',
    desc: 'عميلان ذكاء اصطناعي يحللان بيانات Google Places ويحولان التدقيق إلى خطط قابلة للتنفيذ.',
    cta: '🚀 ادخل لوحة التحكم →',
    guideTitle: 'ما تتضمنه المنصة',
    guide1: 'العميل 1 — تدقيق واستراتيجية: تحليل البيانات وإنشاء تقارير في 10 وحدات',
    guide2: 'العميل 2 — النمو والتنفيذ: تحويل التدقيق إلى خارطة طريق 90 يوماً مع KPIs واضحة',
    guide3: '9 ملفات تدقيق: SEO المحلي، الخرائط، التوصيل، الويب، القائمة، الاجتماعي، المراجعات، GBP وخطة النمو',
    stats: [
      { emoji: '🤖', value: '2', label: 'عملاء ذكاء اصطناعي' },
      { emoji: '📊', value: '10', label: 'وحدات' },
      { emoji: '📁', value: '9', label: 'تقارير' },
      { emoji: '🚀', value: '90', label: 'يوم خطة' },
    ],
    features: [
      { emoji: '🔍', title: 'SEO محلي', desc: 'كلمات مفتاحية ورؤية محلية.' },
      { emoji: '🗺️', title: 'خرائط Google', desc: 'ملف GBP ومعرض الصور.' },
      { emoji: '🛵', title: 'التوصيل', desc: 'Glovo، Bolt وهوامش حقيقية.' },
      { emoji: '💻', title: 'الويب', desc: 'الأداء والتحويل على الجوال.' },
      { emoji: '🍽️', title: 'القائمة', desc: 'هندسة القائمة وعلم نفس التسعير.' },
      { emoji: '📱', title: 'سوشيال', desc: 'استراتيجية Instagram وTikTok.' },
      { emoji: '⭐', title: 'مراجعات', desc: 'مراقبة وردود تلقائية.' },
      { emoji: '📍', title: 'GBP', desc: 'تحسين Google Business كامل.' },
      { emoji: '📈', title: 'خطة 90 يوم', desc: 'خارطة طريق قابلة للتنفيذ.' },
    ],
  },
};

const RestaurantAuditProSection = () => {
  const [guideOpen, setGuideOpen] = useState(false);
  const { language } = useLanguage();
  const c = i18n[language] || i18n.en;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      className="max-w-6xl mx-auto px-3 sm:px-4 py-8 sm:py-10 lg:py-14"
    >
      <div className="relative bg-[#100604] border border-orange-500/15 rounded-2xl sm:rounded-[2.5rem] overflow-hidden">
        <div className="h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent animate-pulse" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-500/8 rounded-full blur-[100px]" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-500/5 rounded-full blur-[100px]" />

        <div className="relative p-5 sm:p-8 lg:p-12">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-5 sm:mb-6 lg:mb-8">
            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br from-orange-400 to-red-600 flex items-center justify-center shrink-0">
              <span className="text-2xl sm:text-3xl lg:text-4xl">🍽️</span>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl lg:text-4xl font-extrabold text-orange-50 leading-tight">{c.badge}</h2>
              <p className="text-sm sm:text-base lg:text-lg text-orange-300 font-medium mt-1">{c.title}</p>
            </div>
          </div>

          <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-orange-500/10 mb-6 sm:mb-8 bg-black/50">
            <div className="bg-[#120a06] border-b border-orange-500/10 px-4 py-2.5 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex-1 text-center">
                <span className="text-xs text-orange-300/60 font-mono">mrdelivery.online</span>
              </div>
            </div>
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src="https://mrdelivery.online/"
                title="MrDelivery Restaurant Audit Pro"
                className="absolute inset-0 w-full h-full"
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
              />
            </div>
          </div>

          <p className="text-orange-200/60 text-[13px] sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8">{c.desc}</p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 mb-6 sm:mb-8">
            {c.stats.map((s, i) => (
              <div key={i} className="text-center p-3 sm:p-4 lg:p-5 rounded-xl bg-orange-500/5 border border-orange-500/10">
                <div className="text-lg sm:text-xl mb-1">{s.emoji}</div>
                <div className="text-lg sm:text-2xl lg:text-3xl font-extrabold text-orange-400">{s.value}</div>
                <div className="text-[10px] sm:text-xs lg:text-sm text-orange-300/60 mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
            {c.features.map((f, i) => (
              <div key={i} className="flex items-start gap-3 p-3 sm:p-4 lg:p-5 rounded-xl border border-orange-500/10 hover:border-orange-500/25 transition-colors bg-orange-500/[0.03]">
                <span className="text-lg sm:text-xl lg:text-2xl">{f.emoji}</span>
                <div>
                  <div className="text-[13px] sm:text-sm lg:text-base font-semibold text-orange-50">{f.title}</div>
                  <div className="text-xs lg:text-sm text-orange-300/60 leading-relaxed">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <button onClick={() => setGuideOpen(!guideOpen)}
            className="w-full flex items-center justify-between p-3.5 sm:p-4 lg:p-5 rounded-xl bg-orange-500/5 border border-orange-500/10 mt-6 mb-5 sm:mb-6 text-orange-50 font-medium text-sm sm:text-base lg:text-lg">
            {c.guideTitle}
            <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform ${guideOpen ? 'rotate-180' : ''}`} />
          </button>
          {guideOpen && (
            <div className="p-4 sm:p-6 rounded-xl bg-orange-500/5 border border-orange-500/10 mb-5 sm:mb-6 text-[13px] sm:text-sm lg:text-base text-orange-300/60 space-y-3 leading-relaxed">
              <p><strong className="text-orange-50">{c.guide1.split(':')[0]}:</strong> {c.guide1.split(':').slice(1).join(':')}</p>
              <p><strong className="text-orange-50">{c.guide2.split(':')[0]}:</strong> {c.guide2.split(':').slice(1).join(':')}</p>
              <p><strong className="text-orange-50">{c.guide3.split(':')[0]}:</strong> {c.guide3.split(':').slice(1).join(':')}</p>
            </div>
          )}

          <a href="https://mrdelivery.online/" target="_blank" rel="noopener noreferrer"
            className="block w-full text-center py-3.5 sm:py-4 lg:py-5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold text-base lg:text-lg hover:opacity-90 transition-opacity active:scale-[0.98]">
            {c.cta}
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default RestaurantAuditProSection;
