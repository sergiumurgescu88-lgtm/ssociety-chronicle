import { motion } from 'framer-motion';
import { TrendingUp, Brain, Zap, Shield, Bell, Activity, BarChart3, Target, ExternalLink } from 'lucide-react';
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
    cta: 'View Live Dashboard',
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
    exploreCta: 'Open Dashboard',
    exploreDesc: 'Real data, active bot, no registration required.',
    disclaimer: 'Paper Trading Only. This is not financial advice.',
  },
  ro: {
    badge: 'Trading AI Autonom',
    title1: 'Tranzacționează mai inteligent.',
    title2: 'Autonom. 24/7.',
    desc: 'Bot de trading AI care analizează știri în timp real, calculează indicatori tehnici și execută automat ordine pe piața de acțiuni din SUA.',
    cta: 'Vezi Dashboard Live',
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
    exploreCta: 'Deschide Dashboard',
    exploreDesc: 'Date reale, bot activ, fără înregistrare.',
    disclaimer: 'Doar Paper Trading. Aceasta nu este consiliere financiară.',
  },
  es: {
    badge: 'Trading IA Autónomo',
    title1: 'Opera más inteligente.',
    title2: 'Autónomo. 24/7.',
    desc: 'Bot de trading IA que analiza noticias en tiempo real, calcula indicadores técnicos y ejecuta órdenes automáticamente en el mercado de EE.UU.',
    cta: 'Ver Dashboard en Vivo',
    ctaDemo: 'Demo Gratis',
    checks: ['Sin cuenta requerida', 'Datos en tiempo real', 'Paper trading'],
    liveLabel: 'Live',
    cycleLabel: 'Ciclo #247',
    portfolioLabel: 'Capital del Portafolio',
    portfolioChange: '+$2,847 (+2.27%) · 8 posiciones',
    positions: [
      { symbol: 'NVDA', change: '+3.2%' },
      { symbol: 'AAPL', change: '+1.1%' },
      { symbol: 'TSLA', change: '-0.8%' },
    ],
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
      { icon: '🧠', title: 'Análisis Gemini IA', desc: 'Análisis de sentimiento, puntuación de confianza, razonamiento detallado — por Google Gemini 2.0 Flash.' },
      { icon: '⚡', title: 'Ejecución Automática', desc: 'RSI + MACD + EMA + Kelly position sizing → órdenes enviadas automáticamente vía Alpaca Markets.' },
    ],
    symbolsTitle: 'Símbolos Monitoreados',
    symbolsDesc: '8 acciones tech principales, analizadas sin parar.',
    featuresTitle: 'Características',
    features: [
      { title: 'Stop Loss / Take Profit', desc: 'Cada posición protegida con SL -5% y TP +12%.' },
      { title: 'RSI + MACD + EMA', desc: 'Indicadores técnicos calculados en tiempo real.' },
      { title: 'Detección de Régimen', desc: 'Análisis SPY para detección de tendencia: Alcista, Bajista, Volátil.' },
      { title: 'Trailing Stop Dinámico', desc: 'Sigue el precio al alza y vende automáticamente a -4% del pico.' },
      { title: 'Kelly Position Sizing', desc: 'Tamaño de posiciones calculado matemáticamente.' },
      { title: 'Notificaciones Telegram', desc: 'Alertas instantáneas para cada operación.' },
    ],
    exploreCta: 'Abrir Dashboard',
    exploreDesc: 'Datos reales, bot activo, sin registro.',
    disclaimer: 'Solo Paper Trading. Esto no es asesoramiento financiero.',
  },
  fr: {
    badge: 'Trading IA Autonome',
    title1: 'Tradez plus intelligemment.',
    title2: 'Autonome. 24/7.',
    desc: 'Bot de trading IA qui analyse les actualités en temps réel, calcule les indicateurs techniques et exécute automatiquement des ordres sur le marché américain.',
    cta: 'Voir le Dashboard en Direct',
    ctaDemo: 'Démo Gratuite',
    checks: ['Aucun compte requis', 'Données en temps réel', 'Paper trading'],
    liveLabel: 'Live',
    cycleLabel: 'Cycle #247',
    portfolioLabel: 'Capital du Portefeuille',
    portfolioChange: '+$2,847 (+2.27%) · 8 positions',
    positions: [
      { symbol: 'NVDA', change: '+3.2%' },
      { symbol: 'AAPL', change: '+1.1%' },
      { symbol: 'TSLA', change: '-0.8%' },
    ],
    miniStats: [
      { icon: '📡', value: '8 Symboles', label: 'surveillés' },
      { icon: '⏱️', value: '10 min', label: 'cycle d\'analyse' },
      { icon: '📰', value: '~15 news', label: 'par symbole / cycle' },
      { icon: '🔋', value: '24/7', label: 'disponibilité continue' },
    ],
    howTitle: 'Comment Ça Marche',
    howDesc: 'Des actualités brutes aux trades exécutés — en 3 étapes automatisées.',
    steps: [
      { icon: '📰', title: 'Collecte d\'Actualités', desc: 'NewsAPI, Yahoo Finance, Google News, Finviz, Seeking Alpha — agrégées en temps réel.' },
      { icon: '🧠', title: 'Analyse Gemini IA', desc: 'Analyse de sentiment, scoring de confiance, raisonnement détaillé — par Google Gemini 2.0 Flash.' },
      { icon: '⚡', title: 'Exécution Automatique', desc: 'RSI + MACD + EMA + Kelly position sizing → ordres envoyés automatiquement via Alpaca Markets.' },
    ],
    symbolsTitle: 'Symboles Surveillés',
    symbolsDesc: '8 actions tech majeures, analysées en continu.',
    featuresTitle: 'Fonctionnalités',
    features: [
      { title: 'Stop Loss / Take Profit', desc: 'Chaque position protégée avec SL -5% et TP +12%.' },
      { title: 'RSI + MACD + EMA', desc: 'Indicateurs techniques calculés en temps réel.' },
      { title: 'Détection de Régime', desc: 'Analyse SPY pour détection de tendance: Haussier, Baissier, Volatil.' },
      { title: 'Trailing Stop Dynamique', desc: 'Suit le prix à la hausse et vend automatiquement à -4% du pic.' },
      { title: 'Kelly Position Sizing', desc: 'Taille des positions calculée mathématiquement.' },
      { title: 'Notifications Telegram', desc: 'Alertes instantanées pour chaque trade.' },
    ],
    exploreCta: 'Ouvrir le Dashboard',
    exploreDesc: 'Données réelles, bot actif, sans inscription.',
    disclaimer: 'Paper Trading uniquement. Ceci n\'est pas un conseil financier.',
  },
  it: {
    badge: 'Trading IA Autonomo',
    title1: 'Fai trading più smart.',
    title2: 'Autonomo. 24/7.',
    desc: 'Bot di trading IA che analizza notizie in tempo reale, calcola indicatori tecnici ed esegue automaticamente ordini sul mercato azionario USA.',
    cta: 'Vedi Dashboard Live',
    ctaDemo: 'Demo Gratuita',
    checks: ['Nessun account richiesto', 'Dati in tempo reale', 'Paper trading'],
    liveLabel: 'Live',
    cycleLabel: 'Ciclo #247',
    portfolioLabel: 'Capitale Portafoglio',
    portfolioChange: '+$2,847 (+2.27%) · 8 posizioni',
    positions: [
      { symbol: 'NVDA', change: '+3.2%' },
      { symbol: 'AAPL', change: '+1.1%' },
      { symbol: 'TSLA', change: '-0.8%' },
    ],
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
      { icon: '🧠', title: 'Analisi Gemini IA', desc: 'Analisi del sentiment, punteggio di fiducia, ragionamento dettagliato — da Google Gemini 2.0 Flash.' },
      { icon: '⚡', title: 'Esecuzione Automatica', desc: 'RSI + MACD + EMA + Kelly position sizing → ordini inviati automaticamente via Alpaca Markets.' },
    ],
    symbolsTitle: 'Simboli Monitorati',
    symbolsDesc: '8 azioni tech principali, analizzate senza sosta.',
    featuresTitle: 'Funzionalità',
    features: [
      { title: 'Stop Loss / Take Profit', desc: 'Ogni posizione protetta con SL -5% e TP +12%.' },
      { title: 'RSI + MACD + EMA', desc: 'Indicatori tecnici calcolati in tempo reale.' },
      { title: 'Rilevamento Regime', desc: 'Analisi SPY per rilevamento trend: Rialzista, Ribassista, Volatile.' },
      { title: 'Trailing Stop Dinamico', desc: 'Segue il prezzo al rialzo e vende automaticamente a -4% dal picco.' },
      { title: 'Kelly Position Sizing', desc: 'Dimensione posizioni calcolata matematicamente.' },
      { title: 'Notifiche Telegram', desc: 'Avvisi istantanei per ogni trade.' },
    ],
    exploreCta: 'Apri Dashboard',
    exploreDesc: 'Dati reali, bot attivo, senza registrazione.',
    disclaimer: 'Solo Paper Trading. Questo non è consulenza finanziaria.',
  },
  de: {
    badge: 'Autonomes KI-Trading',
    title1: 'Smarter traden.',
    title2: 'Autonom. 24/7.',
    desc: 'KI-Trading-Bot, der Nachrichten in Echtzeit analysiert, technische Indikatoren berechnet und automatisch Orders am US-Aktienmarkt ausführt.',
    cta: 'Live Dashboard ansehen',
    ctaDemo: 'Kostenlose Demo',
    checks: ['Kein Konto erforderlich', 'Echtzeit-Daten', 'Paper Trading'],
    liveLabel: 'Live',
    cycleLabel: 'Zyklus #247',
    portfolioLabel: 'Portfolio-Kapital',
    portfolioChange: '+$2,847 (+2.27%) · 8 Positionen',
    positions: [
      { symbol: 'NVDA', change: '+3.2%' },
      { symbol: 'AAPL', change: '+1.1%' },
      { symbol: 'TSLA', change: '-0.8%' },
    ],
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
      { icon: '🧠', title: 'Gemini KI-Analyse', desc: 'Sentimentanalyse, Vertrauensbewertung, detaillierte Begründung — von Google Gemini 2.0 Flash.' },
      { icon: '⚡', title: 'Automatische Ausführung', desc: 'RSI + MACD + EMA + Kelly Position Sizing → Orders automatisch über Alpaca Markets.' },
    ],
    symbolsTitle: 'Überwachte Symbole',
    symbolsDesc: '8 große Tech-Aktien, non-stop analysiert.',
    featuresTitle: 'Funktionen',
    features: [
      { title: 'Stop Loss / Take Profit', desc: 'Jede Position geschützt mit SL -5% und TP +12%.' },
      { title: 'RSI + MACD + EMA', desc: 'Technische Indikatoren in Echtzeit berechnet.' },
      { title: 'Marktregime-Erkennung', desc: 'SPY-Analyse zur Trenderkennung: Bullen, Bären, Volatil.' },
      { title: 'Dynamischer Trailing Stop', desc: 'Folgt dem Preis nach oben und verkauft automatisch bei -4% vom Hoch.' },
      { title: 'Kelly Position Sizing', desc: 'Positionsgrößen mathematisch berechnet.' },
      { title: 'Telegram-Benachrichtigungen', desc: 'Sofortige Alerts für jeden Trade.' },
    ],
    exploreCta: 'Dashboard öffnen',
    exploreDesc: 'Echte Daten, aktiver Bot, keine Registrierung.',
    disclaimer: 'Nur Paper Trading. Dies ist keine Finanzberatung.',
  },
  ar: {
    badge: 'تداول ذكاء اصطناعي مستقل',
    title1: 'تداول أذكى.',
    title2: 'مستقل. 24/7.',
    desc: 'بوت تداول ذكاء اصطناعي يحلل الأخبار في الوقت الفعلي، يحسب المؤشرات التقنية وينفذ الأوامر تلقائياً في سوق الأسهم الأمريكي.',
    cta: 'عرض لوحة التحكم المباشرة',
    ctaDemo: 'عرض مجاني',
    checks: ['لا حاجة لحساب', 'بيانات فورية', 'تداول ورقي'],
    liveLabel: 'مباشر',
    cycleLabel: 'الدورة #247',
    portfolioLabel: 'رأس مال المحفظة',
    portfolioChange: '+$2,847 (+2.27%) · 8 مراكز',
    positions: [
      { symbol: 'NVDA', change: '+3.2%' },
      { symbol: 'AAPL', change: '+1.1%' },
      { symbol: 'TSLA', change: '-0.8%' },
    ],
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
      { icon: '🧠', title: 'تحليل Gemini AI', desc: 'تحليل المشاعر، تقييم الثقة، تبرير مفصل — بواسطة Google Gemini 2.0 Flash.' },
      { icon: '⚡', title: 'تنفيذ تلقائي', desc: 'RSI + MACD + EMA + Kelly position sizing → أوامر مرسلة تلقائياً عبر Alpaca Markets.' },
    ],
    symbolsTitle: 'الرموز المراقبة',
    symbolsDesc: '8 أسهم تكنولوجيا رئيسية، تحليل مستمر.',
    featuresTitle: 'الميزات',
    features: [
      { title: 'وقف الخسارة / جني الأرباح', desc: 'كل مركز محمي بـ SL -5% و TP +12%.' },
      { title: 'RSI + MACD + EMA', desc: 'مؤشرات تقنية محسوبة في الوقت الفعلي.' },
      { title: 'كشف نظام السوق', desc: 'تحليل SPY لكشف الاتجاه: صاعد، هابط، متقلب.' },
      { title: 'وقف متحرك ديناميكي', desc: 'يتبع السعر صعوداً ويبيع تلقائياً عند -4% من القمة.' },
      { title: 'Kelly Position Sizing', desc: 'حجم المراكز محسوب رياضياً.' },
      { title: 'إشعارات تيليجرام', desc: 'تنبيهات فورية لكل صفقة.' },
    ],
    exploreCta: 'فتح لوحة التحكم',
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

  return (
    <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-500/8 rounded-full blur-[160px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Hero header */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
            <TrendingUp className="w-4 h-4" />
            {c.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-black text-hub-text mb-2 leading-tight">
            {c.title1}
          </h2>
          <h3 className="text-2xl sm:text-3xl lg:text-5xl xl:text-6xl font-black bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent mb-6">
            {c.title2}
          </h3>
          <p className="text-base sm:text-lg lg:text-xl text-hub-secondary max-w-3xl mx-auto leading-relaxed mb-8">{c.desc}</p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
            <a
              href="https://neurossociety.lovable.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm sm:text-base transition-all shadow-lg shadow-blue-500/25"
            >
              <ExternalLink className="w-4 h-4" />
              {c.cta}
            </a>
            <a
              href="https://neurossociety.lovable.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 border border-white/10 text-hub-text font-semibold text-sm sm:text-base hover:bg-white/10 transition-all"
            >
              {c.ctaDemo}
            </a>
          </div>

          {/* Check marks */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-hub-muted">
            {c.checks.map((ch, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <span className="text-emerald-400">✓</span>{ch}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Live dashboard preview card */}
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="mb-16 lg:mb-20">
          <div className="max-w-2xl mx-auto rounded-2xl border border-blue-500/20 bg-hub-card/80 backdrop-blur-sm overflow-hidden shadow-2xl shadow-blue-500/10">
            <div className="px-5 py-4 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  {c.liveLabel}
                </span>
                <span className="text-xs text-hub-muted">{c.cycleLabel}</span>
              </div>
            </div>
            <div className="px-5 py-5">
              <div className="text-xs text-hub-muted mb-1">{c.portfolioLabel}</div>
              <div className="text-3xl sm:text-4xl font-black text-hub-text mb-1">$140,615</div>
              <div className="text-sm text-emerald-400 mb-4">{c.portfolioChange}</div>
              <div className="flex gap-3">
                {c.positions.map((p, i) => (
                  <div key={i} className="px-3 py-1.5 rounded-lg bg-white/5 text-xs font-medium">
                    <span className="text-hub-text">{p.symbol}</span>{' '}
                    <span className={p.change.startsWith('+') ? 'text-emerald-400' : 'text-red-400'}>{p.change}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mini stats */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-16 lg:mb-20">
          {c.miniStats.map((s, i) => (
            <div key={i} className="p-4 sm:p-5 rounded-xl bg-blue-500/[0.03] border border-blue-500/10 text-center">
              <div className="text-2xl mb-2">{s.icon}</div>
              <div className="text-lg sm:text-xl font-bold text-hub-text">{s.value}</div>
              <div className="text-xs text-hub-muted mt-0.5">{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* How it works */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 lg:mb-20">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-hub-text text-center mb-2">{c.howTitle}</h3>
          <p className="text-hub-muted text-center mb-10 text-sm sm:text-base">{c.howDesc}</p>
          <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
            {c.steps.map((step, i) => (
              <div key={i} className="p-5 sm:p-6 rounded-2xl bg-hub-card border border-white/5">
                <div className="text-3xl mb-3">{step.icon}</div>
                <h4 className="text-base sm:text-lg font-bold text-hub-text mb-2">{step.title}</h4>
                <p className="text-sm text-hub-muted leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Monitored Symbols */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 lg:mb-20">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-hub-text text-center mb-2">{c.symbolsTitle}</h3>
          <p className="text-hub-muted text-center mb-8 text-sm sm:text-base">{c.symbolsDesc}</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {symbols.map((s) => (
              <div key={s.ticker} className="p-4 rounded-xl bg-blue-500/[0.03] border border-blue-500/10 text-center">
                <div className="text-lg font-bold text-blue-400">{s.ticker}</div>
                <div className="text-xs text-hub-muted mt-0.5">{s.name}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Features grid */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 lg:mb-20">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-hub-text text-center mb-8">{c.featuresTitle}</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {c.features.map((f, i) => {
              const icons = [Shield, Activity, BarChart3, Target, Brain, Bell];
              const Icon = icons[i] || Zap;
              return (
                <div key={i} className="p-5 rounded-xl bg-hub-card border border-white/5">
                  <Icon className="w-5 h-5 text-blue-400 mb-3" />
                  <h4 className="font-bold text-hub-text text-sm sm:text-base mb-1">{f.title}</h4>
                  <p className="text-xs sm:text-sm text-hub-muted leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
          <p className="text-hub-muted text-sm sm:text-base mb-4">{c.exploreDesc}</p>
          <a
            href="https://neurossociety.lovable.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-base sm:text-lg transition-all shadow-lg shadow-blue-500/25"
          >
            <ExternalLink className="w-5 h-5" />
            {c.exploreCta}
          </a>
          <p className="text-xs text-hub-muted/50 mt-6">{c.disclaimer}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default NeuroTradeSection;
