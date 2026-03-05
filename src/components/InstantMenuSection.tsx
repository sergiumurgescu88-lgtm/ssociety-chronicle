import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const i18n: Record<string, {
  title: string; desc: string; docsTitle: string; tryFree: string; process: string; capture: string; docsRef: string;
  docsHow: string; docsInput: string; docsOutput: string;
  stats: { value: string; label: string }[];
  features: { emoji: string; title: string; desc: string }[];
}> = {
  ro: {
    title: 'Instant Menu Pictures',
    desc: 'Generare automată de imagini Michelin-quality pentru meniuri de restaurant din text simplu.',
    docsTitle: 'Documentație completă',
    tryFree: 'Încearcă gratuit →',
    process: 'Process Menu',
    capture: 'Capture Live Dish',
    docsRef: 'Documentație · API Reference',
    docsHow: 'Cum funcționează: 1. Upload meniu text → 2. AI analizează → 3. Generează imagini → 4. Review → 5. Export',
    docsInput: 'Formate input: Text simplu, PDF meniu, Excel cu preparate, Dicție vocală',
    docsOutput: 'Output: JPEG 4K, PNG transparent, WebP optimizat, Social media crops, Print-ready',
    stats: [
      { value: '∞', label: 'Preparate' },
      { value: '4K', label: 'Rezoluție' },
      { value: '0€', label: 'Sesiune foto' },
      { value: '60s', label: 'Per imagine' },
    ],
    features: [
      { emoji: '📝', title: 'Text-to-Dish', desc: 'Generează imagini din descrieri text' },
      { emoji: '✨', title: 'Photo Enhancement', desc: 'Îmbunătățire automată a fotografiilor' },
      { emoji: '🎨', title: 'Logo Branding', desc: 'Integrare identitate vizuală brand' },
      { emoji: '📸', title: 'Live Capture', desc: 'Captură și editare în timp real' },
      { emoji: '📦', title: 'Bulk Import', desc: 'Import masiv din Excel sau CSV' },
      { emoji: '🎙️', title: 'Voice Mode', desc: 'Descrie preparatul vocal' },
      { emoji: '🔄', title: 'Multi-Platform Export', desc: 'Export pentru social media și meniu' },
      { emoji: '✏️', title: 'Edit Control', desc: 'Control complet asupra rezultatelor' },
    ],
  },
  en: {
    title: 'Instant Menu Pictures',
    desc: 'Automatic Michelin-quality image generation for restaurant menus from simple text.',
    docsTitle: 'Full Documentation',
    tryFree: 'Try for free →',
    process: 'Process Menu',
    capture: 'Capture Live Dish',
    docsRef: 'Documentation · API Reference',
    docsHow: 'How it works: 1. Upload menu text → 2. AI analyzes → 3. Generates images → 4. Review → 5. Export',
    docsInput: 'Input formats: Plain text, Menu PDF, Excel with dishes, Voice dictation',
    docsOutput: 'Output: JPEG 4K, Transparent PNG, Optimized WebP, Social media crops, Print-ready',
    stats: [
      { value: '∞', label: 'Dishes' },
      { value: '4K', label: 'Resolution' },
      { value: '0€', label: 'Photo session' },
      { value: '60s', label: 'Per image' },
    ],
    features: [
      { emoji: '📝', title: 'Text-to-Dish', desc: 'Generate images from text descriptions' },
      { emoji: '✨', title: 'Photo Enhancement', desc: 'Automatic photo enhancement' },
      { emoji: '🎨', title: 'Logo Branding', desc: 'Brand visual identity integration' },
      { emoji: '📸', title: 'Live Capture', desc: 'Real-time capture and editing' },
      { emoji: '📦', title: 'Bulk Import', desc: 'Bulk import from Excel or CSV' },
      { emoji: '🎙️', title: 'Voice Mode', desc: 'Describe the dish by voice' },
      { emoji: '🔄', title: 'Multi-Platform Export', desc: 'Export for social media and menus' },
      { emoji: '✏️', title: 'Edit Control', desc: 'Full control over results' },
    ],
  },
  es: {
    title: 'Instant Menu Pictures',
    desc: 'Generación automática de imágenes calidad Michelin para menús de restaurante a partir de texto simple.',
    docsTitle: 'Documentación completa',
    tryFree: 'Prueba gratis →',
    process: 'Procesar Menú',
    capture: 'Capturar Plato',
    docsRef: 'Documentación · Referencia API',
    docsHow: 'Cómo funciona: 1. Sube texto del menú → 2. IA analiza → 3. Genera imágenes → 4. Revisión → 5. Exportar',
    docsInput: 'Formatos de entrada: Texto simple, PDF del menú, Excel con platos, Dictado por voz',
    docsOutput: 'Salida: JPEG 4K, PNG transparente, WebP optimizado, Recortes para redes sociales, Listo para imprimir',
    stats: [
      { value: '∞', label: 'Platos' },
      { value: '4K', label: 'Resolución' },
      { value: '0€', label: 'Sesión fotográfica' },
      { value: '60s', label: 'Por imagen' },
    ],
    features: [
      { emoji: '📝', title: 'Text-to-Dish', desc: 'Genera imágenes desde descripciones de texto' },
      { emoji: '✨', title: 'Photo Enhancement', desc: 'Mejora automática de fotografías' },
      { emoji: '🎨', title: 'Logo Branding', desc: 'Integración de identidad visual de marca' },
      { emoji: '📸', title: 'Live Capture', desc: 'Captura y edición en tiempo real' },
      { emoji: '📦', title: 'Bulk Import', desc: 'Importación masiva desde Excel o CSV' },
      { emoji: '🎙️', title: 'Voice Mode', desc: 'Describe el plato con la voz' },
      { emoji: '🔄', title: 'Multi-Platform Export', desc: 'Exportar para redes sociales y menú' },
      { emoji: '✏️', title: 'Edit Control', desc: 'Control total sobre los resultados' },
    ],
  },
  fr: {
    title: 'Instant Menu Pictures',
    desc: 'Génération automatique d\'images qualité Michelin pour menus de restaurant à partir de texte simple.',
    docsTitle: 'Documentation complète',
    tryFree: 'Essayer gratuitement →',
    process: 'Traiter le Menu',
    capture: 'Capturer le Plat',
    docsRef: 'Documentation · Référence API',
    docsHow: 'Comment ça marche : 1. Téléchargez le texte du menu → 2. L\'IA analyse → 3. Génère les images → 4. Révision → 5. Export',
    docsInput: 'Formats d\'entrée : Texte simple, PDF du menu, Excel avec plats, Dictée vocale',
    docsOutput: 'Sortie : JPEG 4K, PNG transparent, WebP optimisé, Recadrages réseaux sociaux, Prêt à imprimer',
    stats: [
      { value: '∞', label: 'Plats' },
      { value: '4K', label: 'Résolution' },
      { value: '0€', label: 'Séance photo' },
      { value: '60s', label: 'Par image' },
    ],
    features: [
      { emoji: '📝', title: 'Text-to-Dish', desc: 'Générer des images à partir de descriptions texte' },
      { emoji: '✨', title: 'Photo Enhancement', desc: 'Amélioration automatique des photos' },
      { emoji: '🎨', title: 'Logo Branding', desc: 'Intégration de l\'identité visuelle de marque' },
      { emoji: '📸', title: 'Live Capture', desc: 'Capture et édition en temps réel' },
      { emoji: '📦', title: 'Bulk Import', desc: 'Import en masse depuis Excel ou CSV' },
      { emoji: '🎙️', title: 'Voice Mode', desc: 'Décrivez le plat à la voix' },
      { emoji: '🔄', title: 'Multi-Platform Export', desc: 'Export pour réseaux sociaux et menus' },
      { emoji: '✏️', title: 'Edit Control', desc: 'Contrôle total sur les résultats' },
    ],
  },
  it: {
    title: 'Instant Menu Pictures',
    desc: 'Generazione automatica di immagini qualità Michelin per menù di ristorante da testo semplice.',
    docsTitle: 'Documentazione completa',
    tryFree: 'Prova gratis →',
    process: 'Elabora Menù',
    capture: 'Cattura Piatto',
    docsRef: 'Documentazione · Riferimento API',
    docsHow: 'Come funziona: 1. Carica testo del menù → 2. IA analizza → 3. Genera immagini → 4. Revisione → 5. Esporta',
    docsInput: 'Formati di input: Testo semplice, PDF del menù, Excel con piatti, Dettatura vocale',
    docsOutput: 'Output: JPEG 4K, PNG trasparente, WebP ottimizzato, Ritagli social media, Pronto per la stampa',
    stats: [
      { value: '∞', label: 'Piatti' },
      { value: '4K', label: 'Risoluzione' },
      { value: '0€', label: 'Sessione fotografica' },
      { value: '60s', label: 'Per immagine' },
    ],
    features: [
      { emoji: '📝', title: 'Text-to-Dish', desc: 'Genera immagini da descrizioni testuali' },
      { emoji: '✨', title: 'Photo Enhancement', desc: 'Miglioramento automatico delle foto' },
      { emoji: '🎨', title: 'Logo Branding', desc: 'Integrazione identità visiva del brand' },
      { emoji: '📸', title: 'Live Capture', desc: 'Cattura e modifica in tempo reale' },
      { emoji: '📦', title: 'Bulk Import', desc: 'Importazione di massa da Excel o CSV' },
      { emoji: '🎙️', title: 'Voice Mode', desc: 'Descrivi il piatto con la voce' },
      { emoji: '🔄', title: 'Multi-Platform Export', desc: 'Esporta per social media e menù' },
      { emoji: '✏️', title: 'Edit Control', desc: 'Controllo completo sui risultati' },
    ],
  },
  de: {
    title: 'Instant Menu Pictures',
    desc: 'Automatische Michelin-Qualität Bildgenerierung für Restaurantmenüs aus einfachem Text.',
    docsTitle: 'Vollständige Dokumentation',
    tryFree: 'Kostenlos testen →',
    process: 'Menü verarbeiten',
    capture: 'Gericht erfassen',
    docsRef: 'Dokumentation · API-Referenz',
    docsHow: 'So funktioniert es: 1. Menütext hochladen → 2. KI analysiert → 3. Bilder generieren → 4. Überprüfung → 5. Export',
    docsInput: 'Eingabeformate: Einfacher Text, Menü-PDF, Excel mit Gerichten, Sprachdiktat',
    docsOutput: 'Ausgabe: JPEG 4K, Transparentes PNG, Optimiertes WebP, Social-Media-Zuschnitte, Druckfertig',
    stats: [
      { value: '∞', label: 'Gerichte' },
      { value: '4K', label: 'Auflösung' },
      { value: '0€', label: 'Fotosession' },
      { value: '60s', label: 'Pro Bild' },
    ],
    features: [
      { emoji: '📝', title: 'Text-to-Dish', desc: 'Bilder aus Textbeschreibungen generieren' },
      { emoji: '✨', title: 'Photo Enhancement', desc: 'Automatische Fotoverbesserung' },
      { emoji: '🎨', title: 'Logo Branding', desc: 'Integration der visuellen Markenidentität' },
      { emoji: '📸', title: 'Live Capture', desc: 'Echtzeit-Erfassung und Bearbeitung' },
      { emoji: '📦', title: 'Bulk Import', desc: 'Massenimport aus Excel oder CSV' },
      { emoji: '🎙️', title: 'Voice Mode', desc: 'Gericht per Sprache beschreiben' },
      { emoji: '🔄', title: 'Multi-Platform Export', desc: 'Export für Social Media und Menüs' },
      { emoji: '✏️', title: 'Edit Control', desc: 'Volle Kontrolle über die Ergebnisse' },
    ],
  },
  ar: {
    title: 'Instant Menu Pictures',
    desc: 'إنشاء صور تلقائية بجودة ميشلان لقوائم المطاعم من نص بسيط.',
    docsTitle: 'التوثيق الكامل',
    tryFree: '← جرّب مجانًا',
    process: 'معالجة القائمة',
    capture: 'التقاط الطبق',
    docsRef: 'التوثيق · مرجع API',
    docsHow: 'كيف يعمل: 1. رفع نص القائمة ← 2. الذكاء الاصطناعي يحلل ← 3. إنشاء الصور ← 4. مراجعة ← 5. تصدير',
    docsInput: 'صيغ الإدخال: نص بسيط، PDF القائمة، Excel بالأطباق، إملاء صوتي',
    docsOutput: 'الإخراج: JPEG 4K، PNG شفاف، WebP محسّن، قصاصات وسائل التواصل، جاهز للطباعة',
    stats: [
      { value: '∞', label: 'أطباق' },
      { value: '4K', label: 'دقة' },
      { value: '0€', label: 'جلسة تصوير' },
      { value: '60s', label: 'لكل صورة' },
    ],
    features: [
      { emoji: '📝', title: 'Text-to-Dish', desc: 'إنشاء صور من وصف نصي' },
      { emoji: '✨', title: 'Photo Enhancement', desc: 'تحسين تلقائي للصور' },
      { emoji: '🎨', title: 'Logo Branding', desc: 'دمج الهوية البصرية للعلامة التجارية' },
      { emoji: '📸', title: 'Live Capture', desc: 'التقاط وتحرير في الوقت الفعلي' },
      { emoji: '📦', title: 'Bulk Import', desc: 'استيراد جماعي من Excel أو CSV' },
      { emoji: '🎙️', title: 'Voice Mode', desc: 'صف الطبق بصوتك' },
      { emoji: '🔄', title: 'Multi-Platform Export', desc: 'تصدير لوسائل التواصل والقوائم' },
      { emoji: '✏️', title: 'Edit Control', desc: 'تحكم كامل في النتائج' },
    ],
  },
};

const actions = ['Upload Menu', 'Logo', 'Location', 'Bulk Photos', 'Voice Mode', 'Import Excel'];

const InstantMenuSection = () => {
  const [docsOpen, setDocsOpen] = useState(false);
  const { language } = useLanguage();
  const c = i18n[language] || i18n.en;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      className="max-w-6xl mx-auto px-3 sm:px-4 py-8 sm:py-10 lg:py-14"
    >
      <div className="relative bg-[#0f0a00] border border-amber-500/15 rounded-2xl sm:rounded-[2.5rem] overflow-hidden">
        <div className="h-1 bg-gradient-to-r from-amber-600 via-yellow-400 to-amber-600" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-amber-500/8 rounded-full blur-[100px]" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-500/5 rounded-full blur-[100px]" />

        <div className="relative p-5 sm:p-8 lg:p-12">
          <div className="flex items-center gap-2 sm:gap-3 mb-5 sm:mb-6 lg:mb-8 p-2.5 sm:p-3 lg:p-4 rounded-xl bg-amber-500/5 border border-amber-500/10">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-xs sm:text-sm lg:text-base font-bold text-amber-100">MrDelivery.AIStudio</span>
            <span className="text-[10px] sm:text-xs px-2 py-0.5 rounded bg-amber-500/20 text-amber-400">ON</span>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
            <span className="text-2xl sm:text-3xl lg:text-4xl">🍽️</span>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              <span className="text-[10px] sm:text-xs lg:text-sm px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 font-medium">⭐ Michelin Cinematic Engine</span>
              <span className="text-[10px] sm:text-xs lg:text-sm px-2 py-0.5 rounded bg-yellow-500/10 text-yellow-400">AI Visual Studio</span>
            </div>
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-4xl font-extrabold text-amber-50 mb-2 lg:mb-3 leading-tight">{c.title}</h2>
          <p className="text-amber-200/60 text-[13px] sm:text-sm lg:text-lg leading-relaxed mb-5 sm:mb-6 lg:mb-8">{c.desc}</p>

          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-5 sm:mb-6 lg:mb-8">
            {actions.map(a => (
              <span key={a} className="px-2.5 sm:px-3 lg:px-4 py-1.5 lg:py-2 rounded-full bg-amber-500/5 border border-amber-500/15 text-[11px] sm:text-xs lg:text-sm text-amber-300/60">{a}</span>
            ))}
            <button className="px-3 sm:px-4 py-1.5 lg:py-2 rounded-full bg-amber-600 text-white text-[11px] sm:text-xs lg:text-sm font-medium hover:bg-amber-500 transition-colors">{c.process}</button>
            <button className="px-3 sm:px-4 py-1.5 lg:py-2 rounded-full bg-yellow-600 text-white text-[11px] sm:text-xs lg:text-sm font-medium hover:bg-yellow-500 transition-colors">{c.capture}</button>
          </div>

          <div className="aspect-video rounded-xl sm:rounded-2xl overflow-hidden bg-black/50 border border-amber-500/10 mb-6 sm:mb-8">
            <iframe src="https://www.youtube.com/embed/JjeXG0TIus8" className="w-full h-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="Instant Menu Pictures" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 mb-6 sm:mb-8">
            {c.stats.map((s, i) => {
              const colors = ['text-amber-400', 'text-yellow-400', 'text-amber-300', 'text-yellow-300'];
              return (
                <div key={i} className="text-center p-3 sm:p-4 lg:p-5 rounded-xl bg-amber-500/5 border border-amber-500/10">
                  <div className={`text-lg sm:text-2xl lg:text-3xl font-extrabold ${colors[i]}`}>{s.value}</div>
                  <div className="text-[10px] sm:text-xs lg:text-sm text-amber-200/50 mt-1">{s.label}</div>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
            {c.features.map((f, i) => (
              <div key={i} className="flex items-start gap-3 p-3 sm:p-4 lg:p-5 rounded-xl border border-amber-500/10 hover:border-amber-500/25 transition-colors bg-amber-500/[0.03]">
                <span className="text-lg sm:text-xl lg:text-2xl">{f.emoji}</span>
                <div>
                  <div className="text-[13px] sm:text-sm lg:text-base font-semibold text-amber-50">{f.title}</div>
                  <div className="text-xs lg:text-sm text-amber-200/50 leading-relaxed">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <button onClick={() => setDocsOpen(!docsOpen)}
            className="w-full flex items-center justify-between p-3.5 sm:p-4 lg:p-5 rounded-xl bg-amber-500/5 border border-amber-500/10 mt-6 mb-5 sm:mb-6 text-amber-50 font-medium text-sm sm:text-base lg:text-lg">
            {c.docsTitle}
            <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform ${docsOpen ? 'rotate-180' : ''}`} />
          </button>
          {docsOpen && (
            <div className="p-4 sm:p-6 rounded-xl bg-amber-500/5 border border-amber-500/10 mb-5 sm:mb-6 text-[13px] sm:text-sm lg:text-base text-amber-200/50 space-y-3 leading-relaxed">
              <p><strong className="text-amber-50">{c.docsHow.split(':')[0]}:</strong> {c.docsHow.split(':').slice(1).join(':')}</p>
              <p><strong className="text-amber-50">{c.docsInput.split(':')[0]}:</strong> {c.docsInput.split(':').slice(1).join(':')}</p>
              <p><strong className="text-amber-50">{c.docsOutput.split(':')[0]}:</strong> {c.docsOutput.split(':').slice(1).join(':')}</p>
            </div>
          )}

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3.5 sm:p-4 lg:p-5 rounded-xl bg-amber-500/5 border border-amber-500/10">
            <span className="text-xs sm:text-sm lg:text-base text-amber-200/50">{c.docsRef}</span>
            <button className="px-4 lg:px-6 py-2 lg:py-3 rounded-xl bg-gradient-to-r from-amber-600 to-yellow-600 text-white text-sm lg:text-base font-medium hover:from-amber-500 hover:to-yellow-500 transition-all w-full sm:w-auto text-center">
              {c.tryFree}
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default InstantMenuSection;
