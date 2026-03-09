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
    badge: 'SSociety VIEW — Earth Intelligence Platform',
    title: 'Monitorizare globală a Pământului în timp real cu imagini satelitare',
    desc: 'Platformă completă de inteligență terestră cu straturi satelitare NASA (Terra, Aqua, VIIRS), detectare incendii, acoperire zăpadă, aerosoli, tracking aeronave, monitorizare seismică și instrumente de măsurare — totul live.',
    cta: '🌍 Explorează Pământul →',
    guideTitle: 'Ce include platforma',
    guide1: 'Straturi Satelitare: Terra MODIS, Aqua MODIS, VIIRS Night, Fire Thermal, Snow Cover, Aerosol AOD — comutare instant între vizualizări',
    guide2: 'Instrumente Live: Tracking aeronave, monitorizare seismică, măsurare distanțe, geolocalizare și urmărire poziție în timp real',
    guide3: 'Time Machine: Călătorește 30 de zile în trecut, compară straturi side-by-side și vizualizează evenimente globale active',
    stats: [
      { emoji: '🛰️', value: '6+', label: 'Straturi satelitare NASA' },
      { emoji: '🌍', value: 'LIVE', label: 'Date în timp real' },
      { emoji: '✈️', value: '∞', label: 'Aeronave urmărite' },
      { emoji: '🌋', value: '24/7', label: 'Monitorizare seismică' },
    ],
    features: [
      { emoji: '🛰️', title: 'Terra MODIS', desc: 'Imagini satelitare de înaltă rezoluție de la NASA Terra.' },
      { emoji: '💧', title: 'Aqua MODIS', desc: 'Straturi de apă și umiditate de la satelitul Aqua.' },
      { emoji: '🌃', title: 'VIIRS Night', desc: 'Vizualizare nocturnă a luminilor urbane din spațiu.' },
      { emoji: '🔥', title: 'Fire Thermal', desc: 'Detectare incendii active cu imagistică termală.' },
      { emoji: '❄️', title: 'Snow Cover', desc: 'Monitorizare acoperire de zăpadă la nivel global.' },
      { emoji: '🌫️', title: 'Aerosol AOD', desc: 'Măsurare densitate aerosoli și calitate aer.' },
      { emoji: '✈️', title: 'Aircraft Tracking', desc: 'Urmărire aeronave în timp real pe hartă globală.' },
      { emoji: '🌋', title: 'Seismic Monitor', desc: 'Cutremure și activitate seismică live cu magnitudine.' },
      { emoji: '📐', title: 'Measure Tools', desc: 'Instrumente de măsurare distanță și suprafață pe hartă.' },
    ],
  },
  en: {
    badge: 'SSociety VIEW — Earth Intelligence Platform',
    title: 'Real-time global Earth monitoring with satellite imagery',
    desc: 'Complete earth intelligence platform with NASA satellite layers (Terra, Aqua, VIIRS), fire detection, snow cover, aerosols, aircraft tracking, seismic monitoring and measurement tools — all live.',
    cta: '🌍 Explore Earth →',
    guideTitle: 'What the platform includes',
    guide1: 'Satellite Layers: Terra MODIS, Aqua MODIS, VIIRS Night, Fire Thermal, Snow Cover, Aerosol AOD — instant switching between views',
    guide2: 'Live Tools: Aircraft tracking, seismic monitoring, distance measurement, geolocation and real-time position tracking',
    guide3: 'Time Machine: Travel 30 days into the past, compare layers side-by-side and visualize active global events',
    stats: [
      { emoji: '🛰️', value: '6+', label: 'NASA satellite layers' },
      { emoji: '🌍', value: 'LIVE', label: 'Real-time data' },
      { emoji: '✈️', value: '∞', label: 'Aircraft tracked' },
      { emoji: '🌋', value: '24/7', label: 'Seismic monitoring' },
    ],
    features: [
      { emoji: '🛰️', title: 'Terra MODIS', desc: 'High-resolution satellite imagery from NASA Terra.' },
      { emoji: '💧', title: 'Aqua MODIS', desc: 'Water and humidity layers from Aqua satellite.' },
      { emoji: '🌃', title: 'VIIRS Night', desc: 'Nighttime visualization of urban lights from space.' },
      { emoji: '🔥', title: 'Fire Thermal', desc: 'Active fire detection with thermal imaging.' },
      { emoji: '❄️', title: 'Snow Cover', desc: 'Global snow coverage monitoring.' },
      { emoji: '🌫️', title: 'Aerosol AOD', desc: 'Aerosol density measurement and air quality.' },
      { emoji: '✈️', title: 'Aircraft Tracking', desc: 'Real-time aircraft tracking on global map.' },
      { emoji: '🌋', title: 'Seismic Monitor', desc: 'Live earthquakes and seismic activity with magnitude.' },
      { emoji: '📐', title: 'Measure Tools', desc: 'Distance and area measurement tools on map.' },
    ],
  },
  es: {
    badge: 'SSociety VIEW — Plataforma de Inteligencia Terrestre',
    title: 'Monitoreo global de la Tierra en tiempo real con imágenes satelitales',
    desc: 'Plataforma completa con capas satelitales NASA, detección de incendios, nieve, aerosoles, rastreo de aeronaves y monitoreo sísmico — todo en vivo.',
    cta: '🌍 Explorar la Tierra →',
    guideTitle: 'Qué incluye la plataforma',
    guide1: 'Capas Satelitales: Terra MODIS, Aqua MODIS, VIIRS Night, Fire Thermal, Snow Cover, Aerosol AOD',
    guide2: 'Herramientas Live: Rastreo de aeronaves, monitoreo sísmico, medición y geolocalización en tiempo real',
    guide3: 'Time Machine: Viaja 30 días al pasado, compara capas y visualiza eventos globales activos',
    stats: [
      { emoji: '🛰️', value: '6+', label: 'Capas NASA' },
      { emoji: '🌍', value: 'LIVE', label: 'Tiempo real' },
      { emoji: '✈️', value: '∞', label: 'Aeronaves' },
      { emoji: '🌋', value: '24/7', label: 'Monitoreo sísmico' },
    ],
    features: [
      { emoji: '🛰️', title: 'Terra MODIS', desc: 'Imágenes satelitales de alta resolución de NASA.' },
      { emoji: '💧', title: 'Aqua MODIS', desc: 'Capas de agua y humedad del satélite Aqua.' },
      { emoji: '🌃', title: 'VIIRS Night', desc: 'Visualización nocturna de luces urbanas.' },
      { emoji: '🔥', title: 'Fire Thermal', desc: 'Detección de incendios activos con imágenes térmicas.' },
      { emoji: '❄️', title: 'Snow Cover', desc: 'Monitoreo global de cobertura de nieve.' },
      { emoji: '🌫️', title: 'Aerosol AOD', desc: 'Medición de aerosoles y calidad del aire.' },
      { emoji: '✈️', title: 'Aircraft Tracking', desc: 'Rastreo de aeronaves en tiempo real.' },
      { emoji: '🌋', title: 'Monitor Sísmico', desc: 'Terremotos y actividad sísmica en vivo.' },
      { emoji: '📐', title: 'Herramientas', desc: 'Medición de distancia y área en mapa.' },
    ],
  },
  fr: {
    badge: 'SSociety VIEW — Plateforme d\'Intelligence Terrestre',
    title: 'Surveillance globale de la Terre en temps réel par satellite',
    desc: 'Plateforme complète avec couches satellites NASA, détection incendies, neige, aérosols, suivi aéronefs et surveillance sismique — tout en direct.',
    cta: '🌍 Explorer la Terre →',
    guideTitle: 'Ce que la plateforme inclut',
    guide1: 'Couches Satellites: Terra MODIS, Aqua MODIS, VIIRS Night, Fire Thermal, Snow Cover, Aerosol AOD',
    guide2: 'Outils Live: Suivi aéronefs, surveillance sismique, mesure et géolocalisation en temps réel',
    guide3: 'Time Machine: Remontez 30 jours dans le passé, comparez les couches et visualisez les événements',
    stats: [
      { emoji: '🛰️', value: '6+', label: 'Couches NASA' },
      { emoji: '🌍', value: 'LIVE', label: 'Temps réel' },
      { emoji: '✈️', value: '∞', label: 'Aéronefs' },
      { emoji: '🌋', value: '24/7', label: 'Surveillance sismique' },
    ],
    features: [
      { emoji: '🛰️', title: 'Terra MODIS', desc: 'Images satellites haute résolution de NASA.' },
      { emoji: '💧', title: 'Aqua MODIS', desc: 'Couches d\'eau et d\'humidité du satellite Aqua.' },
      { emoji: '🌃', title: 'VIIRS Night', desc: 'Visualisation nocturne des lumières urbaines.' },
      { emoji: '🔥', title: 'Fire Thermal', desc: 'Détection d\'incendies actifs par imagerie thermique.' },
      { emoji: '❄️', title: 'Snow Cover', desc: 'Surveillance globale de la couverture neigeuse.' },
      { emoji: '🌫️', title: 'Aerosol AOD', desc: 'Mesure des aérosols et qualité de l\'air.' },
      { emoji: '✈️', title: 'Suivi Aéronefs', desc: 'Suivi des aéronefs en temps réel.' },
      { emoji: '🌋', title: 'Surveillance Sismique', desc: 'Séismes et activité sismique en direct.' },
      { emoji: '📐', title: 'Outils de Mesure', desc: 'Mesure de distance et surface sur carte.' },
    ],
  },
  it: {
    badge: 'SSociety VIEW — Piattaforma di Intelligence Terrestre',
    title: 'Monitoraggio globale della Terra in tempo reale via satellite',
    desc: 'Piattaforma completa con livelli satellitari NASA, rilevamento incendi, neve, aerosol, tracking aerei e monitoraggio sismico — tutto live.',
    cta: '🌍 Esplora la Terra →',
    guideTitle: 'Cosa include la piattaforma',
    guide1: 'Livelli Satellitari: Terra MODIS, Aqua MODIS, VIIRS Night, Fire Thermal, Snow Cover, Aerosol AOD',
    guide2: 'Strumenti Live: Tracking aerei, monitoraggio sismico, misurazione e geolocalizzazione in tempo reale',
    guide3: 'Time Machine: Viaggia 30 giorni nel passato, confronta livelli e visualizza eventi globali',
    stats: [
      { emoji: '🛰️', value: '6+', label: 'Livelli NASA' },
      { emoji: '🌍', value: 'LIVE', label: 'Tempo reale' },
      { emoji: '✈️', value: '∞', label: 'Aerei tracciati' },
      { emoji: '🌋', value: '24/7', label: 'Monitoraggio sismico' },
    ],
    features: [
      { emoji: '🛰️', title: 'Terra MODIS', desc: 'Immagini satellitari ad alta risoluzione da NASA.' },
      { emoji: '💧', title: 'Aqua MODIS', desc: 'Livelli di acqua e umidità dal satellite Aqua.' },
      { emoji: '🌃', title: 'VIIRS Night', desc: 'Visualizzazione notturna delle luci urbane.' },
      { emoji: '🔥', title: 'Fire Thermal', desc: 'Rilevamento incendi attivi con immagini termiche.' },
      { emoji: '❄️', title: 'Snow Cover', desc: 'Monitoraggio globale della copertura nevosa.' },
      { emoji: '🌫️', title: 'Aerosol AOD', desc: 'Misurazione aerosol e qualità dell\'aria.' },
      { emoji: '✈️', title: 'Aircraft Tracking', desc: 'Tracciamento aerei in tempo reale.' },
      { emoji: '🌋', title: 'Monitor Sismico', desc: 'Terremoti e attività sismica live.' },
      { emoji: '📐', title: 'Strumenti', desc: 'Misurazione distanza e superficie su mappa.' },
    ],
  },
  de: {
    badge: 'SSociety VIEW — Erdbeobachtungsplattform',
    title: 'Globale Erdüberwachung in Echtzeit mit Satellitenbildern',
    desc: 'Komplette Plattform mit NASA-Satellitenschichten, Branderkennung, Schnee, Aerosole, Flugzeugverfolgung und seismische Überwachung — alles live.',
    cta: '🌍 Erde erkunden →',
    guideTitle: 'Was die Plattform beinhaltet',
    guide1: 'Satellitenschichten: Terra MODIS, Aqua MODIS, VIIRS Night, Fire Thermal, Snow Cover, Aerosol AOD',
    guide2: 'Live-Tools: Flugzeugverfolgung, seismische Überwachung, Messung und Geolokalisierung in Echtzeit',
    guide3: 'Zeitmaschine: Reise 30 Tage in die Vergangenheit, vergleiche Schichten und visualisiere globale Ereignisse',
    stats: [
      { emoji: '🛰️', value: '6+', label: 'NASA-Schichten' },
      { emoji: '🌍', value: 'LIVE', label: 'Echtzeit' },
      { emoji: '✈️', value: '∞', label: 'Flugzeuge' },
      { emoji: '🌋', value: '24/7', label: 'Seismisch' },
    ],
    features: [
      { emoji: '🛰️', title: 'Terra MODIS', desc: 'Hochauflösende Satellitenbilder von NASA.' },
      { emoji: '💧', title: 'Aqua MODIS', desc: 'Wasser- und Feuchtigkeitsschichten.' },
      { emoji: '🌃', title: 'VIIRS Night', desc: 'Nachtansicht der Stadtlichter aus dem All.' },
      { emoji: '🔥', title: 'Fire Thermal', desc: 'Erkennung aktiver Brände mit Wärmebildern.' },
      { emoji: '❄️', title: 'Snow Cover', desc: 'Globale Schneebedeckungsüberwachung.' },
      { emoji: '🌫️', title: 'Aerosol AOD', desc: 'Aerosoldichte-Messung und Luftqualität.' },
      { emoji: '✈️', title: 'Flugzeug-Tracking', desc: 'Echtzeit-Flugzeugverfolgung.' },
      { emoji: '🌋', title: 'Seismischer Monitor', desc: 'Live-Erdbeben und seismische Aktivität.' },
      { emoji: '📐', title: 'Messwerkzeuge', desc: 'Entfernungs- und Flächenmessung.' },
    ],
  },
  ar: {
    badge: 'SSociety VIEW — منصة استخبارات الأرض',
    title: 'مراقبة الأرض العالمية في الوقت الفعلي عبر الأقمار الصناعية',
    desc: 'منصة كاملة مع طبقات أقمار ناسا الصناعية، كشف الحرائق، الثلوج، الهباء الجوي، تتبع الطائرات والرصد الزلزالي — كل شيء مباشر.',
    cta: '🌍 استكشف الأرض ←',
    guideTitle: 'ما تتضمنه المنصة',
    guide1: 'طبقات فضائية: Terra MODIS, Aqua MODIS, VIIRS Night, Fire Thermal, Snow Cover, Aerosol AOD',
    guide2: 'أدوات مباشرة: تتبع الطائرات، رصد زلزالي، قياس المسافات وتحديد الموقع',
    guide3: 'آلة الزمن: سافر 30 يوماً في الماضي، قارن الطبقات وشاهد الأحداث العالمية',
    stats: [
      { emoji: '🛰️', value: '6+', label: 'طبقات ناسا' },
      { emoji: '🌍', value: 'LIVE', label: 'بيانات فورية' },
      { emoji: '✈️', value: '∞', label: 'طائرات متتبعة' },
      { emoji: '🌋', value: '24/7', label: 'رصد زلزالي' },
    ],
    features: [
      { emoji: '🛰️', title: 'Terra MODIS', desc: 'صور أقمار صناعية عالية الدقة من ناسا.' },
      { emoji: '💧', title: 'Aqua MODIS', desc: 'طبقات المياه والرطوبة.' },
      { emoji: '🌃', title: 'VIIRS Night', desc: 'رؤية ليلية لأضواء المدن من الفضاء.' },
      { emoji: '🔥', title: 'Fire Thermal', desc: 'كشف الحرائق النشطة بالتصوير الحراري.' },
      { emoji: '❄️', title: 'Snow Cover', desc: 'مراقبة الغطاء الثلجي العالمي.' },
      { emoji: '🌫️', title: 'Aerosol AOD', desc: 'قياس كثافة الهباء وجودة الهواء.' },
      { emoji: '✈️', title: 'تتبع الطائرات', desc: 'تتبع الطائرات في الوقت الفعلي.' },
      { emoji: '🌋', title: 'رصد زلزالي', desc: 'زلازل ونشاط زلزالي مباشر.' },
      { emoji: '📐', title: 'أدوات القياس', desc: 'قياس المسافة والمساحة على الخريطة.' },
    ],
  },
};

const SSocietyViewSection = () => {
  const [guideOpen, setGuideOpen] = useState(false);
  const { language } = useLanguage();
  const c = i18n[language] || i18n.en;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      className="max-w-6xl mx-auto px-3 sm:px-4 py-8 sm:py-10 lg:py-14"
    >
      <div className="relative bg-[#040810] border border-teal-500/15 rounded-2xl sm:rounded-[2.5rem] overflow-hidden">
        <div className="h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent animate-pulse" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-500/8 rounded-full blur-[100px]" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/5 rounded-full blur-[100px]" />

        <div className="relative p-5 sm:p-8 lg:p-12">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-5 sm:mb-6 lg:mb-8">
            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br from-teal-400 to-cyan-600 flex items-center justify-center shrink-0">
              <span className="text-2xl sm:text-3xl lg:text-4xl">🌍</span>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl lg:text-4xl font-extrabold text-teal-50 leading-tight">{c.badge}</h2>
              <p className="text-sm sm:text-base lg:text-lg text-teal-300 font-medium mt-1">{c.title}</p>
            </div>
          </div>

          <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-teal-500/10 mb-6 sm:mb-8 bg-black/50">
            <div className="bg-[#060d12] border-b border-teal-500/10 px-4 py-2.5 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex-1 text-center">
                <span className="text-xs text-teal-300/60 font-mono">ssociety-view.lovable.app</span>
              </div>
            </div>
            <div className="aspect-video">
              <iframe src="https://ssociety-view.lovable.app" className="w-full h-full border-0" title="SSociety View Live" loading="lazy" sandbox="allow-scripts allow-same-origin" />
            </div>
          </div>

          <p className="text-teal-200/60 text-[13px] sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8">{c.desc}</p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 mb-6 sm:mb-8">
            {c.stats.map((s, i) => (
              <div key={i} className="text-center p-3 sm:p-4 lg:p-5 rounded-xl bg-teal-500/5 border border-teal-500/10">
                <div className="text-lg sm:text-xl mb-1">{s.emoji}</div>
                <div className="text-lg sm:text-2xl lg:text-3xl font-extrabold text-teal-400">{s.value}</div>
                <div className="text-[10px] sm:text-xs lg:text-sm text-teal-300/60 mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
            {c.features.map((f, i) => (
              <div key={i} className="flex items-start gap-3 p-3 sm:p-4 lg:p-5 rounded-xl border border-teal-500/10 hover:border-teal-500/25 transition-colors bg-teal-500/[0.03]">
                <span className="text-lg sm:text-xl lg:text-2xl">{f.emoji}</span>
                <div>
                  <div className="text-[13px] sm:text-sm lg:text-base font-semibold text-teal-50">{f.title}</div>
                  <div className="text-xs lg:text-sm text-teal-300/60 leading-relaxed">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <button onClick={() => setGuideOpen(!guideOpen)}
            className="w-full flex items-center justify-between p-3.5 sm:p-4 lg:p-5 rounded-xl bg-teal-500/5 border border-teal-500/10 mt-6 mb-5 sm:mb-6 text-teal-50 font-medium text-sm sm:text-base lg:text-lg">
            {c.guideTitle}
            <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform ${guideOpen ? 'rotate-180' : ''}`} />
          </button>
          {guideOpen && (
            <div className="p-4 sm:p-6 rounded-xl bg-teal-500/5 border border-teal-500/10 mb-5 sm:mb-6 text-[13px] sm:text-sm lg:text-base text-teal-300/60 space-y-3 leading-relaxed">
              <p><strong className="text-teal-50">{c.guide1.split(':')[0]}:</strong> {c.guide1.split(':').slice(1).join(':')}</p>
              <p><strong className="text-teal-50">{c.guide2.split(':')[0]}:</strong> {c.guide2.split(':').slice(1).join(':')}</p>
              <p><strong className="text-teal-50">{c.guide3.split(':')[0]}:</strong> {c.guide3.split(':').slice(1).join(':')}</p>
            </div>
          )}

          <a href="https://ssociety-view.lovable.app" target="_blank" rel="noopener noreferrer"
            className="block w-full text-center py-3.5 sm:py-4 lg:py-5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-bold text-base lg:text-lg hover:opacity-90 transition-opacity active:scale-[0.98]">
            {c.cta}
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default SSocietyViewSection;
