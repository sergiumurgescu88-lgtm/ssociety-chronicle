import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const WhatsAllSection = () => {
  const [guideOpen, setGuideOpen] = useState(false);

  const features = [
    { emoji: '🔄', title: 'Automatizare 24/7', desc: 'Funcționează non-stop fără intervenție' },
    { emoji: '🛡️', title: 'Anti-Ban Protection', desc: 'Protecție avansată contra suspendării' },
    { emoji: '📊', title: 'Analytics Real-time', desc: 'Statistici live pentru fiecare campanie' },
    { emoji: '🎯', title: 'Targeting Precis', desc: 'Filtrare audiență pe criterii multiple' },
    { emoji: '💬', title: 'Mesaje Personalizate', desc: 'Template-uri dinamice cu variabile' },
    { emoji: '⏰', title: 'Programare Inteligentă', desc: 'Trimitere la ore optime de răspuns' },
    { emoji: '📱', title: 'Multi-Device', desc: 'Funcționează pe mai multe dispozitive' },
    { emoji: '🔗', title: 'API Integration', desc: 'Conectare cu CRM și alte sisteme' },
  ];

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
              <span className="text-xs lg:text-sm text-[#25D366] font-medium">Activ 24/7 — Automatizare completă</span>
              <h2 className="text-xl sm:text-2xl lg:text-4xl font-extrabold text-[#e8f5e9] leading-tight">WhatsAll Bot — Outreach automat pe WhatsApp</h2>
            </div>
          </div>

          <div className="aspect-video rounded-xl sm:rounded-2xl overflow-hidden bg-black/50 border border-[#25D366]/10 mb-6 sm:mb-8">
            <video className="w-full h-full object-cover" controls muted loop playsInline poster="">
              <source src="/videos/whatsall-prezentare.mp4" type="video/mp4" />
            </video>
          </div>

          <p className="text-[#e8f5e9] font-bold text-sm sm:text-base lg:text-xl mb-1.5 sm:mb-2">Automatizare completă pentru outreach B2B pe WhatsApp</p>
          <p className="text-[#a5d6a7] text-[13px] sm:text-sm lg:text-lg leading-relaxed mb-6 sm:mb-8">Trimite mii de mesaje personalizate cu comportament uman simulat — fără intervenție manuală.</p>

          <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8">
            {[
              { value: '360h', label: 'funcționare/lună' },
              { value: '~10', label: 'secunde/mesaj' },
              { value: '0€', label: 'cost suplimentar' },
            ].map((s, i) => (
              <div key={i} className="text-center p-3 sm:p-4 lg:p-5 rounded-xl bg-[#25D366]/5 border border-[#25D366]/10">
                <div className="text-lg sm:text-2xl lg:text-3xl font-extrabold text-[#25D366]">{s.value}</div>
                <div className="text-[10px] sm:text-xs lg:text-sm text-[#a5d6a7] mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
            {features.map((f, i) => (
              <div key={i} className="flex items-start gap-3 p-3 sm:p-4 lg:p-5 rounded-xl border border-[#25D366]/10 hover:border-[#25D366]/25 transition-colors bg-[#25D366]/[0.03]">
                <span className="text-lg sm:text-xl lg:text-2xl">{f.emoji}</span>
                <div>
                  <div className="text-[13px] sm:text-sm lg:text-base font-semibold text-[#e8f5e9]">{f.title}</div>
                  <div className="text-xs lg:text-sm text-[#a5d6a7] leading-relaxed">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => setGuideOpen(!guideOpen)}
            className="w-full flex items-center justify-between p-3.5 sm:p-4 lg:p-5 rounded-xl bg-[#25D366]/5 border border-[#25D366]/10 mt-6 mb-5 sm:mb-6 text-[#e8f5e9] font-medium text-sm sm:text-base lg:text-lg"
          >
            Quick Start Guide
            <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform ${guideOpen ? 'rotate-180' : ''}`} />
          </button>
          {guideOpen && (
            <div className="p-4 sm:p-6 rounded-xl bg-[#25D366]/5 border border-[#25D366]/10 mb-5 sm:mb-6 text-[13px] sm:text-sm lg:text-base text-[#a5d6a7] space-y-3 leading-relaxed">
              <p><strong className="text-[#e8f5e9]">Ce primești:</strong> Bot WhatsApp complet, dashboard analytics, template-uri mesaje, suport tehnic</p>
              <p><strong className="text-[#e8f5e9]">Instalare:</strong> 1. Creează cont → 2. Conectează WhatsApp → 3. Importă contacte → 4. Lansează campania</p>
              <p><strong className="text-[#e8f5e9]">Checklist:</strong> Număr WhatsApp Business, Listă contacte CSV, Texte mesaje, Interval trimitere configurat</p>
            </div>
          )}

          <a
            href="https://wild-bot-rho.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center py-3.5 sm:py-4 lg:py-5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-bold text-base lg:text-lg hover:opacity-90 transition-opacity active:scale-[0.98]"
          >
            Încearcă WhatsAll Bot →
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default WhatsAllSection;
