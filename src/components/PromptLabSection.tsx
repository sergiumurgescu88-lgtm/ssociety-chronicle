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
    badge: 'PromptLab AI — Laborator de Prompts',
    title: 'Creează, testează și optimizează prompts AI la nivel profesional',
    desc: 'Platformă dedicată ingineriei de prompts — testează pe mai multe modele AI simultan, salvează template-uri și colaborează cu echipa.',
    cta: '✨ Accesează PromptLab →',
    guideTitle: 'Funcționalități cheie',
    guide1: 'Multi-Model Testing: Testează același prompt pe GPT-4, Claude, Gemini și alte modele simultan — compară rezultatele instant',
    guide2: 'Template Library: Salvează și organizează prompts-urile cele mai performante cu categorii, tags și versioning',
    guide3: 'Colaborare: Workspace-uri de echipă cu sharing de prompts, feedback și workflow-uri de aprobare',
    stats: [
      { emoji: '🧠', value: '5+', label: 'Modele AI suportate' },
      { emoji: '📝', value: '1000+', label: 'Template-uri create' },
      { emoji: '⚡', value: 'Instant', label: 'Comparare rezultate' },
      { emoji: '👥', value: 'Team', label: 'Colaborare integrat' },
    ],
    features: [
      { emoji: '🧠', title: 'Multi-Model Testing', desc: 'Testează prompts pe GPT-4, Claude, Gemini și alte modele simultan.' },
      { emoji: '📝', title: 'Template Library', desc: 'Salvează și organizează prompts cu categorii, tags și versioning.' },
      { emoji: '🔄', title: 'Prompt Versioning', desc: 'Istoric complet al modificărilor cu posibilitate de rollback instant.' },
      { emoji: '📊', title: 'Analytics & Scoring', desc: 'Metrici de performanță pentru fiecare prompt — calitate, relevanță, cost.' },
      { emoji: '👥', title: 'Team Workspace', desc: 'Sharing de prompts cu feedback, comentarii și workflow-uri de aprobare.' },
      { emoji: '🎯', title: 'Prompt Optimization', desc: 'Sugestii AI pentru îmbunătățirea prompts-urilor existente.' },
      { emoji: '🔗', title: 'API Integration', desc: 'Integrează prompts direct în aplicațiile tale via API REST.' },
      { emoji: '📁', title: 'Categorii & Tags', desc: 'Organizare avansată cu foldere, categorii personalizate și tags.' },
      { emoji: '🔒', title: 'Securitate', desc: 'Autentificare Google, criptare date și control acces granular.' },
    ],
  },
  en: {
    badge: 'PromptLab AI — Prompt Laboratory',
    title: 'Create, test and optimize AI prompts at a professional level',
    desc: 'Platform dedicated to prompt engineering — test on multiple AI models simultaneously, save templates and collaborate with your team.',
    cta: '✨ Access PromptLab →',
    guideTitle: 'Key Features',
    guide1: 'Multi-Model Testing: Test the same prompt on GPT-4, Claude, Gemini and other models simultaneously — compare results instantly',
    guide2: 'Template Library: Save and organize your best-performing prompts with categories, tags and versioning',
    guide3: 'Collaboration: Team workspaces with prompt sharing, feedback and approval workflows',
    stats: [
      { emoji: '🧠', value: '5+', label: 'AI models supported' },
      { emoji: '📝', value: '1000+', label: 'Templates created' },
      { emoji: '⚡', value: 'Instant', label: 'Result comparison' },
      { emoji: '👥', value: 'Team', label: 'Built-in collab' },
    ],
    features: [
      { emoji: '🧠', title: 'Multi-Model Testing', desc: 'Test prompts on GPT-4, Claude, Gemini and more simultaneously.' },
      { emoji: '📝', title: 'Template Library', desc: 'Save and organize prompts with categories, tags and versioning.' },
      { emoji: '🔄', title: 'Prompt Versioning', desc: 'Complete history with instant rollback capability.' },
      { emoji: '📊', title: 'Analytics & Scoring', desc: 'Performance metrics for each prompt — quality, relevance, cost.' },
      { emoji: '👥', title: 'Team Workspace', desc: 'Prompt sharing with feedback, comments and approval workflows.' },
      { emoji: '🎯', title: 'Prompt Optimization', desc: 'AI suggestions for improving existing prompts.' },
      { emoji: '🔗', title: 'API Integration', desc: 'Integrate prompts directly into your apps via REST API.' },
      { emoji: '📁', title: 'Categories & Tags', desc: 'Advanced organization with folders, custom categories and tags.' },
      { emoji: '🔒', title: 'Security', desc: 'Google auth, data encryption and granular access control.' },
    ],
  },
  es: {
    badge: 'PromptLab AI — Laboratorio de Prompts',
    title: 'Crea, prueba y optimiza prompts AI a nivel profesional',
    desc: 'Plataforma dedicada a ingeniería de prompts — prueba en múltiples modelos AI simultáneamente.',
    cta: '✨ Acceder a PromptLab →',
    guideTitle: 'Funcionalidades clave',
    guide1: 'Multi-Model Testing: Prueba el mismo prompt en GPT-4, Claude, Gemini y más simultáneamente',
    guide2: 'Template Library: Guarda y organiza los prompts más eficientes con categorías y versionado',
    guide3: 'Colaboración: Espacios de equipo con compartir prompts, feedback y flujos de aprobación',
    stats: [
      { emoji: '🧠', value: '5+', label: 'Modelos AI' },
      { emoji: '📝', value: '1000+', label: 'Templates' },
      { emoji: '⚡', value: 'Instant', label: 'Comparación' },
      { emoji: '👥', value: 'Team', label: 'Colaboración' },
    ],
    features: [
      { emoji: '🧠', title: 'Multi-Model Testing', desc: 'Prueba prompts en GPT-4, Claude, Gemini y más.' },
      { emoji: '📝', title: 'Template Library', desc: 'Guarda prompts con categorías, tags y versionado.' },
      { emoji: '🔄', title: 'Prompt Versioning', desc: 'Historial completo con rollback instantáneo.' },
      { emoji: '📊', title: 'Analytics & Scoring', desc: 'Métricas de rendimiento — calidad, relevancia, costo.' },
      { emoji: '👥', title: 'Team Workspace', desc: 'Compartir prompts con feedback y aprobación.' },
      { emoji: '🎯', title: 'Optimización', desc: 'Sugerencias AI para mejorar prompts existentes.' },
      { emoji: '🔗', title: 'API Integration', desc: 'Integra prompts en tus apps via REST API.' },
      { emoji: '📁', title: 'Categorías & Tags', desc: 'Organización avanzada con carpetas y categorías.' },
      { emoji: '🔒', title: 'Seguridad', desc: 'Auth Google, encriptación y control de acceso.' },
    ],
  },
  fr: {
    badge: 'PromptLab AI — Laboratoire de Prompts',
    title: 'Créez, testez et optimisez des prompts AI au niveau professionnel',
    desc: "Plateforme dédiée à l'ingénierie de prompts — testez sur plusieurs modèles AI simultanément.",
    cta: '✨ Accéder à PromptLab →',
    guideTitle: 'Fonctionnalités clés',
    guide1: 'Multi-Model Testing: Testez le même prompt sur GPT-4, Claude, Gemini et plus simultanément',
    guide2: 'Template Library: Sauvegardez et organisez vos meilleurs prompts avec catégories et versioning',
    guide3: "Collaboration: Espaces d'équipe avec partage de prompts, feedback et workflows d'approbation",
    stats: [
      { emoji: '🧠', value: '5+', label: 'Modèles AI' },
      { emoji: '📝', value: '1000+', label: 'Templates' },
      { emoji: '⚡', value: 'Instant', label: 'Comparaison' },
      { emoji: '👥', value: 'Team', label: 'Collaboration' },
    ],
    features: [
      { emoji: '🧠', title: 'Multi-Model Testing', desc: 'Testez prompts sur GPT-4, Claude, Gemini et plus.' },
      { emoji: '📝', title: 'Template Library', desc: 'Sauvegardez prompts avec catégories, tags et versioning.' },
      { emoji: '🔄', title: 'Prompt Versioning', desc: 'Historique complet avec rollback instantané.' },
      { emoji: '📊', title: 'Analytics & Scoring', desc: 'Métriques de performance — qualité, pertinence, coût.' },
      { emoji: '👥', title: 'Team Workspace', desc: 'Partage de prompts avec feedback et approbation.' },
      { emoji: '🎯', title: 'Optimisation', desc: "Suggestions IA pour améliorer les prompts existants." },
      { emoji: '🔗', title: 'Intégration API', desc: 'Intégrez prompts dans vos apps via REST API.' },
      { emoji: '📁', title: 'Catégories & Tags', desc: 'Organisation avancée avec dossiers et catégories.' },
      { emoji: '🔒', title: 'Sécurité', desc: 'Auth Google, chiffrement et contrôle d\'accès.' },
    ],
  },
  it: {
    badge: 'PromptLab AI — Laboratorio Prompts',
    title: 'Crea, testa e ottimizza prompts AI a livello professionale',
    desc: "Piattaforma dedicata all'ingegneria dei prompts — testa su più modelli AI simultaneamente.",
    cta: '✨ Accedi a PromptLab →',
    guideTitle: 'Funzionalità chiave',
    guide1: 'Multi-Model Testing: Testa lo stesso prompt su GPT-4, Claude, Gemini e altri simultaneamente',
    guide2: 'Template Library: Salva e organizza i prompts migliori con categorie, tag e versioning',
    guide3: 'Collaborazione: Workspace di team con condivisione prompts, feedback e workflow di approvazione',
    stats: [
      { emoji: '🧠', value: '5+', label: 'Modelli AI' },
      { emoji: '📝', value: '1000+', label: 'Template' },
      { emoji: '⚡', value: 'Instant', label: 'Confronto' },
      { emoji: '👥', value: 'Team', label: 'Collaborazione' },
    ],
    features: [
      { emoji: '🧠', title: 'Multi-Model Testing', desc: 'Testa prompts su GPT-4, Claude, Gemini e altri.' },
      { emoji: '📝', title: 'Template Library', desc: 'Salva prompts con categorie, tag e versioning.' },
      { emoji: '🔄', title: 'Prompt Versioning', desc: 'Cronologia completa con rollback istantaneo.' },
      { emoji: '📊', title: 'Analytics & Scoring', desc: 'Metriche di prestazione — qualità, rilevanza, costo.' },
      { emoji: '👥', title: 'Team Workspace', desc: 'Condivisione prompts con feedback e approvazione.' },
      { emoji: '🎯', title: 'Ottimizzazione', desc: 'Suggerimenti AI per migliorare i prompts.' },
      { emoji: '🔗', title: 'Integrazione API', desc: 'Integra prompts nelle tue app via REST API.' },
      { emoji: '📁', title: 'Categorie & Tag', desc: 'Organizzazione avanzata con cartelle e categorie.' },
      { emoji: '🔒', title: 'Sicurezza', desc: 'Auth Google, crittografia e controllo accessi.' },
    ],
  },
  de: {
    badge: 'PromptLab AI — Prompt-Labor',
    title: 'Erstelle, teste und optimiere AI-Prompts auf professionellem Niveau',
    desc: 'Plattform für Prompt-Engineering — teste auf mehreren AI-Modellen gleichzeitig.',
    cta: '✨ Zu PromptLab →',
    guideTitle: 'Kernfunktionen',
    guide1: 'Multi-Model Testing: Teste denselben Prompt auf GPT-4, Claude, Gemini und mehr gleichzeitig',
    guide2: 'Template Library: Speichere und organisiere die besten Prompts mit Kategorien und Versionierung',
    guide3: 'Zusammenarbeit: Team-Workspaces mit Prompt-Sharing, Feedback und Genehmigungsworkflows',
    stats: [
      { emoji: '🧠', value: '5+', label: 'KI-Modelle' },
      { emoji: '📝', value: '1000+', label: 'Templates' },
      { emoji: '⚡', value: 'Sofort', label: 'Vergleich' },
      { emoji: '👥', value: 'Team', label: 'Zusammenarbeit' },
    ],
    features: [
      { emoji: '🧠', title: 'Multi-Model Testing', desc: 'Teste Prompts auf GPT-4, Claude, Gemini und mehr.' },
      { emoji: '📝', title: 'Template Library', desc: 'Speichere Prompts mit Kategorien, Tags und Versionierung.' },
      { emoji: '🔄', title: 'Prompt Versioning', desc: 'Vollständiger Verlauf mit sofortigem Rollback.' },
      { emoji: '📊', title: 'Analytics & Scoring', desc: 'Leistungsmetriken — Qualität, Relevanz, Kosten.' },
      { emoji: '👥', title: 'Team Workspace', desc: 'Prompt-Sharing mit Feedback und Genehmigung.' },
      { emoji: '🎯', title: 'Optimierung', desc: 'KI-Vorschläge zur Verbesserung bestehender Prompts.' },
      { emoji: '🔗', title: 'API-Integration', desc: 'Integriere Prompts direkt in deine Apps via REST API.' },
      { emoji: '📁', title: 'Kategorien & Tags', desc: 'Erweiterte Organisation mit Ordnern und Kategorien.' },
      { emoji: '🔒', title: 'Sicherheit', desc: 'Google-Auth, Verschlüsselung und Zugriffskontrolle.' },
    ],
  },
  ar: {
    badge: 'PromptLab AI — مختبر البرومبتات',
    title: 'أنشئ واختبر وحسّن برومبتات AI باحترافية',
    desc: 'منصة مخصصة لهندسة البرومبتات — اختبر على نماذج AI متعددة في وقت واحد.',
    cta: '✨ الوصول إلى PromptLab ←',
    guideTitle: 'الميزات الرئيسية',
    guide1: 'اختبار متعدد النماذج: اختبر نفس البرومبت على GPT-4 و Claude و Gemini وأكثر في وقت واحد',
    guide2: 'مكتبة القوالب: احفظ ونظم أفضل البرومبتات مع فئات وعلامات وتاريخ الإصدارات',
    guide3: 'التعاون: مساحات عمل فريقية مع مشاركة البرومبتات وملاحظات وسير عمل الموافقة',
    stats: [
      { emoji: '🧠', value: '5+', label: 'نماذج AI' },
      { emoji: '📝', value: '1000+', label: 'قوالب' },
      { emoji: '⚡', value: 'فوري', label: 'مقارنة' },
      { emoji: '👥', value: 'فريق', label: 'تعاون' },
    ],
    features: [
      { emoji: '🧠', title: 'اختبار متعدد النماذج', desc: 'اختبر البرومبتات على GPT-4 و Claude و Gemini وأكثر.' },
      { emoji: '📝', title: 'مكتبة القوالب', desc: 'احفظ البرومبتات مع فئات وعلامات وإصدارات.' },
      { emoji: '🔄', title: 'إصدارات البرومبت', desc: 'سجل كامل مع إمكانية التراجع الفوري.' },
      { emoji: '📊', title: 'تحليلات وتقييم', desc: 'مقاييس أداء — الجودة والملاءمة والتكلفة.' },
      { emoji: '👥', title: 'مساحة الفريق', desc: 'مشاركة البرومبتات مع ملاحظات وموافقة.' },
      { emoji: '🎯', title: 'التحسين', desc: 'اقتراحات AI لتحسين البرومبتات الحالية.' },
      { emoji: '🔗', title: 'تكامل API', desc: 'ادمج البرومبتات في تطبيقاتك عبر REST API.' },
      { emoji: '📁', title: 'فئات وعلامات', desc: 'تنظيم متقدم مع مجلدات وفئات مخصصة.' },
      { emoji: '🔒', title: 'الأمان', desc: 'مصادقة Google، تشفير البيانات والتحكم بالوصول.' },
    ],
  },
};

const PromptLabSection = () => {
  const [guideOpen, setGuideOpen] = useState(false);
  const { language } = useLanguage();
  const c = i18n[language] || i18n.en;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      className="max-w-6xl mx-auto px-3 sm:px-4 py-8 sm:py-10 lg:py-14"
    >
      <div className="relative bg-[#0d0818] border border-purple-500/15 rounded-2xl sm:rounded-[2.5rem] overflow-hidden">
        <div className="h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/8 rounded-full blur-[100px]" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-fuchsia-500/5 rounded-full blur-[100px]" />

        <div className="relative p-5 sm:p-8 lg:p-12">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-5 sm:mb-6 lg:mb-8">
            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br from-purple-400 to-fuchsia-600 flex items-center justify-center shrink-0">
              <span className="text-2xl sm:text-3xl lg:text-4xl">✨</span>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl lg:text-4xl font-extrabold text-purple-50 leading-tight">{c.badge}</h2>
              <p className="text-sm sm:text-base lg:text-lg text-purple-300 font-medium mt-1">{c.title}</p>
            </div>
          </div>

          <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-purple-500/10 mb-6 sm:mb-8 bg-black/50">
            <div className="bg-[#130d1a] border-b border-purple-500/10 px-4 py-2.5 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex-1 text-center">
                <span className="text-xs text-purple-300/60 font-mono">ssocietypromptlab.lovable.app</span>
              </div>
            </div>
            <div className="aspect-video">
              <iframe src="https://ssocietypromptlab.lovable.app" className="w-full h-full border-0" title="PromptLab AI Live" loading="lazy" sandbox="allow-scripts allow-same-origin" />
            </div>
          </div>

          <p className="text-purple-200/60 text-[13px] sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8">{c.desc}</p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 mb-6 sm:mb-8">
            {c.stats.map((s, i) => (
              <div key={i} className="text-center p-3 sm:p-4 lg:p-5 rounded-xl bg-purple-500/5 border border-purple-500/10">
                <div className="text-lg sm:text-xl mb-1">{s.emoji}</div>
                <div className="text-lg sm:text-2xl lg:text-3xl font-extrabold text-purple-400">{s.value}</div>
                <div className="text-[10px] sm:text-xs lg:text-sm text-purple-300/60 mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
            {c.features.map((f, i) => (
              <div key={i} className="flex items-start gap-3 p-3 sm:p-4 lg:p-5 rounded-xl border border-purple-500/10 hover:border-purple-500/25 transition-colors bg-purple-500/[0.03]">
                <span className="text-lg sm:text-xl lg:text-2xl">{f.emoji}</span>
                <div>
                  <div className="text-[13px] sm:text-sm lg:text-base font-semibold text-purple-50">{f.title}</div>
                  <div className="text-xs lg:text-sm text-purple-300/60 leading-relaxed">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <button onClick={() => setGuideOpen(!guideOpen)}
            className="w-full flex items-center justify-between p-3.5 sm:p-4 lg:p-5 rounded-xl bg-purple-500/5 border border-purple-500/10 mt-6 mb-5 sm:mb-6 text-purple-50 font-medium text-sm sm:text-base lg:text-lg">
            {c.guideTitle}
            <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform ${guideOpen ? 'rotate-180' : ''}`} />
          </button>
          {guideOpen && (
            <div className="p-4 sm:p-6 rounded-xl bg-purple-500/5 border border-purple-500/10 mb-5 sm:mb-6 text-[13px] sm:text-sm lg:text-base text-purple-300/60 space-y-3 leading-relaxed">
              <p><strong className="text-purple-50">{c.guide1.split(':')[0]}:</strong> {c.guide1.split(':').slice(1).join(':')}</p>
              <p><strong className="text-purple-50">{c.guide2.split(':')[0]}:</strong> {c.guide2.split(':').slice(1).join(':')}</p>
              <p><strong className="text-purple-50">{c.guide3.split(':')[0]}:</strong> {c.guide3.split(':').slice(1).join(':')}</p>
            </div>
          )}

          <a href="https://ssocietypromptlab.lovable.app" target="_blank" rel="noopener noreferrer"
            className="block w-full text-center py-3.5 sm:py-4 lg:py-5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-purple-500 to-fuchsia-600 text-white font-bold text-base lg:text-lg hover:opacity-90 transition-opacity active:scale-[0.98]">
            {c.cta}
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default PromptLabSection;
