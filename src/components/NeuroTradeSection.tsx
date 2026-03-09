import { motion } from 'framer-motion';
import { TrendingUp, ExternalLink, Shield, Activity, BarChart3, Target, Brain, Bell } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const i18n: Record<string, {
  badge: string; title1: string; title2: string; desc: string;
  cta: string; ctaDemo: string;
  checks: string[];
  liveLabel: string; cycleLabel: string; portfolioLabel: string; portfolioChange: string;
  positions: { symbol: string; change: string }[];
  miniStats: { icon: string; value: string; label: string }[];
  howTitle: string; howDesc: string;
  steps: { icon: string; title: string; desc: string }[];
  symbolsTitle: string; symbolsDesc: string;
  featuresTitle: string;
  features: { title: string; desc: string }[];
  exploreCta: string; exploreDesc: string;
  disclaimer: string;
}> = {
  en: {
    badge: 'Autonomous AI Trading',
    title1: 'Trade Smarter.',
    title2: 'Autonomous. 24/7.',
    desc: 'AI trading bot that analyzes real-time news, calculates technical indicators, and automatically executes orders on the US stock market.',
    cta: 'View Live Dashboard →',
    ctaDemo: 'Free Demo',
    checks: ['No account required', 'Real-time data', 'Paper trading'],
    liveLabel: 'Live',
    cycleLabel: 'Cycle #247',
    portfolioLabel: 'Portfolio Equity',
    portfolioChange: '+$2,847 (+2.27%) · 8 positions',
    positions: [
      { symbol: 'NVDA', change: '+3.2%' },
      { symbol: 'AAPL', change: '+1.1%' },
      { symbol: 'TSLA', change: '-0.8%' },
    ],
    miniStats: [
      { icon: '📡', value: '8 Symbols', label: 'monitored' },
      { icon: '⏱️', value: '10 min', label: 'analysis cycle' },
      { icon: '📰', value: '~15 news', label: 'per symbol / cycle' },
      { icon: '🔋', value: '24/7', label: 'continuous uptime' },
    ],
    howTitle: 'How It Works',
    howDesc: 'From raw news to executed trades — in 3 automated steps.',
    steps: [
      { icon: '📰', title: 'News Collection', desc: 'NewsAPI, Yahoo Finance, Google News, Finviz, Seeking Alpha — aggregated in real-time.' },
      { icon: '🧠', title: 'Gemini AI Analysis', desc: 'Sentiment analysis, confidence scoring, detailed reasoning — powered by Google Gemini 2.0 Flash.' },
      { icon: '⚡', title: 'Automatic Execution', desc: 'RSI + MACD + EMA + Kelly position sizing → orders sent automatically via Alpaca Markets.' },
    ],
    symbolsTitle: 'Monitored Symbols',
    symbolsDesc: '8 major tech stocks, analyzed non-stop.',
    featuresTitle: 'Features',
    features: [
      { title: 'Stop Loss / Take Profit', desc: 'Every position protected with SL -5% and TP +12%.' },
      { title: 'RSI + MACD + EMA', desc: 'Technical indicators calculated in real-time for precise signals.' },
      { title: 'Market Regime Detection', desc: 'SPY analysis for trend detection: Bull, Bear, Volatile.' },
      { title: 'Dynamic Trailing Stop', desc: 'Follows price upward and auto-sells at -4% from peak.' },
      { title: 'Kelly Position Sizing', desc: 'Position sizes mathematically calculated for optimal returns.' },
      { title: 'Telegram Notifications', desc: 'Instant alerts for every trade and important event.' },
    ],
    exploreCta: 'Open Dashboard →',
    exploreDesc: 'Real data, active bot, no registration required.',
    disclaimer: 'Paper Trading Only. This is not financial advice.',
  },
  ro: {
    badge: 'Trading AI Autonom',
    title1: 'Tranzacționează mai inteligent.',
    title2: 'Autonom. 24/7.',
    desc: 'Bot de trading AI care analizează știri în timp real, calculează indicatori tehnici și execută automat ordine pe piața de acțiuni din SUA.',
    cta: 'Vezi Dashboard Live →',
    ctaDemo: 'Demo Gratuit',
    checks: ['Fără cont necesar', 'Date în timp real', 'Paper trading'],
    liveLabel: 'Live',
    cycleLabel: 'Ciclul #247',
    portfolioLabel: 'Capital Portofoliu',
    portfolioChange: '+$2,847 (+2.27%) · 8 poziții',
    positions: [
      { symbol: 'NVDA', change: '+3.2%' },
      { symbol: 'AAPL', change: '+1.1%' },
      { symbol: 'TSLA', change: '-0.8%' },
    ],
    miniStats: [
      { icon: '📡', value: '8 Simboluri', label: 'monitorizate' },
      { icon: '⏱️', value: '10 min', label: 'ciclu de analiză' },
      { icon: '📰', value: '~15 știri', label: 'per simbol / ciclu' },
      { icon: '🔋', value: '24/7', label: 'funcționare continuă' },
    ],
    howTitle: 'Cum Funcționează',
    howDesc: 'De la știri brute la tranzacții executate — în 3 pași automati.',
    steps: [
      { icon: '📰', title: 'Colectare Știri', desc: 'NewsAPI, Yahoo Finance, Google News, Finviz, Seeking Alpha — agregate în timp real.' },
      { icon: '🧠', title: 'Analiză Gemini AI', desc: 'Analiză sentiment, scor de încredere, raționament detaliat — powered by Google Gemini 2.0 Flash.' },
      { icon: '⚡', title: 'Execuție Automată', desc: 'RSI + MACD + EMA + Kelly position sizing → ordine trimise automat prin Alpaca Markets.' },
    ],
    symbolsTitle: 'Simboluri Monitorizate',
    symbolsDesc: '8 acțiuni tech majore, analizate non-stop.',
    featuresTitle: 'Funcționalități',
    features: [
      { title: 'Stop Loss / Take Profit', desc: 'Fiecare poziție protejată cu SL -5% și TP +12%.' },
      { title: 'RSI + MACD + EMA', desc: 'Indicatori tehnici calculați în timp real pentru semnale precise.' },
      { title: 'Detectare Regim de Piață', desc: 'Analiză SPY pentru detectarea trendului: Bull, Bear, Volatil.' },
      { title: 'Trailing Stop Dinamic', desc: 'Urmărește prețul în sus și vinde automat la -4% de la vârf.' },
      { title: 'Kelly Position Sizing', desc: 'Dimensiunea pozițiilor calculată matematic pentru randamente optime.' },
      { title: 'Notificări Telegram', desc: 'Alerte instant pentru fiecare tranzacție și eveniment important.' },
    ],
    exploreCta: 'Deschide Dashboard →',
    exploreDesc: 'Date reale, bot activ, fără înregistrare.',
    disclaimer: 'Doar Paper Trading. Aceasta nu este consiliere financiară.',
  },
  es: {
    badge: 'Trading IA Autónomo',
    title1: 'Opera más inteligente.',
    title2: 'Autónomo. 24/7.',
    desc: 'Bot de trading IA que analiza noticias en tiempo real, calcula indicadores técnicos y ejecuta órdenes automáticamente en el mercado de EE.UU.',
    cta: 'Ver Dashboard en Vivo →',
    ctaDemo: 'Demo Gratis',
    checks: ['Sin cuenta requerida', 'Datos en tiempo real', 'Paper trading'],
    liveLabel: 'Live',
    cycleLabel: 'Ciclo #247',
    portfolioLabel: 'Capital del Portafolio',
    portfolioChange: '+$2,847 (+2.27%) · 8 posiciones',
    positions: [{ symbol: 'NVDA', change: '+3.2%' }, { symbol: 'AAPL', change: '+1.1%' }, { symbol: 'TSLA', change: '-0.8%' }],
    miniStats: [
      { icon: '📡', value: '8 Símbolos', label: 'monitoreados' },
      { icon: '⏱️', value: '10 min', label: 'ciclo de análisis' },
      { icon: '📰', value: '~15 noticias', label: 'por símbolo / ciclo' },
      { icon: '🔋', value: '24/7', label: 'tiempo activo continuo' },
    ],
    howTitle: 'Cómo Funciona',
    howDesc: 'De noticias crudas a operaciones ejecutadas — en 3 pasos automáticos.',
    steps: [
      { icon: '📰', title: 'Recopilación de Noticias', desc: 'NewsAPI, Yahoo Finance, Google News, Finviz, Seeking Alpha — agregadas en tiempo real.' },
      { icon: '🧠', title: 'Análisis Gemini IA', desc: 'Análisis de sentimiento, puntuación de confianza — por Google Gemini 2.0 Flash.' },
      { icon: '⚡', title: 'Ejecución Automática', desc: 'RSI + MACD + EMA + Kelly position sizing → órdenes vía Alpaca Markets.' },
    ],
    symbolsTitle: 'Símbolos Monitoreados',
    symbolsDesc: '8 acciones tech principales, analizadas sin parar.',
    featuresTitle: 'Características',
    features: [
      { title: 'Stop Loss / Take Profit', desc: 'Cada posición protegida con SL -5% y TP +12%.' },
      { title: 'RSI + MACD + EMA', desc: 'Indicadores técnicos calculados en tiempo real.' },
      { title: 'Detección de Régimen', desc: 'Análisis SPY para detección de tendencia.' },
      { title: 'Trailing Stop Dinámico', desc: 'Sigue el precio al alza y vende a -4% del pico.' },
      { title: 'Kelly Position Sizing', desc: 'Tamaño de posiciones calculado matemáticamente.' },
      { title: 'Notificaciones Telegram', desc: 'Alertas instantáneas para cada operación.' },
    ],
    exploreCta: 'Abrir Dashboard →',
    exploreDesc: 'Datos reales, bot activo, sin registro.',
    disclaimer: 'Solo Paper Trading. Esto no es asesoramiento financiero.',
  },
  fr: {
    badge: 'Trading IA Autonome',
    title1: 'Tradez plus intelligemment.',
    title2: 'Autonome. 24/7.',
    desc: 'Bot de trading IA qui analyse les actualités en temps réel, calcule les indicateurs techniques et exécute automatiquement des ordres sur le marché américain.',
    cta: 'Voir le Dashboard en Direct →',
    ctaDemo: 'Démo Gratuite',
    checks: ['Aucun compte requis', 'Données en temps réel', 'Paper trading'],
    liveLabel: 'Live',
    cycleLabel: 'Cycle #247',
    portfolioLabel: 'Capital du Portefeuille',
    portfolioChange: '+$2,847 (+2.27%) · 8 positions',
    positions: [{ symbol: 'NVDA', change: '+3.2%' }, { symbol: 'AAPL', change: '+1.1%' }, { symbol: 'TSLA', change: '-0.8%' }],
    miniStats: [
      { icon: '📡', value: '8 Symboles', label: 'surveillés' },
      { icon: '⏱️', value: '10 min', label: "cycle d'analyse" },
      { icon: '📰', value: '~15 news', label: 'par symbole / cycle' },
      { icon: '🔋', value: '24/7', label: 'disponibilité continue' },
    ],
    howTitle: 'Comment Ça Marche',
    howDesc: 'Des actualités brutes aux trades exécutés — en 3 étapes automatisées.',
    steps: [
      { icon: '📰', title: "Collecte d'Actualités", desc: 'NewsAPI, Yahoo Finance, Google News, Finviz, Seeking Alpha — agrégées en temps réel.' },
      { icon: '🧠', title: 'Analyse Gemini IA', desc: 'Analyse de sentiment, scoring de confiance — par Google Gemini 2.0 Flash.' },
      { icon: '⚡', title: 'Exécution Automatique', desc: 'RSI + MACD + EMA + Kelly position sizing → ordres via Alpaca Markets.' },
    ],
    symbolsTitle: 'Symboles Surveillés',
    symbolsDesc: '8 actions tech majeures, analysées en continu.',
    featuresTitle: 'Fonctionnalités',
    features: [
      { title: 'Stop Loss / Take Profit', desc: 'Chaque position protégée avec SL -5% et TP +12%.' },
      { title: 'RSI + MACD + EMA', desc: 'Indicateurs techniques calculés en temps réel.' },
      { title: 'Détection de Régime', desc: 'Analyse SPY pour détection de tendance.' },
      { title: 'Trailing Stop Dynamique', desc: 'Suit le prix à la hausse et vend à -4% du pic.' },
      { title: 'Kelly Position Sizing', desc: 'Taille des positions calculée mathématiquement.' },
      { title: 'Notifications Telegram', desc: 'Alertes instantanées pour chaque trade.' },
    ],
    exploreCta: 'Ouvrir le Dashboard →',
    exploreDesc: 'Données réelles, bot actif, sans inscription.',
    disclaimer: "Paper Trading uniquement. Ceci n'est pas un conseil financier.",
  },
  it: {
    badge: 'Trading IA Autonomo',
    title1: 'Fai trading più smart.',
    title2: 'Autonomo. 24/7.',
    desc: 'Bot di trading IA che analizza notizie in tempo reale, calcola indicatori tecnici ed esegue automaticamente ordini sul mercato USA.',
    cta: 'Vedi Dashboard Live →',
    ctaDemo: 'Demo Gratuita',
    checks: ['Nessun account richiesto', 'Dati in tempo reale', 'Paper trading'],
    liveLabel: 'Live',
    cycleLabel: 'Ciclo #247',
    portfolioLabel: 'Capitale Portafoglio',
    portfolioChange: '+$2,847 (+2.27%) · 8 posizioni',
    positions: [{ symbol: 'NVDA', change: '+3.2%' }, { symbol: 'AAPL', change: '+1.1%' }, { symbol: 'TSLA', change: '-0.8%' }],
    miniStats: [
      { icon: '📡', value: '8 Simboli', label: 'monitorati' },
      { icon: '⏱️', value: '10 min', label: 'ciclo di analisi' },
      { icon: '📰', value: '~15 notizie', label: 'per simbolo / ciclo' },
      { icon: '🔋', value: '24/7', label: 'attività continua' },
    ],
    howTitle: 'Come Funziona',
    howDesc: 'Dalle notizie grezze ai trade eseguiti — in 3 passaggi automatizzati.',
    steps: [
      { icon: '📰', title: 'Raccolta Notizie', desc: 'NewsAPI, Yahoo Finance, Google News, Finviz, Seeking Alpha — aggregati in tempo reale.' },
      { icon: '🧠', title: 'Analisi Gemini IA', desc: 'Analisi del sentiment, punteggio di fiducia — da Google Gemini 2.0 Flash.' },
      { icon: '⚡', title: 'Esecuzione Automatica', desc: 'RSI + MACD + EMA + Kelly position sizing → ordini via Alpaca Markets.' },
    ],
    symbolsTitle: 'Simboli Monitorati',
    symbolsDesc: '8 azioni tech principali, analizzate senza sosta.',
    featuresTitle: 'Funzionalità',
    features: [
      { title: 'Stop Loss / Take Profit', desc: 'Ogni posizione protetta con SL -5% e TP +12%.' },
      { title: 'RSI + MACD + EMA', desc: 'Indicatori tecnici calcolati in tempo reale.' },
      { title: 'Rilevamento Regime', desc: 'Analisi SPY per rilevamento trend.' },
      { title: 'Trailing Stop Dinamico', desc: 'Segue il prezzo al rialzo e vende a -4% dal picco.' },
      { title: 'Kelly Position Sizing', desc: 'Dimensione posizioni calcolata matematicamente.' },
      { title: 'Notifiche Telegram', desc: 'Avvisi istantanei per ogni trade.' },
    ],
    exploreCta: 'Apri Dashboard →',
    exploreDesc: 'Dati reali, bot attivo, senza registrazione.',
    disclaimer: 'Solo Paper Trading. Questo non è consulenza finanziaria.',
  },
  de: {
    badge: 'Autonomes KI-Trading',
    title1: 'Smarter traden.',
    title2: 'Autonom. 24/7.',
    desc: 'KI-Trading-Bot, der Nachrichten in Echtzeit analysiert, technische Indikatoren berechnet und automatisch Orders am US-Aktienmarkt ausführt.',
    cta: 'Live Dashboard ansehen →',
    ctaDemo: 'Kostenlose Demo',
    checks: ['Kein Konto erforderlich', 'Echtzeit-Daten', 'Paper Trading'],
    liveLabel: 'Live',
    cycleLabel: 'Zyklus #247',
    portfolioLabel: 'Portfolio-Kapital',
    portfolioChange: '+$2,847 (+2.27%) · 8 Positionen',
    positions: [{ symbol: 'NVDA', change: '+3.2%' }, { symbol: 'AAPL', change: '+1.1%' }, { symbol: 'TSLA', change: '-0.8%' }],
    miniStats: [
      { icon: '📡', value: '8 Symbole', label: 'überwacht' },
      { icon: '⏱️', value: '10 Min', label: 'Analysezyklus' },
      { icon: '📰', value: '~15 News', label: 'pro Symbol / Zyklus' },
      { icon: '🔋', value: '24/7', label: 'kontinuierliche Betriebszeit' },
    ],
    howTitle: 'So funktioniert es',
    howDesc: 'Von Roh-Nachrichten zu ausgeführten Trades — in 3 automatisierten Schritten.',
    steps: [
      { icon: '📰', title: 'Nachrichtensammlung', desc: 'NewsAPI, Yahoo Finance, Google News, Finviz, Seeking Alpha — in Echtzeit aggregiert.' },
      { icon: '🧠', title: 'Gemini KI-Analyse', desc: 'Sentimentanalyse, Vertrauensbewertung — von Google Gemini 2.0 Flash.' },
      { icon: '⚡', title: 'Automatische Ausführung', desc: 'RSI + MACD + EMA + Kelly Position Sizing → Orders über Alpaca Markets.' },
    ],
    symbolsTitle: 'Überwachte Symbole',
    symbolsDesc: '8 große Tech-Aktien, non-stop analysiert.',
    featuresTitle: 'Funktionen',
    features: [
      { title: 'Stop Loss / Take Profit', desc: 'Jede Position geschützt mit SL -5% und TP +12%.' },
      { title: 'RSI + MACD + EMA', desc: 'Technische Indikatoren in Echtzeit berechnet.' },
      { title: 'Marktregime-Erkennung', desc: 'SPY-Analyse zur Trenderkennung.' },
      { title: 'Dynamischer Trailing Stop', desc: 'Folgt dem Preis und verkauft bei -4% vom Hoch.' },
      { title: 'Kelly Position Sizing', desc: 'Positionsgrößen mathematisch berechnet.' },
      { title: 'Telegram-Benachrichtigungen', desc: 'Sofortige Alerts für jeden Trade.' },
    ],
    exploreCta: 'Dashboard öffnen →',
    exploreDesc: 'Echte Daten, aktiver Bot, keine Registrierung.',
    disclaimer: 'Nur Paper Trading. Dies ist keine Finanzberatung.',
  },
  ar: {
    badge: 'تداول ذكاء اصطناعي مستقل',
    title1: 'تداول أذكى.',
    title2: 'مستقل. 24/7.',
    desc: 'بوت تداول ذكاء اصطناعي يحلل الأخبار في الوقت الفعلي، يحسب المؤشرات التقنية وينفذ الأوامر تلقائياً في سوق الأسهم الأمريكي.',
    cta: '← عرض لوحة التحكم المباشرة',
    ctaDemo: 'عرض مجاني',
    checks: ['لا حاجة لحساب', 'بيانات فورية', 'تداول ورقي'],
    liveLabel: 'مباشر',
    cycleLabel: 'الدورة #247',
    portfolioLabel: 'رأس مال المحفظة',
    portfolioChange: '+$2,847 (+2.27%) · 8 مراكز',
    positions: [{ symbol: 'NVDA', change: '+3.2%' }, { symbol: 'AAPL', change: '+1.1%' }, { symbol: 'TSLA', change: '-0.8%' }],
    miniStats: [
      { icon: '📡', value: '8 رموز', label: 'مراقبة' },
      { icon: '⏱️', value: '10 دق', label: 'دورة تحليل' },
      { icon: '📰', value: '~15 خبر', label: 'لكل رمز / دورة' },
      { icon: '🔋', value: '24/7', label: 'تشغيل مستمر' },
    ],
    howTitle: 'كيف يعمل',
    howDesc: 'من الأخبار الخام إلى الصفقات المنفذة — في 3 خطوات آلية.',
    steps: [
      { icon: '📰', title: 'جمع الأخبار', desc: 'NewsAPI, Yahoo Finance, Google News, Finviz, Seeking Alpha — مجمعة في الوقت الفعلي.' },
      { icon: '🧠', title: 'تحليل Gemini AI', desc: 'تحليل المشاعر، تقييم الثقة — بواسطة Google Gemini 2.0 Flash.' },
      { icon: '⚡', title: 'تنفيذ تلقائي', desc: 'RSI + MACD + EMA + Kelly position sizing → أوامر عبر Alpaca Markets.' },
    ],
    symbolsTitle: 'الرموز المراقبة',
    symbolsDesc: '8 أسهم تكنولوجيا رئيسية، تحليل مستمر.',
    featuresTitle: 'الميزات',
    features: [
      { title: 'وقف الخسارة / جني الأرباح', desc: 'كل مركز محمي بـ SL -5% و TP +12%.' },
      { title: 'RSI + MACD + EMA', desc: 'مؤشرات تقنية محسوبة في الوقت الفعلي.' },
      { title: 'كشف نظام السوق', desc: 'تحليل SPY لكشف الاتجاه.' },
      { title: 'وقف متحرك ديناميكي', desc: 'يتبع السعر صعوداً ويبيع عند -4% من القمة.' },
      { title: 'Kelly Position Sizing', desc: 'حجم المراكز محسوب رياضياً.' },
      { title: 'إشعارات تيليجرام', desc: 'تنبيهات فورية لكل صفقة.' },
    ],
    exploreCta: '← فتح لوحة التحكم',
    exploreDesc: 'بيانات حقيقية، بوت نشط، بدون تسجيل.',
    disclaimer: 'تداول ورقي فقط. هذا ليس نصيحة مالية.',
  },
};

const symbols = [
  { ticker: 'AAPL', name: 'Apple Inc.' },
  { ticker: 'MSFT', name: 'Microsoft' },
  { ticker: 'NVDA', name: 'NVIDIA' },
  { ticker: 'TSLA', name: 'Tesla Inc.' },
  { ticker: 'GOOGL', name: 'Alphabet' },
  { ticker: 'AMZN', name: 'Amazon' },
  { ticker: 'META', name: 'Meta Platforms' },
  { ticker: 'AMD', name: 'AMD Inc.' },
];

const NeuroTradeSection = () => {
  const { language } = useLanguage();
  const c = i18n[language] || i18n.en;
  const featureIcons = [Shield, Activity, BarChart3, Target, Brain, Bell];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      className="max-w-6xl mx-auto px-3 sm:px-4 py-8 sm:py-10 lg:py-14"
    >
      <div className="relative bg-[#060a14] border border-blue-500/15 rounded-2xl sm:rounded-[2.5rem] overflow-hidden">
        {/* Top glow line */}
        <div className="h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-pulse" />

        {/* Background blurs */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/8 rounded-full blur-[100px]" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500/5 rounded-full blur-[100px]" />

        <div className="relative p-5 sm:p-8 lg:p-12">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-5 sm:mb-6 lg:mb-8">
            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shrink-0">
              <TrendingUp className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 text-white" />
            </div>
            <div>
              <span className="text-xs lg:text-sm text-blue-400 font-medium">{c.badge}</span>
              <h2 className="text-xl sm:text-2xl lg:text-4xl font-extrabold leading-tight">
                <span className="text-blue-50">{c.title1}</span>{' '}
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">{c.title2}</span>
              </h2>
            </div>
          </div>

          {/* Description */}
          <p className="text-blue-100/70 text-[13px] sm:text-sm lg:text-lg leading-relaxed mb-6 sm:mb-8">{c.desc}</p>

          {/* Checks */}
          <div className="flex flex-wrap gap-3 mb-6 sm:mb-8">
            {c.checks.map((ch, i) => (
              <span key={i} className="text-xs sm:text-sm text-blue-200/60 flex items-center gap-1.5">
                <span className="text-emerald-400">✓</span>{ch}
              </span>
            ))}
          </div>

          {/* Live portfolio preview */}
          <div className="rounded-xl sm:rounded-2xl border border-blue-500/10 bg-blue-500/[0.03] p-4 sm:p-5 mb-6 sm:mb-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                {c.liveLabel}
              </span>
              <span className="text-xs text-blue-200/40">{c.cycleLabel}</span>
            </div>
            <div className="text-xs text-blue-200/40 mb-1">{c.portfolioLabel}</div>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-blue-50 mb-1">$140,615</div>
            <div className="text-sm text-emerald-400 mb-3">{c.portfolioChange}</div>
            <div className="flex gap-2 sm:gap-3">
              {c.positions.map((p, i) => (
                <div key={i} className="px-3 py-1.5 rounded-lg bg-white/5 text-xs font-medium">
                  <span className="text-blue-50">{p.symbol}</span>{' '}
                  <span className={p.change.startsWith('+') ? 'text-emerald-400' : 'text-red-400'}>{p.change}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Live site preview */}
          <div className="rounded-xl sm:rounded-2xl border border-blue-500/10 bg-blue-500/[0.03] overflow-hidden mb-6 sm:mb-8">
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-blue-500/10">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
              </div>
              <span className="text-[10px] sm:text-xs text-blue-200/40 font-mono truncate">neurossociety.lovable.app</span>
            </div>
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src="https://neurossociety.lovable.app"
                className="absolute inset-0 w-full h-full border-0"
                title="NeuroTrade Live Preview"
                loading="lazy"
              />
            </div>
          </div>

          {/* Mini stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mb-6 sm:mb-8">
            {c.miniStats.map((s, i) => (
              <div key={i} className="text-center p-3 sm:p-4 lg:p-5 rounded-xl bg-blue-500/5 border border-blue-500/10">
                <div className="text-xl sm:text-2xl mb-1">{s.icon}</div>
                <div className="text-sm sm:text-base lg:text-lg font-extrabold text-blue-400">{s.value}</div>
                <div className="text-[10px] sm:text-xs lg:text-sm text-blue-200/40 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>

          {/* How it works */}
          <div className="mb-6 sm:mb-8">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-extrabold text-blue-50 mb-1">{c.howTitle}</h3>
            <p className="text-xs sm:text-sm text-blue-200/40 mb-4">{c.howDesc}</p>
            <div className="grid sm:grid-cols-3 gap-2 sm:gap-3">
              {c.steps.map((step, i) => (
                <div key={i} className="p-3.5 sm:p-4 lg:p-5 rounded-xl bg-blue-500/[0.03] border border-blue-500/10">
                  <div className="text-2xl mb-2">{step.icon}</div>
                  <div className="text-sm sm:text-base font-bold text-blue-50 mb-1">{step.title}</div>
                  <div className="text-xs sm:text-sm text-blue-200/40 leading-relaxed">{step.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Monitored symbols */}
          <div className="mb-6 sm:mb-8">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-extrabold text-blue-50 mb-1">{c.symbolsTitle}</h3>
            <p className="text-xs sm:text-sm text-blue-200/40 mb-4">{c.symbolsDesc}</p>
            <div className="grid grid-cols-4 gap-2 sm:gap-3">
              {symbols.map((s) => (
                <div key={s.ticker} className="p-2.5 sm:p-3 lg:p-4 rounded-xl bg-blue-500/[0.03] border border-blue-500/10 text-center">
                  <div className="text-sm sm:text-base font-bold text-blue-400">{s.ticker}</div>
                  <div className="text-[9px] sm:text-[10px] lg:text-xs text-blue-200/40 mt-0.5">{s.name}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="mb-6 sm:mb-8">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-extrabold text-blue-50 mb-4">{c.featuresTitle}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
              {c.features.map((f, i) => {
                const Icon = featureIcons[i] || Shield;
                return (
                  <div key={i} className="flex items-start gap-3 p-3 sm:p-4 lg:p-5 rounded-xl border border-blue-500/10 hover:border-blue-500/25 transition-colors bg-blue-500/[0.03]">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 mt-0.5 shrink-0" />
                    <div>
                      <div className="text-[13px] sm:text-sm lg:text-base font-semibold text-blue-50">{f.title}</div>
                      <div className="text-xs lg:text-sm text-blue-200/40 leading-relaxed">{f.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Explore CTA */}
          <p className="text-xs sm:text-sm text-blue-200/40 text-center mb-4">{c.exploreDesc}</p>
          <a
            href="https://neurossociety.lovable.app"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center py-3.5 sm:py-4 lg:py-5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold text-base lg:text-lg hover:opacity-90 transition-opacity active:scale-[0.98]"
          >
            {c.exploreCta}
          </a>
          <p className="text-[10px] sm:text-xs text-blue-200/20 text-center mt-4">{c.disclaimer}</p>
        </div>
      </div>
    </motion.section>
  );
};

export default NeuroTradeSection;
