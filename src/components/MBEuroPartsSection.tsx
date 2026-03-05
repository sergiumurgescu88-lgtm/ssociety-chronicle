import { motion } from 'framer-motion';
import { ExternalLink, Car, Search, ShieldCheck, Truck, Wrench, Globe, BarChart3, Package, Star } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const i18n: Record<string, {
  badge: string; desc: string; cta: string; ctaDesc: string;
  stats: { value: string; label: string }[];
  features: { icon: any; title: string; desc: string }[];
}> = {
  ro: {
    badge: 'Marketplace Auto European',
    desc: 'Marketplace digital pentru piese auto europene, cu focus pe Mercedes-Benz. Caută piesa după model, an și cod OEM, compară prețuri, verifică compatibilitatea și comandă online cu livrare rapidă.',
    cta: 'Deschide MB EuroParts',
    ctaDesc: 'Marketplace complet pentru piese auto europene de calitate',
    stats: [
      { value: '15K+', label: 'Piese disponibile' },
      { value: '200+', label: 'Modele acoperite' },
      { value: '98%', label: 'Compatibilitate verificată' },
      { value: '24h', label: 'Livrare rapidă' },
    ],
    features: [
      { icon: Search, title: 'Căutare Inteligentă AI', desc: 'Descrie piesa în cuvinte simple sau folosește codul OEM — AI-ul găsește piesa corectă instant din catalogul complet.' },
      { icon: Car, title: 'Compatibilitate pe Model', desc: 'Selectează marca, modelul și anul — vezi doar piesele 100% compatibile. Zero risc de comandă greșită.' },
      { icon: ShieldCheck, title: 'Calitate Garantată', desc: 'Toate piesele sunt verificate și certificate. Garanție de calitate și politică de retur transparentă.' },
      { icon: Package, title: 'Catalog Complet OEM', desc: 'Catalog exhaustiv cu piese originale și aftermarket pentru Mercedes-Benz și alte mărci europene premium.' },
      { icon: Truck, title: 'Livrare Rapidă', desc: 'Livrare în 24h pentru piesele din stoc. Tracking în timp real și notificări la fiecare etapă.' },
      { icon: Wrench, title: 'Suport Tehnic Expert', desc: 'Echipă de specialiști auto disponibilă pentru consultanță tehnică și recomandări de piese.' },
      { icon: Globe, title: 'Furnizori Europeni', desc: 'Rețea de furnizori verificați din Germania, Italia, Franța și alte țări europene pentru piese premium.' },
      { icon: BarChart3, title: 'Comparare Prețuri', desc: 'Compară prețuri de la mai mulți furnizori pentru aceeași piesă. Alege cel mai bun raport calitate-preț.' },
      { icon: Star, title: 'Recenzii & Rating', desc: 'Sistem de recenzii verificate de la clienți reali. Vezi experiențele altor cumpărători înainte de comandă.' },
    ],
  },
  en: {
    badge: 'European Auto Marketplace',
    desc: 'Digital marketplace for European auto parts, focused on Mercedes-Benz. Search by model, year and OEM code, compare prices, verify compatibility and order online with fast delivery.',
    cta: 'Open MB EuroParts',
    ctaDesc: 'Complete marketplace for quality European auto parts',
    stats: [
      { value: '15K+', label: 'Parts available' },
      { value: '200+', label: 'Models covered' },
      { value: '98%', label: 'Verified compatibility' },
      { value: '24h', label: 'Fast delivery' },
    ],
    features: [
      { icon: Search, title: 'Smart AI Search', desc: 'Describe the part in simple words or use the OEM code — AI finds the correct part instantly from the full catalog.' },
      { icon: Car, title: 'Model Compatibility', desc: 'Select make, model and year — see only 100% compatible parts. Zero risk of wrong orders.' },
      { icon: ShieldCheck, title: 'Guaranteed Quality', desc: 'All parts are verified and certified. Quality guarantee and transparent return policy.' },
      { icon: Package, title: 'Complete OEM Catalog', desc: 'Exhaustive catalog with original and aftermarket parts for Mercedes-Benz and other premium European brands.' },
      { icon: Truck, title: 'Fast Delivery', desc: '24h delivery for in-stock parts. Real-time tracking and notifications at every stage.' },
      { icon: Wrench, title: 'Expert Technical Support', desc: 'Team of auto specialists available for technical consultation and part recommendations.' },
      { icon: Globe, title: 'European Suppliers', desc: 'Network of verified suppliers from Germany, Italy, France and other European countries for premium parts.' },
      { icon: BarChart3, title: 'Price Comparison', desc: 'Compare prices from multiple suppliers for the same part. Choose the best value for money.' },
      { icon: Star, title: 'Reviews & Ratings', desc: 'Verified review system from real customers. See other buyers\' experiences before ordering.' },
    ],
  },
  es: {
    badge: 'Marketplace Auto Europeo',
    desc: 'Marketplace digital para piezas de autos europeos, enfocado en Mercedes-Benz. Busca por modelo, año y código OEM, compara precios, verifica compatibilidad y pide online con envío rápido.',
    cta: 'Abrir MB EuroParts',
    ctaDesc: 'Marketplace completo para piezas de autos europeos de calidad',
    stats: [
      { value: '15K+', label: 'Piezas disponibles' },
      { value: '200+', label: 'Modelos cubiertos' },
      { value: '98%', label: 'Compatibilidad verificada' },
      { value: '24h', label: 'Envío rápido' },
    ],
    features: [
      { icon: Search, title: 'Búsqueda IA Inteligente', desc: 'Describe la pieza en palabras simples o usa el código OEM — la IA encuentra la pieza correcta al instante.' },
      { icon: Car, title: 'Compatibilidad por Modelo', desc: 'Selecciona marca, modelo y año — solo ves piezas 100% compatibles.' },
      { icon: ShieldCheck, title: 'Calidad Garantizada', desc: 'Todas las piezas verificadas y certificadas. Garantía de calidad y política de devolución transparente.' },
      { icon: Package, title: 'Catálogo OEM Completo', desc: 'Catálogo exhaustivo con piezas originales y aftermarket para Mercedes-Benz y otras marcas europeas.' },
      { icon: Truck, title: 'Envío Rápido', desc: 'Entrega en 24h para piezas en stock. Seguimiento en tiempo real.' },
      { icon: Wrench, title: 'Soporte Técnico Experto', desc: 'Equipo de especialistas disponible para consultas técnicas y recomendaciones.' },
      { icon: Globe, title: 'Proveedores Europeos', desc: 'Red de proveedores verificados de Alemania, Italia, Francia y otros países europeos.' },
      { icon: BarChart3, title: 'Comparación de Precios', desc: 'Compara precios de múltiples proveedores para la misma pieza.' },
      { icon: Star, title: 'Reseñas & Calificaciones', desc: 'Sistema de reseñas verificadas de clientes reales.' },
    ],
  },
  fr: {
    badge: 'Marketplace Auto Européen',
    desc: 'Marketplace digital pour pièces auto européennes, focalisé sur Mercedes-Benz. Recherchez par modèle, année et code OEM, comparez les prix et commandez en ligne avec livraison rapide.',
    cta: 'Ouvrir MB EuroParts',
    ctaDesc: 'Marketplace complet pour pièces auto européennes de qualité',
    stats: [
      { value: '15K+', label: 'Pièces disponibles' },
      { value: '200+', label: 'Modèles couverts' },
      { value: '98%', label: 'Compatibilité vérifiée' },
      { value: '24h', label: 'Livraison rapide' },
    ],
    features: [
      { icon: Search, title: 'Recherche IA Intelligente', desc: 'Décrivez la pièce en mots simples ou utilisez le code OEM — l\'IA trouve la pièce correcte instantanément.' },
      { icon: Car, title: 'Compatibilité par Modèle', desc: 'Sélectionnez marque, modèle et année — voyez uniquement les pièces 100% compatibles.' },
      { icon: ShieldCheck, title: 'Qualité Garantie', desc: 'Toutes les pièces vérifiées et certifiées. Garantie qualité et politique de retour transparente.' },
      { icon: Package, title: 'Catalogue OEM Complet', desc: 'Catalogue exhaustif avec pièces originales et aftermarket pour Mercedes-Benz et autres marques européennes.' },
      { icon: Truck, title: 'Livraison Rapide', desc: 'Livraison en 24h pour les pièces en stock. Suivi en temps réel.' },
      { icon: Wrench, title: 'Support Technique Expert', desc: 'Équipe de spécialistes disponible pour consultation technique et recommandations.' },
      { icon: Globe, title: 'Fournisseurs Européens', desc: 'Réseau de fournisseurs vérifiés d\'Allemagne, Italie, France et autres pays européens.' },
      { icon: BarChart3, title: 'Comparaison de Prix', desc: 'Comparez les prix de plusieurs fournisseurs pour la même pièce.' },
      { icon: Star, title: 'Avis & Notes', desc: 'Système d\'avis vérifiés de vrais clients.' },
    ],
  },
  it: {
    badge: 'Marketplace Auto Europeo',
    desc: 'Marketplace digitale per ricambi auto europei, focalizzato su Mercedes-Benz. Cerca per modello, anno e codice OEM, confronta prezzi, verifica compatibilità e ordina online con consegna rapida.',
    cta: 'Apri MB EuroParts',
    ctaDesc: 'Marketplace completo per ricambi auto europei di qualità',
    stats: [
      { value: '15K+', label: 'Ricambi disponibili' },
      { value: '200+', label: 'Modelli coperti' },
      { value: '98%', label: 'Compatibilità verificata' },
      { value: '24h', label: 'Consegna rapida' },
    ],
    features: [
      { icon: Search, title: 'Ricerca IA Intelligente', desc: 'Descrivi il ricambio in parole semplici o usa il codice OEM — l\'IA trova il pezzo corretto istantaneamente.' },
      { icon: Car, title: 'Compatibilità per Modello', desc: 'Seleziona marca, modello e anno — vedi solo ricambi 100% compatibili.' },
      { icon: ShieldCheck, title: 'Qualità Garantita', desc: 'Tutti i ricambi verificati e certificati. Garanzia qualità e politica di reso trasparente.' },
      { icon: Package, title: 'Catalogo OEM Completo', desc: 'Catalogo esaustivo con ricambi originali e aftermarket per Mercedes-Benz e altri marchi europei.' },
      { icon: Truck, title: 'Consegna Rapida', desc: 'Consegna in 24h per ricambi in stock. Tracking in tempo reale.' },
      { icon: Wrench, title: 'Supporto Tecnico Esperto', desc: 'Team di specialisti disponibile per consulenza tecnica e raccomandazioni.' },
      { icon: Globe, title: 'Fornitori Europei', desc: 'Rete di fornitori verificati da Germania, Italia, Francia e altri paesi europei.' },
      { icon: BarChart3, title: 'Confronto Prezzi', desc: 'Confronta prezzi da più fornitori per lo stesso ricambio.' },
      { icon: Star, title: 'Recensioni & Valutazioni', desc: 'Sistema di recensioni verificate da clienti reali.' },
    ],
  },
  de: {
    badge: 'Europäischer Auto-Marktplatz',
    desc: 'Digitaler Marktplatz für europäische Autoteile, fokussiert auf Mercedes-Benz. Suche nach Modell, Jahr und OEM-Code, vergleiche Preise, prüfe Kompatibilität und bestelle online mit schneller Lieferung.',
    cta: 'MB EuroParts öffnen',
    ctaDesc: 'Kompletter Marktplatz für europäische Qualitäts-Autoteile',
    stats: [
      { value: '15K+', label: 'Teile verfügbar' },
      { value: '200+', label: 'Modelle abgedeckt' },
      { value: '98%', label: 'Verifizierte Kompatibilität' },
      { value: '24h', label: 'Schnelle Lieferung' },
    ],
    features: [
      { icon: Search, title: 'Intelligente KI-Suche', desc: 'Beschreiben Sie das Teil in einfachen Worten oder verwenden Sie den OEM-Code — KI findet sofort das richtige Teil.' },
      { icon: Car, title: 'Modell-Kompatibilität', desc: 'Wählen Sie Marke, Modell und Jahr — sehen Sie nur 100% kompatible Teile.' },
      { icon: ShieldCheck, title: 'Garantierte Qualität', desc: 'Alle Teile verifiziert und zertifiziert. Qualitätsgarantie und transparente Rückgabepolitik.' },
      { icon: Package, title: 'Kompletter OEM-Katalog', desc: 'Umfassender Katalog mit Original- und Aftermarket-Teilen für Mercedes-Benz und andere europäische Premiummarken.' },
      { icon: Truck, title: 'Schnelle Lieferung', desc: '24h Lieferung für Lagerteile. Echtzeit-Tracking und Benachrichtigungen.' },
      { icon: Wrench, title: 'Experten-Support', desc: 'Team von Auto-Spezialisten für technische Beratung und Teileempfehlungen verfügbar.' },
      { icon: Globe, title: 'Europäische Lieferanten', desc: 'Netzwerk verifizierter Lieferanten aus Deutschland, Italien, Frankreich und anderen europäischen Ländern.' },
      { icon: BarChart3, title: 'Preisvergleich', desc: 'Vergleichen Sie Preise von mehreren Lieferanten für dasselbe Teil.' },
      { icon: Star, title: 'Bewertungen & Ratings', desc: 'Verifiziertes Bewertungssystem von echten Kunden.' },
    ],
  },
  ar: {
    badge: 'سوق السيارات الأوروبية',
    desc: 'سوق رقمي لقطع غيار السيارات الأوروبية، مع التركيز على مرسيدس-بنز. ابحث حسب الموديل والسنة ورمز OEM، قارن الأسعار وتحقق من التوافق واطلب عبر الإنترنت مع توصيل سريع.',
    cta: 'افتح MB EuroParts',
    ctaDesc: 'سوق متكامل لقطع غيار السيارات الأوروبية عالية الجودة',
    stats: [
      { value: '15K+', label: 'قطعة متاحة' },
      { value: '200+', label: 'موديل مغطى' },
      { value: '98%', label: 'توافق مُتحقق منه' },
      { value: '24h', label: 'توصيل سريع' },
    ],
    features: [
      { icon: Search, title: 'بحث ذكي بالذكاء الاصطناعي', desc: 'صف القطعة بكلمات بسيطة أو استخدم رمز OEM — الذكاء الاصطناعي يجد القطعة الصحيحة فوراً.' },
      { icon: Car, title: 'توافق حسب الموديل', desc: 'اختر العلامة التجارية والموديل والسنة — شاهد فقط القطع المتوافقة 100%.' },
      { icon: ShieldCheck, title: 'جودة مضمونة', desc: 'جميع القطع مُتحقق منها ومُعتمدة. ضمان الجودة وسياسة إرجاع شفافة.' },
      { icon: Package, title: 'كتالوج OEM كامل', desc: 'كتالوج شامل بقطع أصلية وبديلة لمرسيدس-بنز وعلامات أوروبية أخرى.' },
      { icon: Truck, title: 'توصيل سريع', desc: 'توصيل خلال 24 ساعة للقطع المتوفرة. تتبع في الوقت الفعلي.' },
      { icon: Wrench, title: 'دعم فني متخصص', desc: 'فريق من المتخصصين متاح للاستشارات الفنية وتوصيات القطع.' },
      { icon: Globe, title: 'موردون أوروبيون', desc: 'شبكة موردين معتمدين من ألمانيا وإيطاليا وفرنسا ودول أوروبية أخرى.' },
      { icon: BarChart3, title: 'مقارنة الأسعار', desc: 'قارن أسعار من موردين متعددين لنفس القطعة.' },
      { icon: Star, title: 'مراجعات وتقييمات', desc: 'نظام مراجعات مُتحقق منها من عملاء حقيقيين.' },
    ],
  },
};

const MBEuroPartsSection = () => {
  const { language } = useLanguage();
  const c = i18n[language] || i18n.en;

  return (
    <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-sky-500/8 rounded-full blur-[160px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-medium mb-6">
            <Car className="w-4 h-4" />
            {c.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-black text-hub-text mb-4 lg:mb-6 leading-tight">
            MB EuroParts{' '}
            <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-sky-500 bg-clip-text text-transparent">European Auto Parts</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-2xl text-hub-secondary max-w-4xl mx-auto leading-relaxed">{c.desc}</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="relative mb-16 lg:mb-20">
          <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden border border-sky-500/20 shadow-2xl shadow-sky-500/10">
            <div className="bg-hub-card/90 backdrop-blur-sm border-b border-white/10 px-4 py-3 flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <div className="flex-1 bg-white/5 rounded-lg px-3 py-1.5 text-xs sm:text-sm text-hub-muted font-mono">mbeuroparts.lovable.app</div>
            </div>
            <div className="aspect-[16/9] sm:aspect-[16/8] lg:aspect-[16/9]">
              <iframe src="https://mbeuroparts.lovable.app/" className="w-full h-full border-0" title="MB EuroParts — European Auto Parts" loading="lazy" />
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-16 lg:mb-20">
          {c.stats.map((stat, i) => (
            <div key={i} className="text-center p-4 sm:p-5 lg:p-6 rounded-xl lg:rounded-2xl bg-hub-card border border-sky-500/10 hover:border-sky-500/30 transition-colors">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">{stat.value}</div>
              <div className="text-xs sm:text-sm lg:text-base text-hub-muted mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 mb-12 lg:mb-16">
          {c.features.map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              className="p-5 sm:p-6 lg:p-7 rounded-xl lg:rounded-2xl bg-hub-card border border-white/10 hover:border-sky-500/20 transition-colors group">
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mb-4 group-hover:bg-sky-500/20 transition-colors">
                <f.icon className="w-5 h-5 lg:w-6 lg:h-6 text-sky-400" />
              </div>
              <h3 className="text-base lg:text-lg font-bold text-hub-text mb-2">{f.title}</h3>
              <p className="text-sm lg:text-base text-hub-muted leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
          <a href="https://mbeuroparts.lovable.app/" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 sm:px-10 lg:px-12 py-4 lg:py-5 rounded-2xl bg-gradient-to-r from-sky-500 to-blue-500 text-white font-bold text-base sm:text-lg lg:text-xl hover:opacity-90 transition-all active:scale-[0.98] shadow-lg shadow-sky-500/25">
            <ExternalLink className="w-5 h-5 lg:w-6 lg:h-6" />
            {c.cta}
          </a>
          <p className="text-sm lg:text-base text-hub-muted mt-4">{c.ctaDesc}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default MBEuroPartsSection;
