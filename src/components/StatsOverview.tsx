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
    { icon: Rocket, value: total, label: t.statsTotal, color: 'text-white', desc: t.statsTotalDesc },
    { icon: Activity, value: active, label: t.statsActive, color: 'text-emerald-400', desc: t.statsActiveDesc },
    { icon: Hammer, value: inProgress, label: t.statsWork, color: 'text-amber-400', desc: t.statsWorkDesc },
    { icon: Layers, value: catCount, label: t.statsCategories, color: 'text-indigo-400', desc: t.statsCategoriesDesc },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      className="max-w-5xl mx-auto px-4 py-8"
    >
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            onClick={() => setExpanded(expanded === i ? null : i)}
            className="bg-hub-card border border-white/10 rounded-xl p-5 cursor-pointer hover:border-indigo-500/30 transition-colors"
          >
            <s.icon className={`w-6 h-6 ${s.color} mb-3`} />
            <div className={`text-3xl font-extrabold ${s.color}`}>{s.value}</div>
            <div className="text-sm text-hub-muted mt-1 flex items-center justify-between">
              {s.label}
              <ChevronDown className={`w-4 h-4 transition-transform ${expanded === i ? 'rotate-180' : ''}`} />
            </div>
            <AnimatePresence>
              {expanded === i && (
                <motion.p
                  initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                  className="text-xs text-hub-muted mt-2 overflow-hidden"
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
