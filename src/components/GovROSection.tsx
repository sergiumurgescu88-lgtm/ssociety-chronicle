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
    badge: 'GovRO — Forum Public AI',
    title: 'Transparență totală. Miniștri AI care analizează și propun soluții pe baza Constituției României.',
    desc: 'Platformă publică de guvernanță AI cu 17 departamente guvernamentale simulate, analiză de știri cu inteligență artificială, petiții AI, dezbateri publice și soluții generate automat — validate de funcționari publici.',
    cta: '🏛️ Accesează Forumul Public →',
    guideTitle: 'Ce include platforma',
    guide1: 'Departamente AI: 17 ministere simulate — de la Cancelarie la Ministerul Culturii, fiecare cu un Ministru AI dedicat care analizează și răspunde',
    guide2: 'Analiză Știri: Introdu linkul unei știri sau probleme din presă — Ministrul AI va analiza situația și va propune o soluție oficială bazată pe legislație',
    guide3: 'Petiții & Dezbateri: Trimite petiții direct ministrului AI, participă la dezbateri publice și consultă deciziile generate transparent',
    stats: [
      { emoji: '🏛️', value: '17', label: 'Departamente guvernamentale' },
      { emoji: '🤖', value: 'AI', label: 'Miniștri AI activi' },
      { emoji: '📜', value: 'LIVE', label: 'Petiții & Dezbateri' },
      { emoji: '⚖️', value: '100%', label: 'Bazat pe Constituție' },
    ],
    features: [
      { emoji: '🏛️', title: 'Cancelaria Prim-Ministrului', desc: 'Coordonare generală și decizii strategice AI.' },
      { emoji: '🛡️', title: 'Ministerul Afacerilor Interne', desc: 'Securitate internă și ordine publică.' },
      { emoji: '🌍', title: 'Ministerul Afacerilor Externe', desc: 'Diplomație și relații internaționale.' },
      { emoji: '⚔️', title: 'Ministerul Apărării', desc: 'Apărare națională și strategie militară.' },
      { emoji: '💰', title: 'Ministerul Finanțelor', desc: 'Politici fiscale și buget de stat.' },
      { emoji: '🚂', title: 'Ministerul Transporturilor', desc: 'Infrastructură și transport public.' },
      { emoji: '⚖️', title: 'Ministerul Justiției', desc: 'Sistem juridic și reformă legislativă.' },
      { emoji: '🌾', title: 'Ministerul Agriculturii', desc: 'Dezvoltare rurală și politici agricole.' },
      { emoji: '⚡', title: 'Ministerul Energiei', desc: 'Politici energetice și tranziție verde.' },
    ],
  },
  en: {
    badge: 'GovRO — AI Public Forum',
    title: 'Full transparency. AI Ministers analyzing and proposing solutions based on Romania\'s Constitution.',
    desc: 'Public AI governance platform with 17 simulated government departments, AI news analysis, AI petitions, public debates and auto-generated solutions — validated by public officials.',
    cta: '🏛️ Access Public Forum →',
    guideTitle: 'What the platform includes',
    guide1: 'AI Departments: 17 simulated ministries — from the Chancellery to the Ministry of Culture, each with a dedicated AI Minister',
    guide2: 'News Analysis: Enter a news link or press issue — the AI Minister will analyze and propose an official solution based on legislation',
    guide3: 'Petitions & Debates: Send petitions directly to the AI minister, participate in public debates and consult transparently generated decisions',
    stats: [
      { emoji: '🏛️', value: '17', label: 'Government departments' },
      { emoji: '🤖', value: 'AI', label: 'Active AI Ministers' },
      { emoji: '📜', value: 'LIVE', label: 'Petitions & Debates' },
      { emoji: '⚖️', value: '100%', label: 'Constitution-based' },
    ],
    features: [
      { emoji: '🏛️', title: 'Prime Minister\'s Office', desc: 'General coordination and strategic AI decisions.' },
      { emoji: '🛡️', title: 'Internal Affairs', desc: 'Internal security and public order.' },
      { emoji: '🌍', title: 'Foreign Affairs', desc: 'Diplomacy and international relations.' },
      { emoji: '⚔️', title: 'National Defense', desc: 'National defense and military strategy.' },
      { emoji: '💰', title: 'Ministry of Finance', desc: 'Fiscal policies and state budget.' },
      { emoji: '🚂', title: 'Ministry of Transport', desc: 'Infrastructure and public transport.' },
      { emoji: '⚖️', title: 'Ministry of Justice', desc: 'Legal system and legislative reform.' },
      { emoji: '🌾', title: 'Ministry of Agriculture', desc: 'Rural development and agricultural policies.' },
      { emoji: '⚡', title: 'Ministry of Energy', desc: 'Energy policies and green transition.' },
    ],
  },
  es: {
    badge: 'GovRO — Foro Público IA',
    title: 'Transparencia total. Ministros IA que analizan y proponen soluciones basadas en la Constitución de Rumanía.',
    desc: 'Plataforma de gobernanza IA con 17 departamentos gubernamentales simulados, análisis de noticias, peticiones, debates públicos y soluciones automáticas.',
    cta: '🏛️ Acceder al Foro →',
    guideTitle: 'Qué incluye la plataforma',
    guide1: 'Departamentos IA: 17 ministerios simulados, cada uno con un Ministro IA dedicado',
    guide2: 'Análisis de Noticias: Introduce un enlace de noticia — el Ministro IA analizará y propondrá una solución oficial',
    guide3: 'Peticiones y Debates: Envía peticiones, participa en debates públicos y consulta decisiones generadas transparentemente',
    stats: [
      { emoji: '🏛️', value: '17', label: 'Departamentos' },
      { emoji: '🤖', value: 'IA', label: 'Ministros IA' },
      { emoji: '📜', value: 'LIVE', label: 'Peticiones' },
      { emoji: '⚖️', value: '100%', label: 'Constitución' },
    ],
    features: [
      { emoji: '🏛️', title: 'Cancillería', desc: 'Coordinación general y decisiones estratégicas.' },
      { emoji: '🛡️', title: 'Asuntos Internos', desc: 'Seguridad interna y orden público.' },
      { emoji: '🌍', title: 'Asuntos Exteriores', desc: 'Diplomacia y relaciones internacionales.' },
      { emoji: '⚔️', title: 'Defensa Nacional', desc: 'Defensa y estrategia militar.' },
      { emoji: '💰', title: 'Finanzas', desc: 'Políticas fiscales y presupuesto.' },
      { emoji: '🚂', title: 'Transporte', desc: 'Infraestructura y transporte público.' },
      { emoji: '⚖️', title: 'Justicia', desc: 'Sistema legal y reforma legislativa.' },
      { emoji: '🌾', title: 'Agricultura', desc: 'Desarrollo rural y políticas agrícolas.' },
      { emoji: '⚡', title: 'Energía', desc: 'Políticas energéticas y transición verde.' },
    ],
  },
  fr: {
    badge: 'GovRO — Forum Public IA',
    title: 'Transparence totale. Ministres IA qui analysent et proposent des solutions basées sur la Constitution roumaine.',
    desc: 'Plateforme de gouvernance IA avec 17 départements gouvernementaux simulés, analyse de presse, pétitions, débats publics et solutions auto-générées.',
    cta: '🏛️ Accéder au Forum →',
    guideTitle: 'Ce que la plateforme comprend',
    guide1: 'Départements IA: 17 ministères simulés, chacun avec un Ministre IA dédié',
    guide2: 'Analyse de Presse: Entrez un lien d\'actualité — le Ministre IA analysera et proposera une solution officielle',
    guide3: 'Pétitions et Débats: Envoyez des pétitions, participez aux débats publics et consultez les décisions générées',
    stats: [
      { emoji: '🏛️', value: '17', label: 'Départements' },
      { emoji: '🤖', value: 'IA', label: 'Ministres IA' },
      { emoji: '📜', value: 'LIVE', label: 'Pétitions' },
      { emoji: '⚖️', value: '100%', label: 'Constitution' },
    ],
    features: [
      { emoji: '🏛️', title: 'Chancellerie', desc: 'Coordination générale et décisions stratégiques.' },
      { emoji: '🛡️', title: 'Affaires Intérieures', desc: 'Sécurité intérieure et ordre public.' },
      { emoji: '🌍', title: 'Affaires Étrangères', desc: 'Diplomatie et relations internationales.' },
      { emoji: '⚔️', title: 'Défense Nationale', desc: 'Défense et stratégie militaire.' },
      { emoji: '💰', title: 'Finances', desc: 'Politiques fiscales et budget de l\'État.' },
      { emoji: '🚂', title: 'Transports', desc: 'Infrastructure et transports publics.' },
      { emoji: '⚖️', title: 'Justice', desc: 'Système juridique et réforme législative.' },
      { emoji: '🌾', title: 'Agriculture', desc: 'Développement rural et politiques agricoles.' },
      { emoji: '⚡', title: 'Énergie', desc: 'Politiques énergétiques et transition verte.' },
    ],
  },
  it: {
    badge: 'GovRO — Forum Pubblico IA',
    title: 'Trasparenza totale. Ministri IA che analizzano e propongono soluzioni basate sulla Costituzione romena.',
    desc: 'Piattaforma di governance IA con 17 dipartimenti governativi simulati, analisi di notizie, petizioni, dibattiti pubblici e soluzioni auto-generate.',
    cta: '🏛️ Accedi al Forum →',
    guideTitle: 'Cosa include la piattaforma',
    guide1: 'Dipartimenti IA: 17 ministeri simulati, ognuno con un Ministro IA dedicato',
    guide2: 'Analisi Notizie: Inserisci un link di notizia — il Ministro IA analizzerà e proporrà una soluzione ufficiale',
    guide3: 'Petizioni e Dibattiti: Invia petizioni, partecipa ai dibattiti pubblici e consulta le decisioni generate',
    stats: [
      { emoji: '🏛️', value: '17', label: 'Dipartimenti' },
      { emoji: '🤖', value: 'IA', label: 'Ministri IA' },
      { emoji: '📜', value: 'LIVE', label: 'Petizioni' },
      { emoji: '⚖️', value: '100%', label: 'Costituzione' },
    ],
    features: [
      { emoji: '🏛️', title: 'Cancelleria', desc: 'Coordinamento generale e decisioni strategiche.' },
      { emoji: '🛡️', title: 'Affari Interni', desc: 'Sicurezza interna e ordine pubblico.' },
      { emoji: '🌍', title: 'Affari Esteri', desc: 'Diplomazia e relazioni internazionali.' },
      { emoji: '⚔️', title: 'Difesa Nazionale', desc: 'Difesa e strategia militare.' },
      { emoji: '💰', title: 'Finanze', desc: 'Politiche fiscali e bilancio statale.' },
      { emoji: '🚂', title: 'Trasporti', desc: 'Infrastruttura e trasporti pubblici.' },
      { emoji: '⚖️', title: 'Giustizia', desc: 'Sistema giuridico e riforma legislativa.' },
      { emoji: '🌾', title: 'Agricoltura', desc: 'Sviluppo rurale e politiche agricole.' },
      { emoji: '⚡', title: 'Energia', desc: 'Politiche energetiche e transizione verde.' },
    ],
  },
  de: {
    badge: 'GovRO — KI Öffentliches Forum',
    title: 'Volle Transparenz. KI-Minister analysieren und schlagen Lösungen basierend auf der rumänischen Verfassung vor.',
    desc: 'Öffentliche KI-Governance-Plattform mit 17 simulierten Regierungsabteilungen, Nachrichtenanalyse, Petitionen, öffentlichen Debatten und auto-generierten Lösungen.',
    cta: '🏛️ Forum öffnen →',
    guideTitle: 'Was die Plattform umfasst',
    guide1: 'KI-Abteilungen: 17 simulierte Ministerien, jedes mit einem eigenen KI-Minister',
    guide2: 'Nachrichtenanalyse: Geben Sie einen Nachrichtenlink ein — der KI-Minister analysiert und schlägt eine offizielle Lösung vor',
    guide3: 'Petitionen & Debatten: Senden Sie Petitionen, nehmen Sie an öffentlichen Debatten teil und konsultieren Sie die generierten Entscheidungen',
    stats: [
      { emoji: '🏛️', value: '17', label: 'Abteilungen' },
      { emoji: '🤖', value: 'KI', label: 'KI-Minister' },
      { emoji: '📜', value: 'LIVE', label: 'Petitionen' },
      { emoji: '⚖️', value: '100%', label: 'Verfassung' },
    ],
    features: [
      { emoji: '🏛️', title: 'Kanzleramt', desc: 'Allgemeine Koordination und strategische Entscheidungen.' },
      { emoji: '🛡️', title: 'Inneres', desc: 'Innere Sicherheit und öffentliche Ordnung.' },
      { emoji: '🌍', title: 'Äußeres', desc: 'Diplomatie und internationale Beziehungen.' },
      { emoji: '⚔️', title: 'Verteidigung', desc: 'Landesverteidigung und Militärstrategie.' },
      { emoji: '💰', title: 'Finanzen', desc: 'Steuerpolitik und Staatshaushalt.' },
      { emoji: '🚂', title: 'Verkehr', desc: 'Infrastruktur und öffentlicher Verkehr.' },
      { emoji: '⚖️', title: 'Justiz', desc: 'Rechtssystem und Gesetzesreform.' },
      { emoji: '🌾', title: 'Landwirtschaft', desc: 'Ländliche Entwicklung und Agrarpolitik.' },
      { emoji: '⚡', title: 'Energie', desc: 'Energiepolitik und grüne Wende.' },
    ],
  },
  ar: {
    badge: 'GovRO — منتدى عام بالذكاء الاصطناعي',
    title: 'شفافية كاملة. وزراء ذكاء اصطناعي يحللون ويقترحون حلولاً بناءً على الدستور الروماني.',
    desc: 'منصة حوكمة بالذكاء الاصطناعي مع 17 دائرة حكومية محاكاة، تحليل أخبار، عرائض، نقاشات عامة وحلول مولدة تلقائياً.',
    cta: '🏛️ ادخل المنتدى →',
    guideTitle: 'ما تتضمنه المنصة',
    guide1: 'أقسام الذكاء الاصطناعي: 17 وزارة محاكاة، كل منها بوزير ذكاء اصطناعي مخصص',
    guide2: 'تحليل الأخبار: أدخل رابط خبر — سيقوم وزير الذكاء الاصطناعي بالتحليل واقتراح حل رسمي',
    guide3: 'العرائض والنقاشات: أرسل عرائض، شارك في النقاشات العامة واطلع على القرارات المولدة',
    stats: [
      { emoji: '🏛️', value: '17', label: 'أقسام حكومية' },
      { emoji: '🤖', value: 'AI', label: 'وزراء ذكاء اصطناعي' },
      { emoji: '📜', value: 'LIVE', label: 'عرائض ونقاشات' },
      { emoji: '⚖️', value: '100%', label: 'مبني على الدستور' },
    ],
    features: [
      { emoji: '🏛️', title: 'مكتب رئيس الوزراء', desc: 'التنسيق العام والقرارات الاستراتيجية.' },
      { emoji: '🛡️', title: 'الشؤون الداخلية', desc: 'الأمن الداخلي والنظام العام.' },
      { emoji: '🌍', title: 'الشؤون الخارجية', desc: 'الدبلوماسية والعلاقات الدولية.' },
      { emoji: '⚔️', title: 'الدفاع الوطني', desc: 'الدفاع والاستراتيجية العسكرية.' },
      { emoji: '💰', title: 'المالية', desc: 'السياسات المالية وميزانية الدولة.' },
      { emoji: '🚂', title: 'النقل', desc: 'البنية التحتية والنقل العام.' },
      { emoji: '⚖️', title: 'العدل', desc: 'النظام القانوني والإصلاح التشريعي.' },
      { emoji: '🌾', title: 'الزراعة', desc: 'التنمية الريفية والسياسات الزراعية.' },
      { emoji: '⚡', title: 'الطاقة', desc: 'سياسات الطاقة والتحول الأخضر.' },
    ],
  },
};

const GovROSection = () => {
  const [guideOpen, setGuideOpen] = useState(false);
  const { language } = useLanguage();
  const c = i18n[language] || i18n.en;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      className="max-w-6xl mx-auto px-3 sm:px-4 py-8 sm:py-10 lg:py-14"
    >
      <div className="relative bg-[#040810] border border-blue-500/15 rounded-2xl sm:rounded-[2.5rem] overflow-hidden">
        <div className="h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/8 rounded-full blur-[100px]" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500/5 rounded-full blur-[100px]" />

        <div className="relative p-5 sm:p-8 lg:p-12">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-5 sm:mb-6 lg:mb-8">
            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center shrink-0">
              <span className="text-2xl sm:text-3xl lg:text-4xl">🏛️</span>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl lg:text-4xl font-extrabold text-blue-50 leading-tight">{c.badge}</h2>
              <p className="text-sm sm:text-base lg:text-lg text-blue-300 font-medium mt-1">{c.title}</p>
            </div>
          </div>

          <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-blue-500/10 mb-6 sm:mb-8 bg-black/50">
            <div className="bg-[#060d12] border-b border-blue-500/10 px-4 py-2.5 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex-1 text-center">
                <span className="text-xs text-blue-300/60 font-mono">govro.online</span>
              </div>
            </div>
            <div className="aspect-video">
              <iframe src="https://govro.online/" className="w-full h-full border-0" title="GovRO Forum Public AI" loading="lazy" sandbox="allow-scripts allow-same-origin" />
            </div>
          </div>

          <p className="text-blue-200/60 text-[13px] sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8">{c.desc}</p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 mb-6 sm:mb-8">
            {c.stats.map((s, i) => (
              <div key={i} className="text-center p-3 sm:p-4 lg:p-5 rounded-xl bg-blue-500/5 border border-blue-500/10">
                <div className="text-lg sm:text-xl mb-1">{s.emoji}</div>
                <div className="text-lg sm:text-2xl lg:text-3xl font-extrabold text-blue-400">{s.value}</div>
                <div className="text-[10px] sm:text-xs lg:text-sm text-blue-300/60 mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
            {c.features.map((f, i) => (
              <div key={i} className="flex items-start gap-3 p-3 sm:p-4 lg:p-5 rounded-xl border border-blue-500/10 hover:border-blue-500/25 transition-colors bg-blue-500/[0.03]">
                <span className="text-lg sm:text-xl lg:text-2xl">{f.emoji}</span>
                <div>
                  <div className="text-[13px] sm:text-sm lg:text-base font-semibold text-blue-50">{f.title}</div>
                  <div className="text-xs lg:text-sm text-blue-300/60 leading-relaxed">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <button onClick={() => setGuideOpen(!guideOpen)}
            className="w-full flex items-center justify-between p-3.5 sm:p-4 lg:p-5 rounded-xl bg-blue-500/5 border border-blue-500/10 mt-6 mb-5 sm:mb-6 text-blue-50 font-medium text-sm sm:text-base lg:text-lg">
            {c.guideTitle}
            <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform ${guideOpen ? 'rotate-180' : ''}`} />
          </button>
          {guideOpen && (
            <div className="p-4 sm:p-6 rounded-xl bg-blue-500/5 border border-blue-500/10 mb-5 sm:mb-6 text-[13px] sm:text-sm lg:text-base text-blue-300/60 space-y-3 leading-relaxed">
              <p><strong className="text-blue-50">{c.guide1.split(':')[0]}:</strong> {c.guide1.split(':').slice(1).join(':')}</p>
              <p><strong className="text-blue-50">{c.guide2.split(':')[0]}:</strong> {c.guide2.split(':').slice(1).join(':')}</p>
              <p><strong className="text-blue-50">{c.guide3.split(':')[0]}:</strong> {c.guide3.split(':').slice(1).join(':')}</p>
            </div>
          )}

          <a href="https://govro.online/" target="_blank" rel="noopener noreferrer"
            className="block w-full text-center py-3.5 sm:py-4 lg:py-5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold text-base lg:text-lg hover:opacity-90 transition-opacity active:scale-[0.98]">
            {c.cta}
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default GovROSection;
