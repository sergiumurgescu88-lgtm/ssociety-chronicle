import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import { categories } from '@/data/categories';
import { projects } from '@/data/projects';
import { useLanguage } from '@/context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const catLabelKey: Record<string, string> = {
  resto: 'catResto', ai: 'catAI', mkt: 'catMkt', energy: 'catEnergy',
  ops: 'catOps', biz: 'catBiz', life: 'catLife', security: 'catSecurity',
};

interface MobileSidebarProps {
  onProjectClick: (id: string) => void;
}

const MobileSidebar = ({ onProjectClick }: MobileSidebarProps) => {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  const handleProject = (id: string) => {
    onProjectClick(id);
    setOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="lg:hidden fixed bottom-6 right-6 z-[60] w-14 h-14 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-2xl shadow-indigo-500/30"
      >
        <Menu className="w-6 h-6" />
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: '-100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed inset-y-0 left-0 z-[70] w-[85%] max-w-[320px] bg-hub-section overflow-y-auto"
            >
              <div className="flex items-center justify-between p-5 border-b border-white/10">
                <h2 className="font-extrabold text-hub-text text-lg">SSociety HUB</h2>
                <div className="flex items-center gap-2">
                  <LanguageSwitcher />
                  <button onClick={() => setOpen(false)} className="p-2 rounded-full hover:bg-white/5">
                    <X className="w-5 h-5 text-hub-muted" />
                  </button>
                </div>
              </div>

              <div className="p-5 space-y-6">
                {categories.filter(c => c.id !== 'all').map(cat => {
                  const catProjects = projects.filter(p => p.category === cat.id);
                  const label = t[catLabelKey[cat.id]] || cat.label;
                  return (
                    <div key={cat.id}>
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`text-xs px-2.5 py-1 rounded-full ${cat.color} text-white font-medium`}>
                          {cat.emoji} {label}
                        </span>
                        <span className="text-xs text-hub-muted">{catProjects.length}</span>
                      </div>
                      <div className="space-y-1">
                        {catProjects.map(p => (
                          <button
                            key={p.id}
                            onClick={() => handleProject(p.id)}
                            className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group text-left"
                          >
                            <span className="w-9 h-9 flex items-center justify-center bg-white/5 rounded-xl text-lg">{p.emoji}</span>
                            <div className="flex-1 min-w-0">
                              <div className="text-sm font-bold text-hub-text truncate">{p.name}</div>
                              <div className="flex items-center gap-1.5">
                                <span className={`w-1.5 h-1.5 rounded-full ${
                                  p.status === 'live' ? 'bg-emerald-400' : p.status === 'demo' ? 'bg-amber-400' : 'bg-hub-muted'
                                }`} />
                                <span className="text-xs text-hub-muted">{p.status}</span>
                              </div>
                            </div>
                            <ChevronRight className="w-4 h-4 text-hub-muted opacity-0 group-hover:opacity-100 transition-opacity" />
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="p-5">
                <div className="p-4 rounded-2xl bg-indigo-500/5 text-center text-sm text-hub-muted">
                  {t.footerClick}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileSidebar;
