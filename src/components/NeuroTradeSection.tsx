import { motion } from 'framer-motion';
import { TrendingUp, ExternalLink, Shield, Activity, BarChart3, Target, Brain, Bell } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const botRanking = [
  { rank: '🥇', emoji: '🧠', name: 'Z1', strategy: 'Multi-Market', equity: '$38,043.95', pnl: '+$25,043.95', pnlPct: '+215.72%', winRate: '0%', positions: '11/20', trades: 50, exchange: '24/7', positive: true },
  { rank: '🥈', emoji: '💨', name: 'HERMES', strategy: 'Scalping Crypto', equity: '$26,282.77', pnl: '+$6,282.77', pnlPct: '+31.41%', winRate: '—', positions: '0/4', trades: 0, exchange: '24/7', positive: true },
  { rank: '🥉', emoji: '⚡', name: 'V2', strategy: 'Technical Analysis', equity: '$10,055.98', pnl: '+$55.98', pnlPct: '+0.56%', winRate: '88%', positions: '19/20', trades: 39, exchange: '24/7', positive: true },
  { rank: '#4', emoji: '⚡', name: 'OMEGA', strategy: 'Regime Detection', equity: '$10,011.88', pnl: '+$11.88', pnlPct: '+0.12%', winRate: '25%', positions: '2/10', trades: 46, exchange: 'L-V', positive: true },
  { rank: '#5', emoji: '🤖', name: 'V1', strategy: 'News Sentiment', equity: '$10,000.00', pnl: '+$0.00', pnlPct: '0.00%', winRate: '50%', positions: '0/10', trades: 24, exchange: 'L-V', positive: true },
  { rank: '#6', emoji: '🚀', name: 'V3', strategy: 'Full Stack', equity: '$10,000.00', pnl: '+$0.00', pnlPct: '0.00%', winRate: '—', positions: '0/20', trades: 0, exchange: '24/7', positive: true },
  { rank: '#7', emoji: '🌙', name: 'APOLLO', strategy: 'Stat Arb', equity: '$10,000.00', pnl: '+$0.00', pnlPct: '0.00%', winRate: '—', positions: '0/10', trades: 0, exchange: '24/7', positive: true },
  { rank: '#8', emoji: '⚡', name: 'ZEUS', strategy: 'Crypto Momentum', equity: '$9,994.64', pnl: '-$5.36', pnlPct: '-0.05%', winRate: '0%', positions: '0/10', trades: 2, exchange: 'L-V', positive: false },
];

const i18n: Record<string, {
  badge: string; title1: string; title2: string; desc: string;
  cta: string; ctaDemo: string;
  checks: string[];
  liveLabel: string;
  fleetTitle: string; fleetSub: string;
  totalEquityLabel: string; totalEquityChange: string;
  capitalLabel: string; capitalDesc: string;
  botsLabel: string; botsDesc: string;
  positionsLabel: string; positionsDesc: string;
  tradesLabel: string; tradesDesc: string;
  equityLabel: string;
  rankingTitle: string;
  colBot: string; colEquity: string; colPnl: string; colPnlPct: string; colWinRate: string; colPositions: string; colTrades: string; colExchange: string;
  howTitle: string; howDesc: string;
  steps: { icon: string; title: string; desc: string }[];
  featuresTitle: string;
  features: { title: string; desc: string }[];
  exploreCta: string; exploreDesc: string;
  disclaimer: string;
}> = {
  en: {
    badge: 'Autonomous AI Trading',
    title1: 'Trade Smarter.',
    title2: 'Autonomous. 24/7.',
    desc: 'Fleet of 8 autonomous AI trading bots running 24/7 on crypto & stock markets. Real-time monitoring, automated execution, live equity tracking — all managed from a single dashboard.',
    cta: 'View Live Dashboard →',
    ctaDemo: 'Free Demo',
    checks: ['8 Active Bots', 'Live Data', '$124K+ Equity', '161 Trades Logged'],
    liveLabel: '8/8 LIVE',
    fleetTitle: '🤖 Fleet Overview',
    fleetSub: 'All 8 active bots · Refresh 10s',
    totalEquityLabel: 'Total Fleet Equity',
    totalEquityChange: '↑ +$31,389.22 (+33.75%)',
    capitalLabel: 'Total Initial Capital',
    capitalDesc: '7×$10k + HERMES $20k',
    botsLabel: 'Active Bots',
    botsDesc: 'with live data',
    positionsLabel: 'Open Positions',
    positionsDesc: 'right now',
    tradesLabel: 'Logged Trades',
    tradesDesc: 'in Supabase',
    equityLabel: 'Total fleet equity',
    rankingTitle: '🏆 Bot Ranking — Performance',
    colBot: 'Bot', colEquity: 'Equity', colPnl: 'P&L', colPnlPct: 'P&L %', colWinRate: 'Win Rate', colPositions: 'Positions', colTrades: 'Trades', colExchange: 'Exchange',
    howTitle: 'How It Works',
    howDesc: 'From raw news to executed trades — in 3 automated steps.',
    steps: [
      { icon: '📰', title: 'News Collection', desc: 'NewsAPI, Yahoo Finance, Google News, Finviz, Seeking Alpha — aggregated in real-time.' },
      { icon: '🧠', title: 'Gemini AI Analysis', desc: 'Sentiment analysis, confidence scoring, detailed reasoning — powered by Google Gemini 2.0 Flash.' },
      { icon: '⚡', title: 'Automatic Execution', desc: 'RSI + MACD + EMA + Kelly position sizing → orders sent automatically via Alpaca Markets.' },
    ],
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
    exploreDesc: 'Real data, active bots, no registration required.',
    disclaimer: 'Paper Trading Only. This is not financial advice.',
  },
  ro: {
    badge: 'Trading AI Autonom',
    title1: 'Tranzacționează mai inteligent.',
    title2: 'Autonom. 24/7.',
    desc: 'Flotă de 8 boți AI autonomi care rulează 24/7 pe piețele crypto și de acțiuni. Monitorizare în timp real, execuție automată, tracking equity live — totul gestionat dintr-un singur dashboard.',
    cta: 'Vezi Dashboard Live →',
    ctaDemo: 'Demo Gratuit',
    checks: ['8 Boți Activi', 'Date Live', '$124K+ Equity', '161 Tranzacții Înregistrate'],
    liveLabel: '8/8 LIVE',
    fleetTitle: '🤖 Fleet Overview',
    fleetSub: 'Toți 8 boții activi · Refresh 10s',
    totalEquityLabel: 'Total Equity Flotă',
    totalEquityChange: '↑ +$31,389.22 (+33.75%)',
    capitalLabel: 'Capital inițial total',
    capitalDesc: '7×$10k + HERMES $20k',
    botsLabel: 'Boți activi',
    botsDesc: 'cu date live',
    positionsLabel: 'Poziții deschise',
    positionsDesc: 'în acest moment',
    tradesLabel: 'Trades înregistrate',
    tradesDesc: 'în Supabase',
    equityLabel: 'Equity totală flotă',
    rankingTitle: '🏆 Clasament Boți — Performance',
    colBot: 'Bot', colEquity: 'Equity', colPnl: 'P&L', colPnlPct: 'P&L %', colWinRate: 'Win Rate', colPositions: 'Poziții', colTrades: 'Trades', colExchange: 'Exchange',
    howTitle: 'Cum Funcționează',
    howDesc: 'De la știri brute la tranzacții executate — în 3 pași automati.',
    steps: [
      { icon: '📰', title: 'Colectare Știri', desc: 'NewsAPI, Yahoo Finance, Google News, Finviz, Seeking Alpha — agregate în timp real.' },
      { icon: '🧠', title: 'Analiză Gemini AI', desc: 'Analiză sentiment, scor de încredere, raționament detaliat — powered by Google Gemini 2.0 Flash.' },
      { icon: '⚡', title: 'Execuție Automată', desc: 'RSI + MACD + EMA + Kelly position sizing → ordine trimise automat prin Alpaca Markets.' },
    ],
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
    exploreDesc: 'Date reale, boți activi, fără înregistrare.',
    disclaimer: 'Doar Paper Trading. Aceasta nu este consiliere financiară.',
  },
  es: {
    badge: 'Trading IA Autónomo', title1: 'Opera más inteligente.', title2: 'Autónomo. 24/7.',
    desc: 'Flota de 8 bots IA autónomos operando 24/7 en mercados crypto y acciones. Monitoreo en tiempo real, ejecución automática, seguimiento de equity en vivo.',
    cta: 'Ver Dashboard en Vivo →', ctaDemo: 'Demo Gratis',
    checks: ['8 Bots Activos', 'Datos en Vivo', '$124K+ Equity', '161 Trades'],
    liveLabel: '8/8 LIVE', fleetTitle: '🤖 Fleet Overview', fleetSub: 'Los 8 bots activos · Refresh 10s',
    totalEquityLabel: 'Equity Total Flota', totalEquityChange: '↑ +$31,389.22 (+33.75%)',
    capitalLabel: 'Capital inicial total', capitalDesc: '7×$10k + HERMES $20k',
    botsLabel: 'Bots activos', botsDesc: 'con datos en vivo',
    positionsLabel: 'Posiciones abiertas', positionsDesc: 'ahora mismo',
    tradesLabel: 'Trades registrados', tradesDesc: 'en Supabase',
    equityLabel: 'Equity total flota',
    rankingTitle: '🏆 Ranking Bots — Rendimiento',
    colBot: 'Bot', colEquity: 'Equity', colPnl: 'P&L', colPnlPct: 'P&L %', colWinRate: 'Win Rate', colPositions: 'Posiciones', colTrades: 'Trades', colExchange: 'Exchange',
    howTitle: 'Cómo Funciona', howDesc: 'De noticias a operaciones — en 3 pasos automáticos.',
    steps: [
      { icon: '📰', title: 'Recopilación', desc: 'NewsAPI, Yahoo Finance, Google News, Finviz, Seeking Alpha.' },
      { icon: '🧠', title: 'Análisis Gemini IA', desc: 'Sentimiento, confianza — Google Gemini 2.0 Flash.' },
      { icon: '⚡', title: 'Ejecución Automática', desc: 'RSI + MACD + EMA + Kelly → Alpaca Markets.' },
    ],
    featuresTitle: 'Características',
    features: [
      { title: 'Stop Loss / Take Profit', desc: 'SL -5% y TP +12%.' },
      { title: 'RSI + MACD + EMA', desc: 'Indicadores en tiempo real.' },
      { title: 'Detección de Régimen', desc: 'Análisis SPY.' },
      { title: 'Trailing Stop', desc: 'Vende a -4% del pico.' },
      { title: 'Kelly Sizing', desc: 'Posiciones calculadas.' },
      { title: 'Telegram', desc: 'Alertas instantáneas.' },
    ],
    exploreCta: 'Abrir Dashboard →', exploreDesc: 'Datos reales, sin registro.',
    disclaimer: 'Solo Paper Trading. No es asesoramiento financiero.',
  },
  fr: {
    badge: 'Trading IA Autonome', title1: 'Tradez plus intelligemment.', title2: 'Autonome. 24/7.',
    desc: 'Flotte de 8 bots IA autonomes 24/7 sur les marchés crypto et actions. Monitoring en temps réel, exécution automatique, suivi equity en direct.',
    cta: 'Voir le Dashboard →', ctaDemo: 'Démo Gratuite',
    checks: ['8 Bots Actifs', 'Données Live', '$124K+ Equity', '161 Trades'],
    liveLabel: '8/8 LIVE', fleetTitle: '🤖 Fleet Overview', fleetSub: 'Les 8 bots actifs · Refresh 10s',
    totalEquityLabel: 'Equity Totale Flotte', totalEquityChange: '↑ +$31,389.22 (+33.75%)',
    capitalLabel: 'Capital initial total', capitalDesc: '7×$10k + HERMES $20k',
    botsLabel: 'Bots actifs', botsDesc: 'avec données live',
    positionsLabel: 'Positions ouvertes', positionsDesc: 'en ce moment',
    tradesLabel: 'Trades enregistrés', tradesDesc: 'dans Supabase',
    equityLabel: 'Equity totale flotte',
    rankingTitle: '🏆 Classement Bots — Performance',
    colBot: 'Bot', colEquity: 'Equity', colPnl: 'P&L', colPnlPct: 'P&L %', colWinRate: 'Win Rate', colPositions: 'Positions', colTrades: 'Trades', colExchange: 'Exchange',
    howTitle: 'Comment Ça Marche', howDesc: 'Des actualités aux trades — en 3 étapes.',
    steps: [
      { icon: '📰', title: 'Collecte', desc: 'NewsAPI, Yahoo Finance, Google News, Finviz, Seeking Alpha.' },
      { icon: '🧠', title: 'Analyse Gemini IA', desc: 'Sentiment, confiance — Google Gemini 2.0 Flash.' },
      { icon: '⚡', title: 'Exécution Auto', desc: 'RSI + MACD + EMA + Kelly → Alpaca Markets.' },
    ],
    featuresTitle: 'Fonctionnalités',
    features: [
      { title: 'Stop Loss / Take Profit', desc: 'SL -5% et TP +12%.' },
      { title: 'RSI + MACD + EMA', desc: 'Indicateurs en temps réel.' },
      { title: 'Détection Régime', desc: 'Analyse SPY.' },
      { title: 'Trailing Stop', desc: 'Vend à -4% du pic.' },
      { title: 'Kelly Sizing', desc: 'Positions calculées.' },
      { title: 'Telegram', desc: 'Alertes instantanées.' },
    ],
    exploreCta: 'Ouvrir Dashboard →', exploreDesc: 'Données réelles, sans inscription.',
    disclaimer: "Paper Trading uniquement. Pas un conseil financier.",
  },
  it: {
    badge: 'Trading IA Autonomo', title1: 'Fai trading più smart.', title2: 'Autonomo. 24/7.',
    desc: 'Flotta di 8 bot IA autonomi 24/7 su mercati crypto e azioni. Monitoraggio in tempo reale, esecuzione automatica, tracking equity live.',
    cta: 'Vedi Dashboard Live →', ctaDemo: 'Demo Gratuita',
    checks: ['8 Bot Attivi', 'Dati Live', '$124K+ Equity', '161 Trades'],
    liveLabel: '8/8 LIVE', fleetTitle: '🤖 Fleet Overview', fleetSub: 'Tutti 8 i bot attivi · Refresh 10s',
    totalEquityLabel: 'Equity Totale Flotta', totalEquityChange: '↑ +$31,389.22 (+33.75%)',
    capitalLabel: 'Capitale iniziale totale', capitalDesc: '7×$10k + HERMES $20k',
    botsLabel: 'Bot attivi', botsDesc: 'con dati live',
    positionsLabel: 'Posizioni aperte', positionsDesc: 'in questo momento',
    tradesLabel: 'Trades registrati', tradesDesc: 'in Supabase',
    equityLabel: 'Equity totale flotta',
    rankingTitle: '🏆 Classifica Bot — Performance',
    colBot: 'Bot', colEquity: 'Equity', colPnl: 'P&L', colPnlPct: 'P&L %', colWinRate: 'Win Rate', colPositions: 'Posizioni', colTrades: 'Trades', colExchange: 'Exchange',
    howTitle: 'Come Funziona', howDesc: 'Dalle notizie ai trade — in 3 passaggi.',
    steps: [
      { icon: '📰', title: 'Raccolta', desc: 'NewsAPI, Yahoo Finance, Google News, Finviz, Seeking Alpha.' },
      { icon: '🧠', title: 'Analisi Gemini IA', desc: 'Sentiment, fiducia — Google Gemini 2.0 Flash.' },
      { icon: '⚡', title: 'Esecuzione Auto', desc: 'RSI + MACD + EMA + Kelly → Alpaca Markets.' },
    ],
    featuresTitle: 'Funzionalità',
    features: [
      { title: 'Stop Loss / Take Profit', desc: 'SL -5% e TP +12%.' },
      { title: 'RSI + MACD + EMA', desc: 'Indicatori in tempo reale.' },
      { title: 'Rilevamento Regime', desc: 'Analisi SPY.' },
      { title: 'Trailing Stop', desc: 'Vende a -4% dal picco.' },
      { title: 'Kelly Sizing', desc: 'Posizioni calcolate.' },
      { title: 'Telegram', desc: 'Avvisi istantanei.' },
    ],
    exploreCta: 'Apri Dashboard →', exploreDesc: 'Dati reali, senza registrazione.',
    disclaimer: 'Solo Paper Trading. Non è consulenza finanziaria.',
  },
  de: {
    badge: 'Autonomes KI-Trading', title1: 'Smarter traden.', title2: 'Autonom. 24/7.',
    desc: 'Flotte von 8 autonomen KI-Trading-Bots, 24/7 auf Crypto- und Aktienmärkten. Echtzeit-Monitoring, automatische Ausführung, Live-Equity-Tracking.',
    cta: 'Live Dashboard →', ctaDemo: 'Kostenlose Demo',
    checks: ['8 Aktive Bots', 'Live Daten', '$124K+ Equity', '161 Trades'],
    liveLabel: '8/8 LIVE', fleetTitle: '🤖 Fleet Overview', fleetSub: 'Alle 8 aktiven Bots · Refresh 10s',
    totalEquityLabel: 'Gesamt-Equity Flotte', totalEquityChange: '↑ +$31,389.22 (+33.75%)',
    capitalLabel: 'Gesamtes Startkapital', capitalDesc: '7×$10k + HERMES $20k',
    botsLabel: 'Aktive Bots', botsDesc: 'mit Live-Daten',
    positionsLabel: 'Offene Positionen', positionsDesc: 'gerade jetzt',
    tradesLabel: 'Erfasste Trades', tradesDesc: 'in Supabase',
    equityLabel: 'Gesamt-Equity Flotte',
    rankingTitle: '🏆 Bot-Ranking — Performance',
    colBot: 'Bot', colEquity: 'Equity', colPnl: 'P&L', colPnlPct: 'P&L %', colWinRate: 'Win Rate', colPositions: 'Positionen', colTrades: 'Trades', colExchange: 'Exchange',
    howTitle: 'So funktioniert es', howDesc: 'Von Nachrichten zu Trades — in 3 Schritten.',
    steps: [
      { icon: '📰', title: 'Sammlung', desc: 'NewsAPI, Yahoo Finance, Google News, Finviz, Seeking Alpha.' },
      { icon: '🧠', title: 'Gemini KI', desc: 'Sentiment, Vertrauen — Google Gemini 2.0 Flash.' },
      { icon: '⚡', title: 'Auto-Ausführung', desc: 'RSI + MACD + EMA + Kelly → Alpaca Markets.' },
    ],
    featuresTitle: 'Funktionen',
    features: [
      { title: 'Stop Loss / Take Profit', desc: 'SL -5% und TP +12%.' },
      { title: 'RSI + MACD + EMA', desc: 'Echtzeit-Indikatoren.' },
      { title: 'Regime-Erkennung', desc: 'SPY-Analyse.' },
      { title: 'Trailing Stop', desc: 'Verkauft bei -4% vom Hoch.' },
      { title: 'Kelly Sizing', desc: 'Mathematisch berechnet.' },
      { title: 'Telegram', desc: 'Sofortige Alerts.' },
    ],
    exploreCta: 'Dashboard öffnen →', exploreDesc: 'Echte Daten, ohne Registrierung.',
    disclaimer: 'Nur Paper Trading. Keine Finanzberatung.',
  },
  ar: {
    badge: 'تداول ذكاء اصطناعي مستقل', title1: 'تداول أذكى.', title2: 'مستقل. 24/7.',
    desc: 'أسطول من 8 بوتات تداول ذكاء اصطناعي مستقلة تعمل 24/7 على أسواق العملات الرقمية والأسهم.',
    cta: '← عرض لوحة التحكم', ctaDemo: 'عرض مجاني',
    checks: ['8 بوتات نشطة', 'بيانات فورية', '$124K+ Equity', '161 صفقة'],
    liveLabel: '8/8 LIVE', fleetTitle: '🤖 نظرة عامة على الأسطول', fleetSub: 'جميع البوتات الـ8 النشطة · تحديث 10ث',
    totalEquityLabel: 'إجمالي equity الأسطول', totalEquityChange: '↑ +$31,389.22 (+33.75%)',
    capitalLabel: 'إجمالي رأس المال', capitalDesc: '7×$10k + HERMES $20k',
    botsLabel: 'بوتات نشطة', botsDesc: 'ببيانات فورية',
    positionsLabel: 'مراكز مفتوحة', positionsDesc: 'الآن',
    tradesLabel: 'صفقات مسجلة', tradesDesc: 'في Supabase',
    equityLabel: 'إجمالي equity الأسطول',
    rankingTitle: '🏆 تصنيف البوتات — الأداء',
    colBot: 'بوت', colEquity: 'Equity', colPnl: 'P&L', colPnlPct: 'P&L %', colWinRate: 'Win Rate', colPositions: 'مراكز', colTrades: 'صفقات', colExchange: 'Exchange',
    howTitle: 'كيف يعمل', howDesc: 'من الأخبار إلى الصفقات — في 3 خطوات.',
    steps: [
      { icon: '📰', title: 'جمع الأخبار', desc: 'NewsAPI, Yahoo Finance, Google News, Finviz, Seeking Alpha.' },
      { icon: '🧠', title: 'تحليل Gemini AI', desc: 'مشاعر، ثقة — Google Gemini 2.0 Flash.' },
      { icon: '⚡', title: 'تنفيذ تلقائي', desc: 'RSI + MACD + EMA + Kelly → Alpaca Markets.' },
    ],
    featuresTitle: 'الميزات',
    features: [
      { title: 'وقف الخسارة / جني الأرباح', desc: 'SL -5% و TP +12%.' },
      { title: 'RSI + MACD + EMA', desc: 'مؤشرات فورية.' },
      { title: 'كشف نظام السوق', desc: 'تحليل SPY.' },
      { title: 'وقف متحرك', desc: 'يبيع عند -4% من القمة.' },
      { title: 'Kelly Sizing', desc: 'حسابات رياضية.' },
      { title: 'تيليجرام', desc: 'تنبيهات فورية.' },
    ],
    exploreCta: '← فتح لوحة التحكم', exploreDesc: 'بيانات حقيقية، بدون تسجيل.',
    disclaimer: 'تداول ورقي فقط. ليس نصيحة مالية.',
  },
};

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
        <div className="h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-pulse" />
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

          <p className="text-blue-100/70 text-[13px] sm:text-sm lg:text-lg leading-relaxed mb-6 sm:mb-8">{c.desc}</p>

          <div className="flex flex-wrap gap-3 mb-6 sm:mb-8">
            {c.checks.map((ch, i) => (
              <span key={i} className="text-xs sm:text-sm text-blue-200/60 flex items-center gap-1.5">
                <span className="text-emerald-400">✓</span>{ch}
              </span>
            ))}
          </div>

          {/* Fleet Overview */}
          <div className="rounded-xl sm:rounded-2xl border border-blue-500/10 bg-blue-500/[0.03] p-4 sm:p-6 mb-6 sm:mb-8">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg sm:text-xl font-extrabold text-blue-50">{c.fleetTitle}</h3>
                <p className="text-xs text-blue-200/40">{c.fleetSub}</p>
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold animate-pulse">
                {c.liveLabel}
              </span>
            </div>

            {/* Total Equity */}
            <div className="mb-5">
              <div className="text-xs text-blue-200/40 mb-1">{c.totalEquityLabel}</div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-blue-50">$124,389.22</div>
              <div className="text-sm text-emerald-400 font-medium mt-1">{c.totalEquityChange}</div>
            </div>

            {/* Fleet stats grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
              <div className="p-3 rounded-xl bg-blue-500/5 border border-blue-500/10 text-center">
                <div className="text-xs text-blue-200/40">{c.capitalLabel}</div>
                <div className="text-lg sm:text-xl font-extrabold text-blue-50 mt-1">$90,000</div>
                <div className="text-[10px] text-blue-200/30 mt-0.5">{c.capitalDesc}</div>
              </div>
              <div className="p-3 rounded-xl bg-blue-500/5 border border-blue-500/10 text-center">
                <div className="text-xs text-blue-200/40">{c.botsLabel}</div>
                <div className="text-lg sm:text-xl font-extrabold text-emerald-400 mt-1">8/8</div>
                <div className="text-[10px] text-blue-200/30 mt-0.5">{c.botsDesc}</div>
              </div>
              <div className="p-3 rounded-xl bg-blue-500/5 border border-blue-500/10 text-center">
                <div className="text-xs text-blue-200/40">{c.positionsLabel}</div>
                <div className="text-lg sm:text-xl font-extrabold text-blue-50 mt-1">32</div>
                <div className="text-[10px] text-blue-200/30 mt-0.5">{c.positionsDesc}</div>
              </div>
              <div className="p-3 rounded-xl bg-blue-500/5 border border-blue-500/10 text-center">
                <div className="text-xs text-blue-200/40">{c.tradesLabel}</div>
                <div className="text-lg sm:text-xl font-extrabold text-blue-50 mt-1">161</div>
                <div className="text-[10px] text-blue-200/30 mt-0.5">{c.tradesDesc}</div>
              </div>
            </div>
          </div>

          {/* Bot Ranking Table */}
          <div className="rounded-xl sm:rounded-2xl border border-blue-500/10 bg-blue-500/[0.03] p-4 sm:p-6 mb-6 sm:mb-8 overflow-x-auto">
            <h3 className="text-lg sm:text-xl font-extrabold text-blue-50 mb-4">{c.rankingTitle}</h3>
            <table className="w-full text-left text-xs sm:text-sm min-w-[700px]">
              <thead>
                <tr className="border-b border-blue-500/10">
                  <th className="pb-2 text-blue-200/40 font-medium">#</th>
                  <th className="pb-2 text-blue-200/40 font-medium">{c.colBot}</th>
                  <th className="pb-2 text-blue-200/40 font-medium text-right">{c.colEquity}</th>
                  <th className="pb-2 text-blue-200/40 font-medium text-right">{c.colPnl}</th>
                  <th className="pb-2 text-blue-200/40 font-medium text-right">{c.colPnlPct}</th>
                  <th className="pb-2 text-blue-200/40 font-medium text-right">{c.colWinRate}</th>
                  <th className="pb-2 text-blue-200/40 font-medium text-right">{c.colPositions}</th>
                  <th className="pb-2 text-blue-200/40 font-medium text-right">{c.colTrades}</th>
                  <th className="pb-2 text-blue-200/40 font-medium text-right">{c.colExchange}</th>
                </tr>
              </thead>
              <tbody>
                {botRanking.map((bot, i) => (
                  <tr key={i} className="border-b border-blue-500/5 hover:bg-blue-500/5 transition-colors">
                    <td className="py-2.5 text-blue-200/60 font-medium">{bot.rank}</td>
                    <td className="py-2.5">
                      <div className="flex items-center gap-2">
                        <span>{bot.emoji}</span>
                        <div>
                          <span className="font-bold text-blue-50">{bot.name}</span>
                          <span className="text-blue-200/30 ml-1.5 text-[10px] sm:text-xs">{bot.strategy}</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-2.5 text-right font-bold text-blue-50">{bot.equity}</td>
                    <td className={`py-2.5 text-right font-medium ${bot.positive ? 'text-emerald-400' : 'text-red-400'}`}>{bot.pnl}</td>
                    <td className={`py-2.5 text-right font-medium ${bot.positive ? 'text-emerald-400' : 'text-red-400'}`}>{bot.pnlPct}</td>
                    <td className="py-2.5 text-right text-blue-200/60">{bot.winRate}</td>
                    <td className="py-2.5 text-right text-blue-200/60">{bot.positions}</td>
                    <td className="py-2.5 text-right text-blue-200/60">{bot.trades}</td>
                    <td className="py-2.5 text-right text-blue-200/40 text-[10px] sm:text-xs">{bot.exchange}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Live site preview */}
          <div className="rounded-xl sm:rounded-2xl border border-blue-500/10 bg-blue-500/[0.03] overflow-hidden mb-6 sm:mb-8">
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-blue-500/10">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
              </div>
              <span className="text-[10px] sm:text-xs text-blue-200/40 font-mono truncate">societybot.online/live-trading</span>
            </div>
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src="https://societybot.online/live-trading"
                className="absolute inset-0 w-full h-full border-0"
                title="NeuroTrade Live Preview"
                loading="lazy"
              />
            </div>
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
            href="https://societybot.shop/dashboard"
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
