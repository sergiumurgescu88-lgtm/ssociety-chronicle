import { useState } from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { languages } from '@/data/translations';
import { useLanguage } from '@/context/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const current = languages.find(l => l.code === language) || languages[0];

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-2 rounded-full bg-hub-card border border-white/10 hover:border-indigo-500/40 transition-colors"
      >
        <Globe className="w-4 h-4 text-indigo-400" />
        <span className="text-lg">{current.flag}</span>
        <span className="hidden sm:inline text-sm text-hub-text">{current.label}</span>
        <ChevronDown className={`w-3 h-3 text-hub-muted transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-[60]" onClick={() => setOpen(false)} />
          <div className="absolute right-0 mt-2 w-48 bg-hub-card border border-white/10 rounded-2xl shadow-2xl z-[70] overflow-hidden py-1">
            {languages.map(lang => (
              <button
                key={lang.code}
                onClick={() => { setLanguage(lang.code); setOpen(false); }}
                className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                  language === lang.code ? 'bg-indigo-500/20 text-hub-text' : 'text-hub-muted hover:text-hub-text hover:bg-white/5'
                }`}
              >
                <span className="text-lg">{lang.flag}</span>
                <span>{lang.label}</span>
                {language === lang.code && <Check className="w-4 h-4 ml-auto text-indigo-400" />}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default LanguageSwitcher;
