import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const InstantMenuSection = () => {
  const [docsOpen, setDocsOpen] = useState(false);

  const features = [
    { emoji: '📝', title: 'Text-to-Dish', desc: 'Generează imagini din descrieri text' },
    { emoji: '✨', title: 'Photo Enhancement', desc: 'Îmbunătățire automată a fotografiilor' },
    { emoji: '🎨', title: 'Logo Branding', desc: 'Integrare identitate vizuală brand' },
    { emoji: '📸', title: 'Live Capture', desc: 'Captură și editare în timp real' },
    { emoji: '📦', title: 'Bulk Import', desc: 'Import masiv din Excel sau CSV' },
    { emoji: '🎙️', title: 'Voice Mode', desc: 'Descrie preparatul vocal' },
    { emoji: '🔄', title: 'Multi-Platform Export', desc: 'Export pentru social media și meniu' },
    { emoji: '✏️', title: 'Edit Control', desc: 'Control complet asupra rezultatelor' },
  ];

  const actions = ['Upload Menu', 'Logo', 'Location', 'Bulk Photos', 'Voice Mode', 'Import Excel'];

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
          {/* Brand bar */}
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
          <h2 className="text-xl sm:text-2xl lg:text-4xl font-extrabold text-amber-50 mb-2 lg:mb-3 leading-tight">Instant Menu Pictures</h2>
          <p className="text-amber-200/60 text-[13px] sm:text-sm lg:text-lg leading-relaxed mb-5 sm:mb-6 lg:mb-8">Generare automată de imagini Michelin-quality pentru meniuri de restaurant din text simplu.</p>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-5 sm:mb-6 lg:mb-8">
            {actions.map(a => (
              <span key={a} className="px-2.5 sm:px-3 lg:px-4 py-1.5 lg:py-2 rounded-full bg-amber-500/5 border border-amber-500/15 text-[11px] sm:text-xs lg:text-sm text-amber-300/60">{a}</span>
            ))}
            <button className="px-3 sm:px-4 py-1.5 lg:py-2 rounded-full bg-amber-600 text-white text-[11px] sm:text-xs lg:text-sm font-medium hover:bg-amber-500 transition-colors">Process Menu</button>
            <button className="px-3 sm:px-4 py-1.5 lg:py-2 rounded-full bg-yellow-600 text-white text-[11px] sm:text-xs lg:text-sm font-medium hover:bg-yellow-500 transition-colors">Capture Live Dish</button>
          </div>

          {/* YouTube embed */}
          <div className="aspect-video rounded-xl sm:rounded-2xl overflow-hidden bg-black/50 border border-amber-500/10 mb-6 sm:mb-8">
            <iframe
              src="https://www.youtube.com/embed/JjeXG0TIus8"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Instant Menu Pictures"
            />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 mb-6 sm:mb-8">
            {[
              { value: '∞', label: 'Preparate', color: 'text-amber-400' },
              { value: '4K', label: 'Rezoluție', color: 'text-yellow-400' },
              { value: '0€', label: 'Sesiune foto', color: 'text-amber-300' },
              { value: '60s', label: 'Per imagine', color: 'text-yellow-300' },
            ].map((s, i) => (
              <div key={i} className="text-center p-3 sm:p-4 lg:p-5 rounded-xl bg-amber-500/5 border border-amber-500/10">
                <div className={`text-lg sm:text-2xl lg:text-3xl font-extrabold ${s.color}`}>{s.value}</div>
                <div className="text-[10px] sm:text-xs lg:text-sm text-amber-200/50 mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
            {features.map((f, i) => (
              <div key={i} className="flex items-start gap-3 p-3 sm:p-4 lg:p-5 rounded-xl border border-amber-500/10 hover:border-amber-500/25 transition-colors bg-amber-500/[0.03]">
                <span className="text-lg sm:text-xl lg:text-2xl">{f.emoji}</span>
                <div>
                  <div className="text-[13px] sm:text-sm lg:text-base font-semibold text-amber-50">{f.title}</div>
                  <div className="text-xs lg:text-sm text-amber-200/50 leading-relaxed">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Docs accordion */}
          <button
            onClick={() => setDocsOpen(!docsOpen)}
            className="w-full flex items-center justify-between p-3.5 sm:p-4 lg:p-5 rounded-xl bg-amber-500/5 border border-amber-500/10 mt-6 mb-5 sm:mb-6 text-amber-50 font-medium text-sm sm:text-base lg:text-lg"
          >
            Documentație completă
            <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform ${docsOpen ? 'rotate-180' : ''}`} />
          </button>
          {docsOpen && (
            <div className="p-4 sm:p-6 rounded-xl bg-amber-500/5 border border-amber-500/10 mb-5 sm:mb-6 text-[13px] sm:text-sm lg:text-base text-amber-200/50 space-y-3 leading-relaxed">
              <p><strong className="text-amber-50">Cum funcționează:</strong> 1. Upload meniu text → 2. AI analizează → 3. Generează imagini → 4. Review → 5. Export</p>
              <p><strong className="text-amber-50">Formate input:</strong> Text simplu, PDF meniu, Excel cu preparate, Dicție vocală</p>
              <p><strong className="text-amber-50">Output:</strong> JPEG 4K, PNG transparent, WebP optimizat, Social media crops, Print-ready</p>
            </div>
          )}

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3.5 sm:p-4 lg:p-5 rounded-xl bg-amber-500/5 border border-amber-500/10">
            <span className="text-xs sm:text-sm lg:text-base text-amber-200/50">Documentație · API Reference</span>
            <button className="px-4 lg:px-6 py-2 lg:py-3 rounded-xl bg-gradient-to-r from-amber-600 to-yellow-600 text-white text-sm lg:text-base font-medium hover:from-amber-500 hover:to-yellow-500 transition-all w-full sm:w-auto text-center">
              Încearcă gratuit →
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default InstantMenuSection;
