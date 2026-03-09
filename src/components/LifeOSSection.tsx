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
    badge: 'LifeOS AI — Sistemul tău de operare personal',
    title: 'Organizează-ți viața cu inteligență artificială',
    desc: 'LifeOS AI este sistemul de operare personal care îți gestionează obiectivele, finanțele, sănătatea, rutinele și productivitatea — totul într-un singur dashboard AI.',
    cta: '🧠 Intră în LifeOS →',
    guideTitle: 'Ce include platforma',
    guide1: 'Dashboard Personal: Vizualizare completă a vieții tale — obiective, sănătate, finanțe, productivitate într-un singur loc',
    guide2: 'AI Life Coach: Asistent AI care analizează pattern-urile tale și oferă recomandări personalizate zilnic',
    guide3: 'Habit Tracker & Journaling: Monitorizare obiceiuri cu streak-uri, jurnal AI și reflecții ghidate',
    stats: [
      { emoji: '🧠', value: 'AI', label: 'Life Coach integrat' },
      { emoji: '📊', value: '360°', label: 'Vizualizare completă' },
      { emoji: '🎯', value: '∞', label: 'Obiective nelimitate' },
      { emoji: '⚡', value: '24/7', label: 'Disponibil non-stop' },
    ],
    features: [
      { emoji: '🎯', title: 'Goal Tracking', desc: 'Setează obiective SMART cu milestones, progres vizual și deadline-uri automate.' },
      { emoji: '💰', title: 'Finance Manager', desc: 'Buget personal, tracking cheltuieli, economii și predicții financiare AI.' },
      { emoji: '❤️', title: 'Health Dashboard', desc: 'Monitorizare somn, nutriție, exerciții și stare de spirit cu grafice.' },
      { emoji: '📅', title: 'Smart Calendar', desc: 'Calendar AI care optimizează automat programul pentru productivitate maximă.' },
      { emoji: '🧘', title: 'Mindfulness & Focus', desc: 'Sesiuni de meditație, tehnici de respirație și timer-e Pomodoro.' },
      { emoji: '📝', title: 'AI Journal', desc: 'Jurnal inteligent cu analiză de sentiment și reflecții ghidate de AI.' },
      { emoji: '📈', title: 'Habit Streaks', desc: 'Monitorizare obiceiuri zilnice cu streak-uri, statistici și motivație AI.' },
      { emoji: '🔄', title: 'Rutine Automate', desc: 'Creează rutine de dimineață/seară cu notificări și tracking automat.' },
      { emoji: '📱', title: 'Life Score', desc: 'Scor holistic al vieții bazat pe toate dimensiunile: sănătate, finanțe, relații.' },
    ],
  },
  en: {
    badge: 'LifeOS AI — Your Personal Operating System',
    title: 'Organize your life with artificial intelligence',
    desc: 'LifeOS AI is the personal operating system that manages your goals, finances, health, routines and productivity — all in one AI dashboard.',
    cta: '🧠 Enter LifeOS →',
    guideTitle: 'What the platform includes',
    guide1: 'Personal Dashboard: Complete life visualization — goals, health, finances, productivity in one place',
    guide2: 'AI Life Coach: AI assistant that analyzes your patterns and provides daily personalized recommendations',
    guide3: 'Habit Tracker & Journaling: Habit monitoring with streaks, AI journal and guided reflections',
    stats: [
      { emoji: '🧠', value: 'AI', label: 'Integrated Life Coach' },
      { emoji: '📊', value: '360°', label: 'Complete overview' },
      { emoji: '🎯', value: '∞', label: 'Unlimited goals' },
      { emoji: '⚡', value: '24/7', label: 'Always available' },
    ],
    features: [
      { emoji: '🎯', title: 'Goal Tracking', desc: 'Set SMART goals with milestones, visual progress and auto deadlines.' },
      { emoji: '💰', title: 'Finance Manager', desc: 'Personal budget, expense tracking, savings and AI financial predictions.' },
      { emoji: '❤️', title: 'Health Dashboard', desc: 'Sleep, nutrition, exercise and mood monitoring with charts.' },
      { emoji: '📅', title: 'Smart Calendar', desc: 'AI calendar that auto-optimizes your schedule for max productivity.' },
      { emoji: '🧘', title: 'Mindfulness & Focus', desc: 'Meditation sessions, breathing techniques and Pomodoro timers.' },
      { emoji: '📝', title: 'AI Journal', desc: 'Smart journal with sentiment analysis and AI-guided reflections.' },
      { emoji: '📈', title: 'Habit Streaks', desc: 'Daily habit monitoring with streaks, stats and AI motivation.' },
      { emoji: '🔄', title: 'Auto Routines', desc: 'Create morning/evening routines with notifications and auto tracking.' },
      { emoji: '📱', title: 'Life Score', desc: 'Holistic life score based on all dimensions: health, finances, relationships.' },
    ],
  },
  es: {
    badge: 'LifeOS AI — Tu Sistema Operativo Personal',
    title: 'Organiza tu vida con inteligencia artificial',
    desc: 'LifeOS AI gestiona tus objetivos, finanzas, salud, rutinas y productividad — todo en un solo dashboard AI.',
    cta: '🧠 Entrar a LifeOS →',
    guideTitle: 'Qué incluye la plataforma',
    guide1: 'Dashboard Personal: Visualización completa — objetivos, salud, finanzas, productividad',
    guide2: 'AI Life Coach: Asistente AI que analiza tus patrones y ofrece recomendaciones diarias',
    guide3: 'Habit Tracker: Monitoreo de hábitos con rachas, diario AI y reflexiones guiadas',
    stats: [
      { emoji: '🧠', value: 'AI', label: 'Life Coach' },
      { emoji: '📊', value: '360°', label: 'Vista completa' },
      { emoji: '🎯', value: '∞', label: 'Objetivos ilimitados' },
      { emoji: '⚡', value: '24/7', label: 'Siempre disponible' },
    ],
    features: [
      { emoji: '🎯', title: 'Goal Tracking', desc: 'Objetivos SMART con hitos y progreso visual.' },
      { emoji: '💰', title: 'Finance Manager', desc: 'Presupuesto, gastos, ahorros y predicciones AI.' },
      { emoji: '❤️', title: 'Health Dashboard', desc: 'Monitoreo de sueño, nutrición y ejercicio.' },
      { emoji: '📅', title: 'Smart Calendar', desc: 'Calendario AI que optimiza tu agenda.' },
      { emoji: '🧘', title: 'Mindfulness', desc: 'Meditación, respiración y timers Pomodoro.' },
      { emoji: '📝', title: 'AI Journal', desc: 'Diario inteligente con análisis de sentimiento.' },
      { emoji: '📈', title: 'Habit Streaks', desc: 'Hábitos diarios con rachas y estadísticas.' },
      { emoji: '🔄', title: 'Rutinas Auto', desc: 'Rutinas mañana/noche con notificaciones.' },
      { emoji: '📱', title: 'Life Score', desc: 'Puntuación holística de vida.' },
    ],
  },
  fr: {
    badge: 'LifeOS AI — Votre OS Personnel',
    title: 'Organisez votre vie avec l\'intelligence artificielle',
    desc: 'LifeOS AI gère vos objectifs, finances, santé, routines et productivité — tout dans un seul dashboard IA.',
    cta: '🧠 Entrer dans LifeOS →',
    guideTitle: 'Ce que la plateforme inclut',
    guide1: 'Dashboard Personnel: Visualisation complète — objectifs, santé, finances, productivité',
    guide2: 'AI Life Coach: Assistant IA qui analyse vos habitudes et offre des recommandations quotidiennes',
    guide3: 'Habit Tracker: Suivi des habitudes avec séries, journal IA et réflexions guidées',
    stats: [
      { emoji: '🧠', value: 'AI', label: 'Life Coach' },
      { emoji: '📊', value: '360°', label: 'Vue complète' },
      { emoji: '🎯', value: '∞', label: 'Objectifs illimités' },
      { emoji: '⚡', value: '24/7', label: 'Toujours disponible' },
    ],
    features: [
      { emoji: '🎯', title: 'Goal Tracking', desc: 'Objectifs SMART avec jalons et progrès visuel.' },
      { emoji: '💰', title: 'Finance Manager', desc: 'Budget, dépenses, épargne et prédictions IA.' },
      { emoji: '❤️', title: 'Health Dashboard', desc: 'Suivi sommeil, nutrition et exercice.' },
      { emoji: '📅', title: 'Smart Calendar', desc: 'Calendrier IA optimisant votre emploi du temps.' },
      { emoji: '🧘', title: 'Mindfulness', desc: 'Méditation, respiration et timers Pomodoro.' },
      { emoji: '📝', title: 'AI Journal', desc: 'Journal intelligent avec analyse de sentiment.' },
      { emoji: '📈', title: 'Habit Streaks', desc: 'Habitudes quotidiennes avec séries et stats.' },
      { emoji: '🔄', title: 'Routines Auto', desc: 'Routines matin/soir avec notifications.' },
      { emoji: '📱', title: 'Life Score', desc: 'Score holistique de vie.' },
    ],
  },
  it: {
    badge: 'LifeOS AI — Il Tuo OS Personale',
    title: 'Organizza la tua vita con l\'intelligenza artificiale',
    desc: 'LifeOS AI gestisce obiettivi, finanze, salute, routine e produttività — tutto in una dashboard AI.',
    cta: '🧠 Entra in LifeOS →',
    guideTitle: 'Cosa include la piattaforma',
    guide1: 'Dashboard Personale: Visualizzazione completa — obiettivi, salute, finanze, produttività',
    guide2: 'AI Life Coach: Assistente AI che analizza i tuoi pattern e offre raccomandazioni giornaliere',
    guide3: 'Habit Tracker: Monitoraggio abitudini con streak, diario AI e riflessioni guidate',
    stats: [
      { emoji: '🧠', value: 'AI', label: 'Life Coach' },
      { emoji: '📊', value: '360°', label: 'Vista completa' },
      { emoji: '🎯', value: '∞', label: 'Obiettivi illimitati' },
      { emoji: '⚡', value: '24/7', label: 'Sempre disponibile' },
    ],
    features: [
      { emoji: '🎯', title: 'Goal Tracking', desc: 'Obiettivi SMART con milestone e progresso visuale.' },
      { emoji: '💰', title: 'Finance Manager', desc: 'Budget, spese, risparmi e previsioni AI.' },
      { emoji: '❤️', title: 'Health Dashboard', desc: 'Monitoraggio sonno, nutrizione ed esercizio.' },
      { emoji: '📅', title: 'Smart Calendar', desc: 'Calendario AI che ottimizza la tua agenda.' },
      { emoji: '🧘', title: 'Mindfulness', desc: 'Meditazione, respirazione e timer Pomodoro.' },
      { emoji: '📝', title: 'AI Journal', desc: 'Diario intelligente con analisi del sentiment.' },
      { emoji: '📈', title: 'Habit Streaks', desc: 'Abitudini giornaliere con streak e statistiche.' },
      { emoji: '🔄', title: 'Routine Auto', desc: 'Routine mattina/sera con notifiche.' },
      { emoji: '📱', title: 'Life Score', desc: 'Punteggio olistico della vita.' },
    ],
  },
  de: {
    badge: 'LifeOS AI — Dein persönliches Betriebssystem',
    title: 'Organisiere dein Leben mit künstlicher Intelligenz',
    desc: 'LifeOS AI verwaltet Ziele, Finanzen, Gesundheit, Routinen und Produktivität — alles in einem KI-Dashboard.',
    cta: '🧠 LifeOS starten →',
    guideTitle: 'Was die Plattform beinhaltet',
    guide1: 'Persönliches Dashboard: Komplette Lebensübersicht — Ziele, Gesundheit, Finanzen, Produktivität',
    guide2: 'AI Life Coach: KI-Assistent der deine Muster analysiert und tägliche Empfehlungen gibt',
    guide3: 'Habit Tracker: Gewohnheits-Tracking mit Streaks, KI-Tagebuch und geführten Reflexionen',
    stats: [
      { emoji: '🧠', value: 'AI', label: 'Life Coach' },
      { emoji: '📊', value: '360°', label: 'Komplettübersicht' },
      { emoji: '🎯', value: '∞', label: 'Unbegrenzte Ziele' },
      { emoji: '⚡', value: '24/7', label: 'Immer verfügbar' },
    ],
    features: [
      { emoji: '🎯', title: 'Goal Tracking', desc: 'SMART-Ziele mit Meilensteinen und visuellem Fortschritt.' },
      { emoji: '💰', title: 'Finance Manager', desc: 'Budget, Ausgaben, Ersparnisse und KI-Prognosen.' },
      { emoji: '❤️', title: 'Health Dashboard', desc: 'Schlaf-, Ernährungs- und Bewegungs-Tracking.' },
      { emoji: '📅', title: 'Smart Calendar', desc: 'KI-Kalender der deinen Zeitplan optimiert.' },
      { emoji: '🧘', title: 'Mindfulness', desc: 'Meditation, Atemübungen und Pomodoro-Timer.' },
      { emoji: '📝', title: 'AI Journal', desc: 'Intelligentes Tagebuch mit Sentiment-Analyse.' },
      { emoji: '📈', title: 'Habit Streaks', desc: 'Tägliche Gewohnheiten mit Streaks und Statistiken.' },
      { emoji: '🔄', title: 'Auto-Routinen', desc: 'Morgen-/Abendroutinen mit Benachrichtigungen.' },
      { emoji: '📱', title: 'Life Score', desc: 'Ganzheitlicher Lebensscore.' },
    ],
  },
  ar: {
    badge: 'LifeOS AI — نظام التشغيل الشخصي',
    title: 'نظم حياتك بالذكاء الاصطناعي',
    desc: 'LifeOS AI يدير أهدافك، ماليتك، صحتك، روتينك وإنتاجيتك — كل شيء في لوحة تحكم AI واحدة.',
    cta: '🧠 ادخل LifeOS ←',
    guideTitle: 'ما تتضمنه المنصة',
    guide1: 'لوحة تحكم شخصية: رؤية كاملة — أهداف، صحة، مالية، إنتاجية',
    guide2: 'مدرب حياة AI: مساعد AI يحلل أنماطك ويقدم توصيات يومية مخصصة',
    guide3: 'تتبع العادات: مراقبة العادات مع سلاسل، يوميات AI وتأملات موجهة',
    stats: [
      { emoji: '🧠', value: 'AI', label: 'مدرب حياة' },
      { emoji: '📊', value: '360°', label: 'رؤية كاملة' },
      { emoji: '🎯', value: '∞', label: 'أهداف غير محدودة' },
      { emoji: '⚡', value: '24/7', label: 'متاح دائماً' },
    ],
    features: [
      { emoji: '🎯', title: 'تتبع الأهداف', desc: 'أهداف SMART مع معالم وتقدم مرئي.' },
      { emoji: '💰', title: 'إدارة المالية', desc: 'ميزانية، نفقات، مدخرات وتنبؤات AI.' },
      { emoji: '❤️', title: 'لوحة الصحة', desc: 'مراقبة النوم، التغذية والتمارين.' },
      { emoji: '📅', title: 'تقويم ذكي', desc: 'تقويم AI يحسن جدولك تلقائياً.' },
      { emoji: '🧘', title: 'التأمل', desc: 'تأمل، تنفس ومؤقتات بومودورو.' },
      { emoji: '📝', title: 'يوميات AI', desc: 'يوميات ذكية مع تحليل المشاعر.' },
      { emoji: '📈', title: 'سلاسل العادات', desc: 'عادات يومية مع سلاسل وإحصائيات.' },
      { emoji: '🔄', title: 'روتينات تلقائية', desc: 'روتينات صباح/مساء مع إشعارات.' },
      { emoji: '📱', title: 'نقاط الحياة', desc: 'تقييم شامل للحياة.' },
    ],
  },
};

const LifeOSSection = () => {
  const [guideOpen, setGuideOpen] = useState(false);
  const { language } = useLanguage();
  const c = i18n[language] || i18n.en;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      className="max-w-6xl mx-auto px-3 sm:px-4 py-8 sm:py-10 lg:py-14"
    >
      <div className="relative bg-[#0a0510] border border-pink-500/15 rounded-2xl sm:rounded-[2.5rem] overflow-hidden">
        <div className="h-1 bg-gradient-to-r from-transparent via-pink-400 to-transparent animate-pulse" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-500/8 rounded-full blur-[100px]" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-fuchsia-500/5 rounded-full blur-[100px]" />

        <div className="relative p-5 sm:p-8 lg:p-12">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-5 sm:mb-6 lg:mb-8">
            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br from-pink-400 to-fuchsia-600 flex items-center justify-center shrink-0">
              <span className="text-2xl sm:text-3xl lg:text-4xl">🧠</span>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl lg:text-4xl font-extrabold text-pink-50 leading-tight">{c.badge}</h2>
              <p className="text-sm sm:text-base lg:text-lg text-pink-300 font-medium mt-1">{c.title}</p>
            </div>
          </div>

          <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-pink-500/10 mb-6 sm:mb-8 bg-black/50">
            <div className="bg-[#0d0812] border-b border-pink-500/10 px-4 py-2.5 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex-1 text-center">
                <span className="text-xs text-pink-300/60 font-mono">ssocietylifeos.lovable.app</span>
              </div>
            </div>
            <div className="aspect-video">
              <iframe src="https://ssocietylifeos.lovable.app" className="w-full h-full border-0" title="LifeOS AI Live" loading="lazy" sandbox="allow-scripts allow-same-origin" />
            </div>
          </div>

          <p className="text-pink-200/60 text-[13px] sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8">{c.desc}</p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 mb-6 sm:mb-8">
            {c.stats.map((s, i) => (
              <div key={i} className="text-center p-3 sm:p-4 lg:p-5 rounded-xl bg-pink-500/5 border border-pink-500/10">
                <div className="text-lg sm:text-xl mb-1">{s.emoji}</div>
                <div className="text-lg sm:text-2xl lg:text-3xl font-extrabold text-pink-400">{s.value}</div>
                <div className="text-[10px] sm:text-xs lg:text-sm text-pink-300/60 mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
            {c.features.map((f, i) => (
              <div key={i} className="flex items-start gap-3 p-3 sm:p-4 lg:p-5 rounded-xl border border-pink-500/10 hover:border-pink-500/25 transition-colors bg-pink-500/[0.03]">
                <span className="text-lg sm:text-xl lg:text-2xl">{f.emoji}</span>
                <div>
                  <div className="text-[13px] sm:text-sm lg:text-base font-semibold text-pink-50">{f.title}</div>
                  <div className="text-xs lg:text-sm text-pink-300/60 leading-relaxed">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <button onClick={() => setGuideOpen(!guideOpen)}
            className="w-full flex items-center justify-between p-3.5 sm:p-4 lg:p-5 rounded-xl bg-pink-500/5 border border-pink-500/10 mt-6 mb-5 sm:mb-6 text-pink-50 font-medium text-sm sm:text-base lg:text-lg">
            {c.guideTitle}
            <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform ${guideOpen ? 'rotate-180' : ''}`} />
          </button>
          {guideOpen && (
            <div className="p-4 sm:p-6 rounded-xl bg-pink-500/5 border border-pink-500/10 mb-5 sm:mb-6 text-[13px] sm:text-sm lg:text-base text-pink-300/60 space-y-3 leading-relaxed">
              <p><strong className="text-pink-50">{c.guide1.split(':')[0]}:</strong> {c.guide1.split(':').slice(1).join(':')}</p>
              <p><strong className="text-pink-50">{c.guide2.split(':')[0]}:</strong> {c.guide2.split(':').slice(1).join(':')}</p>
              <p><strong className="text-pink-50">{c.guide3.split(':')[0]}:</strong> {c.guide3.split(':').slice(1).join(':')}</p>
            </div>
          )}

          <a href="https://ssocietylifeos.lovable.app" target="_blank" rel="noopener noreferrer"
            className="block w-full text-center py-3.5 sm:py-4 lg:py-5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-pink-500 to-fuchsia-600 text-white font-bold text-base lg:text-lg hover:opacity-90 transition-opacity active:scale-[0.98]">
            {c.cta}
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default LifeOSSection;
