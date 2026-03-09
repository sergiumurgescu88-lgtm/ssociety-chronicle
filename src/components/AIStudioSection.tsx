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
    badge: 'SSociety AI Studio — Content Factory',
    title: 'Creează, publică și monitorizează conținut automat',
    subtitle: 'De la idee la publicat pe toate platformele în 15 minute.',
    desc: 'Scripturi AI, video profesional, auto-posting pe 7+ platforme — totul într-un singur studio. Pipeline de 10 pași cu control total.',
    cta: '🎬 Începe gratuit →',
    guideTitle: 'Pipeline-ul în 10 pași',
    guide1: 'Creație (Pașii 1-5): Input URL → Script AI Gemini → Audio TTS → Thumbnail AI → Video Kie.ai',
    guide2: 'Optimizare (Pașii 6-8): SEO meta & descrieri → Captions social media → Review & preview complet',
    guide3: 'Distribuție (Pașii 9-10): Auto-post pe YouTube, Meta, TikTok, LinkedIn via Botato → Analytics real-time',
    stats: [
      { emoji: '🎬', value: '10', label: 'Pași automatizați' },
      { emoji: '📱', value: '7+', label: 'Platforme suportate' },
      { emoji: '⏱️', value: '15 min', label: 'De la idee la publicat' },
      { emoji: '⭐', value: '4.9/5', label: 'Rating creatori' },
    ],
    features: [
      { emoji: '📝', title: 'Scripturi AI', desc: 'Scripturi podcast-style cu 2 vorbitori generate de Google Gemini AI.' },
      { emoji: '🎬', title: 'Video Kie.ai', desc: 'Generare video profesional în format 16:9 și 9:16 automat.' },
      { emoji: '🎨', title: 'Thumbnails AI', desc: 'Thumbnails generate automat cu 3 variații per proiect.' },
      { emoji: '🎙️', title: 'Google TTS', desc: 'Voci naturale multi-speaker la calitate studio 48kHz.' },
      { emoji: '🔍', title: 'SEO Content', desc: 'Descrieri YouTube, blog posts, captions social & secvențe email.' },
      { emoji: '🚀', title: 'Botato Auto-Post', desc: 'Publicare automată pe 7+ platforme conform programului setat.' },
      { emoji: '📊', title: 'Analytics Real-Time', desc: 'Dashboard-uri cu tracking ROI pe toate platformele.' },
      { emoji: '👥', title: 'Team Collaboration', desc: 'Workspace-uri multi-user cu workflow-uri de aprobare.' },
      { emoji: '🔒', title: 'Enterprise Security', desc: 'SOC 2 ready, GDPR compliant, suport SSO.' },
    ],
  },
  en: {
    badge: 'SSociety AI Studio — Content Factory',
    title: 'Create, Publish & Track Content Automatically',
    subtitle: 'From idea to published across all platforms in 15 minutes.',
    desc: 'AI scripts, professional video, auto-posting to 7+ platforms — all in one studio. 10-step pipeline with full control.',
    cta: '🎬 Start free →',
    guideTitle: '10-Step Pipeline',
    guide1: 'Creation (Steps 1-5): Input URL → AI Gemini Script → TTS Audio → AI Thumbnail → Kie.ai Video',
    guide2: 'Optimization (Steps 6-8): SEO meta & descriptions → Social media captions → Full review & preview',
    guide3: 'Distribution (Steps 9-10): Auto-post to YouTube, Meta, TikTok, LinkedIn via Botato → Real-time analytics',
    stats: [
      { emoji: '🎬', value: '10', label: 'Automated steps' },
      { emoji: '📱', value: '7+', label: 'Platforms supported' },
      { emoji: '⏱️', value: '15 min', label: 'Idea to published' },
      { emoji: '⭐', value: '4.9/5', label: 'Creator rating' },
    ],
    features: [
      { emoji: '📝', title: 'AI Scripts', desc: 'Podcast-style 2-speaker scripts powered by Google Gemini AI.' },
      { emoji: '🎬', title: 'Kie.ai Video', desc: 'Professional video generation in 16:9 and 9:16 formats.' },
      { emoji: '🎨', title: 'AI Thumbnails', desc: 'AI-generated thumbnails with 3 variations per project.' },
      { emoji: '🎙️', title: 'Google TTS', desc: 'Natural multi-speaker voices at 48kHz studio quality.' },
      { emoji: '🔍', title: 'SEO Content', desc: 'YouTube descriptions, blog posts, social captions & email sequences.' },
      { emoji: '🚀', title: 'Botato Auto-Post', desc: 'Automated publishing to 7+ platforms on schedule.' },
      { emoji: '📊', title: 'Real-Time Analytics', desc: 'Dashboards with ROI tracking across all platforms.' },
      { emoji: '👥', title: 'Team Collaboration', desc: 'Multi-user workspaces with approval workflows.' },
      { emoji: '🔒', title: 'Enterprise Security', desc: 'SOC 2 ready, GDPR compliant, SSO support.' },
    ],
  },
  es: {
    badge: 'SSociety AI Studio — Fábrica de Contenido',
    title: 'Crea, publica y rastrea contenido automáticamente',
    subtitle: 'De idea a publicado en todas las plataformas en 15 minutos.',
    desc: 'Scripts AI, video profesional, auto-publicación en 7+ plataformas — todo en un estudio. Pipeline de 10 pasos.',
    cta: '🎬 Comienza gratis →',
    guideTitle: 'Pipeline de 10 pasos',
    guide1: 'Creación (Pasos 1-5): URL → Script AI Gemini → Audio TTS → Thumbnail AI → Video Kie.ai',
    guide2: 'Optimización (Pasos 6-8): SEO meta → Captions redes sociales → Revisión y preview',
    guide3: 'Distribución (Pasos 9-10): Auto-post en YouTube, Meta, TikTok, LinkedIn → Analytics en tiempo real',
    stats: [
      { emoji: '🎬', value: '10', label: 'Pasos automatizados' },
      { emoji: '📱', value: '7+', label: 'Plataformas' },
      { emoji: '⏱️', value: '15 min', label: 'De idea a publicado' },
      { emoji: '⭐', value: '4.9/5', label: 'Rating creadores' },
    ],
    features: [
      { emoji: '📝', title: 'Scripts AI', desc: 'Scripts podcast con 2 locutores generados por Google Gemini AI.' },
      { emoji: '🎬', title: 'Video Kie.ai', desc: 'Generación de video profesional en formatos 16:9 y 9:16.' },
      { emoji: '🎨', title: 'Thumbnails AI', desc: 'Thumbnails generadas con 3 variaciones por proyecto.' },
      { emoji: '🎙️', title: 'Google TTS', desc: 'Voces naturales multi-speaker a calidad estudio 48kHz.' },
      { emoji: '🔍', title: 'Contenido SEO', desc: 'Descripciones YouTube, blog posts, captions sociales y emails.' },
      { emoji: '🚀', title: 'Auto-Post Botato', desc: 'Publicación automática en 7+ plataformas programadas.' },
      { emoji: '📊', title: 'Analytics Tiempo Real', desc: 'Dashboards con tracking ROI en todas las plataformas.' },
      { emoji: '👥', title: 'Colaboración', desc: 'Espacios multi-usuario con flujos de aprobación.' },
      { emoji: '🔒', title: 'Seguridad Enterprise', desc: 'SOC 2, GDPR compliant, soporte SSO.' },
    ],
  },
  fr: {
    badge: 'SSociety AI Studio — Usine à Contenu',
    title: 'Créez, publiez et suivez du contenu automatiquement',
    subtitle: "De l'idée à la publication sur toutes les plateformes en 15 minutes.",
    desc: "Scripts IA, vidéo pro, auto-publication sur 7+ plateformes — tout dans un studio. Pipeline en 10 étapes.",
    cta: '🎬 Commencer gratuitement →',
    guideTitle: 'Pipeline en 10 étapes',
    guide1: 'Création (Étapes 1-5): URL → Script AI Gemini → Audio TTS → Thumbnail AI → Vidéo Kie.ai',
    guide2: 'Optimisation (Étapes 6-8): SEO méta → Captions réseaux sociaux → Révision et aperçu',
    guide3: 'Distribution (Étapes 9-10): Auto-post YouTube, Meta, TikTok, LinkedIn → Analytics temps réel',
    stats: [
      { emoji: '🎬', value: '10', label: 'Étapes automatisées' },
      { emoji: '📱', value: '7+', label: 'Plateformes' },
      { emoji: '⏱️', value: '15 min', label: "De l'idée à publié" },
      { emoji: '⭐', value: '4.9/5', label: 'Note créateurs' },
    ],
    features: [
      { emoji: '📝', title: 'Scripts IA', desc: 'Scripts podcast 2 locuteurs générés par Google Gemini AI.' },
      { emoji: '🎬', title: 'Vidéo Kie.ai', desc: 'Génération vidéo pro en formats 16:9 et 9:16.' },
      { emoji: '🎨', title: 'Thumbnails IA', desc: 'Thumbnails IA avec 3 variations par projet.' },
      { emoji: '🎙️', title: 'Google TTS', desc: 'Voix naturelles multi-speaker qualité studio 48kHz.' },
      { emoji: '🔍', title: 'Contenu SEO', desc: 'Descriptions YouTube, articles, captions sociales et emails.' },
      { emoji: '🚀', title: 'Auto-Post Botato', desc: 'Publication automatique sur 7+ plateformes programmées.' },
      { emoji: '📊', title: 'Analytics Temps Réel', desc: 'Tableaux de bord avec suivi ROI multi-plateforme.' },
      { emoji: '👥', title: 'Collaboration', desc: "Espaces multi-utilisateurs avec flux d'approbation." },
      { emoji: '🔒', title: 'Sécurité Enterprise', desc: 'SOC 2, GDPR conforme, support SSO.' },
    ],
  },
  it: {
    badge: 'SSociety AI Studio — Fabbrica di Contenuti',
    title: 'Crea, pubblica e monitora contenuti automaticamente',
    subtitle: "Da idea a pubblicato su tutte le piattaforme in 15 minuti.",
    desc: "Script AI, video professionali, auto-posting su 7+ piattaforme — tutto in uno studio. Pipeline in 10 passi.",
    cta: '🎬 Inizia gratis →',
    guideTitle: 'Pipeline in 10 passi',
    guide1: 'Creazione (Passi 1-5): URL → Script AI Gemini → Audio TTS → Thumbnail AI → Video Kie.ai',
    guide2: 'Ottimizzazione (Passi 6-8): SEO meta → Captions social media → Revisione e anteprima',
    guide3: 'Distribuzione (Passi 9-10): Auto-post YouTube, Meta, TikTok, LinkedIn → Analytics real-time',
    stats: [
      { emoji: '🎬', value: '10', label: 'Passi automatizzati' },
      { emoji: '📱', value: '7+', label: 'Piattaforme' },
      { emoji: '⏱️', value: '15 min', label: 'Da idea a pubblicato' },
      { emoji: '⭐', value: '4.9/5', label: 'Valutazione creatori' },
    ],
    features: [
      { emoji: '📝', title: 'Script AI', desc: 'Script podcast 2 speaker generati da Google Gemini AI.' },
      { emoji: '🎬', title: 'Video Kie.ai', desc: 'Generazione video pro in formato 16:9 e 9:16.' },
      { emoji: '🎨', title: 'Thumbnail AI', desc: 'Thumbnail AI con 3 variazioni per progetto.' },
      { emoji: '🎙️', title: 'Google TTS', desc: 'Voci naturali multi-speaker qualità studio 48kHz.' },
      { emoji: '🔍', title: 'Contenuto SEO', desc: 'Descrizioni YouTube, blog post, captions e sequenze email.' },
      { emoji: '🚀', title: 'Auto-Post Botato', desc: 'Pubblicazione automatica su 7+ piattaforme programmate.' },
      { emoji: '📊', title: 'Analytics Real-Time', desc: 'Dashboard con tracking ROI su tutte le piattaforme.' },
      { emoji: '👥', title: 'Collaborazione', desc: 'Workspace multi-utente con workflow di approvazione.' },
      { emoji: '🔒', title: 'Sicurezza Enterprise', desc: 'SOC 2 ready, GDPR conforme, supporto SSO.' },
    ],
  },
  de: {
    badge: 'SSociety AI Studio — Content-Fabrik',
    title: 'Erstelle, veröffentliche & verfolge Inhalte automatisch',
    subtitle: 'Von der Idee bis zur Veröffentlichung auf allen Plattformen in 15 Minuten.',
    desc: 'KI-Skripte, professionelles Video, Auto-Posting auf 7+ Plattformen — alles in einem Studio. 10-Schritte-Pipeline.',
    cta: '🎬 Kostenlos starten →',
    guideTitle: '10-Schritte-Pipeline',
    guide1: 'Erstellung (Schritte 1-5): URL → KI Gemini Skript → TTS Audio → KI Thumbnail → Kie.ai Video',
    guide2: 'Optimierung (Schritte 6-8): SEO Meta → Social Media Captions → Überprüfung & Vorschau',
    guide3: 'Distribution (Schritte 9-10): Auto-Post YouTube, Meta, TikTok, LinkedIn → Echtzeit-Analytics',
    stats: [
      { emoji: '🎬', value: '10', label: 'Automatisierte Schritte' },
      { emoji: '📱', value: '7+', label: 'Plattformen' },
      { emoji: '⏱️', value: '15 min', label: 'Von Idee zu veröffentlicht' },
      { emoji: '⭐', value: '4.9/5', label: 'Creator-Bewertung' },
    ],
    features: [
      { emoji: '📝', title: 'KI-Skripte', desc: 'Podcast-Skripte mit 2 Sprechern von Google Gemini AI.' },
      { emoji: '🎬', title: 'Kie.ai Video', desc: 'Professionelle Videogenerierung in 16:9 und 9:16.' },
      { emoji: '🎨', title: 'KI-Thumbnails', desc: 'KI-generierte Thumbnails mit 3 Variationen pro Projekt.' },
      { emoji: '🎙️', title: 'Google TTS', desc: 'Natürliche Multi-Speaker-Stimmen in Studioqualität 48kHz.' },
      { emoji: '🔍', title: 'SEO-Inhalte', desc: 'YouTube-Beschreibungen, Blog-Posts, Social Captions & E-Mails.' },
      { emoji: '🚀', title: 'Botato Auto-Post', desc: 'Automatische Veröffentlichung auf 7+ Plattformen nach Zeitplan.' },
      { emoji: '📊', title: 'Echtzeit-Analytics', desc: 'Dashboards mit ROI-Tracking über alle Plattformen.' },
      { emoji: '👥', title: 'Team-Zusammenarbeit', desc: 'Multi-User-Workspaces mit Genehmigungsworkflows.' },
      { emoji: '🔒', title: 'Enterprise-Sicherheit', desc: 'SOC 2 ready, DSGVO-konform, SSO-Unterstützung.' },
    ],
  },
  ar: {
    badge: 'SSociety AI Studio — مصنع المحتوى',
    title: 'أنشئ وانشر وتابع المحتوى تلقائياً',
    subtitle: 'من الفكرة إلى النشر على جميع المنصات في 15 دقيقة.',
    desc: 'نصوص AI، فيديو احترافي، نشر تلقائي على 7+ منصات — كل ذلك في استوديو واحد. خط أنابيب من 10 خطوات.',
    cta: '🎬 ابدأ مجاناً ←',
    guideTitle: 'خط الأنابيب من 10 خطوات',
    guide1: 'الإنشاء (الخطوات 1-5): URL → نص AI Gemini → صوت TTS → صورة مصغرة AI → فيديو Kie.ai',
    guide2: 'التحسين (الخطوات 6-8): SEO meta → تعليقات وسائل التواصل → مراجعة ومعاينة',
    guide3: 'التوزيع (الخطوات 9-10): نشر تلقائي YouTube, Meta, TikTok, LinkedIn → تحليلات فورية',
    stats: [
      { emoji: '🎬', value: '10', label: 'خطوات مؤتمتة' },
      { emoji: '📱', value: '7+', label: 'منصات مدعومة' },
      { emoji: '⏱️', value: '15 min', label: 'من فكرة إلى منشور' },
      { emoji: '⭐', value: '4.9/5', label: 'تقييم المبدعين' },
    ],
    features: [
      { emoji: '📝', title: 'نصوص AI', desc: 'نصوص بودكاست بمتحدثين من Google Gemini AI.' },
      { emoji: '🎬', title: 'فيديو Kie.ai', desc: 'إنتاج فيديو احترافي بتنسيقات 16:9 و 9:16.' },
      { emoji: '🎨', title: 'صور مصغرة AI', desc: 'صور مصغرة مولدة بـ 3 اختلافات لكل مشروع.' },
      { emoji: '🎙️', title: 'Google TTS', desc: 'أصوات طبيعية متعددة بجودة استوديو 48kHz.' },
      { emoji: '🔍', title: 'محتوى SEO', desc: 'وصف YouTube، مقالات، تعليقات اجتماعية وتسلسلات بريد.' },
      { emoji: '🚀', title: 'نشر تلقائي Botato', desc: 'نشر مؤتمت على 7+ منصات حسب الجدول.' },
      { emoji: '📊', title: 'تحليلات فورية', desc: 'لوحات تحكم مع تتبع ROI عبر المنصات.' },
      { emoji: '👥', title: 'تعاون الفريق', desc: 'مساحات متعددة المستخدمين مع سير عمل الموافقة.' },
      { emoji: '🔒', title: 'أمان المؤسسات', desc: 'SOC 2 جاهز، متوافق مع GDPR، دعم SSO.' },
    ],
  },
};

const AIStudioSection = () => {
  const [guideOpen, setGuideOpen] = useState(false);
  const { language } = useLanguage();
  const c = i18n[language] || i18n.en;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      className="max-w-6xl mx-auto px-3 sm:px-4 py-8 sm:py-10 lg:py-14"
    >
      <div className="relative bg-[#0a060f] border border-violet-500/15 rounded-2xl sm:rounded-[2.5rem] overflow-hidden">
        <div className="h-1 bg-gradient-to-r from-transparent via-violet-400 to-transparent animate-pulse" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-violet-500/8 rounded-full blur-[100px]" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/5 rounded-full blur-[100px]" />

        <div className="relative p-5 sm:p-8 lg:p-12">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-5 sm:mb-6 lg:mb-8">
            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br from-violet-400 to-purple-600 flex items-center justify-center shrink-0">
              <span className="text-2xl sm:text-3xl lg:text-4xl">🎬</span>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl lg:text-4xl font-extrabold text-violet-50 leading-tight">{c.badge}</h2>
              <p className="text-sm sm:text-base lg:text-lg text-violet-300 font-medium mt-1">{c.title}</p>
            </div>
          </div>

          {/* Live iframe */}
          <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-violet-500/10 mb-6 sm:mb-8 bg-black/50">
            <div className="bg-[#110d17] border-b border-violet-500/10 px-4 py-2.5 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex-1 text-center">
                <span className="text-xs text-violet-300/60 font-mono">ssocietyaistudio.lovable.app</span>
              </div>
            </div>
            <div className="aspect-video">
              <iframe
                src="https://ssocietyaistudio.lovable.app"
                className="w-full h-full border-0"
                title="SSociety AI Studio Live"
                loading="lazy"
                sandbox="allow-scripts allow-same-origin"
              />
            </div>
          </div>

          {/* Description */}
          <p className="text-violet-200/60 text-[13px] sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8">{c.desc}</p>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 mb-6 sm:mb-8">
            {c.stats.map((s, i) => (
              <div key={i} className="text-center p-3 sm:p-4 lg:p-5 rounded-xl bg-violet-500/5 border border-violet-500/10">
                <div className="text-lg sm:text-xl mb-1">{s.emoji}</div>
                <div className="text-lg sm:text-2xl lg:text-3xl font-extrabold text-violet-400">{s.value}</div>
                <div className="text-[10px] sm:text-xs lg:text-sm text-violet-300/60 mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Features grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
            {c.features.map((f, i) => (
              <div key={i} className="flex items-start gap-3 p-3 sm:p-4 lg:p-5 rounded-xl border border-violet-500/10 hover:border-violet-500/25 transition-colors bg-violet-500/[0.03]">
                <span className="text-lg sm:text-xl lg:text-2xl">{f.emoji}</span>
                <div>
                  <div className="text-[13px] sm:text-sm lg:text-base font-semibold text-violet-50">{f.title}</div>
                  <div className="text-xs lg:text-sm text-violet-300/60 leading-relaxed">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Guide accordion */}
          <button onClick={() => setGuideOpen(!guideOpen)}
            className="w-full flex items-center justify-between p-3.5 sm:p-4 lg:p-5 rounded-xl bg-violet-500/5 border border-violet-500/10 mt-6 mb-5 sm:mb-6 text-violet-50 font-medium text-sm sm:text-base lg:text-lg">
            {c.guideTitle}
            <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform ${guideOpen ? 'rotate-180' : ''}`} />
          </button>
          {guideOpen && (
            <div className="p-4 sm:p-6 rounded-xl bg-violet-500/5 border border-violet-500/10 mb-5 sm:mb-6 text-[13px] sm:text-sm lg:text-base text-violet-300/60 space-y-3 leading-relaxed">
              <p><strong className="text-violet-50">{c.guide1.split(':')[0]}:</strong> {c.guide1.split(':').slice(1).join(':')}</p>
              <p><strong className="text-violet-50">{c.guide2.split(':')[0]}:</strong> {c.guide2.split(':').slice(1).join(':')}</p>
              <p><strong className="text-violet-50">{c.guide3.split(':')[0]}:</strong> {c.guide3.split(':').slice(1).join(':')}</p>
            </div>
          )}

          {/* CTA */}
          <a href="https://ssocietyaistudio.lovable.app" target="_blank" rel="noopener noreferrer"
            className="block w-full text-center py-3.5 sm:py-4 lg:py-5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-violet-500 to-purple-600 text-white font-bold text-base lg:text-lg hover:opacity-90 transition-opacity active:scale-[0.98]">
            {c.cta}
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default AIStudioSection;
