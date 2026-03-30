import { motion } from 'framer-motion';
import { TrendingUp, Brain, BarChart3, Shield, Activity, Target, Zap, LineChart, Bell } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const featureIcons = [Brain, Activity, BarChart3, Target, LineChart, Bell, Shield, Zap];

const i18n: Record<string, {
  badge: string; title1: string; title2: string; desc: string;
  cta: string; ctaDemo: string;
  checks: string[];
  stats: { value: string; label: string }[];
  howTitle: string; howDesc: string;
  steps: { icon: string; title: string; desc: string }[];
  featuresTitle: string;
  features: { title: string; desc: string }[];
  exploreCta: string; exploreDesc: string;
  disclaimer: string;
  resultsTitle: string;
  results: { value: string; label: string }[];
}> = {
  ro: {
    badge: 'AI Sentiment Analysis — LIVE',
    title1: 'BET SENTIMENT',
    title2: 'AI',
    desc: 'Nu ghici. Calculează edge-ul real față de bookmaker cu analiză de sentiment din 10.000+ surse web. Scanare zilnică, scor sentiment 0-100, calcul edge automat și 5 bilete zilnic pe Telegram.',
    cta: 'START GRATUIT 7 ZILE',
    ctaDemo: 'CUM FUNCȚIONEAZĂ',
    checks: ['80% Winrate', '1247 Meciuri', '18% Edge Mediu', '5 Bilete/zi'],
    stats: [
      { value: '80%', label: 'Winrate' },
      { value: '1,247', label: 'Meciuri analizate' },
      { value: '18%', label: 'Edge mediu' },
      { value: '+340%', label: 'ROI cumulat' },
    ],
    howTitle: 'Cum Funcționează',
    howDesc: 'De la scanare web la bilete câștigătoare — în 4 pași automatizați.',
    steps: [
      { icon: '📡', title: 'Scanare Web', desc: 'AI-ul scanează zilnic 10.000+ surse: știri sportive, forumuri de betting, social media, statistici oficiale și date meteo.' },
      { icon: '🧠', title: 'Sentiment Score', desc: 'Algoritmul calculează un scor de sentiment 0-100 pentru fiecare meci, combinând semnale pozitive și negative din toate sursele.' },
      { icon: '📊', title: 'Calcul Edge', desc: 'Comparăm probabilitatea noastră calculată cu probabilitatea implicată de cotă. Dacă edge > 10%, selecția e validă.' },
      { icon: '🎯', title: '5 Bilete Zilnic', desc: 'Primești zilnic 5 bilete combinate cu cota ~5, construite din selecțiile cu cel mai mare edge. Direct pe Telegram.' },
    ],
    featuresTitle: 'Funcționalități',
    features: [
      { title: 'Scanare 10.000+ Surse', desc: 'Știri sportive, forumuri, social media, statistici oficiale — totul agregat automat zilnic.' },
      { title: 'Sentiment Score 0-100', desc: 'Scor de sentiment calculat din 5 dimensiuni: injuries, formă, știri, H2H, condiții.' },
      { title: 'Calcul Edge Automat', desc: 'Comparăm probabilitatea AI cu probabilitatea implicată de cotă pentru fiecare selecție.' },
      { title: 'Morning Flow Automat', desc: 'Parsare PDF Superbet → filtrare → analiză sentiment → bilete generate automat la 9:00.' },
      { title: 'Dashboard Live Web', desc: 'Urmărește în timp real cum analizează AI-ul fiecare meci — literă cu literă.' },
      { title: 'Alerte Telegram', desc: 'Bilete livrate instant pe Telegram cu detalii complete: meci, cotă, edge, confidence.' },
    ],
    exploreCta: 'Deschide Dashboard Live →',
    exploreDesc: 'Date reale, analiză live, fără înregistrare necesară.',
    disclaimer: 'Pariurile sportive implică riscuri financiare. Performanța trecută nu garantează rezultate viitoare.',
    resultsTitle: 'Rezultate Reale',
    results: [
      { value: '80%', label: 'Winrate' },
      { value: '1,247', label: 'Meciuri analizate' },
      { value: '+340%', label: 'ROI cumulat' },
      { value: '18.4%', label: 'Edge mediu' },
      { value: '5', label: 'Bilete / zi' },
    ],
  },
  en: {
    badge: 'AI Sentiment Analysis — LIVE',
    title1: 'BET SENTIMENT',
    title2: 'AI',
    desc: "Don't guess. Calculate the real edge against the bookmaker with sentiment analysis from 10,000+ web sources. Daily scanning, sentiment score 0-100, automatic edge calculation and 5 daily tickets on Telegram.",
    cta: 'START FREE 7 DAYS',
    ctaDemo: 'HOW IT WORKS',
    checks: ['80% Winrate', '1247 Matches', '18% Avg Edge', '5 Tickets/day'],
    stats: [
      { value: '80%', label: 'Winrate' },
      { value: '1,247', label: 'Matches analyzed' },
      { value: '18%', label: 'Average edge' },
      { value: '+340%', label: 'Cumulative ROI' },
    ],
    howTitle: 'How It Works',
    howDesc: 'From web scanning to winning tickets — in 4 automated steps.',
    steps: [
      { icon: '📡', title: 'Web Scanning', desc: 'AI scans 10,000+ sources daily: sports news, betting forums, social media, official stats and weather data.' },
      { icon: '🧠', title: 'Sentiment Score', desc: 'Algorithm calculates a 0-100 sentiment score for each match, combining positive and negative signals from all sources.' },
      { icon: '📊', title: 'Edge Calculation', desc: 'We compare our calculated probability with the implied probability from odds. If edge > 10%, the selection is valid.' },
      { icon: '🎯', title: '5 Daily Tickets', desc: 'Receive 5 combined tickets daily with ~5 odds, built from selections with the highest edge. Directly on Telegram.' },
    ],
    featuresTitle: 'Features',
    features: [
      { title: '10,000+ Source Scanning', desc: 'Sports news, forums, social media, official statistics — all aggregated automatically daily.' },
      { title: 'Sentiment Score 0-100', desc: 'Sentiment score calculated from 5 dimensions: injuries, form, news, H2H, conditions.' },
      { title: 'Automatic Edge Calculation', desc: 'We compare AI probability with the implied probability from odds for each selection.' },
      { title: 'Automatic Morning Flow', desc: 'Superbet PDF parsing → filtering → sentiment analysis → tickets generated automatically at 9:00 AM.' },
      { title: 'Live Web Dashboard', desc: 'Watch in real-time how AI analyzes each match — letter by letter.' },
      { title: 'Telegram Alerts', desc: 'Tickets delivered instantly on Telegram with full details: match, odds, edge, confidence.' },
    ],
    exploreCta: 'Open Live Dashboard →',
    exploreDesc: 'Real data, live analysis, no registration required.',
    disclaimer: 'Sports betting involves financial risks. Past performance does not guarantee future results.',
    resultsTitle: 'Real Results',
    results: [
      { value: '80%', label: 'Winrate' },
      { value: '1,247', label: 'Matches analyzed' },
      { value: '+340%', label: 'Cumulative ROI' },
      { value: '18.4%', label: 'Average edge' },
      { value: '5', label: 'Tickets / day' },
    ],
  },
  es: {
    badge: 'Análisis de Sentimiento AI — LIVE',
    title1: 'BET SENTIMENT',
    title2: 'AI',
    desc: 'No adivines. Calcula el edge real contra la casa de apuestas con análisis de sentimiento de 10.000+ fuentes web. Escaneo diario, score de sentimiento 0-100, cálculo de edge automático y 5 tickets diarios en Telegram.',
    cta: 'INICIO GRATIS 7 DÍAS',
    ctaDemo: 'CÓMO FUNCIONA',
    checks: ['80% Winrate', '1247 Partidos', '18% Edge Medio', '5 Tickets/día'],
    stats: [
      { value: '80%', label: 'Winrate' },
      { value: '1,247', label: 'Partidos analizados' },
      { value: '18%', label: 'Edge medio' },
      { value: '+340%', label: 'ROI acumulado' },
    ],
    howTitle: 'Cómo Funciona',
    howDesc: 'Del escaneo web a tickets ganadores — en 4 pasos automatizados.',
    steps: [
      { icon: '📡', title: 'Escaneo Web', desc: 'La IA escanea diariamente 10.000+ fuentes: noticias deportivas, foros de apuestas, redes sociales, estadísticas oficiales y datos meteorológicos.' },
      { icon: '🧠', title: 'Score de Sentimiento', desc: 'El algoritmo calcula un score de sentimiento 0-100 para cada partido, combinando señales positivas y negativas.' },
      { icon: '📊', title: 'Cálculo de Edge', desc: 'Comparamos nuestra probabilidad calculada con la probabilidad implícita de la cuota. Si edge > 10%, la selección es válida.' },
      { icon: '🎯', title: '5 Tickets Diarios', desc: 'Recibe 5 tickets combinados diarios con cuota ~5, construidos con las selecciones de mayor edge.' },
    ],
    featuresTitle: 'Funcionalidades',
    features: [
      { title: 'Escaneo 10.000+ Fuentes', desc: 'Noticias deportivas, foros, redes sociales, estadísticas oficiales — todo agregado automáticamente.' },
      { title: 'Score de Sentimiento 0-100', desc: 'Score calculado desde 5 dimensiones: lesiones, forma, noticias, H2H, condiciones.' },
      { title: 'Cálculo de Edge Automático', desc: 'Comparamos probabilidad IA con probabilidad implícita de la cuota para cada selección.' },
      { title: 'Morning Flow Automático', desc: 'Parseo PDF → filtrado → análisis de sentimiento → tickets generados automáticamente.' },
      { title: 'Dashboard Live Web', desc: 'Observa en tiempo real cómo la IA analiza cada partido.' },
      { title: 'Alertas Telegram', desc: 'Tickets entregados instantáneamente en Telegram con detalles completos.' },
    ],
    exploreCta: 'Abrir Dashboard Live →',
    exploreDesc: 'Datos reales, análisis live, sin registro necesario.',
    disclaimer: 'Las apuestas deportivas implican riesgos financieros. El rendimiento pasado no garantiza resultados futuros.',
    resultsTitle: 'Resultados Reales',
    results: [
      { value: '80%', label: 'Winrate' },
      { value: '1,247', label: 'Partidos analizados' },
      { value: '+340%', label: 'ROI acumulado' },
      { value: '18.4%', label: 'Edge medio' },
      { value: '5', label: 'Tickets / día' },
    ],
  },
  fr: {
    badge: "Analyse de Sentiment AI — LIVE",
    title1: 'BET SENTIMENT',
    title2: 'AI',
    desc: "Ne devinez pas. Calculez l'edge réel face au bookmaker avec l'analyse de sentiment de 10 000+ sources web. Scan quotidien, score de sentiment 0-100, calcul d'edge automatique et 5 tickets quotidiens sur Telegram.",
    cta: 'ESSAI GRATUIT 7 JOURS',
    ctaDemo: 'COMMENT ÇA MARCHE',
    checks: ['80% Winrate', '1247 Matchs', '18% Edge Moyen', '5 Tickets/jour'],
    stats: [
      { value: '80%', label: 'Winrate' },
      { value: '1,247', label: 'Matchs analysés' },
      { value: '18%', label: 'Edge moyen' },
      { value: '+340%', label: 'ROI cumulé' },
    ],
    howTitle: 'Comment Ça Marche',
    howDesc: "Du scan web aux tickets gagnants — en 4 étapes automatisées.",
    steps: [
      { icon: '📡', title: 'Scan Web', desc: "L'IA scanne quotidiennement 10 000+ sources : actualités sportives, forums de paris, réseaux sociaux, statistiques officielles." },
      { icon: '🧠', title: 'Score de Sentiment', desc: "L'algorithme calcule un score de sentiment 0-100 pour chaque match, combinant signaux positifs et négatifs." },
      { icon: '📊', title: "Calcul d'Edge", desc: "Nous comparons notre probabilité calculée avec la probabilité impliquée par la cote. Si edge > 10%, la sélection est valide." },
      { icon: '🎯', title: '5 Tickets Quotidiens', desc: "Recevez 5 tickets combinés quotidiens avec cote ~5, construits à partir des sélections avec le plus grand edge." },
    ],
    featuresTitle: 'Fonctionnalités',
    features: [
      { title: 'Scan 10 000+ Sources', desc: 'Actualités sportives, forums, réseaux sociaux, statistiques officielles — tout agrégé automatiquement.' },
      { title: 'Score de Sentiment 0-100', desc: 'Score calculé à partir de 5 dimensions : blessures, forme, actualités, H2H, conditions.' },
      { title: "Calcul d'Edge Automatique", desc: "Nous comparons la probabilité IA avec la probabilité impliquée de la cote." },
      { title: 'Morning Flow Automatique', desc: 'Parsing PDF → filtrage → analyse de sentiment → tickets générés automatiquement.' },
      { title: 'Dashboard Live Web', desc: "Regardez en temps réel comment l'IA analyse chaque match." },
      { title: 'Alertes Telegram', desc: 'Tickets livrés instantanément sur Telegram avec tous les détails.' },
    ],
    exploreCta: 'Ouvrir Dashboard Live →',
    exploreDesc: 'Données réelles, analyse live, sans inscription nécessaire.',
    disclaimer: "Les paris sportifs impliquent des risques financiers. Les performances passées ne garantissent pas les résultats futurs.",
    resultsTitle: 'Résultats Réels',
    results: [
      { value: '80%', label: 'Winrate' },
      { value: '1,247', label: 'Matchs analysés' },
      { value: '+340%', label: 'ROI cumulé' },
      { value: '18.4%', label: 'Edge moyen' },
      { value: '5', label: 'Tickets / jour' },
    ],
  },
  it: {
    badge: 'Analisi del Sentimento AI — LIVE',
    title1: 'BET SENTIMENT',
    title2: 'AI',
    desc: "Non indovinare. Calcola il vero edge contro il bookmaker con l'analisi del sentimento da 10.000+ fonti web. Scansione giornaliera, punteggio sentimento 0-100, calcolo edge automatico e 5 biglietti giornalieri su Telegram.",
    cta: 'PROVA GRATUITA 7 GIORNI',
    ctaDemo: 'COME FUNZIONA',
    checks: ['80% Winrate', '1247 Partite', '18% Edge Medio', '5 Biglietti/giorno'],
    stats: [
      { value: '80%', label: 'Winrate' },
      { value: '1,247', label: 'Partite analizzate' },
      { value: '18%', label: 'Edge medio' },
      { value: '+340%', label: 'ROI cumulativo' },
    ],
    howTitle: 'Come Funziona',
    howDesc: 'Dalla scansione web ai biglietti vincenti — in 4 passaggi automatizzati.',
    steps: [
      { icon: '📡', title: 'Scansione Web', desc: "L'IA scansiona quotidianamente 10.000+ fonti: notizie sportive, forum di scommesse, social media, statistiche ufficiali." },
      { icon: '🧠', title: 'Score di Sentimento', desc: "L'algoritmo calcola un punteggio di sentimento 0-100 per ogni partita." },
      { icon: '📊', title: "Calcolo dell'Edge", desc: "Confrontiamo la nostra probabilità calcolata con la probabilità implicita della quota." },
      { icon: '🎯', title: '5 Biglietti Giornalieri', desc: 'Ricevi 5 biglietti combinati giornalieri con quota ~5, costruiti dalle selezioni con il maggiore edge.' },
    ],
    featuresTitle: 'Funzionalità',
    features: [
      { title: 'Scansione 10.000+ Fonti', desc: 'Notizie sportive, forum, social media, statistiche ufficiali — tutto aggregato automaticamente.' },
      { title: 'Score di Sentimento 0-100', desc: 'Punteggio calcolato da 5 dimensioni: infortuni, forma, notizie, H2H, condizioni.' },
      { title: "Calcolo Edge Automatico", desc: "Confrontiamo la probabilità IA con la probabilità implicita della quota." },
      { title: 'Morning Flow Automatico', desc: 'Parsing PDF → filtro → analisi sentimento → biglietti generati automaticamente.' },
      { title: 'Dashboard Live Web', desc: "Guarda in tempo reale come l'IA analizza ogni partita." },
      { title: 'Avvisi Telegram', desc: 'Biglietti consegnati istantaneamente su Telegram con tutti i dettagli.' },
    ],
    exploreCta: 'Apri Dashboard Live →',
    exploreDesc: 'Dati reali, analisi live, senza registrazione necessaria.',
    disclaimer: 'Le scommesse sportive comportano rischi finanziari. Le prestazioni passate non garantiscono risultati futuri.',
    resultsTitle: 'Risultati Reali',
    results: [
      { value: '80%', label: 'Winrate' },
      { value: '1,247', label: 'Partite analizzate' },
      { value: '+340%', label: 'ROI cumulativo' },
      { value: '18.4%', label: 'Edge medio' },
      { value: '5', label: 'Biglietti / giorno' },
    ],
  },
  de: {
    badge: 'KI-Sentimentanalyse — LIVE',
    title1: 'BET SENTIMENT',
    title2: 'AI',
    desc: 'Nicht raten. Berechne den echten Edge gegenüber dem Buchmacher mit Sentimentanalyse aus 10.000+ Webquellen. Täglicher Scan, Sentiment-Score 0-100, automatische Edge-Berechnung und 5 tägliche Tickets auf Telegram.',
    cta: 'KOSTENLOS 7 TAGE STARTEN',
    ctaDemo: 'WIE ES FUNKTIONIERT',
    checks: ['80% Winrate', '1247 Spiele', '18% Ø Edge', '5 Tickets/Tag'],
    stats: [
      { value: '80%', label: 'Winrate' },
      { value: '1,247', label: 'Spiele analysiert' },
      { value: '18%', label: 'Durchschn. Edge' },
      { value: '+340%', label: 'Kumulativer ROI' },
    ],
    howTitle: 'Wie Es Funktioniert',
    howDesc: 'Vom Web-Scan zu gewinnenden Tickets — in 4 automatisierten Schritten.',
    steps: [
      { icon: '📡', title: 'Web-Scan', desc: 'Die KI scannt täglich 10.000+ Quellen: Sportnachrichten, Wettforen, Social Media, offizielle Statistiken.' },
      { icon: '🧠', title: 'Sentiment-Score', desc: 'Der Algorithmus berechnet einen Sentiment-Score von 0-100 für jedes Spiel.' },
      { icon: '📊', title: 'Edge-Berechnung', desc: 'Wir vergleichen unsere berechnete Wahrscheinlichkeit mit der impliziten Wahrscheinlichkeit der Quote.' },
      { icon: '🎯', title: '5 Tägliche Tickets', desc: 'Erhalte täglich 5 Kombi-Tickets mit Quote ~5, aufgebaut aus Auswahlen mit dem höchsten Edge.' },
    ],
    featuresTitle: 'Funktionen',
    features: [
      { title: 'Scan von 10.000+ Quellen', desc: 'Sportnachrichten, Foren, Social Media, offizielle Statistiken — alles automatisch aggregiert.' },
      { title: 'Sentiment-Score 0-100', desc: 'Score berechnet aus 5 Dimensionen: Verletzungen, Form, Nachrichten, H2H, Bedingungen.' },
      { title: 'Automatische Edge-Berechnung', desc: 'Wir vergleichen die KI-Wahrscheinlichkeit mit der impliziten Wahrscheinlichkeit der Quote.' },
      { title: 'Automatischer Morning Flow', desc: 'PDF-Parsing → Filterung → Sentimentanalyse → Tickets automatisch generiert.' },
      { title: 'Live Web Dashboard', desc: 'Beobachte in Echtzeit, wie die KI jedes Spiel analysiert.' },
      { title: 'Telegram-Benachrichtigungen', desc: 'Tickets sofort auf Telegram mit allen Details geliefert.' },
    ],
    exploreCta: 'Live Dashboard Öffnen →',
    exploreDesc: 'Echte Daten, Live-Analyse, keine Registrierung nötig.',
    disclaimer: 'Sportwetten bergen finanzielle Risiken. Vergangene Leistungen garantieren keine zukünftigen Ergebnisse.',
    resultsTitle: 'Echte Ergebnisse',
    results: [
      { value: '80%', label: 'Winrate' },
      { value: '1,247', label: 'Spiele analysiert' },
      { value: '+340%', label: 'Kumulativer ROI' },
      { value: '18.4%', label: 'Durchschn. Edge' },
      { value: '5', label: 'Tickets / Tag' },
    ],
  },
  ar: {
    badge: 'تحليل المشاعر بالذكاء الاصطناعي — مباشر',
    title1: 'BET SENTIMENT',
    title2: 'AI',
    desc: 'لا تخمن. احسب الأفضلية الحقيقية ضد المراهن مع تحليل المشاعر من أكثر من 10,000 مصدر ويب. مسح يومي، درجة مشاعر 0-100، حساب أفضلية تلقائي و5 تذاكر يومية على تيليجرام.',
    cta: 'ابدأ مجاناً 7 أيام',
    ctaDemo: 'كيف يعمل',
    checks: ['80% معدل فوز', '1247 مباراة', '18% أفضلية متوسطة', '5 تذاكر/يوم'],
    stats: [
      { value: '80%', label: 'معدل الفوز' },
      { value: '1,247', label: 'مباريات محللة' },
      { value: '18%', label: 'أفضلية متوسطة' },
      { value: '+340%', label: 'عائد تراكمي' },
    ],
    howTitle: 'كيف يعمل',
    howDesc: 'من مسح الويب إلى التذاكر الفائزة — في 4 خطوات آلية.',
    steps: [
      { icon: '📡', title: 'مسح الويب', desc: 'يمسح الذكاء الاصطناعي أكثر من 10,000 مصدر يومياً: أخبار رياضية، منتديات مراهنات، وسائل تواصل اجتماعي.' },
      { icon: '🧠', title: 'درجة المشاعر', desc: 'يحسب الخوارزمية درجة مشاعر 0-100 لكل مباراة.' },
      { icon: '📊', title: 'حساب الأفضلية', desc: 'نقارن احتمالنا المحسوب مع الاحتمال الضمني من الاحتمالات.' },
      { icon: '🎯', title: '5 تذاكر يومية', desc: 'استلم 5 تذاكر مجمعة يومياً مع احتمالات ~5، مبنية من الاختيارات ذات الأفضلية الأعلى.' },
    ],
    featuresTitle: 'الميزات',
    features: [
      { title: 'مسح 10,000+ مصدر', desc: 'أخبار رياضية، منتديات، وسائل تواصل اجتماعي — كل شيء مجمع تلقائياً.' },
      { title: 'درجة مشاعر 0-100', desc: 'درجة محسوبة من 5 أبعاد: إصابات، شكل، أخبار، مواجهات مباشرة، ظروف.' },
      { title: 'حساب أفضلية تلقائي', desc: 'نقارن احتمال الذكاء الاصطناعي مع الاحتمال الضمني.' },
      { title: 'تدفق صباحي تلقائي', desc: 'تحليل PDF → تصفية → تحليل مشاعر → تذاكر مولدة تلقائياً.' },
      { title: 'لوحة تحكم مباشرة', desc: 'شاهد في الوقت الفعلي كيف يحلل الذكاء الاصطناعي كل مباراة.' },
      { title: 'تنبيهات تيليجرام', desc: 'تذاكر يتم تسليمها فورياً على تيليجرام مع كل التفاصيل.' },
    ],
    exploreCta: 'افتح لوحة التحكم المباشرة →',
    exploreDesc: 'بيانات حقيقية، تحليل مباشر، بدون تسجيل.',
    disclaimer: 'المراهنات الرياضية تنطوي على مخاطر مالية. الأداء السابق لا يضمن النتائج المستقبلية.',
    resultsTitle: 'نتائج حقيقية',
    results: [
      { value: '80%', label: 'معدل الفوز' },
      { value: '1,247', label: 'مباريات محللة' },
      { value: '+340%', label: 'عائد تراكمي' },
      { value: '18.4%', label: 'أفضلية متوسطة' },
      { value: '5', label: 'تذاكر / يوم' },
    ],
  },
};

const BetSentimentSection = () => {
  const { language } = useLanguage();
  const c = i18n[language] || i18n.en;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="relative py-16 sm:py-20 lg:py-28 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-amber-500/8 rounded-full blur-[160px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-6">
            <Activity className="w-4 h-4" />
            {c.badge}
            <span className="flex h-2 w-2 relative ml-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-black text-hub-text mb-4 lg:mb-6 leading-tight">
            {c.title1}{' '}
            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent">{c.title2}</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-2xl text-hub-secondary max-w-4xl mx-auto leading-relaxed">{c.desc}</p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-6">
            {c.checks.map((ch, i) => (
              <span key={i} className="px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/15 text-amber-300 text-xs sm:text-sm font-medium">✓ {ch}</span>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-10 sm:mb-14">
          {c.stats.map((stat, i) => (
            <div key={i} className="text-center p-4 sm:p-5 lg:p-6 rounded-xl lg:rounded-2xl bg-hub-card border border-amber-500/10 hover:border-amber-500/30 transition-colors">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">{stat.value}</div>
              <div className="text-xs sm:text-sm lg:text-base text-hub-muted mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Live site preview */}
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="mb-10 sm:mb-14">
          <div className="rounded-xl sm:rounded-2xl border border-amber-500/10 bg-amber-500/[0.03] overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-amber-500/10">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
              </div>
              <span className="text-[10px] sm:text-xs text-amber-200/40 font-mono truncate">societybot.shop</span>
            </div>
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src="https://societybot.shop/"
                className="absolute inset-0 w-full h-full border-0"
                title="BetSentiment AI Live Preview"
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>

        {/* How it works */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10 sm:mb-14">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-extrabold text-hub-text mb-1">{c.howTitle}</h3>
          <p className="text-xs sm:text-sm text-hub-muted mb-4">{c.howDesc}</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
            {c.steps.map((step, i) => (
              <div key={i} className="p-3.5 sm:p-4 lg:p-5 rounded-xl bg-amber-500/[0.03] border border-amber-500/10">
                <div className="text-2xl mb-2">{step.icon}</div>
                <div className="text-sm sm:text-base font-bold text-hub-text mb-1">{step.title}</div>
                <div className="text-xs sm:text-sm text-hub-muted leading-relaxed">{step.desc}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Features */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-10 sm:mb-14">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-extrabold text-hub-text mb-4">{c.featuresTitle}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
            {c.features.map((f, i) => {
              const Icon = featureIcons[i] || Shield;
              return (
                <div key={i} className="flex items-start gap-3 p-3 sm:p-4 lg:p-5 rounded-xl border border-amber-500/10 hover:border-amber-500/25 transition-colors bg-amber-500/[0.03]">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 mt-0.5 shrink-0" />
                  <div>
                    <div className="text-[13px] sm:text-sm lg:text-base font-semibold text-hub-text">{f.title}</div>
                    <div className="text-xs lg:text-sm text-hub-muted leading-relaxed">{f.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Results */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10 sm:mb-14">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-extrabold text-hub-text mb-4 text-center">{c.resultsTitle}</h3>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 sm:gap-3">
            {c.results.map((r, i) => (
              <div key={i} className="text-center p-3 sm:p-4 rounded-xl bg-hub-card border border-amber-500/10">
                <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">{r.value}</div>
                <div className="text-[10px] sm:text-xs text-hub-muted mt-1">{r.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
          <p className="text-xs sm:text-sm text-hub-muted text-center mb-4">{c.exploreDesc}</p>
          <a
            href="https://societybot.shop/"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center py-3.5 sm:py-4 lg:py-5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-base lg:text-lg hover:opacity-90 transition-opacity active:scale-[0.98]"
          >
            {c.exploreCta}
          </a>
          <p className="text-[10px] sm:text-xs text-hub-muted/50 text-center mt-4">{c.disclaimer}</p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default BetSentimentSection;
