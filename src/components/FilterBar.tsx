import { Category } from '@/data/categories';
import { useLanguage } from '@/context/LanguageContext';
import { projects } from '@/data/projects';
import { categories } from '@/data/categories';

const categoryColorMap: Record<string, string> = {
  resto: 'bg-indigo-600', ai: 'bg-cyan-500', mkt: 'bg-amber-500', energy: 'bg-emerald-500',
  ops: 'bg-violet-500', biz: 'bg-orange-500', life: 'bg-pink-500', security: 'bg-red-500',
};

const catLabelKey: Record<string, string> = {
  resto: 'catResto', ai: 'catAI', mkt: 'catMkt', energy: 'catEnergy',
  ops: 'catOps', biz: 'catBiz', life: 'catLife', security: 'catSecurity',
};

interface FilterBarProps {
  activeCategory: Category;
  setActiveCategory: (c: Category) => void;
}

const FilterBar = ({ activeCategory, setActiveCategory }: FilterBarProps) => {
  const { t } = useLanguage();

  return (
    <div className="sticky top-0 z-50 bg-hub-bg/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-3 sm:py-4 lg:py-5">
        <div className="flex gap-2 sm:gap-3 overflow-x-auto no-scrollbar pb-1">
          {categories.map(cat => {
            const count = cat.id === 'all' ? projects.length : projects.filter(p => p.category === cat.id).length;
            const isActive = activeCategory === cat.id;
            const label = cat.id === 'all' ? t.filterAll : (t[catLabelKey[cat.id]] || cat.label);
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-1.5 sm:gap-2.5 px-3 sm:px-4 lg:px-5 py-2 lg:py-2.5 rounded-full border whitespace-nowrap text-xs sm:text-sm lg:text-base font-medium transition-colors min-h-[40px] ${
                  isActive
                    ? `${cat.id === 'all' ? 'bg-gradient-to-r from-indigo-500 to-cyan-500' : categoryColorMap[cat.id] || ''} text-white border-transparent`
                    : 'bg-white/5 text-hub-muted hover:text-hub-text border-white/10'
                }`}
              >
                <span>{cat.emoji}</span>
                <span>{label}</span>
                <span className={`text-[10px] sm:text-xs lg:text-sm px-1.5 py-0.5 rounded-full ${isActive ? 'bg-white/20' : 'bg-white/10'}`}>{count}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
