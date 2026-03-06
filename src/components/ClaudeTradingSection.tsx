import { motion } from 'framer-motion';
import { ExternalLink, TrendingUp, Brain, BarChart3, Shield, Bell, Activity, LineChart, Zap, Target } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const i18n: Record<string, {
  badge: string; desc: string; cta: string; ctaDesc: string;
  stats: { value: string; label: string }[];
  features: { icon: any; title: string; desc: string }[];
}> = {
  ro: {
    badge: 'Agent AI de Trading',
    desc: 'Agent AI de trading și analiză financiară. Monitorizează piețele 24/7, analizează acțiuni și crypto, identifică pattern-uri tehnice, evaluează sentimentul pieței și sugerează tranzacții cu raport risc/recompensă calculat.',
    cta: 'Vezi Tutorial Complet',
    ctaDesc: 'Investiții mai inteligente cu asistență AI — analiză serioasă, nu „get rich quick"',
    stats: [
      { value: '24/7', label: 'Monitorizare piețe' },
      { value: '95%+', label: 'Acuratețe pattern-uri' },
      { value: '50+', label: 'Indicatori tehnici' },
      { value: '0€', label: 'Costuri ascunse' },
    ],
    features: [
      { icon: TrendingUp, title: 'Analiză Tehnică Avansată', desc: 'Identifică automat pattern-uri chartiste, suporturi, rezistențe și semnale de tranzacționare pe orice activ.' },
      { icon: Brain, title: 'Analiză Fundamentală AI', desc: 'Evaluează rapoarte financiare, bilanțuri și indicatori macro pentru decizii informate de investiții.' },
      { icon: Activity, title: 'Sentiment de Piață', desc: 'Analizează știri, social media și date on-chain pentru a evalua sentimentul general al pieței în timp real.' },
      { icon: Shield, title: 'Management al Riscului', desc: 'Calcul automat al raportului risc/recompensă, stop-loss-uri și dimensionarea pozițiilor pentru fiecare tranzacție.' },
      { icon: LineChart, title: 'Backtesting Istoric', desc: 'Testează strategii pe date istorice pentru a valida performanța înainte de a risca capital real.' },
      { icon: Bell, title: 'Alerte Personalizabile', desc: 'Configurează alerte pe preț, volum, pattern-uri tehnice sau schimbări de sentiment — primește notificări instant.' },
      { icon: BarChart3, title: 'Dashboard Multi-Asset', desc: 'Monitorizează simultan acțiuni, crypto, forex și commodities într-un singur dashboard unificat.' },
      { icon: Target, title: 'Recomandări cu Grad de Încredere', desc: 'Fiecare sugestie vine cu scor de încredere, argumente pro/contra și niveluri cheie de intrare/ieșire.' },
      { icon: Zap, title: 'Execuție Rapidă', desc: 'Analiză în timp real cu latență minimă. Identifică oportunități și le comunică înainte ca piața să se miște.' },
    ],
  },
  en: {
    badge: 'AI Trading Agent',
    desc: 'AI trading and financial analysis agent. Monitors markets 24/7, analyzes stocks and crypto, identifies technical patterns, evaluates market sentiment and suggests trades with calculated risk/reward ratios.',
    cta: 'Watch Full Tutorial',
    ctaDesc: 'Smarter investing with AI assistance — serious analysis, not a "get rich quick scheme"',
    stats: [
      { value: '24/7', label: 'Market monitoring' },
      { value: '95%+', label: 'Pattern accuracy' },
      { value: '50+', label: 'Technical indicators' },
      { value: '0€', label: 'Hidden costs' },
    ],
    features: [
      { icon: TrendingUp, title: 'Advanced Technical Analysis', desc: 'Automatically identifies chart patterns, supports, resistances and trading signals on any asset.' },
      { icon: Brain, title: 'AI Fundamental Analysis', desc: 'Evaluates financial reports, balance sheets and macro indicators for informed investment decisions.' },
      { icon: Activity, title: 'Market Sentiment', desc: 'Analyzes news, social media and on-chain data to evaluate overall market sentiment in real-time.' },
      { icon: Shield, title: 'Risk Management', desc: 'Automatic risk/reward ratio calculation, stop-losses and position sizing for each trade.' },
      { icon: LineChart, title: 'Historical Backtesting', desc: 'Test strategies on historical data to validate performance before risking real capital.' },
      { icon: Bell, title: 'Customizable Alerts', desc: 'Set alerts on price, volume, technical patterns or sentiment changes — get instant notifications.' },
      { icon: BarChart3, title: 'Multi-Asset Dashboard', desc: 'Simultaneously monitor stocks, crypto, forex and commodities in one unified dashboard.' },
      { icon: Target, title: 'Confidence-Scored Recommendations', desc: 'Each suggestion comes with confidence score, pros/cons and key entry/exit levels.' },
      { icon: Zap, title: 'Fast Execution', desc: 'Real-time analysis with minimal latency. Identifies opportunities before the market moves.' },
    ],
  },
  es: {
    badge: 'Agente IA de Trading',
    desc: 'Agente IA de trading y análisis financiero. Monitorea mercados 24/7, analiza acciones y crypto, identifica patrones técnicos, evalúa sentimiento del mercado y sugiere operaciones con ratio riesgo/recompensa calculado.',
    cta: 'Ver Tutorial Completo',
    ctaDesc: 'Inversiones más inteligentes con asistencia IA — análisis serio, no esquemas rápidos',
    stats: [
      { value: '24/7', label: 'Monitoreo de mercados' },
      { value: '95%+', label: 'Precisión de patrones' },
      { value: '50+', label: 'Indicadores técnicos' },
      { value: '0€', label: 'Costos ocultos' },
    ],
    features: [
      { icon: TrendingUp, title: 'Análisis Técnico Avanzado', desc: 'Identifica automáticamente patrones chartistas, soportes, resistencias y señales de trading.' },
      { icon: Brain, title: 'Análisis Fundamental IA', desc: 'Evalúa reportes financieros, balances e indicadores macro para decisiones de inversión informadas.' },
      { icon: Activity, title: 'Sentimiento del Mercado', desc: 'Analiza noticias, redes sociales y datos on-chain para evaluar el sentimiento general del mercado.' },
      { icon: Shield, title: 'Gestión de Riesgo', desc: 'Cálculo automático del ratio riesgo/recompensa, stop-losses y dimensionamiento de posiciones.' },
      { icon: LineChart, title: 'Backtesting Histórico', desc: 'Prueba estrategias con datos históricos para validar rendimiento antes de arriesgar capital real.' },
      { icon: Bell, title: 'Alertas Personalizables', desc: 'Configura alertas por precio, volumen, patrones técnicos o cambios de sentimiento.' },
      { icon: BarChart3, title: 'Dashboard Multi-Activo', desc: 'Monitorea simultáneamente acciones, crypto, forex y commodities en un solo panel.' },
      { icon: Target, title: 'Recomendaciones con Confianza', desc: 'Cada sugerencia incluye score de confianza, pros/contras y niveles clave de entrada/salida.' },
      { icon: Zap, title: 'Ejecución Rápida', desc: 'Análisis en tiempo real con latencia mínima. Identifica oportunidades antes que el mercado se mueva.' },
    ],
  },
  fr: {
    badge: 'Agent IA de Trading',
    desc: 'Agent IA de trading et d\'analyse financière. Surveille les marchés 24/7, analyse actions et crypto, identifie les patterns techniques, évalue le sentiment du marché et suggère des trades avec ratio risque/récompense calculé.',
    cta: 'Voir le Tutoriel Complet',
    ctaDesc: 'Investissements plus intelligents avec assistance IA — analyse sérieuse, pas de schéma rapide',
    stats: [
      { value: '24/7', label: 'Surveillance des marchés' },
      { value: '95%+', label: 'Précision des patterns' },
      { value: '50+', label: 'Indicateurs techniques' },
      { value: '0€', label: 'Coûts cachés' },
    ],
    features: [
      { icon: TrendingUp, title: 'Analyse Technique Avancée', desc: 'Identifie automatiquement les patterns chartistes, supports, résistances et signaux de trading.' },
      { icon: Brain, title: 'Analyse Fondamentale IA', desc: 'Évalue rapports financiers, bilans et indicateurs macro pour des décisions d\'investissement éclairées.' },
      { icon: Activity, title: 'Sentiment du Marché', desc: 'Analyse actualités, réseaux sociaux et données on-chain pour évaluer le sentiment général du marché.' },
      { icon: Shield, title: 'Gestion du Risque', desc: 'Calcul automatique du ratio risque/récompense, stop-losses et dimensionnement des positions.' },
      { icon: LineChart, title: 'Backtesting Historique', desc: 'Testez des stratégies sur données historiques pour valider la performance avant de risquer du capital.' },
      { icon: Bell, title: 'Alertes Personnalisables', desc: 'Configurez des alertes sur prix, volume, patterns techniques ou changements de sentiment.' },
      { icon: BarChart3, title: 'Dashboard Multi-Actifs', desc: 'Surveillez simultanément actions, crypto, forex et matières premières dans un seul tableau de bord.' },
      { icon: Target, title: 'Recommandations avec Score', desc: 'Chaque suggestion inclut un score de confiance, arguments pour/contre et niveaux clés.' },
      { icon: Zap, title: 'Exécution Rapide', desc: 'Analyse en temps réel avec latence minimale. Identifie les opportunités avant que le marché ne bouge.' },
    ],
  },
  it: {
    badge: 'Agente IA di Trading',
    desc: 'Agente IA di trading e analisi finanziaria. Monitora i mercati 24/7, analizza azioni e crypto, identifica pattern tecnici, valuta il sentiment del mercato e suggerisce operazioni con rapporto rischio/ricompensa calcolato.',
    cta: 'Guarda il Tutorial Completo',
    ctaDesc: 'Investimenti più intelligenti con assistenza IA — analisi seria, non schemi rapidi',
    stats: [
      { value: '24/7', label: 'Monitoraggio mercati' },
      { value: '95%+', label: 'Precisione pattern' },
      { value: '50+', label: 'Indicatori tecnici' },
      { value: '0€', label: 'Costi nascosti' },
    ],
    features: [
      { icon: TrendingUp, title: 'Analisi Tecnica Avanzata', desc: 'Identifica automaticamente pattern chartistici, supporti, resistenze e segnali di trading.' },
      { icon: Brain, title: 'Analisi Fondamentale IA', desc: 'Valuta report finanziari, bilanci e indicatori macro per decisioni di investimento informate.' },
      { icon: Activity, title: 'Sentiment di Mercato', desc: 'Analizza notizie, social media e dati on-chain per valutare il sentiment generale del mercato.' },
      { icon: Shield, title: 'Gestione del Rischio', desc: 'Calcolo automatico del rapporto rischio/ricompensa, stop-loss e dimensionamento delle posizioni.' },
      { icon: LineChart, title: 'Backtesting Storico', desc: 'Testa strategie su dati storici per validare la performance prima di rischiare capitale reale.' },
      { icon: Bell, title: 'Avvisi Personalizzabili', desc: 'Configura avvisi su prezzo, volume, pattern tecnici o cambiamenti di sentiment.' },
      { icon: BarChart3, title: 'Dashboard Multi-Asset', desc: 'Monitora simultaneamente azioni, crypto, forex e commodities in un unico pannello.' },
      { icon: Target, title: 'Raccomandazioni con Punteggio', desc: 'Ogni suggerimento include punteggio di fiducia, pro/contro e livelli chiave di entrata/uscita.' },
      { icon: Zap, title: 'Esecuzione Rapida', desc: 'Analisi in tempo reale con latenza minima. Identifica opportunità prima che il mercato si muova.' },
    ],
  },
  de: {
    badge: 'KI-Trading-Agent',
    desc: 'KI-Trading- und Finanzanalyse-Agent. Überwacht Märkte 24/7, analysiert Aktien und Krypto, identifiziert technische Muster, bewertet die Marktstimmung und schlägt Trades mit berechnetem Risiko/Rendite-Verhältnis vor.',
    cta: 'Vollständiges Tutorial ansehen',
    ctaDesc: 'Intelligentere Investitionen mit KI-Unterstützung — seriöse Analyse, kein schnelles Geld',
    stats: [
      { value: '24/7', label: 'Marktüberwachung' },
      { value: '95%+', label: 'Mustergenauigkeit' },
      { value: '50+', label: 'Technische Indikatoren' },
      { value: '0€', label: 'Versteckte Kosten' },
    ],
    features: [
      { icon: TrendingUp, title: 'Erweiterte Technische Analyse', desc: 'Identifiziert automatisch Chartmuster, Unterstützungen, Widerstände und Handelssignale.' },
      { icon: Brain, title: 'KI-Fundamentalanalyse', desc: 'Bewertet Finanzberichte, Bilanzen und Makroindikatoren für fundierte Investitionsentscheidungen.' },
      { icon: Activity, title: 'Marktstimmung', desc: 'Analysiert Nachrichten, soziale Medien und On-Chain-Daten zur Bewertung der Marktstimmung.' },
      { icon: Shield, title: 'Risikomanagement', desc: 'Automatische Berechnung des Risiko/Rendite-Verhältnisses, Stop-Losses und Positionsgrößen.' },
      { icon: LineChart, title: 'Historisches Backtesting', desc: 'Testen Sie Strategien mit historischen Daten, um die Performance vor dem Einsatz von Kapital zu validieren.' },
      { icon: Bell, title: 'Anpassbare Alarme', desc: 'Konfigurieren Sie Alarme für Preis, Volumen, technische Muster oder Stimmungsänderungen.' },
      { icon: BarChart3, title: 'Multi-Asset-Dashboard', desc: 'Überwachen Sie gleichzeitig Aktien, Krypto, Forex und Rohstoffe in einem einheitlichen Dashboard.' },
      { icon: Target, title: 'Bewertete Empfehlungen', desc: 'Jeder Vorschlag enthält Vertrauenswert, Pro/Contra und wichtige Ein-/Ausstiegsniveaus.' },
      { icon: Zap, title: 'Schnelle Ausführung', desc: 'Echtzeit-Analyse mit minimaler Latenz. Erkennt Chancen, bevor sich der Markt bewegt.' },
    ],
  },
  ar: {
    badge: 'وكيل ذكاء اصطناعي للتداول',
    desc: 'وكيل ذكاء اصطناعي للتداول والتحليل المالي. يراقب الأسواق على مدار الساعة، يحلل الأسهم والعملات الرقمية، يحدد الأنماط التقنية، يقيّم معنويات السوق ويقترح صفقات بنسبة مخاطرة/عائد محسوبة.',
    cta: 'شاهد البرنامج التعليمي الكامل',
    ctaDesc: 'استثمارات أذكى بمساعدة الذكاء الاصطناعي — تحليل جاد وليس مخططات سريعة',
    stats: [
      { value: '24/7', label: 'مراقبة الأسواق' },
      { value: '95%+', label: 'دقة الأنماط' },
      { value: '50+', label: 'مؤشرات تقنية' },
      { value: '0€', label: 'تكاليف خفية' },
    ],
    features: [
      { icon: TrendingUp, title: 'تحليل تقني متقدم', desc: 'يحدد تلقائيًا أنماط الرسوم البيانية والدعوم والمقاومات وإشارات التداول.' },
      { icon: Brain, title: 'تحليل أساسي بالذكاء الاصطناعي', desc: 'يقيّم التقارير المالية والميزانيات والمؤشرات الكلية لقرارات استثمارية مدروسة.' },
      { icon: Activity, title: 'معنويات السوق', desc: 'يحلل الأخبار ووسائل التواصل والبيانات على السلسلة لتقييم معنويات السوق في الوقت الفعلي.' },
      { icon: Shield, title: 'إدارة المخاطر', desc: 'حساب تلقائي لنسبة المخاطرة/العائد ووقف الخسائر وتحجيم المراكز لكل صفقة.' },
      { icon: LineChart, title: 'اختبار رجعي تاريخي', desc: 'اختبر الاستراتيجيات على بيانات تاريخية للتحقق من الأداء قبل المخاطرة برأس مال حقيقي.' },
      { icon: Bell, title: 'تنبيهات قابلة للتخصيص', desc: 'اضبط تنبيهات على السعر والحجم والأنماط التقنية أو تغييرات المعنويات.' },
      { icon: BarChart3, title: 'لوحة تحكم متعددة الأصول', desc: 'راقب في نفس الوقت الأسهم والعملات الرقمية والفوركس والسلع في لوحة واحدة.' },
      { icon: Target, title: 'توصيات بدرجة ثقة', desc: 'كل اقتراح يتضمن درجة ثقة وإيجابيات/سلبيات ومستويات دخول/خروج رئيسية.' },
      { icon: Zap, title: 'تنفيذ سريع', desc: 'تحليل في الوقت الفعلي بأقل تأخير. يحدد الفرص قبل أن يتحرك السوق.' },
    ],
  },
};

const ClaudeTradingSection = () => {
  const { language } = useLanguage();
  const c = i18n[language] || i18n.en;

  return (
    <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-emerald-500/8 rounded-full blur-[160px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
            <TrendingUp className="w-4 h-4" />
            {c.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-black text-hub-text mb-4 lg:mb-6 leading-tight">
            Claude Trading Agent —{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">Investiții AI</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-2xl text-hub-secondary max-w-4xl mx-auto leading-relaxed">{c.desc}</p>
        </motion.div>

        {/* YouTube Video Embed */}
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="relative mb-16 lg:mb-20">
          <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden border border-emerald-500/20 shadow-2xl shadow-emerald-500/10">
            <div className="bg-hub-card/90 backdrop-blur-sm border-b border-white/10 px-4 py-3 flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <div className="flex-1 bg-white/5 rounded-lg px-3 py-1.5 text-xs sm:text-sm text-hub-muted font-mono">youtube.com — Claude Trading Agent Tutorial</div>
            </div>
            <div className="aspect-video">
              <iframe
                src="https://www.youtube.com/embed/mrWKZNNLS2c"
                className="w-full h-full border-0"
                title="Claude Trading Agent — Tutorial"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-16 lg:mb-20">
          {c.stats.map((stat, i) => (
            <div key={i} className="text-center p-4 sm:p-5 lg:p-6 rounded-xl lg:rounded-2xl bg-hub-card border border-emerald-500/10 hover:border-emerald-500/30 transition-colors">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">{stat.value}</div>
              <div className="text-xs sm:text-sm lg:text-base text-hub-muted mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 mb-12 lg:mb-16">
          {c.features.map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              className="p-5 sm:p-6 lg:p-7 rounded-xl lg:rounded-2xl bg-hub-card border border-white/10 hover:border-emerald-500/20 transition-colors group">
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition-colors">
                <f.icon className="w-5 h-5 lg:w-6 lg:h-6 text-emerald-400" />
              </div>
              <h3 className="text-base lg:text-lg font-bold text-hub-text mb-2">{f.title}</h3>
              <p className="text-sm lg:text-base text-hub-muted leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
          <a href="https://www.youtube.com/watch?v=mrWKZNNLS2c" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 sm:px-10 lg:px-12 py-4 lg:py-5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-base sm:text-lg lg:text-xl hover:opacity-90 transition-all active:scale-[0.98] shadow-lg shadow-emerald-500/25">
            <ExternalLink className="w-5 h-5 lg:w-6 lg:h-6" />
            {c.cta}
          </a>
          <p className="text-sm lg:text-base text-hub-muted mt-4">{c.ctaDesc}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ClaudeTradingSection;
