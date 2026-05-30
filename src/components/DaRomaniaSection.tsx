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
    badge: 'DaRomania — Ecosistem AI pentru Antreprenori',
    title: 'Automatizăm până la 85% din orice business — să nu mai simți că muncești o zi din viață.',
    desc: 'Platformă completă pentru antreprenori: Index de Joburi (109 meserii cu Business Blueprint), Arsenal API (150+ API-uri), VibeBuddy (4 modele AI într-un chat), Academy DaRomania (71 proiecte + comunitate) și Afacere la Cheie livrată în 14 zile. Călătoria succesului tău este motivația noastră.',
    cta: '🚀 Testează GRATUIT Buddy →',
    guideTitle: 'Cum funcționează',
    guide1: 'Index Joburi GRATUIT: Alegi din 109 meserii (19 categorii) și primești instant un Business Blueprint complet — 5 pipeline-uri de monetizare, proiecții financiare, marketing și plan de acțiune',
    guide2: 'Arsenal API & VibeBuddy: $9 unic pentru ghid complet de automatizare (150+ API-uri) sau $9/lună pentru chat AI cu 4 modele (Claude 4.6, Codex, GPT-4o, Grok) — VibeCoding real',
    guide3: 'Academy & Afacere la Cheie: $29/lună pentru OpenClaw + 71 proiecte + comunitate, sau $99/lună pentru business complet (brand, site, automatizări, primii clienți) livrat în 14 zile',
    stats: [
      { emoji: '🔍', value: '109', label: 'Meserii indexate' },
      { emoji: '⚡', value: '150+', label: 'API-uri Arsenal' },
      { emoji: '🤖', value: '4', label: 'Modele AI Buddy' },
      { emoji: '💼', value: '85%', label: 'Business automatizat' },
    ],
    features: [
      { emoji: '🔍', title: 'Index Joburi', desc: '109 meserii din 19 categorii cu Business Blueprint instant. 100% GRATUIT.' },
      { emoji: '⚡', title: 'Arsenal API', desc: '150+ API-uri gratuite, fluxuri complete, acces pe viață — $9 unic.' },
      { emoji: '🤖', title: 'VibeBuddy', desc: '4 modele AI într-un chat: Claude 4.6, Codex, GPT-4o, Grok. $9/lună.' },
      { emoji: '🎓', title: 'Academy', desc: 'OpenClaw + 71 proiecte + webinarii live + comunitate. $29/lună.' },
      { emoji: '💼', title: 'Afacere la Cheie', desc: 'Brand, site, automatizări, funnel și primii clienți în 14 zile. $99/lună.' },
      { emoji: '🤝', title: 'Program Referral', desc: 'Comision recurent pentru clienții aduși. Tracking automat, plăți lunare.' },
      { emoji: '🧠', title: 'VibeCoding', desc: 'Codex îți construiește proiecte complete pas cu pas, în timp real.' },
      { emoji: '📊', title: 'Dashboard Rețea', desc: 'Vezi succesul comunității și progresul tău în timp real.' },
      { emoji: '🇷🇴', title: 'Made in România', desc: 'Suport WhatsApp, comunitate activă, mentorat și webinarii live.' },
    ],
  },
  en: {
    badge: 'DaRomania — AI Ecosystem for Entrepreneurs',
    title: 'We automate up to 85% of any business — so you never feel like you work a day in your life.',
    desc: 'Complete platform for entrepreneurs: Job Index (109 careers with Business Blueprint), Arsenal API (150+ APIs), VibeBuddy (4 AI models in one chat), Academy DaRomania (71 projects + community) and Turnkey Business delivered in 14 days.',
    cta: '🚀 Try Buddy FREE →',
    guideTitle: 'How it works',
    guide1: 'Free Job Index: Pick from 109 careers (19 categories) and instantly get a full Business Blueprint — 5 monetization pipelines, financials, marketing and action plan',
    guide2: 'Arsenal API & VibeBuddy: $9 one-time for the full automation guide (150+ APIs) or $9/mo for AI chat with 4 models (Claude 4.6, Codex, GPT-4o, Grok) — real VibeCoding',
    guide3: 'Academy & Turnkey: $29/mo for OpenClaw + 71 projects + community, or $99/mo for a complete business (brand, site, automations, first clients) in 14 days',
    stats: [
      { emoji: '🔍', value: '109', label: 'Indexed careers' },
      { emoji: '⚡', value: '150+', label: 'Arsenal APIs' },
      { emoji: '🤖', value: '4', label: 'Buddy AI models' },
      { emoji: '💼', value: '85%', label: 'Business automated' },
    ],
    features: [
      { emoji: '🔍', title: 'Job Index', desc: '109 careers in 19 categories with instant Business Blueprint. 100% FREE.' },
      { emoji: '⚡', title: 'Arsenal API', desc: '150+ free APIs, complete flows, lifetime access — $9 one-time.' },
      { emoji: '🤖', title: 'VibeBuddy', desc: '4 AI models in one chat: Claude 4.6, Codex, GPT-4o, Grok. $9/mo.' },
      { emoji: '🎓', title: 'Academy', desc: 'OpenClaw + 71 projects + live webinars + community. $29/mo.' },
      { emoji: '💼', title: 'Turnkey Business', desc: 'Brand, site, automations, funnel and first clients in 14 days. $99/mo.' },
      { emoji: '🤝', title: 'Referral Program', desc: 'Recurring commission for referred clients. Auto-tracking, monthly payouts.' },
      { emoji: '🧠', title: 'VibeCoding', desc: 'Codex builds full projects step-by-step, in real time.' },
      { emoji: '📊', title: 'Network Dashboard', desc: 'See community success and your own progress in real time.' },
      { emoji: '🇷🇴', title: 'Made in Romania', desc: 'WhatsApp support, active community, mentorship and live webinars.' },
    ],
  },
  es: {
    badge: 'DaRomania — Ecosistema IA para Emprendedores',
    title: 'Automatizamos hasta el 85% de cualquier negocio.',
    desc: 'Plataforma completa para emprendedores: Índice de empleos (109 profesiones), Arsenal API (150+ APIs), VibeBuddy (4 modelos IA), Academy y Negocio Llave en Mano en 14 días.',
    cta: '🚀 Prueba Buddy GRATIS →',
    guideTitle: 'Cómo funciona',
    guide1: 'Índice gratis: Elige entre 109 profesiones y recibe un Business Blueprint completo al instante',
    guide2: 'Arsenal & VibeBuddy: $9 único o $9/mes para chat IA con 4 modelos (Claude, Codex, GPT-4o, Grok)',
    guide3: 'Academy & Llave en Mano: $29/mes (OpenClaw + 71 proyectos) o $99/mes (negocio completo en 14 días)',
    stats: [
      { emoji: '🔍', value: '109', label: 'Profesiones' },
      { emoji: '⚡', value: '150+', label: 'APIs Arsenal' },
      { emoji: '🤖', value: '4', label: 'Modelos IA' },
      { emoji: '💼', value: '85%', label: 'Negocio automatizado' },
    ],
    features: [
      { emoji: '🔍', title: 'Índice de Empleos', desc: '109 profesiones con Business Blueprint instantáneo. GRATIS.' },
      { emoji: '⚡', title: 'Arsenal API', desc: '150+ APIs gratuitas, acceso vitalicio — $9 único.' },
      { emoji: '🤖', title: 'VibeBuddy', desc: '4 modelos IA en un chat. $9/mes.' },
      { emoji: '🎓', title: 'Academy', desc: 'OpenClaw + 71 proyectos + comunidad. $29/mes.' },
      { emoji: '💼', title: 'Llave en Mano', desc: 'Negocio completo entregado en 14 días. $99/mes.' },
      { emoji: '🤝', title: 'Referidos', desc: 'Comisión recurrente, tracking automático, pagos mensuales.' },
      { emoji: '🧠', title: 'VibeCoding', desc: 'Codex construye proyectos completos en tiempo real.' },
      { emoji: '📊', title: 'Dashboard Red', desc: 'Éxito de la comunidad y tu progreso en tiempo real.' },
      { emoji: '🇷🇴', title: 'Hecho en Rumanía', desc: 'Soporte WhatsApp, comunidad y webinars en vivo.' },
    ],
  },
  fr: {
    badge: 'DaRomania — Écosystème IA pour Entrepreneurs',
    title: "Nous automatisons jusqu'à 85% de n'importe quelle entreprise.",
    desc: "Plateforme complète : Index des métiers (109 carrières), Arsenal API (150+ APIs), VibeBuddy (4 modèles IA), Academy et Business Clé en Main en 14 jours.",
    cta: '🚀 Essayez Buddy GRATUIT →',
    guideTitle: 'Comment ça marche',
    guide1: 'Index gratuit : 109 carrières avec Business Blueprint instantané',
    guide2: 'Arsenal & VibeBuddy : $9 unique ou $9/mois pour chat IA avec 4 modèles',
    guide3: 'Academy & Clé en Main : $29/mois ou $99/mois (business complet en 14 jours)',
    stats: [
      { emoji: '🔍', value: '109', label: 'Métiers' },
      { emoji: '⚡', value: '150+', label: 'APIs Arsenal' },
      { emoji: '🤖', value: '4', label: 'Modèles IA' },
      { emoji: '💼', value: '85%', label: 'Business automatisé' },
    ],
    features: [
      { emoji: '🔍', title: 'Index Métiers', desc: '109 métiers avec Business Blueprint. GRATUIT.' },
      { emoji: '⚡', title: 'Arsenal API', desc: '150+ APIs gratuites — $9 unique.' },
      { emoji: '🤖', title: 'VibeBuddy', desc: '4 modèles IA dans un chat. $9/mois.' },
      { emoji: '🎓', title: 'Academy', desc: 'OpenClaw + 71 projets + communauté. $29/mois.' },
      { emoji: '💼', title: 'Clé en Main', desc: 'Business complet en 14 jours. $99/mois.' },
      { emoji: '🤝', title: 'Parrainage', desc: 'Commission récurrente, tracking automatique.' },
      { emoji: '🧠', title: 'VibeCoding', desc: 'Codex construit des projets complets en temps réel.' },
      { emoji: '📊', title: 'Dashboard Réseau', desc: 'Succès communauté en temps réel.' },
      { emoji: '🇷🇴', title: 'Made in Roumanie', desc: 'Support WhatsApp, communauté, webinaires.' },
    ],
  },
  it: {
    badge: 'DaRomania — Ecosistema IA per Imprenditori',
    title: 'Automatizziamo fino all\'85% di qualsiasi business.',
    desc: 'Piattaforma completa: Indice professioni (109), Arsenal API (150+), VibeBuddy (4 modelli IA), Academy e Business Chiavi in Mano in 14 giorni.',
    cta: '🚀 Prova Buddy GRATIS →',
    guideTitle: 'Come funziona',
    guide1: 'Indice gratis: 109 professioni con Business Blueprint istantaneo',
    guide2: 'Arsenal & VibeBuddy: $9 unico o $9/mese per chat IA con 4 modelli',
    guide3: 'Academy & Chiavi in Mano: $29/mese o $99/mese (business completo in 14 giorni)',
    stats: [
      { emoji: '🔍', value: '109', label: 'Professioni' },
      { emoji: '⚡', value: '150+', label: 'API Arsenal' },
      { emoji: '🤖', value: '4', label: 'Modelli IA' },
      { emoji: '💼', value: '85%', label: 'Business automatizzato' },
    ],
    features: [
      { emoji: '🔍', title: 'Indice Lavori', desc: '109 professioni con Blueprint istantaneo. GRATIS.' },
      { emoji: '⚡', title: 'Arsenal API', desc: '150+ API gratuite — $9 unico.' },
      { emoji: '🤖', title: 'VibeBuddy', desc: '4 modelli IA in una chat. $9/mese.' },
      { emoji: '🎓', title: 'Academy', desc: 'OpenClaw + 71 progetti + community. $29/mese.' },
      { emoji: '💼', title: 'Chiavi in Mano', desc: 'Business completo in 14 giorni. $99/mese.' },
      { emoji: '🤝', title: 'Referral', desc: 'Commissione ricorrente, tracking automatico.' },
      { emoji: '🧠', title: 'VibeCoding', desc: 'Codex costruisce progetti completi in tempo reale.' },
      { emoji: '📊', title: 'Dashboard Rete', desc: 'Successo community in tempo reale.' },
      { emoji: '🇷🇴', title: 'Made in Romania', desc: 'Supporto WhatsApp, community, webinar live.' },
    ],
  },
  de: {
    badge: 'DaRomania — KI-Ökosystem für Unternehmer',
    title: 'Wir automatisieren bis zu 85% jedes Geschäfts.',
    desc: 'Komplette Plattform: Berufsindex (109), Arsenal API (150+), VibeBuddy (4 KI-Modelle), Academy und schlüsselfertiges Geschäft in 14 Tagen.',
    cta: '🚀 Buddy KOSTENLOS testen →',
    guideTitle: 'So funktioniert es',
    guide1: 'Kostenloser Index: 109 Berufe mit sofortigem Business Blueprint',
    guide2: 'Arsenal & VibeBuddy: $9 einmalig oder $9/Monat für KI-Chat mit 4 Modellen',
    guide3: 'Academy & Schlüsselfertig: $29/Monat oder $99/Monat (komplettes Business in 14 Tagen)',
    stats: [
      { emoji: '🔍', value: '109', label: 'Berufe' },
      { emoji: '⚡', value: '150+', label: 'Arsenal APIs' },
      { emoji: '🤖', value: '4', label: 'KI-Modelle' },
      { emoji: '💼', value: '85%', label: 'Business automatisiert' },
    ],
    features: [
      { emoji: '🔍', title: 'Berufsindex', desc: '109 Berufe mit Sofort-Blueprint. KOSTENLOS.' },
      { emoji: '⚡', title: 'Arsenal API', desc: '150+ kostenlose APIs — $9 einmalig.' },
      { emoji: '🤖', title: 'VibeBuddy', desc: '4 KI-Modelle in einem Chat. $9/Monat.' },
      { emoji: '🎓', title: 'Academy', desc: 'OpenClaw + 71 Projekte + Community. $29/Monat.' },
      { emoji: '💼', title: 'Schlüsselfertig', desc: 'Komplettes Business in 14 Tagen. $99/Monat.' },
      { emoji: '🤝', title: 'Referral', desc: 'Wiederkehrende Provision, Auto-Tracking.' },
      { emoji: '🧠', title: 'VibeCoding', desc: 'Codex baut komplette Projekte in Echtzeit.' },
      { emoji: '📊', title: 'Netzwerk-Dashboard', desc: 'Community-Erfolg in Echtzeit.' },
      { emoji: '🇷🇴', title: 'Made in Rumänien', desc: 'WhatsApp-Support, Community, Live-Webinare.' },
    ],
  },
  ar: {
    badge: 'DaRomania — منظومة ذكاء اصطناعي لرواد الأعمال',
    title: 'نؤتمت ما يصل إلى 85٪ من أي عمل تجاري.',
    desc: 'منصة متكاملة: فهرس الوظائف (109)، Arsenal API (150+)، VibeBuddy (4 نماذج ذكاء اصطناعي)، Academy وأعمال جاهزة في 14 يومًا.',
    cta: '🚀 جرب Buddy مجاناً →',
    guideTitle: 'كيف يعمل',
    guide1: 'فهرس مجاني: 109 مهنة مع Business Blueprint فوري',
    guide2: 'Arsenal و VibeBuddy: 9$ لمرة واحدة أو 9$/شهر لدردشة AI مع 4 نماذج',
    guide3: 'Academy و الأعمال الجاهزة: 29$/شهر أو 99$/شهر (أعمال كاملة في 14 يومًا)',
    stats: [
      { emoji: '🔍', value: '109', label: 'مهنة' },
      { emoji: '⚡', value: '150+', label: 'Arsenal APIs' },
      { emoji: '🤖', value: '4', label: 'نماذج AI' },
      { emoji: '💼', value: '85%', label: 'أعمال مؤتمتة' },
    ],
    features: [
      { emoji: '🔍', title: 'فهرس الوظائف', desc: '109 مهنة مع Blueprint فوري. مجاناً.' },
      { emoji: '⚡', title: 'Arsenal API', desc: '150+ API مجاني — 9$ لمرة واحدة.' },
      { emoji: '🤖', title: 'VibeBuddy', desc: '4 نماذج AI في دردشة واحدة. 9$/شهر.' },
      { emoji: '🎓', title: 'Academy', desc: 'OpenClaw + 71 مشروع + مجتمع. 29$/شهر.' },
      { emoji: '💼', title: 'أعمال جاهزة', desc: 'أعمال كاملة في 14 يومًا. 99$/شهر.' },
      { emoji: '🤝', title: 'برنامج الإحالة', desc: 'عمولة متكررة، تتبع تلقائي.' },
      { emoji: '🧠', title: 'VibeCoding', desc: 'Codex يبني مشاريع كاملة في الوقت الفعلي.' },
      { emoji: '📊', title: 'لوحة الشبكة', desc: 'نجاح المجتمع في الوقت الفعلي.' },
      { emoji: '🇷🇴', title: 'صُنع في رومانيا', desc: 'دعم واتساب، مجتمع، ندوات مباشرة.' },
    ],
  },
};

const DaRomaniaSection = () => {
  const [guideOpen, setGuideOpen] = useState(false);
  const { language } = useLanguage();
  const c = i18n[language] || i18n.en;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      className="max-w-6xl mx-auto px-3 sm:px-4 py-8 sm:py-10 lg:py-14"
    >
      <div className="relative bg-[#120604] border border-rose-500/15 rounded-2xl sm:rounded-[2.5rem] overflow-hidden">
        <div className="h-1 bg-gradient-to-r from-transparent via-rose-400 to-transparent animate-pulse" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-rose-500/10 rounded-full blur-[100px]" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-500/5 rounded-full blur-[100px]" />

        <div className="relative p-5 sm:p-8 lg:p-12">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-5 sm:mb-6 lg:mb-8">
            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br from-rose-400 via-amber-400 to-blue-500 flex items-center justify-center shrink-0">
              <span className="text-2xl sm:text-3xl lg:text-4xl">🇷🇴</span>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl lg:text-4xl font-extrabold text-rose-50 leading-tight">{c.badge}</h2>
              <p className="text-sm sm:text-base lg:text-lg text-rose-300 font-medium mt-1">{c.title}</p>
            </div>
          </div>

          <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-rose-500/10 mb-6 sm:mb-8 bg-black/50">
            <div className="bg-[#1a0a08] border-b border-rose-500/10 px-4 py-2.5 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex-1 text-center">
                <span className="text-xs text-rose-300/60 font-mono">daromania.online</span>
              </div>
            </div>
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src="https://daromania.online/"
                title="DaRomania — Ecosistem AI"
                className="absolute inset-0 w-full h-full"
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
              />
            </div>
          </div>

          <p className="text-rose-200/60 text-[13px] sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8">{c.desc}</p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 mb-6 sm:mb-8">
            {c.stats.map((s, i) => (
              <div key={i} className="text-center p-3 sm:p-4 lg:p-5 rounded-xl bg-rose-500/5 border border-rose-500/10">
                <div className="text-lg sm:text-xl mb-1">{s.emoji}</div>
                <div className="text-lg sm:text-2xl lg:text-3xl font-extrabold text-rose-400">{s.value}</div>
                <div className="text-[10px] sm:text-xs lg:text-sm text-rose-300/60 mt-1">{s.label}</div>
              </div>
            ))}
          </div>

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
            </div>
          )}

          <a href="https://daromania.online/" target="_blank" rel="noopener noreferrer"
            className="block w-full text-center py-3.5 sm:py-4 lg:py-5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-rose-500 via-amber-500 to-blue-600 text-white font-bold text-base lg:text-lg hover:opacity-90 transition-opacity active:scale-[0.98]">
            {c.cta}
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default DaRomaniaSection;
