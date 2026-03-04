import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, Activity, Hammer, Layers, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { projects } from '@/data/projects';
import { categories } from '@/data/categories';

const StatsOverview = () => {
  const { t } = useLanguage();
  const [expanded, setExpanded] = useState<number | null>(null);

  const total = projects.length;
  const active = projects.filter(p => p.status === 'live' || p.status === 'demo').length;
  const inProgress = projects.filter(p => p.status === 'under-construction').length;
  const catCount = categories.length - 1;

  const stats = [
    { icon: Rocket, value: total, label: t.statsTotal, sublabel: t.projects, color: 'text-white', desc: t.statsTotalDesc },
    { icon: Activity, value: active, label: t.statsActive, sublabel: t.live, color: 'text-emerald-400', desc: t.statsActiveDesc },
    { icon: Hammer, value: inProgress, label: t.statsWork, sublabel: t.statsWork, color: 'text-amber-400', desc: t.statsWorkDesc },
    { icon: Layers, value: catCount, label: t.statsCategories, sublabel: t.projects, color: 'text-indigo-400', desc: t.statsCategoriesDesc },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      className="max-w-5xl mx-auto px-3 sm:px-4 py-6 sm:py-8 lg:py-12"
    >
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            onClick={() => setExpanded(expanded === i ? null : i)}
            className="bg-hub-card border border-white/10 rounded-xl lg:rounded-2xl p-4 sm:p-5 lg:p-6 cursor-pointer hover:border-indigo-500/30 transition-colors"
          >
            <div className="flex items-center justify-between mb-1 lg:mb-2">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <s.icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 ${s.color}`} />
                <span className="text-[10px] sm:text-xs lg:text-sm text-hub-muted uppercase tracking-wider font-medium">{s.label}</span>
              </div>
              <ChevronDown className={`w-3.5 h-3.5 sm:w-4 sm:h-4 text-hub-muted transition-transform ${expanded === i ? 'rotate-180' : ''}`} />
            </div>
            <div className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold ${s.color} mb-1`}>{s.value}</div>
            <div className="text-xs sm:text-sm lg:text-base text-hub-muted">{s.sublabel}</div>
            <AnimatePresence>
              {expanded === i && (
                <motion.p
                  initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                  className="text-xs lg:text-sm text-hub-muted mt-2 overflow-hidden leading-relaxed"
                >
                  {s.desc}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default StatsOverview;
