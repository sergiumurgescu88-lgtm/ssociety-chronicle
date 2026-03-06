import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const i18n: Record<string, {
  badge: string; title: string; subtitle: string; desc: string; cta: string;
  guideTitle: string; guide1: string; guide2: string; guide3: string;
  stats: { emoji: string; value: string; label: string }[];
  features: { emoji: string; title: string; desc: string }[];
}> = {
  ro: {
    badge: 'Stealth Mode — Nedetectabil',
    title: 'Tehnologie de automatizare invizibilă',
    subtitle: 'Nu e un bot. E un om digital.',
    desc: 'Primul sistem de outreach WhatsApp care nu poate fi detectat — pentru că se comportă exact ca un om real.',
    cta: '📱 Vreau sistemul →',
    guideTitle: 'Cum funcționează?',
    guide1: 'Human Behavior Engine: Algoritm de simulare a dactilografierii, pauzelor naturale și timpilor de citire — imposibil de diferențiat de un operator uman',
    guide2: 'Anti-Detection: Randomizare completă a intervalelor, variații de stil, rotație de mesaje și fingerprint unic per sesiune',
    guide3: 'Setup: 1. Conectezi WhatsApp → 2. Importi contacte → 3. Setezi campania → 4. Sistemul trimite ca un om real',
    stats: [
      { emoji: '📨', value: '2000+', label: 'Mesaje per campanie' },
      { emoji: '🛡️', value: '0%', label: 'Șansă de detecție' },
      { emoji: '✅', value: '~95%', label: 'Rată de livrare' },
      { emoji: '💰', value: '0€', label: 'Abonament lunar' },
    ],
    features: [
      { emoji: '🧠', title: 'Human Behavior Engine', desc: 'Algoritm de simulare a dactilografierii și pauzelor naturale — imposibil de diferențiat de un om real.' },
      { emoji: '🔒', title: 'Anti-Detection Protocol', desc: 'Randomizare completă: intervale, stil, fingerprint unic. Zero pattern-uri detectabile.' },
      { emoji: '⌨️', title: 'Typing Simulation', desc: 'Simulare realistă de tastare cu viteze variabile, corecturi și pauze de gândire naturale.' },
      { emoji: '📊', title: 'Smart Throttling', desc: 'Controlul automat al vitezei de trimitere bazat pe pattern-uri umane de activitate.' },
      { emoji: '🎭', title: 'Message Variation AI', desc: 'Fiecare mesaj este unic — variații de text, emoji și structură generate automat.' },
      { emoji: '🕐', title: 'Natural Timing', desc: 'Pauze realiste între mesaje — nu trimitere robotică, ci comportament uman autentic.' },
      { emoji: '📱', title: 'Session Fingerprinting', desc: 'Fiecare sesiune are un fingerprint unic — imposibil de corelat sau urmărit.' },
      { emoji: '🔄', title: 'Auto-Recovery', desc: 'Sistem de recuperare automată în caz de întrerupere — continuă exact de unde a rămas.' },
      { emoji: '📈', title: 'Delivery Analytics', desc: 'Monitorizare în timp real a ratei de livrare, deschidere și răspuns pentru fiecare campanie.' },
    ],
  },
  en: {
    badge: 'Stealth Mode — Undetectable',
    title: 'Invisible Automation Technology',
    subtitle: "It's not a bot. It's a digital human.",
    desc: 'The first WhatsApp outreach system that cannot be detected — because it behaves exactly like a real person.',
    cta: '📱 Get the system →',
    guideTitle: 'How does it work?',
    guide1: 'Human Behavior Engine: Typing simulation algorithm, natural pauses and reading times — impossible to distinguish from a human operator',
    guide2: 'Anti-Detection: Full interval randomization, style variations, message rotation and unique fingerprint per session',
    guide3: 'Setup: 1. Connect WhatsApp → 2. Import contacts → 3. Set up campaign → 4. System sends like a real person',
    stats: [
      { emoji: '📨', value: '2000+', label: 'Messages per campaign' },
      { emoji: '🛡️', value: '0%', label: 'Detection chance' },
      { emoji: '✅', value: '~95%', label: 'Delivery rate' },
      { emoji: '💰', value: '0€', label: 'Monthly subscription' },
    ],
    features: [
      { emoji: '🧠', title: 'Human Behavior Engine', desc: 'Typing and natural pause simulation algorithm — impossible to distinguish from a real person.' },
      { emoji: '🔒', title: 'Anti-Detection Protocol', desc: 'Full randomization: intervals, style, unique fingerprint. Zero detectable patterns.' },
      { emoji: '⌨️', title: 'Typing Simulation', desc: 'Realistic typing simulation with variable speeds, corrections and natural thinking pauses.' },
      { emoji: '📊', title: 'Smart Throttling', desc: 'Automatic sending speed control based on human activity patterns.' },
      { emoji: '🎭', title: 'Message Variation AI', desc: 'Every message is unique — text, emoji and structure variations generated automatically.' },
      { emoji: '🕐', title: 'Natural Timing', desc: 'Realistic pauses between messages — not robotic sending, but authentic human behavior.' },
      { emoji: '📱', title: 'Session Fingerprinting', desc: 'Each session has a unique fingerprint — impossible to correlate or track.' },
      { emoji: '🔄', title: 'Auto-Recovery', desc: 'Automatic recovery system in case of interruption — continues exactly where it left off.' },
      { emoji: '📈', title: 'Delivery Analytics', desc: 'Real-time monitoring of delivery, open and response rates for every campaign.' },
    ],
  },
  es: {
    badge: 'Modo Stealth — Indetectable',
    title: 'Tecnología de automatización invisible',
    subtitle: 'No es un bot. Es un humano digital.',
    desc: 'El primer sistema de outreach WhatsApp que no puede ser detectado — porque se comporta exactamente como una persona real.',
    cta: '📱 Quiero el sistema →',
    guideTitle: '¿Cómo funciona?',
    guide1: 'Human Behavior Engine: Algoritmo de simulación de escritura, pausas naturales y tiempos de lectura — imposible de diferenciar de un operador humano',
    guide2: 'Anti-Detección: Randomización completa de intervalos, variaciones de estilo, rotación de mensajes y huella digital única por sesión',
    guide3: 'Configuración: 1. Conectar WhatsApp → 2. Importar contactos → 3. Configurar campaña → 4. El sistema envía como una persona real',
    stats: [
      { emoji: '📨', value: '2000+', label: 'Mensajes por campaña' },
      { emoji: '🛡️', value: '0%', label: 'Probabilidad de detección' },
      { emoji: '✅', value: '~95%', label: 'Tasa de entrega' },
      { emoji: '💰', value: '0€', label: 'Suscripción mensual' },
    ],
    features: [
      { emoji: '🧠', title: 'Human Behavior Engine', desc: 'Algoritmo de simulación de escritura y pausas naturales — imposible de diferenciar de una persona real.' },
      { emoji: '🔒', title: 'Protocolo Anti-Detección', desc: 'Randomización completa: intervalos, estilo, huella digital única. Cero patrones detectables.' },
      { emoji: '⌨️', title: 'Simulación de Escritura', desc: 'Simulación realista de escritura con velocidades variables, correcciones y pausas naturales.' },
      { emoji: '📊', title: 'Throttling Inteligente', desc: 'Control automático de velocidad de envío basado en patrones de actividad humana.' },
      { emoji: '🎭', title: 'Variación de Mensajes IA', desc: 'Cada mensaje es único — variaciones de texto, emoji y estructura generadas automáticamente.' },
      { emoji: '🕐', title: 'Timing Natural', desc: 'Pausas realistas entre mensajes — no envío robótico, sino comportamiento humano auténtico.' },
      { emoji: '📱', title: 'Session Fingerprinting', desc: 'Cada sesión tiene una huella digital única — imposible de correlacionar o rastrear.' },
      { emoji: '🔄', title: 'Auto-Recuperación', desc: 'Sistema de recuperación automática en caso de interrupción — continúa exactamente donde se detuvo.' },
      { emoji: '📈', title: 'Analytics de Entrega', desc: 'Monitoreo en tiempo real de tasas de entrega, apertura y respuesta para cada campaña.' },
    ],
  },
  fr: {
    badge: 'Mode Stealth — Indétectable',
    title: "Technologie d'automatisation invisible",
    subtitle: "Ce n'est pas un bot. C'est un humain digital.",
    desc: "Le premier système d'outreach WhatsApp indétectable — car il se comporte exactement comme une personne réelle.",
    cta: '📱 Je veux le système →',
    guideTitle: 'Comment ça fonctionne ?',
    guide1: "Human Behavior Engine : Algorithme de simulation de frappe, pauses naturelles et temps de lecture — impossible à distinguer d'un opérateur humain",
    guide2: "Anti-Détection : Randomisation complète des intervalles, variations de style, rotation des messages et empreinte unique par session",
    guide3: "Configuration : 1. Connecter WhatsApp → 2. Importer les contacts → 3. Configurer la campagne → 4. Le système envoie comme une vraie personne",
    stats: [
      { emoji: '📨', value: '2000+', label: 'Messages par campagne' },
      { emoji: '🛡️', value: '0%', label: 'Chance de détection' },
      { emoji: '✅', value: '~95%', label: 'Taux de livraison' },
      { emoji: '💰', value: '0€', label: 'Abonnement mensuel' },
    ],
    features: [
      { emoji: '🧠', title: 'Human Behavior Engine', desc: "Algorithme de simulation de frappe et pauses naturelles — impossible à distinguer d'une vraie personne." },
      { emoji: '🔒', title: 'Protocole Anti-Détection', desc: 'Randomisation complète : intervalles, style, empreinte unique. Zéro motif détectable.' },
      { emoji: '⌨️', title: 'Simulation de Frappe', desc: 'Simulation réaliste de frappe avec vitesses variables, corrections et pauses de réflexion naturelles.' },
      { emoji: '📊', title: 'Throttling Intelligent', desc: "Contrôle automatique de la vitesse d'envoi basé sur des modèles d'activité humaine." },
      { emoji: '🎭', title: 'Variation de Messages IA', desc: 'Chaque message est unique — variations de texte, emoji et structure générées automatiquement.' },
      { emoji: '🕐', title: 'Timing Naturel', desc: "Pauses réalistes entre les messages — pas d'envoi robotique, mais un comportement humain authentique." },
      { emoji: '📱', title: 'Session Fingerprinting', desc: 'Chaque session a une empreinte unique — impossible à corréler ou suivre.' },
      { emoji: '🔄', title: 'Auto-Récupération', desc: "Système de récupération automatique en cas d'interruption — continue exactement où il s'est arrêté." },
      { emoji: '📈', title: 'Analytics de Livraison', desc: "Surveillance en temps réel des taux de livraison, d'ouverture et de réponse pour chaque campagne." },
    ],
  },
  it: {
    badge: 'Modalità Stealth — Non rilevabile',
    title: 'Tecnologia di automazione invisibile',
    subtitle: 'Non è un bot. È un umano digitale.',
    desc: 'Il primo sistema di outreach WhatsApp che non può essere rilevato — perché si comporta esattamente come una persona reale.',
    cta: '📱 Voglio il sistema →',
    guideTitle: 'Come funziona?',
    guide1: "Human Behavior Engine: Algoritmo di simulazione della digitazione, pause naturali e tempi di lettura — impossibile da distinguere da un operatore umano",
    guide2: "Anti-Rilevamento: Randomizzazione completa degli intervalli, variazioni di stile, rotazione messaggi e impronta unica per sessione",
    guide3: "Setup: 1. Connetti WhatsApp → 2. Importa contatti → 3. Configura campagna → 4. Il sistema invia come una persona reale",
    stats: [
      { emoji: '📨', value: '2000+', label: 'Messaggi per campagna' },
      { emoji: '🛡️', value: '0%', label: 'Probabilità di rilevamento' },
      { emoji: '✅', value: '~95%', label: 'Tasso di consegna' },
      { emoji: '💰', value: '0€', label: 'Abbonamento mensile' },
    ],
    features: [
      { emoji: '🧠', title: 'Human Behavior Engine', desc: 'Algoritmo di simulazione della digitazione e pause naturali — impossibile da distinguere da una persona reale.' },
      { emoji: '🔒', title: 'Protocollo Anti-Rilevamento', desc: 'Randomizzazione completa: intervalli, stile, impronta unica. Zero pattern rilevabili.' },
      { emoji: '⌨️', title: 'Simulazione di Digitazione', desc: 'Simulazione realistica con velocità variabili, correzioni e pause di riflessione naturali.' },
      { emoji: '📊', title: 'Throttling Intelligente', desc: "Controllo automatico della velocità di invio basato su modelli di attività umana." },
      { emoji: '🎭', title: 'Variazione Messaggi IA', desc: 'Ogni messaggio è unico — variazioni di testo, emoji e struttura generate automaticamente.' },
      { emoji: '🕐', title: 'Timing Naturale', desc: "Pause realistiche tra i messaggi — non invio robotico, ma comportamento umano autentico." },
      { emoji: '📱', title: 'Session Fingerprinting', desc: 'Ogni sessione ha un\'impronta unica — impossibile da correlare o tracciare.' },
      { emoji: '🔄', title: 'Auto-Recovery', desc: "Sistema di recupero automatico in caso di interruzione — continua esattamente da dove si era fermato." },
      { emoji: '📈', title: 'Analytics di Consegna', desc: 'Monitoraggio in tempo reale di tassi di consegna, apertura e risposta per ogni campagna.' },
    ],
  },
  de: {
    badge: 'Stealth-Modus — Nicht erkennbar',
    title: 'Unsichtbare Automatisierungstechnologie',
    subtitle: 'Kein Bot. Ein digitaler Mensch.',
    desc: 'Das erste WhatsApp-Outreach-System, das nicht erkannt werden kann — weil es sich genau wie eine echte Person verhält.',
    cta: '📱 System anfordern →',
    guideTitle: 'Wie funktioniert es?',
    guide1: 'Human Behavior Engine: Algorithmus zur Simulation von Tippen, natürlichen Pausen und Lesezeiten — unmöglich von einem menschlichen Bediener zu unterscheiden',
    guide2: 'Anti-Erkennung: Vollständige Randomisierung der Intervalle, Stilvariationen, Nachrichtenrotation und einzigartiger Fingerabdruck pro Sitzung',
    guide3: 'Setup: 1. WhatsApp verbinden → 2. Kontakte importieren → 3. Kampagne einrichten → 4. System sendet wie eine echte Person',
    stats: [
      { emoji: '📨', value: '2000+', label: 'Nachrichten pro Kampagne' },
      { emoji: '🛡️', value: '0%', label: 'Erkennungschance' },
      { emoji: '✅', value: '~95%', label: 'Zustellrate' },
      { emoji: '💰', value: '0€', label: 'Monatliches Abo' },
    ],
    features: [
      { emoji: '🧠', title: 'Human Behavior Engine', desc: 'Algorithmus zur Simulation von Tippen und natürlichen Pausen — unmöglich von einer echten Person zu unterscheiden.' },
      { emoji: '🔒', title: 'Anti-Erkennungs-Protokoll', desc: 'Vollständige Randomisierung: Intervalle, Stil, einzigartiger Fingerabdruck. Null erkennbare Muster.' },
      { emoji: '⌨️', title: 'Tipp-Simulation', desc: 'Realistische Tipp-Simulation mit variablen Geschwindigkeiten, Korrekturen und natürlichen Denkpausen.' },
      { emoji: '📊', title: 'Intelligentes Throttling', desc: 'Automatische Sendegeschwindigkeitskontrolle basierend auf menschlichen Aktivitätsmustern.' },
      { emoji: '🎭', title: 'Nachrichtenvariations-KI', desc: 'Jede Nachricht ist einzigartig — Text-, Emoji- und Strukturvariationen automatisch generiert.' },
      { emoji: '🕐', title: 'Natürliches Timing', desc: 'Realistische Pausen zwischen Nachrichten — kein robotisches Senden, sondern authentisches menschliches Verhalten.' },
      { emoji: '📱', title: 'Session Fingerprinting', desc: 'Jede Sitzung hat einen einzigartigen Fingerabdruck — unmöglich zu korrelieren oder zu verfolgen.' },
      { emoji: '🔄', title: 'Auto-Wiederherstellung', desc: 'Automatisches Wiederherstellungssystem bei Unterbrechung — fährt genau dort fort, wo es aufgehört hat.' },
      { emoji: '📈', title: 'Zustellungs-Analytics', desc: 'Echtzeit-Überwachung von Zustell-, Öffnungs- und Antwortraten für jede Kampagne.' },
    ],
  },
  ar: {
    badge: 'وضع التخفي — غير قابل للكشف',
    title: 'تقنية أتمتة غير مرئية',
    subtitle: 'ليس روبوتًا. إنه إنسان رقمي.',
    desc: 'أول نظام تواصل واتساب لا يمكن اكتشافه — لأنه يتصرف تمامًا مثل شخص حقيقي.',
    cta: '📱 أريد النظام ←',
    guideTitle: 'كيف يعمل؟',
    guide1: 'محرك السلوك البشري: خوارزمية محاكاة الكتابة والتوقفات الطبيعية وأوقات القراءة — مستحيل التفريق عن مشغل بشري',
    guide2: 'مكافحة الكشف: عشوائية كاملة للفترات، تنويعات في الأسلوب، تدوير الرسائل وبصمة فريدة لكل جلسة',
    guide3: 'الإعداد: 1. ربط واتساب ← 2. استيراد جهات الاتصال ← 3. إعداد الحملة ← 4. النظام يرسل كشخص حقيقي',
    stats: [
      { emoji: '📨', value: '2000+', label: 'رسالة لكل حملة' },
      { emoji: '🛡️', value: '0%', label: 'فرصة الكشف' },
      { emoji: '✅', value: '~95%', label: 'معدل التسليم' },
      { emoji: '💰', value: '0€', label: 'اشتراك شهري' },
    ],
    features: [
      { emoji: '🧠', title: 'محرك السلوك البشري', desc: 'خوارزمية محاكاة الكتابة والتوقفات الطبيعية — مستحيل التفريق عن شخص حقيقي.' },
      { emoji: '🔒', title: 'بروتوكول مكافحة الكشف', desc: 'عشوائية كاملة: فترات، أسلوب، بصمة فريدة. صفر أنماط قابلة للكشف.' },
      { emoji: '⌨️', title: 'محاكاة الكتابة', desc: 'محاكاة كتابة واقعية بسرعات متغيرة وتصحيحات وتوقفات تفكير طبيعية.' },
      { emoji: '📊', title: 'تحكم ذكي بالسرعة', desc: 'تحكم تلقائي بسرعة الإرسال بناءً على أنماط النشاط البشري.' },
      { emoji: '🎭', title: 'تنويع الرسائل بالذكاء الاصطناعي', desc: 'كل رسالة فريدة — تنويعات نص وإيموجي وبنية مولدة تلقائيًا.' },
      { emoji: '🕐', title: 'توقيت طبيعي', desc: 'توقفات واقعية بين الرسائل — ليس إرسالًا آليًا، بل سلوك بشري أصيل.' },
      { emoji: '📱', title: 'بصمة الجلسة', desc: 'كل جلسة لها بصمة فريدة — مستحيل الربط أو التتبع.' },
      { emoji: '🔄', title: 'استرداد تلقائي', desc: 'نظام استرداد تلقائي في حالة الانقطاع — يستمر بالضبط من حيث توقف.' },
      { emoji: '📈', title: 'تحليلات التسليم', desc: 'مراقبة فورية لمعدلات التسليم والفتح والاستجابة لكل حملة.' },
    ],
  },
};

const WhatsAllStealthSection = () => {
  const [guideOpen, setGuideOpen] = useState(false);
  const { language } = useLanguage();
  const c = i18n[language] || i18n.en;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      className="max-w-6xl mx-auto px-3 sm:px-4 py-8 sm:py-10 lg:py-14"
    >
      <div className="relative bg-[#0a0d0f] border border-[#00e5ff]/15 rounded-2xl sm:rounded-[2.5rem] overflow-hidden">
        {/* Top glow bar */}
        <div className="h-1 bg-gradient-to-r from-transparent via-[#00e5ff] to-transparent animate-pulse" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#00e5ff]/8 rounded-full blur-[100px]" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#7c4dff]/5 rounded-full blur-[100px]" />

        <div className="relative p-5 sm:p-8 lg:p-12">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-5 sm:mb-6 lg:mb-8">
            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br from-[#00e5ff] to-[#7c4dff] flex items-center justify-center shrink-0">
              <span className="text-2xl sm:text-3xl lg:text-4xl">👻</span>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl lg:text-4xl font-extrabold text-[#e0f7fa] leading-tight">{c.badge}</h2>
              <p className="text-sm sm:text-base lg:text-lg text-[#80deea] font-medium mt-1">{c.title}</p>
            </div>
          </div>

          {/* Video */}
          <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-[#00e5ff]/10 mb-6 sm:mb-8 bg-black/50">
            <div className="bg-[#0d1117] border-b border-[#00e5ff]/10 px-4 py-2.5 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex-1 text-center">
                <span className="text-xs text-[#80deea]/60 font-mono">stealth-outreach.demo</span>
              </div>
            </div>
            <div className="aspect-video">
              <video className="w-full h-full object-cover" controls muted loop playsInline>
                <source src="/videos/whatsall-prezentare.mp4" type="video/mp4" />
              </video>
            </div>
          </div>


          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 mb-6 sm:mb-8">
            {c.stats.map((s, i) => (
              <div key={i} className="text-center p-3 sm:p-4 lg:p-5 rounded-xl bg-[#00e5ff]/5 border border-[#00e5ff]/10">
                <div className="text-lg sm:text-xl mb-1">{s.emoji}</div>
                <div className="text-lg sm:text-2xl lg:text-3xl font-extrabold text-[#00e5ff]">{s.value}</div>
                <div className="text-[10px] sm:text-xs lg:text-sm text-[#80deea] mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Features grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
            {c.features.map((f, i) => (
              <div key={i} className="flex items-start gap-3 p-3 sm:p-4 lg:p-5 rounded-xl border border-[#00e5ff]/10 hover:border-[#00e5ff]/25 transition-colors bg-[#00e5ff]/[0.03]">
                <span className="text-lg sm:text-xl lg:text-2xl">{f.emoji}</span>
                <div>
                  <div className="text-[13px] sm:text-sm lg:text-base font-semibold text-[#e0f7fa]">{f.title}</div>
                  <div className="text-xs lg:text-sm text-[#80deea] leading-relaxed">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Guide accordion */}
          <button onClick={() => setGuideOpen(!guideOpen)}
            className="w-full flex items-center justify-between p-3.5 sm:p-4 lg:p-5 rounded-xl bg-[#00e5ff]/5 border border-[#00e5ff]/10 mt-6 mb-5 sm:mb-6 text-[#e0f7fa] font-medium text-sm sm:text-base lg:text-lg">
            {c.guideTitle}
            <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform ${guideOpen ? 'rotate-180' : ''}`} />
          </button>
          {guideOpen && (
            <div className="p-4 sm:p-6 rounded-xl bg-[#00e5ff]/5 border border-[#00e5ff]/10 mb-5 sm:mb-6 text-[13px] sm:text-sm lg:text-base text-[#80deea] space-y-3 leading-relaxed">
              <p><strong className="text-[#e0f7fa]">{c.guide1.split(':')[0]}:</strong> {c.guide1.split(':').slice(1).join(':')}</p>
              <p><strong className="text-[#e0f7fa]">{c.guide2.split(':')[0]}:</strong> {c.guide2.split(':').slice(1).join(':')}</p>
              <p><strong className="text-[#e0f7fa]">{c.guide3.split(':')[0]}:</strong> {c.guide3.split(':').slice(1).join(':')}</p>
            </div>
          )}

          {/* CTA */}
          <a href="https://wa.me/40768676141" target="_blank" rel="noopener noreferrer"
            className="block w-full text-center py-3.5 sm:py-4 lg:py-5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#00e5ff] to-[#7c4dff] text-white font-bold text-base lg:text-lg hover:opacity-90 transition-opacity active:scale-[0.98]">
            {c.cta}
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default WhatsAllStealthSection;
