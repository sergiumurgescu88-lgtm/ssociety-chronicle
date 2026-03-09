import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const i18n: Record<string, {
  badge: string; title: string; desc: string; cta: string;
  guideTitle: string; guide1: string; guide2: string; guide3: string; guide4: string;
  stats: { emoji: string; value: string; label: string }[];
  features: { emoji: string; title: string; desc: string }[];
}> = {
  ro: {
    badge: 'SSocietySafe — Ethical Hacking',
    title: 'Platformă de securitate cibernetică pentru testare etică',
    desc: 'Descoperă vulnerabilități, rulează scanări non-distructive și generează rapoarte profesionale — totul într-un cadru legal autorizat.',
    cta: '🛡️ Începe gratuit →',
    guideTitle: 'Workflow în 4 pași',
    guide1: 'Verificare autorizare: Încarcă dovada de proprietate și așteaptă aprobarea înainte de testare',
    guide2: 'Selectare target: Alege din domeniile autorizate și configurează parametrii de scanare',
    guide3: 'Scanare securitate: API discovery + verificare vulnerabilități cu monitorizare în timp real',
    guide4: 'Generare raport: Export PDF profesional și trimitere directă către echipa de securitate',
    stats: [
      { emoji: '👨‍💻', value: '500+', label: 'Cercetători securitate' },
      { emoji: '🐛', value: '10,000+', label: 'Vulnerabilități găsite' },
      { emoji: '⚡', value: '99.9%', label: 'Uptime platformă' },
      { emoji: '🇪🇺', value: 'GDPR', label: 'Compliant' },
    ],
    features: [
      { emoji: '🔍', title: 'API Discovery', desc: 'Găsește endpoint-uri expuse în siguranță pe target-uri autorizate.' },
      { emoji: '🐛', title: 'Detecție Vulnerabilități', desc: 'Scanări de securitate non-distructive cu monitorizare în timp real.' },
      { emoji: '📄', title: 'Rapoarte Profesionale', desc: 'Format bug bounty ready — HackerOne, Bugcrowd compatibil.' },
      { emoji: '✅', title: 'Verificare Autorizare', desc: 'Proof of ownership obligatoriu înainte de orice testare.' },
      { emoji: '🎯', title: 'Selectare Target', desc: 'Alege din domenii autorizate cu parametri configurabili.' },
      { emoji: '📊', title: 'Progress Real-Time', desc: 'Monitorizare live a scanărilor cu status detaliat.' },
      { emoji: '🔒', title: 'SSL & Headers Check', desc: 'Analiză completă certificat SSL și security headers.' },
      { emoji: '⚖️', title: 'Conformitate Legală', desc: 'Respectă Legea 161/2003 și reglementările internaționale.' },
      { emoji: '📤', title: 'Export PDF', desc: 'Rapoarte profesionale exportabile direct către echipe.' },
    ],
  },
  en: {
    badge: 'SSocietySafe — Ethical Hacking',
    title: 'Cybersecurity platform for authorized ethical testing',
    desc: 'Discover vulnerabilities, run non-destructive scans and generate professional reports — all within an authorized legal framework.',
    cta: '🛡️ Start free →',
    guideTitle: '4-Step Workflow',
    guide1: 'Verify Authorization: Upload proof of ownership and wait for approval before testing',
    guide2: 'Select Target: Choose from authorized domains and configure scan parameters',
    guide3: 'Security Scan: API discovery + vulnerability check with real-time monitoring',
    guide4: 'Generate Report: Professional PDF export and send directly to security team',
    stats: [
      { emoji: '👨‍💻', value: '500+', label: 'Security researchers' },
      { emoji: '🐛', value: '10,000+', label: 'Vulnerabilities found' },
      { emoji: '⚡', value: '99.9%', label: 'Platform uptime' },
      { emoji: '🇪🇺', value: 'GDPR', label: 'Compliant' },
    ],
    features: [
      { emoji: '🔍', title: 'API Discovery', desc: 'Find exposed endpoints safely across authorized targets.' },
      { emoji: '🐛', title: 'Vulnerability Detection', desc: 'Non-destructive security scans with real-time monitoring.' },
      { emoji: '📄', title: 'Professional Reports', desc: 'Bug bounty ready format — HackerOne, Bugcrowd compatible.' },
      { emoji: '✅', title: 'Authorization Verification', desc: 'Proof of ownership required before any testing.' },
      { emoji: '🎯', title: 'Target Selection', desc: 'Choose from authorized domains with configurable parameters.' },
      { emoji: '📊', title: 'Real-Time Progress', desc: 'Live scan monitoring with detailed status.' },
      { emoji: '🔒', title: 'SSL & Headers Check', desc: 'Complete SSL certificate and security headers analysis.' },
      { emoji: '⚖️', title: 'Legal Compliance', desc: 'Compliant with Law 161/2003 and international regulations.' },
      { emoji: '📤', title: 'PDF Export', desc: 'Professional reports exportable directly to teams.' },
    ],
  },
  es: {
    badge: 'SSocietySafe — Hacking Ético',
    title: 'Plataforma de ciberseguridad para pruebas éticas',
    desc: 'Descubre vulnerabilidades, ejecuta escaneos no destructivos y genera informes profesionales — todo en un marco legal.',
    cta: '🛡️ Comienza gratis →',
    guideTitle: 'Workflow en 4 pasos',
    guide1: 'Verificar autorización: Sube prueba de propiedad y espera aprobación',
    guide2: 'Seleccionar objetivo: Elige dominios autorizados y configura parámetros',
    guide3: 'Escaneo de seguridad: Descubrimiento API + verificación de vulnerabilidades',
    guide4: 'Generar informe: Exportación PDF profesional y envío al equipo de seguridad',
    stats: [
      { emoji: '👨‍💻', value: '500+', label: 'Investigadores' },
      { emoji: '🐛', value: '10,000+', label: 'Vulnerabilidades' },
      { emoji: '⚡', value: '99.9%', label: 'Uptime' },
      { emoji: '🇪🇺', value: 'GDPR', label: 'Conforme' },
    ],
    features: [
      { emoji: '🔍', title: 'API Discovery', desc: 'Encuentra endpoints expuestos de forma segura.' },
      { emoji: '🐛', title: 'Detección de Vulnerabilidades', desc: 'Escaneos no destructivos con monitoreo en tiempo real.' },
      { emoji: '📄', title: 'Informes Profesionales', desc: 'Formato bug bounty ready — compatible HackerOne, Bugcrowd.' },
      { emoji: '✅', title: 'Verificación', desc: 'Prueba de propiedad obligatoria antes de cualquier test.' },
      { emoji: '🎯', title: 'Selección de Objetivo', desc: 'Dominios autorizados con parámetros configurables.' },
      { emoji: '📊', title: 'Progreso Real-Time', desc: 'Monitoreo en vivo con estado detallado.' },
      { emoji: '🔒', title: 'SSL & Headers', desc: 'Análisis completo de certificados y headers de seguridad.' },
      { emoji: '⚖️', title: 'Conformidad Legal', desc: 'Conforme con regulaciones internacionales.' },
      { emoji: '📤', title: 'Exportación PDF', desc: 'Informes exportables directamente a equipos.' },
    ],
  },
  fr: {
    badge: 'SSocietySafe — Hacking Éthique',
    title: 'Plateforme de cybersécurité pour tests éthiques',
    desc: 'Découvrez les vulnérabilités, effectuez des scans non destructifs et générez des rapports professionnels — dans un cadre légal.',
    cta: '🛡️ Commencer gratuitement →',
    guideTitle: 'Workflow en 4 étapes',
    guide1: "Vérification d'autorisation: Téléchargez la preuve de propriété et attendez l'approbation",
    guide2: 'Sélection de cible: Choisissez parmi les domaines autorisés et configurez les paramètres',
    guide3: 'Scan de sécurité: Découverte API + vérification de vulnérabilités en temps réel',
    guide4: 'Génération de rapport: Export PDF professionnel et envoi direct à l\'équipe',
    stats: [
      { emoji: '👨‍💻', value: '500+', label: 'Chercheurs' },
      { emoji: '🐛', value: '10,000+', label: 'Vulnérabilités' },
      { emoji: '⚡', value: '99.9%', label: 'Uptime' },
      { emoji: '🇪🇺', value: 'GDPR', label: 'Conforme' },
    ],
    features: [
      { emoji: '🔍', title: 'API Discovery', desc: 'Trouvez les endpoints exposés en toute sécurité.' },
      { emoji: '🐛', title: 'Détection de Vulnérabilités', desc: 'Scans non destructifs avec surveillance en temps réel.' },
      { emoji: '📄', title: 'Rapports Professionnels', desc: 'Format bug bounty — compatible HackerOne, Bugcrowd.' },
      { emoji: '✅', title: 'Vérification', desc: "Preuve de propriété obligatoire avant tout test." },
      { emoji: '🎯', title: 'Sélection de Cible', desc: 'Domaines autorisés avec paramètres configurables.' },
      { emoji: '📊', title: 'Progrès Temps Réel', desc: 'Surveillance en direct avec statut détaillé.' },
      { emoji: '🔒', title: 'SSL & Headers', desc: 'Analyse complète des certificats et headers de sécurité.' },
      { emoji: '⚖️', title: 'Conformité Légale', desc: 'Conforme aux réglementations internationales.' },
      { emoji: '📤', title: 'Export PDF', desc: 'Rapports exportables directement aux équipes.' },
    ],
  },
  it: {
    badge: 'SSocietySafe — Hacking Etico',
    title: 'Piattaforma di cybersicurezza per test etici',
    desc: 'Scopri vulnerabilità, esegui scansioni non distruttive e genera report professionali — tutto in un quadro legale.',
    cta: '🛡️ Inizia gratis →',
    guideTitle: 'Workflow in 4 passi',
    guide1: 'Verifica autorizzazione: Carica la prova di proprietà e attendi approvazione',
    guide2: 'Selezione target: Scegli dai domini autorizzati e configura i parametri',
    guide3: 'Scansione sicurezza: API discovery + verifica vulnerabilità in tempo reale',
    guide4: 'Generazione report: Export PDF professionale e invio al team di sicurezza',
    stats: [
      { emoji: '👨‍💻', value: '500+', label: 'Ricercatori' },
      { emoji: '🐛', value: '10,000+', label: 'Vulnerabilità' },
      { emoji: '⚡', value: '99.9%', label: 'Uptime' },
      { emoji: '🇪🇺', value: 'GDPR', label: 'Conforme' },
    ],
    features: [
      { emoji: '🔍', title: 'API Discovery', desc: 'Trova endpoint esposti in sicurezza.' },
      { emoji: '🐛', title: 'Rilevamento Vulnerabilità', desc: 'Scansioni non distruttive con monitoraggio real-time.' },
      { emoji: '📄', title: 'Report Professionali', desc: 'Formato bug bounty — compatibile HackerOne, Bugcrowd.' },
      { emoji: '✅', title: 'Verifica Autorizzazione', desc: 'Prova di proprietà obbligatoria prima di ogni test.' },
      { emoji: '🎯', title: 'Selezione Target', desc: 'Domini autorizzati con parametri configurabili.' },
      { emoji: '📊', title: 'Progresso Real-Time', desc: 'Monitoraggio live con stato dettagliato.' },
      { emoji: '🔒', title: 'SSL & Headers', desc: 'Analisi completa certificati e headers di sicurezza.' },
      { emoji: '⚖️', title: 'Conformità Legale', desc: 'Conforme alle normative internazionali.' },
      { emoji: '📤', title: 'Export PDF', desc: 'Report esportabili direttamente ai team.' },
    ],
  },
  de: {
    badge: 'SSocietySafe — Ethisches Hacking',
    title: 'Cybersicherheitsplattform für ethische Tests',
    desc: 'Entdecke Schwachstellen, führe nicht-destruktive Scans durch und erstelle professionelle Berichte — alles im legalen Rahmen.',
    cta: '🛡️ Kostenlos starten →',
    guideTitle: 'Workflow in 4 Schritten',
    guide1: 'Autorisierung prüfen: Eigentumsnachweis hochladen und auf Genehmigung warten',
    guide2: 'Ziel auswählen: Autorisierte Domains wählen und Scan-Parameter konfigurieren',
    guide3: 'Sicherheitsscan: API-Discovery + Schwachstellenprüfung mit Echtzeit-Monitoring',
    guide4: 'Bericht erstellen: Professioneller PDF-Export und direkter Versand ans Sicherheitsteam',
    stats: [
      { emoji: '👨‍💻', value: '500+', label: 'Forscher' },
      { emoji: '🐛', value: '10,000+', label: 'Schwachstellen' },
      { emoji: '⚡', value: '99.9%', label: 'Uptime' },
      { emoji: '🇪🇺', value: 'DSGVO', label: 'Konform' },
    ],
    features: [
      { emoji: '🔍', title: 'API Discovery', desc: 'Finde exponierte Endpunkte sicher.' },
      { emoji: '🐛', title: 'Schwachstellenerkennung', desc: 'Nicht-destruktive Scans mit Echtzeit-Monitoring.' },
      { emoji: '📄', title: 'Professionelle Berichte', desc: 'Bug-Bounty-Format — HackerOne, Bugcrowd kompatibel.' },
      { emoji: '✅', title: 'Autorisierung', desc: 'Eigentumsnachweis vor jedem Test erforderlich.' },
      { emoji: '🎯', title: 'Zielauswahl', desc: 'Autorisierte Domains mit konfigurierbaren Parametern.' },
      { emoji: '📊', title: 'Echtzeit-Fortschritt', desc: 'Live-Überwachung mit detailliertem Status.' },
      { emoji: '🔒', title: 'SSL & Headers', desc: 'Vollständige SSL-Zertifikat- und Security-Header-Analyse.' },
      { emoji: '⚖️', title: 'Rechtskonformität', desc: 'Konform mit internationalen Vorschriften.' },
      { emoji: '📤', title: 'PDF-Export', desc: 'Professionelle Berichte direkt exportierbar.' },
    ],
  },
  ar: {
    badge: 'SSocietySafe — اختراق أخلاقي',
    title: 'منصة أمن سيبراني للاختبار الأخلاقي',
    desc: 'اكتشف الثغرات، نفذ عمليات مسح غير مدمرة وأنشئ تقارير احترافية — كل ذلك ضمن إطار قانوني.',
    cta: '🛡️ ابدأ مجاناً ←',
    guideTitle: 'سير العمل في 4 خطوات',
    guide1: 'التحقق من التفويض: ارفع إثبات الملكية وانتظر الموافقة',
    guide2: 'اختيار الهدف: اختر من النطاقات المصرح بها وضبط معايير المسح',
    guide3: 'مسح الأمان: اكتشاف API + فحص الثغرات مع مراقبة فورية',
    guide4: 'إنشاء التقرير: تصدير PDF احترافي وإرسال مباشر لفريق الأمان',
    stats: [
      { emoji: '👨‍💻', value: '500+', label: 'باحث أمني' },
      { emoji: '🐛', value: '10,000+', label: 'ثغرات مكتشفة' },
      { emoji: '⚡', value: '99.9%', label: 'وقت التشغيل' },
      { emoji: '🇪🇺', value: 'GDPR', label: 'متوافق' },
    ],
    features: [
      { emoji: '🔍', title: 'اكتشاف API', desc: 'اعثر على نقاط النهاية المكشوفة بأمان.' },
      { emoji: '🐛', title: 'كشف الثغرات', desc: 'مسح غير مدمر مع مراقبة فورية.' },
      { emoji: '📄', title: 'تقارير احترافية', desc: 'صيغة bug bounty — متوافقة مع HackerOne و Bugcrowd.' },
      { emoji: '✅', title: 'التحقق من التفويض', desc: 'إثبات الملكية مطلوب قبل أي اختبار.' },
      { emoji: '🎯', title: 'اختيار الهدف', desc: 'نطاقات مصرح بها مع معايير قابلة للتخصيص.' },
      { emoji: '📊', title: 'تقدم فوري', desc: 'مراقبة مباشرة مع حالة مفصلة.' },
      { emoji: '🔒', title: 'SSL والرؤوس', desc: 'تحليل كامل لشهادات SSL ورؤوس الأمان.' },
      { emoji: '⚖️', title: 'الامتثال القانوني', desc: 'متوافق مع اللوائح الدولية.' },
      { emoji: '📤', title: 'تصدير PDF', desc: 'تقارير قابلة للتصدير مباشرة للفرق.' },
    ],
  },
};

const SSocietySafeSection = () => {
  const [guideOpen, setGuideOpen] = useState(false);
  const { language } = useLanguage();
  const c = i18n[language] || i18n.en;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      className="max-w-6xl mx-auto px-3 sm:px-4 py-8 sm:py-10 lg:py-14"
    >
      <div className="relative bg-[#060d0d] border border-cyan-500/15 rounded-2xl sm:rounded-[2.5rem] overflow-hidden">
        <div className="h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/8 rounded-full blur-[100px]" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-500/5 rounded-full blur-[100px]" />

        <div className="relative p-5 sm:p-8 lg:p-12">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-5 sm:mb-6 lg:mb-8">
            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-teal-600 flex items-center justify-center shrink-0">
              <span className="text-2xl sm:text-3xl lg:text-4xl">🔐</span>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl lg:text-4xl font-extrabold text-cyan-50 leading-tight">{c.badge}</h2>
              <p className="text-sm sm:text-base lg:text-lg text-cyan-300 font-medium mt-1">{c.title}</p>
            </div>
          </div>

          <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-cyan-500/10 mb-6 sm:mb-8 bg-black/50">
            <div className="bg-[#0d1414] border-b border-cyan-500/10 px-4 py-2.5 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex-1 text-center">
                <span className="text-xs text-cyan-300/60 font-mono">ssocietyhacking.lovable.app</span>
              </div>
            </div>
            <div className="aspect-video">
              <iframe src="https://ssocietyhacking.lovable.app" className="w-full h-full border-0" title="SSocietySafe Live" loading="lazy" sandbox="allow-scripts allow-same-origin" />
            </div>
          </div>

          <p className="text-cyan-200/60 text-[13px] sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8">{c.desc}</p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 mb-6 sm:mb-8">
            {c.stats.map((s, i) => (
              <div key={i} className="text-center p-3 sm:p-4 lg:p-5 rounded-xl bg-cyan-500/5 border border-cyan-500/10">
                <div className="text-lg sm:text-xl mb-1">{s.emoji}</div>
                <div className="text-lg sm:text-2xl lg:text-3xl font-extrabold text-cyan-400">{s.value}</div>
                <div className="text-[10px] sm:text-xs lg:text-sm text-cyan-300/60 mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
            {c.features.map((f, i) => (
              <div key={i} className="flex items-start gap-3 p-3 sm:p-4 lg:p-5 rounded-xl border border-cyan-500/10 hover:border-cyan-500/25 transition-colors bg-cyan-500/[0.03]">
                <span className="text-lg sm:text-xl lg:text-2xl">{f.emoji}</span>
                <div>
                  <div className="text-[13px] sm:text-sm lg:text-base font-semibold text-cyan-50">{f.title}</div>
                  <div className="text-xs lg:text-sm text-cyan-300/60 leading-relaxed">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <button onClick={() => setGuideOpen(!guideOpen)}
            className="w-full flex items-center justify-between p-3.5 sm:p-4 lg:p-5 rounded-xl bg-cyan-500/5 border border-cyan-500/10 mt-6 mb-5 sm:mb-6 text-cyan-50 font-medium text-sm sm:text-base lg:text-lg">
            {c.guideTitle}
            <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform ${guideOpen ? 'rotate-180' : ''}`} />
          </button>
          {guideOpen && (
            <div className="p-4 sm:p-6 rounded-xl bg-cyan-500/5 border border-cyan-500/10 mb-5 sm:mb-6 text-[13px] sm:text-sm lg:text-base text-cyan-300/60 space-y-3 leading-relaxed">
              <p><strong className="text-cyan-50">{c.guide1.split(':')[0]}:</strong> {c.guide1.split(':').slice(1).join(':')}</p>
              <p><strong className="text-cyan-50">{c.guide2.split(':')[0]}:</strong> {c.guide2.split(':').slice(1).join(':')}</p>
              <p><strong className="text-cyan-50">{c.guide3.split(':')[0]}:</strong> {c.guide3.split(':').slice(1).join(':')}</p>
              <p><strong className="text-cyan-50">{c.guide4.split(':')[0]}:</strong> {c.guide4.split(':').slice(1).join(':')}</p>
            </div>
          )}

          <a href="https://ssocietyhacking.lovable.app" target="_blank" rel="noopener noreferrer"
            className="block w-full text-center py-3.5 sm:py-4 lg:py-5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-cyan-500 to-teal-600 text-white font-bold text-base lg:text-lg hover:opacity-90 transition-opacity active:scale-[0.98]">
            {c.cta}
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default SSocietySafeSection;
