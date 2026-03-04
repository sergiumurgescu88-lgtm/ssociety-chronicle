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
      className="max-w-6xl mx-auto px-3 sm:px-4 py-8 sm:py-10"
    >
      <div className="relative bg-[#0a0a18] border border-violet-500/15 rounded-2xl sm:rounded-[2.5rem] overflow-hidden">
        <div className="h-1 bg-gradient-to-r from-violet-500 via-emerald-400 to-amber-400 animate-pulse" />

        <div className="relative p-5 sm:p-8 lg:p-12">
          {/* Brand bar */}
          <div className="flex items-center gap-2 sm:gap-3 mb-5 sm:mb-6 p-2.5 sm:p-3 rounded-xl bg-white/5 border border-white/5">
            <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
            <span className="text-xs sm:text-sm font-bold text-hub-text">MrDelivery.AIStudio</span>
            <span className="text-[10px] sm:text-xs px-2 py-0.5 rounded bg-violet-500/20 text-violet-400">ON</span>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
            <span className="text-2xl sm:text-3xl">🍽️</span>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              <span className="text-[10px] sm:text-xs px-2 py-0.5 rounded bg-violet-500/10 text-violet-400">Michelin Cinematic Engine</span>
              <span className="text-[10px] sm:text-xs px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400">AI Visual Studio</span>
            </div>
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-hub-text mb-2 leading-tight">Instant Menu Pictures</h2>
          <p className="text-hub-muted text-[13px] sm:text-sm leading-relaxed mb-5 sm:mb-6">Generare automată de imagini Michelin-quality pentru meniuri de restaurant din text simplu.</p>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-5 sm:mb-6">
            {actions.map(a => (
              <span key={a} className="px-2.5 sm:px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] sm:text-xs text-hub-muted">{a}</span>
            ))}
            <button className="px-3 sm:px-4 py-1.5 rounded-full bg-violet-600 text-white text-[11px] sm:text-xs font-medium">Process Menu</button>
            <button className="px-3 sm:px-4 py-1.5 rounded-full bg-emerald-600 text-white text-[11px] sm:text-xs font-medium">Capture Live Dish</button>
          </div>

          {/* YouTube embed */}
          <div className="aspect-video rounded-xl sm:rounded-2xl overflow-hidden bg-black/50 border border-white/5 mb-6 sm:mb-8">
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
              { value: '∞', label: 'Preparate', color: 'text-violet-400' },
              { value: '4K', label: 'Rezoluție', color: 'text-teal-400' },
              { value: '0€', label: 'Sesiune foto', color: 'text-amber-400' },
              { value: '60s', label: 'Per imagine', color: 'text-pink-400' },
            ].map((s, i) => (
              <div key={i} className="text-center p-3 sm:p-4 rounded-xl bg-white/5 border border-white/5">
                <div className={`text-lg sm:text-2xl font-extrabold ${s.color}`}>{s.value}</div>
                <div className="text-[10px] sm:text-xs text-hub-muted mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-6 sm:mb-8">
            {features.map((f, i) => (
              <div key={i} className="flex items-start gap-3 p-3 sm:p-4 rounded-xl border border-white/5 hover:border-violet-500/20 transition-colors">
                <span className="text-lg sm:text-xl">{f.emoji}</span>
                <div>
                  <div className="text-[13px] sm:text-sm font-semibold text-hub-text">{f.title}</div>
                  <div className="text-xs text-hub-muted leading-relaxed">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Docs accordion */}
          <button
            onClick={() => setDocsOpen(!docsOpen)}
            className="w-full flex items-center justify-between p-3.5 sm:p-4 rounded-xl bg-violet-500/5 border border-violet-500/10 mb-5 sm:mb-6 text-hub-text font-medium text-sm sm:text-base"
          >
            Documentație completă
            <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform ${docsOpen ? 'rotate-180' : ''}`} />
          </button>
          {docsOpen && (
            <div className="p-4 sm:p-6 rounded-xl bg-violet-500/5 border border-violet-500/10 mb-5 sm:mb-6 text-[13px] sm:text-sm text-hub-muted space-y-3 leading-relaxed">
              <p><strong className="text-hub-text">Cum funcționează:</strong> 1. Upload meniu text → 2. AI analizează → 3. Generează imagini → 4. Review → 5. Export</p>
              <p><strong className="text-hub-text">Formate input:</strong> Text simplu, PDF meniu, Excel cu preparate, Dicție vocală</p>
              <p><strong className="text-hub-text">Output:</strong> JPEG 4K, PNG transparent, WebP optimizat, Social media crops, Print-ready</p>
            </div>
          )}

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3.5 sm:p-4 rounded-xl bg-white/5 border border-white/5">
            <span className="text-xs sm:text-sm text-hub-muted">Documentație · API Reference</span>
            <button className="px-4 py-2 rounded-xl bg-violet-600 text-white text-sm font-medium hover:bg-violet-500 transition-colors w-full sm:w-auto text-center">
              Încearcă gratuit →
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default InstantMenuSection;
