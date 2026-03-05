import { motion } from 'framer-motion';
import { ExternalLink, Truck, BarChart3, Camera, MessageSquare, Users, Megaphone, Video, Bot, BookOpen } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const i18n: Record<string, {
  badge: string; desc: string; cta: string; ctaDesc: string;
  stats: { value: string; label: string }[];
  features: { icon: any; title: string; desc: string }[];
}> = {
  ro: {
    badge: 'Servicii Delivery & Marketing',
    desc: 'Management complet platforme de livrare — negocieri comisioane, optimizare meniu, producție video virală, chatboți AI și marketing digital — totul pentru restaurante care vor să crească.',
    cta: 'Deschide MrDelivery',
    ctaDesc: 'Soluția completă pentru restaurante pe platformele de livrare',
    stats: [
      { value: '7+', label: 'Ani experiență marketing' },
      { value: '5+', label: 'Ani expertiză delivery' },
      { value: '90%', label: 'Clienți prin recomandări' },
      { value: '$399', label: 'Preț lunar / platformă' },
    ],
    features: [
      { icon: Truck, title: 'Management Platforme Delivery', desc: 'Negociem comisioane și bugete pe Uber Eats, DoorDash & Grubhub. Activare campanii în 6 ore.' },
      { icon: Camera, title: 'Instant Menu Photos', desc: 'Fotografii profesionale stil Michelin pentru tot meniul, cu alergeni, logo și locație reală.' },
      { icon: Video, title: 'Producție Video & Auto-Posting', desc: 'Conținut video viral zilnic postat automat pe toate platformele sociale.' },
      { icon: Bot, title: 'Chatboți AI & Asistenți Vocali', desc: 'Răspunsuri automate la recenzii, preluare comenzi telefonice și chat live pe website.' },
      { icon: BarChart3, title: 'Rapoarte Lunare Detaliate', desc: '5 rapoarte detaliate lunar: venituri, promoții, meniu, zone livrare și tendințe.' },
      { icon: Megaphone, title: 'Marketing Digital Complet', desc: 'Campanii Google Ads, Meta Ads, TikTok și SEO local pentru vizibilitate maximă.' },
      { icon: Users, title: 'Training Staff & Suport 24/7', desc: 'Instruire completă echipă: comenzi, tablete, rambursări. Suport WhatsApp dedicat.' },
      { icon: BookOpen, title: 'Optimizare Meniu', desc: 'Actualizări zilnice meniu, structură upselling și prezentare profesională pentru vânzări mai mari.' },
      { icon: MessageSquare, title: 'Management Recenzii', desc: 'Răspunsuri automate la recenzii Google, gestionare feedback și îmbunătățire rating.' },
    ],
  },
  en: {
    badge: 'Delivery & Marketing Services',
    desc: 'Complete delivery platform management — commission negotiations, menu optimization, viral video production, AI chatbots and digital marketing — everything for restaurants that want to grow.',
    cta: 'Open MrDelivery',
    ctaDesc: 'The complete solution for restaurants on delivery platforms',
    stats: [
      { value: '7+', label: 'Years marketing experience' },
      { value: '5+', label: 'Years delivery expertise' },
      { value: '90%', label: 'Clients via referrals' },
      { value: '$399', label: 'Monthly / platform' },
    ],
    features: [
      { icon: Truck, title: 'Delivery Platform Management', desc: 'We negotiate commissions and budgets on Uber Eats, DoorDash & Grubhub. Campaign activation within 6 hours.' },
      { icon: Camera, title: 'Instant Menu Photos', desc: 'Professional Michelin-style photos for your entire menu, with allergens, logo and real location photo.' },
      { icon: Video, title: 'Video Production & Auto-Posting', desc: 'Daily viral video content automatically posted across all social platforms.' },
      { icon: Bot, title: 'AI Chatbots & Voice Agents', desc: 'Automated review responses, phone order taking and live website chat support.' },
      { icon: BarChart3, title: 'Detailed Monthly Reports', desc: '5 detailed reports monthly: revenue, promotions, menu, delivery zones and trends.' },
      { icon: Megaphone, title: 'Complete Digital Marketing', desc: 'Google Ads, Meta Ads, TikTok campaigns and local SEO for maximum visibility.' },
      { icon: Users, title: 'Staff Training & 24/7 Support', desc: 'Complete team training: orders, tablets, refunds. Dedicated WhatsApp support.' },
      { icon: BookOpen, title: 'Menu Optimization', desc: 'Daily menu updates, upselling structure and professional presentation for higher sales.' },
      { icon: MessageSquare, title: 'Review Management', desc: 'Automated Google review responses, feedback management and rating improvement.' },
    ],
  },
  es: {
    badge: 'Servicios Delivery & Marketing',
    desc: 'Gestión completa de plataformas de delivery — negociación de comisiones, optimización de menú, producción de video viral, chatbots IA y marketing digital — todo para restaurantes que quieren crecer.',
    cta: 'Abrir MrDelivery',
    ctaDesc: 'La solución completa para restaurantes en plataformas de delivery',
    stats: [
      { value: '7+', label: 'Años experiencia marketing' },
      { value: '5+', label: 'Años expertise delivery' },
      { value: '90%', label: 'Clientes por referencias' },
      { value: '$399', label: 'Mensual / plataforma' },
    ],
    features: [
      { icon: Truck, title: 'Gestión Plataformas Delivery', desc: 'Negociamos comisiones y presupuestos en Uber Eats, DoorDash & Grubhub.' },
      { icon: Camera, title: 'Fotos Menú Instantáneas', desc: 'Fotos profesionales estilo Michelin para todo el menú, con alérgenos y logo.' },
      { icon: Video, title: 'Producción Video & Auto-Posting', desc: 'Contenido video viral diario publicado automáticamente en todas las redes.' },
      { icon: Bot, title: 'Chatbots IA & Agentes de Voz', desc: 'Respuestas automáticas a reseñas, toma de pedidos telefónicos y chat en vivo.' },
      { icon: BarChart3, title: 'Reportes Mensuales Detallados', desc: '5 reportes detallados mensuales: ingresos, promociones, menú y tendencias.' },
      { icon: Megaphone, title: 'Marketing Digital Completo', desc: 'Campañas Google Ads, Meta Ads, TikTok y SEO local para máxima visibilidad.' },
      { icon: Users, title: 'Capacitación & Soporte 24/7', desc: 'Capacitación completa del equipo. Soporte WhatsApp dedicado.' },
      { icon: BookOpen, title: 'Optimización de Menú', desc: 'Actualizaciones diarias, estructura upselling y presentación profesional.' },
      { icon: MessageSquare, title: 'Gestión de Reseñas', desc: 'Respuestas automáticas a reseñas Google y gestión de feedback.' },
    ],
  },
  fr: {
    badge: 'Services Livraison & Marketing',
    desc: 'Gestion complète des plateformes de livraison — négociation de commissions, optimisation de menu, production vidéo virale, chatbots IA et marketing digital — tout pour les restaurants qui veulent grandir.',
    cta: 'Ouvrir MrDelivery',
    ctaDesc: 'La solution complète pour les restaurants sur les plateformes de livraison',
    stats: [
      { value: '7+', label: 'Ans expérience marketing' },
      { value: '5+', label: 'Ans expertise livraison' },
      { value: '90%', label: 'Clients par recommandation' },
      { value: '$399', label: 'Mensuel / plateforme' },
    ],
    features: [
      { icon: Truck, title: 'Gestion Plateformes Livraison', desc: 'Négociation des commissions et budgets sur Uber Eats, DoorDash & Grubhub.' },
      { icon: Camera, title: 'Photos Menu Instantanées', desc: 'Photos professionnelles style Michelin pour tout le menu, avec allergènes et logo.' },
      { icon: Video, title: 'Production Vidéo & Auto-Posting', desc: 'Contenu vidéo viral quotidien publié automatiquement sur toutes les plateformes.' },
      { icon: Bot, title: 'Chatbots IA & Agents Vocaux', desc: 'Réponses automatiques aux avis, prise de commandes téléphoniques et chat en direct.' },
      { icon: BarChart3, title: 'Rapports Mensuels Détaillés', desc: '5 rapports détaillés mensuels: revenus, promotions, menu et tendances.' },
      { icon: Megaphone, title: 'Marketing Digital Complet', desc: 'Campagnes Google Ads, Meta Ads, TikTok et SEO local pour une visibilité maximale.' },
      { icon: Users, title: 'Formation & Support 24/7', desc: 'Formation complète de l\'équipe. Support WhatsApp dédié.' },
      { icon: BookOpen, title: 'Optimisation du Menu', desc: 'Mises à jour quotidiennes, structure upselling et présentation professionnelle.' },
      { icon: MessageSquare, title: 'Gestion des Avis', desc: 'Réponses automatiques aux avis Google et gestion des retours.' },
    ],
  },
  it: {
    badge: 'Servizi Delivery & Marketing',
    desc: 'Gestione completa delle piattaforme di delivery — negoziazione commissioni, ottimizzazione menu, produzione video virale, chatbot IA e marketing digitale — tutto per i ristoranti che vogliono crescere.',
    cta: 'Apri MrDelivery',
    ctaDesc: 'La soluzione completa per ristoranti sulle piattaforme di delivery',
    stats: [
      { value: '7+', label: 'Anni esperienza marketing' },
      { value: '5+', label: 'Anni expertise delivery' },
      { value: '90%', label: 'Clienti tramite referral' },
      { value: '$399', label: 'Mensile / piattaforma' },
    ],
    features: [
      { icon: Truck, title: 'Gestione Piattaforme Delivery', desc: 'Negoziamo commissioni e budget su Uber Eats, DoorDash & Grubhub.' },
      { icon: Camera, title: 'Foto Menu Istantanee', desc: 'Foto professionali stile Michelin per tutto il menu, con allergeni e logo.' },
      { icon: Video, title: 'Produzione Video & Auto-Posting', desc: 'Contenuti video virali giornalieri pubblicati automaticamente su tutte le piattaforme.' },
      { icon: Bot, title: 'Chatbot IA & Agenti Vocali', desc: 'Risposte automatiche alle recensioni, ordini telefonici e chat live sul sito.' },
      { icon: BarChart3, title: 'Report Mensili Dettagliati', desc: '5 report dettagliati mensili: ricavi, promozioni, menu e tendenze.' },
      { icon: Megaphone, title: 'Marketing Digitale Completo', desc: 'Campagne Google Ads, Meta Ads, TikTok e SEO locale per massima visibilità.' },
      { icon: Users, title: 'Formazione & Supporto 24/7', desc: 'Formazione completa del team. Supporto WhatsApp dedicato.' },
      { icon: BookOpen, title: 'Ottimizzazione Menu', desc: 'Aggiornamenti giornalieri, struttura upselling e presentazione professionale.' },
      { icon: MessageSquare, title: 'Gestione Recensioni', desc: 'Risposte automatiche alle recensioni Google e gestione feedback.' },
    ],
  },
  de: {
    badge: 'Liefer- & Marketing-Services',
    desc: 'Komplettes Lieferplattform-Management — Provisionsverhandlungen, Menüoptimierung, virale Videoproduktion, KI-Chatbots und digitales Marketing — alles für Restaurants, die wachsen wollen.',
    cta: 'MrDelivery öffnen',
    ctaDesc: 'Die komplette Lösung für Restaurants auf Lieferplattformen',
    stats: [
      { value: '7+', label: 'Jahre Marketing-Erfahrung' },
      { value: '5+', label: 'Jahre Liefer-Expertise' },
      { value: '90%', label: 'Kunden durch Empfehlungen' },
      { value: '$399', label: 'Monatlich / Plattform' },
    ],
    features: [
      { icon: Truck, title: 'Lieferplattform-Management', desc: 'Provisionen und Budgets auf Uber Eats, DoorDash & Grubhub verhandeln.' },
      { icon: Camera, title: 'Instant-Menüfotos', desc: 'Professionelle Michelin-Stil-Fotos für das gesamte Menü mit Allergenen und Logo.' },
      { icon: Video, title: 'Videoproduktion & Auto-Posting', desc: 'Täglicher viraler Videoinhalt automatisch auf allen sozialen Plattformen.' },
      { icon: Bot, title: 'KI-Chatbots & Sprachassistenten', desc: 'Automatische Bewertungsantworten, Telefonbestellungen und Live-Chat.' },
      { icon: BarChart3, title: 'Detaillierte Monatsberichte', desc: '5 detaillierte Berichte monatlich: Umsatz, Aktionen, Menü und Trends.' },
      { icon: Megaphone, title: 'Komplettes Digital-Marketing', desc: 'Google Ads, Meta Ads, TikTok-Kampagnen und lokales SEO.' },
      { icon: Users, title: 'Schulung & Support 24/7', desc: 'Komplette Teamschulung. Dedizierter WhatsApp-Support.' },
      { icon: BookOpen, title: 'Menüoptimierung', desc: 'Tägliche Updates, Upselling-Struktur und professionelle Präsentation.' },
      { icon: MessageSquare, title: 'Bewertungsmanagement', desc: 'Automatische Google-Bewertungsantworten und Feedback-Management.' },
    ],
  },
  ar: {
    badge: 'خدمات التوصيل والتسويق',
    desc: 'إدارة كاملة لمنصات التوصيل — تفاوض العمولات، تحسين القائمة، إنتاج فيديو فيروسي، روبوتات دردشة ذكية وتسويق رقمي — كل شيء للمطاعم التي تريد النمو.',
    cta: 'افتح MrDelivery',
    ctaDesc: 'الحل الكامل للمطاعم على منصات التوصيل',
    stats: [
      { value: '7+', label: 'سنوات خبرة تسويقية' },
      { value: '5+', label: 'سنوات خبرة توصيل' },
      { value: '90%', label: 'عملاء عبر التوصيات' },
      { value: '$399', label: 'شهرياً / منصة' },
    ],
    features: [
      { icon: Truck, title: 'إدارة منصات التوصيل', desc: 'نتفاوض على العمولات والميزانيات على Uber Eats و DoorDash و Grubhub.' },
      { icon: Camera, title: 'صور قائمة فورية', desc: 'صور احترافية بأسلوب ميشلان للقائمة بالكامل مع المواد المسببة للحساسية والشعار.' },
      { icon: Video, title: 'إنتاج فيديو ونشر تلقائي', desc: 'محتوى فيديو فيروسي يومي يُنشر تلقائياً على جميع المنصات.' },
      { icon: Bot, title: 'روبوتات دردشة ذكية', desc: 'ردود تلقائية على المراجعات واستقبال الطلبات الهاتفية ودردشة مباشرة.' },
      { icon: BarChart3, title: 'تقارير شهرية مفصلة', desc: '5 تقارير مفصلة شهرياً: الإيرادات والعروض والقائمة والاتجاهات.' },
      { icon: Megaphone, title: 'تسويق رقمي كامل', desc: 'حملات Google Ads و Meta Ads و TikTok و SEO محلي.' },
      { icon: Users, title: 'تدريب وDعم على مدار الساعة', desc: 'تدريب كامل للفريق. دعم واتساب مخصص.' },
      { icon: BookOpen, title: 'تحسين القائمة', desc: 'تحديثات يومية وهيكل بيع إضافي وعرض احترافي.' },
      { icon: MessageSquare, title: 'إدارة المراجعات', desc: 'ردود تلقائية على مراجعات Google وإدارة التعليقات.' },
    ],
  },
};

const MrDeliverySection = () => {
  const { language } = useLanguage();
  const c = i18n[language] || i18n.en;

  return (
    <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-yellow-500/8 rounded-full blur-[160px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-red-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-sm font-medium mb-6">
            <Truck className="w-4 h-4" />
            {c.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-black text-hub-text mb-4 lg:mb-6 leading-tight">
            Mr<span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 bg-clip-text text-transparent">Delivery</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-2xl text-hub-secondary max-w-4xl mx-auto leading-relaxed">{c.desc}</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="relative mb-16 lg:mb-20">
          <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden border border-yellow-500/20 shadow-2xl shadow-yellow-500/10">
            <div className="bg-hub-card/90 backdrop-blur-sm border-b border-white/10 px-4 py-3 flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <div className="flex-1 bg-white/5 rounded-lg px-3 py-1.5 text-xs sm:text-sm text-hub-muted font-mono">mrdelivery.ro</div>
            </div>
            <div className="aspect-[16/9] sm:aspect-[16/8] lg:aspect-[16/9]">
              <iframe src="https://mrdelivery.ro/" className="w-full h-full border-0" title="MrDelivery — Home Page" loading="lazy" />
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-16 lg:mb-20">
          {c.stats.map((stat, i) => (
            <div key={i} className="text-center p-4 sm:p-5 lg:p-6 rounded-xl lg:rounded-2xl bg-hub-card border border-yellow-500/10 hover:border-yellow-500/30 transition-colors">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">{stat.value}</div>
              <div className="text-xs sm:text-sm lg:text-base text-hub-muted mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 mb-12 lg:mb-16">
          {c.features.map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              className="p-5 sm:p-6 lg:p-7 rounded-xl lg:rounded-2xl bg-hub-card border border-white/10 hover:border-yellow-500/20 transition-colors group">
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center mb-4 group-hover:bg-yellow-500/20 transition-colors">
                <f.icon className="w-5 h-5 lg:w-6 lg:h-6 text-yellow-400" />
              </div>
              <h3 className="text-base lg:text-lg font-bold text-hub-text mb-2">{f.title}</h3>
              <p className="text-sm lg:text-base text-hub-muted leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
          <a href="https://mrdelivery.ro/" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 sm:px-10 lg:px-12 py-4 lg:py-5 rounded-2xl bg-gradient-to-r from-yellow-500 to-red-500 text-white font-bold text-base sm:text-lg lg:text-xl hover:opacity-90 transition-all active:scale-[0.98] shadow-lg shadow-yellow-500/25">
            <ExternalLink className="w-5 h-5 lg:w-6 lg:h-6" />
            {c.cta}
          </a>
          <p className="text-sm lg:text-base text-hub-muted mt-4">{c.ctaDesc}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default MrDeliverySection;
