import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const i18n: Record<string, {
  badge: string; title: string; desc1: string; desc2: string; cta: string;
  guideTitle: string; guide1: string; guide2: string; guide3: string;
  stats: { value: string; label: string }[];
  features: { emoji: string; title: string; desc: string }[];
}> = {
  ro: {
    badge: 'Activ 24/7 — Automatizare completă',
    title: 'WhatsAll Bot — Outreach automat pe WhatsApp',
    desc1: 'Automatizare completă pentru outreach B2B pe WhatsApp',
    desc2: 'Trimite mii de mesaje personalizate cu comportament uman simulat — fără intervenție manuală.',
    cta: 'Încearcă WhatsAll Bot →',
    guideTitle: 'Ghid de pornire rapidă',
    guide1: 'Ce primești: Bot WhatsApp complet, dashboard analytics, template-uri mesaje, suport tehnic',
    guide2: 'Instalare: 1. Creează cont → 2. Conectează WhatsApp → 3. Importă contacte → 4. Lansează campania',
    guide3: 'Checklist: Număr WhatsApp Business, Listă contacte CSV, Texte mesaje, Interval trimitere configurat',
    stats: [
      { value: '360h', label: 'funcționare/lună' },
      { value: '~10', label: 'secunde/mesaj' },
      { value: '0€', label: 'cost suplimentar' },
    ],
    features: [
      { emoji: '🔄', title: 'Automatizare 24/7', desc: 'Funcționează non-stop fără intervenție' },
      { emoji: '🛡️', title: 'Anti-Ban Protection', desc: 'Protecție avansată contra suspendării' },
      { emoji: '📊', title: 'Analytics Real-time', desc: 'Statistici live pentru fiecare campanie' },
      { emoji: '🎯', title: 'Targeting Precis', desc: 'Filtrare audiență pe criterii multiple' },
      { emoji: '💬', title: 'Mesaje Personalizate', desc: 'Template-uri dinamice cu variabile' },
      { emoji: '⏰', title: 'Programare Inteligentă', desc: 'Trimitere la ore optime de răspuns' },
      { emoji: '📱', title: 'Multi-Device', desc: 'Funcționează pe mai multe dispozitive' },
      { emoji: '🔗', title: 'API Integration', desc: 'Conectare cu CRM și alte sisteme' },
    ],
  },
  en: {
    badge: 'Active 24/7 — Full Automation',
    title: 'WhatsAll Bot — Automated WhatsApp Outreach',
    desc1: 'Complete automation for B2B outreach on WhatsApp',
    desc2: 'Send thousands of personalized messages with simulated human behavior — no manual intervention.',
    cta: 'Try WhatsAll Bot →',
    guideTitle: 'Quick Start Guide',
    guide1: 'What you get: Full WhatsApp bot, analytics dashboard, message templates, technical support',
    guide2: 'Setup: 1. Create account → 2. Connect WhatsApp → 3. Import contacts → 4. Launch campaign',
    guide3: 'Checklist: WhatsApp Business number, CSV contact list, Message texts, Sending interval configured',
    stats: [
      { value: '360h', label: 'operation/month' },
      { value: '~10', label: 'seconds/message' },
      { value: '0€', label: 'extra cost' },
    ],
    features: [
      { emoji: '🔄', title: '24/7 Automation', desc: 'Runs non-stop without intervention' },
      { emoji: '🛡️', title: 'Anti-Ban Protection', desc: 'Advanced protection against suspension' },
      { emoji: '📊', title: 'Real-time Analytics', desc: 'Live statistics for each campaign' },
      { emoji: '🎯', title: 'Precise Targeting', desc: 'Audience filtering on multiple criteria' },
      { emoji: '💬', title: 'Personalized Messages', desc: 'Dynamic templates with variables' },
      { emoji: '⏰', title: 'Smart Scheduling', desc: 'Send at optimal response hours' },
      { emoji: '📱', title: 'Multi-Device', desc: 'Works on multiple devices' },
      { emoji: '🔗', title: 'API Integration', desc: 'Connect with CRM and other systems' },
    ],
  },
  es: {
    badge: 'Activo 24/7 — Automatización completa',
    title: 'WhatsAll Bot — Outreach automatizado en WhatsApp',
    desc1: 'Automatización completa para outreach B2B en WhatsApp',
    desc2: 'Envía miles de mensajes personalizados con comportamiento humano simulado — sin intervención manual.',
    cta: 'Prueba WhatsAll Bot →',
    guideTitle: 'Guía de inicio rápido',
    guide1: 'Lo que recibes: Bot WhatsApp completo, dashboard de analíticas, plantillas de mensajes, soporte técnico',
    guide2: 'Instalación: 1. Crear cuenta → 2. Conectar WhatsApp → 3. Importar contactos → 4. Lanzar campaña',
    guide3: 'Checklist: Número WhatsApp Business, Lista de contactos CSV, Textos de mensajes, Intervalo de envío configurado',
    stats: [
      { value: '360h', label: 'operación/mes' },
      { value: '~10', label: 'segundos/mensaje' },
      { value: '0€', label: 'costo adicional' },
    ],
    features: [
      { emoji: '🔄', title: 'Automatización 24/7', desc: 'Funciona sin parar sin intervención' },
      { emoji: '🛡️', title: 'Protección Anti-Ban', desc: 'Protección avanzada contra suspensión' },
      { emoji: '📊', title: 'Analíticas en Tiempo Real', desc: 'Estadísticas en vivo para cada campaña' },
      { emoji: '🎯', title: 'Targeting Preciso', desc: 'Filtrado de audiencia por múltiples criterios' },
      { emoji: '💬', title: 'Mensajes Personalizados', desc: 'Plantillas dinámicas con variables' },
      { emoji: '⏰', title: 'Programación Inteligente', desc: 'Envío en horas óptimas de respuesta' },
      { emoji: '📱', title: 'Multi-Dispositivo', desc: 'Funciona en múltiples dispositivos' },
      { emoji: '🔗', title: 'Integración API', desc: 'Conexión con CRM y otros sistemas' },
    ],
  },
  fr: {
    badge: 'Actif 24/7 — Automatisation complète',
    title: 'WhatsAll Bot — Outreach automatisé sur WhatsApp',
    desc1: 'Automatisation complète pour l\'outreach B2B sur WhatsApp',
    desc2: 'Envoyez des milliers de messages personnalisés avec un comportement humain simulé — sans intervention manuelle.',
    cta: 'Essayer WhatsAll Bot →',
    guideTitle: 'Guide de démarrage rapide',
    guide1: 'Ce que vous recevez : Bot WhatsApp complet, dashboard analytics, modèles de messages, support technique',
    guide2: 'Installation : 1. Créer un compte → 2. Connecter WhatsApp → 3. Importer les contacts → 4. Lancer la campagne',
    guide3: 'Checklist : Numéro WhatsApp Business, Liste de contacts CSV, Textes de messages, Intervalle d\'envoi configuré',
    stats: [
      { value: '360h', label: 'fonctionnement/mois' },
      { value: '~10', label: 'secondes/message' },
      { value: '0€', label: 'coût supplémentaire' },
    ],
    features: [
      { emoji: '🔄', title: 'Automatisation 24/7', desc: 'Fonctionne sans arrêt sans intervention' },
      { emoji: '🛡️', title: 'Protection Anti-Ban', desc: 'Protection avancée contre la suspension' },
      { emoji: '📊', title: 'Analytics Temps Réel', desc: 'Statistiques en direct pour chaque campagne' },
      { emoji: '🎯', title: 'Ciblage Précis', desc: 'Filtrage d\'audience sur critères multiples' },
      { emoji: '💬', title: 'Messages Personnalisés', desc: 'Modèles dynamiques avec variables' },
      { emoji: '⏰', title: 'Programmation Intelligente', desc: 'Envoi aux heures de réponse optimales' },
      { emoji: '📱', title: 'Multi-Appareil', desc: 'Fonctionne sur plusieurs appareils' },
      { emoji: '🔗', title: 'Intégration API', desc: 'Connexion avec CRM et autres systèmes' },
    ],
  },
  it: {
    badge: 'Attivo 24/7 — Automazione completa',
    title: 'WhatsAll Bot — Outreach automatizzato su WhatsApp',
    desc1: 'Automazione completa per outreach B2B su WhatsApp',
    desc2: 'Invia migliaia di messaggi personalizzati con comportamento umano simulato — senza intervento manuale.',
    cta: 'Prova WhatsAll Bot →',
    guideTitle: 'Guida rapida',
    guide1: 'Cosa ricevi: Bot WhatsApp completo, dashboard analytics, template messaggi, supporto tecnico',
    guide2: 'Installazione: 1. Crea account → 2. Connetti WhatsApp → 3. Importa contatti → 4. Lancia campagna',
    guide3: 'Checklist: Numero WhatsApp Business, Lista contatti CSV, Testi messaggi, Intervallo invio configurato',
    stats: [
      { value: '360h', label: 'operazione/mese' },
      { value: '~10', label: 'secondi/messaggio' },
      { value: '0€', label: 'costo aggiuntivo' },
    ],
    features: [
      { emoji: '🔄', title: 'Automazione 24/7', desc: 'Funziona senza sosta senza intervento' },
      { emoji: '🛡️', title: 'Protezione Anti-Ban', desc: 'Protezione avanzata contro la sospensione' },
      { emoji: '📊', title: 'Analytics in Tempo Reale', desc: 'Statistiche live per ogni campagna' },
      { emoji: '🎯', title: 'Targeting Preciso', desc: 'Filtro del pubblico su criteri multipli' },
      { emoji: '💬', title: 'Messaggi Personalizzati', desc: 'Template dinamici con variabili' },
      { emoji: '⏰', title: 'Programmazione Intelligente', desc: 'Invio nelle ore ottimali di risposta' },
      { emoji: '📱', title: 'Multi-Dispositivo', desc: 'Funziona su più dispositivi' },
      { emoji: '🔗', title: 'Integrazione API', desc: 'Connessione con CRM e altri sistemi' },
    ],
  },
  de: {
    badge: 'Aktiv 24/7 — Vollständige Automatisierung',
    title: 'WhatsAll Bot — Automatisiertes WhatsApp-Outreach',
    desc1: 'Vollständige Automatisierung für B2B-Outreach auf WhatsApp',
    desc2: 'Sende Tausende personalisierter Nachrichten mit simuliertem menschlichem Verhalten — ohne manuellen Eingriff.',
    cta: 'WhatsAll Bot testen →',
    guideTitle: 'Schnellstartanleitung',
    guide1: 'Was du bekommst: Kompletter WhatsApp-Bot, Analytics-Dashboard, Nachrichtenvorlagen, technischer Support',
    guide2: 'Einrichtung: 1. Konto erstellen → 2. WhatsApp verbinden → 3. Kontakte importieren → 4. Kampagne starten',
    guide3: 'Checkliste: WhatsApp Business Nummer, CSV-Kontaktliste, Nachrichtentexte, Sendeintervall konfiguriert',
    stats: [
      { value: '360h', label: 'Betrieb/Monat' },
      { value: '~10', label: 'Sekunden/Nachricht' },
      { value: '0€', label: 'Zusatzkosten' },
    ],
    features: [
      { emoji: '🔄', title: '24/7 Automatisierung', desc: 'Läuft ohne Unterbrechung ohne Eingriff' },
      { emoji: '🛡️', title: 'Anti-Ban-Schutz', desc: 'Erweiterter Schutz gegen Sperrung' },
      { emoji: '📊', title: 'Echtzeit-Analytics', desc: 'Live-Statistiken für jede Kampagne' },
      { emoji: '🎯', title: 'Präzises Targeting', desc: 'Zielgruppenfilterung nach mehreren Kriterien' },
      { emoji: '💬', title: 'Personalisierte Nachrichten', desc: 'Dynamische Vorlagen mit Variablen' },
      { emoji: '⏰', title: 'Intelligente Planung', desc: 'Versand zu optimalen Antwortzeiten' },
      { emoji: '📱', title: 'Multi-Gerät', desc: 'Funktioniert auf mehreren Geräten' },
      { emoji: '🔗', title: 'API-Integration', desc: 'Verbindung mit CRM und anderen Systemen' },
    ],
  },
  ar: {
    badge: 'نشط 24/7 — أتمتة كاملة',
    title: 'WhatsAll Bot — تواصل آلي على واتساب',
    desc1: 'أتمتة كاملة للتواصل B2B على واتساب',
    desc2: 'أرسل آلاف الرسائل المخصصة بسلوك بشري محاكى — بدون تدخل يدوي.',
    cta: '← جرّب WhatsAll Bot',
    guideTitle: 'دليل البدء السريع',
    guide1: 'ما تحصل عليه: بوت واتساب كامل، لوحة تحليلات، قوالب رسائل، دعم تقني',
    guide2: 'التثبيت: 1. إنشاء حساب ← 2. ربط واتساب ← 3. استيراد جهات الاتصال ← 4. إطلاق الحملة',
    guide3: 'قائمة التحقق: رقم واتساب للأعمال، قائمة جهات اتصال CSV، نصوص الرسائل، فاصل الإرسال مُعدّ',
    stats: [
      { value: '360h', label: 'تشغيل/شهر' },
      { value: '~10', label: 'ثوانٍ/رسالة' },
      { value: '0€', label: 'تكلفة إضافية' },
    ],
    features: [
      { emoji: '🔄', title: 'أتمتة 24/7', desc: 'يعمل بلا توقف بدون تدخل' },
      { emoji: '🛡️', title: 'حماية ضد الحظر', desc: 'حماية متقدمة ضد التعليق' },
      { emoji: '📊', title: 'تحليلات فورية', desc: 'إحصائيات مباشرة لكل حملة' },
      { emoji: '🎯', title: 'استهداف دقيق', desc: 'تصفية الجمهور بمعايير متعددة' },
      { emoji: '💬', title: 'رسائل مخصصة', desc: 'قوالب ديناميكية بمتغيرات' },
      { emoji: '⏰', title: 'جدولة ذكية', desc: 'إرسال في أوقات الاستجابة المثلى' },
      { emoji: '📱', title: 'متعدد الأجهزة', desc: 'يعمل على أجهزة متعددة' },
      { emoji: '🔗', title: 'تكامل API', desc: 'اتصال مع CRM وأنظمة أخرى' },
    ],
  },
};

const WhatsAllSection = () => {
  const [guideOpen, setGuideOpen] = useState(false);
  const { language } = useLanguage();
  const c = i18n[language] || i18n.en;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      className="max-w-6xl mx-auto px-3 sm:px-4 py-8 sm:py-10 lg:py-14"
    >
      <div className="relative bg-[#0a0f0d] border border-[#25D366]/15 rounded-2xl sm:rounded-[2.5rem] overflow-hidden">
        <div className="h-1 bg-gradient-to-r from-transparent via-[#25D366] to-transparent animate-pulse" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#25D366]/8 rounded-full blur-[100px]" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#128C7E]/5 rounded-full blur-[100px]" />

        <div className="relative p-5 sm:p-8 lg:p-12">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-5 sm:mb-6 lg:mb-8">
            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br from-[#25D366] to-[#128C7E] flex items-center justify-center shrink-0">
              <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 text-white fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              </svg>
            </div>
            <div>
              <span className="text-xs lg:text-sm text-[#25D366] font-medium">{c.badge}</span>
              <h2 className="text-xl sm:text-2xl lg:text-4xl font-extrabold text-[#e8f5e9] leading-tight">{c.title}</h2>
            </div>
          </div>

          <div className="aspect-video rounded-xl sm:rounded-2xl overflow-hidden bg-black/50 border border-[#25D366]/10 mb-6 sm:mb-8">
            <video className="w-full h-full object-cover" controls muted loop playsInline poster="">
              <source src="/videos/whatsall-prezentare.mp4" type="video/mp4" />
            </video>
          </div>

          <p className="text-[#e8f5e9] font-bold text-sm sm:text-base lg:text-xl mb-1.5 sm:mb-2">{c.desc1}</p>
          <p className="text-[#a5d6a7] text-[13px] sm:text-sm lg:text-lg leading-relaxed mb-6 sm:mb-8">{c.desc2}</p>

          <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8">
            {c.stats.map((s, i) => (
              <div key={i} className="text-center p-3 sm:p-4 lg:p-5 rounded-xl bg-[#25D366]/5 border border-[#25D366]/10">
                <div className="text-lg sm:text-2xl lg:text-3xl font-extrabold text-[#25D366]">{s.value}</div>
                <div className="text-[10px] sm:text-xs lg:text-sm text-[#a5d6a7] mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
            {c.features.map((f, i) => (
              <div key={i} className="flex items-start gap-3 p-3 sm:p-4 lg:p-5 rounded-xl border border-[#25D366]/10 hover:border-[#25D366]/25 transition-colors bg-[#25D366]/[0.03]">
                <span className="text-lg sm:text-xl lg:text-2xl">{f.emoji}</span>
                <div>
                  <div className="text-[13px] sm:text-sm lg:text-base font-semibold text-[#e8f5e9]">{f.title}</div>
                  <div className="text-xs lg:text-sm text-[#a5d6a7] leading-relaxed">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <button onClick={() => setGuideOpen(!guideOpen)}
            className="w-full flex items-center justify-between p-3.5 sm:p-4 lg:p-5 rounded-xl bg-[#25D366]/5 border border-[#25D366]/10 mt-6 mb-5 sm:mb-6 text-[#e8f5e9] font-medium text-sm sm:text-base lg:text-lg">
            {c.guideTitle}
            <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform ${guideOpen ? 'rotate-180' : ''}`} />
          </button>
          {guideOpen && (
            <div className="p-4 sm:p-6 rounded-xl bg-[#25D366]/5 border border-[#25D366]/10 mb-5 sm:mb-6 text-[13px] sm:text-sm lg:text-base text-[#a5d6a7] space-y-3 leading-relaxed">
              <p><strong className="text-[#e8f5e9]">{c.guide1.split(':')[0]}:</strong> {c.guide1.split(':').slice(1).join(':')}</p>
              <p><strong className="text-[#e8f5e9]">{c.guide2.split(':')[0]}:</strong> {c.guide2.split(':').slice(1).join(':')}</p>
              <p><strong className="text-[#e8f5e9]">{c.guide3.split(':')[0]}:</strong> {c.guide3.split(':').slice(1).join(':')}</p>
            </div>
          )}

          <a href="https://wild-bot-rho.vercel.app/" target="_blank" rel="noopener noreferrer"
            className="block w-full text-center py-3.5 sm:py-4 lg:py-5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-bold text-base lg:text-lg hover:opacity-90 transition-opacity active:scale-[0.98]">
            {c.cta}
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default WhatsAllSection;
