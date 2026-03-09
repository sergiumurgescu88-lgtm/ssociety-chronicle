import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const i18n: Record<string, {
  badge: string; title: string; subtitle: string; desc: string; cta: string;
  guideTitle: string; guide1: string; guide2: string; guide3: string; guide4: string;
  stats: { emoji: string; value: string; label: string }[];
  features: { emoji: string; title: string; desc: string }[];
}> = {
  ro: {
    badge: 'VentureAI — Agenți AI Autonomi',
    title: 'Scalează-ți afacerea cu inteligență artificială',
    subtitle: 'Platforma #1 pentru antreprenori digitali.',
    desc: 'Automatizează proiecte, descoperă oportunități și maximizează veniturile cu agenți AI care lucrează non-stop pentru tine.',
    cta: '🚀 Începe gratuit — 0$ →',
    guideTitle: 'Cum funcționează — 4 pași',
    guide1: 'Obiective: Definește-ți proiectele, bugetele și țintele de revenue',
    guide2: 'Agenți AI: Activează agenții care analizează, planifică și execută non-stop',
    guide3: 'Oportunități: Scanner-ul identifică nișe profitabile în timp real',
    guide4: 'Venituri: Urmărește creșterea cu analytics detaliate și rapoarte',
    stats: [
      { emoji: '👥', value: '1.200+', label: 'Utilizatori activi' },
      { emoji: '💰', value: '$2.4M', label: 'Venituri generate' },
      { emoji: '⭐', value: '98%', label: 'Satisfacție clienți' },
      { emoji: '⏱️', value: '20h', label: 'Salvate / săptămână' },
    ],
    features: [
      { emoji: '🤖', title: 'Agenți AI Autonomi', desc: 'Delegă sarcini către agenți inteligenți care lucrează non-stop pentru proiectele tale.' },
      { emoji: '🔍', title: 'Scanner Oportunități', desc: 'Descoperă automat noi surse de venit adaptate nișei și abilităților tale.' },
      { emoji: '📊', title: 'Revenue Tracking', desc: 'Dashboard complet cu vizualizarea veniturilor, cheltuielilor și marjelor de profit.' },
      { emoji: '📚', title: 'Learning Hub', desc: 'Module interactive cu quiz-uri și certificate pentru a-ți accelera creșterea.' },
      { emoji: '📈', title: 'Analytics Avansat', desc: 'Metrici în timp real și rapoarte detaliate pentru decizii bazate pe date.' },
      { emoji: '🔒', title: 'Securitate & GDPR', desc: 'Date protejate, export complet și conformitate cu reglementările europene.' },
      { emoji: '👥', title: 'Team Management', desc: 'Gestionare echipe cu roluri, permisiuni și workflow-uri de colaborare.' },
      { emoji: '🏷️', title: 'White-Label', desc: 'Branding personalizat pentru agenții și freelanceri cu API access complet.' },
      { emoji: '💳', title: 'Stripe Payments', desc: 'Plăți securizate integrate cu facturare automată și management abonamente.' },
    ],
  },
  en: {
    badge: 'VentureAI — Autonomous AI Agents',
    title: 'Scale your business with artificial intelligence',
    subtitle: 'The #1 platform for digital entrepreneurs.',
    desc: 'Automate projects, discover opportunities and maximize revenue with AI agents working non-stop for you.',
    cta: '🚀 Start free — $0 →',
    guideTitle: 'How it works — 4 steps',
    guide1: 'Goals: Define your projects, budgets and revenue targets',
    guide2: 'AI Agents: Activate agents that analyze, plan and execute 24/7',
    guide3: 'Opportunities: Scanner identifies profitable niches in real-time',
    guide4: 'Revenue: Track growth with detailed analytics and reports',
    stats: [
      { emoji: '👥', value: '1,200+', label: 'Active users' },
      { emoji: '💰', value: '$2.4M', label: 'Revenue generated' },
      { emoji: '⭐', value: '98%', label: 'Client satisfaction' },
      { emoji: '⏱️', value: '20h', label: 'Saved / week' },
    ],
    features: [
      { emoji: '🤖', title: 'Autonomous AI Agents', desc: 'Delegate tasks to intelligent agents working non-stop for your projects.' },
      { emoji: '🔍', title: 'Opportunity Scanner', desc: 'Automatically discover new revenue sources adapted to your niche and skills.' },
      { emoji: '📊', title: 'Revenue Tracking', desc: 'Complete dashboard with revenue, expenses and profit margin visualization.' },
      { emoji: '📚', title: 'Learning Hub', desc: 'Interactive modules with quizzes and certificates to accelerate your growth.' },
      { emoji: '📈', title: 'Advanced Analytics', desc: 'Real-time metrics and detailed reports for data-driven decisions.' },
      { emoji: '🔒', title: 'Security & GDPR', desc: 'Protected data, full export and compliance with European regulations.' },
      { emoji: '👥', title: 'Team Management', desc: 'Team management with roles, permissions and collaboration workflows.' },
      { emoji: '🏷️', title: 'White-Label', desc: 'Custom branding for agencies and freelancers with full API access.' },
      { emoji: '💳', title: 'Stripe Payments', desc: 'Secure integrated payments with automatic billing and subscription management.' },
    ],
  },
  es: {
    badge: 'VentureAI — Agentes AI Autónomos',
    title: 'Escala tu negocio con inteligencia artificial',
    subtitle: 'La plataforma #1 para emprendedores digitales.',
    desc: 'Automatiza proyectos, descubre oportunidades y maximiza ingresos con agentes AI que trabajan sin parar.',
    cta: '🚀 Comienza gratis — $0 →',
    guideTitle: 'Cómo funciona — 4 pasos',
    guide1: 'Objetivos: Define tus proyectos, presupuestos y metas de ingresos',
    guide2: 'Agentes AI: Activa agentes que analizan, planifican y ejecutan 24/7',
    guide3: 'Oportunidades: El scanner identifica nichos rentables en tiempo real',
    guide4: 'Ingresos: Rastrea el crecimiento con analytics y reportes detallados',
    stats: [
      { emoji: '👥', value: '1.200+', label: 'Usuarios activos' },
      { emoji: '💰', value: '$2.4M', label: 'Ingresos generados' },
      { emoji: '⭐', value: '98%', label: 'Satisfacción clientes' },
      { emoji: '⏱️', value: '20h', label: 'Ahorradas / semana' },
    ],
    features: [
      { emoji: '🤖', title: 'Agentes AI Autónomos', desc: 'Delega tareas a agentes inteligentes que trabajan sin parar.' },
      { emoji: '🔍', title: 'Scanner de Oportunidades', desc: 'Descubre automáticamente nuevas fuentes de ingresos.' },
      { emoji: '📊', title: 'Revenue Tracking', desc: 'Dashboard completo con ingresos, gastos y márgenes.' },
      { emoji: '📚', title: 'Learning Hub', desc: 'Módulos interactivos con quizzes y certificados.' },
      { emoji: '📈', title: 'Analytics Avanzado', desc: 'Métricas en tiempo real y reportes detallados.' },
      { emoji: '🔒', title: 'Seguridad & GDPR', desc: 'Datos protegidos y conformidad con regulaciones europeas.' },
      { emoji: '👥', title: 'Gestión de Equipos', desc: 'Roles, permisos y flujos de colaboración.' },
      { emoji: '🏷️', title: 'White-Label', desc: 'Branding personalizado con acceso API completo.' },
      { emoji: '💳', title: 'Pagos Stripe', desc: 'Pagos seguros con facturación automática.' },
    ],
  },
  fr: {
    badge: 'VentureAI — Agents IA Autonomes',
    title: "Développez votre entreprise avec l'intelligence artificielle",
    subtitle: 'La plateforme #1 pour les entrepreneurs digitaux.',
    desc: "Automatisez les projets, découvrez les opportunités et maximisez les revenus avec des agents IA travaillant en continu.",
    cta: '🚀 Commencer gratuitement — 0$ →',
    guideTitle: 'Comment ça marche — 4 étapes',
    guide1: 'Objectifs: Définissez vos projets, budgets et cibles de revenus',
    guide2: 'Agents IA: Activez des agents qui analysent, planifient et exécutent 24/7',
    guide3: 'Opportunités: Le scanner identifie des niches rentables en temps réel',
    guide4: 'Revenus: Suivez la croissance avec des analytics et rapports détaillés',
    stats: [
      { emoji: '👥', value: '1.200+', label: 'Utilisateurs actifs' },
      { emoji: '💰', value: '$2.4M', label: 'Revenus générés' },
      { emoji: '⭐', value: '98%', label: 'Satisfaction client' },
      { emoji: '⏱️', value: '20h', label: 'Économisées / semaine' },
    ],
    features: [
      { emoji: '🤖', title: 'Agents IA Autonomes', desc: 'Déléguez des tâches à des agents intelligents travaillant en continu.' },
      { emoji: '🔍', title: "Scanner d'Opportunités", desc: 'Découvrez automatiquement de nouvelles sources de revenus.' },
      { emoji: '📊', title: 'Suivi des Revenus', desc: 'Tableau de bord complet avec revenus, dépenses et marges.' },
      { emoji: '📚', title: "Hub d'Apprentissage", desc: 'Modules interactifs avec quiz et certificats.' },
      { emoji: '📈', title: 'Analytics Avancé', desc: 'Métriques en temps réel et rapports détaillés.' },
      { emoji: '🔒', title: 'Sécurité & RGPD', desc: 'Données protégées, conformité réglementations européennes.' },
      { emoji: '👥', title: "Gestion d'Équipe", desc: "Rôles, permissions et flux de collaboration." },
      { emoji: '🏷️', title: 'White-Label', desc: 'Branding personnalisé avec accès API complet.' },
      { emoji: '💳', title: 'Paiements Stripe', desc: 'Paiements sécurisés avec facturation automatique.' },
    ],
  },
  it: {
    badge: 'VentureAI — Agenti AI Autonomi',
    title: "Scala il tuo business con l'intelligenza artificiale",
    subtitle: 'La piattaforma #1 per imprenditori digitali.',
    desc: "Automatizza progetti, scopri opportunità e massimizza i ricavi con agenti AI che lavorano non-stop.",
    cta: '🚀 Inizia gratis — $0 →',
    guideTitle: 'Come funziona — 4 passi',
    guide1: 'Obiettivi: Definisci progetti, budget e obiettivi di ricavo',
    guide2: 'Agenti AI: Attiva agenti che analizzano, pianificano e eseguono 24/7',
    guide3: 'Opportunità: Lo scanner identifica nicchie profittevoli in tempo reale',
    guide4: 'Ricavi: Monitora la crescita con analytics e report dettagliati',
    stats: [
      { emoji: '👥', value: '1.200+', label: 'Utenti attivi' },
      { emoji: '💰', value: '$2.4M', label: 'Ricavi generati' },
      { emoji: '⭐', value: '98%', label: 'Soddisfazione clienti' },
      { emoji: '⏱️', value: '20h', label: 'Risparmiate / settimana' },
    ],
    features: [
      { emoji: '🤖', title: 'Agenti AI Autonomi', desc: 'Delega compiti ad agenti intelligenti che lavorano non-stop.' },
      { emoji: '🔍', title: 'Scanner Opportunità', desc: 'Scopri automaticamente nuove fonti di ricavo.' },
      { emoji: '📊', title: 'Revenue Tracking', desc: 'Dashboard completo con ricavi, spese e margini.' },
      { emoji: '📚', title: 'Learning Hub', desc: 'Moduli interattivi con quiz e certificati.' },
      { emoji: '📈', title: 'Analytics Avanzato', desc: 'Metriche in tempo reale e report dettagliati.' },
      { emoji: '🔒', title: 'Sicurezza & GDPR', desc: 'Dati protetti, conformità normative europee.' },
      { emoji: '👥', title: 'Gestione Team', desc: 'Ruoli, permessi e workflow di collaborazione.' },
      { emoji: '🏷️', title: 'White-Label', desc: 'Branding personalizzato con accesso API completo.' },
      { emoji: '💳', title: 'Pagamenti Stripe', desc: 'Pagamenti sicuri con fatturazione automatica.' },
    ],
  },
  de: {
    badge: 'VentureAI — Autonome KI-Agenten',
    title: 'Skaliere dein Business mit künstlicher Intelligenz',
    subtitle: 'Die #1 Plattform für digitale Unternehmer.',
    desc: 'Automatisiere Projekte, entdecke Chancen und maximiere Einnahmen mit KI-Agenten die rund um die Uhr arbeiten.',
    cta: '🚀 Kostenlos starten — 0$ →',
    guideTitle: 'Wie es funktioniert — 4 Schritte',
    guide1: 'Ziele: Definiere Projekte, Budgets und Umsatzziele',
    guide2: 'KI-Agenten: Aktiviere Agenten die 24/7 analysieren, planen und ausführen',
    guide3: 'Chancen: Scanner identifiziert profitable Nischen in Echtzeit',
    guide4: 'Einnahmen: Verfolge Wachstum mit detaillierten Analytics und Berichten',
    stats: [
      { emoji: '👥', value: '1.200+', label: 'Aktive Nutzer' },
      { emoji: '💰', value: '$2.4M', label: 'Generierte Einnahmen' },
      { emoji: '⭐', value: '98%', label: 'Kundenzufriedenheit' },
      { emoji: '⏱️', value: '20h', label: 'Gespart / Woche' },
    ],
    features: [
      { emoji: '🤖', title: 'Autonome KI-Agenten', desc: 'Delegiere Aufgaben an intelligente Agenten die non-stop arbeiten.' },
      { emoji: '🔍', title: 'Chancen-Scanner', desc: 'Entdecke automatisch neue Einnahmequellen.' },
      { emoji: '📊', title: 'Umsatz-Tracking', desc: 'Komplettes Dashboard mit Einnahmen, Ausgaben und Margen.' },
      { emoji: '📚', title: 'Lern-Hub', desc: 'Interaktive Module mit Quizzes und Zertifikaten.' },
      { emoji: '📈', title: 'Erweiterte Analytics', desc: 'Echtzeit-Metriken und detaillierte Berichte.' },
      { emoji: '🔒', title: 'Sicherheit & DSGVO', desc: 'Geschützte Daten, EU-Verordnungskonformität.' },
      { emoji: '👥', title: 'Team-Management', desc: 'Rollen, Berechtigungen und Kollaborations-Workflows.' },
      { emoji: '🏷️', title: 'White-Label', desc: 'Individuelles Branding mit vollem API-Zugang.' },
      { emoji: '💳', title: 'Stripe-Zahlungen', desc: 'Sichere Zahlungen mit automatischer Abrechnung.' },
    ],
  },
  ar: {
    badge: 'VentureAI — وكلاء AI مستقلون',
    title: 'وسّع عملك بالذكاء الاصطناعي',
    subtitle: 'المنصة رقم 1 لرواد الأعمال الرقميين.',
    desc: 'أتمت المشاريع، اكتشف الفرص وزد الإيرادات مع وكلاء AI يعملون بلا توقف.',
    cta: '🚀 ابدأ مجاناً — 0$ ←',
    guideTitle: 'كيف يعمل — 4 خطوات',
    guide1: 'الأهداف: حدد مشاريعك وميزانياتك وأهداف الإيرادات',
    guide2: 'وكلاء AI: فعّل وكلاء يحللون ويخططون وينفذون 24/7',
    guide3: 'الفرص: الماسح يحدد المجالات المربحة في الوقت الفعلي',
    guide4: 'الإيرادات: تابع النمو مع تحليلات وتقارير مفصلة',
    stats: [
      { emoji: '👥', value: '1,200+', label: 'مستخدم نشط' },
      { emoji: '💰', value: '$2.4M', label: 'إيرادات محققة' },
      { emoji: '⭐', value: '98%', label: 'رضا العملاء' },
      { emoji: '⏱️', value: '20h', label: 'موفرة / أسبوع' },
    ],
    features: [
      { emoji: '🤖', title: 'وكلاء AI مستقلون', desc: 'فوّض المهام لوكلاء أذكياء يعملون بلا توقف.' },
      { emoji: '🔍', title: 'ماسح الفرص', desc: 'اكتشف تلقائياً مصادر دخل جديدة.' },
      { emoji: '📊', title: 'تتبع الإيرادات', desc: 'لوحة تحكم كاملة مع الإيرادات والمصروفات والهوامش.' },
      { emoji: '📚', title: 'مركز التعلم', desc: 'وحدات تفاعلية مع اختبارات وشهادات.' },
      { emoji: '📈', title: 'تحليلات متقدمة', desc: 'مقاييس فورية وتقارير مفصلة.' },
      { emoji: '🔒', title: 'الأمان و GDPR', desc: 'بيانات محمية، امتثال للوائح الأوروبية.' },
      { emoji: '👥', title: 'إدارة الفريق', desc: 'أدوار وصلاحيات وسير عمل تعاوني.' },
      { emoji: '🏷️', title: 'White-Label', desc: 'علامة تجارية مخصصة مع وصول API كامل.' },
      { emoji: '💳', title: 'مدفوعات Stripe', desc: 'مدفوعات آمنة مع فوترة تلقائية.' },
    ],
  },
};

const VentureAISection = () => {
  const [guideOpen, setGuideOpen] = useState(false);
  const { language } = useLanguage();
  const c = i18n[language] || i18n.en;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      className="max-w-6xl mx-auto px-3 sm:px-4 py-8 sm:py-10 lg:py-14"
    >
      <div className="relative bg-[#0f0608] border border-rose-500/15 rounded-2xl sm:rounded-[2.5rem] overflow-hidden">
        <div className="h-1 bg-gradient-to-r from-transparent via-rose-400 to-transparent animate-pulse" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-rose-500/8 rounded-full blur-[100px]" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500/5 rounded-full blur-[100px]" />

        <div className="relative p-5 sm:p-8 lg:p-12">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-5 sm:mb-6 lg:mb-8">
            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br from-rose-400 to-pink-600 flex items-center justify-center shrink-0">
              <span className="text-2xl sm:text-3xl lg:text-4xl">🚀</span>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl lg:text-4xl font-extrabold text-rose-50 leading-tight">{c.badge}</h2>
              <p className="text-sm sm:text-base lg:text-lg text-rose-300 font-medium mt-1">{c.title}</p>
            </div>
          </div>

          {/* Live iframe */}
          <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-rose-500/10 mb-6 sm:mb-8 bg-black/50">
            <div className="bg-[#170d11] border-b border-rose-500/10 px-4 py-2.5 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex-1 text-center">
                <span className="text-xs text-rose-300/60 font-mono">ssocietyagents.lovable.app</span>
              </div>
            </div>
            <div className="aspect-video">
              <iframe
                src="https://ssocietyagents.lovable.app"
                className="w-full h-full border-0"
                title="VentureAI Live"
                loading="lazy"
                sandbox="allow-scripts allow-same-origin"
              />
            </div>
          </div>

          {/* Description */}
          <p className="text-rose-200/60 text-[13px] sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8">{c.desc}</p>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 mb-6 sm:mb-8">
            {c.stats.map((s, i) => (
              <div key={i} className="text-center p-3 sm:p-4 lg:p-5 rounded-xl bg-rose-500/5 border border-rose-500/10">
                <div className="text-lg sm:text-xl mb-1">{s.emoji}</div>
                <div className="text-lg sm:text-2xl lg:text-3xl font-extrabold text-rose-400">{s.value}</div>
                <div className="text-[10px] sm:text-xs lg:text-sm text-rose-300/60 mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Features grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
            {c.features.map((f, i) => (
              <div key={i} className="flex items-start gap-3 p-3 sm:p-4 lg:p-5 rounded-xl border border-rose-500/10 hover:border-rose-500/25 transition-colors bg-rose-500/[0.03]">
                <span className="text-lg sm:text-xl lg:text-2xl">{f.emoji}</span>
                <div>
                  <div className="text-[13px] sm:text-sm lg:text-base font-semibold text-rose-50">{f.title}</div>
                  <div className="text-xs lg:text-sm text-rose-300/60 leading-relaxed">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Guide accordion */}
          <button onClick={() => setGuideOpen(!guideOpen)}
            className="w-full flex items-center justify-between p-3.5 sm:p-4 lg:p-5 rounded-xl bg-rose-500/5 border border-rose-500/10 mt-6 mb-5 sm:mb-6 text-rose-50 font-medium text-sm sm:text-base lg:text-lg">
            {c.guideTitle}
            <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform ${guideOpen ? 'rotate-180' : ''}`} />
          </button>
          {guideOpen && (
            <div className="p-4 sm:p-6 rounded-xl bg-rose-500/5 border border-rose-500/10 mb-5 sm:mb-6 text-[13px] sm:text-sm lg:text-base text-rose-300/60 space-y-3 leading-relaxed">
              <p><strong className="text-rose-50">{c.guide1.split(':')[0]}:</strong> {c.guide1.split(':').slice(1).join(':')}</p>
              <p><strong className="text-rose-50">{c.guide2.split(':')[0]}:</strong> {c.guide2.split(':').slice(1).join(':')}</p>
              <p><strong className="text-rose-50">{c.guide3.split(':')[0]}:</strong> {c.guide3.split(':').slice(1).join(':')}</p>
              <p><strong className="text-rose-50">{c.guide4.split(':')[0]}:</strong> {c.guide4.split(':').slice(1).join(':')}</p>
            </div>
          )}

          {/* CTA */}
          <a href="https://ssocietyagents.lovable.app" target="_blank" rel="noopener noreferrer"
            className="block w-full text-center py-3.5 sm:py-4 lg:py-5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-rose-500 to-pink-600 text-white font-bold text-base lg:text-lg hover:opacity-90 transition-opacity active:scale-[0.98]">
            {c.cta}
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default VentureAISection;
