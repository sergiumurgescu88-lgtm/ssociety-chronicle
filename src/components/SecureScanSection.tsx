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
    badge: 'SecureScan Pro — Testare Etică',
    title: 'Platformă de cercetare în securitate cibernetică',
    subtitle: 'Descoperă vulnerabilități. Generează rapoarte profesionale.',
    desc: 'Scanează API-uri, detectează vulnerabilități și creează rapoarte formatate pentru HackerOne și Bugcrowd — totul într-un cadru legal.',
    cta: '🛡️ Încearcă gratuit →',
    guideTitle: 'Cum funcționează?',
    guide1: 'API Discovery: Descoperă și mapează endpoint-uri API pe target-uri autorizate cu scanare inteligentă',
    guide2: 'Detecție vulnerabilități: Identifică probleme de securitate cu metode non-distructive și sigure',
    guide3: 'Rapoarte: Generează rapoarte profesionale formatate pentru HackerOne, Bugcrowd și clienți',
    stats: [
      { emoji: '🔍', value: '500+', label: 'Scanări efectuate' },
      { emoji: '🛡️', value: '99.9%', label: 'Uptime platformă' },
      { emoji: '📄', value: '3', label: 'Formate rapoarte' },
      { emoji: '⚖️', value: '100%', label: 'Conformitate legală' },
    ],
    features: [
      { emoji: '🔍', title: 'API Discovery', desc: 'Descoperă și mapează endpoint-uri API pe target-uri autorizate cu scanare inteligentă.' },
      { emoji: '🐛', title: 'Detecție Vulnerabilități', desc: 'Identifică probleme de securitate cu metode non-distructive și sigure de testare.' },
      { emoji: '📄', title: 'Generare Rapoarte', desc: 'Rapoarte profesionale formatate pentru HackerOne, Bugcrowd și clienți.' },
      { emoji: '🏆', title: 'Bug Bounty Ready', desc: 'Workflow-uri integrate pentru platformele majore de bug bounty cu auto-formatare.' },
      { emoji: '✅', title: 'Autorizare Prioritară', desc: 'Verificare integrată — scanezi doar ceea ce ai permisiunea să testezi.' },
      { emoji: '⚖️', title: 'Conformitate Legală', desc: 'Conformitate deplină cu Legea 161/2003 și reglementările internaționale de securitate.' },
      { emoji: '🔒', title: 'SSL Analysis', desc: 'Analiză completă a certificatelor SSL și configurației de securitate.' },
      { emoji: '📊', title: 'Security Headers', desc: 'Verificarea tuturor header-elor de securitate HTTP și recomandări de îmbunătățire.' },
      { emoji: '🌐', title: 'Multi-Target', desc: 'Scanare simultană a mai multor target-uri cu management centralizat.' },
    ],
  },
  en: {
    badge: 'SecureScan Pro — Ethical Testing',
    title: 'Security Research Platform',
    subtitle: 'Discover vulnerabilities. Generate professional reports.',
    desc: 'Scan APIs, detect vulnerabilities and create reports formatted for HackerOne and Bugcrowd — all within a legally compliant framework.',
    cta: '🛡️ Try for free →',
    guideTitle: 'How does it work?',
    guide1: 'API Discovery: Discover and map API endpoints across authorized targets with intelligent scanning',
    guide2: 'Vulnerability Detection: Identify security issues with non-destructive, safe testing methods',
    guide3: 'Reports: Generate professional reports formatted for HackerOne, Bugcrowd, and clients',
    stats: [
      { emoji: '🔍', value: '500+', label: 'Scans performed' },
      { emoji: '🛡️', value: '99.9%', label: 'Platform uptime' },
      { emoji: '📄', value: '3', label: 'Report formats' },
      { emoji: '⚖️', value: '100%', label: 'Legal compliance' },
    ],
    features: [
      { emoji: '🔍', title: 'API Discovery', desc: 'Discover and map API endpoints across authorized targets with intelligent scanning.' },
      { emoji: '🐛', title: 'Vulnerability Detection', desc: 'Identify security vulnerabilities with non-destructive, safe testing methods.' },
      { emoji: '📄', title: 'Report Generation', desc: 'Professional reports formatted for HackerOne, Bugcrowd, and clients.' },
      { emoji: '🏆', title: 'Bug Bounty Ready', desc: 'Integrated workflows for major bug bounty platforms with auto-formatting.' },
      { emoji: '✅', title: 'Authorization First', desc: 'Built-in authorization verification ensures you only scan what you\'re allowed to.' },
      { emoji: '⚖️', title: 'Legal Compliance', desc: 'Full compliance with Romanian and international cybersecurity regulations.' },
      { emoji: '🔒', title: 'SSL Analysis', desc: 'Complete SSL certificate analysis and security configuration checks.' },
      { emoji: '📊', title: 'Security Headers', desc: 'Full HTTP security headers check with improvement recommendations.' },
      { emoji: '🌐', title: 'Multi-Target', desc: 'Simultaneous scanning of multiple targets with centralized management.' },
    ],
  },
  es: {
    badge: 'SecureScan Pro — Pruebas Éticas',
    title: 'Plataforma de investigación en seguridad',
    subtitle: 'Descubre vulnerabilidades. Genera informes profesionales.',
    desc: 'Escanea APIs, detecta vulnerabilidades y crea informes para HackerOne y Bugcrowd — todo en un marco legal.',
    cta: '🛡️ Prueba gratis →',
    guideTitle: '¿Cómo funciona?',
    guide1: 'API Discovery: Descubre y mapea endpoints API en objetivos autorizados con escaneo inteligente',
    guide2: 'Detección de vulnerabilidades: Identifica problemas de seguridad con métodos seguros y no destructivos',
    guide3: 'Informes: Genera informes profesionales formateados para HackerOne, Bugcrowd y clientes',
    stats: [
      { emoji: '🔍', value: '500+', label: 'Escaneos realizados' },
      { emoji: '🛡️', value: '99.9%', label: 'Uptime plataforma' },
      { emoji: '📄', value: '3', label: 'Formatos de informe' },
      { emoji: '⚖️', value: '100%', label: 'Cumplimiento legal' },
    ],
    features: [
      { emoji: '🔍', title: 'API Discovery', desc: 'Descubre y mapea endpoints API en objetivos autorizados con escaneo inteligente.' },
      { emoji: '🐛', title: 'Detección de Vulnerabilidades', desc: 'Identifica vulnerabilidades con métodos no destructivos y seguros.' },
      { emoji: '📄', title: 'Generación de Informes', desc: 'Informes profesionales formateados para HackerOne, Bugcrowd y clientes.' },
      { emoji: '🏆', title: 'Bug Bounty Ready', desc: 'Flujos integrados para plataformas de bug bounty con auto-formato.' },
      { emoji: '✅', title: 'Autorización Primero', desc: 'Verificación integrada — solo escaneas lo autorizado.' },
      { emoji: '⚖️', title: 'Cumplimiento Legal', desc: 'Conformidad total con regulaciones internacionales de ciberseguridad.' },
      { emoji: '🔒', title: 'Análisis SSL', desc: 'Análisis completo de certificados SSL y configuración de seguridad.' },
      { emoji: '📊', title: 'Headers de Seguridad', desc: 'Verificación de headers HTTP de seguridad con recomendaciones.' },
      { emoji: '🌐', title: 'Multi-Target', desc: 'Escaneo simultáneo de múltiples objetivos con gestión centralizada.' },
    ],
  },
  fr: {
    badge: 'SecureScan Pro — Tests Éthiques',
    title: 'Plateforme de recherche en sécurité',
    subtitle: 'Découvrez les vulnérabilités. Générez des rapports professionnels.',
    desc: 'Scannez les APIs, détectez les vulnérabilités et créez des rapports pour HackerOne et Bugcrowd — le tout dans un cadre légal.',
    cta: '🛡️ Essai gratuit →',
    guideTitle: 'Comment ça fonctionne ?',
    guide1: 'API Discovery: Découvrez et cartographiez les endpoints API sur des cibles autorisées avec un scan intelligent',
    guide2: 'Détection de vulnérabilités: Identifiez les problèmes de sécurité avec des méthodes sûres et non destructives',
    guide3: 'Rapports: Générez des rapports professionnels formatés pour HackerOne, Bugcrowd et les clients',
    stats: [
      { emoji: '🔍', value: '500+', label: 'Scans effectués' },
      { emoji: '🛡️', value: '99.9%', label: 'Uptime plateforme' },
      { emoji: '📄', value: '3', label: 'Formats de rapport' },
      { emoji: '⚖️', value: '100%', label: 'Conformité légale' },
    ],
    features: [
      { emoji: '🔍', title: 'API Discovery', desc: 'Découvrez et cartographiez les endpoints API sur des cibles autorisées.' },
      { emoji: '🐛', title: 'Détection de Vulnérabilités', desc: 'Identifiez les vulnérabilités avec des méthodes non destructives et sûres.' },
      { emoji: '📄', title: 'Génération de Rapports', desc: 'Rapports professionnels formatés pour HackerOne, Bugcrowd et clients.' },
      { emoji: '🏆', title: 'Bug Bounty Ready', desc: 'Workflows intégrés pour les plateformes majeures de bug bounty.' },
      { emoji: '✅', title: 'Autorisation Prioritaire', desc: 'Vérification intégrée — scannez uniquement ce qui est autorisé.' },
      { emoji: '⚖️', title: 'Conformité Légale', desc: 'Conformité totale avec les réglementations internationales de cybersécurité.' },
      { emoji: '🔒', title: 'Analyse SSL', desc: 'Analyse complète des certificats SSL et de la configuration de sécurité.' },
      { emoji: '📊', title: 'Headers de Sécurité', desc: 'Vérification des headers HTTP de sécurité avec recommandations.' },
      { emoji: '🌐', title: 'Multi-Target', desc: 'Scan simultané de plusieurs cibles avec gestion centralisée.' },
    ],
  },
  it: {
    badge: 'SecureScan Pro — Test Etici',
    title: 'Piattaforma di ricerca sulla sicurezza',
    subtitle: 'Scopri vulnerabilità. Genera report professionali.',
    desc: 'Scansiona API, rileva vulnerabilità e crea report per HackerOne e Bugcrowd — tutto in un quadro legale.',
    cta: '🛡️ Prova gratis →',
    guideTitle: 'Come funziona?',
    guide1: 'API Discovery: Scopri e mappa endpoint API su target autorizzati con scansione intelligente',
    guide2: 'Rilevamento vulnerabilità: Identifica problemi di sicurezza con metodi sicuri e non distruttivi',
    guide3: 'Report: Genera report professionali formattati per HackerOne, Bugcrowd e clienti',
    stats: [
      { emoji: '🔍', value: '500+', label: 'Scansioni effettuate' },
      { emoji: '🛡️', value: '99.9%', label: 'Uptime piattaforma' },
      { emoji: '📄', value: '3', label: 'Formati report' },
      { emoji: '⚖️', value: '100%', label: 'Conformità legale' },
    ],
    features: [
      { emoji: '🔍', title: 'API Discovery', desc: 'Scopri e mappa endpoint API su target autorizzati con scansione intelligente.' },
      { emoji: '🐛', title: 'Rilevamento Vulnerabilità', desc: 'Identifica vulnerabilità con metodi non distruttivi e sicuri.' },
      { emoji: '📄', title: 'Generazione Report', desc: 'Report professionali formattati per HackerOne, Bugcrowd e clienti.' },
      { emoji: '🏆', title: 'Bug Bounty Ready', desc: 'Workflow integrati per le piattaforme di bug bounty principali.' },
      { emoji: '✅', title: 'Autorizzazione Prioritaria', desc: 'Verifica integrata — scansiona solo ciò che è autorizzato.' },
      { emoji: '⚖️', title: 'Conformità Legale', desc: 'Conformità totale con le normative internazionali di cybersicurezza.' },
      { emoji: '🔒', title: 'Analisi SSL', desc: 'Analisi completa dei certificati SSL e della configurazione di sicurezza.' },
      { emoji: '📊', title: 'Headers di Sicurezza', desc: 'Verifica degli headers HTTP di sicurezza con raccomandazioni.' },
      { emoji: '🌐', title: 'Multi-Target', desc: 'Scansione simultanea di più target con gestione centralizzata.' },
    ],
  },
  de: {
    badge: 'SecureScan Pro — Ethische Tests',
    title: 'Sicherheitsforschungsplattform',
    subtitle: 'Entdecke Schwachstellen. Erstelle professionelle Berichte.',
    desc: 'Scanne APIs, erkenne Schwachstellen und erstelle Berichte für HackerOne und Bugcrowd — alles im legalen Rahmen.',
    cta: '🛡️ Kostenlos testen →',
    guideTitle: 'Wie funktioniert es?',
    guide1: 'API Discovery: Entdecke und kartiere API-Endpunkte auf autorisierten Zielen mit intelligentem Scanning',
    guide2: 'Schwachstellenerkennung: Identifiziere Sicherheitsprobleme mit nicht-destruktiven, sicheren Testmethoden',
    guide3: 'Berichte: Erstelle professionelle Berichte formatiert für HackerOne, Bugcrowd und Kunden',
    stats: [
      { emoji: '🔍', value: '500+', label: 'Durchgeführte Scans' },
      { emoji: '🛡️', value: '99.9%', label: 'Plattform-Uptime' },
      { emoji: '📄', value: '3', label: 'Berichtsformate' },
      { emoji: '⚖️', value: '100%', label: 'Rechtskonformität' },
    ],
    features: [
      { emoji: '🔍', title: 'API Discovery', desc: 'Entdecke und kartiere API-Endpunkte auf autorisierten Zielen.' },
      { emoji: '🐛', title: 'Schwachstellenerkennung', desc: 'Identifiziere Schwachstellen mit nicht-destruktiven Methoden.' },
      { emoji: '📄', title: 'Berichtserstellung', desc: 'Professionelle Berichte formatiert für HackerOne, Bugcrowd und Kunden.' },
      { emoji: '🏆', title: 'Bug Bounty Ready', desc: 'Integrierte Workflows für große Bug-Bounty-Plattformen.' },
      { emoji: '✅', title: 'Autorisierung Zuerst', desc: 'Integrierte Verifizierung — scanne nur was autorisiert ist.' },
      { emoji: '⚖️', title: 'Rechtskonformität', desc: 'Volle Konformität mit internationalen Cybersicherheitsvorschriften.' },
      { emoji: '🔒', title: 'SSL-Analyse', desc: 'Vollständige SSL-Zertifikatanalyse und Sicherheitskonfiguration.' },
      { emoji: '📊', title: 'Sicherheits-Headers', desc: 'HTTP-Sicherheits-Header-Prüfung mit Verbesserungsempfehlungen.' },
      { emoji: '🌐', title: 'Multi-Target', desc: 'Gleichzeitiges Scannen mehrerer Ziele mit zentraler Verwaltung.' },
    ],
  },
  ar: {
    badge: 'SecureScan Pro — اختبار أخلاقي',
    title: 'منصة أبحاث الأمن السيبراني',
    subtitle: 'اكتشف الثغرات. أنشئ تقارير احترافية.',
    desc: 'امسح APIs، اكتشف الثغرات وأنشئ تقارير مُنسقة لـ HackerOne و Bugcrowd — كل ذلك ضمن إطار قانوني.',
    cta: '🛡️ جرب مجاناً ←',
    guideTitle: 'كيف يعمل؟',
    guide1: 'اكتشاف API: اكتشف وارسم خريطة نقاط نهاية API على أهداف مصرح بها',
    guide2: 'كشف الثغرات: حدد مشاكل الأمان بطرق آمنة وغير مدمرة',
    guide3: 'التقارير: أنشئ تقارير احترافية منسقة لـ HackerOne و Bugcrowd والعملاء',
    stats: [
      { emoji: '🔍', value: '500+', label: 'عملية مسح' },
      { emoji: '🛡️', value: '99.9%', label: 'وقت التشغيل' },
      { emoji: '📄', value: '3', label: 'صيغ التقارير' },
      { emoji: '⚖️', value: '100%', label: 'امتثال قانوني' },
    ],
    features: [
      { emoji: '🔍', title: 'اكتشاف API', desc: 'اكتشف وارسم خريطة نقاط نهاية API على أهداف مصرح بها.' },
      { emoji: '🐛', title: 'كشف الثغرات', desc: 'حدد الثغرات بطرق غير مدمرة وآمنة.' },
      { emoji: '📄', title: 'إنشاء التقارير', desc: 'تقارير احترافية منسقة لـ HackerOne و Bugcrowd والعملاء.' },
      { emoji: '🏆', title: 'جاهز لمكافآت الأخطاء', desc: 'سير عمل متكامل لمنصات مكافآت الأخطاء الرئيسية.' },
      { emoji: '✅', title: 'التفويض أولاً', desc: 'تحقق مدمج — امسح فقط ما هو مصرح به.' },
      { emoji: '⚖️', title: 'الامتثال القانوني', desc: 'امتثال كامل للوائح الأمن السيبراني الدولية.' },
      { emoji: '🔒', title: 'تحليل SSL', desc: 'تحليل كامل لشهادات SSL وتكوين الأمان.' },
      { emoji: '📊', title: 'رؤوس الأمان', desc: 'فحص رؤوس HTTP الأمنية مع توصيات للتحسين.' },
      { emoji: '🌐', title: 'أهداف متعددة', desc: 'مسح متزامن لأهداف متعددة مع إدارة مركزية.' },
    ],
  },
};

const SecureScanSection = () => {
  const [guideOpen, setGuideOpen] = useState(false);
  const { language } = useLanguage();
  const c = i18n[language] || i18n.en;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      className="max-w-6xl mx-auto px-3 sm:px-4 py-8 sm:py-10 lg:py-14"
    >
      <div className="relative bg-[#060f0a] border border-emerald-500/15 rounded-2xl sm:rounded-[2.5rem] overflow-hidden">
        <div className="h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent animate-pulse" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500/8 rounded-full blur-[100px]" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-500/5 rounded-full blur-[100px]" />

        <div className="relative p-5 sm:p-8 lg:p-12">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-5 sm:mb-6 lg:mb-8">
            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shrink-0">
              <span className="text-2xl sm:text-3xl lg:text-4xl">🛡️</span>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl lg:text-4xl font-extrabold text-emerald-50 leading-tight">{c.badge}</h2>
              <p className="text-sm sm:text-base lg:text-lg text-emerald-300 font-medium mt-1">{c.title}</p>
            </div>
          </div>

          {/* Live iframe */}
          <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-emerald-500/10 mb-6 sm:mb-8 bg-black/50">
            <div className="bg-[#0d1711] border-b border-emerald-500/10 px-4 py-2.5 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex-1 text-center">
                <span className="text-xs text-emerald-300/60 font-mono">ssocialsafe.lovable.app</span>
              </div>
            </div>
            <div className="aspect-video">
              <iframe
                src="https://ssocialsafe.lovable.app"
                className="w-full h-full border-0"
                title="SecureScan Pro Live"
                loading="lazy"
                sandbox="allow-scripts allow-same-origin"
              />
            </div>
          </div>

          {/* Description */}
          <p className="text-emerald-200/60 text-[13px] sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8">{c.desc}</p>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 mb-6 sm:mb-8">
            {c.stats.map((s, i) => (
              <div key={i} className="text-center p-3 sm:p-4 lg:p-5 rounded-xl bg-emerald-500/5 border border-emerald-500/10">
                <div className="text-lg sm:text-xl mb-1">{s.emoji}</div>
                <div className="text-lg sm:text-2xl lg:text-3xl font-extrabold text-emerald-400">{s.value}</div>
                <div className="text-[10px] sm:text-xs lg:text-sm text-emerald-300/60 mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Features grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
            {c.features.map((f, i) => (
              <div key={i} className="flex items-start gap-3 p-3 sm:p-4 lg:p-5 rounded-xl border border-emerald-500/10 hover:border-emerald-500/25 transition-colors bg-emerald-500/[0.03]">
                <span className="text-lg sm:text-xl lg:text-2xl">{f.emoji}</span>
                <div>
                  <div className="text-[13px] sm:text-sm lg:text-base font-semibold text-emerald-50">{f.title}</div>
                  <div className="text-xs lg:text-sm text-emerald-300/60 leading-relaxed">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Guide accordion */}
          <button onClick={() => setGuideOpen(!guideOpen)}
            className="w-full flex items-center justify-between p-3.5 sm:p-4 lg:p-5 rounded-xl bg-emerald-500/5 border border-emerald-500/10 mt-6 mb-5 sm:mb-6 text-emerald-50 font-medium text-sm sm:text-base lg:text-lg">
            {c.guideTitle}
            <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform ${guideOpen ? 'rotate-180' : ''}`} />
          </button>
          {guideOpen && (
            <div className="p-4 sm:p-6 rounded-xl bg-emerald-500/5 border border-emerald-500/10 mb-5 sm:mb-6 text-[13px] sm:text-sm lg:text-base text-emerald-300/60 space-y-3 leading-relaxed">
              <p><strong className="text-emerald-50">{c.guide1.split(':')[0]}:</strong> {c.guide1.split(':').slice(1).join(':')}</p>
              <p><strong className="text-emerald-50">{c.guide2.split(':')[0]}:</strong> {c.guide2.split(':').slice(1).join(':')}</p>
              <p><strong className="text-emerald-50">{c.guide3.split(':')[0]}:</strong> {c.guide3.split(':').slice(1).join(':')}</p>
            </div>
          )}

          {/* CTA */}
          <a href="https://ssocialsafe.lovable.app" target="_blank" rel="noopener noreferrer"
            className="block w-full text-center py-3.5 sm:py-4 lg:py-5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-base lg:text-lg hover:opacity-90 transition-opacity active:scale-[0.98]">
            {c.cta}
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default SecureScanSection;
